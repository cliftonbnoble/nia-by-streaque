"use client";
import { useState } from "react";
import { ArrowRight, Check } from "@/components/icons";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "", email: "", institution: "", role: "", students: "", interest: "pilot", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Pilot inquiry from ${data.institution || data.name}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Institution: ${data.institution}`,
      `Role: ${data.role}`,
      `Students served: ${data.students || "n/a"}`,
      `Interested in: ${data.interest}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:info@streaque.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 8,
    fontSize: 14, fontFamily: "inherit", background: "white", color: "var(--ink)",
    transition: "border-color 150ms ease, box-shadow 150ms ease", boxSizing: "border-box",
  };
  const labelStyle = {
    fontSize: 11, fontFamily: "var(--font-mono)", textTransform: "uppercase",
    letterSpacing: "0.08em", color: "var(--ink-3)", marginBottom: 6, display: "block",
  };

  return (
    <section id="form" style={{ padding: "120px 0", background: "white", position: "relative" }}>
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <span className="mf-eyebrow">Pilot inquiry</span>
            <h2 style={{ marginTop: 14, fontSize: 44, lineHeight: 1.1 }}>
              Tell us about <span className="mf-grad-text">your institution.</span>
            </h2>
            <p style={{ marginTop: 18, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55 }}>
              The more you share, the better we can tailor the demo. We never share your information,
              and you'll only hear from a real person on our team, not a sales sequence.
            </p>

            <div style={{ marginTop: 36, display: "grid", gap: 16 }}>
              {[
                { t: "You'll hear back", d: "Within one business day, from a founder or success lead." },
                { t: "First call is 30 min", d: "Discovery only. We learn your goals, you see the platform." },
                { t: "No pressure", d: "Pilots are mutual, so we only proceed if there's a real fit." },
              ].map((s) => (
                <div key={s.t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: "var(--primary-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Check s={14} color="var(--brand-blue)"/>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{s.t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, padding: 20, background: "var(--bg-alt)", borderRadius: 12, borderLeft: "3px solid var(--brand-cyan)" }}>
              <div className="mf-eyebrow" style={{ fontSize: 10 }}>Privacy note</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8, lineHeight: 1.5 }}>
                This form sends to our team only. No tracking, no third-party CRMs. FERPA & GDPR aligned by default.
              </div>
            </div>
          </div>

          <div>
            {!submitted ? (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Your name *</label>
                    <input required style={inputStyle} value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Dr. Maria Chen"/>
                  </div>
                  <div>
                    <label style={labelStyle}>Work email *</label>
                    <input required type="email" style={inputStyle} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="m.chen@university.edu"/>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Institution *</label>
                    <input required style={inputStyle} value={data.institution} onChange={(e) => update("institution", e.target.value)} placeholder="State University"/>
                  </div>
                  <div>
                    <label style={labelStyle}>Students served</label>
                    <select style={inputStyle} value={data.students} onChange={(e) => update("students", e.target.value)}>
                      <option value="">Select range</option>
                      <option>Under 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000 – 25,000</option>
                      <option>25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Your role *</label>
                  <select required style={inputStyle} value={data.role} onChange={(e) => update("role", e.target.value)}>
                    <option value="">Select your role</option>
                    <option>Student Success / Advising</option>
                    <option>IT / Information Systems</option>
                    <option>CFO / Finance</option>
                    <option>Provost / Academic Leadership</option>
                    <option>Faculty</option>
                    <option>Investor / Partner</option>
                    <option>Press / Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>I'm interested in</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                      { v: "pilot", l: "Running a pilot" },
                      { v: "demo", l: "Just a demo" },
                      { v: "partnership", l: "Partnership" },
                      { v: "investor", l: "Investor info" },
                      { v: "other", l: "Something else" },
                    ].map((opt) => (
                      <button key={opt.v} type="button" onClick={() => update("interest", opt.v)}
                        style={{
                          padding: "8px 16px", borderRadius: 999,
                          border: data.interest === opt.v ? "1px solid var(--brand-blue)" : "1px solid var(--line)",
                          background: data.interest === opt.v ? "var(--primary-50)" : "white",
                          color: data.interest === opt.v ? "var(--brand-blue)" : "var(--ink-2)",
                          fontSize: 13, fontWeight: data.interest === opt.v ? 600 : 500,
                          cursor: "pointer", transition: "all 150ms ease", fontFamily: "inherit", whiteSpace: "nowrap",
                        }}>{opt.l}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>What would you like to discuss?</label>
                  <textarea rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    value={data.message} onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your goals, your current student-success stack, or any questions you have. Even a sentence or two helps."/>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8, flexWrap: "wrap", gap: 16 }}>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", maxWidth: 360 }}>
                    By submitting, you agree to be contacted by Streaque about your inquiry. We never share your information.
                  </div>
                  <button type="submit" className="mf-btn mf-btn-primary" style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                    Send inquiry <ArrowRight/>
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ background: "linear-gradient(135deg, var(--primary-50) 0%, white 60%)", border: "1px solid var(--brand-cyan)", borderRadius: 16, padding: 48, textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -6px rgba(43,179,223,0.4)" }}>
                  <Check s={36} color="var(--brand-cyan)"/>
                </div>
                <h3 style={{ marginTop: 24, fontSize: 28 }}>Almost done, {data.name.split(" ")[0] || "thanks"}.</h3>
                <p style={{ marginTop: 12, fontSize: 16, color: "var(--ink-2)", maxWidth: 440, margin: "12px auto 0" }}>
                  We've opened a pre-filled email to info@streaque.com in your mail app. Just hit send.
                  We'll reply within one business day. If it's urgent, you can also reach Luke directly at the number below.
                </p>
                <button onClick={() => { setSubmitted(false); setData({ name: "", email: "", institution: "", role: "", students: "", interest: "pilot", message: "" }); }}
                  style={{ marginTop: 24, background: "transparent", border: "none", color: "var(--brand-blue)", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Send another inquiry →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
