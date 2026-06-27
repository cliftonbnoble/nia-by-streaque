# `/how-nia-works` ↔ `/nia` — overlap + clarity plan

**Status: ✅ COMPLETE (2026-06-22).** Every section below is shipped + verified live — kept both
pages, reduced the overlap, made each page's job clear, fixed the naming/URLs. Remaining *site*
work (not part of this plan) lives in `BACKLOG.md`, the single working agenda.

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

## 4. Closing CTA — SecCTA ✅ DONE & verified live (2026-06-22)

**Shipped:** on `/how-nia-works`, replaced the Outcome dark band with **SecCTA** (the segmented
provost/investor/partner closer), matching `/why-nia`. The Outcome's **"See how it's secured →"**
link survives as a dark strip into the footer. (Outcome kept defined-but-unmounted for revert.)

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

### A) "Goes first / proactive" — ✅ Platform side DONE (2026-06-22)
**Shipped:** kept the student nudge (ForStudents #02 "Nudges that land"); reframed **ForStaff
#01 "Early-warning system" → "Ranked early-alert queue"** — now the staff *surface* (the ranked
queue they work from, matching the `WarningMock` visual), with copy that ties to the student
side ("the same student Nia nudged, now at the top of your list"). The CompletePicture loop
still ties the two together. _✅ Confirmed (2026-06-22): `/why-nia` Moat 01 reads as an argument
("Help arrives before they ask" — the regressive-success-tax case), not a demo. No change._

Original: `/how-nia-works` (ForStudents #02 · ForStaff #01 · CompletePicture) **and** `/nia` (Moat 01).

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

### B) "One profile across systems" — ✅ Platform side DONE (2026-06-22)
**Shipped:** reframed the two "one brain" lines into **two views of one coach** — ForStudents
#04 "One brain, every system" → **"One coach, not a dozen tools"** (the student's view);
ForStaff #03 "The same brain, your side of the desk" → **"The same coach, your side of the
desk"** (the staff's view, cross-referencing "the very coach your students talk to").
WholeStudent stays the one place the profile is *shown*; `/why-nia` Moat 02 keeps the
architecture argument.

Original: `/how-nia-works` (ForStudents #04 · ForStaff #03 · WholeStudent) **and** `/nia` (Moat 02).

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
- [x] ✅ `/how-nia-works`: swapped **Outcome → SecCTA**; carried the "See how it's secured →" link.
- [x] ✅ `/how-nia-works`: reframed **ForStaff #01 → "Ranked early-alert queue"** (staff surface; ties to the student nudge).
- [x] ✅ `/how-nia-works`: merged the two "one brain" lines into **"two views of one coach"** (student = "one coach"; staff = "the same coach").
- [x] ✅ `/why-nia`: confirmed Moat 01 + Moat 02 read as *arguments* (no feature-demo overlap). No change.
- [x] ✅ Rename **`/nia → /why-nia`** + 301 redirect; nav **"Why Nia" → /why-nia**; nav/footer **"Product" → "Platform."**
- [x] ✅ Repoint every `/nia` link (Nav ×2, Footer, investors ×2, sitemap, 404 quick-link). Verified live: 0 stray links.

_Merge is off the table per the keep-both decision; this list is the keep-both cleanup._
