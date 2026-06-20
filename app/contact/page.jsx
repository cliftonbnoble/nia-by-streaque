import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Dot } from "@/components/icons";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact · Streaque",
  description:
    "Start a pilot conversation or request the investor brief. Real responses from real people, within one business day.",
};

const Hero = () => (
  <section className="mf-hero" style={{ paddingBottom: 80 }}>
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="mf-eyebrow">Contact</span>
          <h1 style={{ marginTop: 18, fontSize: 60, lineHeight: 1.05 }}>
            Let's transform <span className="mf-grad-text">student success</span> together.
          </h1>
          <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 520 }}>
            Whether you're piloting Nia at your institution, exploring a partnership, or just curious how
            it works in practice, we'd love to hear from you. Real responses from real people, usually within one business day.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#form" className="mf-btn mf-btn-primary" style={{ textDecoration: "none" }}>
              Start a pilot conversation <ArrowRight/>
            </a>
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap", fontSize: 13, color: "var(--ink-3)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Dot color="var(--success)"/> Replies within 1 business day
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Dot color="var(--brand-cyan)"/> No sales scripts, just answers
            </span>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 520 }}>
          <div style={{
            position: "relative", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 30px 80px -20px rgba(15, 23, 42, 0.25), 0 10px 24px -8px rgba(15, 23, 42, 0.12)",
            aspectRatio: "600/595",
          }}>
            <img src="/nia-contact.jpg" alt="Talking with Nia"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(140deg, rgba(43, 179, 223, 0.08) 0%, transparent 40%, rgba(56, 65, 177, 0.18) 100%)" }}/>
          </div>

          <div style={{
            position: "absolute", top: 32, left: -28, background: "white", borderRadius: 12, padding: "14px 18px",
            boxShadow: "0 16px 36px -8px rgba(15, 23, 42, 0.2)",
            display: "flex", alignItems: "center", gap: 12, minWidth: 220,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--primary-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/call-nia-icon.png" alt="" style={{ width: 22, height: 22, opacity: 0.9 }}/>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Incoming</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>Pilot inquiry · 2:32 PM</div>
            </div>
          </div>

          <div style={{
            position: "absolute", bottom: 32, right: -28, background: "white", borderRadius: 12, padding: "14px 18px",
            boxShadow: "0 16px 36px -8px rgba(15, 23, 42, 0.2)", minWidth: 240,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <Dot color="var(--success)"/> Replied · 4:08 PM
            </div>
            <div style={{ fontSize: 14, marginTop: 6, lineHeight: 1.4 }}>"Got it. A founder will be in touch tomorrow with a Calendar invite."</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Paths — illustrated cards in the security-page language, kept light ── */

const PilotArt = () => (
  <svg viewBox="0 0 320 170" className="cp-svg">
    <defs>
      <linearGradient id="cp-py" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2BB3DF"/><stop offset="1" stopColor="#3841B1"/></linearGradient>
      <linearGradient id="cpn0" x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id="cpn1" x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
    {[["LMS", 68], ["SIS", 138], ["CRM", 208]].map(([t, x]) => (
      <g key={t}>
        <rect x={x} y="26" width="44" height="28" rx="8" fill="white" stroke="#E3E8F4"/>
        <text x={x + 22} y="44" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--ink-3)" letterSpacing="0.5">{t}</text>
      </g>
    ))}
    <path d="M90 54 C 90 86, 140 76, 152 96" fill="none" stroke="#D8DEF0" strokeWidth="1.5"/>
    <path d="M160 54 V 90" fill="none" stroke="#D8DEF0" strokeWidth="1.5"/>
    <path d="M230 54 C 230 86, 180 76, 168 96" fill="none" stroke="#D8DEF0" strokeWidth="1.5"/>
    <circle cx="160" cy="118" r="22" fill="white" stroke="#E3E8F4"/>
    <g transform="translate(143, 101) scale(0.81)">
      <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill="url(#cpn0)"/>
      <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill="url(#cpn1)"/>
      <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
      <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    </g>
    <g className="cp-bob">
      <rect x="198" y="106" width="100" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="212" cy="118" r="3.5" fill="#2fb380"/>
      <text x="222" y="121.5" fontSize="9.5" fontFamily="var(--font-mono)" fill="var(--ink-2)">Cohort A live</text>
    </g>
  </svg>
);

const FoundersArt = () => (
  <svg viewBox="0 0 320 170" className="cp-svg">
    <defs>
      <linearGradient id="cp-fd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2BB3DF"/><stop offset="1" stopColor="#3841B1"/></linearGradient>
      <clipPath id="cp-av1"><circle cx="78" cy="48" r="15"/></clipPath>
      <clipPath id="cp-av2"><circle cx="242" cy="110" r="15"/></clipPath>
    </defs>
    <image href="/team/luke.jpg" x="63" y="33" width="30" height="30" clipPath="url(#cp-av1)" preserveAspectRatio="xMidYMid slice"/>
    <circle cx="78" cy="48" r="15" fill="none" stroke="#E3E8F4"/>
    <rect x="102" y="32" width="116" height="34" rx="12" fill="white" stroke="#E3E8F4"/>
    <rect x="114" y="43" width="78" height="4.5" rx="2.25" fill="#D9DEEC"/>
    <rect x="114" y="52" width="52" height="4.5" rx="2.25" fill="#EDF0F8"/>
    <image href="/team/clifton.jpg" x="227" y="95" width="30" height="30" clipPath="url(#cp-av2)" preserveAspectRatio="xMidYMid slice"/>
    <circle cx="242" cy="110" r="15" fill="none" stroke="#E3E8F4"/>
    <rect x="102" y="94" width="116" height="34" rx="12" fill="url(#cp-fd)"/>
    <rect x="114" y="105" width="70" height="4.5" rx="2.25" fill="rgba(255,255,255,0.85)"/>
    <rect x="114" y="114" width="44" height="4.5" rx="2.25" fill="rgba(255,255,255,0.5)"/>
    <g>
      <circle className="cp-dot" cx="86" cy="148" r="3" fill="#9CA6C2"/>
      <circle className="cp-dot" cx="97" cy="148" r="3" fill="#9CA6C2" style={{ animationDelay: "0.2s" }}/>
      <circle className="cp-dot" cx="108" cy="148" r="3" fill="#9CA6C2" style={{ animationDelay: "0.4s" }}/>
    </g>
  </svg>
);

const InvestorArt = () => (
  <svg viewBox="0 0 320 170" className="cp-svg">
    <defs>
      <linearGradient id="cp-inv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(124,58,237,0.25)"/><stop offset="1" stopColor="rgba(124,58,237,0)"/></linearGradient>
    </defs>
    <rect x="92" y="22" width="136" height="126" rx="12" fill="white" stroke="#E3E8F4"/>
    <rect x="106" y="36" width="56" height="6" rx="3" fill="#D9DEEC"/>
    <rect x="106" y="48" width="36" height="5" rx="2.5" fill="#EDF0F8"/>
    <line x1="106" y1="124" x2="214" y2="124" stroke="#E9EBF1" strokeWidth="1" strokeDasharray="3 4"/>
    <path d="M106 116 C 124 112, 134 100, 150 98 S 180 86, 196 72 L 214 62 L 214 124 L 106 124 Z" fill="url(#cp-inv)"/>
    <path d="M106 116 C 124 112, 134 100, 150 98 S 180 86, 196 72 L 214 62" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="214" cy="62" r="4" fill="#7c3aed" stroke="white" strokeWidth="1.8"/>
    <g className="cp-bob">
      <rect x="196" y="128" width="96" height="24" rx="12" fill="white" stroke="#E3E8F4"/>
      <circle cx="210" cy="140" r="3.5" fill="#7c3aed"/>
      <text x="220" y="144" fontSize="10" fontFamily="var(--font-mono)" fill="var(--ink-2)">Sent Fridays</text>
    </g>
  </svg>
);

const Paths = () => {
  const paths = [
    { eyebrow: "For institutions", title: "Start a pilot", body: "Bring Nia to your campus. We'll scope a pilot tailored to your LMS, SIS, and student-success workflows.", cta: "Talk to our team", href: "#form", accent: "43,179,223", color: "var(--brand-cyan)", Art: PilotArt },
    { eyebrow: "For founders", title: "Talk directly", body: "Book time with Luke or Clifton. Best for higher-ed leaders, peer founders, or partnership conversations.", cta: "Message the founders", href: "#form-founders", accent: "56,65,177", color: "var(--brand-blue)", Art: FoundersArt },
    { eyebrow: "For investors", title: "Investor brief", body: "Request our latest deck, traction summary, and pilot-pipeline overview. We'll send the current brief on request.", cta: "Request brief", href: "#form-investor", accent: "124,58,237", color: "#7c3aed", Art: InvestorArt },
  ];

  return (
    <section style={{ padding: "80px 0", background: "var(--bg-alt)" }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 48 }}>
          <span className="mf-eyebrow">Three ways in</span>
          <h2 style={{ marginTop: 14 }}>Pick the conversation <span className="mf-grad-text">you need.</span></h2>
        </div>

        <div className="cp-grid">
          {paths.map(({ eyebrow, title, body, cta, href, accent, color, Art }) => (
            <a key={title} href={href} className="cp-card">
              <span className="cp-glow" style={{ background: `radial-gradient(circle closest-side, rgba(${accent},0.13), transparent 100%)` }}/>
              <div className="cp-art"><Art/></div>
              <div className="cp-meta">
                <span className="mf-eyebrow" style={{ fontSize: 11, color }}>{eyebrow}</span>
                <h3 style={{ margin: "8px 0 0", fontSize: 24 }}>{title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{body}</p>
                <span className="cp-cta" style={{ color }}>{cta} <ArrowRight s={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .cp-grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cp-card{
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
        .cp-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -18px rgba(15,23,42,0.16);
          border-color: #D8DEF0;
        }
        .cp-glow{
          position: absolute;
          width: 380px; height: 380px;
          left: 50%; top: -210px;
          transform: translateX(-50%);
          border-radius: 50%;
          pointer-events: none;
        }
        .cp-art{ position: relative; height: 168px; }
        .cp-svg{ width: 100%; height: 100%; display: block; filter: drop-shadow(0 10px 14px rgba(31,52,128,0.08)); }
        .cp-meta{
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 18px 26px 24px;
          border-top: 1px solid rgba(15,23,42,0.05);
        }
        .cp-meta p{ flex: 1; }
        .cp-cta{
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 16px; font-size: 14px; font-weight: 600;
        }
        .cp-cta svg{ transition: transform 180ms ease; }
        .cp-card:hover .cp-cta svg{ transform: translateX(3px); }
        .cp-bob{ animation: cp-bob 3.4s ease-in-out infinite; }
        @keyframes cp-bob{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-5px); } }
        .cp-dot{ animation: cp-type 1.3s ease-in-out infinite; }
        @keyframes cp-type{ 0%,100%{ opacity: 0.35; } 50%{ opacity: 1; } }
        @media (max-width: 1020px){
          .cp-grid{ grid-template-columns: 1fr; }
          .cp-card{ max-width: 470px; width: 100%; margin: 0 auto; }
        }
        @media (prefers-reduced-motion: reduce){
          .cp-bob, .cp-dot{ animation: none; }
        }
      `}</style>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast will you respond?", a: "Within one business day, from a real person on our team. Most replies come same-day." },
    { q: "What happens after I submit the form?", a: "A founder or success lead will email you to schedule a 30-minute discovery call. No demos before we understand your goals." },
    { q: "Do I need to commit to anything?", a: "No. The first call is purely exploratory. We learn about your institution, you see Nia in action, and we both decide if there's a fit." },
    { q: "Can I try Nia myself first?", a: "Yes. The student app is live and we're happy to set you up with a sandbox account before any institutional conversation." },
    { q: "How do you handle student data?", a: "FERPA-aligned by design. All institutional data stays on your tenant, never trains models, and is governed by your IT policies." },
    { q: "Are you fundraising?", a: "We're always open to talking with mission-aligned investors. Email info@streaque.com for our current brief." },
  ];
  return (
    <section style={{ padding: "120px 0", background: "var(--bg-alt)" }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 56 }}>
          <span className="mf-eyebrow">Common questions</span>
          <h2 style={{ marginTop: 14 }}>What to expect <span className="mf-grad-text">when you reach out.</span></h2>
        </div>
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
              <div style={{ fontSize: 17, fontWeight: 600, fontFamily: "var(--font-display)" }}>{f.q}</div>
              <p style={{ marginTop: 10, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── The team — moved here from the former /about page ── */
const TEAM = [
  { name: "Luke", role: "CEO", img: "/team/luke.jpg" },
  { name: "Clifton", role: "CTO", img: "/team/clifton.jpg" },
  { name: "Amit", role: "AI Lead", img: "/team/amit.jpg" },
  { name: "Bhavadeep", role: "Sr. Software Engineer", img: "/team/bhavadeep.jpg" },
  { name: "Sunil", role: "Engineering", img: "/team/sunil.jpg" },
  { name: "Pundlik", role: "DBA", img: "/team/pundlik.jpg" },
];

const Team = () => (
  <section className="mf-section" id="team">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
        <span className="mf-eyebrow">The team</span>
        <h2 style={{ marginTop: 14 }}>Built by people who&apos;ve sat on <span className="mf-grad-text">both sides of the desk.</span></h2>
        <p style={{ marginTop: 14 }}>
          Higher-ed veterans, ML engineers, and student advocates: registrars, advisors, and the
          students they serve, building the AI layer institutions actually own.
        </p>
      </div>
      <div className="mf-team-grid" style={{ marginTop: 40 }}>
        {TEAM.map((m) => (
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

export default function Contact() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="contact"/>
      <main id="main">
      <Hero/>
      <Paths/>
      <ContactForm/>
      <Team/>
      </main>
      <Footer/>
    </div>
  );
}
