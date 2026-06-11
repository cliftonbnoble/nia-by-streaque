import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight as ArrowR, Tick } from "@/components/icons";
import { SecArchitecture, SecCoaches } from "@/components/home/CampaignSections";

export const metadata = {
  title: "How Nia Works · Streaque",
  description:
    "Two coordinated platforms, a student coach and a staff co-pilot, turning LMS, SIS, and CRM signals into nudges, alerts, and next steps on one governed layer.",
};

const SentimentMock = () => (
  <div style={{ height: 130, padding: 12, background: "linear-gradient(180deg, var(--bg-alt), white)", border: "1px solid var(--line)", borderRadius: 10, display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--ink-4)", textTransform: "uppercase" }}>SENTIMENT · 14d</span>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, color: "var(--inprogress)" }}>shifting ↓</span>
    </div>
    <svg viewBox="0 0 200 60" style={{ width: "100%", height: 60 }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sm-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(43,179,223,0.25)"/>
          <stop offset="100%" stopColor="rgba(43,179,223,0)"/>
        </linearGradient>
      </defs>
      <path d="M0 18 L20 14 L40 22 L60 16 L80 24 L100 28 L120 26 L140 38 L160 42 L180 50 L200 52 L200 60 L0 60 Z" fill="url(#sm-fill)"/>
      <path d="M0 18 L20 14 L40 22 L60 16 L80 24 L100 28 L120 26 L140 38 L160 42 L180 50 L200 52" fill="none" stroke="var(--brand-blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="200" cy="52" r="3" fill="var(--inprogress)"/>
    </svg>
    <div style={{ display: "flex", gap: 4, fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)" }}>
      <span style={{ padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4 }}>tone</span>
      <span style={{ padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4 }}>cadence</span>
      <span style={{ padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4 }}>topics</span>
    </div>
  </div>
);

const AlertMock = () => (
  <div style={{ height: 130, padding: 12, background: "linear-gradient(180deg, var(--bg-alt), white)", border: "1px solid var(--line)", borderRadius: 10, display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--ink-4)", textTransform: "uppercase" }}>NEW ALERT · 2 MIN AGO</div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 8, background: "white", border: "1px solid var(--line)", borderRadius: 8 }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--inprogress)", flexShrink: 0 }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600 }}>Maya Reyes · BIO 201</div>
        <div style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 1 }}>Missed quiz · sentiment dip</div>
      </div>
    </div>
    <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
      <span style={{ flex: 1, fontSize: 10, padding: "5px 8px", background: "var(--brand-gradient)", color: "white", borderRadius: 6, textAlign: "center", fontWeight: 500 }}>Send nudge</span>
      <span style={{ fontSize: 10, padding: "5px 8px", background: "white", color: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: 6 }}>Snooze</span>
    </div>
  </div>
);

const JourneyMock = () => (
  <div style={{ height: 130, padding: 12, background: "linear-gradient(180deg, var(--bg-alt), white)", border: "1px solid var(--line)", borderRadius: 10, display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--ink-4)", textTransform: "uppercase" }}>TODAY FOR MAYA</div>
    {[
      { t: "9:00", l: "BIO 201 · ch. 4 reset", d: "10 min" },
      { t: "14:00", l: "CS 110 · pset checkpoint", d: "15 min" },
      { t: "17:00", l: "Career fair · 3 matches", d: "tap" },
    ].map((r, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10 }}>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", width: 36 }}>{r.t}</span>
        <span style={{ flex: 1, fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--ink)" }}>{r.l}</span>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--brand-blue)", fontSize: 9, padding: "1px 6px", background: "var(--primary-50)", borderRadius: 4 }}>{r.d}</span>
      </div>
    ))}
  </div>
);

const CapabilityCard = ({ tag, title, body, mock }) => (
  <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 22, boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", gap: 14 }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-4)" }}>{tag}</span>
    <div>{mock}</div>
    <h3 style={{ fontSize: 19, lineHeight: 1.2 }}>{title}</h3>
    <p style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>{body}</p>
  </div>
);

