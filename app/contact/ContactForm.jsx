"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "@/components/icons";

/* the path cards deep-link here: the hash picks the interest chip */
const HASH_INTEREST = { "#form": "pilot", "#form-founders": "founders", "#form-investor": "investor", "#form-partnership": "partnership", "#form-security": "security" };

/* The Turnstile SITE key is public (it ships in the page), so it's baked in here;
   an env var can still override it. With it set, the form POSTs to the Worker's
   /api/lead route (verify Turnstile → forward to the Apps Script → Sheet + email
   to info@streaque.com). The SECRET key is NOT here — that's a Worker secret
   (TURNSTILE_SECRET). See docs/form-wiring-setup.md. */
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADofYV_vp7xTWcAM";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "", email: "", institution: "", role: "", students: "", interest: "pilot", message: "",
    company_website: "", // honeypot — real users leave this empty
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [tsBroken, setTsBroken] = useState(false);   // Turnstile failed to load/run
  const [viaMailto, setViaMailto] = useState(false);  // success came via the mailto fallback
  const widgetRef = useRef(null);
  const tokenRef = useRef("");

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  useEffect(() => {
    const apply = () => {
      const interest = HASH_INTEREST[window.location.hash];
      if (interest) update("interest", interest);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  // Turnstile: load the script once, then explicitly render (reliable in React).
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || submitted) return;
    const gotToken = (t) => { tokenRef.current = t; setToken(t); setTsBroken(false); };
    const lostToken = () => { tokenRef.current = ""; setToken(""); };
    const render = () => {
      if (window.turnstile && widgetRef.current && !widgetRef.current.dataset.rendered) {
        window.turnstile.render(widgetRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",            // match the form, not a dark slab
          appearance: "interaction-only", // hidden unless a challenge is actually needed
          callback: gotToken,
          "error-callback": () => { lostToken(); setTsBroken(true); },
          "expired-callback": lostToken,
        });
        widgetRef.current.dataset.rendered = "1";
      }
    };
    const id = "cf-turnstile-script";
    if (document.getElementById(id)) { render(); }
    else {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true; s.defer = true;
      s.onload = render;
      s.onerror = () => setTsBroken(true); // script blocked (ad blocker / offline)
      document.head.appendChild(s);
    }
    // safety net: if no token ever arrives (blocked script, stuck challenge), flag
    // it so a real visitor can still reach us via email instead of being stranded.
    const timer = setTimeout(() => { if (!tokenRef.current) setTsBroken(true); }, 15000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const mailtoSubmit = () => {
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
    setViaMailto(true);
    setSubmitted(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.company_website) return; // honeypot tripped — silently drop

    // Backend not configured yet → keep the mailto fallback.
    if (!TURNSTILE_SITE_KEY) { mailtoSubmit(); return; }

    // Turnstile couldn't run (blocked / errored / timed out) → don't strand the
    // visitor; fall back to email. /api/lead still requires a valid token, so spam
    // protection is unchanged — this just opens their mail client, never the API.
    if (tsBroken) { mailtoSubmit(); return; }

    if (!token) { setError("One moment, just finishing a quick security check. Please send again."); return; }
    setSending(true);
    setError("");
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.name, email: data.email, institution: data.institution,
          role: data.role, students: data.students, interest: data.interest,
          message: data.message, company_website: data.company_website,
          turnstileToken: token,
          url: window.location.href,
          referrer: document.referrer,
          utm: {
            source: params.get("utm_source") || "",
            medium: params.get("utm_medium") || "",
            campaign: params.get("utm_campaign") || "",
          },
        }),
      });
      const out = await res.json().catch(() => ({ ok: false }));
      if (!out.ok) {
        console.warn("[lead] submit failed:", res.status, out); // shows Turnstile error codes
        throw new Error(out.error || "failed");
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email info@streaque.com directly.");
      setToken("");
      try { if (window.turnstile && widgetRef.current) window.turnstile.reset(widgetRef.current); } catch { /* noop */ }
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 8,
    fontSize: 14, fontFamily: "inherit", background: "white", color: "var(--ink)",
    transition: "border-color 150ms ease, box-shadow 150ms ease", boxSizing: "border-box",
  };
  const labelStyle = {
    // #4f5468 clears WCAG AA comfortably on white (~7.5:1) vs --ink-3's borderline 4.84:1
    fontSize: 11, fontFamily: "var(--font-mono)", textTransform: "uppercase",
    letterSpacing: "0.08em", color: "#4f5468", marginBottom: 6, display: "block",
  };

  return (
    <section id="form" style={{ padding: "120px 0", background: "white", position: "relative" }}>
      <style>{`
        #form input:focus, #form select:focus, #form textarea:focus {
          outline: none; border-color: var(--brand-blue) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-blue) 22%, transparent);
        }
        .cf-chip:focus-visible { outline: none; box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-blue) 22%, transparent); }
        #form input::placeholder, #form textarea::placeholder { color: #6b7187; opacity: 1; }
      `}</style>
      {/* extra scroll targets so the path cards can land here with intent */}
      <span id="form-founders" style={{ position: "absolute", top: 0 }} aria-hidden="true"/>
      <span id="form-investor" style={{ position: "absolute", top: 0 }} aria-hidden="true"/>
      <span id="form-partnership" style={{ position: "absolute", top: 0 }} aria-hidden="true"/>
      <span id="form-security" style={{ position: "absolute", top: 0 }} aria-hidden="true"/>
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 80, alignItems: "start" }}>
          <div className="cf-intro">
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
          </div>

          <div>
            {!submitted ? (
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 20 }}>
                {/* honeypot — off-screen; bots that fill it are silently dropped */}
                <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                  value={data.company_website} onChange={(e) => update("company_website", e.target.value)}
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}/>
                <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="cf-name" style={labelStyle}>Your name *</label>
                    <input id="cf-name" required autoComplete="name" style={inputStyle} value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Jordan Lee"/>
                  </div>
                  <div>
                    <label htmlFor="cf-email" style={labelStyle}>Work email *</label>
                    <input id="cf-email" required type="email" autoComplete="email" style={inputStyle} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="yourname@university.edu"/>
                  </div>
                </div>

                <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
                  <div>
                    <label htmlFor="cf-institution" style={labelStyle}>Institution *</label>
                    <input id="cf-institution" required autoComplete="organization" style={inputStyle} value={data.institution} onChange={(e) => update("institution", e.target.value)} placeholder="Your institution"/>
                  </div>
                  <div>
                    <label htmlFor="cf-students" style={labelStyle}>Students served</label>
                    <select id="cf-students" style={inputStyle} value={data.students} onChange={(e) => update("students", e.target.value)}>
                      <option value="">Select range</option>
                      <option>Under 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000 – 25,000</option>
                      <option>25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-role" style={labelStyle}>Your role *</label>
                  <select id="cf-role" required autoComplete="organization-title" style={inputStyle} value={data.role} onChange={(e) => update("role", e.target.value)}>
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
                  <span id="cf-interest-label" style={labelStyle}>I'm interested in</span>
                  <div role="group" aria-labelledby="cf-interest-label" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                      { v: "pilot", l: "Pilot information" },
                      { v: "demo", l: "Just a demo" },
                      { v: "security", l: "Security review" },
                      { v: "founders", l: "Talking to founders" },
                      { v: "partnership", l: "Partnership" },
                      { v: "investor", l: "Investor info" },
                      { v: "other", l: "Something else" },
                    ].map((opt) => (
                      <button key={opt.v} type="button" onClick={() => update("interest", opt.v)} aria-pressed={data.interest === opt.v}
                        className="cf-chip"
                        style={{
                          minHeight: 40, display: "inline-flex", alignItems: "center",
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
                  <label htmlFor="cf-message" style={labelStyle}>What would you like to discuss?</label>
                  <textarea id="cf-message" rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    value={data.message} onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your goals, your current student-success stack, or any questions you have. Even a sentence or two helps."/>
                </div>

                {/* interaction-only: usually renders nothing (silent pass), so no
                    reserved height — it only takes space if a challenge appears */}
                {TURNSTILE_SITE_KEY && <div ref={widgetRef}/>}
                {error && (
                  <div role="alert" style={{ fontSize: 13, color: "#b91c1c", background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, padding: "10px 12px" }}>
                    {error}
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8, flexWrap: "wrap", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 380 }}>
                    <span aria-hidden="true" style={{ color: "var(--brand-blue)", flexShrink: 0, marginTop: 1, display: "inline-flex" }}>
                      <ShieldCheck s={15}/>
                    </span>
                    <span>By submitting, you agree to be contacted by Streaque about your inquiry. <strong style={{ fontWeight: 600, color: "var(--ink)" }}>We never share your information.</strong></span>
                  </div>
                  <button type="submit" disabled={sending} className="mf-btn mf-btn-primary" style={{ border: "none", cursor: sending ? "default" : "pointer", fontFamily: "inherit", opacity: sending ? 0.7 : 1 }}>
                    {sending ? "Sending…" : <>Send inquiry <ArrowRight/></>}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ background: "linear-gradient(135deg, var(--primary-50) 0%, white 60%)", border: "1px solid var(--brand-cyan)", borderRadius: 16, padding: 48, textAlign: "center" }}>
                {!viaMailto ? (
                  <>
                    <img src="/character/nia-hi.svg" alt="" width="519" height="404"
                      style={{ width: "min(200px, 58%)", height: "auto", margin: "0 auto", display: "block" }}/>
                    <h3 style={{ marginTop: 10, fontSize: 28 }}>Thanks, {data.name.split(" ")[0] || "we've got it"}.</h3>
                    <p style={{ marginTop: 12, fontSize: 16, color: "var(--ink-2)", maxWidth: 440, margin: "12px auto 0" }}>
                      Your inquiry is in. You&apos;ll hear back from a real person on our team within one business day.
                    </p>
                  </>
                ) : (
                  <>
                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -6px rgba(43,179,223,0.4)" }}>
                      <Check s={36} color="var(--brand-cyan)"/>
                    </div>
                    <h3 style={{ marginTop: 24, fontSize: 28 }}>One last step, {data.name.split(" ")[0] || "thanks"}.</h3>
                    <p style={{ marginTop: 12, fontSize: 16, color: "var(--ink-2)", maxWidth: 440, margin: "12px auto 0" }}>
                      We&apos;ve tried to open a pre-filled email in your mail app, addressed to info@streaque.com. Hit send,
                      and you&apos;ll hear back within one business day. If it didn&apos;t open, just write us there directly.
                    </p>
                  </>
                )}
                <button onClick={() => { setSubmitted(false); setError(""); setToken(""); setViaMailto(false); setTsBroken(false); setData({ name: "", email: "", institution: "", role: "", students: "", interest: "pilot", message: "", company_website: "" }); }}
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
