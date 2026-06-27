# Go-Live Tracker — Nia by Streaque

Consolidated launch-readiness list, combining **Audit IV** (Claude design review, 9.5/10 "ship it today") and the **internal QA pass** (2026-06-24, health 94/100, no regressions). Last updated: 2026-06-24.

> **Headline:** As design + engineering, the site is a 10. The remaining half-point is **content + config, not design** — one named, public proof point plus a few launch facts. None block design work; they're things only you can supply.

---

## 🚦 Blockers — must clear before sharing the public link

These are config/content facts the code can't supply. Source: Audit IV "four facts."

- [ ] **Domain / OG previews** — live host is `nia.clifton23.workers.dev`, but canonical/OG/JSON-LD all point to `streaque.com`. On this deploy every LinkedIn/X/iMessage share renders a **broken preview image**.
  - **Fix:** point DNS to the Worker, **or** set `NEXT_PUBLIC_SITE_URL` to the workers host until DNS cuts over.
- [ ] **Analytics token** — Cloudflare beacon is scaffolded but `CF_ANALYTICS_TOKEN` is empty in the live build → **no funnel measurement** on the one thing the site exists to do. Drop the token in before launch.
  - Note: also settle the consent gap (beacon is consent-gated in copy but would load unconditionally) — gate on stored consent, or confirm CF analytics is cookieless and adjust copy.
- [ ] **Production Turnstile domain** *(from QA)* — the contact form's Turnstile site key is domain-locked; it errors `110200`/`400` on any host not registered. Confirm the site key includes the live domain (and `workers.dev` if you review there) **or the form's bot-check silently fails in prod**.
- [ ] **Legal "Last updated" dates** — bump every date on `/privacy`, `/terms`, `/accessibility` to the real go-live date so nothing reads stale on day one.
- [x] **Canvas Partner — formal?** — ✅ confirmed formal/signed Instructure partnership (2026-06-21). The "Official Canvas Partner" claim (trust bar, FAQ, investor moat) is an asset, not a liability.

---

## 🎯 The lever — the one thing between 9.5 and a true 10

> One **named, verifiable proof point on a public (indexed) page.** Today a buyer on home/product pages can verify nothing external; the named voices live only on `/investors` (which is `noindex`). Land **one** of these and the public site is a legitimate 10:

- [ ] **A — Named pilot institution** ("in partnership with [University]") with logo permission. Strongest asset if real and permissioned.
- [ ] **B — One real, named quote** from someone who actually used Nia in the pilot (student or advisor — not a discovery interview).
- [ ] **C — One real outcome number with a source** ("X% of pilot nudges opened", "N students, Z weeks, % weekly active"). One true metric beats ten illustrations.

**Guardrail:** the path to 10 is *adding one real thing* — never softening a true claim or inflating a small one. When it lands, give it furniture (see design move #2), don't bury it in body copy.

---

## ✍️ Copy / trust — in progress this session

- [x] **Reduce AI-tell em dashes** — swept user-facing copy and replaced the 9 *rendered* em dashes (`—`) with commas/colons/periods, words unchanged. Hyphens in compound words and en dashes in ranges (e.g. "6–8 wks") kept. The remaining ~110 em dashes live in dev comments only (not visitor-facing); clean those separately if desired.
- [ ] **Sentiment framing** *(Audit IV design move #4)* — `/how-nia-works` staff loop leads with "real-time sentiment tracking… −18% shift flagged to advising." Reframe so the **student** sees and benefits (not "student-watching"), and make `/security` state how sentiment data is governed. Highest-risk feature for a trust-first site.

---

## 🎨 Design polish — optional, elevates an already-elite site

None required to launch (Audit IV). All are taste/editorial confidence moves.

- [ ] **#1 Edit home like a magazine, not a catalog** — home runs 12 sections; the full "five coaches, one profile" demo (home) and the "unified student memory" moat (`/why-nia`) tell the same idea twice in depth. Let home **tease** (five coach cards + one-line payoff); let `/why-nia` own the deep "one state object" telling. Loses ~a screen, gains "says each thing once."
- [ ] **#2 Make the proof point a designed object** — when the named proof lands, give it furniture: a quiet partner-logo lockup under the hero, or one oversized real metric in the display face with a mono source line. Template already exists (security stat row / investor stat cards).
- [ ] **#3 Spend the motion budget where it earns attention** — many sections self-play and compete. Off-screen demos already pause; take it further and start each demo **on scroll-into-view** rather than looping from load. Reads calmer/more premium, removes no animation.

---

## 🔧 Small craft nits — none block launch

- [ ] **Staff "live"-style pills** — staff section is labeled *In development*, but a couple of mock cards still wear "live" pills (`3 new`, `Draft ready`). Audit suggests a one-word relabel to **Preview/Concept** on staff mocks only. **Decision:** kept as-is this session per product call — revisit if the honesty story needs it.
- [ ] **`nia-404.svg` preload** *(from QA)* — preloaded globally but unused on most pages (minor unused-preload warning). Scope/drop the preload for a small perf win.
- [ ] **Encrypted Worker secrets** — convert the 3 plaintext Worker vars (`TURNSTILE_SECRET`, `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET`) to encrypted secrets and delete the plaintext, so deploys stop needing `--keep-vars`.
- [ ] **Dedicated accessibility pass** *(from QA)* — exhaustively audit color-contrast on the new gradient text and `:focus-visible` states across the new card system; the session added decorative blooms (correctly `aria-hidden`) but a full a11y sweep wasn't run.

---

## ✅ Already closed (Audit IV receipts + this session)

- Home redundancy fixed — "Two Experiences" is two front doors, not duplicate feature cards.
- Advisor rebalance — orphaned `SecAdvisors` block renders on home.
- Investor destination — full page (thesis, traction, market, moat, ask).
- Pilot anonymized to "a top-tier R1"; "near-zero hallucinations" reframed to "answers from your data, not a guess."
- ROI de-duplicated (home only); honest SOC 2 / pen-test "planned" roadmap.
- SEO/OG basics (per-page OG/Twitter, metadataBase, Organization JSON-LD).
- **This session:** bloom-behind-card system across home/how-nia-works/why-nia/contact/investors; gradient-clip fixes (`box-decoration-break: clone`); duplicative status pills removed; security questions tightened (dropped pen-test/SOC 2 ask + breach question); "Provost · Campus leadership" door label; investors "Cohort" stat (dropped the unimpressive "16"). Deployed to production, QA-clean (no overflow, no console errors beyond env-only Turnstile).

---

## 📊 Scores

| Source | Score | Verdict |
|---|---|---|
| Audit IV (design) | **9.5 / 10** (craft 10) | Ship it today; gap is content + config |
| Internal QA (2026-06-24) | **94 / 100** | No regressions; elite-tier |

**To a 10:** 1 name + 1 number + 4 facts.
