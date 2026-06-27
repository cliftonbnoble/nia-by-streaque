"use client";
/* Section III — strategic Q&A. The two questions every buyer asks, answered
   straight, in the site's existing FAQ accordion language. */
import { useState } from "react";
import { ArrowRight } from "@/components/icons";

const QA = [
  {
    q: "Will this replace our advisors?",
    a: "No, and it's built not to. Nia's Care Routing handles the Tier-1 administrative friction (holds, forms, deadlines, the same five questions) autonomously, and escalates only the high-stakes moments, like a mental-health disclosure or a complex aid appeal, to your team with the student's full history already summarized. Your advisors spend their capacity on the work only people can do.",
  },
  {
    q: "How do you keep our institutional data safe?",
    a: "Cross-tenant data movement is blocked by design. Nia runs in a per-tenant, isolated instance with FERPA-aligned handling and AES-256-GCM encryption at rest and in transit. Your data trains nothing beyond your walls, and your administrators control, field by field, exactly what Nia is allowed to ingest.",
  },
  {
    q: "Isn't this just another ChatGPT wrapper?",
    a: "No. For anything factual, Nia bypasses the raw model and runs a governed query against real rows in your systems, returning source-linked answers instead of plausible-sounding guesses. The model handles language; your institutional data engine handles truth.",
  },
  {
    q: "How fast can we go live?",
    a: "Nia connects to the systems you already run, like Canvas, your SIS, Workday, and Handshake, and stands up in your own governed instance. Most of the lift is configuration and tone calibration, not a multi-year integration. Book a pilot and we'll scope it against your stack.",
  },
];

export default function Qa() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mf-section">
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 96 }}>
            <span className="mf-eyebrow">Straight answers</span>
            <h2 style={{ marginTop: 14 }}>The four questions <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>that decide it.</em></h2>
            <p style={{ marginTop: 16, fontSize: 15 }}>Everything else is detail. These are the ones that come up in every room, so here they are, without the hedging.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              <a href="/contact#form" className="mf-btn mf-btn-primary mf-btn-sm" style={{ textDecoration: "none" }}>Book a pilot demo <ArrowRight s={12}/></a>
              <a href="/contact#form-security" className="mf-btn mf-btn-ghost mf-btn-sm" style={{ textDecoration: "none" }}>Request security packet</a>
            </div>
          </div>
          <div>
            {QA.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q} style={{ borderTop: i === 0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    id={`qa-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`qa-panel-${i}`}
                    style={{ width: "100%", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.015em" }}
                  >
                    <span>{it.q}</span>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid var(--line-2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0)", color: "var(--ink-3)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  <div id={`qa-panel-${i}`} role="region" aria-labelledby={`qa-q-${i}`} hidden={!isOpen} style={{ paddingBottom: 22, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 640 }}>
                    {it.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
