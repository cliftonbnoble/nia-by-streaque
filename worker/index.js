/* Cloudflare Worker entry (Workers Static Assets model).
 *
 * Serves the prerendered static site (out/, via the ASSETS binding) and handles
 * the one dynamic route: POST /api/lead — the contact-form lead capture.
 * Gatekeeps spam (honeypot + Turnstile), validates, then forwards to the Google
 * Apps Script that appends to the Sheet and emails info@streaque.com.
 *
 * Wired up in wrangler.jsonc:  "main": "worker/index.js" + assets.binding "ASSETS".
 * Secrets (set in the Worker's Variables & Secrets, or `wrangler secret put`):
 *   TURNSTILE_SECRET · LEAD_WEBHOOK_URL · LEAD_WEBHOOK_SECRET
 * See docs/form-wiring-setup.md.
 */

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

async function handleLead(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // 1. Honeypot — a hidden field real users never fill. Pretend success, drop it.
  if (body.company_website) return json({ ok: true });

  // 2. Turnstile — verify the token server-side.
  if (!body.turnstileToken) return json({ ok: false, error: "no_turnstile" }, 400);
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET,
      response: body.turnstileToken,
      remoteip: request.headers.get("CF-Connecting-IP") || "",
    }),
  });
  const verifyData = await verify.json().catch(() => ({ success: false }));
  if (!verifyData.success) {
    // surface Cloudflare's reason codes so misconfig is obvious:
    //   missing-input-secret  → TURNSTILE_SECRET unset / wrong name
    //   invalid-input-secret  → wrong secret value (or different widget than the site key)
    //   timeout-or-duplicate  → token already used / expired (retry with a fresh one)
    return json({ ok: false, error: "turnstile_failed", codes: verifyData["error-codes"] || [] }, 403);
  }

  // 3. Validate required fields.
  for (const f of ["name", "email", "institution", "role"]) {
    if (!body[f] || !String(body[f]).trim()) {
      return json({ ok: false, error: `missing_${f}` }, 400);
    }
  }

  // 4. Forward to the Apps Script (appends to the Sheet + emails info@).
  const payload = {
    secret: env.LEAD_WEBHOOK_SECRET,
    name: body.name,
    email: body.email,
    institution: body.institution,
    role: body.role,
    students: body.students || "",
    interest: body.interest || "",
    message: body.message || "",
    source: body.referrer || "",
    url: body.url || "",
    utm: body.utm || {},
  };
  try {
    const res = await fetch(env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const out = await res.text();
    let ok = res.ok;
    try { ok = JSON.parse(out).ok; } catch { /* Apps Script may wrap the body */ }
    if (!ok) throw new Error("webhook_rejected");
  } catch {
    return json({ ok: false, error: "delivery_failed" }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead") {
      if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);
      return handleLead(request, env);
    }
    // Renamed page: /nia → /why-nia (301, preserves SEO from the old indexed path).
    if (url.pathname === "/nia" || url.pathname === "/nia/") {
      return Response.redirect(`${url.origin}/why-nia`, 301);
    }
    // everything else → the prerendered static site (out/)
    return env.ASSETS.fetch(request);
  },
};
