"use client";
/* Section III — ROI calculator. Two sliders (enrollment + average tuition).
   Output: the tuition revenue Nia protects by retaining a handful of students
   who would otherwise have stalled — proving it pays for itself quickly.
   Assumptions are conservative and shown in plain sight. */
import { useState } from "react";

const RETENTION_LIFT = 0.001;   // ~0.1% of enrollment retained — deliberately modest
const NIA_PER_STUDENT = 4;      // illustrative platform cost per student / year

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

export default function RoiCalculator() {
  const [enroll, setEnroll] = useState(8000);
  const [tuition, setTuition] = useState(24000);

  const retained = Math.max(4, Math.round(enroll * RETENTION_LIFT));
  const revenue = retained * tuition;          // one conservative year per retained student
  const niaCost = enroll * NIA_PER_STUDENT;
  const roi = revenue / niaCost;
  const payback = Math.max(1, Math.round(12 / roi));
  const costPct = Math.max(4, Math.min(100, (niaCost / revenue) * 100));

  const ePct = ((enroll - 1000) / (50000 - 1000)) * 100;
  const tPct = ((tuition - 6000) / (60000 - 6000)) * 100;

  return (
    <section className="mf-section alt">
      <div className="mf-container">
        <div className="mf-section-head" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 44px" }}>
          <span className="mf-eyebrow">The math</span>
          <h2 style={{ marginTop: 14 }}>Retain a handful of students. <span className="mf-grad-text">Watch it pay for itself.</span></h2>
          <p style={{ marginTop: 16 }}>Nia&apos;s automated triage catches the quiet stalls that turn into withdrawals. Keep just a few more students enrolled and the tuition they bring back dwarfs the cost of the software.</p>
        </div>

        <div className="np-roi">
          <div className="np-roi-controls">
            <div className="np-roi-field">
              <div className="np-roi-label"><span>Total enrollment</span><strong>{enroll.toLocaleString("en-US")}</strong></div>
              <input type="range" min="1000" max="50000" step="500" value={enroll}
                onChange={(e) => setEnroll(+e.target.value)}
                style={{ "--pct": `${ePct}%` }} aria-label="Total enrollment"/>
              <div className="np-roi-scale"><span>1k</span><span>50k</span></div>
            </div>
            <div className="np-roi-field">
              <div className="np-roi-label"><span>Average annual tuition</span><strong>{usd(tuition)}</strong></div>
              <input type="range" min="6000" max="60000" step="1000" value={tuition}
                onChange={(e) => setTuition(+e.target.value)}
                style={{ "--pct": `${tPct}%` }} aria-label="Average annual tuition"/>
              <div className="np-roi-scale"><span>$6k</span><span>$60k</span></div>
            </div>
            <p className="np-roi-assume">
              Assumes a conservative ~0.1% retention lift ({retained} student{retained === 1 ? "" : "s"} a year) and a single year of
              tuition per student. Real institutions keep them enrolled for years.
            </p>
          </div>

          <div className="np-roi-result">
            <span className="np-roi-eyebrow">Tuition protected every year</span>
            <div className="np-roi-big">{usd(revenue)}</div>
            <p className="np-roi-by">by retaining <strong>~{retained} more students</strong> who would have slipped away.</p>

            <div className="np-roi-bars">
              <div className="np-roi-bar">
                <div className="np-roi-bar-top"><span>Nia, per year</span><span>{usd(niaCost)}</span></div>
                <span className="np-roi-track"><span className="np-roi-fill cost" style={{ width: `${costPct}%` }}/></span>
              </div>
              <div className="np-roi-bar">
                <div className="np-roi-bar-top"><span>Revenue protected</span><span>{usd(revenue)}</span></div>
                <span className="np-roi-track"><span className="np-roi-fill rev" style={{ width: "100%" }}/></span>
              </div>
            </div>

            <div className="np-roi-foot">
              <span className="np-roi-pill">{roi >= 10 ? Math.round(roi) : roi.toFixed(1)}× return on Nia</span>
              <span className="np-roi-pill ghost">pays for itself in ~{payback} month{payback === 1 ? "" : "s"}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .np-roi{ display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: stretch; max-width: 1000px; margin: 0 auto; }
        .np-roi-controls{ background: #fff; border: 1px solid var(--line); border-radius: var(--radius-xl); box-shadow: var(--shadow-card); padding: 30px 30px 26px; display: flex; flex-direction: column; }
        .np-roi-field{ margin-bottom: 28px; }
        .np-roi-label{ display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px; }
        .np-roi-label span{ font-size: 14px; color: var(--ink-2); }
        .np-roi-label strong{ font-family: var(--font-display); font-size: 22px; letter-spacing: -0.02em; color: var(--ink); }
        .np-roi-scale{ display: flex; justify-content: space-between; margin-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-4); }
        .np-roi-assume{ margin-top: auto; padding-top: 16px; font-size: 12px; line-height: 1.55; color: var(--ink-3); border-top: 1px solid var(--line); }

        /* range input — brand fill left of the thumb */
        .np-roi input[type=range]{ -webkit-appearance: none; appearance: none; width: 100%; height: 8px; border-radius: 999px; outline: none; cursor: pointer;
          background: linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-cyan) var(--pct), var(--line) var(--pct), var(--line) 100%); }
        .np-roi input[type=range]::-webkit-slider-thumb{ -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 0; box-shadow: 0 2px 8px rgba(11,16,32,0.28), 0 0 0 1px var(--line); cursor: pointer; transition: transform 120ms ease; }
        .np-roi input[type=range]::-webkit-slider-thumb:active{ transform: scale(1.12); }
        .np-roi input[type=range]::-moz-range-thumb{ width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 0; box-shadow: 0 2px 8px rgba(11,16,32,0.28), 0 0 0 1px var(--line); cursor: pointer; }

        /* result panel — branded dark */
        .np-roi-result{ position: relative; overflow: hidden; border-radius: var(--radius-xl); padding: 30px 32px; color: #fff;
          background: linear-gradient(155deg, #161a5e 0%, #25278a 55%, #3a37ad 100%); box-shadow: 0 26px 60px -24px rgba(37,39,138,0.6); }
        .np-roi-result::before{ content: ""; position: absolute; width: 360px; height: 360px; right: -140px; top: -160px; background: radial-gradient(circle, rgba(43,179,223,0.3), transparent 62%); border-radius: 50%; }
        .np-roi-eyebrow{ position: relative; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.65); }
        .np-roi-big{ position: relative; font-family: var(--font-display); font-weight: 600; font-size: 52px; letter-spacing: -0.035em; line-height: 1; margin-top: 12px;
          background: linear-gradient(135deg,#aef0ff,#c7caff); -webkit-background-clip: text; background-clip: text; color: transparent; }
        /* .np-roi-result ancestor lifts specificity above the global .mf p rule (dark ink) */
        .np-roi-result .np-roi-by{ position: relative; font-size: 14.5px; color: rgba(255,255,255,0.92); margin: 14px 0 0; line-height: 1.5; }
        .np-roi-result .np-roi-by strong{ color: #fff; }
        .np-roi-bars{ position: relative; margin-top: 24px; display: grid; gap: 14px; }
        .np-roi-bar-top{ display: flex; justify-content: space-between; font-size: 12px; color: rgba(255,255,255,0.78); margin-bottom: 7px; }
        .np-roi-track{ display: block; height: 12px; border-radius: 999px; background: rgba(255,255,255,0.12); overflow: hidden; }
        .np-roi-fill{ display: block; height: 100%; border-radius: 999px; transition: width 320ms cubic-bezier(0.2,0.8,0.2,1); }
        .np-roi-fill.cost{ background: rgba(255,255,255,0.4); }
        .np-roi-fill.rev{ background: linear-gradient(90deg,#2BB3DF,#8fe0f7); }
        .np-roi-foot{ position: relative; display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }
        .np-roi-pill{ font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.02em; color: #0b1020; background: #fff; border-radius: 999px; padding: 8px 14px; }
        .np-roi-pill.ghost{ color: #fff; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); }

        @media (max-width: 860px){
          .np-roi{ grid-template-columns: 1fr; }
          .np-roi-big{ font-size: 44px; }
        }
      `}</style>
    </section>
  );
}
