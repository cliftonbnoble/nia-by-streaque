import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Tick } from "@/components/icons";
import { SecProblem, SecArchitecture, SecCoaches, SecAdvisors, SecProof, SecCTA } from "@/components/home/CampaignSections";
import { LogoStrip, Testimonial, CaseStudy, FAQ, Resources, LeadForm, CookieBanner } from "@/components/home/GapSections";
import HigherEdStackLayers from "@/components/home/HigherEdStackLayers";
import HeroPhones from "@/components/home/HeroPhone";
import VideoEmbed from "@/components/home/VideoEmbed";
import StudentChatDemo from "@/components/home/StudentChatDemo";
import StaffQueueDemo from "@/components/home/StaffQueueDemo";
import FeatureCards from "@/components/home/FeatureCards";

const Hero = () => (
  <section className="mf-hero">
    <div className="mf-hero-bg"/>
    <div className="mf-hero-glow" aria-hidden="true"/>
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
            into warm, evidence-based coaching for every student, every week.
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
          {/* === TWO FANNED LIVE PHONES (active) ===
               left: agent thinking process · right: iOS push → in-app reminder */}
          <HeroPhones/>

          {/* === REAL PHONE PNG + DESKTOP MOCK (kept commented for easy revert) ===
          <div className="mf-mock-phone-real">
            <img src="/agent-interaction-hero.png" alt="Nia mobile chat"/>
          </div>
          === END COMMENTED MOCKS === */}

          <div className="mf-anno" style={{ top: -20, left: 4, width: 96, whiteSpace: "normal", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
            <span>Specialized<br/>Agents</span>
            <svg width="36" height="34" viewBox="0 0 36 34" style={{ marginLeft: 26 }}>
              <path d="M6 3 Q 24 6, 29 27"/>
              <path d="M29 27 L 23.5 22.5 M 29 27 L 31.5 20.5"/>
            </svg>
          </div>
          <div className="mf-anno" style={{ bottom: 110, right: -84, width: 92, whiteSpace: "normal", textAlign: "left", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
            <svg width="48" height="26" viewBox="0 0 48 26" style={{ marginLeft: -6 }}>
              <path d="M46 5 Q 24 -1, 6 17"/>
              <path d="M6 17 L 12.5 16.2 M 6 17 L 10 10.8"/>
            </svg>
            <span>Proactive AI</span>
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
        <p>Tuned to who's holding the device, never who pays the bill.</p>
      </div>
      <div className="mf-two-grid">
        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-grad">Nia for Students</span>
            <span className="mf-status-pill mf-status-live"><span className="dot"/> Available now</span>
          </div>
          <h3>A coach in the pocket.</h3>
          <p className="lede">Personalized momentum plans, course-aware tutoring, and quiet nudges that actually land.</p>

          <StudentChatDemo/>
        </div>

        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-warm">Nia for Staff</span>
            <span className="mf-status-pill mf-status-dev"><span className="dot"/> In development · Pilot 2026</span>
          </div>
          <h3>A co-pilot at the desk.</h3>
          <p className="lede">Conversation summaries, draft replies, and the receipt trail behind every nudge.</p>

          <StaffQueueDemo/>
        </div>
      </div>
    </div>
  </section>
);

/* Feature demos moved to components/home/FeatureCards.jsx */

const Features = () => (
  <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at 50% 25%, black 20%, transparent 72%)" }}/>
    <div style={{ position: "absolute", width: 620, height: 620, right: -240, top: -300, background: "radial-gradient(circle, rgba(43,179,223,0.13), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
    <div style={{ position: "absolute", width: 560, height: 560, left: -220, bottom: -280, background: "radial-gradient(circle, rgba(56,65,177,0.24), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative" }}>
      <div className="mf-section-head">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>What makes Nia different</span>
        <h2 style={{ color: "white" }}>Built different. <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>On purpose.</em></h2>
        <p style={{ color: "rgba(255,255,255,0.65)" }}>Four design choices that separate governed coaching from a generic chatbot.</p>
      </div>
      <FeatureCards/>
    </div>
  </section>
);

const Video = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="mf-eyebrow">From noise to momentum</span>
          <h2 style={{ marginTop: 16 }}>A complete story<br/>with Nia.</h2>
          <p style={{ marginTop: 18, fontSize: 16 }}>90 seconds, no filler. Watch scattered higher-ed data transform into proactive coaching, reclaiming advisor hours and keeping students on track.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <span className="mf-btn mf-btn-primary">▶  Watch the walkthrough</span>
            <span className="mf-btn mf-btn-ghost">Read the transcript</span>
          </div>
        </div>
        <VideoEmbed/>
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
      <div className="mf-stats-grid">
        {[
          { n: "93%", l: "of students with active momentum plans", d: "Up from 41% pre-rollout. Measured across 12 institutions over 8 months." },
          { n: "75%", l: "engaged with critical nudges within 24h", d: "Versus 22% for static email outreach in the same cohort." },
          { n: "63%", l: "of recommendations completed by students", d: "Includes course actions, advisor meetings, and aid-form completion." },
        ].map((s) => (
          <div key={s.n} className="mf-stats-cell">
            <div className="num" style={{ fontFamily: "var(--font-display)", fontWeight: 600, lineHeight: 0.95, letterSpacing: "-0.04em", background: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{s.n}</div>
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
    { name: "Luke", role: "CEO", img: "/team/luke.jpg" },
    { name: "Clifton", role: "CTO", img: "/team/clifton.jpg" },
    { name: "Amit", role: "AI Lead", img: "/team/amit.jpg" },
    { name: "Bhavadeep", role: "Sr. Software Engineer", img: "/team/bhavadeep.jpg" },
    { name: "Sunil", role: "Engineering", img: "/team/sunil.jpg" },
    { name: "Pundlik", role: "DBA", img: "/team/pundlik.jpg" },
  ];
  return (
    <section className="mf-section alt" id="about">
      <div className="mf-container">
        <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720, marginBottom: 48 }}>
          <span className="mf-eyebrow">The team</span>
          <h2 style={{ marginTop: 14 }}>Higher-ed veterans, <span className="mf-grad-text">AI engineers,</span> and student advocates.</h2>
          <p>Built by people who've sat on both sides of the desk: registrars, advisors, ML engineers, and the students they serve.</p>
        </div>
        <div className="mf-team-grid">
          {team.map((m) => (
            <div key={m.name} className="mf-team-card">
              <img src={m.img} alt={`${m.name}, ${m.role}`} className="mf-team-photo" loading="lazy" decoding="async"/>
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
        <p>Nia sits between your systems and the model, orchestrating governed nudges and workflows, never moving PII off your tenant.</p>
      </div>

      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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

    <img src="/orch-v2/left-ribbon-frame.svg"  alt="" className="orch2-ribbon left" loading="lazy" decoding="async"/>
    <img src="/orch-v2/right-ribbon-frame.svg" alt="" className="orch2-ribbon right" loading="lazy" decoding="async"/>

    <div className="orch2-canvas">

      <div className="orch2-piece orch2-llms" style={{ "--d": "0ms" }}>
        <img src="/orch-v2/campus-auth-llm-stack.svg" alt="Campus-authorized LLMs · Chat bots and Copilots" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-arrow orch2-arrow-llm" style={{ "--d": "200ms" }}>
        <img src="/orch-v2/campus-llm-arrow.svg" alt="" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-piece orch2-main" style={{ "--d": "350ms" }}>
        <img src="/orch-v2/nia-orchestration-layer-stack.svg" alt="Nia Orchestration Layer: Guardrails and routing, Coaching and nudges, Audit and governance" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-arrow orch2-arrow-students" style={{ "--d": "650ms" }}>
        <img src="/orch-v2/student-staff-arrow.svg" alt="" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-piece orch2-students" style={{ "--d": "800ms" }}>
        <img src="/orch-v2/student-and-staff-stack.svg" alt="Students and Staff" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-systems-head orch2-piece" style={{ "--d": "1000ms" }}>
        Campus Systems
      </div>

      <div className="orch2-arrow orch2-arrow-core" style={{ "--d": "1100ms" }}>
        <img src="/orch-v2/core-system-arrow.svg" alt="" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-arrow orch2-arrow-points" style={{ "--d": "1200ms" }}>
        <img src="/orch-v2/point-solution-arrow.svg" alt="" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-piece orch2-core" style={{ "--d": "1250ms" }}>
        <img src="/orch-v2/core-system-record-stack.svg" alt="Core systems of record · LMS, SIS, CRM, Financial Aid" loading="lazy" decoding="async"/>
      </div>

      <div className="orch2-piece orch2-points" style={{ "--d": "1350ms" }}>
        <img src="/orch-v2/points-solution-stack.svg" alt="Point Solutions · Advising, career tools, early alert, basic needs, tutoring, mentoring" loading="lazy" decoding="async"/>
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
      <SecProblem/>
      <Video/>
      <LogoStrip/>
      <TwoExperiences/>
      <SecAdvisors/>
      <Features/>
      <SecArchitecture/>
      <SecCoaches/>
      {/* <HigherEdStackLayers/> — removed: duplicated the dark orchestration section's headline directly above it */}
      <HigherEdStack/>
      <Stats/>
      <SecProof/>
      <CaseStudy/>
      <Testimonial/>
      <Team/>
      <TechPrivacy/>
      <FAQ/>
      <Resources/>
      <LeadForm/>
      {/* <CTA/> — removed: redundant with SecCTA directly below (two stacked full-bleed CTAs) */}
      <SecCTA/>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}
