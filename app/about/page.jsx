import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata = {
  title: "About · Nia by Streaque",
  description: "Higher-ed veterans, AI engineers, and student advocates building institution-governed AI for student success.",
};

const TEAM = [
  { name: "Luke", role: "CEO", img: "/team/luke.jpg" },
  { name: "Clifton", role: "CTO", img: "/team/clifton.jpg" },
  { name: "Amit", role: "AI Lead", img: "/team/amit.jpg" },
  { name: "Bhavadeep", role: "Sr. Software Engineer", img: "/team/bhavadeep.jpg" },
  { name: "Sunil", role: "Engineering", img: "/team/sunil.jpg" },
  { name: "Pundlik", role: "DBA", img: "/team/pundlik.jpg" },
];

export default function AboutPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="about"/>

      {/* hero */}
      <section className="mf-hero" style={{ paddingBottom: 48 }}>
        <div className="mf-hero-bg"/>
        <div className="mf-container mf-hero-inner">
          <div style={{ maxWidth: 760 }}>
            <span className="mf-eyebrow">About Streaque</span>
            <h1 style={{ marginTop: 18, fontSize: 56, letterSpacing: "-0.03em" }}>
              Built by people who&apos;ve sat on <span className="mf-grad-text">both sides of the desk.</span>
            </h1>
            <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 620 }}>
              Higher-ed veterans, ML engineers, and student advocates — registrars, advisors,
              and the students they serve — building the AI layer institutions actually own.
            </p>
          </div>
        </div>
      </section>

      {/* mission / origin */}
      <section className="mf-section" style={{ paddingTop: 0 }}>
        <div className="mf-container" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}>
            We built Nia for the students least likely to ask for help. Then a cohort of graduate
            students studying student success tested it and pushed back, nearly in unison:
            <em> &ldquo;Why are you building this only for marginalized students? <strong>All</strong> students need this.&rdquo;</em>
          </p>
          <p style={{ marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
            We designed for the margin <span className="mf-grad-text">and found the mainstream.</span>
          </p>
        </div>
      </section>

      {/* team */}
      <section className="mf-section alt" id="team">
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">The team</span>
            <h2 style={{ marginTop: 14 }}>Higher-ed veterans, <span className="mf-grad-text">AI engineers,</span> and student advocates.</h2>
          </div>
          <div className="mf-team-grid">
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

      {/* CTA */}
      <section className="mf-section" style={{ textAlign: "center" }}>
        <div className="mf-container" style={{ maxWidth: 640 }}>
          <h2>Want to see it on your campus?</h2>
          <p style={{ marginTop: 12 }}>Book a pilot demo — 20 minutes, your data, no slides.</p>
          <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg" style={{ marginTop: 24, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Book a pilot demo <ArrowRight/>
          </Link>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
