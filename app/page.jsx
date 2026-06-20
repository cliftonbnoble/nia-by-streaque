import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { SecProblem, SecArchitecture, SecAdvisors, SecCoaches, SecProof } from "@/components/home/CampaignSections";
import { CookieBanner } from "@/components/home/GapSections";
import HeroPhones from "@/components/home/HeroPhone";
import FeatureCards from "@/components/home/FeatureCards";
import RoiCalculator from "@/components/RoiCalculator";

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
            Student success, governed by your institution. Built on your LMS, SIS, and CRM.
          </p>
          <p className="mf-hero-sub">
            Nia spots the student who&apos;s quietly slipping and opens the conversation first: warm,
            evidence-based, grounded in the data you already trust.
          </p>
          <div className="mf-hero-actions">
            <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg mf-cta-fx" style={{ textDecoration: "none" }}>
              Book a pilot demo
              <span className="mf-cta-arr" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <ArrowRight/>
                <ArrowRight/>
              </span>
            </Link>
            <Link href="/investors" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "var(--ink-3)", textDecoration: "none" }}>
              For investors →
            </Link>
          </div>
          {/* ownership lockup — the governance differentiator, set apart from the pilot proof */}
          <div className="mf-hero-own">
            <span className="mf-hero-own-ic" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <span className="mf-hero-own-txt">
              <span className="mf-hero-own-top"><span className="mf-grad-text">100%</span> institution-owned</span>
              <span className="mf-hero-own-sub">Your tenant, your keys. We never train on your data.</span>
            </span>
          </div>
          {/* live pilot lockup — partner anonymized: a top-tier R1 university,
              Bay Area campus. Name/logo withheld pending a signed naming agreement. */}
          <div style={{ marginTop: 26 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "9px 16px", borderRadius: 999, background: "var(--ink)", flexWrap: "wrap" }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: "#3ddc97", boxShadow: "0 0 0 3px rgba(61,220,151,0.22)" }}/>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.92)", whiteSpace: "nowrap" }}>Live university pilot</span>
              <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap" }}>· top-tier R1</span>
            </span>
          </div>
          <div className="mf-hero-meta">
            <div className="mf-hero-meta-stat"><span className="num">16</span><span className="lbl">students in the pilot</span></div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat"><span className="num">6–8</span><span className="lbl">weeks of engagement</span></div>
          </div>
          <p className="mf-hero-note" style={{ marginTop: 13, fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 430 }}>
            Engagement is the early signal. Term-to-term retention results publish in Q3 2026.
          </p>
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
        <p>Tuned to who&apos;s holding the device, never who pays the bill.</p>
      </div>
      <div className="tfd-grid mf-stack-sm">
        <Link href="/how-nia-works#for-students" className="tfd-card">
          <span className="tfd-photo" style={{ backgroundImage: "url(/two-doors/students.jpg)", backgroundPosition: "center 34%" }} aria-hidden="true"/>
          <span className="tfd-veil" aria-hidden="true"/>
          <span className="tfd-body">
            <span className="tfd-aud">For students</span>
            <span className="tfd-h">A coach in the pocket</span>
            <span className="tfd-p">Personalized momentum plans, course-aware tutoring, and quiet nudges that actually land.</span>
          </span>
          <span className="tfd-arrow" aria-hidden="true"><ArrowRight/></span>
        </Link>
        <Link href="/how-nia-works#for-staff" className="tfd-card">
          <span className="tfd-photo" style={{ backgroundImage: "url(/two-doors/staff.jpg)", backgroundPosition: "center 30%" }} aria-hidden="true"/>
          <span className="tfd-veil" aria-hidden="true"/>
          <span className="tfd-body">
            <span className="tfd-aud">For staff</span>
            <span className="tfd-h">A co-pilot at the desk</span>
            <span className="tfd-p">An early-alert queue, live cohort signals, and outreach drafted in your advisor&apos;s voice.</span>
          </span>
          <span className="tfd-arrow" aria-hidden="true"><ArrowRight/></span>
        </Link>
      </div>
    </div>
    <style>{`
      .tfd-grid{ display: grid; grid-template-columns: 1fr 1fr; gap: 22px; max-width: 1040px; margin: 0 auto; }
      .tfd-card{
        position: relative; overflow: hidden; display: block; text-decoration: none;
        min-height: 320px; border-radius: var(--radius-xl);
        /* purple fallback so the card reads as intentional before the photo loads */
        background: linear-gradient(150deg, #25278a 0%, #3a37ad 100%);
        box-shadow: 0 30px 60px -28px rgba(31,52,128,0.42);
        transition: transform 240ms ease, box-shadow 240ms ease;
      }
      .tfd-card:hover{ transform: translateY(-5px); box-shadow: 0 44px 84px -30px rgba(31,52,128,0.5); }
      .tfd-photo{ position: absolute; inset: 0; background-size: cover; background-position: center 28%; transition: transform 700ms cubic-bezier(0.2,0.8,0.2,1); }
      .tfd-card:hover .tfd-photo{ transform: scale(1.045); }
      .tfd-veil{ position: absolute; inset: 0; background: linear-gradient(to top, rgba(18,21,76,0.95) 0%, rgba(33,32,124,0.78) 34%, rgba(58,55,173,0.34) 64%, rgba(58,55,173,0.06) 88%, transparent 100%); }
      .tfd-body{ position: absolute; left: 0; right: 0; bottom: 0; padding: 30px 32px; display: block; }
      .tfd-aud{ display: block; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.78); }
      .tfd-h{ display: block; margin-top: 9px; font-family: var(--font-display); font-weight: 600; font-size: 27px; letter-spacing: -0.025em; color: #fff; }
      .tfd-p{ display: block; margin-top: 9px; max-width: 380px; font-size: 14.5px; line-height: 1.5; color: rgba(255,255,255,0.86); }
      .tfd-arrow{ position: absolute; right: 28px; bottom: 30px; width: 46px; height: 46px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.55); display: inline-flex; align-items: center; justify-content: center; color: #fff; -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px); transition: background 200ms ease, border-color 200ms ease, transform 200ms ease; }
      .tfd-card:hover .tfd-arrow{ background: rgba(255,255,255,0.18); border-color: #fff; transform: translateX(2px); }
      @media (max-width: 760px){ .tfd-grid{ grid-template-columns: 1fr; gap: 18px; } .tfd-card{ min-height: 280px; } .tfd-h{ font-size: 24px; } .tfd-p{ padding-right: 54px; } }
    `}</style>
  </section>
);

