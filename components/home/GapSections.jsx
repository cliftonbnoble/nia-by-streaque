"use client";
/* Streaque — homepage gap-fill sections (additive).
   Ported from the Claude Design bundle (midfi-gaps.jsx).
   NOTE: several sections carry PLACEHOLDER content flagged in the UI
   (named pilot, sample stats, pending testimonial) — clear before publishing. */
import { useState, useEffect } from "react";
import { ArrowRight as ArrowR, Tick } from "@/components/icons";

/* ── 1. Pilot spotlight ───────────────────────────────────────── */
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
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--primary)", letterSpacing: "-0.02em" }}>4–6 wks</div>
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

/* ── 2. Testimonial ───────────────────────────────────────────── */
export const Testimonial = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.5fr 1.5fr", gap: 56, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--brand-gradient-soft)", border: "1px dashed var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)", textAlign: "center", letterSpacing: "0.04em" }}>headshot<br/>placeholder</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>Dr. [Pilot Director]</div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>Director of Student Success</div>
            <div style={{ fontSize: 13, color: "var(--ink-3)" }}>[Pilot Institution]</div>
          </div>
        </div>
        <div>
          <span className="mf-eyebrow">From the field</span>
          <blockquote style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 36, lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink)" }}>
            <span style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 0, verticalAlign: "-0.4em", marginRight: 4 }}>"</span>
            We stopped triaging by gut feel. Nia surfaces the student who's about to slip, with the receipts, before our weekly meeting. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>Advisors get their afternoons back.</em>
          </blockquote>
          <div style={{ marginTop: 20, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-4)", letterSpacing: "0.04em" }}>
            ↑ Composite pilot quote · awaiting cleared verbatim from cohort A
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── 3. Mini case study ───────────────────────────────────────── */
export const CaseStudy = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720, marginBottom: 40 }}>
        <span className="mf-eyebrow">Case study · 1 of 3</span>
        <h2 style={{ marginTop: 14 }}>One semester. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>Measurable shift.</em></h2>
      </div>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0, border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "white", boxShadow: "var(--shadow-card)" }}>
        <div style={{ padding: 40, borderRight: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--bg-alt)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)", textAlign: "center" }}>logo</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--ink)" }}>[Pilot Institution]</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)" }}>Mid-size public · 12,400 undergrad · Fall–Spring 2025</div>
            </div>
          </div>
          <h3 style={{ fontSize: 24, marginBottom: 14, lineHeight: 1.2 }}>The 14-day at-risk gap, closed.</h3>
          <p style={{ fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            Before Nia, advisors learned about a struggling student an average of 14 days after the first missed signal. After integration with the LMS and SIS, that window dropped to under 36 hours, and the response was a warm, evidence-based nudge, not a cold email.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
            {[
              { n: "14d → 36h", l: "time-to-signal" },
              { n: "+22pt", l: "persistence (cohort A)" },
              { n: "−41%", l: "advisor email volume" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--primary)", letterSpacing: "-0.02em" }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 4, lineHeight: 1.3 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, color: "var(--primary)", textDecoration: "none", cursor: "pointer" }}>
            Read the full case study <ArrowR/>
          </a>
          <div style={{ marginTop: 14, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-4)", letterSpacing: "0.04em" }}>
            Numbers are directional pilot estimates · finalized in published study Q2 2026
          </div>
        </div>
        <div style={{ padding: 40, background: "var(--bg-alt)", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>Time-to-signal · weekly</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-2)", marginBottom: 6 }}>
                <span>Before · email + spreadsheet</span>
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}>14d</span>
              </div>
              <div style={{ height: 14, background: "white", border: "1px solid var(--line)", borderRadius: 6, overflow: "hidden" }}>
                <div style={{ width: "92%", height: "100%", background: "repeating-linear-gradient(45deg, var(--ink-4) 0 6px, var(--ink-3) 6px 12px)", opacity: 0.6 }}/>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-2)", marginBottom: 6 }}>
                <span>After · Nia orchestration</span>
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--success)", fontWeight: 600 }}>36h</span>
              </div>
              <div style={{ height: 14, background: "white", border: "1px solid var(--line)", borderRadius: 6, overflow: "hidden" }}>
                <div style={{ width: "11%", height: "100%", background: "var(--brand-gradient)" }}/>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 8, padding: 14, background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius)", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>Sample event chain · Maya Reyes</div>
            {[
              { t: "T+0", e: "BIO 201 quiz missed (Canvas)", kind: "sig" },
              { t: "T+4h", e: "Nia drafts nudge · advisor approves", kind: "act" },
              { t: "T+9h", e: "Maya replies, books reset session", kind: "win" },
              { t: "T+36h", e: "Make-up quiz scheduled", kind: "win" },
            ].map((r) => (
              <div key={r.t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12 }}>
                <span style={{ width: 44, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-3)" }}>{r.t}</span>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: r.kind === "win" ? "var(--success)" : r.kind === "act" ? "var(--primary)" : "var(--ink-4)" }}/>
                <span style={{ color: "var(--ink-2)" }}>{r.e}</span>
              </div>
            ))}
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
  { q: "Is Nia FERPA-aligned?", a: "Yes. We operate as a school official under FERPA §99.31(a)(1), with role-based access, encryption in transit and at rest, and a full audit trail on every model call. SOC 2 is on our security roadmap, not yet underway — we're glad to share our current controls and the plan." },
  { q: "How is pricing structured?", a: "Per-FTE annual licensing with pilot-pricing for the first year. Implementation, SSO, and three integrations are included. Talk to us for a quote tied to your enrollment band." },
];

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="mf-section alt">
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
                    style={{ width: "100%", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.015em" }}
                  >
                    <span>{it.q}</span>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid var(--line-2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0)", color: "var(--ink-3)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: 22, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 640 }}>
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

/* ── 5. Resources teaser + newsletter ─────────────────────────── */
/* Bespoke cover art — mini-UI scenes in the same dark-ink language as the
   security page illustrations, so the cards read as ours, not stock. */
const ResourceCover = ({ kind }) => (
  <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id={`rc-cy-${kind}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5ec7e6"/><stop offset="100%" stopColor="#3841B1"/>
      </linearGradient>
      <radialGradient id={`rc-glow-${kind}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(43,179,223,0.20)"/><stop offset="100%" stopColor="rgba(43,179,223,0)"/>
      </radialGradient>
    </defs>
    <rect width="320" height="180" fill="#0b1020"/>
    {[36, 72, 108, 144].map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.03)"/>)}
    {[64, 128, 192, 256].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="180" stroke="rgba(255,255,255,0.03)"/>)}
    <circle cx="160" cy="80" r="150" fill={`url(#rc-glow-${kind})`}/>
    {kind === "cio" && (
      <g>
        <rect x="92" y="30" width="136" height="120" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <rect x="106" y="44" width="64" height="6" rx="3" fill="rgba(255,255,255,0.22)"/>
        {[64, 86, 108].map((y, i) => (
          <g key={y}>
            <circle cx="115" cy={y + 4} r="7" fill={i === 1 ? "rgba(43,179,223,0.18)" : "rgba(255,255,255,0.05)"} stroke={i === 1 ? "#2BB3DF" : "rgba(255,255,255,0.18)"} strokeWidth="1.2"/>
            <path d={`M${111.5} ${y + 4} l2.5 2.5 4.5 -4.5`} fill="none" stroke={i === 1 ? "#5ec7e6" : "rgba(255,255,255,0.5)"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="130" y={y} width={i === 1 ? 84 : 64} height="4" rx="2" fill={i === 1 ? "rgba(143,224,247,0.5)" : "rgba(255,255,255,0.14)"}/>
            <rect x="130" y={y + 8} width={i === 1 ? 56 : 40} height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
          </g>
        ))}
        <rect x="106" y="128" width="108" height="12" rx="6" fill={`url(#rc-cy-${kind})`} opacity="0.9"/>
      </g>
    )}
    {kind === "sheet" && (
      <g>
        {[0, 1, 2].map((r) => [0, 1].map((c) => (
          <rect key={`${r}${c}`} x={46 + c * 38} y={48 + r * 26} width="34" height="22" rx="3"
            fill={r === 1 && c === 0 ? "rgba(233,138,100,0.25)" : "rgba(255,255,255,0.05)"}
            stroke={r === 1 && c === 0 ? "rgba(233,138,100,0.6)" : "rgba(255,255,255,0.12)"}/>
        )))}
        <path d="M136 90 h36 m0 0 l-7 -7 m7 7 l-7 7" stroke="#5ec7e6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="186" y="52" width="92" height="52" rx="14" fill={`url(#rc-cy-${kind})`}/>
        <path d="M200 104 l-6 12 16 -8" fill="#3841B1"/>
        <rect x="198" y="66" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.85)"/>
        <rect x="198" y="78" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
        <circle cx="262" cy="92" r="7" fill="rgba(255,255,255,0.92)"/>
        <path d="M259 92 l2.2 2.2 4 -4" stroke="#3841B1" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    )}
    {kind === "warm" && (
      <g>
        <rect x="104" y="26" width="112" height="190" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)"/>
        <rect x="146" y="36" width="28" height="6" rx="3" fill="rgba(255,255,255,0.16)"/>
        <rect x="116" y="56" width="88" height="44" rx="10" fill="rgba(233,138,100,0.16)" stroke="rgba(233,138,100,0.5)"/>
        <circle cx="132" cy="72" r="8" fill="rgba(233,138,100,0.85)"/>
        <path d="M132 69.5c-1.6-1.8-4.4-.6-4.4 1.5 0 2 2.8 3.6 4.4 4.6 1.6-1 4.4-2.6 4.4-4.6 0-2.1-2.8-3.3-4.4-1.5z" fill="white"/>
        <rect x="146" y="64" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.7)"/>
        <rect x="146" y="75" width="34" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
        <rect x="116" y="110" width="64" height="22" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)"/>
        <rect x="124" y="118" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.3)"/>
        <path d="M236 60 q10 8 0 18 M244 52 q16 14 0 34" stroke="rgba(233,138,100,0.55)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
    )}
  </svg>
);

