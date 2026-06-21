"use client";
/* Streaque — homepage gap-fill sections (additive).
   Ported from the Claude Design bundle (midfi-gaps.jsx).
   Exports: FAQ (procurement Q&A, mounted on home + /security) and CookieBanner.
   LogoStrip / LeadForm and the placeholder blocks were removed in dead-code cleanup. */
import { useState, useEffect } from "react";
import { CONSENT_KEY } from "@/lib/consent";


/* ── 4. Procurement FAQ ───────────────────────────────────────── */
const FAQ_ITEMS = [
  { q: "Where does our student data live?", a: "Inside your tenant. Nia orchestrates models and signals from your VPC; PII never leaves your perimeter, and we never train foundation models on your data." },
  { q: "Which model does Nia use?", a: "Whichever your campus has authorized. We are model-agnostic and route through your existing AI governance. Most pilots run on a campus-approved Anthropic, OpenAI, or Azure tenant." },
  { q: "How long does integration take?", a: "A typical Canvas + SIS pilot goes live within 4–6 weeks of kickoff. We are an Official Canvas Partner and ship pre-built connectors for Banner, Workday, Anthology, and Salesforce." },
  { q: "Can a student opt out?", a: "Yes. Opt-out is a first-class control surfaced in both the student app and the staff console. Audit logs reflect the change immediately." },
  { q: "Is Nia FERPA-aligned?", a: "Yes. We operate as a school official under FERPA §99.31(a)(1), with role-based access, encryption in transit and at rest, and a full audit trail on every model call. SOC 2 is on our security roadmap, not yet underway. We're glad to share our current controls and the plan." },
  { q: "How is pricing structured?", a: "Per-FTE annual licensing with pilot-pricing for the first year. Implementation, SSO, and three integrations are included. Talk to us for a quote tied to your enrollment band." },
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
            <p style={{ marginTop: 16, fontSize: 15 }}>Short answers here. Long answers (security white paper, DPA, vendor questionnaire) are one email away.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              <a href="mailto:info@streaque.com?subject=Security%20packet" className="mf-btn mf-btn-ghost mf-btn-sm" style={{ textDecoration: "none" }}>Request security packet</a>
              <a href="mailto:info@streaque.com?subject=DPA" className="mf-btn mf-btn-ghost mf-btn-sm" style={{ textDecoration: "none" }}>Request DPA</a>
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


/* ── 7. Cookie consent banner ─────────────────────────────────── */
export const CookieBanner = () => {
  // Render nothing until mounted so server and first client render match,
  // then reveal only if the visitor hasn't already made a choice. The stored
  // value ("accepted" | "rejected") is read via analyticsAllowed() in
  // lib/consent.js — the gate any future analytics must check.
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(CONSENT_KEY)) setShow(true); } catch { setShow(true); }
  }, []);
  if (!show) return null;
  const choose = (choice) => {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch {}
    setShow(false);
  };
  return (
    <div style={{ position: "fixed", bottom: 16, left: 16, right: 16, maxWidth: 540, marginLeft: "auto", background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: 18, display: "flex", alignItems: "center", gap: 14, zIndex: 100, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 220, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
        We use only the essential cookies needed to run this site and remember this choice. No tracking pixels, no ad networks, and no analytics today. If we add privacy-friendly analytics later, your choice here controls it.{" "}
        <a href="/privacy" style={{ color: "var(--primary)", textDecoration: "underline", cursor: "pointer" }}>Privacy &amp; cookies</a>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => choose("rejected")} className="mf-btn mf-btn-ghost mf-btn-sm">Reject</button>
        <button onClick={() => choose("accepted")} className="mf-btn mf-btn-primary mf-btn-sm">Accept</button>
      </div>
    </div>
  );
};
