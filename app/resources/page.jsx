import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resources · Nia by Streaque",
  description:
    "Field notes and guides for advisors, CIOs, and student-success leaders moving from chatbots to governed coaching. Launching 2026.",
  // Placeholder page (all "coming soon") — keep it out of the index until
  // real content ships, but let crawlers follow the links it does have.
  robots: { index: false, follow: true },
};

const ITEMS = [
  { tag: "Guide", t: "The CIO's short list for AI in higher ed", meta: "Guide · coming soon" },
  { tag: "Webinar", t: "Replacing the early-alert spreadsheet", meta: "Recorded session · coming soon" },
  { tag: "Field note", t: 'What "warm" actually means in a nudge', meta: "Field note · coming soon" },
];

export default function ResourcesPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="resources"/>
      <main id="main">

      <section className="mf-hero" style={{ paddingBottom: 40 }}>
        <div className="mf-hero-bg"/>
        <div className="mf-container mf-hero-inner">
          <div style={{ maxWidth: 760 }}>
            <span className="mf-eyebrow">Resources · launching 2026</span>
            <h1 style={{ marginTop: 18, fontSize: 56, letterSpacing: "-0.03em" }}>
              The <span className="mf-grad-text">orchestration</span> playbook.
            </h1>
            <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 600 }}>
              Field notes for advisors, CIOs, and student-success leaders making the move from
              chatbots to governed coaching. We are putting the first pieces together now.
            </p>
          </div>
        </div>
      </section>

      <section className="mf-section" style={{ paddingTop: 0 }}>
        <div className="mf-container">
          <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {ITEMS.map((r) => (
              <div
                key={r.t}
                style={{
                  display: "flex", flexDirection: "column", background: "white",
                  border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
                  overflow: "hidden", boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ aspectRatio: "16/9", borderBottom: "1px solid var(--line)", background: "var(--bg-alt)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", border: "1px solid var(--line-2)", borderRadius: 999, padding: "5px 11px", background: "white" }}>
                    Coming soon
                  </span>
                </div>
                <div style={{ padding: 22 }}>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", fontWeight: 600 }}>{r.tag}</span>
                  <h3 style={{ marginTop: 10, fontSize: 18, lineHeight: 1.3 }}>{r.t}</h3>
                  <div style={{ marginTop: 14, fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>{r.meta}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: 32, background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h3 style={{ fontSize: 20 }}>Want the field notes first?</h3>
              <p style={{ marginTop: 6, fontSize: 14 }}>
                Tell us a bit about your institution and we will share pilot findings and new resources as they ship, no fluff.
              </p>
            </div>
            <a
              href="mailto:info@streaque.com?subject=Resources%20%26%20field%20notes&body=I'd%20like%20to%20receive%20Nia%20by%20Streaque%20resources%20and%20field%20notes.%20My%20institution%20is%3A"
              className="mf-btn mf-btn-primary"
            >
              Get the field notes
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer/>
    </div>
  );
}
