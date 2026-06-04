# Streaque / Nia — Relume Brief

Working doc for organizing site structure via [relume.io](https://relume.io). Edit freely.

---

## 1. Brief to paste into Relume's AI Site Builder

> **Streaque** is a Higher Education AI platform. The product, **Nia**, is an institution-governed AI layer that turns LMS, SIS, and CRM signals into proactive coaching, nudges, and alerts — for **students** (a personalized coaching companion) and **staff** (a co-pilot for advisors, faculty, and student-success teams). It runs on a multi-agent system — academic, career, finance, wellness, and admin agents — with sentiment tracking, early intervention alerts, and personalized student journeys. Built for higher-ed: Official Canvas Partner, FERPA & GDPR aligned, SSO ready, mobile-first security. Audience: provosts, student-success VPs, CIOs, advisors, faculty, and prospective pilot or investor partners. Tone: trustworthy, modern, institutional, warm — not consumer-app vibes. Primary CTAs: book a demo / start a pilot, request the investor brief, talk to founders.

### Key parameters

- **Brand**: Nia by Streaque
- **Category**: Higher Education AI platform / Student success
- **Primary audiences**:
  - Higher-ed decision makers (Provost, Student Success VP, CFO, CIO/IT)
  - Student-facing staff (advisors, faculty)
  - Students (end users of the student app)
  - Investors / partners
- **Tone**: Trustworthy, modern, institutional, warm
- **Primary CTAs**: Book a demo · Start a pilot · Investor brief · Talk to founders

---

## 2. Current site structure (what we've already built)

### `/` Home
- TrustBar (dark) — compliance badges
- Sticky Nav
- Hero — headline + sub + dual CTAs + browser mock + real iPhone PNG (animated)
- Two Experiences — student card / staff card with embedded mocks
- Features — 4 differentiators with mini interactive mocks
- Video — walkthrough placeholder
- Stats — 93% / 75% / 63%
- Team — 6 portraits
- Tech & Privacy — "What we promise" / "What we never do"
- Higher-Ed Stack — dark-navy animated orchestration diagram
- Final CTA — pilot / invest
- Footer

### `/how-nia-works`
- Hero — heading + sub + 3 capability cards (sentiment, alerts, journeys)
- Connection bridge — text + animated diagram (student → Nia hub → staff)
- For Students — 4 alternating feature rows with mocks
- Pull quote
- For Staff — 5 alternating feature rows with mocks
- Pull quote
- The Complete Picture — 3-step closed loop
- Outcome / CTA — dark band

### `/contact`
- Hero — headline + sub + photo with floating cards
- 3 Paths — pilot / founders / investor
- Form — sticky context column + multi-field form with success state
- Founders strip — 2 founder cards with direct contact
- Direct Lines — 4 channels (email, phone, LinkedIn, YouTube)
- FAQ — 6 Q&A
- Footer

---

## 3. Pages Relume will probably suggest — and what I'd actually keep

### Keep
- **/about** — story + mission + extended team
- **/security** — dedicated page for IT buyers (FERPA, GDPR, SOC 2, data-flow diagram). Higher-ed sales always routes through IT eventually.
- **/customers** or **/case-studies** — institution stories (even one pilot writeup helps)
- **/integrations** — Canvas, Banner, Workday, Salesforce, etc. (connector grid)
- **/resources** or **/blog** — research-aligned content fits the tone (Yeager, Dweck, etc.)

### Defer until real content exists
- /pricing (or use a "How pilots work" page instead — common in higher-ed sales)
- /press
- /careers
- /webinars

### Optional sub-landing pages
- **/solutions/students** — deep dive on the student app
- **/solutions/staff** — deep dive on the staff platform

### Legal (always needed)
- /privacy
- /terms
- /accessibility

---

## 4. Section types → Relume component categories

When picking Relume components, search for these categories:

| Our section | Relume category to search |
|---|---|
| Dark compliance trust bar | Logo cloud / Trust |
| Hero with desktop + phone mock | Hero (right-side visual) |
| Two-card audience split | Layout (2-up) |
| 4-up feature grid with illustrations | Layout (4-up) |
| Alternating feature rows | Layout (text + image rows) |
| Stats band | Stats |
| Team grid | Team |
| Orchestration diagram | Layout (custom illustration) — Relume won't have this; keep ours |
| Promise / never-do cards | Layout (2-up comparison) |
| Final CTA band | CTA |
| FAQ | FAQ |
| Form page | Contact |

---

## 5. Recommended workflow

1. Paste the brief from §1 into Relume's AI Site Builder
2. Use Relume's suggested pages but trim to the keep-list in §3
3. For each page, pick Relume components matching the categories in §4
4. Export sitemap + wireframes from Relume
5. Keep our existing component code; use Relume's IA as the authoritative structure to expand into

---

## 6. Open questions to resolve

- [ ] Pricing page now, or "How pilots work" page first?
- [ ] Combine /security into /tech-privacy on Home, or break out as its own page?
- [ ] Are we ready for /customers (do we have one pilot to feature)?
- [ ] Split student/staff into solution pages, or keep them as sections on Home?
- [ ] Investor brief — gated form, or open PDF?

---

_Last updated: 2026-04-26_
