/* Streaque — campaign narrative sections (additive).
   Ported from the Claude Design bundle (new-sections.jsx / new-sections-2.jsx).
   Pure presentational components — no hooks — so they render on the server. */
import CoachCards from "./CoachCards";
import ProblemCards from "./ProblemCards";
import AdvisorBars from "./AdvisorBars";

// ── line icons (1.8 stroke, matches the existing set) ───────────
const Ico = ({ d, s = 20, fill = false }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const IcoCap = (p) => <Ico {...p} d={<><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5a8 8 0 0 0 12 0v-5"/></>}/>;
const IcoBriefcase = (p) => <Ico {...p} d={<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>}/>;
const IcoCoins = (p) => <Ico {...p} d={<><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82"/></>}/>;
const IcoHeart = (p) => <Ico {...p} d={<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z"/>}/>;
const IcoClipboard = (p) => <Ico {...p} d={<><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h4"/></>}/>;
const IcoArrowR = (p) => <Ico {...p} d={<path d="M5 12h14M13 5l7 7-7 7"/>}/>;
const IcoArrowDown = (p) => <Ico {...p} d={<path d="M12 5v14M5 12l7 7 7-7"/>}/>;
const IcoX = ({ s = 12 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>;
const IcoCheck = ({ s = 12 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
const IcoEye = (p) => <Ico {...p} d={<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>}/>;

// =====================================================================
// 1 · THE PROBLEM
// =====================================================================
export const SecProblem = () => {
  return (
    <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
      {/* vault-room backdrop — same language as the security page */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at 40% 30%, black 20%, transparent 75%)" }}/>
      <div style={{ position: "absolute", width: 600, height: 600, left: -240, top: -280, background: "radial-gradient(circle, rgba(56,65,177,0.24), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", width: 560, height: 560, right: -220, bottom: -260, background: "radial-gradient(circle, rgba(43,179,223,0.12), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 760 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>The problem</span>
          <h2 style={{ marginTop: 14, color: "white" }}>Each office holds a piece. <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>No one holds the whole.</em></h2>
          <p style={{ marginTop: 16, maxWidth: 600, color: "rgba(255,255,255,0.65)" }}>Every team sees the student through the one window they own. The student falls through the gaps between the windows.</p>
        </div>

        <ProblemCards/>

        <figure style={{ margin: "52px 0 0", maxWidth: 1000 }}>
          <blockquote style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 42, lineHeight: 1.16, letterSpacing: "-0.025em", color: "white", margin: 0 }}>
            Students don't leave because they fail. They leave because systems fail to <span className="mf-grad-text">see them whole.</span>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

// =====================================================================
// 2 · OUTSIDE-IN vs INSIDE-OUT
// =====================================================================
const ArchDirIcon = ({ dir, s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    {dir === "in"
      ? <><path d="M4 5v14"/><path d="M8 12h11M15 8l4 4-4 4"/></>
      : <><path d="M20 5v14"/><path d="M4 12h11M11 8l4 4-4 4"/></>}
  </svg>
);

const ArchColumn = ({ tone, mode, modeLabel, title, caption, steps, takeaway, takeaIcon }) => {
  const brand = tone === "brand";
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
      background: brand ? "linear-gradient(180deg, #f3f6ff 0%, #ffffff 58%)" : "var(--bg-alt)",
      border: "1px solid " + (brand ? "rgba(72,67,193,0.22)" : "var(--line)"),
      borderRadius: "var(--radius-xl)", padding: 30,
      boxShadow: brand ? "0 26px 64px -30px rgba(45,53,167,0.40)" : "none" }}>
      {brand && <div style={{ position: "absolute", top: -70, right: -50, width: 260, height: 260, background: "radial-gradient(circle, rgba(43,179,223,0.20), transparent 65%)", pointerEvents: "none" }}/>}

      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 13px", borderRadius: 999, fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600,
          ...(brand ? { background: "var(--brand-gradient)", color: "white" } : { background: "white", color: "var(--ink-3)", border: "1px solid var(--line-2)" }) }}>
          <ArchDirIcon dir={mode} s={14}/> {modeLabel}
        </span>
        <span style={{ width: 28, height: 28, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          ...(brand ? { background: "rgba(13,138,90,0.12)", color: "var(--success)" } : { background: "rgba(160,74,44,0.10)", color: "#a14a2c" }) }}>
          {brand ? <IcoCheck s={14}/> : <IcoX s={14}/>}
        </span>
      </div>

      <h3 style={{ position: "relative", fontSize: 21, letterSpacing: "-0.02em" }}>{title}</h3>
      <p style={{ position: "relative", fontSize: 13.5, color: "var(--ink-3)", marginTop: 8, lineHeight: 1.5 }}>{caption}</p>

      <div style={{ position: "relative", marginTop: 24 }}>
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 30, flexShrink: 0 }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600,
                  ...(brand
                      ? (s.dim ? { background: "white", color: "rgb(72,67,193)", border: "1.5px dashed rgba(72,67,193,0.5)" } : { background: "var(--brand-gradient)", color: "white", boxShadow: "0 6px 16px -4px rgba(45,53,167,0.5)" })
                      : { background: "white", color: "var(--ink-3)", border: "1.5px solid var(--line-2)" }) }}>{i + 1}</span>
                {!last && <span style={{ flex: 1, width: 2, marginTop: 5, borderRadius: 2, background: brand ? "linear-gradient(rgba(72,67,193,0.55), rgba(72,67,193,0.12))" : "var(--line-2)" }}/>}
              </div>
              <div style={{ flex: 1, paddingBottom: last ? 0 : 22, opacity: s.dim ? 0.9 : 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--ink)", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  {s.label}
                  {s.tag && <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)", border: "1px solid var(--line-2)", borderRadius: 5, padding: "1px 6px" }}>{s.tag}</span>}
                </div>
                <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 3, lineHeight: 1.45 }}>{s.sub}</div>
                {s.detail}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ position: "relative", marginTop: "auto", paddingTop: 22 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12, borderRadius: 999, padding: "7px 14px",
          ...(brand ? { background: "var(--brand-gradient)", color: "white" } : { background: "rgba(160,74,44,0.08)", color: "#a14a2c", border: "1px solid rgba(160,74,44,0.18)" }) }}>
          {takeaIcon} {takeaway}
        </span>
      </div>
    </div>
  );
};

export const SecArchitecture = () => {
  const genericAnswer = (
    <div style={{ marginTop: 12, background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "11px 13px" }}>
      <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.45, fontStyle: "italic" }}>“Generally, students should reach out to their academic advisor and check the course catalog…”</div>
      <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {["generic", "no campus context", "sometimes wrong"].map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "2px 7px", background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: 5, color: "var(--ink-4)" }}>{t}</span>
        ))}
      </div>
    </div>
  );
  const realData = (
    <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
      {["Maya · BIO 201", "Aid hold · cleared", "Prefers evening nudges", "FERPA-scoped"].map((t) => (
        <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 9px", background: "white", border: "1px solid rgba(72,67,193,0.2)", borderRadius: 999, color: "var(--primary)" }}>{t}</span>
      ))}
    </div>
  );
  const outSteps = [
    { label: "Student asks", sub: "A blank box. Phrase it well, or get nothing back." },
    { label: "Model searches training data", sub: "Web-scale knowledge with no idea who, or where, you are." },
    { label: "Returns a plausible answer", sub: "Confident and generic, so the student has to sanity-check it.", detail: genericAnswer },
  ];
  const inSteps = [
    { label: "The student's live data", sub: "Who this student is, here, right now, already in hand.", detail: realData },
    { label: "Your campus context", sub: "Your policies, deadlines, resources, and escalation paths." },
    { label: "Global model", tag: "last resort", dim: true, sub: "Reached only when the answer isn’t already known, and still filtered through who the student is." },
  ];
  return (
    <section className="mf-section" style={{ background: "white" }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 44 }}>
          <span className="mf-eyebrow">Two architectures</span>
          <h2 style={{ marginTop: 14 }}>Most AI works outside-in. <span className="mf-grad-text">Nia works inside-out.</span></h2>
          <p>The same question reaches the student two completely different ways. One makes them do the work. One already knows their story.</p>
        </div>

        <div className="mf-stack-sm" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
          <ArchColumn tone="muted" mode="out" modeLabel="Generic AI · Outside-in"
            title="It starts from the outside world."
            caption="Built from the outside in: generic knowledge first, your student last."
            steps={outSteps} takeaway="You become the prompt engineer." takeaIcon={<IcoEye s={14}/>}/>
          <ArchColumn tone="brand" mode="in" modeLabel="Nia · Inside-out"
            title="It starts from the student's truth."
            caption="Built from the inside out: your student first, the global model last."
            steps={inSteps} takeaway="The system already knows your story." takeaIcon={<IcoCheck s={13}/>}/>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 3, width: 48, height: 48, borderRadius: "50%", background: "white", border: "1px solid var(--line)", boxShadow: "var(--shadow)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--ink-3)" }}>vs</div>
        </div>

        <div style={{ marginTop: 28, background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "28px 32px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 360, height: 360, right: -120, top: -160, background: "radial-gradient(circle, rgba(43,179,223,0.16), transparent 62%)", pointerEvents: "none" }}/>
          <span style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 23, color: "white", letterSpacing: "-0.02em", flex: 1, minWidth: 280 }}>
            This isn't a better chatbot. <span style={{ color: "rgba(255,255,255,0.55)" }}>It's a different architecture.</span>
          </span>
          <span style={{ position: "relative", fontSize: 14.5, color: "rgba(255,255,255,0.66)", maxWidth: 380, lineHeight: 1.5 }}>
            And architecture, once built, is expensive to copy, which is exactly why it's the moat.
          </span>
        </div>
      </div>
    </section>
  );
};

