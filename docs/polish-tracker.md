# Nia by Streaque — the 9→10 tracker

_Created 2026-06-22 · Branch: `design-critique-fixes` · **the single working list — check off as we ship.**_

Combines **Site Audit #05** (Claude Design — **9.4/10**: _"launch-ready today; the 0.6 is upside you
unlock with a name and a number, not another design pass"_) + the **6-reviewer internal pass**. As design
and engineering the site is a 10. What's left is one content decision, a few facts only you can confirm,
and a craft/a11y last-mile.

**Owner:** 🔧 code/copy I do · 🤔 your decision · 🔍 you confirm a fact · ⚙️ ops/deploy

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
- [ ] 🔍 **Eager LCP image** 🔧 — investigated _(2026-06-23)_: **no above-the-fold lazy raster exists** — every
  hero is SVG/text (the home hero's only `<img>` is commented out). The real LCP candidates are the home
  two-door CSS-background photos (2nd section); optimizing those is a measured preload pass, not a one-line
  flip. Deferred pending a Lighthouse check — flag if you want the image-perf pass.
- [x] ✅ **Contact inputs: focus state + tap targets** 🔧 — done _(2026-06-23)_: a scoped `#form` `:focus` rule
  gives every input/select/textarea a branded ring (brand-blue border + soft halo) — activating the
  previously-dead border/shadow transition; interest chips bumped 34px → 40px tap targets + a keyboard
  `:focus-visible` ring.
- [ ] **Copy tightening** 🔧 — "FERPA-scoped" → "permission-scoped" (`how-nia-works:369`); investors thesis
  lead positive; `$52B` a one-clause basis; PullQuotes → curly quotes; relabel hero "6–8 weeks of sustained
  engagement" so it can't read as a retention result.
- [x] ✅ **Two-door chooser heading level** 🔧 — done _(2026-06-23)_: added a muted centered H2 ("Two front
  doors, one student.") above the doors — fixes the H1→H3 skip and gives the section an intro.
- [ ] **WarningMock ranking** 🔧 — rows `#1/Draft/Meeting/Routed`; make 2–4 ranked.
- [x] ✅ **Qa accordion `aria-controls`** 🔧 — done _(2026-06-23)_: panels always render with `hidden={!isOpen}`
  (instead of unmounting), so every `aria-controls` resolves; toggle + single-open behavior verified in the DOM.

### P3 — cleanup / taste
- [ ] **Dead code** 🔧 — `CapabilityCards.jsx` (unimported), unmounted home/contact `FAQ`, dead `n` prop +
  `.np-moat-n`, duplicate `.np-inputbar/.np-send`.
- [ ] **`--ink-4` contrast** 🔧 — `#9aa0b4` ≈ 2.6:1 fails AA; move real text to `--ink-3`.
- [ ] **Misc** 🔧 — plain-language "regressive success tax"; investors "6–8 wks" elapsed → single figure;
  NL2SQL "$2,480 / 3 rows" wrinkle; placeholders duplicate labels; worker `/api/lead` `Cache-Control:
  no-store`; commented hero fallback img dimensions / delete dead 155KB asset.

---

## 🛡️ Do NOT "improve" these (Audit #05)
Honesty as strategy (planned-not-faked SOC 2, plain pilot numbers, illustrative ROI, sourced estimates); the
design system (navy + cyan→indigo + Geist/Inter/mono); the real accessibility; the `/security` page (leave it
almost exactly as is). **The path to 10 is adding one real thing, never softening a true one.**

---

## Page grades (Audit #05)
Security **9.6** · Home **9.5** · How Nia Works **9.3** · Contact **9.3** · Why Nia **9.0** · Investors **9.0**
· Legal **8.5** · **Overall 9.4 / 10. Launch-ready today.**
