# Streaque / Nia — Site Backlog

_Last updated: 2026-06-22 · Branch: `design-critique-fixes`_
_Merges the working backlog + **Site Audit #04** (8.7/10) + the completed `docs/page-plan.md` IA
cleanup. **This is the single working agenda.**_

The site is already a professional, production-grade marketing site. The distance to
a legit **10/10 is proof + one consistency fix, not craft** (audit's words). Items are
tagged by owner:

> 🔧 code/copy I can do · 🤔 your decision · 🔍 you verify a real-world fact · ⚙️ ops/deploy

---

## 🔴 Highest priority — credibility (this is the 10/10 path)

- [x] **P1 · Staff-product honesty gap** ✅ _(2026-06-21)_ — re-added the status pills:
  **"Available now"** (green) on student surfaces vs **"In development"** (amber) on staff
  surfaces — on the home Two-Experiences cards AND the how-nia-works `#for-students` /
  `#for-staff` section heads (staff subcopy reads "Shipping next"). Timeline ("Pilot 2026")
  dropped per your call — no locked date yet. The in-mock dashboard "Live" labels now read as the depicted future UI,
  not a claim. Reconciles the product page with the investor "not built yet" ask.
- [x] **P3 · "Official Canvas Partner"** ✅ _(2026-06-21)_ — confirmed a **formal/signed
  Instructure partnership** → genuine asset, left as-is.
- [x] **P2 · Real third-party proof point** ✅ _(decision 2026-06-21)_ — no nameable pilot /
  quote / outcome metric available yet → **keep the honest anonymous framing** (the audit
  explicitly calls this honesty a credibility strength — don't inflate it). Revisit when a
  real proof point exists (a named pilot, a real advisor/student quote, or a pilot outcome
  number).

## 🟡 Design & content decisions — your call, I execute

- [x] **Hero stat slot** ✅ _(2026-06-21)_ — reframed: dropped the raw "16 students" count;
  hero now leads with **6–8 weeks of sustained engagement** + **Live · pilot at a top-tier R1**,
  driving to "Ask us for the results" (honest — full numbers on request).
- [ ] **"Built different. On purpose." placement** 🤔🔧 — live on home between Two Experiences
  and the advisor section. Keep where it is · move near Tech & Privacy as a capstone · tighten.
- [x] **Mascot** ✅ _(2026-06-21)_ — sprinkled minimally + tastefully: **nia-404** on the 404
  page (screwdriver), **nia-grad** on the home closing CTA, **nia-hi** in the contact success
  state. Character set in `public/character/`. **nia-read** (studying) held in reserve — say the
  word for a 4th spot (origin story / a student section).
- [x] **Investor raise terms** ✅ _(2026-06-21)_ — gated. Dropped the public **$250K**; "The
  ask" keeps the use-of-funds story and routes to the requested brief (CTA → /contact#form-investor).
- [x] **Clarity pass** ✅ _(2026-06-22)_ — Product vs Why-Nia now read distinct (the full
  `docs/page-plan.md` IA cleanup: naming/URLs + message de-dup). Hero one-liner left as-is (the
  subcopy makes "what Nia is" clear); device-demo numbers read as illustrative product UI (one
  demo student, no outcome claims); vocabulary audited clean.

## ⚪ Pre-launch checklist — mostly mechanical

- [ ] **Domain cutover** ⚙️ — `streaque.com` still serves the **old WordPress site**; the new
  site lives only on `nia.clifton23.workers.dev`. Point DNS at the Worker + set
  `NEXT_PUBLIC_SITE_URL`, or you get split-identity SEO/link-sharing (OG tags already point
  at streaque.com).
- [ ] **Encrypted secrets** ⚙️ — convert the 3 plaintext Worker vars to encrypted
  (`npx wrangler secret put TURNSTILE_SECRET` / `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_SECRET`,
  then delete the plaintext rows) **before the domain cutover or any CI deploys** — so they
  stop getting wiped without `--keep-vars`. Until then, every deploy MUST use `--keep-vars`.
- [~] **Analytics** 🔧 — **Cloudflare Web Analytics beacon wired** into `app/layout.js` (gated
  on a public token, like the Turnstile key). ⏳ To activate: create the Web Analytics site in
  the dashboard → give me the beacon token → I hardcode it + deploy.
- [ ] **Legal "Last updated" dates** 🔧 — real dates exist (Privacy/Terms Jun 13, Accessibility
  Jun 15 2026); bump to current at go-live **only if the policy text changes** (bumping without
  an actual content change would be inaccurate).
- [ ] **SOC 2 language** 🔍 — keep "planned / roadmap" until it's real (guardrail; don't drift).
- [ ] **Real product screenshots** 🤔 — same demo student (Maya / BIO 201 / Dr. Chen) everywhere
  is fine, but real screenshots beat polished mocks for "we have a real product." Optional.
- [x] **`/resources` stale comments** ✅ _(2026-06-21)_ — removed the dead `/resources`
  mentions from the `app/robots.js` and `app/sitemap.js` comments.

---

## ✅ Done / verified — don't re-litigate

- **Page IA cleanup (`docs/page-plan.md`) — ✅ done & verified live:** kept both product pages but
  made them distinct — renamed `/nia → /why-nia` (301 redirect), nav/footer "Product" → "Platform",
  one PilotStrip (Platform only), closer swapped Outcome → SecCTA, and the two repeated messages
  de-duped ("proactive" → ranked early-alert queue; "one profile" → two views of one coach).
- **Latest copy/UX (2026-06-22):** restored the home "A complete story" video section (section 3);
  pilot copy "16 students" → "a full cohort"; glow status pills site-wide (replaced flat dots);
  two-door cards redesigned (dark cards, sharper icons).
- **Contact form — LIVE & working** on workers.dev: Turnstile → Worker `/api/lead` → Sheet
  row **and** email to info@streaque.com; honeypot + graceful mailto fallback (no trapped
  visitors) + invisible Turnstile box. _Audit: 8.5 — "better engineering than most funded
  startups ship."_ (Email reaches everyone except the sender's own account — Gmail self-send
  quirk, not a bug.)
- **SEO / social** — metadata + per-page metadata, OpenGraph + `og-image.png`, Twitter card,
  JSON-LD Organization, favicons, PWA manifest, `robots.js`, `sitemap.js`, custom 404.
- **Responsive** — heroes verified at 320 / 360 / 375 / 768; hero CTAs, nav CTA, security
  vault, home phone fan, contact-form overlap all fixed.
- **Real content** — real copy, team, discovery quotes (Northeastern / NYU / CUNY, framed as
  problem-validation not testimonials). **Accessibility is real** — skip links, ARIA,
  prefers-reduced-motion, focus-visible rings, 44px targets.
- **Page grades (Audit #04):** Security **9.5** (best on the site — leave nearly as-is) ·
  Home **9** · Product / Why-Nia / Contact **8.5** · Investors / Legal **8**.
