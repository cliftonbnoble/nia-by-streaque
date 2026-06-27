"use client";
/* Security page — interactive "four pillars" explorer + animated visuals.
   Ported from the bundle's security.jsx (the stateful parts). */
import { useState, useEffect } from "react";
import { Tick, ShieldCheck as Shield, Lock } from "@/components/icons";

function EncryptionVisual() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 4), 1050);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          Encrypting · Maya Reyes · BIO 201
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--primary)", fontWeight: 600 }}>{stage + 1}/4</span>
      </div>
      <div style={{ height: 3, background: "var(--line)", borderRadius: 2, overflow: "hidden", marginBottom: 14 }}>
        <div style={{ width: `${((stage + 1) / 4) * 100}%`, height: "100%", background: "var(--brand-gradient)", borderRadius: 2, transition: "width 450ms cubic-bezier(0.2, 0.8, 0.2, 1)" }}/>
      </div>
      <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: 16, display: "grid", gap: 9, boxShadow: "var(--shadow-sm)" }}>
        {[
          { lbl: "Plaintext", v: "Maya Reyes · 92.4 BIO 201", kind: "plain" },
          { lbl: "AAD bound", v: "tenant=riverside · field=name · row=27a4", kind: "aad" },
          { lbl: "DEK · Riverside", v: "dek_······ (wrapped by KEK)", kind: "key" },
          { lbl: "Ciphertext", v: "7f3a2b91··· (AES-256-GCM)", kind: "cipher" },
        ].map((s, i) => {
          const show = stage >= i;
          const current = stage === i;
          return (
            <div key={i} style={{
              padding: "9px 12px", borderRadius: 8,
              background: s.kind === "cipher" ? "rgba(13,138,90,0.07)" : s.kind === "key" ? "var(--brand-gradient-soft)" : "var(--bg-alt)",
              border: "1px solid " + (current ? (s.kind === "cipher" ? "rgba(13,138,90,0.45)" : "rgba(43,179,223,0.55)") : s.kind === "cipher" ? "rgba(13,138,90,0.2)" : "var(--line)"),
              boxShadow: current ? "0 4px 14px -4px rgba(43,179,223,0.35)" : "none",
              opacity: show ? 1 : 0.28,
              transform: show ? "none" : "translateY(2px)",
              transition: "all 320ms ease",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: s.kind === "cipher" ? "var(--success)" : "var(--ink-4)" }}>{s.lbl}</span>
                {s.kind === "cipher" && show && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
                )}
              </div>
              <div style={{ marginTop: 3, fontFamily: "var(--font-mono)", fontSize: 11.5, color: s.kind === "cipher" ? "var(--success)" : "var(--ink)", wordBreak: "break-all" }}>{s.v}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 14, padding: 12, background: "rgba(43,179,223,0.06)", border: "1px solid rgba(43,179,223,0.18)", borderRadius: "var(--radius)", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.5 }}>
        <strong style={{ color: "var(--ink)" }}>Why AAD matters:</strong> a stolen ciphertext can't be replayed against another student. The binding fails first.
      </div>
    </div>
  );
}

