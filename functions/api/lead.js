/* Cloudflare Pages Function — POST /api/lead
 *
 * Receives the contact form, gatekeeps spam (honeypot + Turnstile), validates,
 * then forwards to the Google Apps Script web app, which appends a row to the
 * leads Sheet AND emails info@streaque.com. No secret ever reaches the browser.
 *
 * Deploys automatically with the static site (Cloudflare Pages picks up
 * `functions/`). Only runs on Pages or `wrangler pages dev` — NOT `next dev`.
 *
 * Env (Cloudflare Pages → Settings → Environment variables):
 *   TURNSTILE_SECRET     — Turnstile secret key
 *   LEAD_WEBHOOK_URL     — Apps Script web-app URL
 *   LEAD_WEBHOOK_SECRET  — shared secret, also checked inside the Apps Script
 */

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
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
  if (!verifyData.success) return json({ ok: false, error: "turnstile_failed" }, 403);

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
