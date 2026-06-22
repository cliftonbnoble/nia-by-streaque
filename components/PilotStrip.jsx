import Link from "next/link";

/* Reusable proof beat. The product pages (/nia moats, /how-nia-works workflow)
   are otherwise 100% claim — this injects the one real, defensible signal:
   engagement (not outcomes), framed honestly. Matches the hero's live-pilot voice. */
export default function PilotStrip() {
  return (
    <div className="pilot-strip-wrap">
      <div className="mf-container">
        <div className="pilot-strip">
          <span className="pilot-strip-tag">
            <span aria-hidden="true" className="pilot-strip-dot"/>
            From the live pilot
          </span>
          <span className="pilot-strip-facts">
            <span><strong>16</strong> students using Nia weekly</span>
            <span className="pilot-strip-div" aria-hidden="true"/>
            <span><strong>6&ndash;8 wks</strong> of sustained engagement</span>
            <span className="pilot-strip-div" aria-hidden="true"/>
            <Link href="/contact#form" className="pilot-strip-cta">Hear the results first →</Link>
          </span>
        </div>
      </div>
      <style>{`
        .pilot-strip-wrap{ padding: 8px 0 40px; }
        .pilot-strip{
          display: flex; align-items: center; justify-content: center; gap: 22px; flex-wrap: wrap;
          padding: 16px 28px; border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(43,179,223,0.08), rgba(56,65,177,0.06));
          border: 1px solid rgba(56,65,177,0.14);
        }
        .pilot-strip-tag{
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--primary); font-weight: 600;
        }
        .pilot-strip-dot{ width: 7px; height: 7px; border-radius: 50%; background: #3ddc97; box-shadow: 0 0 10px rgba(61,220,151,0.8), 0 0 0 3px rgba(61,220,151,0.18); }
        .pilot-strip-facts{
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;
          font-size: 14px; color: var(--ink-2);
        }
        .pilot-strip-facts strong{ color: var(--ink); font-weight: 700; }
        .pilot-strip-cta{ display: inline-flex; align-items: center; gap: 5px; color: var(--primary); font-weight: 600; text-decoration: none; white-space: nowrap; transition: gap 200ms ease; }
        .pilot-strip-cta:hover{ gap: 9px; }
        .pilot-strip-div{ width: 1px; height: 16px; background: var(--line-2); }
        @media (max-width: 560px){ .pilot-strip-div{ display: none; } .pilot-strip-facts{ gap: 4px 14px; } }
      `}</style>
    </div>
  );
}
