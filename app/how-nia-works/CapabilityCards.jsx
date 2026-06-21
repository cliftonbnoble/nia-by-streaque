/* NOT MOUNTED — replaced by the two-path (iPhone/MacBook) chooser in page.jsx;
   not imported anywhere. Kept for reference / easy restore.

   ── Hero capability cards ─────────────────────────────────────────
   Three tall "playing cards" in the same language as the homepage
   office cards: big title, short body, then a drawn device cropped by
   the card with elements popping off the screen. Sentiment rides a
   phone, alerts ride a MacBook Pro, journeys ride a phone.
   Server component, static. */

const StatusBar = ({ dark }) => {
  const c = dark ? "rgba(255,255,255,0.92)" : "#16192A";
  return (
    <>
      <span className="hc-island"><span className="hc-cam"/></span>
      <div className="hc-status" style={{ color: c }}>
        <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "-0.01em" }}>9:41</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4.5 }}>
          <svg width="13" height="9" viewBox="0 0 13 9" fill={c}><rect x="0" y="5" width="2" height="4" rx="0.6"/><rect x="3.4" y="3.4" width="2" height="5.6" rx="0.6"/><rect x="6.8" y="1.8" width="2" height="7.2" rx="0.6"/><rect x="10.2" y="0" width="2" height="9" rx="0.6"/></svg>
          <svg width="12" height="9" viewBox="0 0 24 17" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round"><path d="M2 6.5C7.5 1 16.5 1 22 6.5"/><path d="M5.5 10.2c3.8-3.6 9.2-3.6 13 0"/><circle cx="12" cy="14.5" r="1.6" fill={c} stroke="none"/></svg>
          <svg width="17" height="9" viewBox="0 0 17 9" fill="none"><rect x="0.5" y="0.5" width="13" height="8" rx="2.2" stroke={c} opacity="0.45"/><rect x="2" y="2" width="9" height="5" rx="1" fill={c}/><path d="M15.2 3v3" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/></svg>
        </span>
      </div>
    </>
  );
};

const Phone = ({ dark, screen, children }) => (
  <div className="hc-phone">
    <span className="hc-sbtn" style={{ left: -2.5, top: 100, height: 20 }}/>
    <span className="hc-sbtn" style={{ left: -2.5, top: 136, height: 34 }}/>
    <span className="hc-sbtn" style={{ left: -2.5, top: 178, height: 34 }}/>
    <span className="hc-sbtn" style={{ right: -2.5, top: 150, height: 52 }}/>
    <div className="hc-bezel">
      <div className="hc-screen" style={{ background: screen }}>
        <StatusBar dark={dark}/>
        {children}
      </div>
    </div>
  </div>
);

const MacBook = ({ children }) => (
  <div className="hc-mac">
    <div className="hc-mac-lid">
      <div className="hc-mac-bezel">
        <div className="hc-mac-screen">{children}</div>
      </div>
    </div>
    <div className="hc-mac-base"><span className="hc-mac-notch"/></div>
  </div>
);

