# 🚀 Launch Checklist — Nia by Streaque

_Last updated: 2026-06-27 · On `main`, several commits ahead of the deployed `origin/main`._

The single, verifiable go-live list. Consolidates `GO-LIVE.md`, `docs/polish-tracker.md`,
`BACKLOG.md`, and `Streaque-Audit-04.md` — the design/copy/a11y/perf work in those is **shipped**;
what remains is **content, config, deploy, and a few facts only you can confirm**.

**Owner tags:** 🔧 code/copy (Claude does) · 🤔 your decision · 🔍 you confirm a real-world fact · ⚙️ ops/deploy · 🛡️ security

**Each item has a _Why_ and a _Verify_** so it can be checked off with confidence. Work top to bottom.

---

## 🚦 Launch blockers — must clear before the public link goes out

- [ ] **Deploy the latest build** ⚙️ — local `main` is several commits ahead of the deployed `origin/main`; the live site does **not** yet have the perf optimization (WebP mascots, content-visibility, off-screen phone pause) or the security hardening (CSP, worker input limits, postcss patch).
  - **Do:** `git push origin main`, `npm run build`, `npx wrangler deploy --keep-vars` (the `--keep-vars` is mandatory until the secrets are encrypted — see Security).
  - **Verify:** `curl -sI https://nia.clifton23.workers.dev/ | grep -i content-security-policy` returns the CSP; home shows the green "Live" glow + WebP mascot; no console errors.

