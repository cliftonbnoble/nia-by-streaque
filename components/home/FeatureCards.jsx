"use client";
/* "Built different. On purpose." — four feature cards in the security page's
   dark-glass language. Proactive Nudging is the animated star: a signal flows
   Canvas → Nia → Maya, and on arrival the phone's notification sequence plays
   (bell → "1 New Notification" → the missed-quiz card). The other three use
   clean dark illustrations in the same shell. */
import { useEffect, useState } from "react";

const NUDGE_MS = 9600;

const ACCENTS = { nudge: "#2BB3DF", evidence: "#8F7DF7", smart: "#2FB380", multi: "#6E7BF2" };

/* ── Nia brand mark ───────────────────────────────────────────── */
const NiaGlyph = ({ s = 22, gid }) => (
  <svg width={s} height={s} viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill={`url(#${gid}0)`}/>
    <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill={`url(#${gid}1)`}/>
    <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
    <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    <defs>
      <linearGradient id={`${gid}0`} x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id={`${gid}1`} x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
  </svg>
);

const I = ({ s = 11, sw = 2.1, c = "currentColor", children }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const IcBell = (p) => <I {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></I>;
const IcX = (p) => <I {...p}><path d="M18 6 6 18M6 6l12 12"/></I>;
const IcExtern = (p) => <I {...p}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></I>;
const IcSnooze = (p) => <I {...p}><circle cx="11" cy="13" r="8"/><path d="M11 9v4l2.5 1.5"/><path d="M18 3v4"/><path d="M16 5h4"/></I>;
const IcCheck = (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>;
const IcZap = (p) => <I {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></I>;
const IcBook = (p) => <I {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></I>;
const IcTrend = (p) => <I {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></I>;
const IcShare = (p) => <I {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5"/></I>;

/* Canvas-style LMS mark — red tile, dotted ring */
const CanvasMark = ({ s = 34 }) => (
  <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden>
    <rect width="40" height="40" rx="9" fill="#E3262E"/>
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <circle key={i} cx={20 + 11 * Math.cos(a)} cy={20 + 11 * Math.sin(a)} r="2.1" fill="white"/>;
    })}
    <circle cx="20" cy="20" r="3.2" fill="white"/>
  </svg>
);

/* ── Proactive Nudging — the animated demo ────────────────────── */
const NudgeDemo = ({ k }) => (
  <div className="fn-stage">
    {/* pipeline rail (everything in one HTML coordinate space → exact alignment) */}
    <span className="fn-rail"/>
    <span className="fn-rail-flow"/>
    <span className="fn-packet"/>

    <span className="fn-node fn-canvas"><CanvasMark s={34}/></span>
    <span className="fn-node fn-nia"><span className="fn-nia-glow"/><NiaGlyph s={30} gid={`fnn-${k}`}/></span>
    <span className="fn-node fn-maya"><img loading="lazy" decoding="async" src="/students/maya.png" alt="" width="40" height="40"/></span>

    <span className="fn-label" style={{ left: "16%" }}>SIGNAL</span>
    <span className="fn-label" style={{ left: "50%" }}>NIA</span>
    <span className="fn-label" style={{ left: "84%" }}>MAYA</span>

    {/* notification: pill → reference-style card */}
    <span className="fn-pill"><IcBell s={11} sw={2.2} c="white"/> 1 New Notification</span>
    <div className="fn-card">
      <span className="fn-card-back"/>
      <div className="fn-card-face">
        <div className="fn-card-top">
          <div className="fn-card-h">Missed BIO 201 quiz</div>
          <span className="fn-card-time">8:05 am</span>
          <span className="fn-card-x"><IcX s={11} sw={2.4} c="white"/></span>
        </div>
        <div className="fn-card-p">Want a 10-minute reset before Friday?</div>
        <div className="fn-card-row">
          <button className="fn-card-cta">Start now <IcExtern s={10} sw={2.2}/></button>
          <span className="fn-card-snz"><IcSnooze s={13} sw={1.9} c="rgba(255,255,255,0.9)"/></span>
        </div>
        <img loading="lazy" decoding="async" src="/notif-cal.png" alt="" className="fn-card-cal" width="52" height="78"/>
      </div>
    </div>
  </div>
);

/* ── Evidence-based coaching — the conversation scaffolds live ── */
const WIN = ({ n, t, min, at, doneAt }) => (
  <div className="fe-win fe-rise" style={{ animationDelay: `${at}ms` }}>
    <span className="fe-win-check">
      <span className="fe-win-ring"/>
      <span className="fe-win-fill" style={{ animationDelay: `${doneAt}ms` }}><IcCheck s={8} sw={3.4} c="white"/></span>
    </span>
    <span className="fe-win-t">Win #{n} · {t}</span>
    <span className="fe-win-min">{min}</span>
  </div>
);

const EvidenceDemo = () => (
  <div className="fd-stage">
    <div className="fd-tag">SCAFFOLDED · GROWTH-MINDSET</div>
    <div className="fe-thread">
      <div className="fe-scroll">
        <div className="fd-bubble nia fe-rise" style={{ animationDelay: "300ms" }}>That section trips up most students, so let&apos;s break it into 3 small wins.</div>
        <div className="fd-bubble user fe-rise" style={{ animationDelay: "1500ms" }}>ugh ok, where do I start?</div>
        <WIN n="1" t="Krebs cycle basics" min="3 min" at={2500} doneAt={4750}/>
        <div className="fd-bubble user fe-rise" style={{ animationDelay: "4400ms" }}>done. that actually made sense</div>
        <div className="fd-bubble nia fe-rise" style={{ animationDelay: "5700ms" }}>Because you started with the hardest one. Win #2 is even smaller.</div>
        <WIN n="2" t="Electron transport" min="4 min" at={7000} doneAt={9150}/>
        <div className="fd-bubble user fe-rise" style={{ animationDelay: "8800ms" }}>done ✅</div>
        <div className="fd-bubble nia fe-rise" style={{ animationDelay: "10000ms" }}>Two for two. Last one tonight after practice. I&apos;ll nudge you.</div>
        <div className="fd-bubble user fe-rise" style={{ animationDelay: "11600ms" }}>deal 🤝</div>
      </div>
    </div>
    <div className="fd-cite"><span>cited</span><em>Yeager &rsquo;19</em><em>Dweck &rsquo;06</em></div>
  </div>
);

/* ── Gets smarter over time — each data source lifts the curve ── */
const SOURCES = [
  { t: "LMS data", c: "#E3262E", at: 700 },
  { t: "University resources", c: "#2BB3DF", at: 3100 },
  { t: "Student profiles", c: "#8F7DF7", at: 5500 },
  { t: "Outcomes & feedback", c: "#2FB380", at: 7900 },
];
const DELTAS = [
  { v: "+8%", inAt: 300, outAt: 2400 },
  { v: "+15%", inAt: 2400, outAt: 4800 },
  { v: "+23%", inAt: 4800, outAt: 7200 },
  { v: "+29%", inAt: 7200, outAt: 9600 },
  { v: "+34%", inAt: 9600, outAt: null },
];
const SmartDemo = () => (
  <div className="fd-stage center">
    <div className="fd-row">
      <span className="fd-tag">NUDGE OPEN-RATE · 8 WK</span>
      <span className="fs-delta">
        {DELTAS.map((d) => (
          <span key={d.v} className="fs-delta-v" style={{
            animation: d.outAt
              ? `fn-on 280ms ease ${d.inAt}ms both, fs-off 220ms ease ${d.outAt}ms both`
              : `fn-on 280ms ease ${d.inAt}ms both`,
          }}>{d.v}</span>
        ))}
      </span>
    </div>
    <svg viewBox="0 0 260 90" className="fd-spark" preserveAspectRatio="none">
      <defs>
        <linearGradient id="fs-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(47,179,128,0.30)"/><stop offset="100%" stopColor="rgba(47,179,128,0)"/>
        </linearGradient>
      </defs>
      <path className="fs-area" d="M0 64 L26 60 L52 66 L78 54 L104 56 L130 44 L156 38 L182 30 L208 26 L234 14 L260 8 L260 90 L0 90 Z" fill="url(#fs-fill)"/>
      <path className="fs-line" d="M0 64 L26 60 L52 66 L78 54 L104 56 L130 44 L156 38 L182 30 L208 26 L234 14 L260 8" fill="none" stroke="#3fd29a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="100"/>
      <circle cx="260" cy="8" r="3.5" fill="#7fe0bd" className="fs-dot"/>
    </svg>
    <div className="fd-chips fs-chips">
      {SOURCES.map((s) => (
        <span key={s.t} className="fs-chip" style={{ animationDelay: `${s.at}ms` }}>
          <span className="fs-chip-dot" style={{ background: s.c }}/>
          {s.t}
        </span>
      ))}
    </div>
  </div>
);

/* ── Multi-agent orchestration — the agents reason, then route ── */
const AGENTS = [
  { id: "academic", at: 1400 },
  { id: "career", at: 1550 },
  { id: "finance", at: 1700 },
  { id: "wellness", at: 1850 },
];
const THINKS = [
  { t: "major · Biology ✓", at: 2700 },
  { t: "résumé on file ✓", at: 3600 },
  { t: "aid · no holds ✓", at: 4500 },
];
const MultiDemo = () => (
  <div className="fd-stage">
    <div className="fd-tag">MULTI-AGENT · 0 SEAMS</div>
    <div className="fd-bubble user sm fe-rise" style={{ animationDelay: "500ms" }}>&ldquo;what about internships?&rdquo;</div>
    <div className="fm-row">
      {AGENTS.map((a) => (
        <span key={a.id} className={`fm-agent ${a.id === "career" ? "fm-star" : "fm-rest"}`} style={{ animationDelay: `${a.at}ms, 5500ms` }}>
          <span className="fm-crop"><img loading="lazy" decoding="async" src={`/agents/${a.id}-badge.svg`} alt={`${a.id} agent`} width="46" height="46"/></span>
          <span className="fm-l">{a.id}</span>
        </span>
      ))}
    </div>
    <div className="fm-thinks">
      {THINKS.map((t) => <span key={t.t} className="fm-think" style={{ animationDelay: `${t.at}ms` }}>{t.t}</span>)}
      <span className="fm-think fm-route" style={{ animationDelay: "5700ms" }}>→ routed · Career</span>
    </div>
    <div className="fd-handoff fe-rise" style={{ animationDelay: "6900ms" }}>
      <span className="fd-handoff-tag">Career</span>
      Three openings match your major. Drafts ready.
    </div>
    <div className="fd-foot fe-rise" style={{ animationDelay: "8400ms" }}>same thread · same audit log</div>
  </div>
);

const DEMOS = { nudge: NudgeDemo, evidence: EvidenceDemo, smart: SmartDemo, multi: MultiDemo };

const CARDS = [
  { n: "01", id: "nudge", t: "Proactive Nudging", b: "Turns LMS, SIS, and CRM signals into timely, evidence-based nudges, not noise.", tag: "live",
    icon: <><path d="M3 12h4l2-7 4 14 2-7h6"/></> },
  { n: "02", id: "evidence", t: "Evidence-Based Coaching", b: "Motivational, scaffolded conversations grounded in growth-mindset and self-determination research.", tag: "researched",
    icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></> },
  { n: "03", id: "smart", t: "Gets Smarter Over Time", b: "Refines triggers, timing, and tone based on the outcomes that matter to your institution.", tag: "adaptive",
    icon: <><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></> },
  { n: "04", id: "multi", t: "Multi-Agent Orchestration", b: "Academic, career, and finance agents handing off mid-conversation, and the student never sees the seam.", tag: "unified",
    icon: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5"/></> },
];

export default function FeatureCards() {
  const [cycle, setCycle] = useState(0);
  const [ecycle, setEcycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), NUDGE_MS);
    return () => clearTimeout(t);
  }, [cycle]);
  useEffect(() => {
    const t = setTimeout(() => setEcycle((c) => c + 1), 14000);
    return () => clearTimeout(t);
  }, [ecycle]);
  const [scycle, setScycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setScycle((c) => c + 1), 12000);
    return () => clearTimeout(t);
  }, [scycle]);
  const [mcycle, setMcycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setMcycle((c) => c + 1), 12500);
    return () => clearTimeout(t);
  }, [mcycle]);

  return (
    <div className="fc-grid mf-stack-sm">
      {CARDS.map((c) => {
        const Demo = DEMOS[c.id];
        return (
          <div key={c.id} className="fc-card" style={{ "--fc-accent": ACCENTS[c.id] }}>
            <div className="fc-art" style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENTS[c.id]}10, transparent 72%)` }}>
              <span className="fc-num">{c.n}</span>
              {c.id === "nudge" ? <Demo k={`${c.id}-${cycle}`} key={cycle}/> : c.id === "evidence" ? <Demo key={`e${ecycle}`}/> : c.id === "smart" ? <Demo key={`s${scycle}`}/> : <Demo key={`m${mcycle}`}/>}
            </div>
            <div className="fc-body">
              <div className="fc-head">
                <span className="fc-ic" style={{ color: ACCENTS[c.id] }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <h3>{c.t}</h3>
                <span className="fc-tag">{c.tag}</span>
              </div>
              <p>{c.b}</p>
            </div>
          </div>
        );
      })}

      <style>{`
        .fc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; max-width: 1080px; margin: 0 auto; }
        .fc-card {
          overflow: hidden; display: flex; flex-direction: column;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.10);
          border-radius: var(--radius-lg); backdrop-filter: blur(6px);
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }
        .fc-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.05); border-color: color-mix(in srgb, var(--fc-accent) 42%, transparent); }
        .fc-art { position: relative; height: 208px; flex-shrink: 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .fc-num { position: absolute; top: 14px; left: 16px; z-index: 3; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; color: rgba(255,255,255,0.32); }
        .fc-body { padding: 18px 22px 22px; }
        .fc-head { display: flex; align-items: center; gap: 9px; }
        .fc-ic { display: inline-flex; flex-shrink: 0; }
        .fc-body h3 { color: white; font-size: 17px; margin: 0; flex: 1; }
        .fc-tag {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 3px 8px; flex-shrink: 0;
        }
        .fc-body p { color: rgba(255,255,255,0.6); font-size: 13.5px; line-height: 1.55; margin: 10px 0 0; }

        /* ── nudge stage ── (single HTML coordinate space → exact alignment) */
        .fn-stage { position: absolute; inset: 0; }
        /* rail line at the node centerline (top: 52px) */
        .fn-rail {
          position: absolute; top: 52px; left: 16%; right: 16%; height: 0;
          border-top: 1.5px dashed rgba(255,255,255,0.14);
        }
        .fn-rail-flow {
          position: absolute; top: 51px; left: 16%; right: 16%; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, transparent, rgba(143,224,247,0.7), transparent);
          background-size: 60px 100%; background-repeat: no-repeat; background-position: -60px 0;
          opacity: 0; animation: fn-flow 2.4s linear 0.6s infinite, fn-on 0.2s linear 0.6s both;
        }
        @keyframes fn-flow { from { background-position: -60px 0; } to { background-position: calc(100% + 60px) 0; } }
        @keyframes fn-on { to { opacity: 1; } }
        .fn-packet {
          position: absolute; top: 52px; left: 16%; width: 7px; height: 7px; border-radius: 50%;
          margin: -3.5px 0 0 -3.5px; background: #8fe0f7; box-shadow: 0 0 8px #8fe0f7;
          opacity: 0; animation: fn-travel 2.4s linear 0.6s both;
        }
        @keyframes fn-travel {
          0% { left: 16%; opacity: 0; }
          6% { opacity: 1; }
          42% { left: 50%; opacity: 1; }
          55% { left: 50%; opacity: 1; }
          94% { left: 84%; opacity: 1; }
          100% { left: 84%; opacity: 0; }
        }
        .fn-node {
          position: absolute; top: 52px; transform: translate(-50%, -50%);
          width: 40px; height: 40px; border-radius: 11px;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .fn-canvas { left: 16%; }
        .fn-nia { left: 50%; width: 42px; height: 42px; border-radius: 50%; background: #fff; box-shadow: 0 2px 10px rgba(43,179,223,0.4); }
        .fn-nia-glow { position: absolute; inset: -5px; border-radius: 50%; background: radial-gradient(circle, rgba(43,179,223,0.45), transparent 70%); animation: fn-niapulse 2.4s ease-in-out infinite; }
        @keyframes fn-niapulse { 0%, 100% { opacity: 0.4; transform: scale(0.92); } 50% { opacity: 0.9; transform: scale(1.12); } }
        .fn-maya {
          left: 84%; border-radius: 50%; overflow: hidden;
          box-shadow: 0 2px 10px rgba(56,65,177,0.45), 0 0 0 1px rgba(255,255,255,0.18);
        }
        .fn-maya img { width: 100%; height: 100%; object-fit: cover; }
        .fn-maya::after {
          content: ""; position: absolute; inset: -4px; border-radius: 50%;
          border: 2px solid rgba(43,179,223,0.6); opacity: 0;
          animation: fn-ring 9.6s ease-out infinite;
        }
        @keyframes fn-ring { 0%, 27% { opacity: 0; transform: scale(0.9); } 30% { opacity: 1; transform: scale(1); } 40% { opacity: 0; transform: scale(1.5); } 100% { opacity: 0; } }
        .fn-label {
          position: absolute; top: 80px; transform: translateX(-50%);
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
        }

        /* notification — pill, then the reference-style card */
        .fn-pill, .fn-card { position: absolute; }
        .fn-pill {
          left: 50%; bottom: 46px; transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
          padding: 9px 14px; border-radius: 999px; background: #6358B6; color: white;
          font-size: 11px; font-weight: 600;
          box-shadow: 0 0 26px rgba(99,88,182,0.55), 0 8px 18px rgba(0,0,0,0.32);
          opacity: 0;
          animation: fn-pill-in 460ms cubic-bezier(0.2,1.3,0.4,1) 3150ms both, fn-pill-out 320ms cubic-bezier(0.5,0,0.75,0) 4350ms both;
        }
        @keyframes fn-pill-in { from { opacity: 0; transform: translateX(-50%) translateY(14px) scale(0.6); } 70% { opacity: 1; transform: translateX(-50%) translateY(-2px) scale(1.05); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
        @keyframes fn-pill-out { from { opacity: 1; transform: translateX(-50%) scale(1); } to { opacity: 0; transform: translateX(-50%) scale(1.3); filter: blur(2px); } }
        .fn-card {
          left: 50%; bottom: 8px; transform: translateX(-50%);
          width: 84%; transform-origin: bottom center; opacity: 0;
          animation: fn-card-in 560ms cubic-bezier(0.16,1,0.3,1) 4550ms both;
        }
        @keyframes fn-card-in { from { opacity: 0; transform: translateX(-50%) translateY(22px) scale(0.7); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
        .fn-card-back {
          position: absolute; top: -6px; left: 12px; right: 12px; height: 24px;
          border-radius: 11px; background: rgba(171,176,220,0.5);
        }
        .fn-card-face {
          position: relative; padding: 11px 13px 11px; border-radius: 13px; overflow: hidden;
          background-image:
            linear-gradient(92.81deg, rgba(105,91,215,0.82) -4%, rgba(66,77,211,0.82) 109%),
            linear-gradient(85.36deg, #40BFEA 0%, #0A16A0 99.6%);
          border: 1px solid rgba(99,88,182,0.45);
          box-shadow: 0 18px 36px rgba(0,0,0,0.45);
        }
        .fn-card-top { display: flex; align-items: flex-start; gap: 8px; }
        .fn-card-h { flex: 1; font-family: var(--font-display); font-weight: 600; font-size: 14px; color: white; letter-spacing: -0.01em; }
        .fn-card-time { font-size: 9.5px; color: rgba(255,255,255,0.85); margin-top: 2px; }
        .fn-card-x { display: inline-flex; margin-top: 2px; opacity: 0.95; }
        .fn-card-p { font-size: 10.5px; color: rgba(255,255,255,0.88); margin-top: 2px; padding-right: 64px; }
        .fn-card-row { display: flex; align-items: center; gap: 12px; margin-top: 10px; position: relative; z-index: 2; }
        .fn-card-cta {
          display: inline-flex; align-items: center; gap: 6px; border: 0; cursor: default;
          background: white; color: #111827; font-family: inherit;
          font-size: 10.5px; font-weight: 600; border-radius: 8px; padding: 7px 11px;
        }
        .fn-card-snz { display: inline-flex; }
        .fn-card-cal {
          position: absolute; right: 4px; bottom: 2px; width: 52px; height: auto; z-index: 1;
          filter: drop-shadow(0 6px 10px rgba(7,10,40,0.4));
          animation: fn-cal-bob 3.2s ease-in-out 5200ms infinite;
        }
        @keyframes fn-cal-bob { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-3px) rotate(-2deg); } }

        /* ── static dark demos (evidence / smart / multi) ── */
        .fd-stage { position: absolute; inset: 0; padding: 18px 18px 14px; display: flex; flex-direction: column; gap: 7px; }
        .fd-stage.center { justify-content: flex-start; }
        .fd-tag { font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.42); margin-left: 28px; }
        .fd-row .fd-tag { margin-left: 28px; }
        .fd-bubble { max-width: 84%; padding: 7px 10px; font-size: 11px; line-height: 1.4; }
        .fd-bubble.nia { align-self: flex-start; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.82); border-radius: 4px 11px 11px 11px; }
        .fd-bubble.user { align-self: flex-end; background: var(--brand-gradient); color: white; border-radius: 11px 11px 4px 11px; }
        .fd-bubble.sm { font-size: 10.5px; font-style: italic; }
        /* evidence — the scaffolding thread (fixed viewport, scrolls itself) */
        .fe-thread { flex: 1; min-height: 0; overflow: hidden; margin-top: 4px; }
        .fe-scroll {
          display: flex; flex-direction: column; gap: 6px;
          animation: fe-scroll 14000ms linear both;
        }
        @keyframes fe-scroll {
          0%, 32% { transform: translateY(0); }
          37%, 65% { transform: translateY(-58px); animation-timing-function: cubic-bezier(0.16,1,0.3,1); }
          70%, 100% { transform: translateY(-118px); }
        }
        .fe-rise { opacity: 0; animation: fe-rise 420ms cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes fe-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .fe-win {
          display: flex; align-items: center; gap: 7px; align-self: flex-start;
          width: 88%; padding: 6px 9px; border-radius: 9px;
          background: rgba(143,125,247,0.10); border: 1px solid rgba(143,125,247,0.35);
        }
        .fe-win-check { position: relative; width: 15px; height: 15px; flex: 0 0 auto; }
        .fe-win-ring { position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.35); }
        .fe-win-fill {
          position: absolute; inset: 0; border-radius: 50%;
          background: var(--brand-gradient);
          display: inline-flex; align-items: center; justify-content: center;
          opacity: 0; animation: fe-pop 300ms cubic-bezier(0.2,1.4,0.4,1) both;
        }
        @keyframes fe-pop { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }
        .fe-win-t { flex: 1; min-width: 0; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.05em; text-transform: uppercase; color: rgba(255,255,255,0.78); }
        .fe-win-min { font-family: var(--font-mono); font-size: 8.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; }
        .fd-cite { display: flex; align-items: center; gap: 6px; margin-top: auto; }
        .fd-cite span { font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .fd-cite em { font-style: normal; font-family: var(--font-mono); font-size: 8.5px; color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 4px; padding: 2px 6px; }
        .fd-row { display: flex; align-items: baseline; justify-content: space-between; }
        .fd-spark { width: 100%; height: 90px; margin-top: 6px; }

        /* stepped growth: each source unlocks the next stretch of the curve */
        .fs-line { stroke-dasharray: 100; animation: fs-draw 12000ms linear both; }
        @keyframes fs-draw {
          0%, 8% { stroke-dashoffset: 100; }
          19% { stroke-dashoffset: 76; }
          28% { stroke-dashoffset: 76; }
          39% { stroke-dashoffset: 51; }
          48% { stroke-dashoffset: 51; }
          59% { stroke-dashoffset: 26; }
          68% { stroke-dashoffset: 26; }
          80%, 100% { stroke-dashoffset: 0; }
        }
        .fs-area { clip-path: inset(0 100% 0 0); animation: fs-reveal 12000ms linear both; }
        @keyframes fs-reveal {
          0%, 8% { clip-path: inset(0 100% 0 0); }
          19% { clip-path: inset(0 76% 0 0); }
          28% { clip-path: inset(0 76% 0 0); }
          39% { clip-path: inset(0 51% 0 0); }
          48% { clip-path: inset(0 51% 0 0); }
          59% { clip-path: inset(0 26% 0 0); }
          68% { clip-path: inset(0 26% 0 0); }
          80%, 100% { clip-path: inset(0 0 0 0); }
        }
        .fs-dot { opacity: 0; animation: fe-pop 320ms cubic-bezier(0.2,1.4,0.4,1) 9650ms both; transform-box: fill-box; transform-origin: center; }
        .fs-delta { position: relative; min-width: 44px; height: 16px; display: inline-block; }
        .fs-delta-v { position: absolute; right: 0; top: 0; font-family: var(--font-display); font-weight: 600; font-size: 13px; color: #3fd29a; opacity: 0; }
        @keyframes fs-off { to { opacity: 0; visibility: hidden; } }
        .fs-chips { margin-top: auto; }
        .fs-chip {
          display: inline-flex; align-items: center; gap: 5px;
          opacity: 0; animation: fs-chip-in 440ms cubic-bezier(0.2,1.2,0.4,1) both;
        }
        .fs-chip-dot { width: 5px; height: 5px; border-radius: 50%; flex: 0 0 auto; }
        @keyframes fs-chip-in { from { opacity: 0; transform: translateY(6px) scale(0.92); } to { opacity: 1; transform: none; } }
        .fd-chips { display: flex; gap: 5px; margin-top: auto; flex-wrap: wrap; }
        .fd-chips > span { font-family: var(--font-mono); font-size: 8.5px; color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 2.5px 8px; }
        /* the agent ensemble — pop in, reason, route to Career */
        .fm-row { display: flex; gap: 20px; justify-content: center; margin-top: 4px; }
        .fm-agent { display: inline-flex; flex-direction: column; align-items: center; gap: 1px; opacity: 0; }
        .fm-rest { animation: fe-pop 420ms cubic-bezier(0.2,1.4,0.4,1) both, fm-dim 450ms ease forwards; }
        .fm-star { animation: fe-pop 420ms cubic-bezier(0.2,1.4,0.4,1) both, fm-lift 500ms cubic-bezier(0.2,1.2,0.4,1) forwards; }
        @keyframes fm-dim { to { opacity: 0.35; filter: grayscale(0.5); } }
        @keyframes fm-lift { to { opacity: 1; transform: translateY(-3px) scale(1.1); } }
        .fm-crop { position: relative; width: 46px; height: 46px; }
        .fm-crop img { display: block; width: 46px; height: 46px; }
        .fm-star .fm-crop::after {
          content: ""; position: absolute; inset: 1px; border-radius: 50%;
          border: 2px solid rgba(143,224,247,0.85); box-shadow: 0 0 16px rgba(43,179,223,0.55), inset 0 0 8px rgba(43,179,223,0.3);
          opacity: 0; animation: fn-on 320ms ease 5600ms both;
        }
        .fm-l { font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5); }
        .fm-thinks { display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; min-height: 18px; margin-top: 2px; }
        .fm-think {
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 2.5px 8px;
          opacity: 0; animation: fs-chip-in 420ms cubic-bezier(0.2,1.2,0.4,1) both;
        }
        .fm-route { color: #8fe0f7; border-color: rgba(143,224,247,0.45); background: rgba(43,179,223,0.08); }
        .fd-handoff { align-self: flex-start; position: relative; margin-left: 14px; margin-top: 4px; padding: 7px 10px; font-size: 11px; color: rgba(255,255,255,0.82); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; }
        .fd-handoff-tag { position: absolute; top: -8px; left: -2px; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.04em; padding: 1px 6px; background: var(--accent-warm, #E98A64); color: white; border-radius: 3px; }
        .fd-foot { margin-top: auto; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em; color: rgba(255,255,255,0.4); }

        @media (max-width: 760px) {
          .fc-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-card * { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
          .fn-bell, .fn-pill { display: none; }
        }
      `}</style>
    </div>
  );
}
