# `/how-nia-works` ↔ `/nia` — overlap + clarity plan

**Decision (2026-06-22):** keep BOTH pages. They overlap less than an earlier audit
implied — do NOT merge. Instead, reduce the remaining overlap and clear up the
naming/URL so the two pages read as distinctly different jobs.

## What each page is
- **`/how-nia-works`** (nav "Product") — the **product walkthrough**: what the two apps
  actually do, feature by feature, with live mocks.
- **`/nia`** (nav "Why Nia") — the **defensibility pitch**: the six moats + the four
  buyer objections.

## The real overlap (what to de-dup)
| Theme | `/how-nia-works` | `/nia` | Action |
|---|---|---|---|
| **PilotStrip** ("16 students · 6–8 wks") | yes | yes (identical) | keep ONE across the pair |
| **Closing CTA** | Outcome dark band | SecCTA segmented 3-door | pick one closer; SecCTA is richer |
| **"goes first / nudges before they ask"** | ForStudents #02, ForStaff #01, CompletePicture | Moat 01 | say once per page, different art |
| **"one profile across systems"** | ForStudents #04, ForStaff #03, WholeStudent | Moat 02 | ditto |

## Unique to each (keep — these are the assets)
- **Only `/how-nia-works`:** the two-door chooser, the real-screenshot carousel, the
  student + staff feature deep-dives (live mocks), the closed-loop diagram.
- **Only `/nia`:** the cross-semester memory thread, the 6 moats (esp. the source-linked
  NL→SQL answer engine + governance console), the Q&A objection accordion, the segmented
  3-door CTA.

## Naming / URL cleanup
The labels muddle it: nav "Product" → page titled "How Nia Works"; nav "Why Nia" → `/nia`.
Once the overlap is tightened, sharpen the labels so each page's job is obvious:
- `/how-nia-works` → "Product" / "Platform" (what it does)
- `/nia` → keep "Why Nia," but lean it fully into defensibility (why it's hard to copy)

## If you ever DO merge (keep `/how-nia-works` as survivor)
Port over, in priority: (1) the Q&A accordion, (2) the governance + source-linked moats,
(3) one memory beat (the cross-semester thread), (4) care-routing. Swap Outcome → SecCTA,
drop the duplicate PilotStrip. Then redirect `/nia → /how-nia-works`, drop "Why Nia" from
the nav, and repoint internal links: `Nav.jsx` (35, 64–65), `Footer.jsx` (55),
`investors/page.jsx` (97, 421), `sitemap.js` (11 — needs a 301; it's indexed at priority 0.8).
