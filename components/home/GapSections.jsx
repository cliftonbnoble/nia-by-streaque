"use client";
/* Streaque — homepage gap-fill sections (additive).
   Ported from the Claude Design bundle (midfi-gaps.jsx).
   Exports: FAQ (procurement Q&A, mounted on /security).
   LogoStrip / LeadForm and the placeholder blocks were removed in dead-code cleanup. */
import { useState } from "react";


/* ── 4. Procurement FAQ ───────────────────────────────────────── */
const FAQ_ITEMS = [
  { q: "Where does our student data live?", a: "In Nia's managed cloud environment, isolated per institution. Database row-level security plus per-institution encryption keys keep your campus's data separate from every other institution's; PII is encrypted, and we never train foundation models on it." },
  { q: "Which model does Nia use?", a: "By default, Nia runs on Google Gemini through Vertex AI, chosen for its GDPR-compliant data handling and strong PII protection. But Nia is model-agnostic: if your institution prefers OpenAI, Anthropic, or another provider, we can route through it. Either way, student data is sent under no-training terms, so neither we nor the model provider trains on it." },
  { q: "Do you complete a HECVAT?", a: "Not yet — we're early, and we don't have a published HECVAT today. We'll complete your institution's security questionnaire, HECVAT or your own, on request, and we're glad to walk through our current controls and roadmap." },
  { q: "Is Nia FERPA-aligned?", a: "Yes. We operate as a school official under FERPA §99.31(a)(1), with role-based access, encryption in transit and at rest, and a full audit trail on every model call. SOC 2 is on our security roadmap, not yet underway. We're glad to share our current controls and the plan." },
  { q: "How long does integration take?", a: "A typical Canvas + SIS pilot goes live within 4–6 weeks of kickoff. We are an Official Canvas Partner and ship pre-built connectors for Banner, Workday, Anthology, and Salesforce." },
  { q: "Can a student opt out?", a: "Yes. Opt-out is a first-class control surfaced in both the student app and the staff console, and audit logs reflect the change immediately. At the end of an engagement, or on request, we return or delete your data per your institution's instructions and our agreement." },
  { q: "What's your accessibility posture?", a: "We aim to meet WCAG 2.1 AA across the Nia website and product, and we treat accessibility as part of how we build rather than a one-time certification. See our accessibility statement for the details, and we're glad to discuss specific requirements." },
];

export const FAQ = ({ alt = true }) => {
  const [open, setOpen] = useState(0);
  return (
    <section className={`mf-section${alt ? " alt" : ""}`}>
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 24 }}>
            <span className="mf-eyebrow">Procurement-ready</span>
            <h2 style={{ marginTop: 14 }}>The questions <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>your CIO will ask.</em></h2>
            <p style={{ marginTop: 16, fontSize: 15 }}>Short answers here. Long answers (security white paper, DPA, vendor questionnaire) are one request away.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              <a href="/contact#form-security" className="mf-btn mf-btn-primary mf-btn-sm" style={{ textDecoration: "none" }}>Request security packet</a>
            </div>
          </div>
          <div>
            {FAQ_ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q} style={{ borderTop: i === 0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`gap-faq-${i}`}
                    style={{ width: "100%", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.015em" }}
                  >
                    <span>{it.q}</span>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid var(--line-2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0)", color: "var(--ink-3)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`gap-faq-${i}`} role="region" style={{ paddingBottom: 22, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 640 }}>
                      {it.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
