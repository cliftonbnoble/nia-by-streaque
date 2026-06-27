# Streaque / Nia — Site Audit #04

**Date:** June 21, 2026
**Reviewed:** Full codebase + live site (`https://nia.clifton23.workers.dev/`, confirmed serving current build)
**Pages audited:** Home, Product (How Nia Works), Why Nia, Security, Contact, Investors, Legal (Privacy / Terms / Accessibility)

---

## Bottom line

This is no longer a "getting there" site — it's a genuinely professional, production-grade product marketing site. The jump from the early mid-fi prototype to this is enormous.

**Overall score: 8.7 / 10.** Ship-ready as a marketing site. The distance to a legitimate 10/10 is **not about craft** — it's about **proof** (you have very little real third-party validation yet) and one **internal consistency gap** about whether the staff product exists.

---

## Page-by-page grades

| Page | Grade | Verdict |
|---|---|---|
| Security `/security` | **9.5 / 10** | The best page on the site — excellent |
| Home `/` | **9 / 10** | Excellent |
| Product `/how-nia-works` | **8.5 / 10** | Very good (honesty flag — see Priority 1) |
| Why Nia `/nia` | **8.5 / 10** | Very good |
| Contact `/contact` | **8.5 / 10** | Very good — form genuinely wired |
| Investors `/investors` | **8 / 10** | Good; right honesty, thinnest on proof |
| Legal (Privacy/Terms/Accessibility) | **8 / 10** | Good; comprehensive, standard |

### Home `/` — 9 / 10 · Excellent
Strongest page. The narrative arc is textbook: problem → two architectures → two experiences → differentiators → advisor empathy → five coaches → ROI → privacy → origin story → CTA.
- **Inside-out vs outside-in** is the most memorable, defensible idea on the site. The "AnswerBot · free plan · contains ads" mockup vs your real-data flow is sharp.
- **"Five coaches, one profile"** — the "tell financial aid your parent lost their job → academic eases the week, wellness checks in, no one asks twice" example is concrete and moving.
- **ROI calculator** is honest (price hidden, "illustrative only," conservative 0.25%).
- **Watch:** hero stat "16 students in the pilot / 6–8 weeks" is brave honesty but small and prominently placed. Reads authentic to a founder; may undersell to a skimming investor. Reconsider whether those two numbers earn that slot.

### Security `/security` — 9.5 / 10 · The best page on the site
A model of what "excellent" looks like.
- The encryption **vault animation** ("what your campus sees" vs "what anyone else sees," one key per campus) translates a hard technical concept into plain English a non-technical buyer instantly gets.
- The **compliance roadmap as a Trust-Center gantt** — honestly marking SOC 2 / pen test as *planned* rather than faking a badge — builds more trust than a fake checkmark would.
- **"8 questions to ask us — then ask every other vendor"** is a confident, disarming move.
- This page alone will win procurement conversations. Leave it almost exactly as is.

### Product `/how-nia-works` — 8.5 / 10 · Very good (honesty flag)
Beautifully built — iPhone/MacBook device chooser, alternating feature rows, closed-loop diagram. A-grade craft. Not a 9 because it presents the **staff co-pilot as a shipping product** (early-alert queue, AI insights, draft-reply mocks, all labeled "Live"), while the investors page says the staff tool isn't built yet. See Priority 1.

### Why Nia `/nia` — 8.5 / 10 · Very good
Reuses the strong system (Hero, Moats, Q&A, PilotStrip, segmented CTA). Solid and consistent. Confirm the Moats/Qa sub-components carry the same density as the rest before launch.

### Contact `/contact` — 8.5 / 10 · Very good
The form is **genuinely, robustly wired** — Cloudflare Turnstile → `/api/lead` → Sheet + email, with a honeypot, a 15-second timeout fallback to mailto, and graceful error states. Better engineering than most funded startups ship. Three-paths router (pilot / founders / investor) and team grid are clean. Note: the FAQ component is built but commented out (`NOT MOUNTED`) — intentional.

