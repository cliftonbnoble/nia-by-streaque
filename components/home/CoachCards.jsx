/* Five coaches — illustrated cards in the security page's "technical readers"
   language: dark glass cards, lit-from-above mini-scenes with perspective
   tilt, one signature animation per coach. Server-safe (CSS/SMIL only). */

const ACCENTS = {
  academic: "#2BB3DF",
  career: "#8F7DF7",
  finance: "#2FB380",
  wellness: "#E98A64",
  admin: "#6E7BF2",
};

const Defs = ({ id, accent }) => (
  <defs>
    <linearGradient id={`cc-g-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={accent}/><stop offset="100%" stopColor="#3841B1"/>
    </linearGradient>
    <linearGradient id={`cc-panel-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="rgba(255,255,255,0.07)"/><stop offset="100%" stopColor="rgba(255,255,255,0.015)"/>
    </linearGradient>
    <radialGradient id={`cc-glow-${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={`${accent}29`}/><stop offset="100%" stopColor={`${accent}00`}/>
    </radialGradient>
  </defs>
);

const TILT = { width: "100%", height: "100%", transform: "perspective(700px) rotateX(9deg)", transformOrigin: "50% 100%", filter: "drop-shadow(0 16px 20px rgba(0,0,0,0.45))" };
const FLAT = { width: "100%", height: "100%", filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.35))" };

/* Academic — degree-progress panel; courses check off, momentum bar fills */
const AcademicArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="ac" accent={ACCENTS.academic}/>
    <circle cx="160" cy="90" r="150" fill="url(#cc-glow-ac)"/>
    <rect x="78" y="24" width="164" height="138" rx="12" fill="url(#cc-panel-ac)" stroke="rgba(255,255,255,0.12)"/>
    <rect x="92" y="38" width="58" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
    {[
      { y: 58, w: 74, at: "0s" }, { y: 82, w: 90, at: "1.4s" }, { y: 106, w: 64, at: "2.8s" },
    ].map((r, i) => (
      <g key={i}>
        <rect x="92" y={r.y} width="136" height="16" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="100" y={r.y + 6} width={r.w} height="4" rx="2" fill="rgba(255,255,255,0.16)"/>
        <g className="cc-seq" style={{ animationDelay: r.at }}>
          <circle cx="218" cy={r.y + 8} r="6" fill="rgba(43,179,223,0.18)" stroke={ACCENTS.academic} strokeWidth="1.2"/>
          <path d={`M215 ${r.y + 8} l2.2 2.2 4 -4.4`} fill="none" stroke="#8fe0f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    ))}
    <rect x="92" y="134" width="136" height="9" rx="4.5" fill="rgba(255,255,255,0.06)"/>
    <rect x="92" y="134" height="9" rx="4.5" fill="url(#cc-g-ac)" className="cc-fill" style={{ transformOrigin: "92px 138px" }} width="136"/>
    <g className="cc-bob">
      <circle cx="250" cy="40" r="14" fill="var(--ink)" stroke="rgba(43,179,223,0.55)" strokeWidth="1.4"/>
      <path d="M242 39l8-4 8 4-8 4-8-4z" fill="#5ec7e6"/>
      <path d="M246 41.5v4c0 1.6 8 1.6 8 0v-4" fill="none" stroke="#5ec7e6" strokeWidth="1.4"/>
    </g>
  </svg>
);

/* Career — a path of milestones; a spark travels it toward the flag */
const CareerArt = () => (
  <svg viewBox="0 0 320 190" style={FLAT}>
    <Defs id="ca" accent={ACCENTS.career}/>
    <circle cx="160" cy="95" r="150" fill="url(#cc-glow-ca)"/>
    <path id="cc-path" d="M48 152 C 110 150, 112 96, 165 92 S 252 64, 268 40" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 6"/>
    {[
      { x: 48, y: 152, l: "Year 1" }, { x: 150, y: 95, l: "Internship" }, { x: 268, y: 40, l: "" },
    ].map((n, i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r={i === 2 ? 0 : 5.5} fill="var(--ink)" stroke="rgba(143,125,247,0.6)" strokeWidth="1.4"/>
        {n.l && <text x={n.x} y={n.y + 19} fontSize="8" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontFamily="var(--font-mono)" letterSpacing="0.06em">{n.l}</text>}
      </g>
    ))}
    <g className="cc-pulse" style={{ transformOrigin: "268px 40px" }}>
      <circle cx="268" cy="40" r="15" fill="rgba(143,125,247,0.16)" stroke="rgba(143,125,247,0.5)" strokeWidth="1.3"/>
      <path d="M264 47V32.5h9l-2.6 3.5 2.6 3.5h-6.4" fill="none" stroke="#c9bdfb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <circle r="4" fill="#c9bdfb">
      <animateMotion dur="4s" repeatCount="indefinite" path="M48 152 C 110 150, 112 96, 165 92 S 252 64, 268 40"/>
    </circle>
    <g className="cc-bob" style={{ animationDelay: "0.6s" }}>
      <rect x="64" y="52" width="78" height="22" rx="11" fill="rgba(143,125,247,0.12)" stroke="rgba(143,125,247,0.4)"/>
      <text x="103" y="66" fontSize="9" textAnchor="middle" fill="#c9bdfb" fontFamily="var(--font-mono)" letterSpacing="0.08em">MATCH 92%</text>
    </g>
  </svg>
);

/* Finance — aid dashboard; the award meter fills, deadline chip stays lit */
const FinanceArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="fi" accent={ACCENTS.finance}/>
    <circle cx="160" cy="90" r="150" fill="url(#cc-glow-fi)"/>
    <rect x="70" y="28" width="180" height="130" rx="12" fill="url(#cc-panel-fi)" stroke="rgba(255,255,255,0.12)"/>
    <g className="cc-bob">
      <circle cx="106" cy="70" r="22" fill="rgba(47,179,128,0.14)" stroke="rgba(47,179,128,0.55)" strokeWidth="1.6"/>
      <path d="M106 58v24M112 63.5c-1.6-1.8-3.6-2.6-6-2.6-3.6 0-6 1.8-6 4.4 0 5.8 12 3 12 8.6 0 2.6-2.6 4.4-6.2 4.4-2.6 0-4.8-.9-6.2-2.4" fill="none" stroke="#7fe0bd" strokeWidth="1.8" strokeLinecap="round"/>
    </g>
    <rect x="142" y="52" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
    <rect x="142" y="64" width="42" height="4" rx="2" fill="rgba(255,255,255,0.10)"/>
    <rect x="142" y="80" width="92" height="9" rx="4.5" fill="rgba(255,255,255,0.06)"/>
    <rect x="142" y="80" width="92" height="9" rx="4.5" fill="url(#cc-g-fi)" className="cc-fill" style={{ transformOrigin: "142px 84px" }}/>
    {[{ y: 106, t: "FAFSA filed" }, { y: 128, t: "Book grant applied" }].map((r, i) => (
      <g key={r.t} className="cc-seq" style={{ animationDelay: `${i * 1.6}s` }}>
        <circle cx="92" cy={r.y + 6} r="6" fill="rgba(47,179,128,0.16)" stroke="rgba(47,179,128,0.6)" strokeWidth="1.2"/>
        <path d={`M89 ${r.y + 6} l2.2 2.2 4 -4.4`} fill="none" stroke="#7fe0bd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="106" y={r.y + 9.5} fontSize="9.5" fill="rgba(255,255,255,0.62)" fontFamily="var(--font-mono)">{r.t}</text>
      </g>
    ))}
  </svg>
);

/* Wellness — a heartbeat that draws itself; calm rings breathe behind */
const WellnessArt = () => (
  <svg viewBox="0 0 320 190" style={FLAT}>
    <Defs id="we" accent={ACCENTS.wellness}/>
    <circle cx="160" cy="95" r="150" fill="url(#cc-glow-we)"/>
    <circle cx="160" cy="95" r="56" fill="none" stroke="rgba(233,138,100,0.18)" className="cc-breathe"/>
    <circle cx="160" cy="95" r="74" fill="none" stroke="rgba(233,138,100,0.10)" className="cc-breathe" style={{ animationDelay: "1.4s" }}/>
    <path
      className="cc-ecg"
      d="M34 95 H110 l10 -22 14 44 12 -30 8 8 h28 l10 -22 14 44 12 -30 8 8 H286"
      fill="none" stroke="#f0a986" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" pathLength="100"
    />
    <g className="cc-pulse" style={{ transformOrigin: "160px 95px" }}>
      <circle cx="160" cy="95" r="19" fill="var(--ink)" stroke="rgba(233,138,100,0.6)" strokeWidth="1.5"/>
      <path d="M160 102c-5.5-3.4-9-6.6-9-10.2 0-2.6 2-4.6 4.6-4.6 1.8 0 3.4 1 4.4 2.6 1-1.6 2.6-2.6 4.4-2.6 2.6 0 4.6 2 4.6 4.6 0 3.6-3.5 6.8-9 10.2z" fill="#E98A64"/>
    </g>
    <text x="160" y="166" fontSize="8.5" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-mono)" letterSpacing="0.14em">HUMAN HANDOFF · ALWAYS AVAILABLE</text>
  </svg>
);

/* Administrative — the red-tape form, cleared line by line */
const AdminArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <Defs id="ad" accent={ACCENTS.admin}/>
    <circle cx="160" cy="90" r="150" fill="url(#cc-glow-ad)"/>
    <rect x="92" y="22" width="136" height="146" rx="10" fill="url(#cc-panel-ad)" stroke="rgba(255,255,255,0.12)"/>
    <rect x="106" y="36" width="52" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
    {[54, 76, 98, 120].map((y, i) => (
      <g key={y}>
        <rect x="106" y={y} width="10" height="10" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)"/>
        <rect x="124" y={y + 3} width={[64, 84, 56, 74][i]} height="4" rx="2" fill="rgba(255,255,255,0.13)"/>
        <g className="cc-seq" style={{ animationDelay: `${i * 1.1}s` }}>
          <path d={`M107.5 ${y + 5} l3 3 5 -6`} fill="none" stroke="#9fb0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    ))}
    <g className="cc-stamp">
      <circle cx="196" cy="138" r="20" fill="rgba(110,123,242,0.12)" stroke="rgba(110,123,242,0.65)" strokeWidth="1.6" strokeDasharray="3 4"/>
      <text x="196" y="141.5" fontSize="8" textAnchor="middle" fill="#9fb0ff" fontFamily="var(--font-mono)" letterSpacing="0.12em" fontWeight="600">CLEARED</text>
    </g>
  </svg>
);

const COACHES = [
  { id: "academic", name: "Academic", line: "Courses, momentum, the next right step.", chips: ["Degree audit", "Canvas-aware", "Study plans"], Art: AcademicArt,
    icon: <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/> },
  { id: "career", name: "Career", line: "Internships, paths, what comes after.", chips: ["Major → career", "Internships", "Résumé"], Art: CareerArt,
    icon: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></> },
  { id: "finance", name: "Finance", line: "Aid, holds, the bill that just changed.", chips: ["FAFSA", "Deadlines", "Aid appeals"], Art: FinanceArt,
    icon: <><circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.7-.8-1.8-1.3-3-1.3-1.8 0-3 .9-3 2.2 0 2.9 6 1.5 6 4.3 0 1.3-1.3 2.2-3.1 2.2-1.3 0-2.4-.5-3.1-1.2M12 6.5v11"/></> },
  { id: "wellness", name: "Wellness", line: "Stress, belonging, when to reach a human.", chips: ["Check-ins", "Belonging", "Human handoff"], Art: WellnessArt,
    icon: <path d="M12 21c-6-3.8-9-7.3-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.7-3 7.2-9 11z"/> },
  { id: "admin", name: "Administrative", line: "Forms, deadlines, registration, red tape.", chips: ["Forms", "Registration", "Red tape"], Art: AdminArt,
    icon: <><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></> },
];

export default function CoachCards() {
  return (
    <div className="cc-track" role="list" aria-label="The five Nia coaches">
      {COACHES.map(({ id, name, line, chips, Art, icon }) => (
        <div key={id} className="cc-card" role="listitem" style={{ "--cc-accent": ACCENTS[id] }}>
          <div className="cc-art" style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENTS[id]}0D, transparent 70%)` }}>
            <Art/>
          </div>
          <div className="cc-body">
            <div className="cc-head">
              <span className="cc-ic" style={{ color: ACCENTS[id] }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </span>
              <h3>{name}</h3>
            </div>
            <p>{line}</p>
            <div className="cc-chips">
              {chips.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .cc-track {
          display: flex; gap: 12px; margin-top: 8px;
          overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none;
          padding: 6px 2px 10px;
        }
        .cc-track::-webkit-scrollbar { display: none; }
        .cc-card {
          flex: 1 0 212px; min-width: 0; scroll-snap-align: start; overflow: hidden;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);
          border-radius: var(--radius-lg); backdrop-filter: blur(6px);
          display: flex; flex-direction: column;
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }
        .cc-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.05); border-color: color-mix(in srgb, var(--cc-accent) 45%, transparent); }
        .cc-art {
          height: 142px; flex-shrink: 0;
          mask-image: linear-gradient(180deg, black 62%, transparent 99%);
          -webkit-mask-image: linear-gradient(180deg, black 62%, transparent 99%);
        }
        .cc-body { padding: 4px 16px 18px; }
        .cc-head { display: flex; align-items: center; gap: 8px; }
        .cc-ic { display: inline-flex; }
        .cc-body h3 { color: white; font-size: 15.5px; margin: 0; }
        .cc-body p { color: rgba(255,255,255,0.6); font-size: 12.5px; line-height: 1.5; margin: 7px 0 0; }
        .cc-chips { display: flex; gap: 5px; margin-top: 12px; flex-wrap: wrap; }
        .cc-chips span {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.62); background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 3px 8px;
          white-space: nowrap;
        }
        .cc-bob { animation: cc-bob 3.4s ease-in-out infinite; }
        @keyframes cc-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .cc-pulse { animation: cc-pulse 3s ease-in-out infinite; }
        @keyframes cc-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        .cc-breathe { animation: cc-breathe 4.2s ease-in-out infinite; transform-origin: 160px 95px; }
        @keyframes cc-breathe { 0%, 100% { transform: scale(0.96); opacity: 0.6; } 50% { transform: scale(1.06); opacity: 1; } }
        .cc-fill { animation: cc-fillx 5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        @keyframes cc-fillx { 0% { transform: scaleX(0.1); } 55%, 88% { transform: scaleX(0.66); } 96%, 100% { transform: scaleX(0.1); } }
        .cc-seq { opacity: 0; animation: cc-seq 5.4s ease infinite; }
        @keyframes cc-seq { 0%, 6% { opacity: 0; transform: scale(0.5); } 12%, 86% { opacity: 1; transform: scale(1); } 94%, 100% { opacity: 0; transform: scale(0.5); } }
        .cc-seq { transform-box: fill-box; transform-origin: center; }
        .cc-stamp { opacity: 0; animation: cc-stamp 5.4s ease infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes cc-stamp { 0%, 58% { opacity: 0; transform: scale(1.6) rotate(-14deg); } 66%, 88% { opacity: 1; transform: scale(1) rotate(-8deg); } 96%, 100% { opacity: 0; } }
        .cc-ecg { stroke-dasharray: 100; animation: cc-ecg 4.4s linear infinite; }
        @keyframes cc-ecg { 0% { stroke-dashoffset: 100; } 55%, 82% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -100; } }
        @media (max-width: 760px) {
          .cc-card { flex: 0 0 228px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cc-track * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