/* ── Proof beat — the buyer's "does it actually work?" answered honestly. Leads
   with the engagement signal we have (a leading indicator), never an outcome we
   can't defend yet. Quote slot is ready for a consented pilot quote. ── */
const PilotProof = () => (
  <section className="mf-section" style={{ paddingTop: 60, paddingBottom: 60, position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FFFFFF 0%, #F4F7FD 100%)" }}>
    <div aria-hidden="true" style={{ position: "absolute", width: 760, height: 480, top: -200, right: -160, background: "radial-gradient(ellipse, rgba(102,128,255,0.10), transparent 60%)", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative" }}>
      <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 700 }}>
        <span className="mf-eyebrow">From the pilot</span>
        <h2 style={{ marginTop: 14 }}>Not a concept. A <span className="mf-grad-text">live pilot</span>, right now.</h2>
        <p>Real students using Nia every week. Sustained engagement is the early signal; term-to-term retention results publish after this semester.</p>
      </div>
      <div className="pp-stats">
        <div className="pp-stat">
          <span className="pp-stat-glow" aria-hidden="true"/>
          <span className="pp-n"><span className="mf-grad-text">16</span></span>
          <span className="pp-l">students in the active pilot cohort</span>
        </div>
        <div className="pp-stat">
          <span className="pp-stat-glow" aria-hidden="true"/>
          <span className="pp-n"><span className="mf-grad-text">6–8</span><span className="pp-u"> wks</span></span>
          <span className="pp-l">of sustained engagement, and counting</span>
        </div>
        <div className="pp-stat">
          <span className="pp-stat-glow" aria-hidden="true"/>
          <span className="pp-n">1<span className="pp-u"> · R1</span></span>
          <span className="pp-l">top-tier research university, Bay Area</span>
        </div>
      </div>
      {/* PILOT QUOTE SLOT — the highest-leverage proof you can add. Uncomment and
          fill once you have a consented quote from a real pilot student or advisor:
      <figure className="pp-quote">
        <span className="pp-quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote>It reached out before I even knew I was behind.</blockquote>
        <figcaption>A first-gen sophomore in the pilot</figcaption>
      </figure>
      */}
    </div>
    <style>{`
      .pp-stats{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 34px; max-width: 980px; }
      .pp-stat{ position: relative; overflow: hidden; background: #FBFCFE; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 24px 26px; transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; }
      .pp-stat:hover{ transform: translateY(-3px); box-shadow: 0 22px 44px -22px rgba(15,23,42,0.16); border-color: #D8DEF0; }
      .pp-stat-glow{ position: absolute; width: 240px; height: 240px; left: -70px; top: -150px; border-radius: 50%; background: radial-gradient(circle closest-side, rgba(43,179,223,0.13), transparent 100%); opacity: 0; transition: opacity 240ms ease; pointer-events: none; }
      .pp-stat:hover .pp-stat-glow{ opacity: 1; }
      .pp-n{ position: relative; display: block; font-family: var(--font-display); font-weight: 700; font-size: 38px; letter-spacing: -0.03em; line-height: 1; color: var(--ink); }
      .pp-u{ font-size: 18px; font-weight: 600; color: var(--ink-3); letter-spacing: -0.01em; }
      .pp-l{ position: relative; display: block; margin-top: 12px; font-size: 13.5px; color: var(--ink-3); line-height: 1.5; }
      .pp-quote{ position: relative; margin: 30px 0 0; max-width: 760px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 30px 34px 26px; box-shadow: 0 24px 50px -28px rgba(31,52,128,0.22); }
      .pp-quote-mark{ position: absolute; top: -8px; left: 24px; font-family: var(--font-display); font-weight: 700; font-size: 80px; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; opacity: 0.16; }
      .pp-quote blockquote{ position: relative; margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; line-height: 1.4; letter-spacing: -0.02em; color: var(--ink); }
      .pp-quote figcaption{ margin-top: 14px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-3); }
      @media (max-width: 760px){ .pp-stats{ grid-template-columns: 1fr; } }
    `}</style>
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
  <section style={{ background: "linear-gradient(120deg, #1b2a6b 0%, var(--primary) 100%)", color: "white", padding: "56px 0", position: "relative", overflow: "hidden" }}>
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
    <text x="92" y="46" fontSize="9" fontFamily="var(--font-mono)" fill="var(--ink-3)" textAnchor="middle" letterSpacing="0.5">STUDENT PII</text>
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
      <text x="137" y="67" fontSize="8" fontFamily="var(--font-mono)" fill="var(--primary)" textAnchor="middle">FERPA</text>
      <rect x="162" y="56" width="38" height="16" rx="8" fill="#EEF6FF" stroke="rgba(35,86,201,0.25)"/>
      <text x="181" y="67" fontSize="8" fontFamily="var(--font-mono)" fill="var(--primary)" textAnchor="middle">GDPR</text>
    </g>
    <rect x="118" y="84" width="84" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="118" y="96" width="72" height="5" rx="2.5" fill="#EDF0F8"/>
    <rect x="118" y="108" width="78" height="5" rx="2.5" fill="#EDF0F8"/>
    <g className="tp-bob">
      <rect x="196" y="100" width="110" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="210" cy="112" r="3.5" fill="#8A90A5"/>
      <text x="220" y="115.5" fontSize="9" fontFamily="var(--font-mono)" fill="var(--ink-2)">Pen test · planned</text>
    </g>
    <g className="tp-bob" style={{ animationDelay: "1.1s" }}>
      <rect x="36" y="34" width="104" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="50" cy="46" r="3.5" fill="#8A90A5"/>
      <text x="60" y="49.5" fontSize="9" fontFamily="var(--font-mono)" fill="var(--ink-2)">SOC 2 · planned</text>
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
    <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FCFBF6 0%, #EFE7D4 100%)" }}>
      {/* the hard rule (kept) + a soft cream vignette: white bleeds in from the top
          (brightest toward the top-right), deepening to a richer, darker cream in
          the bottom-left and bottom-right corners */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(72,67,193,0.32) 26%, rgba(72,67,193,0.32) 74%, transparent)" }}/>
      <div aria-hidden="true" style={{ position: "absolute", width: 920, height: 540, top: -250, right: -170, background: "radial-gradient(ellipse at 72% 28%, rgba(255,255,255,0.82), transparent 62%)", pointerEvents: "none" }}/>
      <div aria-hidden="true" style={{ position: "absolute", width: 760, height: 460, top: -230, left: -130, background: "radial-gradient(ellipse, rgba(255,255,255,0.5), transparent 64%)", pointerEvents: "none" }}/>
      <div aria-hidden="true" style={{ position: "absolute", width: 640, height: 540, bottom: -240, left: -190, background: "radial-gradient(ellipse, rgba(182,156,100,0.32), transparent 62%)", pointerEvents: "none" }}/>
      <div aria-hidden="true" style={{ position: "absolute", width: 670, height: 540, bottom: -240, right: -180, background: "radial-gradient(ellipse, rgba(188,162,112,0.30), transparent 62%)", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
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

/* Closing CTA — the single conversion point on the home page. The full lead
   form was removed (it duplicated /contact); everything routes to that one form. */
const ClosingCTA = () => (
  <section style={{ background: "linear-gradient(160deg, #161a5e 0%, #25278a 52%, #3a37ad 100%)", color: "white", padding: "96px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 72%)" }}/>
    <div style={{ position: "absolute", width: 620, height: 620, right: -220, top: -240, background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 62%)", borderRadius: "50%", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative", textAlign: "center", maxWidth: 720 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>See it on your campus</span>
      <h2 style={{ color: "white", margin: "20px 0 0", fontSize: 48, lineHeight: 1.08 }}>
        Ready to see students <span style={{ background: "linear-gradient(135deg,#8fe0f7,#aab0f2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>whole?</span>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: 560, margin: "18px auto 0", fontSize: 17, lineHeight: 1.6 }}>
        The whole student is already in your data, scattered across a dozen systems. Book a pilot demo and see them in one place.
      </p>
      <div style={{ marginTop: 32, display: "flex", gap: 22, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        <Link href="/contact#form" className="mf-btn mf-btn-lg" style={{ textDecoration: "none", background: "white", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 8 }}>
          Book a pilot demo <ArrowRight/>
        </Link>
        <Link href="/investors" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
          For investors →
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="home"/>
      <main id="main">
      <Hero/>
      {/* <PilotProof/> retired — pilot proof now lives in the hero meta. Re-add this line to bring the standalone section back. */}
      <SecProblem/>
      <SecArchitecture/>      {/* inside-out vs outside-in, merged */}
      <TwoExperiences/>
      <Features/>
      <SecAdvisors/>      {/* the advisor moment — "they want their time back" */}
      <MidCTA/>
      <SecCoaches/>
      <RoiCalculator/>
      <TechPrivacy/>
      <SecProof/>      {/* origin story — the human "why," last beat before the CTA */}
      <ClosingCTA/>
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}
