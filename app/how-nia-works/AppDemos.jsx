"use client";
/* Interactive "from the app" demos. Both autoplay and respond to the
   user: the nudge carousel takes arrow clicks, the learning-style
   screen reacts to hover (the mascot character follows). Visuals match
   the product: drawer-card gradient, shadow-xl, lavender icon blobs. */
import { useEffect, useRef, useState } from "react";
import { ConnGlyph, FmCard, FmEyebrow } from "./fm";

/* fires once when the element scrolls into view */
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function CountUp({ to, run, dur = 1400 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return; }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to, dur]);
  return <>{val}</>;
}

/* ── nudge carousel ───────────────────────────────────────────── */

const NUDGES = [
  {
    cat: "Reminder", time: "now", icon: "/app-ui/reminder-nudge.webp",
    t: "BIO 201 quiz opens tomorrow at 9 AM",
    s: "You scored 71% on ch. 3. A 20-minute review tonight locks in ch. 4 before the quiz.",
    chip: "Best window: 7–9 PM, your peak focus",
    btn: "Start review", ghost: "Tonight at 7",
  },
  {
    cat: "Recommendation", time: "2m ago", icon: "/app-ui/recommendation-nudge.webp",
    t: "3 employers at Thursday's fair match your résumé",
    s: "Two of them close applications Friday. Your résumé is synced and ready to share.",
    chip: "Matches: UX research, product, data",
    btn: "View matches", ghost: "Add to calendar",
  },
  {
    cat: "Recap", time: "8 AM", icon: "/app-ui/recap-nudge.webp",
    t: "Week 6 recap: two wins, one watch-out",
    s: "Pset streak intact and your essay went in early. The BIO 201 quiz needs a reset.",
    chip: "Momentum +12% vs week 5",
    btn: "Read recap", ghost: "Share with advisor",
  },
];

const HOLD_MS = 5200;

const Arrow = ({ flip }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: "scaleX(-1)" } : undefined}><path d="M9 5l7 7-7 7"/></svg>
);

export function NudgesCarousel() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setTimeout(() => setIdx((i) => (i + 1) % NUDGES.length), HOLD_MS);
    return () => clearTimeout(timer.current);
  }, [idx]);

  const go = (d) => {
    clearTimeout(timer.current);
    setIdx((i) => (i + d + NUDGES.length) % NUDGES.length);
  };

  return (
    <div style={{ maxWidth: 482, margin: "0 auto" }}>
      <div style={{ overflow: "hidden", contain: "inline-size" }}>
        <div style={{ display: "flex", width: "300%", transform: `translateX(${-idx * (100 / 3)}%)`, transition: "transform 480ms cubic-bezier(0.32, 0.72, 0, 1)" }}>
          {NUDGES.map((n) => (
            <div key={n.cat} style={{ width: "33.3333%", flexShrink: 0, padding: "6px 12px 26px", boxSizing: "border-box" }}>
              <div className="fm-nudgecard" style={{
                position: "relative", borderRadius: 16, overflow: "hidden", minHeight: 212,
                border: "1px solid rgba(99,88,182,0.35)",
                backgroundImage: "linear-gradient(92.81deg, rgba(88,75,196,0.92) -4.09%, rgba(54,64,189,0.94) 109.24%), linear-gradient(85.36deg, #40bfea 0%, #0a16a0 99.57%)",
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.12), 0 8px 10px -6px rgba(0,0,0,0.12)",
              }}>
                {/* close: top-right, aligned with the title like the app */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ position: "absolute", top: 16, right: 16, opacity: 0.9, zIndex: 2 }}><path d="M18 6L6 18M6 6l12 12"/></svg>

                {/* content: right padding clears the artwork zone */}
                <div className="fm-nc-content">
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>{n.cat}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }}/>
                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.9)" }}>{n.time}</span>
                  </div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: 14.5, lineHeight: 1.35, fontFamily: "var(--font-display)" }}>{n.t}</div>
                  <div style={{ color: "rgba(255,255,255,0.96)", fontSize: 11.5, lineHeight: 1.5, marginTop: 5 }}>{n.s}</div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 9, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: 9.5, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>
                    <svg width="9" height="9" viewBox="0 0 20 20"><path d="M10 1l2 5.4L17.4 8 12 10l-2 5.4L8 10 2.6 8 8 6.4z" fill="white"/></svg>
                    {n.chip}
                  </span>
                </div>

                {/* actions pinned bottom-left in one line, like the app */}
                <div style={{ position: "absolute", left: 18, bottom: 14, display: "flex", alignItems: "center", gap: 12, zIndex: 2 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "white", color: "#16192A", fontWeight: 600, fontSize: 11, padding: "7px 12px", borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                    {n.btn}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", color: "white", fontWeight: 500, fontSize: 11, padding: "7px 11px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.4)" }}>{n.ghost}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.3 2.3 4.7-4.6"/></svg>
                </div>

                {/* category artwork: big, middle-right, touching the edge, blob behind */}
                <span className="fm-nc-blob" style={{ position: "absolute", right: -10, top: "55%", transform: "translateY(-50%)", borderRadius: "50%", background: "rgba(160,121,235,0.35)", pointerEvents: "none" }} aria-hidden="true"/>
                <img className="fm-nudgeicon" src={n.icon} alt="" width="280" height="187" style={{ position: "absolute", right: -4, top: "55%", transform: "translateY(-50%)", height: "auto", pointerEvents: "none" }} loading="lazy" decoding="async"/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous nudge" className="fm-arr"><Arrow flip/></button>
        <span style={{ display: "inline-flex", gap: 6 }}>
          {NUDGES.map((n, i) => (
            <span key={n.cat} style={{ width: i === idx ? 16 : 5, height: 5, borderRadius: 999, background: i === idx ? "#424dd3" : "#D9DEEC", transition: "all 300ms ease" }}/>
          ))}
        </span>
        <button type="button" onClick={() => go(1)} aria-label="Next nudge" className="fm-arr"><Arrow/></button>
      </div>
    </div>
  );
}