function ZeroTrustVisual() {
  const checks = [
    { l: "Token signature · verified" }, { l: "Signing key · matched" }, { l: "Audience · verified" },
    { l: "Issuer · verified" }, { l: "Expiry · within window" }, { l: "Rate limit · within quota" }, { l: "Tenant scope · enforced" },
  ];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          API request · <span style={{ color: "var(--ink)", fontWeight: 600 }}>POST /···</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 11px", borderRadius: 999, background: "rgba(13,138,90,0.10)", border: "1px solid rgba(13,138,90,0.25)", color: "var(--success)", fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, animation: "sec-fade 400ms 980ms both" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Request allowed
        </span>
      </div>
      <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "8px 16px", boxShadow: "var(--shadow-sm)" }}>
        {checks.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < checks.length - 1 ? "1px solid var(--line)" : "none", animation: `sec-fade 400ms ${i * 80}ms both` }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(13,138,90,0.12)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-2)" }}>{c.l}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)" }}>{(i + 1) * 12}ms</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 8 }}>
        {["7 checks", "84ms", "zero implicit trust"].map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-3)", background: "white", border: "1px solid var(--line)", borderRadius: 999, padding: "4px 11px" }}>{t}</span>
        ))}
      </div>
      <style>{`@keyframes sec-fade { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

function DefenseVisual() {
  const layers = [
    { n: 1, t: "IP allowlist", d: "Internal services reachable only from approved networks." },
    { n: 2, t: "Rate limiting", d: "Per-endpoint quotas stop brute-force at the door." },
    { n: 3, t: "CORS lockdown", d: "Explicit origin allowlist. No wildcards, ever." },
    { n: 4, t: "JWT validation", d: "Algorithm, key ID, audience, issuer, expiry, every call." },
    { n: 5, t: "Input validation", d: "Context-aware SQLi & XSS detection on every parameter." },
    { n: 6, t: "Row-level security", d: "The database itself refuses cross-tenant reads." },
    { n: 7, t: "Field-level encryption", d: "Even with DB access, data is unreadable without the tenant key." },
  ];
  const [hover, setHover] = useState(null);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 14, textAlign: "center" }}>
        ATTACKER → STUDENT RECORD · hover a layer
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "stretch" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 11px", borderRadius: 999, background: "rgba(196,61,61,0.08)", border: "1px solid rgba(196,61,61,0.22)", color: "#c43d3d", fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            attempted breach
          </span>
        </div>
        {layers.map((l) => {
          const isHover = hover === l.n;
          return (
            <div key={l.n} onMouseEnter={() => setHover(l.n)} onMouseLeave={() => setHover(null)}
              style={{
                padding: "10px 14px", background: isHover ? "var(--brand-gradient)" : "white",
                color: isHover ? "white" : "var(--ink)",
                border: "1px solid " + (isHover ? "transparent" : "var(--line)"),
                borderRadius: "var(--radius)", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 12,
                boxShadow: isHover ? "0 14px 32px -10px rgba(56,65,177,0.45)" : "var(--shadow-sm)",
                transition: "all 160ms",
              }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, width: 24 }}>{String(l.n).padStart(2, "0")}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13 }}>{l.t}</div>
                {isHover && <div style={{ fontSize: 11, marginTop: 3, opacity: 0.9 }}>{l.d}</div>}
              </div>
              <Lock s={13}/>
            </div>
          );
        })}
        <div style={{ marginTop: 8, padding: "12px 14px", background: "var(--ink)", color: "white", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 12 }}>
          <Shield s={18}/>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13 }}>Single student record</span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.7 }}>protected</span>
        </div>
      </div>
    </div>
  );
}

function FerpaVisual() {
  const verbStyles = {
    READ:    { background: "rgba(43,179,223,0.16)", color: "#5ec7e6" },
    WRITE:   { background: "rgba(233,138,100,0.16)", color: "#E98A64" },
    BLOCKED: { background: "rgba(220,90,90,0.18)", color: "#f08a8a" },
  };
  const entries = [
    { t: "10:42:18", u: "dr.chen@riverside", verb: "READ", d: "student.gpa · row 27a4", ip: "10.0.4.12" },
    { t: "10:42:21", u: "advisor.k@riverside", verb: "READ", d: "student.email · row 27a4", ip: "10.0.4.8" },
    { t: "10:43:02", u: "system.nia", verb: "BLOCKED", d: "pii=ssn detected", ip: "internal" },
    { t: "10:43:14", u: "dr.chen@riverside", verb: "WRITE", d: "intervention.note · row 27a4", ip: "10.0.4.12" },
  ];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ background: "var(--ink)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "0 18px 44px -16px rgba(11,16,32,0.45)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Audit log</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 600, padding: "3px 9px", borderRadius: 999, background: "rgba(47,179,128,0.14)", color: "#2fb380" }}>every access · retained</span>
        </div>
        <div style={{ padding: "10px 14px", display: "grid", gap: 7 }}>
          {entries.map((e, i) => {
            const blocked = e.verb === "BLOCKED";
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: 11, padding: blocked ? "6px 8px" : "2px 0", background: blocked ? "rgba(220,90,90,0.08)" : "transparent", borderRadius: 6, animation: `sec-fade 400ms ${i * 120}ms both` }}>
                <span style={{ color: "rgba(255,255,255,0.38)", width: 52, flexShrink: 0, fontSize: 10 }}>{e.t}</span>
                <span style={{ ...verbStyles[e.verb], fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", padding: "2px 7px", borderRadius: 5, flexShrink: 0 }}>{e.verb}</span>
                <span style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  <span style={{ color: "#8fe0f7" }}>{e.u}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}> · {e.d}</span>
                </span>
                <span style={{ color: "rgba(255,255,255,0.32)", fontSize: 9.5, flexShrink: 0 }}>{e.ip}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mf-stack-sm" style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {["No data trains AI models", "Email hashed per-tenant", "PII detected & classified", "Tenant-scoped lookups"].map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, color: "var(--ink-2)" }}>
            <Tick/> {l}
          </div>
        ))}
      </div>
    </div>
  );
}

// one accent per pillar — bright variants tuned for the dark section
const PillarIcon = ({ kind, color, s = 20 }) => {
  const c = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "lock") return <svg {...c}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
  if (kind === "verify") return <svg {...c}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 5-5"/></svg>;
  if (kind === "layers") return <svg {...c}><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/></svg>;
  if (kind === "audit") return <svg {...c}><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>;
  return null;
};

const PILLARS = [
  { id: "encryption", n: "01", t: "Per-tenant encryption", sub: "AES-256-GCM · per-tenant keys · AAD binding",
    accent: "#2BB3DF", icon: "lock",
    headline: "Every university gets its own key.",
    body: [
      "Most edtech vendors encrypt everything with one master key. If they're breached, every student record at every institution is exposed at once. We don't.",
      "Nia uses envelope encryption with per-tenant Data Encryption Keys (DEKs), each wrapped by a master Key Encryption Key (KEK) that lives in a hardened secrets vault, never in code, never in container images, never in environment files.",
      "A worst-case breach is contained to a single tenant. And every ciphertext carries Additional Authenticated Data (AAD) that binds it to its university, field, and row, so a stolen record can't be replayed against another student.",
    ],
    facts: [
      { l: "Algorithm", v: "AES-256-GCM" }, { l: "Key model", v: "Envelope · DEK + KEK" },
      { l: "Key storage", v: "Hardened secrets vault" }, { l: "Tenant isolation", v: "AAD-bound ciphertext" },
    ],
    Visual: EncryptionVisual },
  { id: "zerotrust", n: "02", t: "Zero Trust by default", sub: "NIST SP 800-207 · Auth0 · row-level security",
    accent: "#8F7DF7", icon: "verify",
    headline: "Every request, verified. Every time.",
    body: [
      "Every API call is authenticated with a cryptographically signed JWT issued by Auth0, the identity platform behind thousands of enterprises worldwide.",
      "Every call is validated for algorithm, key ID, audience, issuer, and expiry before it touches a database query. It's then rate-limited against per-endpoint quotas tuned to real usage.",
      'Finally, it\'s authorized against a row-level security policy in the database itself. "Should this user see this record?" gets answered twice: once by our app, once by the database.',
    ],
    facts: [
      { l: "Identity", v: "Auth0 · OIDC + JWT" }, { l: "Framework", v: "NIST SP 800-207" },
      { l: "DB enforcement", v: "Row-level security" }, { l: "Rate limits", v: "Per-endpoint quotas" },
    ],
    Visual: ZeroTrustVisual },
  { id: "defense", n: "03", t: "Defense in depth", sub: "7 layers between attacker and student record",
    accent: "#E98A64", icon: "layers",
    headline: "Seven layers. In order. No shortcuts.",
    body: ["Most edtech vendors have one or two of these layers. We built all seven. Hover any layer to see what it stops."],
    facts: [
      { l: "Total layers", v: "7" }, { l: "DB pattern", v: "Postgres row-level security" },
      { l: "CORS policy", v: "Explicit allowlist · no wildcards" }, { l: "Validation", v: "Context-aware SQLi + XSS" },
    ],
    Visual: DefenseVisual },
  { id: "ferpa", n: "04", t: "FERPA-aligned", sub: "Architected for student-data law on day one",
    accent: "#2FB380", icon: "audit",
    headline: "Compliance, by architecture.",
    body: [
      "PII detection is baked into the agent architecture. Sensitive identifiers are recognized, classified, and handled differently from general conversation.",
      "Audit logging on every PII access records what was read, by which authenticated user, at what time, from which IP, and we keep it for compliance review.",
      "No student data ever trains external AI models. Conversations stay scoped to your institution, never shipped to OpenAI's, Google's, or anyone else's training corpus. Even the cryptographic hash of an email is scoped per-university.",
    ],
    facts: [
      { l: "PII handling", v: "Detected · classified · logged" }, { l: "Audit log", v: "Every access, retained" },
      { l: "Training opt-out", v: "Architecturally enforced" }, { l: "Email hashing", v: "Scoped per-university" },
    ],
    Visual: FerpaVisual },
];

export default function Pillars() {
  const [active, setActive] = useState("encryption");
  const p = PILLARS.find((x) => x.id === active);
  const Visual = p.Visual;
  return (
    <section id="pillars" style={{ position: "relative", overflow: "hidden", background: "var(--ink)", padding: "104px 0" }}>
      {/* vault-room backdrop — echoes the hero */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)" }}/>
      <div style={{ position: "absolute", width: 700, height: 700, right: -240, top: -280, background: "radial-gradient(circle, rgba(43,179,223,0.16), transparent 62%)", borderRadius: "50%" }}/>
      <div style={{ position: "absolute", width: 600, height: 600, left: -220, bottom: -300, background: "radial-gradient(circle, rgba(56,65,177,0.28), transparent 60%)", borderRadius: "50%" }}/>

      <div className="mf-container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>Our four pillars</span>
          <h2 style={{ color: "white", marginTop: 16 }}>Every feature sits on <span className="mf-grad-text" style={{ fontStyle: "italic" }}>four pillars.</span></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 14, fontSize: 17 }}>None of them are optional. None of them are bolt-ons.</p>
        </div>

        <div className="sec-ptab-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
          {PILLARS.map((x) => {
            const isActive = x.id === active;
            return (
              <button key={x.id} onClick={() => setActive(x.id)} className="sec-ptab"
                style={{
                  textAlign: "left", padding: 22, borderRadius: "var(--radius-lg)", cursor: "pointer",
                  background: isActive ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)",
                  border: "1px solid " + (isActive ? x.accent : "rgba(255,255,255,0.10)"),
                  boxShadow: isActive ? `0 0 0 1px ${x.accent}55, 0 22px 54px -18px ${x.accent}66` : "none",
                  fontFamily: "var(--font-body)", WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)",
                }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 11, background: `${x.accent}1f`, border: `1px solid ${x.accent}45`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <PillarIcon kind={x.icon} color={x.accent}/>
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: isActive ? x.accent : "rgba(255,255,255,0.35)" }}>{x.n}</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "white", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{x.t}</div>
                <div style={{ fontSize: 11.5, color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: 7, fontFamily: "var(--font-mono)", letterSpacing: "0.02em", lineHeight: 1.5 }}>{x.sub}</div>
              </button>
            );
          })}
        </div>

        <div key={active} style={{ background: "white", borderRadius: "var(--radius-lg)", boxShadow: "0 40px 90px -30px rgba(0,0,0,0.6)", overflow: "hidden", animation: "pillar-in 320ms ease" }}>
          <div className="sec-pillar-panel" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480 }}>
            <div style={{ padding: 40, borderRight: "1px solid var(--line)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: `${p.accent}14`, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: p.accent, fontWeight: 600 }}>
                <PillarIcon kind={p.icon} color={p.accent} s={13}/> Pillar {p.n}
              </span>
              <h3 style={{ marginTop: 16, fontSize: 30, lineHeight: 1.15 }}>{p.headline}</h3>
              <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
                {p.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>{para}</p>
                ))}
              </div>
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {p.facts.map((f) => (
                  <div key={f.l} style={{ padding: "11px 14px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 10 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, fontWeight: 600 }}>{f.l}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--ink)", marginTop: 4 }}>{f.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 32, background: "var(--bg-alt)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Visual/>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .sec-ptab { transition: transform 200ms ease, background 200ms ease, border-color 200ms ease, box-shadow 200ms ease; }
        @media (max-width: 860px) {
          .sec-ptab-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sec-pillar-panel { grid-template-columns: 1fr !important; min-height: 0 !important; }
          .sec-pillar-panel > div:first-child { border-right: none !important; border-bottom: 1px solid var(--line); }
        }
        .sec-ptab:hover { transform: translateY(-3px); background: rgba(255,255,255,0.07); }
        @keyframes pillar-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes sec-fade { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
