"use client";
/* Streaque — homepage gap-fill sections (additive).
   Ported from the Claude Design bundle (midfi-gaps.jsx).
   Exports: LogoStrip (pilot strip), FAQ (mounted on /security), LeadForm,
   CookieBanner. The placeholder Testimonial / CaseStudy / Resources blocks
   were removed in the dead-code cleanup. */
import { useState, useEffect } from "react";
import { ArrowRight as ArrowR, Tick } from "@/components/icons";
import { CONSENT_KEY } from "@/lib/consent";

/* ── 1. Pilot spotlight · NOT MOUNTED: no page imports LogoStrip. If revived, keep the
      pilot numbers in sync with the hero (currently "6–8 weeks of engagement"). ───── */
export const LogoStrip = () => (
  <section style={{ padding: "48px 0 56px", background: "white", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "center" }}>
        <div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "#EEF6FF", border: "1px solid rgba(35,86,201,0.18)", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--primary)", fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }}/>
            Pilot in motion
          </span>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--ink)", marginTop: 12, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
            Live with one of the country's largest research universities.
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 8, lineHeight: 1.5 }}>
            Cohort A launched Spring 2026. Findings publish Q3 2026.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 28, padding: "24px 28px", background: "linear-gradient(135deg, #EEF6FF 0%, #ffffff 60%)", border: "1px solid rgba(35,86,201,0.15)", borderRadius: "var(--radius-lg)" }}>
          <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: 12, background: "white", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-2)" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M12 3 3 8v1h18V8l-9-5zM5 21V10M9 21V10M15 21V10M19 21V10"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.015em" }}>A top-tier R1 research university</div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>R1 research · multi-campus · Canvas + SIS integration</div>
          </div>
          <div style={{ display: "flex", gap: 20, paddingLeft: 24, borderLeft: "1px solid rgba(35,86,201,0.15)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--primary)", letterSpacing: "-0.02em" }}>6–8 wks</div>
              <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--ink-3)", marginTop: 3, textTransform: "uppercase" }}>live pilot</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--primary)", letterSpacing: "-0.02em" }}>Q3 '26</div>
              <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--ink-3)", marginTop: 3, textTransform: "uppercase" }}>findings public</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── 4. Procurement FAQ ───────────────────────────────────────── */
const FAQ_ITEMS = [
  { q: "Where does our student data live?", a: "Inside your tenant. Nia orchestrates models and signals from your VPC; PII never leaves your perimeter, and we never train foundation models on your data." },
  { q: "Which model does Nia use?", a: "Whichever your campus has authorized. We are model-agnostic and route through your existing AI governance. Most pilots run on a campus-approved Anthropic, OpenAI, or Azure tenant." },
  { q: "How long does integration take?", a: "Typical Canvas + SIS pilot is live in 4–6 weeks. We are an Official Canvas Partner and ship pre-built connectors for Banner, Workday, Anthology, and Salesforce." },
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

/* ── 6. Inline lead form ──────────────────────────────────────── */
const fieldLabelStyle = { display: "block", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 6, fontWeight: 500 };
const fieldInputStyle = { width: "100%", padding: "11px 13px", border: "1px solid var(--line-2)", borderRadius: "var(--radius)", fontSize: 14, fontFamily: "var(--font-body)", background: "white", boxSizing: "border-box", color: "var(--ink)" };

const Field = ({ label, name, type = "text", required }) => (
  <div>
    <label style={fieldLabelStyle}>{label}{required && <span style={{ color: "#c14a4a", marginLeft: 4 }}>*</span>}</label>
    <input type={type} name={name} required={required} style={fieldInputStyle}/>
  </div>
);
const Select = ({ label, name, options }) => (
  <div>
    <label style={fieldLabelStyle}>{label}</label>
    <select name={name} style={fieldInputStyle} defaultValue="">
      <option value="" disabled>Choose one</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="mf-section alt" id="walkthrough">
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span className="mf-eyebrow">Book a 20-min walkthrough</span>
            <h2 style={{ marginTop: 14 }}>See your data <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>through Nia.</em></h2>
            <p style={{ marginTop: 16, fontSize: 15 }}>Twenty minutes, screen-share, no slides. We'll walk through a sample early-alert queue with anonymized data from a peer institution.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: 10 }}>
              {[
                "Live early-alert queue, advisor view",
                "Sample student app on a real device",
                "How a single nudge gets governed end-to-end",
                "Q&A with engineering, not sales",
              ].map((it) => (
                <li key={it} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{it}</li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const get = (k) => (fd.get(k) || "").toString();
              const subject = `Walkthrough request from ${get("institution")}`;
              const body = [
                `Name: ${get("first")} ${get("last")}`,
                `Email: ${get("email")}`,
                `Institution: ${get("institution")}`,
                `Role: ${get("role") || "n/a"}`,
                `Enrollment: ${get("size") || "n/a"}`,
                "",
                get("notes"),
              ].join("\n");
              window.location.href = `mailto:info@streaque.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              setSubmitted(true);
            }}
            style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-card)", display: "grid", gap: 14 }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(13,138,90,0.1)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3>Almost done. Hit send on the email we just opened.</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>Your request is pre-filled and addressed to info@streaque.com. Once it's sent, we'll reply with three time slots that match your timezone.</p>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <Field label="First name" name="first" required/>
                  <Field label="Last name" name="last" required/>
                </div>
                <Field label="Work email" name="email" type="email" required/>
                <Field label="Institution" name="institution" required/>
                <Select label="Your role" name="role" options={["Advisor / Coach", "Director of Student Success", "CIO / IT Leadership", "Provost / Academic Affairs", "Faculty", "Other"]}/>
                <Select label="Enrollment size" name="size" options={["< 2,000", "2,000–10,000", "10,000–25,000", "25,000+", "System / multi-campus"]}/>
                <div>
                  <label style={fieldLabelStyle}>What would you like to see?</label>
                  <textarea name="notes" rows="3" style={{ ...fieldInputStyle, resize: "vertical", fontFamily: "var(--font-body)" }} placeholder="Optional: early-alert workflow, advisor co-pilot, integration story, etc."/>
                </div>
                <button type="submit" className="mf-btn mf-btn-primary mf-btn-lg" style={{ marginTop: 6 }}>Request a walkthrough <ArrowR/></button>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-4)", letterSpacing: "0.04em", textAlign: "center", marginTop: 4 }}>
                  We never share your info · unsubscribe anytime
                </div>
              </>
            )}
          </form>
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
