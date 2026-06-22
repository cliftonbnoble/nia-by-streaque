# `/how-nia-works` ↔ `/nia` — overlap + clarity plan

**Decision (2026-06-22):** keep BOTH pages, but (a) reduce the overlap, (b) make each
page's job unmistakable, and (c) fix the naming/URLs. Do NOT merge. **Nothing below is
built yet — this is the plan to review.**

---

## 1. The north star: two pages, two jobs

Every cleanup below serves one rule: **each page has a distinct job, and states each shared
idea ONCE, through its own lens.**

| | Page A | Page B |
|---|---|---|
| **Job** | "What Nia does" — the product walkthrough | "Why Nia wins" — why it's hard to copy |
| **Lens** | **Mechanics** — show it working (demos, screenshots, the loop) | **Moat** — argue the defensibility (the 6 moats, objections) |
| **Reader's question** | "Show me how it works." | "Why is this different / hard to copy?" |
| **Owns** | two-door chooser, real screenshots, feature deep-dives, closed-loop diagram | the 6 moats, the Q&A objection accordion, memory-over-time |

Test: if a sentence could sit on either page unchanged, it's in the wrong place. Push the
*how-it-works* framing to A, the *why-it's-defensible* framing to B.

---

## 2. Naming + URLs — ✅ DONE & verified live (2026-06-22)

**Shipped:** `/nia → /why-nia` (301 redirect live in the Worker), nav + footer label
"Product" → "Platform", every reference repointed (nav ×2, footer, investors ×2, sitemap,
404 quick-link), sitemap updated. Verified live: **0 stray `/nia` links across all 10 pages.**

**What was decided:**

| Page | Nav label | URL | H1 |
|---|---|---|---|
| A (product walkthrough) | **Platform** | keep **/how-nia-works** | "How Nia Works" |
| B (defensibility) | **Why Nia** (keep) | rename **/nia → /why-nia** | "Why Nia"-themed |

**"Platform" over "Product":** it matches Nia's own positioning ("the institution-governed
AI **platform**"), reads more enterprise (right for a provost/CIO), and pairs cleanly with
"Why Nia" — *Platform* = what it is, *Why Nia* = why you'd choose it. "Product" is fine but
generic. If you want the nav to match the URL exactly, the alternative is nav "Platform" +
URL `/platform` — but `/how-nia-works` is a strong, searchable SEO URL, so I'd keep it and
let the nav label differ (common and fine).

**Rename `/nia → /why-nia`:** `/nia` is opaque — it tells no one what the page is.
`/why-nia` matches the nav label and the page's job. Ship it with a **301 redirect** from
`/nia` (it's indexed at priority 0.8 in the sitemap — don't just delete the old path).

**Keep "Why Nia":** clear, and you like it. "How Nia Works" is a fine *H1* for Page A but a
weak *nav label* (too long) — keep it as the H1, use "Platform" in the nav.

---

## 3. PilotStrip — keep ONE ✅ DONE & verified (2026-06-22)

**Shipped:** removed `<PilotStrip/>` (+ its import) from `/why-nia` — the one PilotStrip now
lives only on the **Platform** page (`/how-nia-works`). Verified: `/why-nia` no longer renders
it; `/how-nia-works` still does. Investors keeps its own richer "live pilot + 4 stats" block
(untouched).

**Original recommendation (agreed): keep the single PilotStrip on the Platform page (`/how-nia-works`).**
- It's the claim-heaviest page — a real-data proof beat does the most work exactly where a
  buyer is asking "does this actually work?"
- **Remove it from `/nia`** (kills the duplication).
- **Skip Investors** — that page already has a *richer* version: the "A live pilot, and an
  early signal" block with 4 stats (incl. the cohort). A PilotStrip there would duplicate it.
- **Home is optional** — the hero already names the pilot ("Live pilot at a top-tier R1"),
  so a strip there is reinforcement, not necessity. Add it only if you want proof on the
  top-traffic page too.