/* ── learning-style screen ────────────────────────────────────── */

const STYLES = [
  { n: "Visual", char: "/app-ui/nia-onboarding-visual.webp", icon: "/app-ui/visual-learning-style.webp" },
  { n: "Auditory", char: "/app-ui/nia-onboarding-auditory.webp" },
  { n: "Kinesthetic", char: "/app-ui/nia-onboarding-kinesthetic.webp" },
  { n: "Reading/Writing", char: "/app-ui/nia-onboarding-reading.webp" },
];

const CYCLE_MS = 3000;

export function LearningStyleDemo() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const current = hovered ?? active;

  useEffect(() => {
    if (hovered !== null) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % STYLES.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, hovered]);

  return (
    <div style={{ maxWidth: 524, margin: "0 auto" }}>
      <div className="fm-prefs" style={{ position: "relative", background: "white", borderRadius: 20, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.18), 0 12px 24px -8px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        <ConnGlyph s={42} gid="fmp"/>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 23, color: "#111827", marginTop: 12, letterSpacing: "-0.015em" }}>How do you learn best?</div>
        <div style={{ fontSize: 13, color: "#4b5563", marginTop: 5 }}>Pick up to 2. Nia adapts everything to fit.</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 18, maxWidth: 348 }}>
          {STYLES.map((o, i) => {
            const sel = i === current;
            return (
              <button key={o.n} type="button"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "13px 12px", borderRadius: 12,
                  border: sel ? "2px solid transparent" : "1px solid #e5e7eb",
                  background: sel ? "linear-gradient(90deg, #0ea5e9, #3d4ed8)" : "white",
                  boxShadow: sel ? "0 4px 10px -3px rgba(61,78,216,0.4)" : "none",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "background 250ms ease, box-shadow 250ms ease, border-color 250ms ease",
                }}>
                {o.icon && <img src={o.icon} alt="" width="17" height="17" style={{ width: 17, height: 17, filter: sel ? "brightness(0) invert(1)" : "none", opacity: sel ? 1 : 0.7, flexShrink: 0 }} loading="lazy" decoding="async"/>}
                <span style={{ flex: 1, textAlign: "left", fontSize: 12.5, fontWeight: 600, color: sel ? "white" : "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", transition: "color 250ms ease" }}>{o.n}</span>
                <span style={{ width: 17, height: 17, borderRadius: "50%", background: "white", color: "#3d4ed8", fontSize: 10, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, opacity: sel ? 1 : 0, transform: sel ? "scale(1)" : "scale(0.6)", transition: "opacity 250ms ease, transform 250ms ease" }}>1</span>
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 26, position: "relative", zIndex: 2 }}>
          <span style={{ background: "linear-gradient(92.81deg, #695bd7 -4.09%, #424dd3 109.24%)", color: "white", fontWeight: 600, fontSize: 13.5, padding: "12px 28px", borderRadius: 11, boxShadow: "0 4px 12px -4px rgba(66,77,211,0.5)" }}>Let&apos;s Go</span>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#6b7280" }}>Skip this step</span>
        </div>
        {/* the mascot follows whichever style you hover */}
        {STYLES.map((o, i) => (
          <img key={o.n} src={o.char} alt={i === current ? `Nia mascot, ${o.n} learner` : ""} width="300" height="244"
            className="fm-mascot"
            style={{ position: "absolute", right: 10, bottom: 0, pointerEvents: "none", opacity: i === current ? 1 : 0, transition: "opacity 350ms ease" }}
            loading="lazy" decoding="async"/>
        ))}
      </div>
    </div>
  );
}

