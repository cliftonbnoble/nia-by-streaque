/* Streaque — "layer-cake" Higher Ed Stack (additive, from the bundle's midfi-stack.jsx).
   Renders alongside our animated orchestration diagram. Pure / server component. */

export default function HigherEdStackLayers() {
  const layers = [
    { n: "01", t: "Campus-authorized LLMs", d: "Anthropic, OpenAI, Azure: whichever your AI governance already cleared.", tag: "Model layer" },
    { n: "02", t: "Core systems of record", d: "Canvas LMS, Banner / Workday SIS, Salesforce CRM. Read-only by default.", tag: "Data layer" },
    { n: "03", t: "Point solutions", d: "Advising, early-alert, tutoring, careers, financial aid: stitched, not replaced.", tag: "Tool layer" },
    { n: "04", t: "Nia orchestration", d: "The brain. Signals in, governed actions out. Your tenant, your policies.", tag: "Orchestration", highlight: true },
    { n: "05", t: "Students & staff", d: "Where the work actually happens. One coherent surface across every channel.", tag: "Experience layer" },
  ];
  return (
    <section className="mf-section" style={{ background: "#EEF6FF", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(35,86,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(35,86,201,0.05) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 80%)", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 720, marginLeft: 0, marginBottom: 56 }}>
          <span className="mf-eyebrow">The Higher Ed AI Stack</span>
          <h2 style={{ marginTop: 14 }}>How Nia fits in your <span className="mf-grad-text">higher-ed stack.</span></h2>
          <p style={{ marginTop: 14, fontSize: 16 }}>Nia doesn't replace what you've already procured. It orchestrates it. Every layer keeps its job; Nia keeps the layers talking.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ display: "grid", gap: 10 }}>
            {layers.map((l) => {
              const isHi = l.highlight;
              return (
                <div key={l.n} style={{ padding: "16px 18px", borderRadius: 14, background: isHi ? "var(--ink)" : "white", color: isHi ? "white" : "var(--ink)", border: isHi ? "1px solid var(--ink)" : "1px solid rgba(35,86,201,0.18)", boxShadow: isHi ? "0 18px 44px -12px rgba(11,16,32,0.4)" : "0 2px 6px rgba(35,86,201,0.06)", display: "flex", alignItems: "center", gap: 14, position: "relative", overflow: "hidden", transform: isHi ? "scale(1.03)" : "none", zIndex: isHi ? 2 : 1 }}>
                  {isHi && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 90% 50%, rgba(43,179,223,0.35), transparent 60%)" }}/>}
                  <span style={{ position: "relative", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: isHi ? "rgba(255,255,255,0.6)" : "var(--ink-4)", flexShrink: 0 }}>{l.n}</span>
                  <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em" }}>{l.t}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 7px", borderRadius: 999, background: isHi ? "rgba(43,179,223,0.2)" : "#EEF6FF", color: isHi ? "#A8DFFF" : "var(--primary)", border: isHi ? "1px solid rgba(43,179,223,0.35)" : "1px solid rgba(35,86,201,0.15)", whiteSpace: "nowrap" }}>{l.tag}</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: isHi ? "rgba(255,255,255,0.7)" : "var(--ink-3)", marginTop: 4, lineHeight: 1.5 }}>{l.d}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div style={{ padding: 28, background: "white", border: "1px solid rgba(35,86,201,0.15)", borderRadius: "var(--radius-lg)", boxShadow: "0 12px 36px -16px rgba(35,86,201,0.18)" }}>
              <h3 style={{ fontSize: 22, marginBottom: 16 }}>Where Nia actually sits.</h3>
              {[
                { t: "Above your tools, below your judgement.", d: "Nia coordinates across point solutions (advising, alerts, tutoring) instead of replacing them." },
                { t: "Inside your tenant.", d: "Every signal stays scoped to your institution. Models route through your authorized AI governance." },
                { t: "Connected, not coupled.", d: "Swap a SIS, change LMS vendors, switch model providers. Nia keeps working." },
              ].map((b) => (
                <div key={b.t} style={{ display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ flexShrink: 0, marginTop: 2, width: 22, height: 22, borderRadius: "50%", background: "#EEF6FF", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>{b.t}</div>
                    <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.55 }}>{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