export const Resources = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720, marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 520 }}>
          <span className="mf-eyebrow">Resources · coming soon</span>
          <h2 style={{ marginTop: 14 }}>The <span className="mf-grad-text">orchestration</span> playbook.</h2>
          <p style={{ marginTop: 14 }}>Field notes for advisors, CIOs, and student-success leaders making the move from chatbots to governed coaching. We&apos;re putting the first pieces together now.</p>
        </div>
        <a href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, color: "var(--primary)", textDecoration: "none", cursor: "pointer" }}>
          All resources <ArrowR/>
        </a>
      </div>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {[
          { tag: "Guide", t: "The CIO's short list for AI in higher ed", meta: "Coming soon", art: "cio" },
          { tag: "Webinar", t: "Replacing the early-alert spreadsheet", meta: "Coming soon", art: "sheet" },
          { tag: "Field note", t: 'What "warm" actually means in a nudge', meta: "Coming soon", art: "warm" },
        ].map((r) => (
          <a key={r.t} href="/resources" style={{ display: "flex", flexDirection: "column", background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-sm)", cursor: "pointer" }}>
            <div style={{ aspectRatio: "16/9", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
              <ResourceCover kind={r.art}/>
            </div>
            <div style={{ padding: 22 }}>
              <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", fontWeight: 600 }}>{r.tag}</span>
              <h3 style={{ marginTop: 10, fontSize: 18, lineHeight: 1.3 }}>{r.t}</h3>
              <div style={{ marginTop: 14, fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>{r.meta}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

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
  // then reveal only if the visitor hasn't already made a choice.
  // The stored value ("accepted" | "rejected") is what any future analytics
  // integration must check before setting non-essential cookies.
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("mf-cookie-consent")) setShow(true); } catch { setShow(true); }
  }, []);
  if (!show) return null;
  const choose = (choice) => {
    try { localStorage.setItem("mf-cookie-consent", choice); } catch {}
    setShow(false);
  };
  return (
    <div style={{ position: "fixed", bottom: 16, left: 16, right: 16, maxWidth: 540, marginLeft: "auto", background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: 18, display: "flex", alignItems: "center", gap: 14, zIndex: 100, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 220, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
        We use a small set of cookies to make this site work and to understand traffic. No tracking pixels, no ad networks.{" "}
        <a href="/privacy" style={{ color: "var(--primary)", textDecoration: "underline", cursor: "pointer" }}>Cookie preferences</a>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => choose("rejected")} className="mf-btn mf-btn-ghost mf-btn-sm">Reject</button>
        <button onClick={() => choose("accepted")} className="mf-btn mf-btn-primary mf-btn-sm">Accept</button>
      </div>
    </div>
  );
};