/* ── staff dashboard — counters count up, the sentiment line draws ── */

const DASH_STATS = [
  { n: 93, l: "momentum" },
  { n: 75, l: "engaged" },
  { n: 63, l: "completed" },
];

export function StaffDashboard() {
  const [ref, inView] = useInView();

  return (
    <FmCard>
      <FmEyebrow>Staff dashboards · pilot signal</FmEyebrow>
      <div ref={ref} style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {DASH_STATS.map((s, i) => (
            <div key={s.l} className="fm-bob" style={{ animationDelay: `${i * 0.55}s`, padding: "12px 12px", background: "white", borderRadius: 12, border: "1px solid var(--line)", boxShadow: "0 8px 20px -12px rgba(31,52,128,0.3)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", background: "var(--brand-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                <CountUp to={s.n} run={inView}/>%
              </div>
              <div style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="fm-bob" style={{ padding: "12px 14px", background: "white", borderRadius: 12, border: "1px solid var(--line)", boxShadow: "0 14px 30px -16px rgba(31,52,128,0.35)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Sentiment · cohort B</span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: "#15803D", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(4px)", transition: "opacity 500ms ease 1100ms, transform 500ms ease 1100ms" }}>+12%</span>
          </div>
          <svg viewBox="0 0 200 60" style={{ width: "100%", height: 64, marginTop: 8 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="sdash-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(43,179,223,0.22)"/><stop offset="1" stopColor="rgba(43,179,223,0)"/></linearGradient>
            </defs>
            <path d="M0 40 L20 38 L40 42 L60 35 L80 30 L100 28 L120 22 L140 24 L160 18 L180 14 L200 12 L200 60 L0 60 Z" fill="url(#sdash-f)" style={{ opacity: inView ? 1 : 0, transition: "opacity 600ms ease 900ms" }}/>
            <path d="M0 40 L20 38 L40 42 L60 35 L80 30 L100 28 L120 22 L140 24 L160 18 L180 14 L200 12" fill="none" stroke="var(--brand-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="230" strokeDashoffset={inView ? 0 : 230} style={{ transition: "stroke-dashoffset 1400ms cubic-bezier(0.4, 0, 0.2, 1) 200ms" }}/>
            <circle cx="200" cy="12" r="3.5" fill="var(--brand-blue)" style={{ opacity: inView ? 1 : 0, transition: "opacity 300ms ease 1500ms" }}/>
          </svg>
        </div>
        <p style={{ margin: 0, fontSize: 9.5, lineHeight: 1.5, color: "var(--ink-3)" }}>Early signal from the student pilot. Illustrative, projected for the staff view.</p>
      </div>
    </FmCard>
  );
}
