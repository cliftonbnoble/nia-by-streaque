"use client";
/* Closing section of the security page — a direct line to the CTO.
   Replaces the old "responsible disclosure" block. A short contact form
   that opens a pre-filled email straight to clifton@streaque.com. */
import { useState } from "react";

const CTO_EMAIL = "clifton@streaque.com";

export default function SecurityContact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Security question from ${data.name || "Streaque"}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:${CTO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = {
    width: "100%", padding: "11px 13px", boxSizing: "border-box",
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 10, color: "white", fontSize: 14, fontFamily: "var(--font-body)",
    outline: "none",
  };
  const label = {
    fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block",
  };

  return (
    <section style={{ background: "var(--ink)", color: "white", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }}/>
      <div style={{ position: "absolute", width: 560, height: 560, right: -220, top: -260, background: "radial-gradient(circle, rgba(43,179,223,0.14), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>Direct line</span>
            <h2 style={{ color: "white", marginTop: 16, fontSize: 40, lineHeight: 1.1 }}>Still have questions? <span className="mf-grad-text" style={{ fontStyle: "italic" }}>Ask the CTO.</span></h2>
            <p style={{ color: "rgba(255,255,255,0.78)", marginTop: 18, fontSize: 16, lineHeight: 1.65, maxWidth: 520 }}>
              Security reviews, questionnaires, architecture deep-dives, sent straight to the person who built the platform, not a shared inbox. Expect a reply within one business day.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 26 }}>
              <img src="/team/clifton.jpg" alt="" width="44" height="44" style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.15)" }}/>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "white" }}>Clifton Noble · <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>CTO</span></div>
                <a href={`mailto:${CTO_EMAIL}`} style={{ fontSize: 13.5, color: "#8fe0f7", textDecoration: "none" }}>{CTO_EMAIL}</a>
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: 28 }}>
            {!sent ? (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={label}>Name</label>
                    <input required style={field} value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name"/>
                  </div>
                  <div>
                    <label style={label}>Work email</label>
                    <input required type="email" style={field} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@university.edu"/>
                  </div>
                </div>
                <div>
                  <label style={label}>Your question</label>
                  <textarea required rows={4} style={{ ...field, resize: "vertical", minHeight: 96 }} value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="Ask anything about our architecture, controls, or compliance roadmap."/>
                </div>
                <button type="submit" className="mf-btn mf-btn-primary mf-btn-lg" style={{ border: "none", cursor: "pointer", fontFamily: "inherit", justifyContent: "center" }}>
                  Send to the CTO
                </button>
                <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", margin: 0, textAlign: "center" }}>Opens a pre-filled email to {CTO_EMAIL}.</p>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "12px 4px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(43,179,223,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#8fe0f7" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 style={{ color: "white", marginTop: 16, fontSize: 22 }}>Almost done, {data.name.split(" ")[0] || "thanks"}.</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 10, fontSize: 14.5, lineHeight: 1.55 }}>
                  We've opened a pre-filled email to Clifton. Just hit send. You&apos;ll hear back within one business day.
                </p>
                <button onClick={() => { setSent(false); setData({ name: "", email: "", message: "" }); }} style={{ marginTop: 18, background: "transparent", border: "none", color: "#8fe0f7", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Send another →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
