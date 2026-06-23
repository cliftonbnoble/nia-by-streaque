import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight as ArrowR, Tick } from "@/components/icons";
import WholeStudent from "@/components/home/WholeStudent";
import PilotStrip from "@/components/PilotStrip";
import { SecCTA } from "@/components/home/CampaignSections";
import { FmCard, FmEyebrow, FmLive, ConnGlyph } from "./fm";
import { NudgesCarousel, LearningStyleDemo, StaffDashboard } from "./AppDemos";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/how-nia-works",
  title: "How Nia Works · Nia by Streaque",
  description:
    "Two coordinated front doors, a student coach and a staff co-pilot, turning LMS, SIS, and CRM signals into nudges, alerts, and next steps on one governed layer.",
});

const Hero = () => (
  <section className="mf-hero" style={{ paddingBottom: 64 }}>
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div style={{ textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
        <span className="mf-eyebrow">How Nia Works</span>
        <h1 style={{ marginTop: 18, fontSize: 60 }}>
          Two front doors.<br/>
          <span className="mf-grad-text">One student, seen whole.</span>
        </h1>
        <p className="mf-hero-sub" style={{ margin: "22px auto 0", maxWidth: 640 }}>
          A coach in the student&apos;s pocket. A co-pilot at the staff desk. One governed
          platform, built on the data your institution already owns.
        </p>
      </div>
    </div>
  </section>
);

/* Two-path chooser — the clear "which door?" choice up top. Each card previews
   one platform (student app / staff dashboard) and jumps to its section. */
const TwoPaths = () => (
  <section className="mf-section hnw-paths-sec">
    <div className="mf-container">
      <h2 style={{ textAlign: "center", margin: "0 0 32px", fontSize: 16.5, fontWeight: 600, color: "var(--ink-3)", letterSpacing: 0 }}>Two front doors, one student.</h2>
      <div className="hnw-paths">
        {/* STUDENT door */}
        <a href="#for-students" className="hnw-door hnw-door-student">
          <span className="hnw-door-glow" aria-hidden="true"/>
          <div className="hnw-door-top">
            <span className="hnw-door-ic" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.18 7.67L3 21l1.83-5.82A8.5 8.5 0 1 1 21 11.5z"/><path d="M12 8.4l1.02 2.33 2.33 1.02-2.33 1.02L12 15.1l-1.02-2.33-2.33-1.02 2.33-1.02z" fill="currentColor" stroke="none"/></svg>
            </span>
            <span className="hnw-door-eyebrow">For students</span>
            <span className="hnw-door-status hnw-door-live">Available now</span>
          </div>
          <h3 className="hnw-door-h">A coach in the pocket.</h3>
          <ul className="hnw-door-points">
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>Answers from your LMS, SIS, and CRM</li>
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>Nudges that land, not noise</li>
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>Adapts to how each student studies</li>
          </ul>
          <span className="hnw-door-cta hnw-cta-student">See the student experience <ArrowR s={13}/></span>
        </a>
        {/* STAFF door */}
        <a href="#for-staff" className="hnw-door hnw-door-staff">
          <span className="hnw-door-glow" aria-hidden="true"/>
          <div className="hnw-door-top">
            <span className="hnw-door-ic" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7.5a4.5 4.5 0 1 0 4.5 4.5"/><path d="M12 12 19.5 4.5"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="16.5" cy="7.5" r="1.35" fill="currentColor" stroke="none"/></svg>
            </span>
            <span className="hnw-door-eyebrow">For staff</span>
            <span className="hnw-door-status hnw-door-dev">In development</span>
          </div>
          <h3 className="hnw-door-h">A co-pilot at the desk.</h3>
          <ul className="hnw-door-points">
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>Early-warning across the cohort</li>
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>The student who needs you, surfaced first</li>
            <li><span className="hnw-door-tick" aria-hidden="true"><Tick s={12}/></span>Outreach drafted in your voice</li>
          </ul>
          <span className="hnw-door-cta hnw-cta-staff">See the staff experience <ArrowR s={13}/></span>
        </a>
      </div>
    </div>
    <style>{`
      .hnw-paths-sec{ padding-top: 6px; padding-bottom: 60px; }
      .hnw-paths{ display: grid; grid-template-columns: 1fr 1fr; gap: 22px; max-width: 940px; margin: 0 auto; }

      /* two symmetric doors — dark cards in the "Built different" glass language, set on
         the light section. Per-card accent: cyan (students) / purple (staff). */
      .hnw-door{
        position: relative; overflow: hidden; display: flex; flex-direction: column;
        text-decoration: none; border-radius: var(--radius-xl); padding: 28px 30px 26px;
        background: linear-gradient(165deg, #2a316e 0%, #0d1024 100%);
        border: 1px solid rgba(255,255,255,0.10);
        box-shadow: 0 30px 60px -32px rgba(13,18,52,0.55);
        transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
      }
      .hnw-door-student{ --door-accent: #2BB3DF; }
      .hnw-door-staff{ --door-accent: #8F7DF7; }
      .hnw-door:hover{ transform: translateY(-6px); box-shadow: 0 44px 82px -32px rgba(13,18,52,0.62); border-color: color-mix(in srgb, var(--door-accent) 48%, transparent); }
      .hnw-door-glow{ position: absolute; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(ellipse 82% 52% at 50% -10%, var(--door-accent), transparent 72%); opacity: 0.26; }
      .hnw-door-top, .hnw-door-h, .hnw-door-points, .hnw-door-cta{ position: relative; z-index: 1; }

      .hnw-door-top{ display: flex; align-items: center; gap: 10px; }
      .hnw-door-ic{ display: inline-flex; flex-shrink: 0; width: 32px; height: 32px; border-radius: 9px; align-items: center; justify-content: center; color: var(--door-accent); background: color-mix(in srgb, var(--door-accent) 16%, transparent); border: 1px solid color-mix(in srgb, var(--door-accent) 32%, transparent); }
      .hnw-door-eyebrow{ font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
      .hnw-door-status{ margin-left: auto; display: inline-flex; align-items: center; font-family: var(--font-mono); font-size: 9px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid transparent; border-radius: 999px; padding: 4px 11px; }
      .hnw-door-live{ color: #5ee7b0; border-color: rgba(61,220,151,0.40); background: rgba(61,220,151,0.10); box-shadow: 0 0 18px -2px rgba(61,220,151,0.55), inset 0 0 10px -4px rgba(61,220,151,0.6); }
      .hnw-door-dev{ color: #f7c873; border-color: rgba(240,181,74,0.42); background: rgba(240,181,74,0.10); box-shadow: 0 0 18px -2px rgba(240,181,74,0.5), inset 0 0 10px -4px rgba(240,181,74,0.55); }

      .hnw-door .hnw-door-h{ margin: 18px 0 0; font-family: var(--font-display); font-weight: 600; font-size: 26px; letter-spacing: -0.025em; color: #fff; line-height: 1.1; }
      .hnw-door-points{ list-style: none; margin: 16px 0 22px; padding: 0; display: grid; gap: 11px; }
      .hnw-door-points li{ display: flex; gap: 10px; align-items: flex-start; font-size: 13.5px; line-height: 1.45; color: rgba(255,255,255,0.74); }
      .hnw-door-tick{ flex-shrink: 0; margin-top: 1px; display: inline-flex; color: var(--door-accent); }
      .hnw-door-cta{ margin-top: auto; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 12px; border-radius: 12px; color: #fff; font-size: 13.5px; font-weight: 600; box-shadow: 0 14px 28px -14px rgba(0,0,0,0.5); transition: gap 200ms ease; }
      .hnw-cta-student{ background: var(--brand-gradient); }
      .hnw-cta-staff{ background: linear-gradient(135deg, #8A6CF2 0%, #4F3FD0 100%); }
      .hnw-door:hover .hnw-door-cta{ gap: 11px; }

      @media (max-width: 700px){ .hnw-paths{ grid-template-columns: 1fr; gap: 18px; max-width: 440px; } }
    `}</style>
  </section>
);

/* ── student feature mocks — illustrated cards in the contact-page
     language: light stock, accent glow cropped by the card, real app UI ── */

function ChatMock() {
  return (
    <FmCard accent="43,179,223">
      <FmEyebrow>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: "white", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px -2px rgba(11,16,32,0.12)" }}><ConnGlyph s={18} gid="fmc"/></span>
          Nia · course-aware
        </span>
      </FmEyebrow>
      <div style={{ marginLeft: "auto", width: "fit-content", maxWidth: "78%", background: "var(--brand-gradient)", color: "white", fontSize: 13, lineHeight: 1.5, padding: "9px 13px", borderRadius: "15px 15px 4px 15px", boxShadow: "0 4px 12px -5px rgba(56,65,177,0.4)" }}>
        What&apos;s the late policy for HIST 240?
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginTop: 10 }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: "white", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><ConnGlyph s={15} gid="fmc2"/></span>
        <div style={{ maxWidth: "82%", background: "white", border: "1px solid var(--line)", color: "var(--ink-2)", fontSize: 13, lineHeight: 1.55, padding: "10px 13px", borderRadius: "15px 15px 15px 4px", boxShadow: "0 6px 16px -10px rgba(11,16,32,0.16)" }}>
          From your syllabus: 10% off per day, capped at 5 days. Your next due date is Thursday 11:59 PM.
        </div>
      </div>
      <div className="fm-bob" style={{ marginLeft: 28, marginTop: 10, width: "fit-content", background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: "9px 12px", boxShadow: "0 10px 24px -14px rgba(31,52,128,0.3)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 8.5, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>Sources</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div style={{ display: "flex", gap: 5, marginTop: 6, flexWrap: "wrap" }}>
          {["HIST 240 syllabus", "Course catalog", "LMS data"].map((s) => (
            <span key={s} style={{ fontSize: 10.5, fontWeight: 600, padding: "3.5px 9px", background: "var(--primary-50)", color: "var(--brand-blue)", borderRadius: 999 }}>{s}</span>
          ))}
        </div>
      </div>
    </FmCard>
  );
}


/* a pipeline stat card from the app's Canvas dashboard: big number,
   trend badge, purple gradient sparkline */
const Sparkline = ({ d, gid, w = 96 }) => (
  <svg width={w} height={w * 0.44} viewBox="0 0 112 50" style={{ display: "block" }} preserveAspectRatio="none">
    <defs>
      <linearGradient id={`${gid}f`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="rgba(105,91,215,0.2)"/><stop offset="1" stopColor="rgba(66,77,211,0.2)"/></linearGradient>
      <linearGradient id={`${gid}s`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#695BD7"/><stop offset="1" stopColor="#424DD3"/></linearGradient>
    </defs>
    <path d={`${d} L112 50 L2 50 Z`} fill={`url(#${gid}f)`}/>
    <path d={d} fill="none" stroke={`url(#${gid}s)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StatCard = ({ value, label, change, spark, gid }) => (
  <div style={{ position: "relative", background: "#FDFDFD", border: "1px solid #F1F1F1", borderRadius: 10, padding: "11px 12px", minHeight: 84, overflow: "hidden" }}>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#222222", letterSpacing: "0.01em", lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 10.5, fontWeight: 600, color: "#111827", marginTop: 7 }}>{label}</div>
    <div style={{ fontSize: 9, color: "#6b7280", marginTop: 2 }}>vs last semester</div>
    <span style={{ position: "absolute", right: 10, top: 11, display: "inline-flex", alignItems: "center", gap: 2, fontSize: 9, fontWeight: 600, color: "#666666" }}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      {change}
    </span>
    <span style={{ position: "absolute", right: 6, bottom: 4 }}><Sparkline d={spark} gid={gid} w={168}/></span>
  </div>
);

function IntegrationMock() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <FmCard accent="56,65,177">
      <FmEyebrow>Canvas dashboard · from the app</FmEyebrow>
      <div style={{ display: "grid", gap: 10 }}>
        {/* the headliners: streak + projected GPA, floating like the dashboard */}
        <div className="fm-integ" style={{ alignItems: "stretch" }}>
          <div className="fm-bob" style={{ background: "white", borderRadius: 12, padding: "12px 14px", boxShadow: "0 14px 30px -16px rgba(31,52,128,0.35)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5, color: "#111827" }}>Daily Streak</span>
              <span style={{ fontSize: 9.5, fontWeight: 600, background: "linear-gradient(90deg, #0ea5e9, #3d4ed8)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>See all</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
              <span style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(160,121,235,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src="/app-ui/daily-streak-fire.webp" alt="" width="345" height="300" style={{ width: 34, height: "auto" }} loading="lazy" decoding="async"/>
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "#111827", letterSpacing: "-0.02em" }}>62 Days</span>
            </div>
            <div style={{ display: "flex", gap: 5, marginTop: 9 }}>
              {days.map((d, i) => (
                <span key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flex: 1 }}>
                  <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#4E51D4", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span style={{ fontSize: 7.5, fontWeight: 600, color: "#111827" }}>{d}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="fm-bob" style={{ animationDelay: "1.7s", background: "white", borderRadius: 12, padding: "12px 14px", boxShadow: "0 14px 30px -16px rgba(31,52,128,0.35)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5, color: "#111827" }}>Projected GPA</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em", background: "linear-gradient(92.81deg, #695bd7 -4.09%, #424dd3 109.24%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>3.8</span>
            </div>
            <div style={{ marginTop: 7, height: 6, background: "#EEF0F6", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "95%", height: "100%", borderRadius: 3, background: "linear-gradient(90deg, #695BD7, #424DD3)" }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, color: "#6b7280", marginTop: 3 }}>
              <span>now</span><span>4.0 goal</span>
            </div>
            <div style={{ fontSize: 9.5, color: "#374151", lineHeight: 1.45, marginTop: 7 }}>
              Stay consistent in &ldquo;Advanced Data Structures&rdquo; to hit your 4.0 goal this semester.
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
              <span style={{ fontSize: 9.5, fontWeight: 600, color: "#111827" }}>Top Percentile</span>
              <span style={{ fontSize: 9, padding: "2.5px 6px", color: "#3642B3", border: "1px solid #CAD0F2", borderRadius: 4 }}>Top 5%</span>
            </div>
          </div>
        </div>

        {/* small pipeline stat tiles below */}
        <div className="fm-integ">
          <StatCard value="3.6" label="GPA This Semester" change="5.2%" gid="fmg" spark="M2 46 L20 36 L39 26 L57 16 L75 16 L94 6 L112 6"/>
          <StatCard value="128" label="Total Credit Hours" change="8.5%" gid="fmc" spark="M2 46 L20 41 L39 36 L57 31 L75 26 L94 16 L112 6"/>
        </div>
      </div>
    </FmCard>
  );
}

function WarningMock() {
  return (
    <FmCard accent="43,179,223">
      <FmEyebrow>Early-alert queue</FmEyebrow>
      <div style={{ display: "grid", gap: 8 }}>
        {[
          { img: "/students/maya.png", n: "Maya Reyes", s: "BIO 201 · missed quiz · sentiment ↓", tag: "New", hot: true },
          { img: "/students/jonas.png", n: "Jonas Kim", s: "GPA dip · 3 weeks", tag: "Draft" },
          { img: "/students/anya.png", n: "Anya Patel", s: "Low engagement · CS 110", tag: "Meeting" },
          { img: "/students/ravi.png", n: "Ravi Shah", s: "Aid form overdue", tag: "Routed" },
        ].map((r, i) => (
          <div key={r.n} className={r.hot ? "fm-glowbob" : undefined} style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", background: "white", borderRadius: 12, border: r.hot ? "1px solid rgba(217,119,6,0.35)" : "1px solid var(--line)", boxShadow: r.hot ? undefined : "0 6px 16px -10px rgba(11,16,32,0.16)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: r.hot ? "#B45309" : "var(--ink-3)", minWidth: 13, textAlign: "center", flexShrink: 0 }}>{i + 1}</span>
            <img src={r.img} alt="" width="24" height="24" style={{ borderRadius: "50%", flexShrink: 0, boxShadow: "0 0 0 1px rgba(15,23,42,0.08)" }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12 }}>{r.n}</div>
              <div style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.s}</div>
            </div>
            <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", fontWeight: 700, padding: "3px 8px", borderRadius: 999, flexShrink: 0, color: r.hot ? "#B45309" : "var(--ink-3)", background: r.hot ? "rgba(217,119,6,0.12)" : "var(--bg-alt)", border: r.hot ? "1px solid rgba(217,119,6,0.35)" : "1px solid var(--line)" }}>{r.tag}</span>
          </div>
        ))}
      </div>
    </FmCard>
  );
}

function InsightsMock() {
  return (
    <FmCard accent="124,58,237">
      <FmEyebrow right={<FmLive>3 new</FmLive>}>AI insights</FmEyebrow>
      <div className="fm-bob" style={{ padding: "13px 14px", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eef2ff 100%)", border: "1px solid #c7d2fe", borderRadius: 14, boxShadow: "0 14px 30px -16px rgba(56,65,177,0.4)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg className="fm-pulse" width="11" height="11" viewBox="0 0 20 20"><path d="M10 1l2 5.4L17.4 8 12 10l-2 5.4L8 10 2.6 8 8 6.4z" fill="#5E56E0"/></svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, color: "var(--ink)" }}>14 students in BIO 201 are stalling at ch. 4</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 5, lineHeight: 1.5 }}>Recommended: schedule a group review session. Pattern matches Spring '25 cohort.</div>
        <div style={{ display: "flex", gap: 7, marginTop: 10 }}>
          <span style={{ fontSize: 10.5, fontWeight: 600, padding: "5px 11px", background: "var(--brand-gradient)", color: "white", borderRadius: 7, boxShadow: "0 3px 8px -3px rgba(56,65,177,0.5)" }}>Schedule</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, padding: "5px 11px", background: "white", color: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: 7 }}>Dismiss</span>
        </div>
      </div>
      <div style={{ display: "grid", gap: 7, marginTop: 12 }}>
        {[["Cohort B engagement +12%", "#15803D"], ["Career fair RSVPs spiking", "var(--brand-blue)"]].map(([t, c], i) => (
          <div key={t} className="fm-bob" style={{ animationDelay: `${0.5 + i * 0.8}s`, display: "flex", alignItems: "center", gap: 8, padding: "8px 11px", background: "white", border: "1px solid var(--line)", borderRadius: 10, boxShadow: "0 5px 14px -10px rgba(11,16,32,0.2)", fontSize: 11, color: "var(--ink-2)", fontWeight: 500 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: c }}/>
            {t}
          </div>
        ))}
      </div>
    </FmCard>
  );
}

function InterventionMock() {
  return (
    <FmCard accent="43,179,223">
      <FmEyebrow right={<FmLive>Draft ready</FmLive>}>Draft reply · Maya Reyes</FmEyebrow>
      <div style={{ padding: "13px 14px", background: "white", border: "1px solid var(--line)", borderRadius: 14, boxShadow: "0 10px 26px -14px rgba(11,16,32,0.25)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12 }}>Hi Maya,</div>
        <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 5 }}>
          Saw the BIO 201 quiz didn't go as planned. Totally normal at ch. 4.
          <span className="fm-hl" style={{ padding: "0 3px", borderRadius: 3 }}> Want to grab 15 min Thursday?</span> I have 2pm or 4pm open.
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 5 }}>Best, Dr. Chen<span className="fm-caret" aria-hidden="true"/></div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
        <span className="fm-bob" style={{ flex: 1, fontSize: 11, padding: "8px 12px", background: "var(--brand-gradient)", color: "white", borderRadius: 8, textAlign: "center", fontWeight: 600, boxShadow: "0 6px 16px -6px rgba(56,65,177,0.55)" }}>Send · in your voice</span>
        <span style={{ fontSize: 11, fontWeight: 600, padding: "8px 14px", background: "white", color: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: 8, boxShadow: "0 4px 10px -7px rgba(11,16,32,0.25)" }}>Edit</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 11, fontSize: 10, color: "var(--ink-3)" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        Tuned to your tone from 40+ past replies
      </div>
    </FmCard>
  );
}

function PredictiveMock() {
  return (
    <FmCard accent="217,119,6">
      <FmEyebrow>Overload forecast · next 14 days</FmEyebrow>
      <div style={{ padding: "13px 14px 10px", background: "white", border: "1px solid var(--line)", borderRadius: 14, boxShadow: "0 10px 26px -14px rgba(11,16,32,0.25)" }}>
        <svg viewBox="0 0 240 110" style={{ width: "100%", height: 132 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="pred-now" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(43,179,223,0.3)"/>
              <stop offset="100%" stopColor="rgba(43,179,223,0)"/>
            </linearGradient>
            <linearGradient id="pred-fwd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,138,26,0.3)"/>
              <stop offset="100%" stopColor="rgba(201,138,26,0)"/>
            </linearGradient>
          </defs>
          {[28, 56, 84].map((y) => <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#EEF0F6" strokeWidth="1"/>)}
          <path d="M0 70 L30 65 L60 60 L90 55 L120 50 L120 110 L0 110 Z" fill="url(#pred-now)"/>
          <path d="M0 70 L30 65 L60 60 L90 55 L120 50" fill="none" stroke="var(--brand-blue)" strokeWidth="1.8"/>
          {/* the prediction draws itself in, holds, and re-draws */}
          <g className="fm-clipdraw">
            <path d="M120 50 L150 35 L180 22 L210 18 L240 28 L240 110 L120 110 Z" fill="url(#pred-fwd)"/>
            <path d="M120 50 L150 35 L180 22 L210 18 L240 28" fill="none" stroke="var(--inprogress)" strokeWidth="1.8" strokeDasharray="3 3"/>
            <circle cx="210" cy="18" r="3.5" fill="var(--inprogress)" stroke="white" strokeWidth="1.5"/>
          </g>
          <line x1="120" y1="0" x2="120" y2="110" stroke="var(--ink-4)" strokeWidth="0.5" strokeDasharray="2 2"/>
          <text x="124" y="12" fontSize="8" fontFamily="var(--font-mono)" fill="var(--ink-3)">NOW</text>
        </svg>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 11 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)" }}>
          <span style={{ width: 12, height: 2, background: "var(--brand-blue)", borderRadius: 1 }}/> observed
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-3)" }}>
          <span style={{ width: 12, height: 2, background: "var(--inprogress)", borderRadius: 1 }}/> predicted · midterms
        </span>
        <span className="fm-pulse" style={{ marginLeft: "auto", fontSize: 9.5, fontWeight: 600, color: "#B45309", background: "#FFF4DE", padding: "3px 9px", borderRadius: 999 }}>peak in 9 days</span>
      </div>
    </FmCard>
  );
}

const STUDENT_FEATURES = [
  { n: "01", t: "Answers from your real data", b: "Personalized to your schedule, courses, and goals, grounded in the real data your institution already trusts.",
    bullets: ["Access to all university resources: handbooks, policies, course catalogs", "Answers drawn from your LMS, SIS, and CRM", "Personalized to your schedule, courses, and goals"], Mock: ChatMock },
  { n: "02", t: "Nudges that land, not noise", b: "Quiet, well-timed reminders that meet you where you are, not another inbox to check.",
    bullets: ["Catches a slipping deadline before it becomes a problem", "Reminders for the assignments and dates that matter this week", "A heads-up when an opportunity actually fits your goals", "Study suggestions shaped by how this term is going"], Mock: NudgesCarousel },
  { n: "03", t: "Learns how you actually study", b: "Builds a private, permission-scoped model of how you study best, and adapts everything to fit.",
    bullets: ["Tracks when and how you study best", "Adapts communication style to your needs", "Builds a profile to deliver smarter support", "Privacy-first by design"], Mock: LearningStyleDemo },
  { n: "04", t: "One coach, not a dozen tools", b: "To you it's one coach that already knows your courses, aid, and calendar — not a stack of disconnected apps to chase.",
    bullets: ["One coach connected to your LMS, SIS, and CRM", "Knows your assignments, records, and advising context", "Nothing to re-enter, no apps to chase", "Every campus resource, behind one conversation"], Mock: IntegrationMock },
];

const STAFF_FEATURES = [
  { n: "01", t: "Ranked early-alert queue", b: "The same signals that nudge a slipping student surface on your desk as a ranked queue — highest-need first — so you open the morning knowing exactly who to reach, and why.", bullets: ["The students slipping, ranked by who needs you most", "The same student Nia nudged, now at the top of your list", "Why each one surfaced: tone, attendance, participation, in context", "Built and prioritized for you — nothing new to enter"], Mock: WarningMock },
  { n: "02", t: "The cohort at a glance", b: "See where the whole cohort's momentum is heading, and who needs attention first, with nothing new to enter.", bullets: ["How the cohort's momentum is trending, week over week", "Where engagement is rising, and where it's dropping", "Pulled straight from your LMS, no new data entry", "The students who need attention, surfaced first"], Mock: StaffDashboard },
  { n: "03", t: "The same coach, your side of the desk", b: "Not a separate staff tool — the very coach your students talk to, turned to face you, with their record and the next step already in view.", bullets: ["The same coach the student sees, working from your side", "Their full LMS, SIS, and CRM record, in your context", "Tuned to your documents, calendars, and policies", "Surfaces the next step that fits this student"], Mock: InsightsMock },
  { n: "04", t: "Step in early, recognize the wins", b: "Reach the struggling student and catch the high performer, then see whether your outreach actually landed.", bullets: ["Reach the struggling student before they fall behind", "Catch the high performer worth recognizing", "See whether your outreach actually landed", "Know what happened after you stepped in"], Mock: InterventionMock },
  { n: "05", t: "Know before they do", b: "Patterns across the cohort surface what students who thrive have in common, so you can act sooner.", bullets: ["Know a student is overwhelmed before they say so", "Patterns across the whole cohort, not just one student", "What the students who thrive tend to share", "Decisions grounded in what's happening on campus"], Mock: PredictiveMock },
];

const FeatureRow = ({ f, flip }) => {
  const Mock = f.Mock;
  return (
    <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", padding: "32px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-3)" }}>{f.n}</span>
        <h3 style={{ fontSize: 28, marginTop: 8 }}>{f.t}</h3>
        {f.b && <p style={{ fontSize: 15, marginTop: 10, color: "var(--ink-2)" }}>{f.b}</p>}
        <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 10 }}>
          {f.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{b}</li>
          ))}
        </ul>
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <Mock/>
      </div>
    </div>
  );
};

const PullQuote = ({ quote, sub }) => (
  <div style={{ margin: "64px auto 0", maxWidth: 760, textAlign: "center", padding: "48px 24px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
      <em style={{ fontStyle: "normal" }}>“</em>
      <span className="mf-grad-text">{quote}</span>
      <em style={{ fontStyle: "normal" }}>”</em>
    </div>
    <div style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{sub}</div>
  </div>
);

const ForStudents = () => (
  <section id="for-students" className="mf-section" style={{ scrollMarginTop: 84 }}>
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 720, marginLeft: 0 }}>
        <span className="mf-eyebrow">For Students</span><span className="hnw-status hnw-status-live">Available now</span>
        <h2 style={{ marginTop: 14 }}>A <span className="mf-grad-text">success partner</span>, not a search box.</h2>
        <p>One coach for every student, working from your LMS, SIS, and CRM. Real answers, nudges that land, and support that adapts as the term goes on.</p>
      </div>
      <div style={{ display: "grid", gap: 28 }}>
        {STUDENT_FEATURES.map((f, i) => (
          <FeatureRow key={f.n} f={f} flip={i % 2 === 1}/>
        ))}
      </div>
      <PullQuote quote="One student sees a coach. Every office sees the same student." sub="The same record flows from the student's phone to the staff desk →"/>
    </div>
    <style>{`
      .hnw-status{ display: inline-flex; align-items: center; margin-left: 10px; vertical-align: middle; font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 11px; border-radius: 999px; }
      .hnw-status-live{ background: rgba(13,138,90,0.1); border: 1px solid rgba(13,138,90,0.36); color: var(--success); box-shadow: 0 0 15px -1px rgba(13,138,90,0.45); }
      .hnw-status-dev{ background: rgba(154,106,18,0.1); border: 1px solid rgba(154,106,18,0.36); color: var(--inprogress); box-shadow: 0 0 15px -1px rgba(154,106,18,0.42); }
      .fm-card{
        position: relative;
        overflow: hidden;
        background: #FBFCFE;
        border: 1px solid var(--line);
        border-radius: 18px;
        box-shadow: 0 24px 48px -28px rgba(15,23,42,0.18);
      }
      .fm-glow{
        position: absolute;
        width: 420px; height: 420px;
        left: 50%; top: -240px;
        transform: translateX(-50%);
        border-radius: 50%;
        pointer-events: none;
      }
      .fm-bob{ animation: fm-bob 3.4s ease-in-out infinite; }
      @keyframes fm-bob{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-4px); } }
      .fm-pulse{ animation: fm-pulse 2.4s ease-in-out infinite; }
      @keyframes fm-pulse{ 0%,100%{ opacity: 0.55; } 50%{ opacity: 1; } }
      /* carousel arrows: minimal circles, match the whole-student nav */
      .fm-arr{
        position: relative;
        width: 30px; height: 30px; border-radius: 50%;
        border: 1px solid rgba(11,16,32,0.12);
        background: white; color: var(--ink-2);
        display: inline-flex; align-items: center; justify-content: center;
        cursor: pointer; padding: 0;
        box-shadow: 0 4px 10px -6px rgba(11,16,32,0.25);
        transition: color 150ms ease, border-color 150ms ease;
      }
      /* keep the 30px circle, but extend the clickable area to the 44px minimum */
      .fm-arr::after{ content: ""; position: absolute; top: 50%; left: 50%; width: 44px; height: 44px; transform: translate(-50%, -50%); }
      .fm-arr:hover{ color: var(--ink); border-color: rgba(11,16,32,0.24); }
      /* responsive interiors: large fixed paddings shrink on small screens */
      .mf-stack-sm > *{ min-width: 0; }
      .fm-nc-content{ padding: 16px 130px 92px 18px; }
      .fm-nudgeicon{ width: 126px; }
      .fm-nc-blob{ width: 88px; height: 88px; }
      .fm-prefs{ padding: 28px 28px 30px; }
      .fm-mascot{ height: 158px; width: auto; }
      .fm-integ{ display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      /* staff demos: the hot queue row breathes, the highlight glows,
         the forecast draws itself in and holds */
      .fm-glowpulse{ animation: fm-glowpulse 2.8s ease-in-out infinite; }
      .fm-glowbob{ animation: fm-glowpulse 2.8s ease-in-out infinite, fm-bob 3.4s ease-in-out infinite; }
      @keyframes fm-glowpulse{
        0%, 100%{ box-shadow: 0 6px 16px -10px rgba(217,119,6,0.35); }
        50%{ box-shadow: 0 10px 26px -8px rgba(217,119,6,0.6); }
      }
      .fm-caret{
        display: inline-block; width: 1.5px; height: 11px;
        background: var(--ink-2); margin-left: 2px; vertical-align: -1px;
        animation: fm-caret 1.1s steps(2) infinite;
      }
      @keyframes fm-caret{ 0%{ opacity: 1; } 100%{ opacity: 0; } }
      .fm-hl{ animation: fm-hl 3s ease-in-out infinite; }
      @keyframes fm-hl{
        0%, 100%{ background: rgba(43,179,223,0.14); }
        50%{ background: rgba(43,179,223,0.34); }
      }
      .fm-clipdraw{ animation: fm-clipdraw 7s ease-in-out infinite; }
      @keyframes fm-clipdraw{
        0%{ clip-path: inset(0 100% 0 0); opacity: 1; }
        26%{ clip-path: inset(0 0 0 0); }
        82%{ clip-path: inset(0 0 0 0); opacity: 1; }
        94%, 100%{ clip-path: inset(0 0 0 0); opacity: 0; }
      }
      @media (max-width: 560px){
        .fm-nc-content{ padding: 14px 92px 88px 14px; }
        .fm-nudgeicon{ width: 84px; }
        .fm-nc-blob{ width: 60px; height: 60px; }
        .fm-prefs{ padding: 16px 16px 18px; }
        .fm-mascot{ height: 96px; }
        .fm-integ{ grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: reduce){
        .fm-bob, .fm-pulse, .fm-glowpulse, .fm-glowbob, .fm-hl, .fm-clipdraw, .fm-caret{ animation: none; }
      }
    `}</style>
  </section>
);

const ForStaff = () => (
  <section id="for-staff" className="mf-section alt" style={{ scrollMarginTop: 84 }}>
    <div className="mf-container">
      <div className="mf-section-head" style={{ textAlign: "left", maxWidth: 760, marginLeft: 0 }}>
        <span className="mf-eyebrow">For Staff</span><span className="hnw-status hnw-status-dev">In development</span>
        <h2 style={{ marginTop: 14 }}>See problems <span className="mf-grad-text">before</span> they happen.</h2>
        <p>The same coach, from the staff side of the desk. It turns everyday student activity into early signals: who's slipping, who's thriving, and where to step in first. <strong style={{ color: "var(--inprogress)", fontWeight: 600 }}>Shipping next.</strong></p>
      </div>
      <div style={{ display: "grid", gap: 28 }}>
        {STAFF_FEATURES.map((f, i) => (
          <FeatureRow key={f.n} f={f} flip={i % 2 === 0}/>
        ))}
      </div>
      <PullQuote quote="From reactive to proactive. From guesswork to evidence." sub="The complete picture →"/>
    </div>
  </section>
);

const CompletePicture = () => (
  <section className="mf-section">
    <div className="mf-container">
      <div className="mf-section-head" style={{ marginBottom: 64 }}>
        <span className="mf-eyebrow">The complete picture</span>
        <h2 style={{ marginTop: 14 }}>One closed loop. <em style={{ fontStyle: "normal", color: "var(--ink-3)" }}>Every week.</em></h2>
        <p>Student action becomes data intelligence becomes staff action, and the loop keeps tightening.</p>
      </div>
      <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, position: "relative" }}>
        {[
          { n: "01", t: "Student engages", accent: "43,179,223", color: "var(--brand-cyan)", items: ["Chats with Nia", "Receives nudges", "Completes (or misses) tasks", "Sentiment is tracked"] },
          { n: "02", t: "Data flows", accent: "56,65,177", color: "var(--brand-blue)", items: ["AI agents analyze patterns", "Sentiment shifts detected", "Engagement metrics calculated", "Alerts generated"] },
          { n: "03", t: "Staff acts", accent: "124,58,237", color: "#7c3aed", items: ["Dashboard shows insights", "Early intervention triggered", "Personalized outreach", "Better outcomes"] },
        ].map((s, i) => (
          <div key={s.n} style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", height: "100%", padding: 28, background: "#FBFCFE", border: "1px solid var(--line)", borderRadius: 18, boxShadow: "0 24px 48px -28px rgba(15,23,42,0.16)", boxSizing: "border-box" }}>
              <span style={{ position: "absolute", width: 380, height: 380, left: "50%", top: -210, transform: "translateX(-50%)", borderRadius: "50%", background: `radial-gradient(circle closest-side, rgba(${s.accent},0.13), transparent 100%)`, pointerEvents: "none" }} aria-hidden="true"/>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ padding: "5px 11px", background: "var(--brand-gradient)", color: "white", borderRadius: 999, fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.12em", fontWeight: 600 }}>{s.n}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: s.color, fontWeight: 600 }}>step {i + 1} of 3</span>
                </div>
                <h3 style={{ marginTop: 14, fontSize: 24 }}>{s.t}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 10 }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)" }}><Tick/>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
            {i < 2 && (
              <div style={{ position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "white", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand-blue)", boxShadow: "var(--shadow-sm)", zIndex: 2 }}>
                <ArrowR s={18}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Outcome = () => (
  <section style={{ background: "var(--ink)", color: "white", padding: "96px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }}/>
    <div style={{ position: "absolute", width: 600, height: 600, right: -200, top: -200, background: "radial-gradient(circle, rgba(43,179,223,0.18), transparent 60%)", borderRadius: "50%" }}/>
    <div className="mf-container" style={{ position: "relative", textAlign: "center", maxWidth: 820 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>The outcome</span>
      <h2 style={{ color: "white", margin: "20px 0 18px", fontSize: 52, lineHeight: 1.05 }}>
        Better data. <span className="mf-grad-text">Earlier intervention.</span><br/>Stronger outcomes.
      </h2>
      <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 620, margin: "0 auto 36px", fontSize: 17 }}>
        Most tools only report what already happened. Nia turns real-time student activity and staff insights into early alerts and next-step recommendations, so institutions can intervene sooner and improve student success.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact#form" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "white", color: "var(--ink)", fontWeight: 500, fontSize: 15 }}>Book a pilot demo <ArrowR/></Link>
        <Link href="/security" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: "var(--radius)", background: "transparent", color: "white", fontWeight: 500, fontSize: 15, border: "1px solid rgba(255,255,255,0.3)" }}>See how it&apos;s secured →</Link>
      </div>
    </div>
  </section>
);

export default function HowNiaWorks() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="how"/>
      <main id="main">
      <Hero/>
      <TwoPaths/>
      <WholeStudent/>
      <ForStudents/>
      <ForStaff/>
      <PilotStrip/>
      <CompletePicture/>
      <SecCTA/>
      <div style={{ background: "var(--ink)", padding: "30px 0 8px", textAlign: "center" }}>
        <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.72)", margin: 0 }}>
          Every answer is governed, encrypted, and yours.{" "}
          <Link href="/security" style={{ color: "#8fe0f7", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>See how it&apos;s secured →</Link>
        </p>
      </div>
      </main>
      <Footer/>
    </div>
  );
}
