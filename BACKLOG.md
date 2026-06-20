# Streaque / Nia — Site Backlog

_Last updated: 2026-06-20 · Branch: `design-critique-fixes`_

Living list of what's left before this marketing site is launch-ready. Grouped by
priority. The "Verified done" section records what was audited so we don't
re-investigate it.

---

## 🔴 Blockers — must land before launch

### 1. Wire up the two contact forms
Both forms currently build a `mailto:` link, which only opens the visitor's mail
client — if they have none configured, **the lead is silently lost.**

- **Forms:**
  - `app/contact/ContactForm.jsx` — pilot inquiry → `info@streaque.com`
  - `app/security/SecurityContact.jsx` — security question → `clifton@streaque.com`
- **Constraint:** the site is `output: "export"` (pure static, served by Cloudflare
  Pages). There is **no Next.js server / API route** — the form must POST to an
  **external endpoint**.
- **Recommended approach:** a Cloudflare Pages Function / Worker that receives the
  POST → validates → emails a notification (Resend or MailChannels) → optionally
  stores the lead (spreadsheet/CRM). Add a honeypot field + **Cloudflare Turnstile**
  for spam. Replace the `mailto` `onSubmit` with a `fetch` POST and update the
  success state copy (drop the "we tried to open your email" language).
- **⛔ Decision needed:** where should leads land? (email only · + spreadsheet ·
  CRM like HubSpot)

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