/* ── 1 · Sentiment — live signal on the student's phone ───────── */
const SentimentPhone = () => (
  <Phone screen="#F7F8FC">
    <div style={{ padding: "46px 14px 0" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>
          <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#16192A" }}>Sentiment</span>
          <span style={{ display: "block", fontSize: 8.5, color: "var(--ink-3)", marginTop: 2 }}>Maya · last 14 days</span>
        </span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 7.5, fontWeight: 600, color: "#15803D", background: "#EAF7EF", padding: "3px 8px", borderRadius: 999 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "#16A34A" }}/>Live</span>
      </div>

      <div style={{ display: "flex", gap: 6, alignItems: "flex-start", marginTop: 12 }}>
        <img src="/students/maya.png" alt="" width="18" height="18" style={{ borderRadius: "50%", flexShrink: 0, boxShadow: "0 0 0 1px rgba(15,23,42,0.08)" }}/>
        <div style={{ background: "white", border: "1px solid #E9EAF2", borderRadius: "13px 13px 13px 4px", padding: "8px 10px", fontSize: 10, lineHeight: 1.45, color: "var(--ink-2)", boxShadow: "0 4px 10px -6px rgba(11,16,32,0.14)" }}>
          I&apos;m stuck on ch. 4 again. Not sure this class is for me.
        </div>
      </div>

      <div style={{ marginTop: 11, background: "white", border: "1px solid #E9EAF2", borderRadius: 12, padding: "10px 10px 8px", boxShadow: "0 4px 12px -8px rgba(11,16,32,0.12)" }}>
        <svg width="204" height="92" viewBox="0 0 204 92">
          <defs>
            <linearGradient id="hc-sent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(43,179,223,0.28)"/>
              <stop offset="1" stopColor="rgba(43,179,223,0)"/>
            </linearGradient>
          </defs>
          {[23, 46, 69].map((y) => <line key={y} x1="0" y1={y} x2="204" y2={y} stroke="#EEF0F6" strokeWidth="1"/>)}
          <path d="M2 30 C 22 24, 34 34, 52 30 S 84 22, 102 32 S 134 44, 152 56 S 182 70, 200 76 L200 92 L2 92 Z" fill="url(#hc-sent)"/>
          <path d="M2 30 C 22 24, 34 34, 52 30 S 84 22, 102 32 S 134 44, 152 56 S 182 70, 200 76" fill="none" stroke="#2B9FD0" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="200" cy="76" r="4" fill="#D97706" stroke="white" strokeWidth="1.8"/>
        </svg>
        <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
          {[["Tone", "frustrated"], ["Cadence", "slowing"], ["Topics", "ch. 4"]].map(([k, v]) => (
            <span key={k} style={{ flex: 1, background: "#F7F8FC", border: "1px solid #EEF0F6", borderRadius: 8, padding: "5px 7px" }}>
              <span style={{ display: "block", fontSize: 6.5, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A90A5" }}>{k}</span>
              <span style={{ display: "block", fontSize: 8.5, fontWeight: 600, color: "#16192A", marginTop: 2 }}>{v}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </Phone>
);

const SentimentPop = () => (
  <div className="hc-pop" style={{ left: "50%", transform: "translateX(-178px)", bottom: 26, width: 196, padding: "13px 15px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 17, height: 17, borderRadius: "50%", background: "#FFF4DE", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M23 18l-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/></svg>
      </span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--ink-3)" }}>Sentiment shift</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 7 }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.04em", lineHeight: 1 }}>−18%</span>
      <span style={{ fontSize: 8.5, fontWeight: 600, color: "#B45309", background: "#FFF4DE", padding: "3px 8px", borderRadius: 999 }}>2 weeks</span>
    </div>
    <div style={{ fontSize: 9, color: "#15803D", fontWeight: 600, marginTop: 6 }}>Flagged to advising · just now</div>
  </div>
);

/* ── 2 · Alerts — the staff queue on a MacBook Pro ────────────── */
const ROWS = [
  { img: "/students/maya.png", n: "Maya Reyes", s: "missed quiz · sentiment ↓", tag: "#1", hot: true },
  { img: "/students/jonas.png", n: "Jonas Kim", s: "GPA dip · 3 weeks", tag: "Draft" },
  { img: "/students/anya.png", n: "Anya Patel", s: "low engagement · CS 110", tag: "Meeting" },
];

const AlertMac = () => (
  <MacBook>
    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 10px", borderBottom: "1px solid #EEF0F6", background: "#FBFCFE" }}>
      {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <span key={c} style={{ width: 6.5, height: 6.5, borderRadius: "50%", background: c }}/>)}
      <span style={{ flex: 1, textAlign: "center", fontSize: 8.5, fontWeight: 600, color: "var(--ink-2)" }}>Early-alert queue</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 3.5, fontSize: 7, fontFamily: "var(--font-mono)", color: "#15803D" }}><span style={{ width: 4.5, height: 4.5, borderRadius: "50%", background: "#16A34A" }}/>live</span>
    </div>
    <div style={{ padding: "8px 10px", display: "grid", gap: 5 }}>
      <div style={{ fontSize: 7, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A90A5" }}>Sorted by impact · 13 open</div>
      {ROWS.map((r) => (
        <div key={r.n} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 8px", borderRadius: 8, background: r.hot ? "#FFF9EF" : "white", border: r.hot ? "1px solid rgba(217,119,6,0.3)" : "1px solid #EEF0F6" }}>
          <img src={r.img} alt="" width="18" height="18" style={{ borderRadius: "50%", flexShrink: 0, boxShadow: "0 0 0 1px rgba(15,23,42,0.08)" }}/>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 9, fontWeight: 600, color: "#16192A" }}>{r.n}</span>
            <span style={{ display: "block", fontSize: 7.5, color: "var(--ink-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.s}</span>
          </span>
          <span style={{ fontSize: 7, fontFamily: "var(--font-mono)", fontWeight: 700, color: r.hot ? "#B45309" : "var(--ink-3)", background: r.hot ? "rgba(217,119,6,0.12)" : "#F2F4F9", border: r.hot ? "1px solid rgba(217,119,6,0.35)" : "1px solid #E9EAF2", borderRadius: 999, padding: "2px 6px", flexShrink: 0 }}>{r.tag}</span>
        </div>
      ))}
    </div>
  </MacBook>
);

/* three stacked banners telling the intervention story: absence noticed,
   deadline missed, outreach drafted — cascading over the screen */
const ALERTS = [
  {
    tint: "#FFF4DE", time: "now",
    t: "Maya Reyes · BIO 201", s: "2nd absence this week · sentiment ↓",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  },
  {
    tint: "#FDEAE8", time: "5m",
    t: "Deadline missed · ch. 4 quiz", s: "Closed 9 AM. Reset open until Friday.",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18"/><path d="m9.8 13.5 4.4 4.4M14.2 13.5l-4.4 4.4"/></svg>,
  },
  {
    tint: "#EEF2FF", time: "now", buttons: true,
    t: "Draft reply ready", s: "Outreach written in Dr. Chen's voice.",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  },
];

const AlertStack = () => (
  <div className="hc-alertstack">
    {ALERTS.map((a, i) => (
      <div key={a.t} className="hc-pop hc-banner" style={{ position: "relative", padding: "10px 12px", "--cx": `${i * 12 - 12}px`, animationDelay: `${i * 0.9}s` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: a.tint, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{a.icon}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 10.5, fontWeight: 700, color: "#16192A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.t}</span>
            <span style={{ display: "block", fontSize: 8.5, color: "var(--ink-3)", marginTop: 1.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.s}</span>
          </span>
          <span style={{ fontSize: 7.5, color: "#8A90A5", flexShrink: 0, alignSelf: "flex-start" }}>{a.time}</span>
        </div>
        {a.buttons && (
          <div style={{ display: "flex", gap: 6, marginTop: 9 }}>
            <span style={{ flex: 1, textAlign: "center", fontSize: 8.5, fontWeight: 600, color: "white", background: "var(--brand-gradient)", borderRadius: 7, padding: "5.5px 0" }}>Send nudge</span>
            <span style={{ flex: 1, textAlign: "center", fontSize: 8.5, fontWeight: 600, color: "var(--ink-2)", background: "white", border: "1px solid #E3E8F4", borderRadius: 7, padding: "5.5px 0" }}>View</span>
          </div>
        )}
      </div>
    ))}
  </div>
);

/* ── 3 · Journeys — today's adaptive plan on the phone ────────── */
const PLAN = [
  { t: "9:00", l: "BIO 201 · ch. 4 reset", d: "10 min", done: true },
  { t: "2:00", l: "CS 110 · pset checkpoint", d: "15 min", now: true },
  { t: "5:00", l: "Career fair · 3 matches", d: "tap" },
];

const JourneyPhone = () => (
  <Phone screen="#F7F8FC">
    <div style={{ padding: "46px 14px 0" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>
          <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#16192A" }}>Today</span>
          <span style={{ display: "block", fontSize: 8.5, color: "var(--ink-3)", marginTop: 2 }}>Tuesday · built for Maya</span>
        </span>
        <span style={{ marginLeft: "auto", position: "relative", width: 26, height: 26 }}>
          <svg width="26" height="26" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="10.5" fill="white" stroke="#E9EAF2" strokeWidth="3"/>
            <circle cx="13" cy="13" r="10.5" fill="none" stroke="#16A34A" strokeWidth="3" strokeDasharray="66" strokeDashoffset="44" strokeLinecap="round" transform="rotate(-90 13 13)"/>
          </svg>
          <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6.5, fontWeight: 700, color: "#16192A" }}>1/3</span>
        </span>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 0, position: "relative" }}>
        <span style={{ position: "absolute", left: 8, top: 14, bottom: 14, width: 2, borderRadius: 1, background: "#E9EAF2" }}/>
        {PLAN.map((p) => (
          <div key={p.t} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 0", position: "relative" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, zIndex: 1, background: p.done ? "#16A34A" : "white", border: p.done ? "none" : p.now ? "2px solid #5E56E0" : "2px solid #D9DEEC", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              {p.done && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
              {p.now && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5E56E0" }}/>}
            </span>
            <span style={{ flex: 1, minWidth: 0, background: p.now ? "white" : "transparent", border: p.now ? "1px solid rgba(94,86,224,0.35)" : "1px solid transparent", borderRadius: 10, padding: p.now ? "7px 9px" : "2px 0", boxShadow: p.now ? "0 6px 14px -8px rgba(94,86,224,0.35)" : "none" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 7.5, fontFamily: "var(--font-mono)", color: "#8A90A5", flexShrink: 0 }}>{p.t}</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "#16192A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.l}</span>
              </span>
            </span>
            <span style={{ fontSize: 7, fontFamily: "var(--font-mono)", fontWeight: 600, color: "#4A44B0", background: "#F1F0FD", borderRadius: 999, padding: "2px 7px", flexShrink: 0 }}>{p.d}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, background: "white", border: "1px solid #E9EAF2", borderRadius: 999, padding: "6px 11px", boxShadow: "0 4px 10px -6px rgba(11,16,32,0.12)" }}>
        <svg width="10" height="10" viewBox="0 0 20 20"><path d="M10 1l2 5.4L17.4 8 12 10l-2 5.4L8 10 2.6 8 8 6.4z" fill="#5E56E0"/></svg>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: "var(--ink-2)" }}>Adapts to your 7–9 PM focus</span>
      </div>
    </div>
  </Phone>
);

const JourneyPop = () => (
  <div className="hc-pop" style={{ left: "50%", transform: "translateX(-178px)", bottom: 26, width: 192, padding: "13px 15px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 17, height: 17, borderRadius: "50%", background: "#E7F6EC", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>
      </span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--ink-3)" }}>Plan adapted</span>
    </div>
    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)", marginTop: 7, lineHeight: 1.4 }}>Quiz reset added, 2 blocks moved</div>
    <div style={{ fontSize: 9, color: "#8A90A5", marginTop: 4 }}>Rebuilt around the missed quiz · 9:02 AM</div>
  </div>
);

/* ── cards ────────────────────────────────────────────────────── */
const CARDS = [
  {
    tag: "01 · Sentiment",
    title: "Reads the room, in real time",
    body: "Every conversation carries signal. Nia reads tone, frustration, and momentum, quietly, on every interaction.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #DCE8F6 52%, #BED7F0 100%)",
    accent: "#1a8fc0",
    device: <SentimentPhone/>,
    pops: <SentimentPop/>,
  },
  {
    tag: "02 · Alerts",
    title: "The right person, the right moment",
    body: "The right person hears about the right student at the right moment, before a missed deadline becomes a missed term.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #F2E4D3 52%, #EFCEA9 100%)",
    accent: "#B45309",
    device: <AlertMac/>,
    pops: <AlertStack/>,
  },
  {
    tag: "03 · Journeys",
    title: "Plans that adapt to the student",
    body: "Plans that adapt to schedule, course load, and how each student actually studies, not a one-size-fits-all template.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #E0EFE2 52%, #C2E2CB 100%)",
    accent: "#15803D",
    device: <JourneyPhone/>,
    pops: <JourneyPop/>,
  },
];

export default function CapabilityCards() {
  return (
    <div className="hc-grid">
      {CARDS.map((c) => (
        <div className="hc-card" key={c.tag} style={{ background: c.bg }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: c.accent, fontWeight: 600 }}>{c.tag}</span>
          <h3 className="hc-title">{c.title}</h3>
          <p className="hc-body">{c.body}</p>
          <div className="hc-stage">
            {c.device}
            {c.pops}
          </div>
        </div>
      ))}

      <style>{`
        .hc-grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .hc-card{
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(11,16,32,0.06);
          box-shadow: 0 24px 56px -36px rgba(11,16,32,0.25);
          padding: 30px 30px 0;
          text-align: left;
        }
        .hc-title{
          margin: 10px 0 0;
          font-family: var(--font-display);
          font-size: 25px;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--ink);
        }
        .hc-body{
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-2);
          min-height: 66px;
        }
        .hc-stage{
          position: relative;
          height: 400px;
          margin-top: 24px;
        }
        /* phone chrome: titanium rail → bezel → screen */
        .hc-phone{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          width: 272px;
          height: 568px;
          border-radius: 47px;
          background: linear-gradient(90deg, #9AA3B2 0%, #E6EAF0 4%, #C5CBD6 10%, #D8DCE4 50%, #C5CBD6 90%, #E6EAF0 96%, #9AA3B2 100%);
          padding: 3px;
          box-shadow: 0 36px 68px -34px rgba(11,16,32,0.55), 0 2px 5px rgba(11,16,32,0.16);
        }
        .hc-bezel{ width: 100%; height: 100%; background: #05070D; border-radius: 44px; padding: 7px; }
        .hc-screen{ position: relative; width: 100%; height: 100%; border-radius: 37px; overflow: hidden; }
        .hc-sbtn{ position: absolute; width: 3px; border-radius: 1.5px; background: linear-gradient(180deg, #8E97A6, #B9C0CC 30%, #B9C0CC 70%, #8E97A6); }
        .hc-island{
          position: absolute; top: 11px; left: 50%; transform: translateX(-50%);
          width: 78px; height: 22px; border-radius: 11.5px; background: #05070D; z-index: 5;
          display: flex; align-items: center; justify-content: flex-end; padding-right: 7px;
        }
        .hc-cam{ width: 9px; height: 9px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #2A3140 0%, #10141D 55%, #05070D 100%); }
        .hc-status{
          position: absolute; top: 12px; left: 25px; right: 21px;
          display: flex; align-items: center; justify-content: space-between; z-index: 4;
        }
        /* MacBook chrome: aluminum lid → bezel → screen, deck below */
        .hc-mac{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 28px;
          width: 348px;
        }
        .hc-mac-lid{
          background: linear-gradient(180deg, #E2E6EC 0%, #C9CED8 100%);
          border-radius: 13px 13px 0 0;
          padding: 5px 5px 0;
          box-shadow: 0 30px 56px -28px rgba(11,16,32,0.5);
        }
        .hc-mac-bezel{
          background: #05070D;
          border-radius: 9px 9px 0 0;
          padding: 6px 6px 0;
        }
        .hc-mac-screen{
          background: white;
          border-radius: 4px 4px 0 0;
          overflow: hidden;
          height: 206px;
        }
        .hc-mac-base{
          position: relative;
          width: 110%;
          margin-left: -5%;
          height: 11px;
          background: linear-gradient(180deg, #EAEDF2 0%, #C9CED8 50%, #98A0AE 100%);
          border-radius: 2px 2px 11px 11px;
          box-shadow: 0 14px 24px -12px rgba(11,16,32,0.45);
        }
        .hc-mac-notch{
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 46px; height: 5px;
          background: #AAB1BE;
          border-radius: 0 0 7px 7px;
        }
        .hc-pop{
          position: absolute;
          z-index: 3;
          background: white;
          border: 1px solid rgba(11,16,32,0.07);
          border-radius: 18px;
          box-shadow: 0 22px 44px -18px rgba(11,16,32,0.35);
        }
        .hc-alertstack{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 4px;
          width: 256px;
          display: grid;
          gap: 8px;
          z-index: 3;
        }
        .hc-banner{ transform: translateX(var(--cx, 0px)); animation: hc-bob 3.6s ease-in-out infinite; }
        @keyframes hc-bob{
          0%, 100%{ transform: translateX(var(--cx, 0px)) translateY(0); }
          50%{ transform: translateX(var(--cx, 0px)) translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce){ .hc-banner{ animation: none; } }
        @media (max-width: 1080px){
          .hc-grid{ grid-template-columns: 1fr; gap: 24px; margin-top: 44px; }
          .hc-card{ max-width: 470px; width: 100%; margin: 0 auto; box-sizing: border-box; }
          .hc-body{ min-height: 0; }
        }
        @media (max-width: 560px){
          .hc-card{ padding: 24px 20px 0; }
          .hc-title{ font-size: 22px; }
          .hc-stage{ height: 380px; }
          .hc-mac{ width: 292px; bottom: 48px; }
          .hc-mac-screen{ height: 172px; }
          .hc-alertstack{ width: 226px; top: 8px; }
        }
      `}</style>
    </div>
  );
}
