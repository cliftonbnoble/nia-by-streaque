import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pillars from "./Pillars";
import Architecture from "./ArchScroll";
import SecurityContact from "./SecurityContact";
import { ArrowRight as ArrowR, ShieldCheck as Shield, Tick, Lock } from "@/components/icons";

export const metadata = {
  title: "Security · Streaque",
  description:
    "Built like a bank. Bank-grade encryption, Zero Trust, defense-in-depth, and FERPA from the foundation. The security architecture behind Nia.",
};

/* Hero animation — the story in one loop:
   a readable student record flows into the campus shield (your key),
   and comes out as noise to anyone without it. Five orbiting locks =
   five campuses, five separate keys. Plain English only. */
const SCRAMBLES = [
  "x9◆f27a·b04≠8e3c61‡5d2f",
  "≋4d18ef·07◆c2a9b‡53e6x0",
  "7b‡e045·f9≠1c8d2◆a36e4x",
];

const HeroVault = () => (
  <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", maxWidth: 580, marginLeft: "auto", marginRight: 0 }}>
    {[
      { top: 0, left: 0, b: "top left" }, { top: 0, right: 0, b: "top right" },
      { bottom: 0, left: 0, b: "bottom left" }, { bottom: 0, right: 0, b: "bottom right" },
    ].map((c, i) => (
      <span key={i} style={{ position: "absolute", width: 28, height: 28, top: c.top, left: c.left, right: c.right, bottom: c.bottom, borderTop: c.b.includes("top") ? "1px solid rgba(43,179,223,0.5)" : "none", borderBottom: c.b.includes("bottom") ? "1px solid rgba(43,179,223,0.5)" : "none", borderLeft: c.b.includes("left") ? "1px solid rgba(43,179,223,0.5)" : "none", borderRight: c.b.includes("right") ? "1px solid rgba(43,179,223,0.5)" : "none" }}/>
    ))}

    <svg viewBox="0 0 400 400" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="vault-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(43,179,223,0.40)"/><stop offset="100%" stopColor="rgba(43,179,223,0)"/>
        </radialGradient>
        <linearGradient id="vault-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2BB3DF"/><stop offset="100%" stopColor="#3841B1"/>
        </linearGradient>
        <radialGradient id="shield-fill" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#5ec7e6"/><stop offset="55%" stopColor="#2BB3DF"/><stop offset="100%" stopColor="#3841B1"/>
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="200" fill="url(#vault-glow)"/>
      <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* slow-rotating tick ring */}
      <g style={{ transformOrigin: "200px 200px", animation: "sec-spin 40s linear infinite" }}>
        <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="4 8"/>
        {Array.from({ length: 24 }).map((_, i) => {
          const deg = (i * 360) / 24; const rad = (deg - 90) * Math.PI / 180;
          const x1 = 200 + 170 * Math.cos(rad); const y1 = 200 + 170 * Math.sin(rad);
          const x2 = 200 + 177 * Math.cos(rad); const y2 = 200 + 177 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(43,179,223,0.35)" strokeWidth="1"/>;
        })}
      </g>

      {/* flow: readable record in → shield → noise out */}
      <line x1="200" y1="66" x2="200" y2="132" stroke="rgba(94,199,230,0.55)" strokeWidth="1.5" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.4s" repeatCount="indefinite"/>
      </line>
      <path d="M195 130 L200 137 L205 130" fill="none" stroke="rgba(94,199,230,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="200" y1="266" x2="200" y2="318" stroke="rgba(94,199,230,0.55)" strokeWidth="1.5" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.4s" repeatCount="indefinite"/>
      </line>
      <path d="M195 316 L200 323 L205 316" fill="none" stroke="rgba(94,199,230,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle r="3" fill="#5ec7e6">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 200 68 L 200 130"/>
      </circle>
      <circle r="3" fill="#5ec7e6">
        <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M 200 268 L 200 316"/>
      </circle>

      {/* orbit: five campuses, five separate keys */}
      <g style={{ transformOrigin: "200px 200px", animation: "sec-spin-rev 44s linear infinite" }}>
        <circle cx="200" cy="200" r="110" fill="none" stroke="url(#vault-ring)" strokeWidth="1" strokeDasharray="2 7" opacity="0.55"/>
        {[90, 162, 234, 306, 18].map((deg, i) => {
          const yours = i === 0;
          const rad = (deg - 90) * Math.PI / 180;
          const x = 200 + 110 * Math.cos(rad); const y = 200 + 110 * Math.sin(rad);
          return (
            <g key={deg} style={{ transformOrigin: `${x}px ${y}px`, animation: "sec-spin 44s linear infinite" }}>
              {yours && <circle cx={x} cy={y} r="20" fill="none" stroke="rgba(43,179,223,0.30)" strokeWidth="3.5"/>}
              <circle cx={x} cy={y} r="15" fill="#0b1020" stroke={yours ? "#2BB3DF" : "rgba(255,255,255,0.28)"} strokeWidth={yours ? 2 : 1.5}/>
              <g fill="none" stroke={yours ? "#8fe0f7" : "rgba(255,255,255,0.6)"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={x - 5} y={y - 1.5} width="10" height="8.5" rx="2"/>
                <path d={`M${x - 3} ${y - 1.5} v-2.5 a3 3 0 0 1 6 0 v2.5`}/>
              </g>
              {yours && <text x={x} y={y + 31} fontSize="7" textAnchor="middle" fill="#8fe0f7" fontFamily="var(--font-mono)" letterSpacing="0.14em">YOUR CAMPUS</text>}
            </g>
          );
        })}
      </g>

      {/* the shield — your campus's key */}
      <g style={{ transformOrigin: "200px 200px", animation: "sec-pulse 3.2s ease-in-out infinite" }}>
        <circle cx="200" cy="200" r="74" fill="rgba(11,16,32,0.55)"/>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" transform="translate(140 142) scale(5)" fill="url(#shield-fill)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.4"/>
        <circle cx="200" cy="191" r="8.5" fill="white"/>
        <rect x="196.5" y="196" width="7" height="17" rx="3.5" fill="white"/>
      </g>
    </svg>

    {/* readable record — what your campus sees */}
    <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 268, zIndex: 2, textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.16em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 7 }}>What your campus sees</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "white", borderRadius: 12, boxShadow: "0 14px 36px -10px rgba(0,0,0,0.5)", textAlign: "left" }}>
        <img src="/students/maya.png" alt="" width="30" height="30" style={{ borderRadius: "50%", flexShrink: 0 }}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, color: "var(--ink)", whiteSpace: "nowrap" }}>Maya R. · BIO 201</div>
          <div style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 1, whiteSpace: "nowrap" }}>Advisor note · back on track</div>
        </div>
        <span style={{ fontSize: 9.5, fontFamily: "var(--font-mono)", padding: "3px 7px", background: "rgba(13,138,90,0.10)", color: "var(--success)", borderRadius: 5, whiteSpace: "nowrap" }}>✓ on track</span>
      </div>
    </div>

    {/* scrambled — what anyone else sees */}
    <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", width: 280, zIndex: 2, textAlign: "center" }}>
      <div style={{ padding: "12px 14px", background: "rgba(11,16,32,0.85)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 12, backdropFilter: "blur(6px)" }}>
        <div style={{ position: "relative", height: 18 }}>
          {SCRAMBLES.map((s, i) => (
            <div key={i} style={{ position: "absolute", inset: 0, fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.12em", color: "rgba(143,224,247,0.85)", animation: `sec-scramble-${i} 2.1s linear infinite` }}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.16em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: 7 }}>What anyone else sees</div>
    </div>

    {/* plain-English proof points */}
    <div style={{ position: "absolute", top: "25%", left: 0, padding: "8px 12px", background: "rgba(11,16,32,0.7)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0d8a5a", boxShadow: "0 0 8px #0d8a5a" }}/>
        Locked the instant it's saved
      </div>
      <div style={{ color: "rgba(255,255,255,0.45)", marginTop: 2 }}>before it's ever stored</div>
    </div>
    <div style={{ position: "absolute", top: "19%", right: 0, padding: "8px 12px", background: "rgba(11,16,32,0.7)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)", textAlign: "right" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
        One key per campus
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2BB3DF", boxShadow: "0 0 8px #2BB3DF" }}/>
      </div>
      <div style={{ color: "rgba(255,255,255,0.45)", marginTop: 2 }}>never shared, never reused</div>
    </div>
    <div style={{ position: "absolute", bottom: "24%", left: 0, padding: "8px 12px", background: "rgba(11,16,32,0.7)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)" }}>
      <div>A stolen copy is just noise</div>
      <div style={{ color: "rgba(255,255,255,0.45)", marginTop: 2 }}>unreadable without your key</div>
    </div>
    <div style={{ position: "absolute", bottom: "17%", right: 0, padding: "8px 12px", background: "rgba(11,16,32,0.7)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(6px)", textAlign: "right" }}>
      <div>Keys live in a guarded vault</div>
      <div style={{ color: "rgba(255,255,255,0.45)", marginTop: 2 }}>never in our code</div>
    </div>

    <div style={{ position: "absolute", bottom: -28, left: 0, right: 0, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>
      One key per campus · without it, data is just noise
    </div>
    <style>{`
      @keyframes sec-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      @keyframes sec-spin-rev { from { transform: rotate(0); } to { transform: rotate(-360deg); } }
      @keyframes sec-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
      @keyframes sec-scramble-0 { 0%, 32% { opacity: 1; } 33%, 100% { opacity: 0; } }
      @keyframes sec-scramble-1 { 0%, 32% { opacity: 0; } 33%, 65% { opacity: 1; } 66%, 100% { opacity: 0; } }
      @keyframes sec-scramble-2 { 0%, 65% { opacity: 0; } 66%, 100% { opacity: 1; } }
    `}</style>
  </div>
);

const Hero = () => (
  <section style={{ position: "relative", overflow: "hidden", background: "var(--ink)", color: "white", padding: "56px 0 64px" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at 75% 50%, black 30%, transparent 80%)" }}/>
    <div style={{ position: "absolute", width: 900, height: 900, right: -280, top: "50%", transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 60%)", borderRadius: "50%" }}/>
    <div className="mf-container" style={{ position: "relative" }}>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(43,179,223,0.12)", border: "1px solid rgba(43,179,223,0.3)", borderRadius: 999, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
            <Lock s={12}/> Security at Streaque
          </span>
          <h1 style={{ color: "white", marginTop: 22, fontSize: "clamp(40px, 4.8vw, 60px)", fontFamily: "var(--font-display)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            Built like a bank.<br/>
            <span className="mf-grad-text">Designed for the campus</span><br/>
            that just got hacked.
          </h1>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", maxWidth: 560 }}>
            Higher education is the single most-attacked sector in America. We built Nia knowing it, with the same architectural patterns used by Fortune 500 banks, federal agencies, and the largest cloud platforms in the world.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a href="#pillars" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none" }}>See the four pillars <ArrowR/></a>
            <a href="mailto:info@streaque.com" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.25)" }}>Request security packet</a>
          </div>
          <div style={{ marginTop: 36, display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[
              { n: "Bank-grade", l: "the same encryption banks use" },
              { n: "7 layers", l: "between attacker & record" },
              { n: "0", l: "student data trains AI models" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.02em", background: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{s.n}</div>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroVault/>
      </div>
    </div>
  </section>
);

const WhyPage = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }}>
        <div>
          <span className="mf-eyebrow">Why this page exists</span>
          <h2 style={{ marginTop: 14 }}>One question, <em style={{ fontStyle: "italic", color: "var(--ink-3)" }}>fully answered.</em></h2>
        </div>
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
            Universities sit on decades of records, financial-aid data, transcripts, and research IP, protected by infrastructure built before most of this existed. Every piece of student data we touch is protected by the same patterns used by Fortune 500 financial services, federal agencies, and the largest cloud platforms in the world.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink)", marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 500 }}>
            This page is the long-form answer to one question: <span className="mf-grad-text">what protects the data you're trusting us with?</span>
          </p>
          <div style={{ marginTop: 24, padding: 18, background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 36, height: 36, borderRadius: 8, background: "var(--brand-gradient)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Shield s={18}/></span>
            <div style={{ flex: 1, fontSize: 14, color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)", fontFamily: "var(--font-display)" }}>CISO, IT Director, or counsel?</strong> Skip the page and <a href="mailto:info@streaque.com" style={{ color: "var(--primary)" }}>email info@streaque.com</a> for our questionnaire response and an architecture walkthrough.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PROMISES = [
  { icon: "dollar", p: "Sell or share student data.", b: "It's not in our business model. Not in our contracts. Never will be." },
  { icon: "cpu", p: "Train external AI models on your students.", b: "Conversations stay scoped to your university. They never leave our environment for any third-party training pipeline." },
  { icon: "key", p: "Store student passwords.", b: "Authentication runs through Auth0. We literally cannot leak a password. We never see one." },
  { icon: "code", p: "Keep secrets in our code.", b: "Every credential lives in a guarded secrets vault, never in the codebase. If our code leaked tomorrow, no keys would leak with it." },
  { icon: "horn", p: "Hide a security incident.", b: "If one ever happens, you'll hear it from us: fast, complete, with what we know and what we're doing." },
];

const NeverIcon = ({ kind }) => {
  const c = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "dollar") return <svg {...c}><path d="M12 2v20"/><path d="M17 5.5c-1-1-2.5-1.5-5-1.5-3 0-5 1.5-5 3.5 0 5 10 2.5 10 7.5 0 2-2 3.5-5 3.5-2.5 0-4-.5-5-1.5"/></svg>;
  if (kind === "cpu") return <svg {...c}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>;
  if (kind === "key") return <svg {...c}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>;
  if (kind === "code") return <svg {...c}><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>;
  if (kind === "horn") return <svg {...c}><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>;
  return null;
};

const Promises = () => (
  <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #F5F8FC 0%, #EEF3FA 100%)" }}>
    {/* light blueprint backdrop — the daylight counterpart to the vault room above */}
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(35,86,201,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(35,86,201,0.045) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)", pointerEvents: "none" }}/>
    <div style={{ position: "absolute", width: 600, height: 600, right: -220, top: -260, background: "radial-gradient(circle, rgba(43,179,223,0.10), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative" }}>
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 720, marginLeft: 0 }}>
        <span className="mf-eyebrow">The promises we can make architecturally</span>
        <h2 style={{ marginTop: 14 }}>The strongest guarantees are the ones that are <span className="mf-grad-text" style={{ fontStyle: "italic" }}>impossible to break.</span></h2>
        <p>Five things Nia will never do, not because of policy, but because of architecture.</p>
      </div>
      <div style={{ display: "grid", gap: 12 }}>
        {PROMISES.map((p, i) => (
          <div key={i} className="sec-never" style={{ display: "grid", gridTemplateColumns: "52px 1fr 1.35fr", gap: 24, padding: "22px 26px", background: "white", border: "1px solid rgba(35,86,201,0.12)", borderRadius: "var(--radius-lg)", alignItems: "center", boxShadow: "0 2px 10px -4px rgba(35,86,201,0.08)" }}>
            <div style={{ position: "relative", width: 48, height: 48 }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: "var(--bg-alt)", border: "1px solid var(--line)", color: "var(--ink-2)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <NeverIcon kind={p.icon}/>
              </span>
              <span style={{ position: "absolute", right: -6, bottom: -6, width: 19, height: 19, borderRadius: "50%", background: "#c43d3d", border: "2px solid white", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </span>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--ink-4)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 999, background: "rgba(196,61,61,0.08)", color: "#a8332f" }}>never</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{p.p}</div>
            </div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, paddingLeft: 24, borderLeft: "1px solid var(--line)" }}>{p.b}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .sec-never { transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; }
      .sec-never:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -16px rgba(35,86,201,0.22); border-color: rgba(35,86,201,0.28); }
    `}</style>
  </section>
);

// Architecture moved to ./ArchScroll (client component — horizontal scroller)

/* Compliance roadmap — rendered as a Trust Center dashboard mock
   (Linear-style gantt: status donuts, quarter grid, TODAY marker).
   Timeline runs 2025 → 2027 with "today" at mid-2026. */
const RM_GROUPS = [
  { label: "Shipped", items: [
    { t: "FERPA-aligned architecture", s: "done", from: 0, to: 50, tag: "renewed annually" },
    { t: "Zero Trust access controls", s: "done", from: 5, to: 50, tag: "NIST SP 800-207" },
    { t: "OWASP ASVS Level 2 controls", s: "done", from: 11, to: 50, tag: "live" },
    { t: "Secrets vault & monitoring", s: "done", from: 17, to: 50, tag: "live" },
  ]},
  { label: "In flight", items: [
    { t: "External penetration test", s: "progress", from: 44, to: 60, doneTo: 50, tag: "annual" },
  ]},
  { label: "Scheduled", items: [
    { t: "SOC 2 Type I", s: "planned", from: 54, to: 74, tag: "scoped & scheduled" },
    { t: "Customer trust portal", s: "planned", from: 58, to: 82, tag: "live status" },
    { t: "SOC 2 Type II", s: "planned", from: 74, to: 96, tag: "≤12 mo after Type I" },
    { t: "Public bug bounty", s: "planned", from: 82, to: 100, tag: "after Type II" },
  ]},
];

const RmStatus = ({ s }) => {
  if (s === "done") return (
    <span style={{ width: 17, height: 17, borderRadius: "50%", background: "rgba(13,138,90,0.12)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </span>
  );
  if (s === "progress") return (
    <svg width="17" height="17" viewBox="0 0 17 17" style={{ flexShrink: 0 }}>
      <circle cx="8.5" cy="8.5" r="6.2" fill="none" stroke="var(--line-2)" strokeWidth="2"/>
      <circle cx="8.5" cy="8.5" r="6.2" fill="none" stroke="var(--brand-cyan)" strokeWidth="2" strokeDasharray="23.4 39" strokeLinecap="round" transform="rotate(-90 8.5 8.5)"/>
    </svg>
  );
  return <span style={{ width: 15, height: 15, borderRadius: "50%", border: "1.5px dashed var(--line-2)", flexShrink: 0, margin: 1 }}/>;
};

const RmBar = ({ it }) => {
  const w = it.to - it.from;
  if (it.s === "done") return (
    <span style={{ position: "absolute", left: `${it.from}%`, width: `${w}%`, top: 0, bottom: 0, borderRadius: 999, background: "var(--brand-gradient)", opacity: 0.9, boxShadow: "0 2px 8px -2px rgba(56,65,177,0.4)" }}/>
  );
  if (it.s === "progress") return (
    <>
      <span style={{ position: "absolute", left: `${it.from}%`, width: `${it.to - it.from}%`, top: 0, bottom: 0, borderRadius: 999, background: "rgba(43,179,223,0.14)", border: "1px solid rgba(43,179,223,0.3)" }}/>
      <span style={{ position: "absolute", left: `${it.from}%`, width: `${it.doneTo - it.from}%`, top: 0, bottom: 0, borderRadius: 999, background: "var(--brand-gradient)", boxShadow: "0 2px 8px -2px rgba(56,65,177,0.4)" }}/>
    </>
  );
  return (
    <span style={{ position: "absolute", left: `${it.from}%`, width: `${w}%`, top: 0, bottom: 0, borderRadius: 999, border: "1.5px dashed var(--line-2)", background: "rgba(35,86,201,0.03)" }}/>
  );
};

// the timeline cell shares this grid so the TODAY line can span every row
const RM_COLS = "230px 1fr 130px";
const rmGridBg = {
  backgroundImage: "linear-gradient(90deg, var(--line) 1px, transparent 1px)",
  backgroundSize: "25% 100%",
};

const Roadmap = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.78fr 1.22fr", gap: 56, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 24 }}>
          <span className="mf-eyebrow">Compliance & roadmap</span>
          <h2 style={{ marginTop: 14 }}>Already built. <em style={{ fontStyle: "italic", color: "var(--ink-3)" }}>Earning the badges next.</em></h2>
          <p style={{ marginTop: 18, fontSize: 15 }}>
            The right answer to "are you SOC 2 certified?" today is "<em style={{ fontStyle: "normal" }}>not yet, but we've already built every control, and here's our timeline.</em>" That's more honest than rushing a checkbox.
          </p>
          <div style={{ marginTop: 26, display: "grid", gap: 11 }}>
            {[
              { s: "done", l: "Shipped, running in production today" },
              { s: "progress", l: "In flight, underway right now" },
              { s: "planned", l: "Scheduled, committed and dated" },
            ].map((x) => (
              <div key={x.s} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--ink-2)" }}>
                <RmStatus s={x.s}/> {x.l}
              </div>
            ))}
          </div>
        </div>

        <div className="rm-dash" style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
          {/* window chrome */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderBottom: "1px solid var(--line)", background: "var(--bg-alt)" }}>
            <span style={{ display: "flex", gap: 5 }}>
              {[0, 1, 2].map((i) => <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--line-2)" }}/>)}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>Trust center · compliance roadmap</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 9px", borderRadius: 999, background: "var(--primary-50)", color: "var(--primary)", fontWeight: 600 }}>2025 → 2027</span>
          </div>

          {/* quarter axis */}
          <div style={{ display: "grid", gridTemplateColumns: RM_COLS, gap: 14, padding: "10px 18px 8px", borderBottom: "1px solid var(--line)" }}>
            <span/>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 21 }}>
              {["2025", "H1 '26", "H2 '26", "2027"].map((q) => (
                <span key={q} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)", whiteSpace: "nowrap" }}>{q}</span>
              ))}
              <span style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", fontFamily: "var(--font-mono)", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.1em", color: "var(--brand-cyan)", background: "white", padding: "1px 6px", borderRadius: 4, border: "1px solid rgba(43,179,223,0.35)" }}>TODAY</span>
              <span style={{ position: "absolute", left: "50%", top: 14, bottom: -8, width: 1.5, background: "rgba(43,179,223,0.45)" }}/>
            </div>
            <span/>
          </div>

          {/* rows */}
          <div style={{ padding: "6px 0 10px" }}>
            {RM_GROUPS.map((g) => (
              <div key={g.label}>
                <div style={{ display: "grid", gridTemplateColumns: RM_COLS, gap: 14, padding: "10px 18px 4px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-4)" }}>{g.label}</span>
                </div>
                {g.items.map((it) => (
                  <div key={it.t} className="rm-row" style={{ display: "grid", gridTemplateColumns: RM_COLS, gap: 14, alignItems: "center", padding: "8px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
                      <RmStatus s={it.s}/>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.t}</span>
                    </div>
                    <div style={{ position: "relative", height: 11, ...rmGridBg }}>
                      <span style={{ position: "absolute", left: "50%", top: -3, bottom: -3, width: 1.5, background: "rgba(43,179,223,0.45)" }}/>
                      <RmBar it={it}/>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-3)", textAlign: "right", whiteSpace: "nowrap" }}>{it.tag}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 18px", borderTop: "1px solid var(--line)", background: "var(--bg-alt)", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-3)" }}>4 live · 1 in flight · 4 scheduled</span>
            <a href="mailto:info@streaque.com?subject=Security%20packet" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>Full evidence in the security packet →</a>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .rm-row { transition: background 140ms ease; }
      .rm-row:hover { background: var(--bg-alt); }
    `}</style>
  </section>
);

const ASK_QUESTIONS = [
  "Where do my students' encryption keys live, and who has access to them?",
  "If your codebase leaks tomorrow, what happens to my data?",
  "Do you train your AI models on student conversations?",
  "What happens if one of your other customers gets breached? Could it affect us?",
  "How quickly will you tell us if there's a security incident, and what's in that notification?",
  "Can I see your most recent penetration test report and your SOC 2 attestation?",
  "What identity provider do you support? Can students sign in with existing university credentials?",
  "How is data deleted when our contract ends? How do I verify it?",
];

const Ask = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 720, marginLeft: 0 }}>
        <span className="mf-eyebrow">What to ask us next</span>
        <h2 style={{ marginTop: 14 }}>Ask us. <em style={{ fontStyle: "italic", color: "var(--ink-3)" }}>Then ask every other vendor.</em></h2>
        <p>Eight questions worth answering in writing, from us and from anyone we're competing with.</p>
      </div>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {ASK_QUESTIONS.map((q, i) => (
          <div key={i} style={{ display: "flex", gap: 14, padding: 22, background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
            <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--brand-gradient)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, flexShrink: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div style={{ fontSize: 14.5, color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em" }}>{q}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, padding: 22, background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", fontSize: 14, color: "var(--ink-2)", textAlign: "center" }}>
        We'll answer all of these in writing, on the record, with as much technical detail as you want. <a href="mailto:info@streaque.com" style={{ color: "var(--primary)", fontWeight: 500 }}>info@streaque.com →</a>
      </div>
    </div>
  </section>
);

export default function SecurityPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="security"/>
      <Hero/>
      <WhyPage/>
      <Pillars/>
      <Promises/>
      <Architecture/>
      <Roadmap/>
      <Ask/>
      <SecurityContact/>
      <Footer/>
    </div>
  );
}
