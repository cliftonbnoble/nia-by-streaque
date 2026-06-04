import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Tick } from "@/components/icons";
import React from "react";

const Hero = () => (
  <section className="mf-hero">
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div className="mf-hero-grid">
        <div>
          <span className="mf-eyebrow">Nia by Streaque</span>
          <h1 style={{ marginTop: 18 }}>
            Every signal,<br/>
            <span className="mf-grad-text">every student,</span><br/>
            answered.
          </h1>
          <p className="mf-hero-sub">
            The institution-governed AI layer that turns LMS, SIS, and CRM data
            into warm, evidence-based coaching — for every student, every week.
          </p>
          <div className="mf-hero-actions">
            <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none" }}>Book a demo <ArrowRight/></Link>
            <a href="mailto:info@streaque.com?subject=Investor%20brief" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none" }}>Investor brief</a>
          </div>
          <div className="mf-hero-meta">
            <div className="mf-hero-meta-stat"><span className="num">12+</span><span className="lbl">institutions piloting</span></div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat"><span className="num">93%</span><span className="lbl">active momentum plans</span></div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat"><span className="num">100%</span><span className="lbl">institution-owned data</span></div>
          </div>
        </div>

        <div className="mf-mock-stage">
          <div className="mf-mock-desktop">
            <div className="mf-mock-desktop-bar">
              <span className="dot"/><span className="dot"/><span className="dot"/>
              <span className="url">advisor.streaque.app / queue</span>
              <span style={{ marginLeft: "auto" }}>● live</span>
            </div>
            <div className="mf-mock-desktop-body">
              <div className="mf-mock-desktop-statrow">
                <div className="mf-mock-stat-card primary"><div className="num">93%</div><div className="lbl">momentum plans</div></div>
                <div className="mf-mock-stat-card"><div className="num">75%</div><div className="lbl">nudge engagement</div></div>
                <div className="mf-mock-stat-card"><div className="num">63%</div><div className="lbl">recs completed</div></div>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 8, marginTop: 4 }}>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 4 }}>EARLY-ALERT QUEUE · 4</div>
                {[
                  { i: "M", n: "Maya Reyes", s: "BIO 201 · missed quiz", tag: "Nudged", tagKind: "success" },
                  { i: "J", n: "Jonas Kim", s: "GPA dip · 3 weeks", tag: "Draft reply", tagKind: "warm" },
                  { i: "A", n: "Anya Patel", s: "Low engagement", tag: "Schedule", tagKind: "" },
                  { i: "R", n: "Ravi Shah", s: "Aid form overdue", tag: "Auto-routed", tagKind: "success" },
                ].map((r) => (
                  <div key={r.n} className="mf-mock-row">
                    <span className="mf-mock-avatar">{r.i}</span>
                    <span className="grow"><span className="name">{r.n}</span> · <span className="sig">{r.s}</span></span>
                    <span className={"mf-chip " + (r.tagKind === "success" ? "mf-chip-success" : r.tagKind === "warm" ? "mf-chip-warm" : "mf-chip-neutral")} style={{ fontSize: 10, padding: "2px 8px" }}>{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === REAL PHONE PNG (active) === */}
          <div className="mf-mock-phone-real">
            <img src="/agent-interaction-hero.png" alt="Nia mobile chat — Academic agent helping a student plan around a low FIT101 grade"/>
          </div>

          {/* === FAKE PHONE MOCK (kept commented for easy revert; remove the JSX comment wrapper to restore) ===
          <div className="mf-mock-phone">
            <div className="mf-mock-phone-screen">
              <div className="mf-mock-phone-status">
                <span>9:41</span>
                <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }}/>
                  Nia
                </span>
              </div>
              <div className="mf-mock-phone-greet">Good morning, Maya 👋</div>
              <div className="mf-bubble nia">Ready for ch. 4? I'll keep it to 10 min.</div>
              <div className="mf-bubble user">ok yeah</div>
              <div className="mf-bubble nia">Great — starting with the hardest concept first.</div>
              <div className="mf-mock-phone-card">
                <div className="title">BIO 201 · Cell respiration</div>
                <div className="meta">10 min lesson · adapts to your pace</div>
              </div>
            </div>
          </div>
          === END FAKE PHONE MOCK === */}

          <div className="mf-anno" style={{ top: -22, left: 100 }}>
            <svg width="40" height="22" viewBox="0 0 40 22"><path d="M2 4 Q 20 24, 38 18 L 32 14 M 38 18 L 34 22"/></svg>
            staff view
          </div>
          <div className="mf-anno" style={{ bottom: 60, left: -90, width: 90, whiteSpace: "normal", textAlign: "right" }}>
            <span>same brain,<br/>student view</span>
            <svg width="50" height="22" viewBox="0 0 50 22"><path d="M2 11 Q 25 0, 48 14 L 42 10 M 48 14 L 44 18"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TwoExperiences = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-section-head">
        <span className="mf-eyebrow">Two experiences · One unified system</span>
        <h2>Same data model. Same governance. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>Two front doors.</em></h2>
        <p>Tuned to who's holding the device — never to who pays the bill.</p>
      </div>
      <div className="mf-two-grid">
        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-grad">Nia for Students</span>
            <span className="mf-status-pill mf-status-live"><span className="dot"/> Available now</span>
          </div>
          <h3>A coach in the pocket.</h3>
          <p className="lede">Personalized momentum plans, course-aware tutoring, and quiet nudges that actually land.</p>

          <div className="mf-experience-mock" style={{ flexDirection: "row" }}>
            <div className="mf-mini-phone">
              <div className="top"><span>9:41</span><span>Nia</span></div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600 }}>Today · 3 things</div>
              <div className="mf-mini-bubble nia">Pop-quiz prep?</div>
              <div className="mf-mini-bubble user">yes</div>
              <div className="mf-mini-bubble nia">Starting at ch. 4 →</div>
              <div style={{ marginTop: "auto", padding: 6, background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 8, fontSize: 9 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 10 }}>BIO 201 · 10 min</div>
                <div style={{ color: "var(--ink-3)", marginTop: 1 }}>adaptive lesson</div>
              </div>
            </div>
            <ul style={{ flex: 1, margin: 0, padding: "0 0 0 4px" }}>
              <li><Tick/> Daily momentum plan</li>
              <li><Tick/> Course-aware tutoring</li>
              <li><Tick/> Career & finance agents</li>
              <li><Tick/> Always FERPA-scoped</li>
            </ul>
          </div>
        </div>

        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-warm">Nia for Staff</span>
            <span className="mf-status-pill mf-status-dev"><span className="dot"/> In development · Pilot 2026</span>
          </div>
          <h3>A co-pilot at the desk.</h3>
          <p className="lede">Conversation summaries, draft replies, and the receipt trail behind every nudge.</p>

          <div className="mf-experience-mock" style={{ background: "white" }}>
            <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", display: "flex", justifyContent: "space-between" }}>
              <span>EARLY-ALERT QUEUE · 12</span>
              <span style={{ color: "var(--success)" }}>● synced</span>
            </div>
            {[
              { i: "M", n: "Maya Reyes", s: "missed BIO quiz", tag: "Nudged", tagKind: "success" },
              { i: "J", n: "Jonas Kim", s: "GPA dip", tag: "Draft reply", tagKind: "warm" },
              { i: "A", n: "Anya Patel", s: "low engagement", tag: "Meet?", tagKind: "" },
              { i: "R", n: "Ravi Shah", s: "aid overdue", tag: "Auto-routed", tagKind: "success" },
            ].map((r) => (
              <div key={r.n} className="mf-queue-row">
                <span className="mf-mock-avatar" style={{ width: 22, height: 22, fontSize: 10 }}>{r.i}</span>
                <span className="grow"><span className="name">{r.n}</span> · <span className="sig">{r.s}</span></span>
                <span className={"mf-chip " + (r.tagKind === "success" ? "mf-chip-success" : r.tagKind === "warm" ? "mf-chip-warm" : "mf-chip-neutral")} style={{ fontSize: 10, padding: "2px 8px" }}>{r.tag}</span>
              </div>
            ))}
          </div>
          <ul>
            <li><Tick/> Early-alert queue, ranked by impact</li>
            <li><Tick/> One-click reply drafts in your voice</li>
            <li><Tick/> Audit log on every action</li>
            <li><Tick/> Role-based permissions, top to bottom</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FeatureIcon = ({ kind }) => {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "nudge") return <svg {...common}><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>;
  if (kind === "evidence") return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
  if (kind === "smart") return <svg {...common}><path d="M12 3a4 4 0 0 0-4 4v1H7a4 4 0 0 0 0 8h1v1a4 4 0 0 0 8 0v-1h1a4 4 0 0 0 0-8h-1V7a4 4 0 0 0-4-4z"/></svg>;
  if (kind === "multi") return <svg {...common}><circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 9v3M9 16l2-2M15 16l-2-2"/></svg>;
  return null;
};