// =====================================================================
// 3 · FIVE COACHES, ONE PROFILE
// =====================================================================
export const SecCoaches = () => {
  return (
    <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
      {/* vault-room backdrop — same language as the security page */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)" }}/>
      <div style={{ position: "absolute", width: 640, height: 640, right: -240, top: -300, background: "radial-gradient(circle, rgba(43,179,223,0.14), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", width: 560, height: 560, left: -220, bottom: -280, background: "radial-gradient(circle, rgba(56,65,177,0.26), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-section-head" style={{ marginBottom: 36 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>Layer 1 · The student's truth</span>
          <h2 style={{ marginTop: 14, color: "white" }}>Five coaches. <span className="mf-grad-text" style={{ fontStyle: "italic" }}>One profile.</span></h2>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>Academic, Career, Finance, Wellness, and Administrative coaches don't work in separate tabs. They share one unified picture of the student, so the student never re-explains.</p>
        </div>

        <CoachCards/>

        <div style={{ display: "flex", justifyContent: "center", color: "rgba(255,255,255,0.4)", padding: "14px 0 4px" }}>
          <svg width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M20 0v22M20 22l-6-6M20 22l6-6"/></svg>
        </div>
        <div style={{ background: "white", border: "1px solid rgba(72,67,193,0.22)", borderRadius: "var(--radius-xl)", padding: 28, boxShadow: "0 40px 90px -30px rgba(0,0,0,0.6)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 28, alignItems: "center" }} className="mf-stack-sm">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "var(--brand-gradient)", color: "white", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }}/> One unified profile
            </div>
            <h3 style={{ fontSize: 22, marginTop: 16 }}>Tell financial aid your parent lost their job</h3>
            <p style={{ marginTop: 10, fontSize: 15.5, color: "var(--ink-2)", lineHeight: 1.55 }}>and the academic coach already knows to ease the week, the wellness coach already knows to check in, and no one asks the student to say it twice.</p>
          </div>
          <div style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 18 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>Shared context · Maya R.</div>
            <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "11px 13px", fontSize: 13, color: "var(--ink-2)", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "2px 7px", background: "var(--primary-50)", color: "var(--primary)", borderRadius: 5, marginRight: 8 }}>FINANCE</span>
              “my dad just lost his job”
            </div>
            <div style={{ display: "flex", justifyContent: "center", color: "var(--ink-4)", padding: "8px 0" }}><IcoArrowDown s={15}/></div>
            <div style={{ display: "grid", gap: 8 }}>
              {[["ACADEMIC", "soften deadlines this week"], ["WELLNESS", "proactive check-in queued"], ["ADMIN", "flag aid-appeal form"]].map(([tag, note]) => (
                <div key={tag} style={{ background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "9px 12px", fontSize: 12.5, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "2px 7px", background: "rgba(13,138,90,0.10)", color: "var(--success)", borderRadius: 5 }}>{tag}</span>
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================================
// 4 · FOR ADVISORS
// =====================================================================
export const SecAdvisors = () => {
  return (
    <section className="mf-section" style={{ background: "white" }}>
      <div className="mf-container">
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 56, alignItems: "center" }}>
          <div>
            <span className="mf-eyebrow">For advisors</span>
            <h2 style={{ marginTop: 14 }}>Advisors don't want AI to replace them. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>They want their time back.</em></h2>
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6 }}>
              Advisors don't spend their day mentoring. They spend it retrieving fragmented data and triaging crises they could have seen coming. Nia reclaims that capacity, so they can do the work only humans can do: build trust, offer perspective, hold space.
            </p>
            <p style={{ marginTop: 24, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, lineHeight: 1.25, letterSpacing: "-0.02em", color: "var(--ink)" }}>
              You can't automate belonging. <span className="mf-grad-text">But you can automate the barriers that prevent it.</span>
            </p>
          </div>
          <AdvisorBars/>
        </div>
      </div>
    </section>
  );
};

// =====================================================================
// 5 · THE PROOF (placeholder quote — swap before publishing)
// =====================================================================
export const SecProof = () => (
  <section className="mf-section" style={{ background: "var(--bg-alt)" }}>
    <div className="mf-container">
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "start" }}>
        <figure style={{ margin: 0, position: "relative", background: "white", border: "1.5px dashed var(--line-2)", borderRadius: "var(--radius-xl)", padding: "34px 36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 8 }}>
            <span className="mf-eyebrow">The proof</span>
            <span className="mf-status-pill mf-status-dev" style={{ whiteSpace: "normal" }}><span className="dot"/> Placeholder · pending approved quote</span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 60, lineHeight: 0.6, color: "var(--line-2)" }}>“</span>
          <blockquote style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 34, lineHeight: 1.2, letterSpacing: "-0.022em", color: "var(--ink)", margin: "6px 0 0" }}>
            It's like having an advisor who's already read my file.
          </blockquote>
          <figcaption style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--primary-50)", border: "1px dashed var(--line-2)" }}/>
            <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
              <span style={{ display: "block", fontWeight: 600, color: "var(--ink-2)" }}>Pilot student, name on approval</span>
              <span>Graduate student-success cohort</span>
            </span>
          </figcaption>
        </figure>

        <div>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
            We built Nia for the students least likely to ask for help. Then a cohort of graduate students studying student success tested it, and pushed back, nearly in unison:
          </p>
          <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "var(--ink)", fontStyle: "italic" }}>
            “Why are you building this only for marginalized students? <span style={{ fontStyle: "normal", fontWeight: 600 }}>All</span> students need this.”
          </p>
          <div style={{ marginTop: 24, paddingTop: 22, borderTop: "1px solid var(--line)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, lineHeight: 1.3, letterSpacing: "-0.02em", color: "var(--ink)" }}>
              We designed for the margin <span className="mf-grad-text">and found the mainstream.</span>
            </p>
          </div>
          <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", color: "var(--ink-3)", background: "white", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 12px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--inprogress)" }}/>
            Swap in a verified, attributed quote before publishing
          </div>
        </div>
      </div>
    </div>
  </section>
);

