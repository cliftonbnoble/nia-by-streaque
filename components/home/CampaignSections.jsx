/* Streaque — campaign narrative sections (additive).
   Ported from the Claude Design bundle (new-sections.jsx / new-sections-2.jsx).
   Pure presentational components — no hooks — so they render on the server. */
import CoachCards from "./CoachCards";
import OfficeCards from "./OfficeCards";
import AdvisorBars from "./AdvisorBars";
import InsideOutPhone from "./InsideOutPhone";
import OutsideInPhone from "./OutsideInPhone";
import PauseOffscreen from "@/components/PauseOffscreen";

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

// =====================================================================
// 1 · THE PROBLEM
// =====================================================================
export const SecProblem = () => {
  return (
    <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FBF8F2 0%, #F7F4EE 100%)" }}>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-section-head">
          <span className="mf-eyebrow">The problem</span>
          <h2 style={{ marginTop: 14 }}>Each system holds a piece. <em className="mf-grad-text" style={{ fontStyle: "italic", paddingRight: "0.14em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>No one holds the whole.</em></h2>
          <p style={{ marginTop: 16 }}>Every team sees the student through the one window they own. The student falls through the gaps between them, and 40% never reach year two.</p>
        </div>

        <OfficeCards/>

        <figure style={{ margin: "72px auto 0", maxWidth: 1000 }}>
          <blockquote style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 42, lineHeight: 1.16, letterSpacing: "-0.025em", color: "var(--ink)", margin: 0 }}>
            Students don't leave because they fail. They leave because every system only sees <span className="mf-grad-text">its own slice.</span>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

// =====================================================================
// 2 · TWO ARCHITECTURES — inside-out vs outside-in, side by side
//     (merged from the former SecArchitecture + SecOutsideIn)
// =====================================================================
export const SecArchitecture = () => (
  <section id="architecture" className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(150deg, #FAFBFE 0%, #EFF5FE 55%, #F3F0FC 100%)" }}>
    <div className="mf-container">
      <div className="mf-section-head">
        <span className="mf-eyebrow">Two architectures</span>
        <h2>Most AI works <em style={{ fontStyle: "italic", color: "var(--ink-3)" }}>outside-in.</em> Nia works <span className="mf-grad-text" style={{ fontStyle: "italic" }}>inside-out.</span></h2>
        <p>Same question, opposite starting point. The starting point is the moat.</p>
      </div>

      <div className="ioc-grid">
        {/* Nia — inside-out */}
        <div className="ioc-col">
          <span className="mf-chip mf-chip-grad ioc-label" style={{ fontSize: 12.5, boxShadow: "0 10px 22px -8px rgba(66,77,211,0.55)" }}>Nia · inside-out</span>
          <div className="ioc-stage"><PauseOffscreen><InsideOutPhone/></PauseOffscreen></div>
          <div className="ioc-text">
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", margin: 0 }}>
              Live LMS, SIS, and CRM data, campus resources, and the student's own profile, all in hand
              <strong> before a single answer is written.</strong> The global model is the last resort, not the first.
            </p>
            <div className="ioc-chips">
              {["Student data first", "Campus context second", "Global model last"].map((t) => (
                <span key={t} className="ioc-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Generic — outside-in */}
        <div className="ioc-col ghost">
          <span className="mf-chip mf-chip-neutral ioc-label">Generic chatbot · outside-in</span>
          <div className="ioc-stage"><PauseOffscreen><OutsideInPhone/></PauseOffscreen></div>
          <div className="ioc-text">
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-3)", margin: 0 }}>
              Starts from the open internet and never gets closer. No LMS, no calendar, no sense of who's asking.
              <strong> Every conversation begins with a stranger.</strong> A search box with manners.
            </p>
            <div className="ioc-chips">
              {["Web text first", "Context-blind logic", "Your student, last"].map((t) => (
                <span key={t} className="ioc-chip ghost">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .ioc-grid{ display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:stretch; }
      .ioc-col{ display:flex; flex-direction:column; overflow:hidden; background:white; border:1px solid rgba(61,78,216,0.18); border-radius:var(--radius-lg); padding:24px; box-shadow:var(--shadow-card); }
      .ioc-col.ghost{ background:#FBFBFC; border:1px dashed #C9CDD7; box-shadow:none; }
      /* header label: content-width + centered. As a flex-column child it would
         otherwise stretch full-width below the desktop breakpoint. */
      .ioc-label{ align-self:center; }
      .ioc-stage{ margin:8px -24px 18px; }
      .ioc-text{ display:flex; flex-direction:column; flex:1; }
      .ioc-text p{ flex:1; }
      .ioc-chips{ display:flex; gap:8px; margin-top:16px; flex-wrap:wrap; justify-content:center; }
      .ioc-chip{ display:inline-flex; align-items:center; gap:7px; font-family:var(--font-mono); font-size:10.5px; letter-spacing:0.04em; padding:6px 12px; border-radius:999px; background:white; border:1px solid rgba(61,78,216,0.18); color:var(--ink-2); }
      .ioc-chip.ghost{ border:1px dashed #C9CDD7; color:var(--ink-3); background:transparent; }
      @media (max-width:760px){ .ioc-grid{ grid-template-columns:1fr; } }
      /* below the desktop breakpoint there's no clip-path crop, so the phone
         (position:absolute, bottom:-Npx) spills onto the copy — crop it at the
         stage box and keep the text layered above. */
      @media (max-width:1023px){ .ioc-stage{ overflow:hidden; } .ioc-text{ position:relative; z-index:2; } }

      /* desktop: drop the boxes — let the two stages breathe and overlap
         organically in the middle, crop the phone + orbit cleanly at the
         bottom (clip-path), and set the copy in a clean block below each. */
      @media (min-width:1024px){
        .ioc-grid{ gap:0; align-items:start; }
        .ioc-col{ background:none; border:none; box-shadow:none; padding:0; overflow:visible; }
        .ioc-col.ghost{ background:none; border:none; }
        .ioc-label{ align-self:center; position:relative; z-index:6; margin-bottom:-6px; }
        /* shrink ~10% for breathing room; transform-origin top + negative
           bottom margin reclaim the layout space the scale frees up. */
        .ioc-stage{ margin:0 0 -60px; clip-path:inset(-36px -100px 0 -100px); transform:scale(0.9); transform-origin:top center; }
        .ioc-text{ position:relative; z-index:6; max-width:440px; margin:18px auto 0; text-align:center; }
        .ioc-text p{ flex:none; }
        .ioc-chips{ justify-content:center; }
      }
    `}</style>
  </section>
);

// =====================================================================
// 3 · FIVE COACHES, ONE PROFILE
// =====================================================================
export const SecCoaches = () => {
  return (
    <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
      {/* vault-room backdrop — same language as the security page */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)" }}/>
      <div style={{ position: "absolute", width: 640, height: 640, right: -240, top: -300, background: "radial-gradient(circle, rgba(43,179,223,0.14), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", width: 720, height: 720, left: -200, bottom: -220, background: "radial-gradient(circle, rgba(56,65,177,0.30), transparent 64%)", borderRadius: "50%", pointerEvents: "none" }}/>
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
        <div style={{ maxWidth: 980, margin: "0 auto", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "var(--radius-lg)", padding: 28, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", boxShadow: "0 30px 64px -30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 28, alignItems: "center" }} className="mf-stack-sm">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "var(--brand-gradient)", color: "white", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }}/> One unified profile
            </div>
            <h3 style={{ fontSize: 22, marginTop: 16, color: "white" }}>Tell financial aid your parent lost their job</h3>
            <p style={{ marginTop: 10, fontSize: 15.5, color: "rgba(255,255,255,0.64)", lineHeight: 1.55 }}>and the academic coach already knows to ease the week, the wellness coach already knows to check in, and no one asks the student to say it twice.</p>
          </div>
          <div style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: 18, boxShadow: "0 22px 50px -26px rgba(0,0,0,0.5)" }}>
            {/* student header — Maya's face anchors the shared profile; the synced
                pill fills the header's right edge so the panel never reads as empty */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/students/maya.png" alt="" width="36" height="36" loading="lazy" decoding="async" style={{ borderRadius: "50%", flexShrink: 0, boxShadow: "var(--shadow-sm)" }}/>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>Maya Reyes</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>Shared context</span>
              </span>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--success)", background: "rgba(13,138,90,0.10)", border: "1px solid rgba(13,138,90,0.22)", borderRadius: 999, padding: "4px 9px" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--success)" }}/> Synced
              </span>
            </div>
            <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "11px 13px", fontSize: 13, color: "var(--ink-2)", boxShadow: "var(--shadow-sm)", display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "2px 7px", background: "var(--primary-50)", color: "var(--primary)", borderRadius: 5, flexShrink: 0 }}>FINANCE</span>
              <span>“my dad just lost his job”</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", color: "var(--ink-4)", padding: "8px 0" }}><IcoArrowDown s={15}/></div>
            <div style={{ display: "grid", gap: 8 }}>
              {[["ACADEMIC", "soften deadlines this week"], ["WELLNESS", "proactive check-in queued"], ["ADMIN", "flag aid-appeal form"]].map(([tag, note]) => (
                <div key={tag} style={{ background: "white", border: "1px solid var(--line)", borderRadius: 10, padding: "9px 12px", fontSize: 12.5, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "2px 7px", background: "rgba(13,138,90,0.10)", color: "var(--success)", borderRadius: 5, flexShrink: 0 }}>{tag}</span>
                  <span style={{ flex: 1 }}>{note}</span>
                  <span style={{ flexShrink: 0, width: 16, height: 16, borderRadius: "50%", background: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
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
            <h2 style={{ marginTop: 14 }}>Advisors don't want AI to replace them. <em className="mf-grad-text" style={{ fontStyle: "normal" }}>They want their time back.</em></h2>
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6 }}>
              Advisors don't spend their day mentoring. They spend it retrieving fragmented data and triaging crises they could have seen coming. Nia reclaims the 60% of advisor time lost to admin triage, so they can do the work only humans can do: build trust, offer perspective, hold space.
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
// 5 · WHY WE BUILT IT — the real grad-cohort origin story
// =====================================================================
export const SecProof = () => (
  <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, var(--bg-alt) 0%, #F1EEFB 100%)" }}>
    {/* soft brand glow so this reads as a deliberate closing beat, not naked text */}
    <div aria-hidden="true" style={{ position: "absolute", width: 660, height: 660, left: "50%", top: -320, transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(102,128,255,0.10), transparent 62%)", pointerEvents: "none" }}/>
    <div className="mf-container" style={{ position: "relative", maxWidth: 760, textAlign: "center" }}>
      <span className="mf-eyebrow">Why we built it</span>
      <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}>
        We built Nia for the students least likely to ask for help. Then a cohort of undergraduate
        evaluators put Nia through a worst-case stress-test and pushed back:
      </p>
      {/* the pushback, as a real pull-quote — the anchor the section was missing */}
      <figure style={{ position: "relative", margin: "30px auto 0", maxWidth: 620, background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius-xl)", padding: "42px 38px 28px", boxShadow: "0 30px 60px -34px rgba(31,52,128,0.28)" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: -18, left: 30, fontFamily: "var(--font-display)", fontSize: 92, lineHeight: 1, color: "var(--primary)", opacity: 0.16 }}>“</span>
        <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 25, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--ink)" }}>
          Why are you building this only for marginalized students? <span className="mf-grad-text" style={{ paddingRight: "0.06em" }}>All</span> students need this.
        </blockquote>
        <figcaption style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          An undergraduate evaluator · Pilot cohort
        </figcaption>
      </figure>
      <p style={{ marginTop: 30, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, lineHeight: 1.25, letterSpacing: "-0.02em", color: "var(--ink)" }}>
        We designed for the margin <span className="mf-grad-text">and found the mainstream.</span>
      </p>
    </div>
  </section>
);

// =====================================================================
// 6 · SEGMENTED CTA — three doors
// =====================================================================
export const SecCTA = () => {
  const doors = [
    { tag: "Provost · Campus leadership", title: "Book a pilot conversation", body: "See Nia inside your own data, governed by your own policies.", cta: "Book a pilot demo", href: "/contact#form", primary: true },
    { tag: "Investor", title: "Request the investor brief", body: "The architecture, the moat, and the market, sent on request.", cta: "Request brief", href: "/contact#form-investor", primary: false },
    { tag: "Partner · Champion", title: "Make an introduction", body: "Know a campus that needs this? Connect us.", cta: "Make an intro", href: "/contact#form-partnership", primary: false },
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
