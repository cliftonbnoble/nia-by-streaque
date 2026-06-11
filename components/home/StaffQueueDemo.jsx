"use client";
/* "Nia for Staff" — live early-alert queue in the same design system as the
   student chat demo. One loop: a new student lands in the queue, the signal
   surfaces, Nia's draft is approved, the tag flips to Nudged, and the audit
   line confirms the receipt trail. Quiet by design. */
import { useEffect, useState } from "react";

const LOOP_MS = 17000;

const I = ({ s = 11, sw = 2.1, children }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const IcCheck = (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>;
const IcPulse = (p) => <I {...p}><path d="M3 12h4l2-7 4 14 2-7h6"/></I>;

const SETTLED = [
  { img: "/students/jonas.png", n: "Jonas Kim", s: "GPA dip · 3 weeks", tag: "Draft reply", kind: "warm" },
  { img: "/students/anya.png", n: "Anya Patel", s: "low engagement", tag: "Meeting set", kind: "neutral" },
];

const CHIPS = [
  { t: "Ranked by impact", at: 3800, c: "#1a8fc0", tint: "rgba(43,179,223,0.10)", line: "rgba(43,179,223,0.45)" },
  { t: "One-click reply drafts", at: 5600, c: "#3D4ED8", tint: "rgba(61,78,216,0.07)", line: "rgba(61,78,216,0.35)" },
  { t: "Audit log on every action", at: 9600, c: "#0d8a5a", tint: "rgba(13,138,90,0.08)", line: "rgba(13,138,90,0.40)" },
  { t: "Role-based permissions", at: 12800, c: "#475569", tint: "rgba(15,23,42,0.04)", line: "var(--line-2)" },
];

const Tag = ({ kind, children }) => (
  <span className={`sq-tag sq-tag-${kind}`}>{children}</span>
);

export default function StaffQueueDemo() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="sq-panel" key={cycle} aria-label="Nia staff demo: a new early alert arrives, the draft is approved, and the nudge is logged">
      <div className="sq-bar">
        <span className="sq-bar-ic"><IcPulse s={13} sw={2}/></span>
        <span className="sq-bar-name">Early-alert queue</span>
        <span className="sq-count">
          <span className="sq-count-old">12</span>
          <span className="sq-count-new" style={{ animationDelay: "2100ms" }}>13</span>
        </span>
        <span className="sq-sync"><span className="sq-sync-dot"/> synced</span>
      </div>

      <div className="sq-body">
        {/* the new arrival */}
        <div className="sq-row sq-arrive" style={{ animationDelay: "2000ms" }}>
          <img className="sq-av" src="/students/maya.png" alt="" width="24" height="24"/>
          <span className="sq-row-main">
            <span className="sq-row-name">Maya Reyes</span>
            <span className="sq-row-sig sq-fadein" style={{ animationDelay: "2700ms" }}>missed BIO 201 quiz · 2nd signal this month</span>
          </span>
          <span className="sq-rank sq-pop" style={{ animationDelay: "3500ms" }}>#1</span>
          <span className="sq-tagstack">
            <span className="sq-tagswap-a" style={{ animationDelay: "8200ms" }}><Tag kind="amber">Draft ready</Tag></span>
            <span className="sq-tagswap-b" style={{ animationDelay: "8300ms" }}><Tag kind="green"><IcCheck s={8} sw={3.4}/> Nudged</Tag></span>
          </span>
        </div>

        {/* the issue + the draft, expanded tastefully, then tucked away */}
        <div className="sq-strip">
          <div className="sq-strip-inner">
            <div className="sq-signals">
              <span>Canvas · quiz missed</span>
              <span>3-day inactivity</span>
            </div>
            <div className="sq-draft">
              <span className="sq-draft-txt">&ldquo;Hey Maya, saw the quiz didn&apos;t go your way. Want a 10-min reset before Friday?&rdquo;</span>
              <button className="sq-approve" style={{ animationDelay: "7400ms" }}>Approve &amp; send</button>
            </div>
          </div>
        </div>

        {/* settled queue */}
        {SETTLED.map((r, i) => (
          <div key={r.n} className="sq-row sq-rise" style={{ animationDelay: `${500 + i * 180}ms` }}>
            <img className="sq-av" src={r.img} alt="" width="24" height="24"/>
            <span className="sq-row-main">
              <span className="sq-row-name">{r.n}</span>
              <span className="sq-row-sig">{r.s}</span>
            </span>
            <Tag kind={r.kind}>{r.tag}</Tag>
          </div>
        ))}

        {/* Ravi — handled autonomously mid-loop */}
        <div className="sq-row sq-rise" style={{ animationDelay: "860ms" }}>
          <img className="sq-av" src="/students/ravi.png" alt="" width="24" height="24"/>
          <span className="sq-row-main">
            <span className="sq-row-name">Ravi Shah</span>
            <span className="sq-row-sig">aid form overdue</span>
          </span>
          <span className="sq-tagstack">
            <span className="sq-tagswap-a" style={{ animationDelay: "11200ms" }}><Tag kind="amber">Aid overdue</Tag></span>
            <span className="sq-tagswap-b" style={{ animationDelay: "11300ms" }}><Tag kind="green"><IcCheck s={8} sw={3.4}/> Auto-routed</Tag></span>
          </span>
        </div>

        <div className="sq-audit sq-rise" style={{ animationDelay: "9400ms" }}>
          <span className="sq-audit-check"><IcCheck s={8} sw={3.2}/></span>
          Nudge sent in your voice · logged for review · 8:07 AM
        </div>
      </div>

      <div className="sq-foot">
        {CHIPS.map((c) => (
          <span key={c.t} className="sq-chip" style={{ animationDelay: `${c.at}ms`, color: c.c, background: c.tint, borderColor: c.line }}>
            <span className="sq-chip-dot" style={{ background: c.c }}/>
            {c.t}
          </span>
        ))}
      </div>

      <style>{`
        .sq-panel {
          background: #f4f6f8; border: 1px solid var(--line); border-radius: var(--radius);
          overflow: hidden; display: flex; flex-direction: column; margin-top: 18px;
        }
        .sq-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: rgba(255,255,255,0.85); border-bottom: 1px solid rgba(15,23,42,0.07); }
        .sq-bar-ic { width: 22px; height: 22px; border-radius: 7px; background: var(--brand-gradient); color: white; display: inline-flex; align-items: center; justify-content: center; }
        .sq-bar-name { font-family: var(--font-display); font-weight: 600; font-size: 13px; color: var(--ink); }
        .sq-count { position: relative; font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--ink-3); width: 18px; }
        .sq-count-old, .sq-count-new { position: absolute; left: 0; top: 50%; transform: translateY(-50%); }
        .sq-count-old { animation: sq-gone 250ms ease both; animation-delay: 2100ms; }
        .sq-count-new { opacity: 0; animation: sq-drop 350ms cubic-bezier(0.2, 1.2, 0.4, 1) both; }
        @keyframes sq-drop { from { opacity: 0; transform: translateY(-130%); } to { opacity: 1; transform: translateY(-50%); } }
        .sq-sync { margin-left: auto; display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--success); }
        .sq-sync-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--success); box-shadow: 0 0 6px rgba(13,138,90,0.5); animation: sq-breathe 2.4s ease-in-out infinite; }
        @keyframes sq-breathe { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }

        .sq-body { padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 7px; min-height: 312px; box-sizing: border-box; }
        .sq-row {
          display: flex; align-items: center; gap: 9px;
          background: white; border: 1px solid rgba(15,23,42,0.07);
          border-radius: 10px; padding: 9px 11px;
          box-shadow: 0 1px 3px rgba(15,23,42,0.05);
        }
        .sq-rise { opacity: 0; animation: sq-rise 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes sq-rise { from { opacity: 0; transform: translateY(9px); } to { opacity: 1; transform: none; } }
        .sq-arrive {
          opacity: 0;
          animation: sq-arrive 1400ms cubic-bezier(0.16, 1, 0.3, 1) both;
          border-color: rgba(43,179,223,0.35);
        }
        @keyframes sq-arrive {
          0% { opacity: 0; transform: translateY(-10px); background: rgba(43,179,223,0.14); }
          30% { opacity: 1; transform: none; background: rgba(43,179,223,0.10); }
          100% { opacity: 1; background: white; }
        }
        .sq-av {
          width: 24px; height: 24px; border-radius: 50%; flex: 0 0 auto;
          object-fit: cover; box-shadow: 0 0 0 1px rgba(15,23,42,0.08);
        }
        .sq-arrive .sq-av { box-shadow: 0 0 0 2px rgba(43,179,223,0.45); }
        .sq-row-main { flex: 1; min-width: 0; display: grid; line-height: 1.3; }
        .sq-row-name { font-family: var(--font-display); font-weight: 600; font-size: 12px; color: var(--ink); }
        .sq-row-sig { font-size: 10.5px; color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .sq-fadein { opacity: 0; animation: sq-fadein 420ms ease both; }
        @keyframes sq-fadein { to { opacity: 1; } }
        .sq-rank {
          font-family: var(--font-mono); font-size: 9px; font-weight: 700; flex: 0 0 auto;
          color: #a8702c; background: rgba(233,168,100,0.14); border: 1px solid rgba(233,168,100,0.4);
          border-radius: 999px; padding: 2.5px 7px;
          opacity: 0;
        }
        .sq-pop { animation: sq-pop 340ms cubic-bezier(0.2, 1.4, 0.4, 1) both; }
        @keyframes sq-pop { from { opacity: 0; transform: scale(0.4); } to { opacity: 1; transform: scale(1); } }
        .sq-tag {
          display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto;
          font-family: var(--font-mono); font-size: 9px; font-weight: 600; letter-spacing: 0.03em;
          border-radius: 999px; padding: 3px 8px; white-space: nowrap;
        }
        .sq-tag-amber { color: #a8702c; background: rgba(233,168,100,0.14); border: 1px solid rgba(233,168,100,0.4); }
        .sq-tag-green { color: var(--success); background: rgba(13,138,90,0.08); border: 1px solid rgba(13,138,90,0.3); }
        .sq-tag-warm { color: #a8702c; background: rgba(233,168,100,0.10); border: 1px solid rgba(233,168,100,0.3); }
        .sq-tag-neutral { color: var(--ink-3); background: var(--bg-alt); border: 1px solid var(--line); }
        .sq-tagstack { position: relative; flex: 0 0 auto; display: inline-flex; }
        .sq-tagswap-a { animation: sq-gone 240ms ease both; }
        .sq-tagswap-b { position: absolute; right: 0; top: 0; opacity: 0; animation: sq-pop 340ms cubic-bezier(0.2, 1.4, 0.4, 1) both; }
        @keyframes sq-gone { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }

        /* the issue detail — expands after the arrival, tucks away once sent */
        .sq-strip { overflow: hidden; animation: sq-strip ${LOOP_MS}ms linear both; max-height: 0; opacity: 0; }
        @keyframes sq-strip {
          0%, 26% { max-height: 0; opacity: 0; }
          30%, 46% { max-height: 96px; opacity: 1; animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
          51%, 100% { max-height: 0; opacity: 0; }
        }
        .sq-strip-inner {
          margin: 0 2px; padding: 10px 12px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eef2ff 100%);
          border: 1px solid #c7d2fe; border-radius: 10px;
          display: grid; gap: 8px;
        }
        .sq-signals { display: flex; gap: 5px; flex-wrap: wrap; }
        .sq-signals span {
          font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.06em; text-transform: uppercase;
          color: #64748b; background: white; border: 1px solid var(--line); border-radius: 999px; padding: 2.5px 8px;
        }
        .sq-draft { display: flex; align-items: center; gap: 10px; }
        .sq-draft-txt { flex: 1; min-width: 0; font-size: 11px; line-height: 1.45; color: var(--ink-2); font-style: italic; }
        .sq-approve {
          flex: 0 0 auto; border: 0; cursor: default; font-family: inherit;
          background: var(--brand-gradient); color: white;
          font-size: 10px; font-weight: 600; border-radius: 7px; padding: 7px 11px;
          box-shadow: 0 3px 9px -3px rgba(56,65,177,0.5);
          animation: sq-press 380ms ease;
        }
        @keyframes sq-press { 0%, 100% { transform: scale(1); } 45% { transform: scale(0.92); filter: brightness(0.9); } }

        .sq-audit {
          display: flex; align-items: center; gap: 7px; margin-top: auto;
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.03em; color: var(--ink-3);
          padding: 8px 11px; background: rgba(13,138,90,0.05);
          border: 1px solid rgba(13,138,90,0.18); border-radius: 9px;
        }
        .sq-audit-check {
          width: 14px; height: 14px; border-radius: 50%; flex: 0 0 auto;
          background: rgba(13,138,90,0.14); color: var(--success);
          display: inline-flex; align-items: center; justify-content: center;
        }

        .sq-foot { display: flex; gap: 6px; flex-wrap: wrap; padding: 11px 14px; border-top: 1px solid rgba(15,23,42,0.06); background: rgba(255,255,255,0.6); min-height: 44px; box-sizing: border-box; }
        .sq-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.05em;
          border: 1px solid; border-radius: 999px; padding: 3.5px 9px; white-space: nowrap;
          opacity: 0; animation: sq-chip-in 460ms cubic-bezier(0.2, 1.2, 0.4, 1) both;
        }
        .sq-chip-dot { width: 5px; height: 5px; border-radius: 50%; flex: 0 0 auto; }
        @keyframes sq-chip-in { from { opacity: 0; transform: translateY(6px) scale(0.92); } to { opacity: 1; transform: none; } }

        @media (prefers-reduced-motion: reduce) {
          .sq-panel * { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