const NudgeMini = () => (
  <div style={{ position: "relative", height: 160, background: "linear-gradient(180deg, var(--bg-alt), white)", borderRadius: 12, border: "1px solid var(--line)", padding: 16, overflow: "hidden" }}>
    <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--ink-3)", textTransform: "uppercase" }}>SIGNAL → NUDGE · 1.2s</div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
      <span style={{ fontSize: 10, padding: "3px 8px", background: "white", border: "1px solid var(--line)", borderRadius: 6, fontFamily: "var(--font-mono)" }}>Canvas</span>
      <span style={{ flex: 1, height: 1, background: "repeating-linear-gradient(90deg, var(--line) 0 4px, transparent 4px 8px)" }}/>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--primary)", color: "white", borderRadius: 4, fontFamily: "var(--font-mono)" }}>Nia</span>
      <span style={{ flex: 1, height: 1, background: "repeating-linear-gradient(90deg, var(--line) 0 4px, transparent 4px 8px)" }}/>
      <span style={{ fontSize: 10, padding: "3px 8px", background: "rgba(13,138,90,0.08)", color: "var(--success)", border: "1px solid rgba(13,138,90,0.2)", borderRadius: 6, fontFamily: "var(--font-mono)" }}>Maya</span>
    </div>
    <div style={{ marginTop: 14, padding: 10, background: "white", border: "1px solid var(--line)", borderRadius: 10, boxShadow: "var(--shadow-sm)", fontSize: 12 }}>
      <div style={{ fontWeight: 600, fontFamily: "var(--font-display)", fontSize: 11, color: "var(--ink)" }}>Hey Maya — saw you missed the BIO quiz. Want a 10-min reset?</div>
      <div style={{ marginTop: 6, display: "flex", gap: 6 }}>
        <span style={{ fontSize: 10, padding: "3px 8px", background: "var(--primary-50)", color: "var(--primary)", borderRadius: 6 }}>Yes, let's go</span>
        <span style={{ fontSize: 10, padding: "3px 8px", background: "var(--bg-alt)", color: "var(--ink-3)", borderRadius: 6 }}>Later today</span>
      </div>
    </div>
  </div>
);