const Hero = () => (
  <section className="mf-hero" style={{ paddingBottom: 64 }}>
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div style={{ textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
        <span className="mf-eyebrow">How Nia Works</span>
        <h1 style={{ marginTop: 18, fontSize: 60 }}>
          Two platforms,<br/>
          <span className="mf-grad-text">one mission:</span> transform student success.
        </h1>
        <p className="mf-hero-sub" style={{ margin: "22px auto 0", maxWidth: 620 }}>
          Two coordinated platforms transforming student data into nudges, alerts, and next steps.
          on one governance layer your institution owns.
        </p>
      </div>

      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
        <CapabilityCard tag="01 · Sentiment" title="Real-time sentiment tracking" body="Every conversation carries signal. Nia reads tone, frustration, and momentum, quietly, on every interaction." mock={<SentimentMock/>}/>
        <CapabilityCard tag="02 · Alerts" title="Proactive intervention alerts" body="The right person hears about the right student at the right moment, before a missed deadline becomes a missed term." mock={<AlertMock/>}/>
        <CapabilityCard tag="03 · Journeys" title="Personalized student journeys" body="Plans that adapt to schedule, course load, and how each student actually studies, not a one-size-fits-all template." mock={<JourneyMock/>}/>
      </div>
    </div>
  </section>
);

const ConnectionDiagram = () => (
  <div style={{ position: "relative", aspectRatio: "5/4", background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", overflow: "hidden", padding: 24 }}>
    <div style={{ position: "absolute", top: "20%", left: "10%", width: 140, padding: 14, background: "white", border: "1px solid var(--line-2)", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)" }}>STUDENT</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, marginTop: 4 }}>Maya · BIO 201</div>
      <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>"I'm stuck on ch. 4."</div>
      <div style={{ marginTop: 8, height: 4, background: "var(--bg-alt)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: "40%", height: "100%", background: "var(--brand-gradient)" }}/>
      </div>
    </div>

    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 130, height: 130, borderRadius: "50%", background: "var(--brand-gradient)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "var(--font-display)", fontWeight: 600, textAlign: "center", boxShadow: "0 20px 50px -10px rgba(56,65,177,0.4)" }}>
      <div>
        <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 500, letterSpacing: "0.1em", opacity: 0.85 }}>NIA</div>
        <div style={{ fontSize: 13, marginTop: 2, lineHeight: 1.2 }}>Orchestration<br/>Layer</div>
      </div>
    </div>

    <div style={{ position: "absolute", bottom: "14%", right: "8%", width: 160, padding: 14, background: "white", border: "1px solid var(--line-2)", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)" }}>STAFF · DR. CHEN</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--inprogress)" }}/>
        Alert: Maya needs help
      </div>
      <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>Draft reply ready</div>
      <div style={{ marginTop: 8, fontSize: 10, padding: "3px 8px", background: "var(--primary-50)", color: "var(--brand-blue)", borderRadius: 4, display: "inline-block", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>1-click send</div>
    </div>

    {/* viewBox is a 100×100 grid stretched to fill; percentages are not valid in path data */}
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <defs>
        <linearGradient id="sig1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2BB3DF" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#3841B1" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      <path d="M 22 28 Q 40 35, 50 50" fill="none" stroke="url(#sig1)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <path d="M 50 50 Q 65 60, 80 78" fill="none" stroke="url(#sig1)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
);

const Connection = () => (
  <section className="mf-section alt" style={{ padding: "88px 0" }}>
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="mf-eyebrow">The connection</span>
          <h2 style={{ marginTop: 14 }}>The power is in <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>the connection.</em></h2>
          <p style={{ marginTop: 18, fontSize: 16 }}>
            Our ecosystem works because the platforms talk to each other. Every question asked,
            every assignment tracked, every sentiment shift becomes actionable insight for staff.
          </p>
          <p style={{ marginTop: 12, fontSize: 16 }}>
            It's not just two tools. It's a complete early-intervention system that learns,
            adapts, and alerts in real time.
          </p>
        </div>
        <ConnectionDiagram/>
      </div>
    </div>
  </section>
);

function ChatMock() {
  return (
    <div style={{ height: 240, background: "var(--bg-warm)", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-3)" }}>
        <span>9:41</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }}/>
          Nia
        </span>
      </div>
      <div style={{ alignSelf: "flex-start", padding: "8px 12px", background: "white", border: "1px solid var(--line)", borderRadius: "14px 14px 14px 4px", fontSize: 12, maxWidth: "85%" }}>What's the late policy for HIST 240?</div>
      <div style={{ alignSelf: "flex-start", padding: "8px 12px", background: "var(--brand-gradient)", color: "white", borderRadius: "14px 14px 4px 14px", fontSize: 12, maxWidth: "90%", marginLeft: "auto" }}>
        From your syllabus: 10% off per day, capped at 5 days. Your next due-date is Thursday 11:59pm.
      </div>
      <div style={{ alignSelf: "flex-start", maxWidth: "85%", padding: 8, background: "white", border: "1px solid var(--line)", borderRadius: 10, marginTop: 4 }}>
        <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)" }}>SOURCES</div>
        <div style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}>
          {["HIST 240 syllabus", "Course catalog"].map((s) => (
            <span key={s} style={{ fontSize: 10, padding: "2px 6px", background: "var(--bg-alt)", borderRadius: 4, fontFamily: "var(--font-mono)" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NudgesMock() {
  return (
    <div style={{ height: 240, background: "var(--bg-warm)", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>TODAY · TUESDAY</div>
      {[
        { i: "🌅", t: "Pset 3 due 11:59pm", s: "Want a 25-min session at 4?", tag: "in 6h", kind: "warn" },
        { i: "✦", t: "New: Career fair Thursday", s: "3 employers match your major", tag: "tap", kind: "info" },
        { i: "✓", t: "Quiz reset complete", s: "Nice, back on track", tag: "done", kind: "ok" },
      ].map((n, i) => (
        <div key={i} style={{ display: "flex", gap: 10, padding: 10, background: "white", border: "1px solid var(--line)", borderRadius: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16 }}>{n.i}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12 }}>{n.t}</div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>{n.s}</div>
          </div>
          <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", padding: "2px 6px", borderRadius: 4, background: n.kind === "warn" ? "rgba(201,138,26,0.10)" : n.kind === "ok" ? "rgba(13,138,90,0.08)" : "var(--primary-50)", color: n.kind === "warn" ? "var(--inprogress)" : n.kind === "ok" ? "var(--success)" : "var(--brand-blue)" }}>{n.tag}</span>
        </div>
      ))}
    </div>
  );
}

function PrefsMock() {
  return (
    <div style={{ height: 240, background: "var(--bg-warm)", border: "1px solid var(--line)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>YOUR LEARNING PROFILE</div>
      <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: 12, display: "grid", gap: 10 }}>
        {[
          { l: "Peak focus", v: "7–9 PM", w: 78 },
          { l: "Session length", v: "~25 min", w: 62 },
          { l: "Tone", v: "Direct + warm", w: 84 },
        ].map((r, i) => (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, fontSize: 11 }}>
              <span style={{ color: "var(--ink-3)", whiteSpace: "nowrap" }}>{r.l}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, whiteSpace: "nowrap" }}>{r.v}</span>
            </div>
            <div style={{ marginTop: 5, height: 4, background: "var(--bg-alt)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: r.w + "%", height: "100%", background: "var(--brand-gradient)" }}/>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "var(--ink-3)", marginTop: "auto" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--primary-50)", color: "var(--brand-blue)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </span>
        Stays on your tenant. Never leaves.
      </div>
    </div>
  );
}

function IntegrationMock() {
  return (
    <div style={{ height: 240, background: "var(--bg-warm)", border: "1px solid var(--line)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>CONNECTED SYSTEMS</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
        {[
          { l: "Canvas LMS", s: "live", kind: "ok" },
          { l: "Banner SIS", s: "live", kind: "ok" },
          { l: "Salesforce", s: "live", kind: "ok" },
          { l: "Workday Aid", s: "syncing", kind: "info" },
        ].map((c, i) => (
          <div key={i} style={{ padding: 8, background: "white", border: "1px solid var(--line)", borderRadius: 8, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.kind === "ok" ? "var(--success)" : "var(--brand-blue)", flexShrink: 0 }}/>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 11, flex: 1 }}>{c.l}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)" }}>{c.s}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", padding: 10, background: "white", border: "1px dashed var(--line-2)", borderRadius: 8, display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--ink-3)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}>+</span>
        Add another system · 12 connectors available
      </div>
    </div>
  );
}

function WarningMock() {
  return (
    <div style={{ height: 240, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>EARLY-ALERT QUEUE</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--success)" }}>● live</span>
      </div>
      {[
        { img: "/students/maya.png", n: "Maya Reyes", s: "BIO 201 · missed quiz · sentiment ↓", sev: "high" },
        { img: "/students/jonas.png", n: "Jonas Kim", s: "GPA dip · 3 weeks", sev: "med" },
        { img: "/students/anya.png", n: "Anya Patel", s: "Low engagement · CS 110", sev: "med" },
        { img: "/students/ravi.png", n: "Ravi Shah", s: "Aid form overdue", sev: "low" },
      ].map((r, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 4px", borderTop: i ? "1px solid var(--line)" : "none" }}>
          <span style={{ width: 4, height: 24, borderRadius: 2, background: r.sev === "high" ? "#c43d3d" : r.sev === "med" ? "var(--inprogress)" : "var(--ink-4)" }}/>
          <img src={r.img} alt="" width="22" height="22" style={{ borderRadius: "50%", flexShrink: 0, boxShadow: "0 0 0 1px rgba(15,23,42,0.08)" }}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 11 }}>{r.n}</div>
            <div style={{ fontSize: 10, color: "var(--ink-3)" }}>{r.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DashboardMock() {
  return (
    <div style={{ height: 240, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {[
          { n: "93%", l: "momentum" },
          { n: "75%", l: "engaged" },
          { n: "63%", l: "completed" },
        ].map((s, i) => (
          <div key={i} style={{ padding: 10, background: "var(--bg-alt)", borderRadius: 8, border: "1px solid var(--line)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em", background: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{s.n}</div>
            <div style={{ fontSize: 9, color: "var(--ink-3)", marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 10, background: "var(--bg-alt)", borderRadius: 8, border: "1px solid var(--line)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <span>SENTIMENT · COHORT B</span>
          <span style={{ color: "var(--success)" }}>+12%</span>
        </div>
        <svg viewBox="0 0 200 60" style={{ width: "100%", height: 60, marginTop: 6 }} preserveAspectRatio="none">
          <path d="M0 40 L20 38 L40 42 L60 35 L80 30 L100 28 L120 22 L140 24 L160 18 L180 14 L200 12" fill="none" stroke="var(--brand-blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function InsightsMock() {
  return (
    <div style={{ height: 240, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>INSIGHT · 3 NEW</div>
      <div style={{ padding: 12, background: "var(--brand-gradient-soft)", border: "1px solid rgba(56,65,177,0.18)", borderRadius: 10 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12 }}>14 students in BIO 201 are stalling at ch. 4</div>
        <div style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.4 }}>Recommended: schedule a group review session. Pattern matches Spring '25 cohort.</div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <span style={{ fontSize: 10, padding: "4px 8px", background: "var(--brand-gradient)", color: "white", borderRadius: 6 }}>Schedule</span>
          <span style={{ fontSize: 10, padding: "4px 8px", background: "white", color: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: 6 }}>Dismiss</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "auto" }}>
        {["Cohort B engagement +12%", "Career fair RSVPs spiking"].map((i) => (
          <div key={i} style={{ fontSize: 11, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--brand-blue)" }}/>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

function InterventionMock() {
  return (
    <div style={{ height: 240, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>DRAFT REPLY · MAYA REYES</div>
      <div style={{ flex: 1, padding: 12, background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 10, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 12 }}>Hi Maya,</div>
        <div style={{ fontSize: 11, lineHeight: 1.5, color: "var(--ink-2)" }}>
          Saw the BIO 201 quiz didn't go as planned. Totally normal at ch. 4.
          <span style={{ background: "rgba(43,179,223,0.15)", padding: "0 3px" }}> Want to grab 15 min Thursday?</span> I have 2pm or 4pm open.
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Best, Dr. Chen</div>
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ flex: 1, fontSize: 10, padding: "6px 10px", background: "var(--brand-gradient)", color: "white", borderRadius: 6, textAlign: "center", fontWeight: 500 }}>Send · in your voice</span>
        <span style={{ fontSize: 10, padding: "6px 10px", background: "white", color: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: 6 }}>Edit</span>
      </div>
    </div>
  );
}

function PredictiveMock() {
  return (
    <div style={{ height: 240, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>OVERLOAD FORECAST · NEXT 14D</span>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <svg viewBox="0 0 240 110" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="pred-now" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(43,179,223,0.3)"/>
              <stop offset="100%" stopColor="rgba(43,179,223,0)"/>
            </linearGradient>
            <linearGradient id="pred-fwd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,138,26,0.3)"/>
              <stop offset="100%" stopColor="rgba(201,138,26,0)"/>
            </linearGradient>
          </defs>
          <path d="M0 70 L30 65 L60 60 L90 55 L120 50 L120 110 L0 110 Z" fill="url(#pred-now)"/>
          <path d="M0 70 L30 65 L60 60 L90 55 L120 50" fill="none" stroke="var(--brand-blue)" strokeWidth="1.8"/>
          <path d="M120 50 L150 35 L180 22 L210 18 L240 28 L240 110 L120 110 Z" fill="url(#pred-fwd)"/>
          <path d="M120 50 L150 35 L180 22 L210 18 L240 28" fill="none" stroke="var(--inprogress)" strokeWidth="1.8" strokeDasharray="3 3"/>
          <line x1="120" y1="0" x2="120" y2="110" stroke="var(--ink-4)" strokeWidth="0.5" strokeDasharray="2 2"/>
          <text x="124" y="12" fontSize="8" fontFamily="var(--font-mono)" fill="var(--ink-3)">NOW</text>
        </svg>
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 12, height: 2, background: "var(--brand-blue)", borderRadius: 1 }}/> observed
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 12, height: 2, background: "var(--inprogress)", borderRadius: 1 }}/> predicted · midterms
        </span>
      </div>
    </div>
  );
}

const STUDENT_FEATURES = [
  { n: "01", t: "Intelligent Chat Assistant", b: "Personalized to your schedule, courses, and goals, grounded in the real data your institution already trusts.",
    bullets: ["Access to all university resources: handbooks, policies, course catalogs", "Answers drawn from your LMS, SIS, and CRM", "Personalized to your schedule, courses, and goals"], Mock: ChatMock },
  { n: "02", t: "Proactive Coaching & Nudges", b: "Quiet, well-timed reminders that meet you where you are, not another inbox to check.",
    bullets: ["24/7 AI agents monitoring your academic progress", "Smart reminders for assignments, deadlines, events", "Job fair alerts and career opportunities", "Personalized study recommendations"], Mock: NudgesMock },
  { n: "03", t: "Learns Your Preferences", b: "Builds a private, FERPA-scoped model of how you study best, and adapts everything to fit.",
    bullets: ["Tracks when and how you study best", "Adapts communication style to your needs", "Builds a profile to deliver smarter support", "Privacy-first by design"], Mock: PrefsMock },
  { n: "04", t: "Comprehensive Integration", b: "One brain across every campus system, not a stitched-together set of point tools.",
    bullets: ["Connected to your LMS for assignment tracking", "SIS integration for academic records", "CRM-aware for advising context", "All your university resources in one place"], Mock: IntegrationMock },
];

const STAFF_FEATURES = [
  { n: "01", t: "Early-warning system", bullets: ["Real-time sentiment analysis", "Automated alerts for engagement drops", "AI agents scanning for warning signs", "Track assignment trends, attendance, participation"], Mock: WarningMock },
  { n: "02", t: "Comprehensive dashboards", bullets: ["Sentiment trends over time", "Engagement metrics and patterns", "LMS performance data integration", "Identify at-risk students instantly"], Mock: DashboardMock },
  { n: "03", t: "AI-powered insights", bullets: ["Same powerful AI as the student tool", "Access to documents, calendars, policies", "Student LMS, SIS, and CRM data visibility", "Context-aware recommendations"], Mock: InsightsMock },
  { n: "04", t: "Intervention & recognition", bullets: ["Reach out to struggling students proactively", "Identify high performers for recognition", "Track intervention effectiveness", "Close the loop on student support"], Mock: InterventionMock },
  { n: "05", t: "Predictive analysis", bullets: ["Know when students are overwhelmed, before they do", "Trend analysis across cohorts", "Success-pattern identification", "Data-driven decision making"], Mock: PredictiveMock },
];

const FeatureRow = ({ f, flip }) => {
  const Mock = f.Mock;
  return (
    <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", padding: "32px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-4)" }}>{f.n}</span>
        <h3 style={{ fontSize: 28, marginTop: 8 }}>{f.t}</h3>
        {f.b && <p style={{ fontSize: 15, marginTop: 10, color: "var(--ink-2)" }}>{f.b}</p>}
        <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 10 }}>
          {f.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{b}</li>
          ))}
        </ul>
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <Mock/>
      </div>
    </div>
  );
};

const PullQuote = ({ quote, sub }) => (
  <div style={{ margin: "64px auto 0", maxWidth: 760, textAlign: "center", padding: "48px 24px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
      <em style={{ fontStyle: "normal" }}>"</em>
      <span className="mf-grad-text">{quote}</span>
      <em style={{ fontStyle: "normal" }}>"</em>
    </div>
    <div style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{sub}</div>
  </div>
);

const ForStudents = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 720, marginLeft: 0 }}>
        <span className="mf-eyebrow">For Students</span>
        <h2 style={{ marginTop: 14 }}>An <span className="mf-grad-text">AI-powered</span> success partner.</h2>
        <p>Personalized AI deeply integrated with your LMS, SIS, and CRM: coaching, specialized agents, reminders, and insights tailored to every student.</p>
      </div>
      <div style={{ display: "grid", gap: 28 }}>
        {STUDENT_FEATURES.map((f, i) => (
          <FeatureRow key={f.n} f={f} flip={i % 2 === 1}/>
        ))}
      </div>
      <PullQuote quote="Not just answers. A partner in your success." sub="Real-time data flows from student interactions to staff dashboards →"/>
    </div>
  </section>
);

const ForStaff = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 760, marginLeft: 0 }}>
        <span className="mf-eyebrow">For Staff</span>
        <h2 style={{ marginTop: 14 }}>See problems <span className="mf-grad-text">before</span> they happen.</h2>
        <p>Powered by the same AI, the staff platform turns every student interaction into actionable intelligence: identify at-risk students early, recognize high performers, and intervene with precision.</p>
      </div>
      <div style={{ display: "grid", gap: 28 }}>
        {STAFF_FEATURES.map((f, i) => (
          <FeatureRow key={f.n} f={{ ...f, b: "" }} flip={i % 2 === 0}/>
        ))}
      </div>
      <PullQuote quote="From reactive to proactive. From guesswork to certainty." sub="The complete picture →"/>
    </div>
  </section>
);

const CompletePicture = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head" style={{ marginBottom: 64 }}>
        <span className="mf-eyebrow">The complete picture</span>
        <h2 style={{ marginTop: 14 }}>One closed loop. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>Every week.</em></h2>
        <p>Student action becomes data intelligence becomes staff action, and the loop keeps tightening.</p>
      </div>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, position: "relative" }}>
        {[
          { n: "01", t: "Student engages", items: ["Chats with Nia", "Receives nudges", "Completes (or misses) tasks", "Sentiment is tracked"] },
          { n: "02", t: "Data flows", items: ["AI agents analyze patterns", "Sentiment shifts detected", "Engagement metrics calculated", "Alerts generated"] },
          { n: "03", t: "Staff acts", items: ["Dashboard shows insights", "Early intervention triggered", "Personalized outreach", "Better outcomes"] },
        ].map((s, i) => (
          <div key={s.n} style={{ position: "relative", padding: 28, background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ position: "absolute", top: -16, left: 28, padding: "6px 12px", background: "var(--brand-gradient)", color: "white", borderRadius: 999, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", fontWeight: 600 }}>{s.n}</div>
            <h3 style={{ marginTop: 8, fontSize: 24 }}>{s.t}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 10 }}>
              {s.items.map((it) => (
                <li key={it} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{it}</li>
              ))}
            </ul>
            {i < 2 && (
              <div style={{ position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "white", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand-blue)", boxShadow: "var(--shadow-sm)", zIndex: 2 }}>
                <ArrowR s={18}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Outcome = () => (
  <section style={{ background: "var(--ink)", color: "white", padding: "96px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }}/>
    <div style={{ position: "absolute", width: 600, height: 600, right: -200, top: -200, background: "radial-gradient(circle, rgba(43,179,223,0.18), transparent 60%)", borderRadius: "50%" }}/>
    <div className="mf-container" style={{ position: "relative", textAlign: "center", maxWidth: 820 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>The outcome</span>
      <h2 style={{ color: "white", margin: "20px 0 18px", fontSize: 52, lineHeight: 1.05 }}>
        Better data. <span className="mf-grad-text">Earlier intervention.</span><br/>Stronger outcomes.
      </h2>
      <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 620, margin: "0 auto 36px", fontSize: 17 }}>
        Most tools only report what already happened. Nia turns real-time student activity and staff insights into early alerts and next-step recommendations, so institutions can intervene sooner and improve student success.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact#form" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "white", color: "var(--ink)", fontWeight: 500, fontSize: 15 }}>Schedule a demo <ArrowR/></Link>
        <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "transparent", color: "white", fontWeight: 500, fontSize: 15, border: "1px solid rgba(255,255,255,0.3)" }}>Back to home</Link>
      </div>
    </div>
  </section>
);

export default function HowNiaWorks() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="how"/>
      <Hero/>
      <SecArchitecture/>
      <Connection/>
      <SecCoaches bg="white"/>
      <ForStudents/>
      <ForStaff/>
      <CompletePicture/>
      <Outcome/>
      <Footer/>
    </div>
  );
}
