import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { SecProblem, SecArchitecture, SecCoaches, SecProof, SecCTA } from "@/components/home/CampaignSections";
import { LogoStrip, FAQ, Resources, LeadForm, CookieBanner } from "@/components/home/GapSections";
import HeroPhones from "@/components/home/HeroPhone";
import VideoEmbed from "@/components/home/VideoEmbed";
import StudentChatDemo from "@/components/home/StudentChatDemo";
import StaffQueueDemo from "@/components/home/StaffQueueDemo";
import FeatureCards from "@/components/home/FeatureCards";
import WholeStudent from "@/components/home/WholeStudent";

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
            <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg mf-cta-fx" style={{ textDecoration: "none" }}>
              Book a demo
              <span className="mf-cta-arr" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <ArrowRight/>
                <ArrowRight/>
              </span>
              <span className="mf-cta-cap" aria-hidden="true" style={{ fontSize: 34 }}>🎓</span>
            </Link>
            <a href="mailto:info@streaque.com?subject=Investor%20brief" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none" }}>Investor brief</a>
          </div>
          <div className="mf-hero-meta">
            <div className="mf-hero-meta-stat"><span className="num">R1</span><span className="lbl">research university pilot, live</span></div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat"><span className="num">24/7</span><span className="lbl">proactive coaching for students</span></div>
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
  <section className="mf-section" style={{ background: "radial-gradient(circle at 12% 16%, rgba(102,208,255,0.13) 0%, transparent 48%), radial-gradient(circle at 88% 84%, rgba(130,104,255,0.12) 0%, transparent 50%), linear-gradient(180deg, #FAFBFE 0%, #F3F5FB 100%)" }}>
    <div className="mf-container">
      <div className="mf-section-head">
        <span className="mf-eyebrow">Two experiences · One unified system</span>
        <h2>Same data model. Same governance. <em className="mf-grad-text" style={{ fontStyle: "normal" }}>Two front doors.</em></h2>
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
          <h2>A complete story<br/>with Nia.</h2>
          <p style={{ marginTop: 18, fontSize: 16 }}>90 seconds, no filler. Watch scattered higher-ed data transform into proactive coaching, reclaiming advisor hours and keeping students on track.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <span className="mf-btn mf-btn-primary">▶  Watch the walkthrough</span>
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

/* ── Tech & Privacy — three illustrated cards in the contact-page
     language, each a quick highlight that pushes to /security ── */

const PromiseArt = () => (
  <svg viewBox="0 0 320 150" className="tp-svg">
    <defs>
      <linearGradient id="tp-sh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2BB3DF"/><stop offset="1" stopColor="#3841B1"/></linearGradient>
    </defs>
    <rect x="78" y="30" width="102" height="92" rx="12" fill="white" stroke="#E3E8F4"/>
    <rect x="92" y="46" width="56" height="6" rx="3" fill="#D9DEEC"/>
    <rect x="92" y="60" width="74" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="92" y="72" width="62" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="92" y="84" width="70" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="92" y="96" width="48" height="5" rx="2.5" fill="#EDF0F8"/>
    <g className="tp-bob">
      <path d="M212 36 l30 11 v23 c0 21 -13.5 33.5 -30 40.5 c-16.5 -7 -30 -19.5 -30 -40.5 v-23 z" fill="white" stroke="url(#tp-sh)" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="m200 72 8.5 8.5 16-17" fill="none" stroke="url(#tp-sh)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const NeverArt = () => (
  <svg viewBox="0 0 320 150" className="tp-svg">
    <rect x="46" y="52" width="92" height="46" rx="10" fill="white" stroke="#E3E8F4"/>
    <circle cx="68" cy="75" r="9" fill="#EDF0F8"/>
    <circle cx="68" cy="72.5" r="3.2" fill="#ADB6CC"/>
    <path d="M61.5 79.5a6.6 6.6 0 0 1 13 0" fill="#ADB6CC"/>
    <rect x="84" y="64" width="42" height="5" rx="2.5" fill="#D9DEEC"/>
    <rect x="84" y="76" width="32" height="5" rx="2.5" fill="#EDF0F8"/>
    <text x="92" y="46" fontSize="9" fontFamily="var(--font-mono)" fill="#6b7187" textAnchor="middle" letterSpacing="0.5">STUDENT PII</text>
    <rect x="196" y="52" width="86" height="46" rx="10" fill="#F6F8FC" stroke="#E3E8F4" strokeDasharray="4 4"/>
    <text x="239" y="71" fontSize="9" fontFamily="var(--font-mono)" fill="#8A90A5" textAnchor="middle" letterSpacing="0.5">MODEL</text>
    <text x="239" y="84" fontSize="9" fontFamily="var(--font-mono)" fill="#8A90A5" textAnchor="middle" letterSpacing="0.5">TRAINING</text>
    <line x1="142" y1="75" x2="192" y2="75" stroke="#D9DEEC" strokeWidth="2" strokeDasharray="5 5"/>
    <g className="tp-bob">
      <circle cx="167" cy="75" r="15" fill="white" stroke="#DC2626" strokeWidth="2.4"/>
      <line x1="157" y1="65" x2="177" y2="85" stroke="#DC2626" strokeWidth="2.4" strokeLinecap="round"/>
    </g>
    <text x="167" y="112" fontSize="8.5" fontFamily="var(--font-mono)" fill="#B91C1C" textAnchor="middle" letterSpacing="1">NEVER</text>
  </svg>
);

