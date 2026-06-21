# Streaque / Nia — Site Backlog

_Last updated: 2026-06-20 · Branch: `design-critique-fixes`_

Living list of what's left before this marketing site is launch-ready. Grouped by
priority. The "Verified done" section records what was audited so we don't
re-investigate it.

---

## 🔴 Blockers — must land before launch

### 1. Wire up the contact form
The form builds a `mailto:` link — it only opens the visitor's mail client, and if
they have none configured **the lead is silently lost.**

- **One form now.** ✅ The security page's separate CTO form was consolidated into
  the main form (`/contact#form-security` pre-selects a "Security review" interest
  pill), so there's a single endpoint to wire.
- **Goal:** the form should land in **two places** — an email to `info@streaque.com`
  **and** a Google Sheet in the Workspace (backup / second copy).
- **Constraint:** deployed as a **Cloudflare Worker with static assets** (not Pages).
  `output: "export"` emits `out/`; a small Worker (`main`) handles the one dynamic
  route and serves the assets for everything else.

**Architecture:**

    form → POST /api/lead → Cloudflare Worker (worker/index.js)
            1. honeypot empty?  2. verify Turnstile  3. validate fields
            4. forward to Google Apps Script (LEAD_WEBHOOK_URL + shared secret)
                  → Apps Script: append row to the Sheet
                                 + MailApp email to info@streaque.com
    (any other route → env.ASSETS.fetch → the prerendered static site)

- The Worker is `main` in `wrangler.jsonc`, with `out/` bound as `env.ASSETS`. (An
  assets-only Worker can't hold secrets — adding the script is what makes the
  variables settable, which was the "Variables cannot be added…" blocker.)
- The Apps Script (in your Workspace) does **both** the Sheet append and the email
  via `MailApp` — no third-party email service or DNS setup needed.
- The Worker gatekeeps Turnstile + honeypot, so the Apps Script URL/secret never
  reach the browser.

**You provision:** a Turnstile widget (site + secret key) · an Apps Script web app
(URL + shared secret, bound to the Sheet) · Worker runtime secrets
(`TURNSTILE_SECRET`, `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET`) · the build-time
`NEXT_PUBLIC_TURNSTILE_SITE_KEY`.

**✅ Built** (`worker/index.js` + `wrangler.jsonc`, `docs/lead-apps-script.gs`,
`docs/form-wiring-setup.md`, and the ContactForm frontend: honeypot + Turnstile +
fetch + UTM/referrer capture). Email is sent by the Apps Script via `MailApp`; the
Sheet captures timestamp + source + UTM. The form falls back to `mailto:` until the
Turnstile site key is set, so the live form keeps working in the meantime.

**⏳ Remaining — provisioning + test (you):** follow
[`docs/form-wiring-setup.md`](docs/form-wiring-setup.md) — create the Turnstile
widget, deploy the Apps Script web app, **redeploy the Worker** (so it has a script),
then add the 3 runtime secrets (the public site key is already baked into the code)
— then submit on the deployed Worker to confirm a row lands in the Sheet and the
email reaches info@streaque.com.

### 2. Analytics — none installed _(verified)_
No GA / Plausible / PostHog / Vercel Analytics anywhere — the only `<script>` in
the layout is JSON-LD structured data. Recommend **Cloudflare Web Analytics**
(free, privacy-first, no cookie banner, native to Pages) or Plausible. Track page
views + form-submit conversions.

---

## 🟡 Design decisions — liked, just need to be settled

### 3. "Built different. On purpose."
Currently **live** on the home page (`app/page.jsx`, between "Two experiences" and
the advisor section). You like it — the open question is *fit*: does it earn its
spot, or overlap the Architecture / Tech & Privacy sections that cover related
ground? Options: keep where it is · move it later as a "why we're different"
capstone near Tech & Privacy · tighten it. → Next step: render it beside its
neighbors to judge fit.

### 4. Clarity items _(flagged earlier, low urgency)_
- Home hero one-liner — is "what Nia *is*" instantly clear to a first-time provost?
- "Product" vs "Why Nia" nav fork — confirm the split reads as distinct.
- Canonical vocabulary pass — same terms throughout (coaches vs agents; "LMS/SIS/CRM"
  vs "Canvas + SIS"; whole-student phrasing).
- Animated device demos show specific-looking numbers/notifications — confirm none
  reads as a real outcome claim.

---

## ⚪ Pre-launch checklist

- [ ] **Confirm canonical domain.** `lib/site.js` `SITE_URL` defaults to
  `https://streaque.com` (override per deploy via `NEXT_PUBLIC_SITE_URL`). Confirm
  streaque.com is the marketing domain and set the env var in Cloudflare Pages.
- [ ] **SOC 2 language** stays "planned / roadmap" until it's real (guardrail, not a
  task — just don't let it drift).
- [ ] **Real pilot results** — when retention numbers exist, decide: publish vs. the
  current "hear the results first → contact" flow.
- [ ] Clean up stale `/resources` mentions in the comments of `app/robots.js` and
  `app/sitemap.js` (the page doesn't exist).

---

## ✅ Verified done _(2026-06-20 audit)_

- **SEO metadata** — root title/description + per-page `metadata` on all 8 sub-pages.
- **Social cards** — OpenGraph + Twitter `summary_large_image`; `public/og-image.png`
  (1200×630, present).
- **Structured data** — JSON-LD `Organization` (with LinkedIn + YouTube profiles).
- **Icons** — `favicon.ico`, `icon.svg`, `apple-icon.png` + PWA `site.webmanifest`.
- **Crawl** — `robots.js` (allow all → sitemap) + `sitemap.js` (8 indexable routes)
  + custom `not-found.jsx` (404).
- **Responsive** — heroes verified at 320 / 360 / 375 / 768 across every page; hero
  CTAs stack full-width, nav CTA fits, security vault, home phone fan, and the
  contact-form sticky overlap all fixed.