### Investors `/investors` — 8 / 10 · Good; right honesty, thinnest on proof
Correctly `noindex`. **Real discovery-interview quotes** (Northeastern / NYU / CUNY) are powerful and framed precisely right — *problem validation, not product testimonials*. The "ChatGPT sent me in circles" capstone is a great wedge. Market numbers labeled "est." with NCES/IPEDS sourcing — good discipline. Two issues: (1) leans on a single anonymized "top-tier R1" pilot — light; (2) a specific **$250K raise stated publicly** is unusual — consider gating raise terms behind the brief request.

### Legal — 8 / 10 · Good
Comprehensive, clearly written, FERPA "school official" framing correct. Refresh "Last updated" dates at launch.

---

## What's genuinely excellent (keep doing this)

- **Honesty as a strategy.** SOC 2 "planned," 16-student pilot, "illustrative only" ROI, sourced market estimates. Rare, and it's your credibility moat. Do not inflate it.
- **Design system discipline.** Navy ink + cyan→blue brand gradient + Geist/Inter/mono, applied identically across 9 pages. Nothing off-brand.
- **Accessibility is real, not decorative:** skip links, ARIA on form + FAQ, `prefers-reduced-motion` everywhere, focus-visible rings, 44px hit targets, off-screen animation pausing.

---

## The path to 10/10 — fix these, in priority order

### Priority 1 — Reconcile the staff-product honesty gap (highest priority; credibility risk, not polish)
The product page shows the staff co-pilot fully working and "Live." The investors page says it doesn't exist yet and is the reason for the $250K raise. A buyer who reads both — or asks "can I see the staff dashboard?" — will catch it.
- Earlier in the critique history we agreed on status pills: **"Available now"** (students) vs **"In development · Pilot 2026"** (staff). **Those pills got dropped.**
- **Fix:** re-add them on staff surfaces (home Two Experiences cards + how-nia-works staff section). Framing staff as "shipping next" is stronger and more honest, and it makes the investor ask make sense.

### Priority 2 — Add one piece of real third-party proof (biggest lever on institutional trust)
Right now there is zero external validation a buyer can verify — no named institution, no advisor/student quote from someone who actually used Nia, no outcome number. Even **one**: a named pilot, a one-line advisor testimonial, or a single real outcome metric ("X% of nudges opened in the pilot") moves you from "polished pitch" to "real thing other people use."

### Priority 3 — Verify the "Official Canvas Partner" claim is contractually true
It appears in the trust bar, the FAQ, **and** as a distribution moat on the investors page. If it's a formal Instructure partnership, it's a real asset. If it's aspirational, it's repeated in enough load-bearing places to be a liability. Confirm before launch.

---

## Smaller pre-launch items

- **Canonical domain:** OG tags and `SITE_URL` point to `streaque.com`, but the live site is `nia.clifton23.workers.dev`. Point DNS before launch or you'll have a split-identity SEO/sharing situation.
- **Mascot:** the small "here and there" Nia mascot isn't placed anywhere in the current code. Decide — drop deliberately, or plant in one or two spots.
- **Same demo student everywhere** (Maya Reyes / BIO 201 / Dr. Chen). Consistent and fine — but real product screenshots beat polished mocks for the "show we have a real product" goal.
- **Analytics:** none yet (cookie banner says so). Add a privacy-friendly tool before launch to measure the funnel.
- **Legal dates:** bump "Last updated" to current at go-live.
- **Investor raise terms:** consider gating the specific $250K behind the brief request rather than stating it publicly.

---

## Progress vs. past audits

| Past ask | Status |
|---|---|
| Real content swap-in (copy, team, quotes) | ✅ Done — real copy, real team, real discovery quotes |
| Mobile pass | ✅ Done — extensive responsive CSS + breakpoints throughout |
| Interaction decisions (CTAs, form wiring) | ✅ Done — form fully wired; all CTAs route to /contact |
| "For whom" / persona section | ✅ Covered — segmented "find your door" CTA |
| Case study / real proof | ⚠️ Still missing — see Priority 2 |
| Status pills (students live / staff in dev) | ❌ Regressed — dropped from current build; see Priority 1 |

---

## Launch verdict

You can launch the public marketing pages (home, product, why-nia, security, contact) **today** and they'd hold up well — security especially is best-in-class.

To call it a legitimate **10/10**, close Priorities 1–3: fix the staff "live vs in-development" consistency, land one real proof point, and verify the Canvas Partner claim. Those are **days of work, not weeks.**