const EvidenceMini = () => (
  <div style={{ height: 160, background: "linear-gradient(180deg, var(--bg-alt), white)", borderRadius: 12, border: "1px solid var(--line)", padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--ink-3)", textTransform: "uppercase" }}>SCAFFOLDED · GROWTH-MINDSET</div>
    <div style={{ alignSelf: "flex-start", maxWidth: "78%", padding: "7px 11px", background: "white", border: "1px solid var(--line)", borderRadius: "12px 12px 12px 4px", fontSize: 11, lineHeight: 1.4, color: "var(--ink-2)" }}>That section's tough — most students hit a wall there. Let's break it into 3 small wins.</div>
    <div style={{ alignSelf: "flex-end", maxWidth: "60%", padding: "7px 11px", background: "var(--primary)", color: "white", borderRadius: "12px 12px 4px 12px", fontSize: 11 }}>okay yeah</div>
    <div style={{ alignSelf: "flex-start", maxWidth: "70%", padding: "7px 11px", background: "white", border: "1px solid var(--line)", borderRadius: "12px 12px 12px 4px", fontSize: 11, color: "var(--ink-2)" }}>Nice. Win #1 in 3 minutes →</div>
    <div style={{ marginTop: "auto", display: "flex", gap: 6, alignItems: "center", paddingTop: 4 }}>
      <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--ink-4)", letterSpacing: "0.06em" }}>cited:</span>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>Yeager '19</span>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>Dweck '06</span>
    </div>
  </div>
);

