/* "Each office holds a piece" — illustrated cards in the same dark-glass
   language as CoachCards / the security page. Each scene: the office's lit
   panel showing only what it can see, with the missed truth rendered as a
   dashed ghost outside the view. Server-safe (CSS/SMIL only). */

const ACCENTS = { academic: "#2BB3DF", finaid: "#2FB380", career: "#8F7DF7" };

const Defs = ({ id, accent }) => (
  <defs>
    <linearGradient id={`pc-g-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={accent}/><stop offset="100%" stopColor="#3841B1"/>
    </linearGradient>
    <linearGradient id={`pc-panel-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="rgba(255,255,255,0.07)"/><stop offset="100%" stopColor="rgba(255,255,255,0.015)"/>
    </linearGradient>
    <radialGradient id={`pc-glow-${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={`${accent}26`}/><stop offset="100%" stopColor={`${accent}00`}/>
    </radialGradient>
  </defs>
);

const TILT = { width: "100%", height: "100%", transform: "perspective(700px) rotateX(9deg)", transformOrigin: "50% 100%", filter: "drop-shadow(0 16px 20px rgba(0,0,0,0.45))" };

/* Academic advising — sees the gradebook; the lost job sits outside the view */
const AcademicArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="aa" accent={ACCENTS.academic}/>
    <circle cx="130" cy="90" r="150" fill="url(#pc-glow-aa)"/>
    <rect x="44" y="26" width="158" height="136" rx="12" fill="url(#pc-panel-aa)" stroke="rgba(255,255,255,0.12)"/>
    <rect x="58" y="40" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
    <rect x="146" y="36" width="44" height="14" rx="7" fill="rgba(43,179,223,0.14)" stroke="rgba(43,179,223,0.4)" strokeWidth="0.8"/>
    <text x="168" y="45.5" fontSize="7.5" textAnchor="middle" fill="#8fe0f7" fontFamily="var(--font-mono)" letterSpacing="0.06em">GPA 3.1</text>
    {[60, 82, 104, 126].map((y, i) => (
      <g key={y}>
        <rect x="58" y={y} width="132" height="14" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="66" y={y + 5} width={[58, 76, 48, 66][i]} height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <circle cx="180" cy={y + 7} r="3.5" fill={i === 2 ? "rgba(233,138,100,0.7)" : "rgba(47,179,128,0.6)"}/>
      </g>
    ))}
    {/* the blind spot — outside the panel's view */}
    <g className="pc-ghost">
      <rect x="222" y="58" width="76" height="58" rx="10" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.3" strokeDasharray="5 5"/>
      <path d="M248 78v18M253.5 81c-1.2-1.3-2.9-2-5.5-2-3 0-5 1.4-5 3.4 0 4.4 11 2.3 11 6.7 0 2-2.1 3.4-5.3 3.4-2.3 0-4.2-.7-5.4-1.9" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round"/>
      <text x="260" y="108" fontSize="7.5" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-mono)" letterSpacing="0.1em">JOB LOST</text>
    </g>
    <path d="M206 88 h12" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="2 4"/>
  </svg>
);

/* Financial aid — sees the missed payment; the crisis underneath is a ghost */
const FinAidArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="fa" accent={ACCENTS.finaid}/>
    <circle cx="130" cy="90" r="150" fill="url(#pc-glow-fa)"/>
    <rect x="44" y="26" width="158" height="136" rx="12" fill="url(#pc-panel-fa)" stroke="rgba(255,255,255,0.12)"/>
    <rect x="58" y="40" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
    {[
      { y: 58, ok: true, w: 60 }, { y: 82, ok: true, w: 74 },
    ].map((r) => (
      <g key={r.y}>
        <rect x="58" y={r.y} width="132" height="16" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="66" y={r.y + 6} width={r.w} height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <circle cx="180" cy={r.y + 8} r="4.5" fill="rgba(47,179,128,0.16)" stroke="rgba(47,179,128,0.6)" strokeWidth="1"/>
        <path d={`M177.8 ${r.y + 8} l1.6 1.6 3 -3.3`} fill="none" stroke="#7fe0bd" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    ))}
    <g className="pc-blink">
      <rect x="58" y="106" width="132" height="18" rx="5" fill="rgba(233,138,100,0.10)" stroke="rgba(233,138,100,0.5)"/>
      <text x="66" y="117.5" fontSize="8" fill="#f0a986" fontFamily="var(--font-mono)" letterSpacing="0.08em">PAYMENT MISSED</text>
      <path d="M178 111l4 7h-8z" fill="none" stroke="#f0a986" strokeWidth="1.2" strokeLinejoin="round"/>
    </g>
    <rect x="58" y="132" width="100" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
    {/* underneath, unseen */}
    <g className="pc-ghost" style={{ animationDelay: "1s" }}>
      <circle cx="258" cy="86" r="26" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.3" strokeDasharray="5 5"/>
      <path d="M258 95c-4.6-2.9-7.6-5.6-7.6-8.7 0-2.2 1.7-3.9 3.9-3.9 1.5 0 2.9.8 3.7 2.2.8-1.4 2.2-2.2 3.7-2.2 2.2 0 3.9 1.7 3.9 3.9 0 3.1-3 5.8-7.6 8.7z" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
      <text x="258" y="124" fontSize="7.5" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-mono)" letterSpacing="0.1em">UNDERNEATH</text>
    </g>
  </svg>
);

/* Career services — sees the résumé; the life around it is a ghost */
const CareerArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="cs" accent={ACCENTS.career}/>
    <circle cx="150" cy="90" r="150" fill="url(#pc-glow-cs)"/>
    <rect x="92" y="22" width="120" height="146" rx="10" fill="url(#pc-panel-cs)" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="116" cy="44" r="9" fill="rgba(143,125,247,0.2)" stroke="rgba(143,125,247,0.5)" strokeWidth="1"/>
    <rect x="132" y="38" width="52" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
    <rect x="132" y="48" width="36" height="4" rx="2" fill="rgba(255,255,255,0.10)"/>
    {[66, 80, 94, 108, 122, 136].map((y, i) => (
      <rect key={y} x="106" y={y} width={[88, 74, 84, 60, 78, 50][i]} height="4" rx="2" fill="rgba(255,255,255,0.12)"/>
    ))}
    {/* the life outside the résumé */}
    <g className="pc-ghost">
      <circle cx="50" cy="62" r="18" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeDasharray="4.5 4.5"/>
      <path d="M50 68c-3.4-2.1-5.6-4.1-5.6-6.4 0-1.6 1.3-2.9 2.9-2.9 1.1 0 2.1.6 2.7 1.6.6-1 1.6-1.6 2.7-1.6 1.6 0 2.9 1.3 2.9 2.9 0 2.3-2.2 4.3-5.6 6.4z" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3"/>
    </g>
    <g className="pc-ghost" style={{ animationDelay: "1.3s" }}>
      <circle cx="56" cy="124" r="16" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeDasharray="4.5 4.5"/>
      <path d="M56 116v16M60 119c-.9-1-2.2-1.5-4-1.5-2.2 0-3.7 1-3.7 2.5 0 3.3 8 1.7 8 5 0 1.5-1.6 2.5-3.9 2.5-1.7 0-3.1-.5-4-1.4" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3" strokeLinecap="round"/>
    </g>
    <g className="pc-ghost" style={{ animationDelay: "2.2s" }}>
      <circle cx="262" cy="92" r="20" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeDasharray="4.5 4.5"/>
      <circle cx="262" cy="92" r="9" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3"/>
      <path d="M262 86.5V92l3.5 2.5" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3" strokeLinecap="round"/>
      <text x="262" y="124" fontSize="7.5" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-mono)" letterSpacing="0.1em">A LIFE</text>
    </g>
  </svg>
);

const OFFICES = [
  { id: "academic", office: "Academic advising", blind: "doesn't know the student just lost their job.", Art: AcademicArt,
    icon: <><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5a8 8 0 0 0 12 0v-5"/></> },
  { id: "finaid", office: "Financial aid", blind: "can't see the wellness crisis underneath the missed payment.", Art: FinAidArt,
    icon: <><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82"/></> },
  { id: "career", office: "Career services", blind: "is working from a résumé instead of a life.", Art: CareerArt,
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
];

export default function ProblemCards() {
  return (
    <div className="pc-grid mf-stack-sm" role="list" aria-label="What each office can and cannot see">
      {OFFICES.map(({ id, office, blind, Art, icon }) => (
        <div key={id} className="pc-card" role="listitem" style={{ "--pc-accent": ACCENTS[id] }}>
          <div className="pc-art" style={{ background: `radial-gradient(ellipse at 42% 0%, ${ACCENTS[id]}0D, transparent 70%)` }}>
            <Art/>
          </div>
          <div className="pc-body">
            <div className="pc-head">
              <span className="pc-ic" style={{ color: ACCENTS[id] }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </span>
              <h3>{office}</h3>
            </div>
            <p><span className="pc-dim">The {office.toLowerCase()} </span>{blind}</p>
            <div className="pc-foot">
              <span className="pc-foot-box"/>
              blind spot
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .pc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 8px; }
        .pc-card {
          overflow: hidden;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);
          border-radius: var(--radius-lg); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
          display: flex; flex-direction: column;
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }
        .pc-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.22); border-color: color-mix(in srgb, var(--pc-accent) 45%, transparent); }
        .pc-art {
          height: 168px; flex-shrink: 0;
          mask-image: linear-gradient(180deg, black 62%, transparent 99%);
          -webkit-mask-image: linear-gradient(180deg, black 62%, transparent 99%);
        }
        .pc-body { padding: 2px 22px 20px; }
        .pc-head { display: flex; align-items: center; gap: 9px; }
        .pc-ic { display: inline-flex; }
        .pc-body h3 { color: white; font-size: 16px; margin: 0; }
        .pc-body p { color: rgba(255,255,255,0.88); font-size: 15.5px; line-height: 1.55; margin: 10px 0 0; }
        .pc-dim { color: rgba(255,255,255,0.42); }
        .pc-foot {
          display: flex; align-items: center; gap: 8px; margin-top: 18px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.38);
        }
        .pc-foot-box { width: 15px; height: 15px; border: 1.5px dashed rgba(255,255,255,0.28); border-radius: 4px; display: inline-block; }
        .pc-ghost { animation: pc-ghost 4.6s ease-in-out infinite; }
        @keyframes pc-ghost { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.85; } }
        .pc-blink { animation: pc-blink 3.2s ease-in-out infinite; }
        @keyframes pc-blink { 0%, 100% { opacity: 0.75; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .pc-grid * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
