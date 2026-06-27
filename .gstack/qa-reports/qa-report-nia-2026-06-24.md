# QA Report — Nia by Streaque

- **Target:** http://localhost:3001 (same HEAD deployed to https://nia.clifton23.workers.dev)
- **Date:** 2026-06-24
- **Mode:** Full (regression-focused on the design-critique-fixes branch)
- **Framework:** Next.js 16 static export (`output: "export"`) → Cloudflare Worker + assets
- **Pages reviewed:** / · /how-nia-works · /why-nia · /security · /contact · /investors · /privacy · /terms · /accessibility
- **Viewports:** 1280×800 (desktop), 375×812 (mobile)

## Health Score: 94 / 100 — Elite-tier, no regressions found

| Category | Score | Notes |
|---|---|---|
| Console | 90 | Clean except domain-locked Turnstile on /contact (env-only) |
| Links | 100 | No broken links/resources |
| Visual | 97 | Cohesive; gradient headings + blooms consistent and tasteful |
| Functional | 95 | Nav, hover lifts work; form submit not tested per instruction |
| UX | 95 | Polished, consistent card system across pages |
| Performance | 90 | Static/fast; minor unused-preload warning (nia-404.svg) |
| Content | 100 | Honest copy (SOC 2 "roadmap", risky questions removed) |
| Accessibility | 90 | Decorative blooms aria-hidden; recommend a dedicated a11y pass |

## Summary

Swept all 9 pages at desktop and mobile. **Zero horizontal overflow** on every page/viewport — the bloom work (with `overflow: hidden` on affected sections) is solid. **Zero console errors** site-wide except the known Cloudflare Turnstile failures on /contact. Production build is clean (16 routes, all static). Hover lifts verified on the restructured cards.

## Findings

### Not regressions (environmental / pre-existing)

- **/contact — Turnstile errors (110200 / 400 / "No available adapters").** The Turnstile site key is domain-locked, so the widget can't initialize on `localhost`. Expected in dev. **Action for production:** confirm the Turnstile site key includes the live domain (and the workers.dev host if used for review).
- **Unused-preload warning** for `/character/nia-404.svg` (preloaded globally, not used on most pages). Minor perf hint, pre-existing.

### Verified clean (regression checks on this session's changes)

- **No horizontal overflow** — all bloom sections (home Tech&Privacy, how-nia-works features + closed-loop, why-nia moats, contact "three ways in", investors traction/market/moat) clip correctly. ✓
- **Gradient italic headings** (security "fully answered / earning the badges next / then ask every other vendor / ask the team that built it", home "No one holds the whole") render with `box-decoration-break: clone` — no clipped glyphs. ✓
- **Card restructures** (tp/cp/fm/iv-stat/iv-moat) — cards float on white over blooms; on-card glows removed; hover lifts intact (moat −4px, contact −6px). ✓
- **Copy changes** — investors "Cohort" (no "16"); CTA "Provost · Campus leadership"; how-nia-works duplicative pills removed; security 6 questions (pen-test/SOC 2 + breach removed). ✓
- **"your CIO will ask"** intentionally kept gray (shared procurement FAQ). ✓

## Top 3 things to address (none blocking; for go-live polish)

1. **Production Turnstile domain** — verify the site key covers the live host so the contact form's bot-check works in prod (form lead capture depends on it).
2. **Dedicated accessibility pass** — color-contrast on the gradient text and focus-visible states across the new cards weren't exhaustively audited.
3. **Drop/scope the global `nia-404.svg` preload** — small perf win (it's preloaded on pages that never show the 404 art).
