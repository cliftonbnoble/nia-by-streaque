import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* Shared shell for the legal/policy pages (Privacy, Terms). Generic,
   readable boilerplate — content lives in each page's data array. */
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="legal"/>
      <main id="main">
      <section className="mf-section">
        <div className="mf-container" style={{ maxWidth: 800 }}>
          <span className="mf-eyebrow">Legal</span>
          <h1 style={{ marginTop: 14, fontSize: 46, letterSpacing: "-0.03em" }}>{title}</h1>
          <p style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.04em", color: "var(--ink-3)" }}>{updated}</p>
          {intro && <p style={{ marginTop: 26, fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>{intro}</p>}
          <div style={{ marginTop: 44, display: "grid", gap: 38 }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ fontSize: 22, letterSpacing: "-0.02em" }}>{`${i + 1}. ${s.h}`}</h2>
                {s.body.map((p, j) => (
                  <p key={j} style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>{p}</p>
                ))}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 14, color: "var(--ink-3)", lineHeight: 1.6 }}>
            Questions about this page? Email <a href="mailto:info@streaque.com" style={{ color: "var(--primary)", textDecoration: "none" }}>info@streaque.com</a>.
          </p>
        </div>
      </section>
      </main>
      <Footer/>
    </div>
  );
}