const ComplianceArt = () => (
  <svg viewBox="0 0 320 150" className="tp-svg">
    <rect x="104" y="22" width="112" height="116" rx="12" fill="white" stroke="#E3E8F4"/>
    <rect x="118" y="38" width="50" height="6" rx="3" fill="#D9DEEC"/>
    <g>
      <rect x="118" y="56" width="38" height="16" rx="8" fill="#EEF6FF" stroke="rgba(35,86,201,0.25)"/>
      <text x="137" y="67" fontSize="8" fontFamily="var(--font-mono)" fill="#2356c9" textAnchor="middle">FERPA</text>
      <rect x="162" y="56" width="38" height="16" rx="8" fill="#EEF6FF" stroke="rgba(35,86,201,0.25)"/>
      <text x="181" y="67" fontSize="8" fontFamily="var(--font-mono)" fill="#2356c9" textAnchor="middle">GDPR</text>
    </g>
    <rect x="118" y="84" width="84" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="118" y="96" width="72" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="118" y="108" width="78" height="5" rx="2.5" fill="#EDF0F8"/>
    <g className="tp-bob">
      <rect x="196" y="100" width="96" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="210" cy="112" r="3.5" fill="#2BB3DF"/>
      <text x="220" y="115.5" fontSize="9" fontFamily="var(--font-mono)" fill="#404659">Pen test live</text>
    </g>
    <g className="tp-bob" style={{ animationDelay: "1.1s" }}>
      <rect x="36" y="34" width="100" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="50" cy="46" r="3.5" fill="#8A90A5"/>
      <text x="60" y="49.5" fontSize="9" fontFamily="var(--font-mono)" fill="#404659">SOC 2 · sched.</text>
    </g>
  </svg>
);

const TechPrivacy = () => {
  const cards = [
    { eyebrow: "The promise", title: "Your data, your tenant.", body: "Encryption everywhere, role-based access, and an audit log behind every model call. The institution owns it all.", cta: "Explore the architecture", accent: "43,179,223", color: "var(--brand-cyan)", Art: PromiseArt },
    { eyebrow: "The hard lines", title: "What we never do.", body: "Never train on your students' data, never move PII off your tenant, never hide a recommendation from review.", cta: "Read the hard lines", accent: "220,38,38", color: "#B91C1C", Art: NeverArt },
    { eyebrow: "For your CIO", title: "Compliance, in writing.", body: "FERPA and GDPR aligned by default. Penetration testing in flight, SOC 2 Type II scheduled.", cta: "See the full posture", accent: "124,58,237", color: "#7c3aed", Art: ComplianceArt },
  ];
  return (
    <section className="mf-section alt">
      <div className="mf-container">
        <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 580 }}>
          <span className="mf-eyebrow">Tech & Privacy</span>
          <h2 style={{ marginTop: 14 }}>Privacy is <em style={{ fontStyle: "normal", color: "var(--primary)" }}>the architecture.</em></h2>
          <p>Nia sits between your systems and the model, never moving PII off your tenant. Here's the short version; the full story has its own page.</p>
        </div>

        <div className="tp-grid">
          {cards.map(({ eyebrow, title, body, cta, accent, color, Art }) => (
            <Link key={title} href="/security" className="tp-card">
              <span className="tp-glow" style={{ background: `radial-gradient(circle closest-side, rgba(${accent},0.13), transparent 100%)` }}/>
              <div className="tp-art"><Art/></div>
              <div className="tp-meta">
                <span className="mf-eyebrow" style={{ fontSize: 11, color }}>{eyebrow}</span>
                <h3 style={{ margin: "8px 0 0", fontSize: 22 }}>{title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{body}</p>
                <span className="tp-cta" style={{ color }}>{cta} <ArrowRight s={14}/></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .tp-grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .tp-card{
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          background: #FBFCFE;
          border: 1px solid var(--line);
          border-radius: 18px;
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .tp-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -18px rgba(15,23,42,0.16);
          border-color: #D8DEF0;
        }
        .tp-glow{
          position: absolute;
          width: 380px; height: 380px;
          left: 50%; top: -210px;
          transform: translateX(-50%);
          border-radius: 50%;
          pointer-events: none;
        }
        .tp-art{ position: relative; height: 150px; }
        .tp-svg{ width: 100%; height: 100%; display: block; filter: drop-shadow(0 10px 14px rgba(31,52,128,0.08)); }
        .tp-meta{
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 16px 24px 22px;
          border-top: 1px solid rgba(15,23,42,0.05);
        }
        .tp-meta p{ flex: 1; }
        .tp-cta{
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 16px; font-size: 14px; font-weight: 600;
        }
        .tp-cta svg{ transition: transform 180ms ease; }
        .tp-card:hover .tp-cta svg{ transform: translateX(3px); }
        .tp-bob{ animation: tp-bob 3.4s ease-in-out infinite; }
        @keyframes tp-bob{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-5px); } }
        @media (max-width: 1020px){
          .tp-grid{ grid-template-columns: 1fr; }
          .tp-card{ max-width: 470px; width: 100%; margin: 0 auto; box-sizing: border-box; }
        }
        @media (prefers-reduced-motion: reduce){
          .tp-bob{ animation: none; }
        }
      `}</style>
    </section>
  );
};

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
      <WholeStudent/>
      <TwoExperiences/>
      <Features/>
      <SecArchitecture/>
      <SecCoaches/>
      <Stats/>
      <SecProof/>
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
