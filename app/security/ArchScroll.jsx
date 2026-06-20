"use client";
/* "For the technical readers" — dark horizontal scroller.
   Each card leads with a bespoke illustration (Linear-style), followed by a
   one-line summary and name-only chips. Implementation specifics stay out of
   public view by design — the full detail lives in the security packet. */
import { useRef } from "react";

const ARCH_GROUPS = [
  { id: "identity", t: "Identity & access", icon: "id", art: "identity",
    d: "Every request proves who it's from, with no exceptions and no implicit trust.",
    chips: ["Auth0", "SSO", "Service-to-service"] },
  { id: "data", t: "Data protection", icon: "lock", art: "data",
    d: "Encrypted at rest and in transit, with a separate key for every campus.",
    chips: ["AES-256", "Per-campus keys", "Key vault"] },
  { id: "app", t: "Application security", icon: "shield", art: "app",
    d: "Hardened at every surface: every input validated, every response locked down.",
    chips: ["Strict headers", "Input validation", "Sanitization"] },
  { id: "infra", t: "Infrastructure", icon: "cloud", art: "infra",
    d: "Isolated cloud infrastructure with least-privilege access throughout.",
    chips: ["AWS", "Least privilege", "Private network"] },
  { id: "ops", t: "Operations", icon: "pulse", art: "ops",
    d: "Monitored around the clock, and sensitive data never reaches a log.",
    chips: ["24/7 monitoring", "Log scrubbing", "Pre-commit guards"] },
];

const ArchIcon = ({ kind, s = 18 }) => {
  const c = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "id") return <svg {...c}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
  if (kind === "lock") return <svg {...c}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
  if (kind === "shield") return <svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  if (kind === "cloud") return <svg {...c}><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.8 1A4 4 0 0 0 6 19h11z"/></svg>;
  if (kind === "pulse") return <svg {...c}><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>;
  return null;
};

/* ── card illustrations ─────────────────────────────────────────── */

const ArtDefs = () => (
  <defs>
    <linearGradient id="arch-cy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#5ec7e6"/><stop offset="100%" stopColor="#3841B1"/>
    </linearGradient>
    {/* lit-from-above panel fill — gives the mocks a sense of volume */}
    <linearGradient id="arch-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="rgba(255,255,255,0.07)"/><stop offset="100%" stopColor="rgba(255,255,255,0.015)"/>
    </linearGradient>
  </defs>
);

// shared depth treatment for the tilted mock scenes
const TILT = { width: "100%", height: "100%", transform: "perspective(700px) rotateX(9deg)", transformOrigin: "50% 100%", filter: "drop-shadow(0 18px 22px rgba(0,0,0,0.45))" };

const IdentityArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <ArtDefs/>
    <rect x="95" y="26" width="130" height="132" rx="12" fill="url(#arch-panel)" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="160" cy="58" r="15" fill="none" stroke="url(#arch-cy)" strokeWidth="1.5"/>
    <circle cx="160" cy="54" r="5" fill="rgba(255,255,255,0.85)"/>
    <path d="M150 67a10 10 0 0 1 20 0" fill="rgba(255,255,255,0.85)"/>
    <rect x="113" y="86" width="94" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)"/>
    <circle cx="122" cy="92.5" r="3.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
    <rect x="131" y="90.5" width="56" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
    <rect x="113" y="106" width="94" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)"/>
    <rect x="119" y="110.5" width="7" height="6" rx="1.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
    <rect x="131" y="110.5" width="40" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
    <g style={{ animation: "arch-breathe 3.2s ease-in-out infinite" }}>
      <rect x="113" y="129" width="94" height="15" rx="7.5" fill="url(#arch-cy)"/>
      <rect x="146" y="135" width="28" height="3.5" rx="1.75" fill="rgba(255,255,255,0.95)"/>
    </g>
    <g style={{ animation: "arch-bob 3.4s ease-in-out infinite" }}>
      <circle cx="232" cy="42" r="13" fill="var(--ink)" stroke="rgba(47,179,128,0.6)" strokeWidth="1.5"/>
      <path d="m226.5 42 3.5 3.5 7-7" fill="none" stroke="#2fb380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const DataArt = () => (
  <svg viewBox="0 0 320 190" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.35))" }}>
    <ArtDefs/>
    {["7f3a≠b04 e8c1‡92 x6d5", "≋c29 4a17·f0e3 b86d 51", "9e42‡a7 03bf·6c8 d1x5"].map((t, i) => (
      <text key={i} x="160" y={50 + i * 48} fontSize="11" textAnchor="middle" fontFamily="var(--font-mono)" fill="rgba(143,224,247,0.13)" letterSpacing="3">{t}</text>
    ))}
    <circle cx="160" cy="95" r="62" fill="none" stroke="rgba(255,255,255,0.07)"/>
    <g style={{ transformOrigin: "160px 95px", animation: "arch-spin 26s linear infinite" }}>
      <circle cx="160" cy="95" r="48" fill="none" stroke="rgba(43,179,223,0.35)" strokeWidth="1" strokeDasharray="3 7"/>
    </g>
    <circle cx="160" cy="95" r="30" fill="rgba(11,16,32,0.85)" stroke="rgba(255,255,255,0.12)"/>
    <path d="M152 92v-5a8 8 0 0 1 16 0v5" fill="none" stroke="#5ec7e6" strokeWidth="2.4" strokeLinecap="round"/>
    <rect x="148" y="92" width="24" height="18" rx="5" fill="url(#arch-cy)"/>
    <circle cx="160" cy="99" r="2.6" fill="white"/>
    <rect x="158.8" y="101" width="2.4" height="5" rx="1.2" fill="white"/>
  </svg>
);

const AppArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <ArtDefs/>
    <rect x="70" y="26" width="180" height="134" rx="12" fill="url(#arch-panel)" stroke="rgba(255,255,255,0.12)"/>
    <line x1="70" y1="52" x2="250" y2="52" stroke="rgba(255,255,255,0.08)"/>
    <circle cx="86" cy="39" r="2.6" fill="rgba(255,255,255,0.25)"/>
    <circle cx="96" cy="39" r="2.6" fill="rgba(255,255,255,0.25)"/>
    <circle cx="106" cy="39" r="2.6" fill="rgba(255,255,255,0.25)"/>
    <rect x="120" y="33" width="92" height="12" rx="6" fill="rgba(255,255,255,0.05)"/>
    <rect x="129" y="36.5" width="6" height="6" rx="1.5" fill="none" stroke="rgba(94,199,230,0.7)" strokeWidth="1.1"/>
    <rect x="140" y="37.5" width="44" height="3.5" rx="1.75" fill="rgba(255,255,255,0.18)"/>
    {[68, 84, 100, 116, 132].map((y) => (
      <line key={y} x1="82" y1={y} x2="238" y2={y} stroke="rgba(255,255,255,0.035)"/>
    ))}
    <g style={{ transformOrigin: "160px 104px", animation: "arch-pulse 3.4s ease-in-out infinite" }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" transform="translate(124 70) scale(3)" fill="url(#arch-cy)" opacity="0.95" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5"/>
      <path d="m150 104 7 7 14-14" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const InfraArt = () => (
  <svg viewBox="0 0 320 190" style={TILT}>
    <ArtDefs/>
    <line x1="160" y1="30" x2="160" y2="160" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 5"/>
    <g className="arch-slab" style={{ animationDelay: "0s" }}>
      <rect x="80" y="34" width="160" height="34" rx="10" fill="url(#arch-panel)" stroke="rgba(255,255,255,0.12)"/>
      <rect x="92" y="46" width="40" height="4.5" rx="2.25" fill="rgba(255,255,255,0.15)"/>
      <circle cx="226" cy="51" r="3" fill="#2fb380"/>
    </g>
    <g className="arch-slab" style={{ animationDelay: "1.9s" }}>
      <rect x="80" y="78" width="160" height="34" rx="10" fill="rgba(43,179,223,0.08)" stroke="rgba(43,179,223,0.5)"/>
      <rect x="92" y="90" width="52" height="4.5" rx="2.25" fill="rgba(143,224,247,0.5)"/>
      <rect x="186" y="86" width="44" height="14" rx="7" fill="rgba(43,179,223,0.16)" stroke="rgba(43,179,223,0.4)" strokeWidth="0.8"/>
      <text x="208" y="95.5" fontSize="7" textAnchor="middle" fontFamily="var(--font-mono)" fill="#8fe0f7" letterSpacing="0.5">ISOLATED</text>
    </g>
    <g className="arch-slab" style={{ animationDelay: "3.8s" }}>
      <rect x="80" y="122" width="160" height="34" rx="10" fill="url(#arch-panel)" stroke="rgba(255,255,255,0.12)"/>
      <rect x="92" y="134" width="34" height="4.5" rx="2.25" fill="rgba(255,255,255,0.15)"/>
      <circle cx="226" cy="139" r="3" fill="#2fb380"/>
    </g>
  </svg>
);

const OpsArt = () => (
  <svg viewBox="0 0 320 190" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.35))" }}>
    <ArtDefs/>
    <rect x="76" y="28" width="168" height="112" rx="12" fill="url(#arch-panel)" stroke="rgba(255,255,255,0.12)"/>
    {[
      { y: 48, w: 92 }, { y: 66, w: 118 }, { y: 84, w: 74 }, { y: 102, w: 104 }, { y: 120, w: 86 },
    ].map((r, i) => (
      <g key={i}>
        <circle cx="92" cy={r.y} r="2.4" fill={i === 2 ? "rgba(143,224,247,0.6)" : "rgba(255,255,255,0.18)"}/>
        <rect x="102" y={r.y - 2.5} width={r.w} height="5" rx="2.5" fill={i === 2 ? "rgba(143,224,247,0.28)" : "rgba(255,255,255,0.07)"}/>
        {i === 2 && <rect x={102 + r.w - 26} y={r.y - 2.5} width="26" height="5" rx="2.5" fill="rgba(143,224,247,0.55)"/>}
      </g>
    ))}
    <g style={{ animation: "arch-scan 3.6s ease-in-out infinite" }}>
      <rect x="76" y="28" width="34" height="112" fill="rgba(43,179,223,0.10)"/>
      <line x1="110" y1="28" x2="110" y2="140" stroke="rgba(94,199,230,0.5)" strokeWidth="1"/>
    </g>
    <path d="M84 166 h36 l8 -12 10 20 8 -14 6 6 h84" fill="none" stroke="url(#arch-cy)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
  </svg>
);