So my pick is **Platform-only** (cleanest, no redundancy anywhere). If you'd rather lead
with proof on the most-visited page, **Home-only** is the next-best — but **not Investors**
(already covered), and **not both product pages** (the thing we're fixing).

---

## 4. Closing CTA — SecCTA ✅ (your pick)

Use the richer, darker **SecCTA** (the segmented "find your door" 3-card: provost / investor
/ partner) as the closer.
- **Action:** on `/how-nia-works`, replace the current **Outcome** dark band with `SecCTA`
  (already shared from `CampaignSections.jsx`, already on /nia + home — clean reuse, no new
  component). `/nia` already ends with SecCTA, so both product pages close consistently.
- **Don't lose:** the Outcome band's **"See how it's secured →"** link to `/security`. Fold
  that link in next to the SecCTA so the security path survives the swap.

---

## 5. The two repeated messages — detailed cleanup

These two ideas are each said multiple times *within* a page AND on *both* pages. The fix is
the §1 rule: **say it once per page, through that page's lens (mechanics vs moat).**

### A) "Goes first / proactive" — nudges before they're asked
Today: `/how-nia-works` (ForStudents #02 "Nudges that land" · ForStaff #01 "Early-warning" ·
the CompletePicture loop) **and** `/nia` (Moat 01 "Help arrives before they ask").

**Proposal:**
- **Platform (mechanics):** keep ONE demonstration of the nudge — the ForStudents "Nudges
  that land" feature (signal → nudge). **Reframe ForStaff #01** so it's the *staff surface*,
  not a second "we reach out first": make it the **ranked early-alert queue** — "the student
  who needs you, surfaced first." So the student side = *"Nia nudges you,"* the staff side =
  *"you get a prioritized queue."* One loop, two different surfaces (the CompletePicture
  diagram already ties them — keep it).
- **Why Nia (moat):** keep Moat 01 as the *argument*, not a demo — most campus AI waits to
  be asked; Nia goes first by design (the "regressive success tax" point). No nudge demo
  here; that lives on Platform.
- **Net:** Platform *shows* the nudge once (+ the loop); Why-Nia *argues* proactivity as a
  moat once. Neither repeats the other's words.

### B) "One profile across systems" — one brain / unified student
Today: `/how-nia-works` (ForStudents #04 "One brain, every system" · ForStaff #03 "Same
brain, your side of the desk" · the WholeStudent screenshots) **and** `/nia` (Moat 02 "Five
domains, one student").

**Proposal:**
- **Platform (mechanics):** the **WholeStudent** real-screenshot beat is the one place the
  unified profile is *shown* — keep it. Then collapse the two "one brain" feature lines
  (ForStudents #04 + ForStaff #03) into a single **"two views of one record"** idea: student
  sees one coach; staff sees the same student. That's just the "two front doors, one student"
  thesis — stated once, as two *views*, not two separate "one brain" claims.
- **Why Nia (moat):** keep Moat 02 ("Five domains, one student") as the *architecture* — one
  shared state object across academic / career / finance / wellness / admin. Defensible,
  technical framing; no profile screenshots here.
- **Net:** Platform *shows* the profile (screenshots + the two-views line); Why-Nia *argues*
  the unified-memory architecture. Different art, no echo.

---

## 6. Implementation checklist (when you say go)

- [x] ✅ PilotStrip → kept on Platform only; removed from `/why-nia`; Investors untouched.
- [ ] `/how-nia-works`: swap **Outcome → SecCTA**; carry over the "See how it's secured →" link.
- [ ] `/how-nia-works`: reframe **ForStaff #01** to the ranked-queue framing; merge the two
      "one brain" lines into **"two views of one record."**
- [ ] `/nia`: confirm Moat 01 + Moat 02 read as *arguments* (no feature-demo overlap with Platform).
- [x] ✅ Rename **`/nia → /why-nia`** + 301 redirect; nav **"Why Nia" → /why-nia**; nav/footer **"Product" → "Platform."**
- [x] ✅ Repoint every `/nia` link (Nav ×2, Footer, investors ×2, sitemap, 404 quick-link). Verified live: 0 stray links.

_Merge is off the table per the keep-both decision; this list is the keep-both cleanup._
