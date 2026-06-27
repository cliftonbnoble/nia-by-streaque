"use client";
/* Advisor time bars — Alan-style: soft periwinkle track, inset indigo fill,
   subtle segment notches. The fills are scroll-linked: they grow as the cards
   enter the viewport and are complete once fully in view. */
import { useEffect, useRef } from "react";

const GRAY_MID = "#AEB4C0";
const GRAY_LIGHT = "#D7DBE2";

const CARDS = [
  {
    title: "An advisor's week · today · Illustrative",
    chip: { t: "before", cls: "mf-chip-neutral" },
    fillPct: 40,
    notches: [40, 75],
    segs: [
      { from: 40, to: 75, c: GRAY_MID },
      { from: 75, to: 100, c: GRAY_LIGHT },
    ],
    rows: [
      { label: "Actual mentoring", pct: 40, brand: true },
      { label: "Retrieving fragmented data", pct: 35, c: GRAY_MID },
      { label: "Triaging avoidable crises", pct: 25, c: GRAY_LIGHT },
    ],
  },
  {
    title: "An advisor's week · with Nia · Illustrative",
    chip: { t: "after", cls: "mf-chip-success" },
    fillPct: 62,
    notches: [62, 80],
    segs: [
      { from: 62, to: 80, c: GRAY_MID },
      { from: 80, to: 100, c: GRAY_LIGHT },
    ],
    rows: [
      { label: "Mentoring & perspective", pct: 62, brand: true },
      { label: "Triage (now pre-empted)", pct: 18, c: GRAY_MID },
      { label: "Retrieval (now automated)", pct: 20, c: GRAY_LIGHT },
    ],
  },
];

export default function AdvisorBars() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", 1);
      el.style.setProperty("--p2", 1);
      return;
    }
    let raf;
    let current = 0;
    let target = 0;
    const measure = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      target = Math.min(1, Math.max(0, (vh - r.top) / (r.height + 90)));
    };
    const tick = () => {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.002) current = target;
      el.style.setProperty("--p", current.toFixed(4));
      el.style.setProperty("--p2", Math.min(1, Math.max(0, current * 1.22 - 0.22)).toFixed(4));
      raf = requestAnimationFrame(tick);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={ref} className="ab-wrap" style={{ "--p": 0, "--p2": 0 }}>
      {CARDS.map((c, i) => (
        <div key={c.title} className="ab-card">
          <div className="ab-head">
            <span className="ab-title">{c.title}</span>
            <span className={`mf-chip ${c.chip.cls}`} style={{ fontSize: 10 }}>{c.chip.t}</span>
          </div>
          <div className="ab-track">
            {c.segs.map((s) => <span key={s.from} className="ab-seg" style={{ left: `${s.from}%`, width: `${s.to - s.from}%`, background: s.c }}/>)}
            <span className="ab-fill" style={{ width: `calc(var(--p${i === 1 ? "2" : ""}, 1) * ${c.fillPct}%)` }}/>
            {c.notches.map((x) => <span key={x} className="ab-notch" style={{ left: `${x}%` }}/>)}
          </div>
          <div className="ab-legend">
            {c.rows.map((r) => (
              <div key={r.label} className="ab-row">
                <span className={`ab-dot${r.brand ? " brand" : ""}`} style={r.brand ? undefined : { background: r.c, border: "none" }}/>
                <span className="ab-label">{r.label}</span>
                <span className={`ab-pct${r.brand ? " brand" : ""}`}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>{`
        .ab-wrap { display: grid; gap: 16px; }
        .ab-card {
          background: white; border: 1px solid var(--line);
          border-radius: var(--radius-lg); padding: 24px;
          box-shadow: var(--shadow-card);
        }
        .ab-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .ab-title { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); font-weight: 600; }
        .ab-track {
          position: relative; height: 12px; border-radius: 999px;
          background: #EEF0F4; overflow: hidden;
        }
        .ab-seg {
          position: absolute; top: 0; bottom: 0;
        }
        .ab-fill {
          position: absolute; left: 2px; top: 2px; bottom: 2px;
          border-radius: 999px; min-width: 8px;
          background: var(--brand-gradient);
          box-shadow: 0 1px 4px -1px rgba(43, 121, 191, 0.5);
        }
        .ab-notch {
          position: absolute; top: 0; bottom: 0; width: 3px;
          background: white; transform: translateX(-50%);
        }
        .ab-legend { display: grid; gap: 9px; margin-top: 16px; }
        .ab-row { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--ink-2); }
        .ab-dot { width: 9px; height: 9px; border-radius: 999px; flex-shrink: 0; background: #D7DBE2; box-sizing: border-box; }
        .ab-dot.brand { background: var(--brand-gradient); border: none; }
        .ab-label { flex: 1; }
        .ab-pct { font-family: var(--font-mono); font-size: 12.5px; color: var(--ink-3); font-weight: 600; }
        .ab-pct.brand { color: var(--primary); }
      `}</style>
    </div>
  );
}