- [ ] **Domain / canonical / social previews** ⚙️ — canonical, OG, and JSON-LD all point at `streaque.com`, but the live host is `nia.clifton23.workers.dev`. Until DNS cuts over, **every LinkedIn / X / iMessage share renders a broken preview image** (`og:image` → `streaque.com/og-image.png`, which is still the old WordPress site).
  - **Do (real fix):** point `streaque.com` DNS at the Worker (custom domain in the Cloudflare dashboard → Workers & Pages → your Worker → Settings → Domains & Routes).
  - **Do (stopgap if cutover slips):** set `NEXT_PUBLIC_SITE_URL` to `https://nia.clifton23.workers.dev` so canonical/OG resolve to the live host, then rebuild + redeploy.
  - **Verify:** paste the live URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and [opengraph.xyz](https://www.opengraph.xyz/) — the OG card + image render. `curl -s <url> | grep canonical` points at the live host.

- [ ] **Analytics token + consent gap** ⚙️🔧 — the Cloudflare Web Analytics beacon is scaffolded but `CF_ANALYTICS_TOKEN` is empty → **zero funnel measurement** on the one thing the site exists to do.
  - **Do:** get the beacon token (Cloudflare dash → Web Analytics → your site) and set `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` (build var) or hardcode it in `app/layout.js` like the Turnstile key.
  - **Settle the consent gap first** 🤔 — the cookie banner + privacy copy say analytics is consent-gated, but the beacon would currently load unconditionally. Either (a) confirm CF Web Analytics is fully cookieless and adjust the copy to match, or (b) gate the beacon render on stored consent (`analyticsAllowed()` in `lib/consent.js`).
  - **Verify:** after deploy, load the site → Network tab shows `beacon.min.js` from `static.cloudflareinsights.com` + a POST to `cloudflareinsights.com`; a hit appears in the CF Web Analytics dashboard. (Note: the CSP already allows these domains.)

- [ ] **Turnstile registered for the live domain** 🔍🛡️ — the contact form's Turnstile **site key is domain-locked**; it errors (`110200` / `400`) on any host not on its allow-list, which **silently breaks the form's bot-check in prod**.
  - **Do:** in the Cloudflare Turnstile widget settings, confirm the hostname list includes the production domain (`streaque.com`) **and** `nia.clifton23.workers.dev` (for reviewing on the Worker host).
  - **Verify:** submit the form on the live host — no Turnstile console error; a row lands in the Sheet.

- [ ] **Legal "Last updated" dates** 🔧 — `/privacy` and `/terms` read **"Last updated June 13, 2026"** (`app/privacy/page.jsx:98`, `app/terms/page.jsx:96`); `/accessibility` has none. Bump to the real go-live date so nothing reads stale on day one. _(Only bump if the policy text is current; if text changed, the date should reflect that.)_
  - **Verify:** all three legal pages show the launch date.

---

## 🔐 Security & headers (verify on the deploy that ships the CSP)

- [ ] **CSP — verify no violations on the live build** 🛡️ — a Content-Security-Policy was just added (`public/_headers`). The allowlist was grep-confirmed complete (self + Turnstile + CF Analytics + YouTube-nocookie), but a CSP can only be truly validated against the production build.
  - **Verify on first deploy:** open the browser console and load **every page**, then the **contact form** (Turnstile must render), then **play a video** (YouTube). Watch for any `Refused to load … because it violates the Content-Security-Policy` error. If one appears, add that source to the matching directive in `public/_headers` and redeploy. (Safe fallback: temporarily rename the header to `Content-Security-Policy-Report-Only` to log-without-blocking while tuning.)

- [ ] **Encrypt the 3 Worker secrets** ⚙️🛡️ — `TURNSTILE_SECRET`, `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET` are currently dashboard plaintext vars, which is **why every deploy needs `--keep-vars`** (a plain deploy wipes them and breaks the form).
  - **Do:** `npx wrangler secret put TURNSTILE_SECRET` (×3, see `docs/form-wiring-setup.md`), then delete the plaintext dashboard vars. After this, deploys no longer need `--keep-vars`.
  - **Verify:** `npx wrangler secret list` shows all 3; a plain `npx wrangler deploy` keeps the form working.

- [ ] **HSTS hardening at the custom-domain cutover** 🛡️ — once `streaque.com` is live and **all subdomains are confirmed HTTPS**, upgrade the HSTS header in `public/_headers` to `max-age=31536000; includeSubDomains; preload`, then submit to [hstspreload.org](https://hstspreload.org). _(Don't add `includeSubDomains`/`preload` while any subdomain might still serve HTTP — it's hard to undo.)_

- [x] **Security headers live** 🛡️ — HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` confirmed serving on the live host.
- [x] **Dependency audit clean** 🛡️ — `npm audit` reports 0 vulnerabilities (postcss pinned to ^8.5.15 via `overrides`).
- [x] **Worker input hardening** 🛡️ — 64KB body cap, email validation, field clamping, utm pinned to known keys.

---

## 📝 Content & claims to confirm before publishing

These are the security/compliance answers reworded conservatively in the FAQ — confirm the fact, then I can strengthen the copy. **Guardrail: never ship a claim you can't defend.**

- [ ] **Q2 — model subprocessor terms** 🔍 — the FAQ says student data goes to the provider under **"no-training terms"** (safe/standard for enterprise Anthropic/OpenAI/Azure). If your agreements also include **zero-retention (ZDR)**, confirm it and I'll add it.
- [ ] **Q3 — HECVAT** 🤔 — answered honestly as "none yet; we complete your questionnaire on request." Decide: commit to a **HECVAT Lite** timeline (and state it), or keep the interim answer.
- [ ] **Q6 — data deletion/return** 🔍 — says "we return or delete your data per your institution's instructions and our agreement" (no specific timeframe). Confirm the **actual process, timeframe, and verification method** if you want specifics added.
- [ ] **Q7 — accessibility / VPAT** 🔍 — says we **"aim to meet WCAG 2.1 AA"** (matches the accessibility statement). Confirm whether you've actually **tested to WCAG 2.1 AA** and whether a **VPAT** exists before strengthening to "conforms to" / "VPAT available."
- [ ] **Compliance card facts** 🔍 — the home "Compliance, in writing." card claims **per-tenant encryption, federated login, and SAM.gov registration today**. Confirm SAM.gov registration is active and the other two are accurate as stated.
- [ ] **SOC 2 / pen-test language** 🔍🛡️ — keep "**planned / on the roadmap**" everywhere until real. Do **not** let it drift to "in progress / scheduled / underway."
- [ ] **Pilot stays anonymized** 🛡️ — public pages describe the pilot only as "a top-tier R1" (no partner name, no "Bay Area/Oakland" geographic tell). `/investors` still names schools in the discovery quotes (problem-validation, not pilot users) and is `noindex` — confirm that's intended before it ever goes public.

---

## ⭐ The lever — one real proof point (turns a 9.4 into a 10)

- [ ] **One verifiable proof point on a PUBLIC (indexed) page** 🔍🤔 — the single biggest credibility lever. Home + how-nia-works carry zero external validation today. Land **one**:
  - **A** — a **named pilot institution** (with logo permission), or
  - **B** — **one real quote** from someone who actually used Nia (advisor/student, not a discovery interview), or
  - **C** — **one real outcome number with a source** ("X% of pilot nudges opened", "N students, Z weeks, % weekly active").
  - When it lands, give it design furniture (a partner-logo lockup under the hero, or one oversized real metric) — don't bury it in body copy.

---

## ✅ Final pre-launch QA (smoke tests on the live host)

- [ ] **Contact form end-to-end** ⚙️ — submit a real test inquiry on the live URL → confirm (a) a row appears in the leads Sheet, (b) an email reaches `info@streaque.com`. Then test spam handling: a bad/blank Turnstile token is rejected. _(Self-send Gmail quirk: the sender's own account won't receive the copy — not a bug.)_
- [ ] **Social preview** ⚙️ — verified in the Domain blocker above; re-check after DNS cutover.
- [ ] **Cross-device pass** 🔧 — home / contact / security at 320 · 375 · 768 · desktop: no overflow, nav + CTAs usable, form fields tappable.
- [ ] **`robots.txt` + `sitemap.xml`** ⚙️ — after the domain cutover, confirm both resolve and reference the **live** domain (they derive from `SITE_URL`). `/investors` should stay out of the sitemap (`noindex`).
- [ ] **404 + redirects** ⚙️ — `/some-missing-page` shows the custom 404; `/nia` 301-redirects to `/why-nia`. If migrating off WordPress, add redirects for any old indexed URLs worth preserving.
- [ ] **Lighthouse run** 🔧 — run Lighthouse (mobile, throttled) on home + contact; confirm Performance / Accessibility / Best-Practices / SEO are green. _(The WebP + content-visibility + off-screen-pause work should show in TBT/LCP/memory.)_
- [ ] **No console errors** ⚙️ — load each page on the live host; the console is clean (the only expected env-dependent log is Turnstile if the domain isn't registered — which blocker #4 covers).

---

## 📌 Post-launch (first 24–48h)

- [ ] **Watch analytics** — confirm pageviews + the contact-form funnel are recording.
- [ ] **Watch the leads pipeline** — confirm real submissions reach the Sheet + email.
- [ ] **Finish HSTS preload** — submit to hstspreload.org once `includeSubDomains` is safe (see Security).
- [ ] **Encrypt secrets** if not done pre-launch (so CI/automated deploys don't need `--keep-vars`).

---

## ✓ Done — receipts (no action needed)

- **Design / craft** — Audit IV 9.5/10, Audit #05 9.4/10, internal QA 94/100. Full design/copy/IA work shipped (see `docs/polish-tracker.md`).
- **Accessibility** — site-wide a11y pass: WCAG-AA contrast fixes, reduced-motion guards (JS + SMIL), 40–44px tap targets, landmarks, skip link, focus-visible rings, ARIA on form/FAQ/accordions.
- **Performance / memory** — mascots base64-SVG → WebP (~2.8MB → 70KB, decode ~4MB → 0.5MB), unused `orch-v2` removed, `content-visibility:auto` on every page's below-fold sections, hero phones pause off-screen.
- **Security** — app code clean (no XSS/tabnabbing/secret-leak/mailto-injection); CSP + full header set; worker input hardening; 0 dependency vulnerabilities.
- **Content / honesty** — FERPA wording standardized to "FERPA-aligned"; SOC 2 honest "planned"; status pills (Available now / In development); Official Canvas Partner confirmed formal; investor raise gated; ROI illustrative + sourced.
- **SEO / social** — per-page metadata + self-canonical, OG/Twitter cards, `og-image.png`, Organization JSON-LD, favicons, PWA manifest, `robots.js`, `sitemap.js`, custom 404, `/nia → /why-nia` 301.
- **Contact form** — fully wired (Turnstile → Worker `/api/lead` → Sheet + email), honeypot + mailto fallback; **needs only the prod-domain Turnstile registration + encrypted secrets above.**
