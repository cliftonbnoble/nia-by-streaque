"use client";
/* Section III — ROI calculator. Two inputs the visitor controls: total
   enrollment and average annual tuition. Retention lift is a fixed, conservative
   assumption (0.25%), and Nia's price is deliberately NOT shown — the panel leads
   with the tuition protected per year so the price can't be gamed or screenshotted
   out of context. Everything is a hypothetical illustration to size the
   opportunity, not a forecast — and is labeled as such. */
import { useState } from "react";

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

/* fixed assumption — deliberately not exposed as a slider */
const LIFT = 0.25; // % of enrollment retained (conservative)

export default function RoiCalculator() {
  const [enroll, setEnroll] = useState(8000);
  const [tuition, setTuition] = useState(24000);

  const retained = Math.max(1, Math.round(enroll * (LIFT / 100)));
  const revenue = retained * tuition; // one conservative year per retained student

  const ePct = ((enroll - 1000) / (50000 - 1000)) * 100;
  const tPct = ((tuition - 6000) / (60000 - 6000)) * 100;

  return (
    <section className="mf-section alt">
      <div className="mf-container">
        <div className="mf-section-head" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 44px" }}>
          <span className="mf-eyebrow">The math</span>
          <h2 style={{ marginTop: 14 }}>Set your numbers. <span className="mf-grad-text">See how the math could work.</span></h2>
          <p style={{ marginTop: 16 }}>Nia&apos;s automated triage catches the quiet stalls that turn into withdrawals. Dial in your own enrollment and tuition to size the opportunity.</p>
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
              Assumes a conservative <strong>0.25% retention lift</strong>: about {retained} student{retained === 1 ? "" : "s"} a year,
              each counted as a single year of tuition.
            </p>
          </div>

          <div className="np-roi-result">
            <div aria-live="polite">
              <span className="np-roi-eyebrow">Tuition protected / year</span>
              <div className="np-roi-big">{usd(revenue)}</div>
              <p className="np-roi-by">by retaining <strong>~{retained} more students</strong> who would have slipped away.</p>
            </div>

            {/* the math, made legible — without exposing a per-student price */}
            <div className="np-roi-calc">
              <div className="np-roi-term"><span className="np-roi-term-n">{enroll.toLocaleString("en-US")}</span><span className="np-roi-term-l">students</span></div>
              <span className="np-roi-op">×</span>
              <div className="np-roi-term"><span className="np-roi-term-n">0.25%</span><span className="np-roi-term-l">retention lift</span></div>
              <span className="np-roi-op">×</span>
              <div className="np-roi-term"><span className="np-roi-term-n">{usd(tuition)}</span><span className="np-roi-term-l">avg tuition</span></div>
            </div>

            <p className="np-roi-foot-note">Illustrative only: these figures size the opportunity from your inputs and are not a forecast of results at your institution.</p>
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
        .np-roi-scale{ display: flex; justify-content: space-between; margin-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-3); }
        .np-roi-assume{ margin-top: auto; padding-top: 16px; font-size: 12px; line-height: 1.55; color: var(--ink-3); border-top: 1px solid var(--line); }

        /* range input — brand fill left of the thumb */
        .np-roi input[type=range]{ -webkit-appearance: none; appearance: none; width: 100%; height: 8px; border-radius: 999px; outline: none; cursor: pointer;
          background: linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-cyan) var(--pct), var(--line) var(--pct), var(--line) 100%); }
        .np-roi input[type=range]::-webkit-slider-thumb{ -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 0; box-shadow: 0 2px 8px rgba(11,16,32,0.28), 0 0 0 1px var(--line); cursor: pointer; transition: transform 120ms ease; }
        .np-roi input[type=range]::-webkit-slider-thumb:active{ transform: scale(1.12); }
        .np-roi input[type=range]::-moz-range-thumb{ width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 0; box-shadow: 0 2px 8px rgba(11,16,32,0.28), 0 0 0 1px var(--line); cursor: pointer; }
        /* keyboard focus ring (track sets outline:none, so restore it on the thumb) */
        .np-roi input[type=range]:focus-visible::-webkit-slider-thumb{ box-shadow: 0 0 0 3px var(--brand-blue), 0 2px 8px rgba(11,16,32,0.28); }
        .np-roi input[type=range]:focus-visible::-moz-range-thumb{ box-shadow: 0 0 0 3px var(--brand-blue), 0 2px 8px rgba(11,16,32,0.28); }

        /* result panel — branded dark */
        .np-roi-result{ position: relative; overflow: hidden; border-radius: var(--radius-xl); padding: 30px 32px; color: #fff; display: flex; flex-direction: column;
          background: linear-gradient(155deg, #161a5e 0%, #25278a 55%, #3a37ad 100%); box-shadow: 0 26px 60px -24px rgba(37,39,138,0.6); }
        .np-roi-result::before{ content: ""; position: absolute; width: 360px; height: 360px; right: -140px; top: -160px; background: radial-gradient(circle, rgba(43,179,223,0.3), transparent 62%); border-radius: 50%; }
        .np-roi-eyebrow{ position: relative; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.65); }
        .np-roi-big{ position: relative; font-family: var(--font-display); font-weight: 600; font-size: 52px; letter-spacing: -0.035em; line-height: 1; margin-top: 12px;
          background: linear-gradient(135deg,#aef0ff,#c7caff); -webkit-background-clip: text; background-clip: text; color: transparent; }
        /* .np-roi-result ancestor lifts specificity above the global .mf p rule (dark ink) */
        .np-roi-result .np-roi-by{ position: relative; font-size: 14.5px; color: rgba(255,255,255,0.92); margin: 14px 0 0; line-height: 1.5; }
        .np-roi-result .np-roi-by strong{ color: #fff; }

        /* the breakdown — three terms, no price */
        .np-roi-calc{ position: relative; margin-top: 26px; display: flex; align-items: stretch; gap: 10px; }
        .np-roi-term{ flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 13px 10px; text-align: center; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.13); border-radius: 12px; }
        .np-roi-term-n{ font-family: var(--font-display); font-weight: 600; font-size: 17px; letter-spacing: -0.02em; color: #fff; }
        .np-roi-term-l{ font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.05em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .np-roi-op{ align-self: center; font-size: 14px; color: rgba(255,255,255,0.5); }
        .np-roi-result .np-roi-foot-note{ position: relative; margin-top: auto; padding-top: 18px; font-size: 11.5px; line-height: 1.5; color: rgba(255,255,255,0.6); }

        @media (max-width: 860px){
          .np-roi{ grid-template-columns: 1fr; }
          .np-roi-big{ font-size: 44px; }
        }
        @media (max-width: 480px){
          .np-roi-calc{ gap: 6px; }
          .np-roi-term{ padding: 10px 6px; }
          .np-roi-term-n{ font-size: 14px; }
        }
      `}</style>
    </section>
  );
}