const SmartMini = () => (
  <div style={{ height: 160, background: "linear-gradient(180deg, var(--bg-alt), white)", borderRadius: 12, border: "1px solid var(--line)", padding: 14, display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--ink-3)", textTransform: "uppercase" }}>NUDGE OPEN-RATE · 8wk</span>
      <span style={{ fontSize: 11, fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--success)" }}>+34%</span>
    </div>
    <svg viewBox="0 0 240 70" style={{ width: "100%", height: 70, marginTop: 8 }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(6,11,97,0.18)"/>
          <stop offset="100%" stopColor="rgba(6,11,97,0)"/>
        </linearGradient>
      </defs>
      <path d="M0 50 L20 48 L40 52 L60 44 L80 46 L100 38 L120 32 L140 30 L160 22 L180 24 L200 14 L220 10 L240 6 L240 70 L0 70 Z" fill="url(#sparkfill)"/>
      <path d="M0 50 L20 48 L40 52 L60 44 L80 46 L100 38 L120 32 L140 30 L160 22 L180 24 L200 14 L220 10 L240 6" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="240" cy="6" r="3" fill="var(--accent-warm)"/>
    </svg>
    <div style={{ display: "flex", gap: 6, marginTop: "auto", flexWrap: "wrap" }}>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>tone ↑</span>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>timing ↑</span>
      <span style={{ fontSize: 9, padding: "2px 6px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 4, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>cohort B</span>
    </div>
  </div>
);

const MultiAgentMini = () => (
  <div style={{ height: 160, background: "linear-gradient(180deg, var(--bg-alt), white)", borderRadius: 12, border: "1px solid var(--line)", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--ink-3)", textTransform: "uppercase" }}>HANDOFF · 0 SEAMS</div>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {["Academic", "Career", "Finance"].map((a, i) => (
        <React.Fragment key={a}>
          <span style={{ fontSize: 10, padding: "4px 9px", background: i === 0 ? "var(--primary)" : "white", color: i === 0 ? "white" : "var(--ink-2)", border: "1px solid " + (i === 0 ? "var(--primary)" : "var(--line)"), borderRadius: 999, fontWeight: 500 }}>{a}</span>
          {i < 2 && <span style={{ color: "var(--ink-4)", fontSize: 11 }}>→</span>}
        </React.Fragment>
      ))}
    </div>
    <div style={{ alignSelf: "flex-start", padding: "6px 10px", background: "white", border: "1px solid var(--line)", borderRadius: 10, fontSize: 11, color: "var(--ink-2)" }}>"What about internships?"</div>
    <div style={{ alignSelf: "flex-start", padding: "6px 10px", background: "white", border: "1px solid var(--line)", borderRadius: 10, fontSize: 11, color: "var(--ink-2)", marginLeft: 16, position: "relative" }}>
      <span style={{ position: "absolute", top: -8, left: -2, fontSize: 8, padding: "1px 5px", background: "var(--accent-warm)", color: "white", borderRadius: 3, fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>Career</span>
      Three openings match your major.
    </div>
    <div style={{ marginTop: "auto", fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--ink-4)", letterSpacing: "0.06em" }}>same thread · same audit log</div>
  </div>
);

const FEATURE_DEMOS = { nudge: NudgeMini, evidence: EvidenceMini, smart: SmartMini, multi: MultiAgentMini };

const Features = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head">
        <span className="mf-eyebrow">What makes Nia different</span>
        <h2>Built different. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>On purpose.</em></h2>
        <p>Four design choices that separate governed coaching from a generic chatbot.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 1080, margin: "0 auto" }}>
        {[
          { n: "01", kind: "nudge", t: "Proactive Nudging", b: "Turns LMS, SIS, and CRM signals into timely, evidence-based nudges — not noise.", tag: "live" },
          { n: "02", kind: "evidence", t: "Evidence-Based Coaching", b: "Motivational, scaffolded conversations grounded in growth-mindset and self-determination research.", tag: "researched" },
          { n: "03", kind: "smart", t: "Gets Smarter Over Time", b: "Refines triggers, timing, and tone based on the outcomes that matter to your institution.", tag: "adaptive" },
          { n: "04", kind: "multi", t: "Multi-Agent Orchestration", b: "Academic, career, and finance agents handing off mid-conversation — student never sees the seam.", tag: "unified" },
        ].map((f) => {
          const Demo = FEATURE_DEMOS[f.kind];
          return (
            <div key={f.n} style={{ display: "flex", flexDirection: "column", padding: 24, background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-4)", letterSpacing: "0.12em" }}>{f.n}</span>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--primary-50)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <FeatureIcon kind={f.kind}/>
                </span>
                <span style={{ flex: 1 }}/>
                <span className="mf-chip mf-chip-neutral" style={{ fontSize: 10 }}>{f.tag}</span>
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 6 }}>{f.t}</h3>
              <p style={{ fontSize: 14, marginBottom: 18 }}>{f.b}</p>
              <div style={{ marginTop: "auto" }}><Demo/></div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Video = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="mf-eyebrow">See it move</span>
          <h2 style={{ marginTop: 16 }}>A real week<br/>with Nia.</h2>
          <p style={{ marginTop: 18, fontSize: 16 }}>90 seconds, no filler. Watch a single signal travel from the LMS into a warm conversation, an advisor handoff, and an outcome.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <span className="mf-btn mf-btn-primary">▶  Watch the walkthrough</span>
            <span className="mf-btn mf-btn-ghost">Read the transcript</span>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--ink)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,11,97,0.5), transparent 60%)" }}/>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }}/>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--primary)"><path d="M5 3.5v17l15-8.5z"/></svg>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 16, color: "white", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>00:00 · 01:27 · governance walkthrough</div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div style={{ marginBottom: 56 }}>
        <span className="mf-eyebrow">Momentum, measured</span>
        <h2 style={{ marginTop: 14, maxWidth: 720 }}>Quiet outcomes,<br/><em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>compounded.</em></h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        {[
          { n: "93%", l: "of students with active momentum plans", d: "Up from 41% pre-rollout. Measured across 12 institutions over 8 months." },
          { n: "75%", l: "engaged with critical nudges within 24h", d: "Versus 22% for static email outreach in the same cohort." },
          { n: "63%", l: "of recommendations completed by students", d: "Includes course actions, advisor meetings, and aid-form completion." },
        ].map((s, i) => (
          <div key={s.n} style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.04em", background: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{s.n}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, marginTop: 12, color: "var(--ink)", letterSpacing: "-0.015em" }}>{s.l}</div>
            <p style={{ fontSize: 13, marginTop: 8, color: "var(--ink-3)" }}>{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => {
  const team = [
    { name: "Luke", role: "CEO", img: "/team-luke.jpg" },
    { name: "Clifton", role: "CTO", img: "/team-clifton.jpg" },
    { name: "Amit", role: "AI Lead", img: "/team-amit.jpg" },
    { name: "Bhavadeep", role: "Sr. Software Engineer", img: "/team-bhavadeep.jpg" },
    { name: "Sunil", role: "Engineering", img: "/team-sunil.jpg" },
    { name: "Pundlik", role: "DBA", img: "/team-pundlik.jpg" },
  ];
  return (
    <section className="mf-section alt" id="about">
      <div className="mf-container">
        <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720, marginBottom: 48 }}>
          <span className="mf-eyebrow">The team</span>
          <h2 style={{ marginTop: 14 }}>Higher-ed veterans, <span className="mf-grad-text">AI engineers,</span> and student advocates.</h2>
          <p>Built by people who've sat on both sides of the desk — registrars, advisors, ML engineers, and the students they serve.</p>
        </div>
        <div className="mf-team-grid">
          {team.map((m) => (
            <div key={m.name} className="mf-team-card">
              <img src={m.img} alt={`${m.name}, ${m.role}`} className="mf-team-photo"/>
              <div className="mf-team-overlay">
                <div className="mf-team-name">{m.name}</div>
                <div className="mf-team-role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechPrivacy = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 580 }}>
        <span className="mf-eyebrow">Tech & Privacy</span>
        <h2 style={{ marginTop: 14 }}>Privacy is <em style={{ fontStyle: "normal", color: "var(--primary)" }}>the architecture.</em></h2>
        <p>Nia sits between your systems and the model — orchestrating governed nudges and workflows, never moving PII off your tenant.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <span className="mf-tick" style={{ width: 22, height: 22 }}>
              <svg viewBox="0 0 24 24" style={{ width: 13, height: 13 }}><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <h3>What we promise</h3>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {["Institution retains data ownership, end-to-end", "Encryption in transit and at rest", "Role-based permissions, top to bottom", "Full audit log for every model call", "SOC 2 Type II in progress"].map((it) => (
              <li key={it} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{it}</li>
            ))}
          </ul>
        </div>
        <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(217,119,87,0.12)", color: "#a14a2c", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </span>
            <h3>What we never do</h3>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {["Train foundation models on your student data", "Move PII off your tenant", "Bypass advisor authority", "Hide a recommendation from review", "Sell, share, or syndicate any institutional data"].map((it) => (
              <li key={it} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(217,119,87,0.12)", color: "#a14a2c", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HigherEdStack = () => (
  <section className="orch2" aria-label="How Nia fits in your Higher Ed Stack">
    <div className="orch2-head">
      <h2>How Nia fits in your Higher Ed Stack</h2>
      <p>Sits between your systems and AI models to orchestrate governed nudges and workflows.</p>
    </div>

    <div className="orch2-canvas">
      <img src="/orch-v2/left-ribbon-stack.svg"  alt="" className="orch2-ribbon left"/>
      <img src="/orch-v2/right-ribbon-stack.svg" alt="" className="orch2-ribbon right"/>

      <div className="orch2-piece orch2-llms" style={{ "--d": "0ms" }}>
        <img src="/orch-v2/campus-auth-llm-stack.svg" alt="Campus-authorized LLMs · Chat bots and Copilots"/>
      </div>

      <div className="orch2-arrow orch2-arrow-llm" style={{ "--d": "200ms" }}>
        <img src="/orch-v2/campus-llm-arrow.svg" alt=""/>
      </div>

      <div className="orch2-piece orch2-main" style={{ "--d": "350ms" }}>
        <img src="/orch-v2/nia-orchestration-layer-stack.svg" alt="Nia Orchestration Layer — Guardrails and routing, Coaching and nudges, Audit and governance"/>
      </div>

      <div className="orch2-arrow orch2-arrow-students" style={{ "--d": "650ms" }}>
        <img src="/orch-v2/student-staff-arrow.svg" alt=""/>
      </div>

      <div className="orch2-piece orch2-students" style={{ "--d": "800ms" }}>
        <img src="/orch-v2/student-and-staff-stack.svg" alt="Students and Staff"/>
      </div>

      <div className="orch2-systems-head orch2-piece" style={{ "--d": "1000ms" }}>
        Campus Systems
      </div>

      <div className="orch2-arrow orch2-arrow-core" style={{ "--d": "1100ms" }}>
        <img src="/orch-v2/core-system-arrow.svg" alt=""/>
      </div>

      <div className="orch2-arrow orch2-arrow-points" style={{ "--d": "1200ms" }}>
        <img src="/orch-v2/point-solution-arrow.svg" alt=""/>
      </div>

      <div className="orch2-piece orch2-core" style={{ "--d": "1250ms" }}>
        <img src="/orch-v2/core-system-record-stack.svg" alt="Core systems of record · LMS, SIS, CRM, Financial Aid"/>
      </div>

      <div className="orch2-piece orch2-points" style={{ "--d": "1350ms" }}>
        <img src="/orch-v2/points-solution-stack.svg" alt="Point Solutions · Advising, career tools, early alert, basic needs, tutoring, mentoring"/>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section style={{ background: "var(--primary)", color: "white", padding: "96px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }}/>
    <div style={{ position: "absolute", width: 600, height: 600, right: -200, top: -200, background: "radial-gradient(circle, rgba(217,119,87,0.15), transparent 60%)", borderRadius: "50%" }}/>
    <div className="mf-container" style={{ position: "relative", textAlign: "center" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Find your fit</span>
      <h2 style={{ color: "white", margin: "20px 0 18px", fontSize: 56, lineHeight: 1.05 }}>
        Pilot with us. <em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.6)" }}>Or invest with us.</em>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: 540, margin: "0 auto 32px", fontSize: 17 }}>
        Customized workflows. Shared roadmap. Preferred pricing. Dedicated support.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact#form" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "white", color: "var(--primary)", fontWeight: 500, fontSize: 15 }}>Start a pilot <ArrowRight/></Link>
        <a href="mailto:info@streaque.com?subject=Investor%20brief" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "transparent", color: "white", fontWeight: 500, fontSize: 15, border: "1px solid rgba(255,255,255,0.3)" }}>Investor brief</a>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="home"/>
      <Hero/>
      <TwoExperiences/>
      <Features/>
      <Video/>
      <Stats/>
      <Team/>
      <TechPrivacy/>
      <HigherEdStack/>
      <CTA/>
      <Footer/>
    </div>
  );
}