const CARD_ART = { identity: IdentityArt, data: DataArt, app: AppArt, infra: InfraArt, ops: OpsArt };

const Arrow = ({ dir }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {dir === "left" ? <path d="M19 12H5M12 19l-7-7 7-7"/> : <path d="M5 12h14M13 5l7 7-7 7"/>}
  </svg>
);

export default function Architecture() {
  const track = useRef(null);
  const scroll = (dx) => track.current?.scrollBy({ left: dx, behavior: "smooth" });
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--ink)", padding: "104px 0" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at 30% 30%, black 20%, transparent 75%)" }}/>
      <div style={{ position: "absolute", width: 640, height: 640, left: -240, top: -300, background: "radial-gradient(circle, rgba(56,65,177,0.30), transparent 60%)", borderRadius: "50%" }}/>

      <div className="mf-container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 620 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>Architecture at a glance</span>
            <h2 style={{ color: "white", marginTop: 16 }}>For the <em className="mf-grad-text" style={{ fontStyle: "italic" }}>technical readers.</em></h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 14, fontSize: 17 }}>
              The shape of our stack, on the record. The exact configurations stay where they belong: in the <a href="mailto:info@streaque.com?subject=Security%20packet" style={{ color: "#8fe0f7", textDecoration: "none", borderBottom: "1px solid rgba(143,224,247,0.4)" }}>security packet</a>, not on a webpage.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => scroll(-376)} aria-label="Scroll left" className="arch-arrow"><Arrow dir="left"/></button>
            <button onClick={() => scroll(376)} aria-label="Scroll right" className="arch-arrow"><Arrow dir="right"/></button>
          </div>
        </div>
      </div>

      <div ref={track} className="arch-track" style={{
        position: "relative", display: "flex", gap: 16, marginTop: 34,
        overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none",
        paddingLeft: "max(32px, calc((100% - 1200px) / 2 + 32px))",
        scrollPaddingLeft: "max(32px, calc((100% - 1200px) / 2 + 32px))",
        paddingRight: 32, paddingBottom: 8, paddingTop: 10,
      }}>
        {ARCH_GROUPS.map((g) => {
          const Art = CARD_ART[g.art];
          return (
            <div key={g.id} className="arch-card" style={{
              flex: "0 0 360px", scrollSnapAlign: "start", overflow: "hidden",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "var(--radius-lg)", WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ height: 196, background: "radial-gradient(58% 78% at 50% 46%, rgba(43,179,223,0.17), rgba(43,179,223,0.05) 52%, transparent 72%)", maskImage: "linear-gradient(180deg, black 62%, transparent 99%)", WebkitMaskImage: "linear-gradient(180deg, black 62%, transparent 99%)" }}>
                <Art/>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#5ec7e6", display: "inline-flex" }}><ArchIcon kind={g.icon} s={16}/></span>
                  <h3 style={{ color: "white", fontSize: 17 }}>{g.t}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13.5, lineHeight: 1.55, marginTop: 8 }}>{g.d}</p>
                <div style={{ display: "flex", gap: 7, marginTop: 16, flexWrap: "wrap" }}>
                  {g.chips.map((c) => (
                    <span key={c} style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "3.5px 10px" }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mf-container" style={{ position: "relative", marginTop: 22 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Scroll for all five layers →
        </span>
      </div>

      <style>{`
        .arch-track::-webkit-scrollbar { display: none; }
        .arch-card { transition: transform 200ms ease, background 200ms ease, border-color 200ms ease; }
        .arch-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.05); border-color: rgba(43,179,223,0.35); }
        .arch-arrow {
          width: 44px; height: 44px; border-radius: 50%; cursor: pointer;
          background: transparent; border: 1px solid rgba(255,255,255,0.18); color: white;
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
        }
        .arch-arrow:hover { background: rgba(255,255,255,0.08); border-color: rgba(43,179,223,0.5); transform: translateY(-1px); }
        @keyframes arch-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes arch-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.045); } }
        @keyframes arch-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes arch-scan { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(134px); } }
        @keyframes arch-breathe { 0%, 100% { opacity: 0.88; } 50% { opacity: 1; } }
        .arch-slab { animation: arch-slab 5.7s ease-in-out infinite; }
        @keyframes arch-slab { 0%, 24%, 100% { transform: translateY(0); } 8%, 16% { transform: translateY(-3px); } }
      `}</style>
    </section>
  );
}
