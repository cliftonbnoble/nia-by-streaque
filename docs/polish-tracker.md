# Nia by Streaque — the 9→10 tracker

_Created 2026-06-22 · Branch: `design-critique-fixes` · **the single working list — check off as we ship.**_

Combines **Site Audit #05** (Claude Design — **9.4/10**: _"launch-ready today; the 0.6 is upside you
unlock with a name and a number, not another design pass"_) + the **6-reviewer internal pass**. As design
and engineering the site is a 10. What's left is one content decision, a few facts only you can confirm,
and a craft/a11y last-mile.

**Owner:** 🔧 code/copy I do · 🤔 your decision · 🔍 you confirm a fact · ⚙️ ops/deploy
**Status:** ✅ shipped · 🟡 reviewed — no change needed · ⏸ held · ⬜ open
**Progress (2026-06-23):** P1 ✅ · P2 ✅ · P3 ✅ — the full craft / code / a11y / polish list is shipped.
Remaining = the ⭐ levers below (content + ops, mostly yours).

---

## ⭐ The 0.6 + launch facts (mostly yours)

The only things between a 9.4 and a 10 — not craft, not code; what a site can't manufacture for itself.

- [ ] **One verifiable proof point on a PUBLIC page** 🔍🤔 — _the single biggest lever (Audit #05)._ Home +
  how-nia-works carry zero external validation today ("top-tier R1" unnamed, origin quote anonymous, 6–8
  weeks self-reported). Land ONE on the indexed pages → 10/10: a **named** pilot institution, a **one-line
  quote from a real Nia user** (advisor/student — not a discovery interview), or a **single real outcome
  number with a source**. You have the pilot material; it just isn't on the public pages. Content, not design.
- [ ] **Canonical domain / broken social preview** ⚙️ — `SITE_URL`/OG/JSON-LD point at `streaque.com` but the
  live host is `nia.clifton23.workers.dev`, so `og:image` → `streaque.com/og-image.png` renders a **broken
  preview on every share** until DNS is pointed. **Stopgap now:** set `NEXT_PUBLIC_SITE_URL` to the workers
  host. **Real fix:** the domain cutover (DNS → Worker).
- [ ] **Analytics — token + consent** ⚙️🔧 — beacon scaffolded but the token is empty → **no funnel
  measurement**. Give me the Cloudflare beacon token to activate. **First** settle the consent gap (the
  banner + Privacy promise analytics is consent-gated, but the beacon would load unconditionally) — I gate
  it on stored consent, or we adjust the copy (CF analytics is cookieless).
- [ ] **Encrypted secrets** ⚙️ — convert the 3 plaintext Worker vars to encrypted (`wrangler secret put
  TURNSTILE_SECRET / LEAD_WEBHOOK_URL / LEAD_WEBHOOK_SECRET`, delete the plaintext) before cutover/CI, so
  deploys stop needing `--keep-vars`.
- [ ] **Legal "Last updated" dates** 🔧 — bump to current at go-live (only when the policy text changes).
- [ ] **Real product screenshots** 🤔 — optional; real screenshots beat polished mocks for "we have a real product."
- [x] **Canvas Partner — formal?** 🔍 ✅ confirmed formal/signed Instructure partnership (2026-06-21).
- [ ] **SOC 2 language** 🔍🛡️ — keep "planned / roadmap" until real (guardrail — don't drift to "in progress").

---

## 🔵 Code / copy polish (I do these)

### P1 — credibility + accessibility (do first)
- [x] ✅ **Staff demo mock "live" pill** 🔧 — done _(2026-06-22)_: the "Early-alert queue · Live" pill is now
  amber **"In development"** (gave `FmLive` a `tone="dev"` variant, styled like the rest of the app's dev
  status). The neutral UI-state pills (Draft, Meeting, Routed, 3 new) stay as-is.
- [x] ✅ **Reduced-motion: JS animations** 🔧 — done _(2026-06-22)_: gated the `HeroPhone` scene timers +
  `AppDemos` CountUp (rAF) on `matchMedia(reduce)` (the `AdvisorBars` pattern), and added the 3 missing
  `Moats` loops (np-care-live / np-tgl.flip / np-gov-knob) to the reduced-motion CSS.
- [x] ✅ **Decorative controls in the tab / SR tree** 🔧 — done _(2026-06-22)_: the fake "Start now" button →
  `tabIndex={-1}` and the nudge demo `aria-hidden`; the hero phone fan + both inside-out / outside-in phones
  now `role="img"` (keeps their aria-label, silences the faux-chat internals for AT).
- [x] ✅ **ROI calculator result silent to screen-readers** 🔧 — done _(2026-06-22)_: wrapped the result
  headline in `aria-live="polite"`, so the protected-tuition figure announces as the sliders move.
- [x] ✅ **Contact form `autoComplete`** 🔧 — done _(2026-06-22)_: `name` / `email` / `organization` /
  `organization-title` on the four relevant fields (mobile autofill on the main conversion surface).
- [x] ✅ **Why-Nia + Contact `<title>` stale** 🔧 — done _(2026-06-23)_: `why-nia` → "Why Nia · Nia by Streaque",
  `contact` → "Contact · Nia by Streaque" — both now match the `X · Nia by Streaque` pattern every other page uses.
- [x] ✅ **why-nia mock identity mismatch** 🔧 — done _(2026-06-23)_: `Moats.jsx:251` `'maya.j'` → `'maya.r'`.
  Audited the whole codebase — every other Maya reference was already "Maya Reyes"; this was the only stray.
- [x] ✅ **Security compliance gantt — keyboard/SR reach** 🔧 — done _(2026-06-22)_: the roadmap scroller now
  `tabIndex={0}` + `role="region"` + an aria-label, matching the architecture scroller.
- [x] ✅ **Investors hero `<h1>` doesn't scale** 🔧 — done _(2026-06-23)_: hero h1 → `clamp(32px, 6vw, 50px)`
  and the "ask" h2 → `clamp(28px, 5.2vw, 42px)`; verified light + 2-line at 375px.
- [x] ✅ **Investors "See the product depth →"** 🔧 — done _(2026-06-23)_: → **"See why Nia wins"** with the
  `<ArrowRight/>` component (replaces the literal arrow), matching the page's actual job.
- [x] ✅ **Device-demo numbers could read as outcome claims** 🔧 — done _(2026-06-23)_: the StaffDashboard
  "live metrics" → "pilot signal", its green "live" pill → amber "In development", + a provenance footnote
  ("Early signal from the student pilot — illustrative, projected for the staff view"). Numbers kept (real pilot
  signal); no hard claims remain.

### P2 — polish wins
- [x] ✅ **CTAs bypass the captured form** 🔧 _(Audit #05)_ — done _(2026-06-23)_: every lead-capture CTA
  (security packet ×4, DPA, the two security-page prose links) now routes to `/contact#form-security` — captured
  in the form. Kept as direct email (deliberate, not lead-capture): the CTO "direct line" (a trust signal that
  already sits beside its own form CTA), the footer contact, the legal-page contact, and the form's own fallback.
- [x] ✅ **Per-page canonical + OpenGraph** 🔧 — done _(2026-06-23)_: new `pageMetadata()` helper (`lib/site.js`)
  gives every page a self-canonical URL + its own OG/Twitter card (title, description, url, locale); layout gets
  `canonical: "/"`. Investors keeps `noindex`. Verified per-page in the build output.
- [x] ✅ **Standardize page `<title>` separators** 🔧 — done _(2026-06-23)_: all pages now on `X · Nia by
  Streaque` (why-nia + contact were the last two stragglers).
- [x] ✅ **Nav mobile drawer: Escape + focus** 🔧 — done _(2026-06-23)_: opening the drawer moves focus to the
  first link; Escape closes it + restores focus to the burger (aria-expanded flips); Tab is trapped between the
  burger and the links. All four behaviors verified in the DOM.
- [x] 🟡 **Eager LCP image** 🔧 — reviewed _(2026-06-23)_, **no change needed**: there's no above-the-fold lazy
  raster to flip — every hero is SVG/text (the home hero's only `<img>` is commented out). The only large rasters
  are the home two-door CSS-background photos (2nd section), and a measured preload pass isn't worth the mobile
  cost. Closed. _(Flag if you ever want a Lighthouse-driven image-perf pass.)_
- [x] ✅ **Contact inputs: focus state + tap targets** 🔧 — done _(2026-06-23)_: a scoped `#form` `:focus` rule
  gives every input/select/textarea a branded ring (brand-blue border + soft halo) — activating the
  previously-dead border/shadow transition; interest chips bumped 34px → 40px tap targets + a keyboard
  `:focus-visible` ring.
- [x] ✅ **Copy tightening** 🔧 — done _(2026-06-23)_: "FERPA-scoped" → "permission-scoped"; PullQuotes → curly
  quotes. 🟡 Reviewed & kept (your call, 2026-06-23): the hero "6–8 weeks of sustained engagement" (reads as
  pilot duration that went well — fine), `$52B` (already marked "est." — an honest internal estimate), and the
  investors thesis (already opens with the market opportunity, then contrasts).
- [x] ✅ **Two-door chooser heading level** 🔧 — done _(2026-06-23)_: added a muted centered H2 ("Two front
  doors, one student.") above the doors — fixes the H1→H3 skip and gives the section an intro.
- [x] ✅ **WarningMock ranking** 🔧 — done _(2026-06-23)_: each row now carries a leading rank numeral (1–4) so
  the queue reads as ranked; row 1's redundant "#1" badge → "New" (amber); the action badges (Draft/Meeting/Routed) stay.
- [x] ✅ **Qa accordion `aria-controls`** 🔧 — done _(2026-06-23)_: panels always render with `hidden={!isOpen}`
  (instead of unmounting), so every `aria-controls` resolves; toggle + single-open behavior verified in the DOM.

### P3 — cleanup / taste
- [x] ✅ **Dead code** 🔧 — done _(2026-06-23, you confirmed)_: removed `CapabilityCards.jsx` (441 lines,
  unimported), the unmounted contact `FAQ` (+ its comment), the dead Moat `n` prop + `.np-moat-n` CSS, and the
  duplicate `.np-inputbar/.np-send` (kept the `styles.jsx` copy). Build verified green.
- [x] ✅ **`--ink-4` contrast** 🔧 — done _(2026-06-23)_: `.mf-canvas-note` (the one real UI-text use) →
  `--ink-3` (AA-passing); the variable itself nudged `#9aa0b4` → `#858ba0` so the faint mock labels are more
  legible. The rest of `--ink-4`'s uses are mock-illustration / decorative (WCAG-exempt).
- [x] ✅ **Misc** 🔧 — done _(2026-06-23)_: NL2SQL "3 live rows" → "1 live row"; worker `/api/lead` →
  `Cache-Control: no-store`; placeholders de-duped (cf-name → "Jordan Lee", cf-institution → "Your institution");
  dead 155KB hero asset deleted; "regressive success tax" → plain language ("…so Nia goes first — before a small
  stumble quietly compounds into a stall"). 🟡 investors "6–8 wks" kept (your call — it's a conversation starter).

---

## 🛡️ Do NOT "improve" these (Audit #05)
Honesty as strategy (planned-not-faked SOC 2, plain pilot numbers, illustrative ROI, sourced estimates); the
design system (navy + cyan→indigo + Geist/Inter/mono); the real accessibility; the `/security` page (leave it
almost exactly as is). **The path to 10 is adding one real thing, never softening a true one.**

---

## Page grades (Audit #05)
Security **9.6** · Home **9.5** · How Nia Works **9.3** · Contact **9.3** · Why Nia **9.0** · Investors **9.0**
· Legal **8.5** · **Overall 9.4 / 10. Launch-ready today.**
