import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { SecProblem, SecArchitecture, SecCoaches, SecProof } from "@/components/home/CampaignSections";
import { LogoStrip, LeadForm, CookieBanner } from "@/components/home/GapSections";
import HeroPhones from "@/components/home/HeroPhone";
import FrontDoorsShowcase from "@/components/home/FrontDoorsShowcase";
import FeatureCards from "@/components/home/FeatureCards";

const Hero = () => (
  <section className="mf-hero">
    <div className="mf-hero-bg"/>
    <div className="mf-hero-glow" aria-hidden="true"/>
    <div className="mf-container mf-hero-inner">
      <div className="mf-hero-grid">
        <div>
          <span className="mf-eyebrow">Nia · the higher-ed AI platform</span>
          <h1 style={{ marginTop: 18 }}>
            Every signal,<br/>
            <span className="mf-grad-text">every student,</span><br/>
            answered.
          </h1>
          <p style={{ marginTop: 16, fontSize: 20, lineHeight: 1.5, fontWeight: 500, color: "var(--ink-2)", maxWidth: 540 }}>
            Student-success coaching your institution governs end to end — built on your LMS, SIS, and CRM.
          </p>
          <p className="mf-hero-sub">
            Nia spots the student who&apos;s quietly slipping and opens the conversation first —
            warm, evidence-based, and grounded in the data you already trust. Your institution owns every byte.
          </p>
          <div className="mf-hero-actions">
            <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg mf-cta-fx" style={{ textDecoration: "none" }}>
              Book a pilot demo
              <span className="mf-cta-arr" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <ArrowRight/>
                <ArrowRight/>
              </span>
            </Link>
            <Link href="/contact#form-investor" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "var(--ink-3)", textDecoration: "none" }}>
              Investors → request the brief
            </Link>
          </div>
          <div className="mf-hero-meta">
            <div className="mf-hero-meta-stat"><span className="num">1</span><span className="lbl">R1 university pilot, live</span></div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat"><span className="num">5</span><span className="lbl">coaches, one student profile</span></div>
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

          {/* label above the left phone, arrow dropping to its top edge */}
          <div className="mf-anno" style={{ top: -64, left: 0, width: 110, whiteSpace: "normal", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
            <span>Specialized<br/>Agents</span>
            <svg width="44" height="30" viewBox="0 0 44 30" style={{ marginLeft: 30 }}>
              <path d="M6 2 Q 28 4, 36 24"/>
              <path d="M36 24 L 29.5 21 M 36 24 L 37.5 17"/>
            </svg>
          </div>
          {/* label above the right phone, arrow dropping to its top edge */}
          <div className="mf-anno" style={{ top: -58, right: -6, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
            <span>Proactive AI</span>
            <svg width="46" height="34" viewBox="0 0 46 34" style={{ marginRight: 52 }}>
              <path d="M40 2 Q 18 5, 9 28"/>
              <path d="M9 28 L 15.5 24.5 M 9 28 L 9.5 20.5"/>
            </svg>
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
      <FrontDoorsShowcase/>
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


/* Slim mid-page CTA — one clear "book a pilot demo" between Features and the
   five-coaches section, so a conversion point appears before the footer form. */
const MidCTA = () => (
  <section style={{ background: "linear-gradient(120deg, #1b2a6b 0%, #2356c9 100%)", color: "white", padding: "56px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", width: 480, height: 480, right: -160, top: -200, background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 62%)", borderRadius: "50%", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
      <div>
        <h2 style={{ color: "white", fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
          See it on <span style={{ color: "rgba(255,255,255,0.72)" }}>your</span> data.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.82)", margin: "8px 0 0", fontSize: 15 }}>Twenty minutes, your early-alert queue, no slides.</p>
      </div>
      <Link href="/contact#form" className="mf-btn mf-btn-lg" style={{ textDecoration: "none", background: "white", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        Book a pilot demo <ArrowRight/>
      </Link>
    </div>
  </section>
);

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
      <rect x="196" y="100" width="110" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="210" cy="112" r="3.5" fill="#8A90A5"/>
      <text x="220" y="115.5" fontSize="9" fontFamily="var(--font-mono)" fill="#404659">Pen test · planned</text>
    </g>
    <g className="tp-bob" style={{ animationDelay: "1.1s" }}>
      <rect x="36" y="34" width="104" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="50" cy="46" r="3.5" fill="#8A90A5"/>
      <text x="60" y="49.5" fontSize="9" fontFamily="var(--font-mono)" fill="#404659">SOC 2 · planned</text>
    </g>
  </svg>
);

const TechPrivacy = () => {
  const cards = [
    { eyebrow: "The promise", title: "Your data, your tenant.", body: "Encryption everywhere, role-based access, and an audit log behind every model call. The institution owns it all.", cta: "Explore the architecture", accent: "43,179,223", color: "var(--brand-cyan)", Art: PromiseArt },
    { eyebrow: "The hard lines", title: "What we never do.", body: "Never train on your students' data, never move PII off your tenant, never hide a recommendation from review.", cta: "Read the hard lines", accent: "220,38,38", color: "#B91C1C", Art: NeverArt },
    { eyebrow: "For your CIO", title: "Compliance, in writing.", body: "FERPA and GDPR aligned by default. SOC 2 and external penetration testing are on our security roadmap.", cta: "See the full posture", accent: "124,58,237", color: "#7c3aed", Art: ComplianceArt },
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

export default function Home() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="home"/>
      <Hero/>
      <SecProblem/>
      <SecArchitecture/>      {/* inside-out vs outside-in, merged */}
      <TwoExperiences/>
      <Features/>
      <MidCTA/>
      <SecCoaches/>
      {/* Proof — real pilot strip + the illustrative quote */}
      <LogoStrip/>
      <SecProof/>
      <TechPrivacy/>
      <LeadForm/>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}
