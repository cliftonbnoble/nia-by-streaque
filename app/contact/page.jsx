import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Dot } from "@/components/icons";
import ContactForm from "./ContactForm";
import DirectLines from "./DirectLines";

const Hero = () => (
  <section className="mf-hero" style={{ paddingBottom: 80 }}>
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="mf-eyebrow">Contact</span>
          <h1 style={{ marginTop: 18, fontSize: 60, lineHeight: 1.05 }}>
            Let's transform <span className="mf-grad-text">student success</span> together.
          </h1>
          <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 520 }}>
            Whether you're piloting Nia at your institution, exploring a partnership, or just curious how
            it works in practice — we'd love to hear from you. Real responses from real people, usually within one business day.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#form" className="mf-btn mf-btn-primary" style={{ textDecoration: "none" }}>
              Start a pilot conversation <ArrowRight/>
            </a>
            <a href="#founders" className="mf-btn mf-btn-ghost" style={{ textDecoration: "none" }}>
              Talk to founders
            </a>
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap", fontSize: 13, color: "var(--ink-3)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Dot color="var(--success)"/> Replies within 1 business day
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Dot color="var(--brand-cyan)"/> No sales scripts — just answers
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
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>Pilot inquiry · 14:32</div>
            </div>
          </div>

          <div style={{
            position: "absolute", bottom: 32, right: -28, background: "white", borderRadius: 12, padding: "14px 18px",
            boxShadow: "0 16px 36px -8px rgba(15, 23, 42, 0.2)", minWidth: 240,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <Dot color="var(--success)"/> Replied · 16:08
            </div>
            <div style={{ fontSize: 14, marginTop: 6, lineHeight: 1.4 }}>"Got it — Luke will be in touch tomorrow with a Calendar invite."</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Paths = () => {
  const paths = [
    { eyebrow: "For institutions", title: "Start a pilot", body: "Bring Nia to your campus. We'll scope a pilot tailored to your LMS, SIS, and student-success workflows.", cta: "Talk to our team", href: "#form", icon: "pilot", accent: "var(--brand-cyan)" },
    { eyebrow: "For founders", title: "Talk directly", body: "Skip the form — book time with Luke or Clifton. Best for higher-ed leaders, peer founders, or partnership conversations.", cta: "Book with founders", href: "#founders", icon: "founders", accent: "var(--brand-blue)" },
    { eyebrow: "For investors", title: "Investor brief", body: "Request our latest deck, ARR/runway snapshot, and pilot-pipeline overview. We send a fresh brief every Friday.", cta: "Request brief", href: "mailto:info@streaque.com?subject=Investor%20brief%20request", icon: "investor", accent: "#7c3aed" },
  ];

  const Icon = ({ kind, color }) => {
    if (kind === "pilot") return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="9" width="24" height="16" rx="3" stroke={color} strokeWidth="1.6"/>
        <path d="M4 14H28" stroke={color} strokeWidth="1.6"/>
        <circle cx="9" cy="11.5" r="0.8" fill={color}/>
        <circle cx="11.5" cy="11.5" r="0.8" fill={color}/>
        <path d="M9 18H15M9 21H19" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
    if (kind === "founders") return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="13" r="3.5" stroke={color} strokeWidth="1.6"/>
        <circle cx="21" cy="13" r="3.5" stroke={color} strokeWidth="1.6"/>
        <path d="M5 24C5 21 7.5 19 11 19C14.5 19 17 21 17 24" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M15 24C15 21 17.5 19 21 19C24.5 19 27 21 27 24" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 5L19 11L26 12L21 17L22 24L16 21L10 24L11 17L6 12L13 11L16 5Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    );
  };

  return (
    <section style={{ padding: "80px 0", background: "var(--bg-alt)" }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 48 }}>
          <span className="mf-eyebrow">Three ways in</span>
          <h2 style={{ marginTop: 14 }}>Pick the conversation <span className="mf-grad-text">you need.</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {paths.map((p) => (
            <a key={p.title} href={p.href} className="contact-path-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{
                background: "white", border: "1px solid var(--line)", borderRadius: 16,
                padding: 32, height: "100%", display: "flex", flexDirection: "column", gap: 16,
                position: "relative", transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
              }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${p.accent}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon kind={p.icon} color={p.accent}/>
                </div>
                <div>
                  <div className="mf-eyebrow" style={{ fontSize: 11, color: p.accent }}>{p.eyebrow}</div>
                  <h3 style={{ marginTop: 8, fontSize: 24 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, flex: 1 }}>{p.body}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: p.accent, fontSize: 14, fontWeight: 600, marginTop: 4 }}>
                  {p.cta} <ArrowRight s={14}/>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .contact-path-card:hover > div {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -16px rgba(15, 23, 42, 0.14);
        }
      `}</style>
    </section>
  );
};

const Founders = () => {
  const founders = [
    { name: "Luke", role: "CEO & Co-founder", img: "/team-luke.jpg",
      blurb: "Higher-ed strategy, partnerships, pilots. Best for institutional leaders, RFPs, and partnership conversations.",
      email: "info@streaque.com", phone: "(707) 742-3090" },
    { name: "Clifton", role: "CTO & Co-founder", img: "/team-clifton.jpg",
      blurb: "Technology, integrations, security. Best for IT leadership, security questions, and architecture deep-dives.",
      email: "cliftonbnoble@gmail.com", phone: null },
  ];
  return (
    <section id="founders" style={{ padding: "120px 0", background: "var(--bg-alt)" }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 56 }}>
          <span className="mf-eyebrow">Talk to founders</span>
          <h2 style={{ marginTop: 14 }}>Skip the form. <span className="mf-grad-text">Talk directly.</span></h2>
          <p>For peer founders, institutional leaders, and partnership conversations — reach us directly.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {founders.map((f) => (
            <div key={f.name} style={{
              background: "white", borderRadius: 16, padding: 32, border: "1px solid var(--line)",
              display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, alignItems: "start",
            }}>
              <div style={{ width: 120, height: 120, borderRadius: 16, overflow: "hidden", background: "var(--bg-alt)" }}>
                <img src={f.img} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-display)" }}>{f.name}</div>
                <div className="mf-eyebrow" style={{ marginTop: 4, fontSize: 11 }}>{f.role}</div>
                <p style={{ marginTop: 14, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{f.blurb}</p>
                <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
                  <a href={`mailto:${f.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--ink)", textDecoration: "none", fontWeight: 500 }}>
                    <img src="/mail-nia-icon.png" style={{ width: 16, height: 12, opacity: 0.7 }} alt=""/>
                    {f.email}
                  </a>
                  {f.phone && (
                    <a href={`tel:${f.phone.replace(/\D/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--ink)", textDecoration: "none", fontWeight: 500 }}>
                      <img src="/call-nia-icon.png" style={{ width: 14, height: 14, opacity: 0.7 }} alt=""/>
                      {f.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast will you respond?", a: "Within one business day, from a real person on our team. Most replies come same-day." },
    { q: "What happens after I submit the form?", a: "A founder or success lead will email you to schedule a 30-minute discovery call. No demos before we understand your goals." },
    { q: "Do I need to commit to anything?", a: "No. The first call is purely exploratory — we learn about your institution, you see Nia in action, and we both decide if there's a fit." },
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
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

export default function Contact() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="contact"/>
      <Hero/>
      <Paths/>
      <ContactForm/>
      <Founders/>
      <DirectLines/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
