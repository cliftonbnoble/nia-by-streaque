# Streaque / Nia — Site Backlog

_Last updated: 2026-06-22 · Branch: `design-critique-fixes`_
_The record of what's already shipped. **Active fix-list (Audit #05 + the 6-reviewer pass) →
[`docs/polish-tracker.md`](docs/polish-tracker.md)** — the single working list._

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
- [x] **"Built different. On purpose." placement** ✅ _(2026-06-22)_ — **keep where it is** (home,
  between Two Experiences and the advisor section). Easy to move/tighten later if needed.
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

## 🔵 Polish + ⚪ pre-launch ops → moved to the tracker

The 6-reviewer findings, **Site Audit #05**, and the pre-launch ops are now combined in the single
active working list: **[`docs/polish-tracker.md`](docs/polish-tracker.md)**. Work from there; this
file stays as the record of what's already shipped. _(Done: `/resources` stale comments cleaned.)_

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