// =====================================================================
// 6 · SEGMENTED CTA — three doors
// =====================================================================
export const SecCTA = () => {
  const doors = [
    { tag: "Provost · VP of Student Success", title: "Book a pilot conversation", body: "See Nia inside your own data, governed by your own policies.", cta: "Book a pilot", href: "/contact#form", primary: true },
    { tag: "Investor", title: "Request the investor brief", body: "The architecture, the moat, and the market, sent on request.", cta: "Request brief", href: "mailto:info@streaque.com?subject=Investor%20brief", primary: false },
    { tag: "Partner · Champion", title: "Make an introduction", body: "Know a campus that should see students whole? Connect us.", cta: "Make an intro", href: "mailto:info@streaque.com?subject=Introduction", primary: false },
  ];
  return (
    <section style={{ background: "linear-gradient(160deg, #161a5e 0%, #25278a 52%, #3a37ad 100%)", color: "white", padding: "92px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 72%)" }}/>
      <div style={{ position: "absolute", width: 620, height: 620, right: -220, top: -240, background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 62%)", borderRadius: "50%" }}/>
      <div style={{ position: "absolute", width: 520, height: 520, left: -200, bottom: -260, background: "radial-gradient(circle, rgba(56,65,177,0.35), transparent 60%)", borderRadius: "50%" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Find your door</span>
          <h2 style={{ color: "white", margin: "18px 0 0", fontSize: 46, lineHeight: 1.08 }}>
            Tired of tools that don't <span style={{ background: "linear-gradient(135deg,#8fe0f7,#aab0f2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>see students whole?</span> Let's talk.
          </h2>
        </div>
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {doors.map((d) => (
            <a key={d.tag} href={d.href} style={{ textDecoration: "none", background: d.primary ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.045)", border: "1px solid " + (d.primary ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"), borderRadius: "var(--radius-lg)", padding: 26, display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: d.primary ? "rgb(143,224,247)" : "rgba(255,255,255,0.55)", fontWeight: 600 }}>{d.tag}</span>
              <h3 style={{ color: "white", fontSize: 21, marginTop: 12 }}>{d.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 8, lineHeight: 1.5, flex: 1 }}>{d.body}</p>
              <span style={{ marginTop: 22, display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "11px 18px", borderRadius: "var(--radius)", fontSize: 14, fontWeight: 500, background: d.primary ? "white" : "transparent", color: d.primary ? "var(--ink)" : "white", border: d.primary ? "none" : "1px solid rgba(255,255,255,0.30)" }}>
                {d.cta} <IcoArrowR s={14}/>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
