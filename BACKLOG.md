# Streaque / Nia — Site Backlog

_Last updated: 2026-06-21 · Branch: `design-critique-fixes`_
_Merges the working backlog + **Site Audit #04** (overall **8.7/10 — ship-ready**)._

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

- [ ] **Hero stat slot** 🤔 — "16 students / 6–8 weeks" is brave honesty, but small and
  prominent; authentic to a founder, may undersell to a skimming investor. Keep / reframe / move?
- [ ] **"Built different. On purpose." placement** 🤔🔧 — live on home between Two Experiences
  and the advisor section. Keep where it is · move near Tech & Privacy as a capstone · tighten.
- [ ] **Mascot** 🤔🔧 — the little Nia mascot isn't placed anywhere in the build. Drop it
  deliberately, or plant it in 1–2 spots.
- [ ] **Investor raise terms** 🤔🔧 — the specific **$250K** is stated publicly (unusual).
  Consider gating raise terms behind the brief request instead.
- [ ] **Clarity pass** 🔧 — hero one-liner ("what Nia *is*" instantly clear?); Product vs
  Why-Nia fork reads distinct?; confirm device-demo numbers don't read as real outcome claims.
  _(Vocabulary sub-item ✅ audited 2026-06-21 — "LMS, SIS, and CRM" consistent; "Canvas + SIS"
  deliberate; "agent" only in technical contexts vs "coach" for product. No changes needed.)_

## ⚪ Pre-launch checklist — mostly mechanical

- [ ] **Domain cutover** ⚙️ — `streaque.com` still serves the **old WordPress site**; the new
  site lives only on `nia.clifton23.workers.dev`. Point DNS at the Worker + set
  `NEXT_PUBLIC_SITE_URL`, or you get split-identity SEO/link-sharing (OG tags already point
  at streaque.com).
- [ ] **Encrypted secrets** ⚙️ — convert the 3 plaintext Worker vars to encrypted
  (`npx wrangler secret put TURNSTILE_SECRET` / `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_SECRET`,
  then delete the plaintext rows) **before the domain cutover or any CI deploys** — so they
  stop getting wiped without `--keep-vars`. Until then, every deploy MUST use `--keep-vars`.
- [ ] **Analytics** 🔧 — none installed. Add **Cloudflare Web Analytics** (free, privacy-first,
  no cookie banner) — track page views + form-submit conversions.
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
