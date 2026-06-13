"use client";
/* "Two front doors" showcase — Bevel-style: a hoverable accordion on the
   left drives a screen-dominant MacBook on the right. Each item's
   animation plays through, then the showcase advances to the next;
   hovering an item pins it. Every screen is the Nia web app:
   sidebar + content, app indigo, our drawn chrome. */
import { useEffect, useState } from "react";

const DUR = [12500, 11000, 10500, 13000, 9000, 11500];

const ITEMS = [
  {
    t: "A coach in the pocket",
    s: "Personalized momentum plans, course-aware tutoring, and quiet nudges that actually land.",
  },
  {
    t: "A co-pilot at the desk",
    s: "An early-alert queue, live cohort signals, and outreach drafted in your advisor's voice.",
  },
  {
    t: "Proactive nudging",
    s: "Turns LMS, SIS, and CRM signals into timely, evidence-based nudges, not noise.",
  },
  {
    t: "Evidence-based coaching",
    s: "Motivational, scaffolded conversations grounded in growth-mindset and self-determination research.",
  },
  {
    t: "Gets smarter over time",
    s: "Every document, signal, and outcome deepens the context Nia coaches from.",
  },
  {
    t: "Multi-agent orchestration",
    s: "Academic, career, and finance agents hand off mid-conversation. The student never sees the seam.",
  },
];

const NiaGlyph = ({ s = 20, gid }) => (
  <svg width={s} height={s} viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill={`url(#${gid}0)`}/>
    <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill={`url(#${gid}1)`}/>
    <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
    <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    <defs>
      <linearGradient id={`${gid}0`} x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id={`${gid}1`} x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
  </svg>
);

/* Canvas-style LMS mark — red tile, dotted ring */
const CanvasMark = ({ s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden>
    <rect width="40" height="40" rx="9" fill="#E3262E"/>
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <circle key={i} cx={20 + 11 * Math.cos(a)} cy={20 + 11 * Math.sin(a)} r="2.1" fill="white"/>;
    })}
    <circle cx="20" cy="20" r="3.2" fill="white"/>
  </svg>
);

const SideNav = ({ items, footer, gid }) => (
  <aside className="fdw-side">
    <div className="fdw-side-brand"><NiaGlyph s={20} gid={gid}/> <span>Nia</span></div>
    <nav>
      {items.map(([label, badge, on]) => (
        <span key={label} className={`fdw-nav${on ? " on" : ""}`}>
          {label}
          {badge && <em>{badge}</em>}
        </span>
      ))}
    </nav>
    <div className="fdw-side-user">{footer}</div>
  </aside>
);

/* ── 1: the student coach, in the browser ─────────────────────── */
const StudentScreen = () => (
  <div className="fdw-app">
    <SideNav gid="fds1" footer={<><img src="/students/maya.png" alt="" width="20" height="20"/><span>Maya Jordan</span></>}
      items={[["New chat", null, true], ["Reminders", "3"], ["Goals"], ["Canvas dashboard"]]}/>
    <main className="fdw-main">
      <div className="fdw-feed">
        <div className="fdw-date fdw-rise" style={{ animationDelay: "200ms" }}>Today · 8:02 AM</div>
        <div className="fdw-user fdw-rise" style={{ animationDelay: "600ms" }}>What should I focus on this week?</div>
        <div className="fdw-typing"><i/><i/><i/></div>
        <div className="fdw-bot fdw-rise" style={{ animationDelay: "2600ms" }}>
          <div className="fdw-bot-row"><NiaGlyph s={16} gid="fds2"/><span>Quiz reset opens tomorrow, so I rebuilt your week around it:</span></div>
          <div className="fdw-plan">
            {[
              ["Mon", "BIO 201 · ch. 4 reset", "20 min", 4200],
              ["Tue", "CS 110 · pset checkpoint", "15 min", 5100],
              ["Thu", "Advisor check-in", "15 min", 6000],
              ["Fri", "FAFSA signature", "2 min", 6900],
            ].map(([d, t, m, at]) => (
              <div key={t} className="fdw-plan-row">
                <span className="fdw-plan-day">{d}</span>
                <span className="fdw-plan-t">{t}</span>
                <span className="fdw-plan-m">{m}</span>
                <span className="fdw-check fdw-pop" style={{ animationDelay: `${at}ms` }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
              </div>
            ))}
          </div>
          <div className="fdw-chips fdw-rise" style={{ animationDelay: "7800ms" }}>
            <span>Course-aware tutoring</span><span>Always FERPA-scoped</span>
          </div>
        </div>
      </div>
      <div className="fdw-input">Message Nia…<span className="fdw-send">↑</span></div>
      {/* the quiet nudge, scheduled */}
      <div className="fdw-toast fdw-rise" style={{ animationDelay: "9400ms" }}>
        <span className="fdw-toast-ic">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </span>
        <span>
          <strong>Quiet nudge scheduled</strong>
          Tonight 7 PM, your peak focus window
        </span>
      </div>
    </main>
  </div>
);

/* ── 2: the staff co-pilot dashboard ──────────────────────────── */
const KPIS = [
  ["93%", "active momentum plans", 500],
  ["75%", "engaged within 24h", 750],
  ["13", "open alerts", 1000],
];
const QUEUE = [
  { img: "/students/maya.png", n: "Maya Reyes", s: "BIO 201 · missed quiz · sentiment ↓", hot: true, at: 1500 },
  { img: "/students/jonas.png", n: "Jonas Kim", s: "GPA dip · 3 weeks", tag: "Draft reply", at: 1900 },
  { img: "/students/anya.png", n: "Anya Patel", s: "Low engagement · CS 110", tag: "Meeting set", at: 2300 },
];

const StaffScreen = () => (
  <div className="fdw-app">
    <SideNav gid="fds3" footer={<><span className="fdw-dc">DC</span><span>Dr. Chen</span></>}
      items={[["Early-alert queue", "13", true], ["Cohorts"], ["Reports"], ["Audit log"]]}/>
    <main className="fdw-main fdw-main-staff">
      <div className="fdw-staff-head fdw-rise" style={{ animationDelay: "200ms" }}>
        <span className="fdw-staff-title">Early-alert queue</span>
        <span className="fdw-live"><i/>live</span>
      </div>
      <div className="fdw-kpis">
        {KPIS.map(([n, l], i) => (
          <div key={l} className="fdw-kpi fdw-rise" style={{ animationDelay: `${500 + i * 180}ms` }}>
            <strong>{n}</strong><span>{l}</span>
          </div>
        ))}
      </div>
      {/* the students come first */}
      <div className="fdw-queue">
        {QUEUE.map((q) => (
          <div key={q.n} className={`fdw-row fdw-rise${q.hot ? " hot" : ""}`} style={{ animationDelay: `${q.at}ms` }}>
            <img src={q.img} alt="" width="22" height="22"/>
            <span className="fdw-row-main"><strong>{q.n}</strong><span>{q.s}</span></span>
            {q.hot ? (
              <span className="fdw-swap">
                <span className="fdw-swap-a" style={{ animationDelay: "4600ms" }}>Draft ready</span>
                <span className="fdw-swap-b" style={{ animationDelay: "4700ms" }}>✓ Nudged</span>
              </span>
            ) : (
              <span className="fdw-tag">{q.tag}</span>
            )}
          </div>
        ))}
      </div>
      <div className="fdw-audit fdw-rise" style={{ animationDelay: "5600ms" }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0d8a5a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        Maya nudged in your voice · logged for review · 8:07 AM
      </div>
      {/* then the cohort graph, after the work is done */}
      <div className="fdw-chart fdw-rise" style={{ animationDelay: "6600ms" }}>
        <div className="fdw-chart-head"><span>Cohort sentiment · 14 days</span><em>+12%</em></div>
        <svg viewBox="0 0 300 54" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fdw-cf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(61,78,216,0.18)"/><stop offset="1" stopColor="rgba(61,78,216,0)"/></linearGradient>
          </defs>
          <path className="fdw-chart-fill" d="M0 38 L25 36 L50 40 L75 33 L100 28 L125 26 L150 21 L175 23 L200 17 L225 13 L250 14 L275 9 L300 8 L300 54 L0 54 Z" fill="url(#fdw-cf)"/>
          <path className="fdw-chart-line" d="M0 38 L25 36 L50 40 L75 33 L100 28 L125 26 L150 21 L175 23 L200 17 L225 13 L250 14 L275 9 L300 8" fill="none" stroke="#3d4ed8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </main>
  </div>
);

/* ── 3: proactive nudging — signal in, rich notification out ──── */
const NudgeScreen = () => (
  <div className="fdw-app">
    <SideNav gid="fdn1" footer={<><img src="/students/maya.png" alt="" width="20" height="20"/><span>Maya Jordan</span></>}
      items={[["New chat"], ["Reminders", "3", true], ["Goals"], ["Canvas dashboard"]]}/>
    <main className="fdw-main fdw-main-pad">
      <div className="fdw-staff-head fdw-rise" style={{ animationDelay: "200ms" }}>
        <span className="fdw-staff-title">Nudge engine</span>
        <span className="fdw-live"><i/>live</span>
      </div>
      <div className="fdw-sig fdw-rise" style={{ animationDelay: "600ms" }}>
        <CanvasMark s={16}/>
        <span>Signal · BIO 201 quiz 4 missed · 8:02 AM</span>
      </div>
      <div className="fdw-think fdw-rise" style={{ animationDelay: "1600ms" }}>
        <NiaGlyph s={16} gid="fdn2"/>
        <span className="fdw-think-chip" style={{ animationDelay: "2200ms" }}>timing · 8:05 AM peak</span>
        <span className="fdw-think-chip" style={{ animationDelay: "2900ms" }}>supportive tone</span>
        <span className="fdw-think-chip" style={{ animationDelay: "3600ms" }}>push + in-app</span>
      </div>
      <div className="fdw-audit fdw-audit-flow fdw-rise" style={{ animationDelay: "7200ms" }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0d8a5a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        Delivered 8:05 AM · Maya&apos;s peak focus window · logged
      </div>
      {/* the nudge — the app's exact notification drawer, rising from the bottom.
          Stacked card behind, title + time + X on top, white action + snooze-clock,
          category art off the corner, carousel chrome beneath. */}
      <div className="fdw-ndrawer">
        <div className="fdw-ncard">
          <span className="fdw-ncard-stack"/>
          <div className="fdw-ncard-face">
            <div className="fdw-ncard-top">
              <h3 className="fdw-ncard-h">Reset before Friday&apos;s BIO 201 quiz</h3>
              <span className="fdw-ncard-meta">
                <em>8:05 am</em>
                <span className="fdw-ncard-x">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </span>
              </span>
            </div>
            <div className="fdw-ncard-p">A <b>10-minute reset</b> tonight keeps you on track. Your quiz reopens tomorrow at <b>9 AM</b>.</div>
            <div className="fdw-ncard-row">
              <button className="fdw-ncard-cta" type="button">
                Start now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </button>
              {/* mark-done (the app's Check action) + snooze */}
              <span className="fdw-ncard-ico fdw-ncard-done" aria-label="Mark as done">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span className="fdw-ncard-ico" aria-label="Snooze">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20.9A8 8 0 1 1 19.5 13"/><path d="M12 8v4.5l2.6 1.5"/><path d="M16.5 17.5h3.5l-3.5 3.5h3.5"/></svg>
              </span>
            </div>
            <img src="/notif-clock.png" alt="" className="fdw-ncard-cal" width="64" height="91"/>
          </div>
        </div>
        {/* notification-drawer carousel chrome */}
        <div className="fdw-nchrome">
          <span className="fdw-nprev">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d2233" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>
          </span>
          <span className="fdw-ndots"><i/><i className="on"/><i/><i/></span>
          <span className="fdw-nnext">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d2233" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </div>
    </main>
  </div>
);

/* ── 4: evidence-based coaching — the scaffold made visible ───── */
const RAIL = [
  ["Chunk the task", "Break the wall into 3 small wins", "Yeager ’19", 850, 5300],
  ["Attribute to effort", "Credit the strategy, not the talent", "Dweck ’06", 5550, 9600],
  ["Commit & follow up", "Lock the next step, schedule the nudge", "SDT ’00", 9750, 12100],
];
const WinRow = ({ n, t, m, at, doneAt }) => (
  <div className="fdw-win fdw-rise" style={{ animationDelay: `${at}ms` }}>
    <span className="fdw-winck">
      <span className="fdw-winck-ring"/>
      <span className="fdw-winck-fill" style={{ animationDelay: `${doneAt}ms` }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
    </span>
    <span className="fdw-win-t">Win #{n} · {t}</span>
    <span className="fdw-win-m">{m}</span>
  </div>
);

const EvidenceScreen = () => (
  <div className="fdw-app">
    <SideNav gid="fde1" footer={<><img src="/students/maya.png" alt="" width="20" height="20"/><span>Maya Jordan</span></>}
      items={[["New chat", null, true], ["Reminders", "3"], ["Goals"], ["Canvas dashboard"]]}/>
    <main className="fdw-main fdw-main-evidence">
      <div className="fdw-ethread">
        <div className="fdw-feed fdw-feed-tight">
          <span className="fdw-ebadge fdw-rise" style={{ animationDelay: "250ms" }}>scaffold 1 · chunk the task</span>
          <div className="fdw-ebub fdw-rise" style={{ animationDelay: "300ms" }}>That section trips up most students, so let&apos;s break it into 3 small wins.</div>
          <div className="fdw-user fdw-rise" style={{ animationDelay: "1600ms" }}>ugh ok, where do I start?</div>
          <WinRow n="1" t="Krebs cycle basics" m="3 min" at={2800} doneAt={4600}/>
          <span className="fdw-ebadge fdw-rise" style={{ animationDelay: "5550ms" }}>scaffold 2 · attribute to effort</span>
          <div className="fdw-ebub fdw-rise" style={{ animationDelay: "5600ms" }}>Because you started with the hardest one. Win #2 is even smaller.</div>
          <WinRow n="2" t="Electron transport" m="4 min" at={7200} doneAt={9000}/>
          <span className="fdw-ebadge fdw-rise" style={{ animationDelay: "9750ms" }}>scaffold 3 · commit &amp; follow up</span>
          <div className="fdw-ebub fdw-rise" style={{ animationDelay: "9800ms" }}>Two for two. Last one tonight after practice. I&apos;ll nudge you.</div>
          <div className="fdw-user fdw-rise" style={{ animationDelay: "11200ms" }}>deal 🤝</div>
        </div>
        <div className="fdw-input">Message Nia…<span className="fdw-send">↑</span></div>
      </div>
      {/* the scaffold rail — the evidence-based method, made visible */}
      <aside className="fdw-erail">
        <span className="fdw-erail-h"><i/>Coaching scaffold</span>
        <span className="fdw-erail-line"/>
        {RAIL.map(([t, why, cite, at, doneAt], i) => (
          <span key={t} className="fdw-estep" style={{ animationDelay: `${at}ms` }}>
            <span className="fdw-estep-n">
              <em>{i + 1}</em>
              <span className="fdw-estep-ck" style={{ animationDelay: `${doneAt}ms` }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
            </span>
            <span className="fdw-estep-body">
              <span className="fdw-estep-t">{t}</span>
              <span className="fdw-estep-w">{why}</span>
              <span className="fdw-estep-c">{cite}</span>
            </span>
          </span>
        ))}
      </aside>
    </main>
  </div>
);

/* ── 5: gets smarter — a sunrise: data arcs over Maya, Nia's depth rises ── */
const PROFILE = [
  { k: "resume", label: "Résumé", x: 13, y: 33, at: 900, line: 700 },
  { k: "lms data", label: "LMS data", x: 25, y: 16, at: 1500, line: 1300 },
  { k: "sis data", label: "SIS data", x: 42, y: 9, at: 2100, line: 1900 },
  { k: "university resources", label: "Resources", x: 58, y: 9, at: 2700, line: 2500 },
  { k: "degree audit", label: "Degree audit", x: 75, y: 16, at: 3300, line: 3100 },
  { k: "advising notes", label: "Advising", x: 87, y: 33, at: 3900, line: 3700 },
];
const GDELTAS = [
  ["+6%", 1500, 2100],
  ["+13%", 2100, 2700],
  ["+19%", 2700, 3300],
  ["+27%", 3300, 3900],
  ["+34%", 3900, null],
];
const CX = 50, CY = 47;
const SmartScreen = () => (
  <div className="fdw-app">
    <SideNav gid="fdg1" footer={<><span className="fdw-dc">DC</span><span>Dr. Chen</span></>}
      items={[["Student profile", null, true], ["Sources", "6"], ["Outcomes"], ["Audit log"]]}/>
    <main className="fdw-main fdw-main-smart">
      <div className="fdw-staff-head fdw-rise" style={{ animationDelay: "200ms" }}>
        <span className="fdw-staff-title">Maya&apos;s context</span>
        <span className="fdw-live"><i/>live</span>
      </div>
      <div className="fdw-constel">
        {/* rays from each source down into Maya (the sun) */}
        <svg className="fdw-wires" viewBox="0 0 100 100" preserveAspectRatio="none">
          {PROFILE.map((p) => (
            <line key={p.k} x1={CX} y1={CY} x2={p.x} y2={p.y} pathLength="1"
              stroke="rgba(22,163,74,0.45)" strokeWidth="1.3" vectorEffect="non-scaling-stroke"
              className="fdw-wire" style={{ animationDelay: `${p.line}ms` }}/>
          ))}
        </svg>
        {/* the data arcs over the top, a sunrise */}
        {PROFILE.map((p, i) => (
          <div key={p.k} className={`fdw-ptile fdw-drop${i % 2 ? " alt" : ""}`}
            style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${p.at}ms` }}>
            {p.k === "resume" ? (
              <span className="fdw-ptile-doc">
                <img src="/app-shots/resume.webp" alt=""/>
                <em className="fdw-pdf">PDF</em>
              </span>
            ) : (
              <span className="fdw-ptile-ic"><img src={`/inside-out/${p.k}.webp`} alt="" width="30" height="30"/></span>
            )}
            <span className="fdw-ptile-l">{p.label}</span>
          </div>
        ))}
        {/* Maya at the center, the sun */}
        <div className="fdw-centre">
          <span className="fdw-centre-halo"/>
          <img src="/students/maya.png" alt=""/>
          <span className="fdw-centre-n">Maya Jordan</span>
        </div>
        {/* and Nia's understanding rises over time */}
        <div className="fdw-grow">
          <div className="fdw-grow-head">
            <span className="fdw-grow-brand"><NiaGlyph s={13} gid="fdg2"/> Nia · context depth</span>
            <span className="fdw-gdelta">
              {GDELTAS.map(([v, inAt, outAt]) => (
                <span key={v} className="fdw-gdelta-v" style={{
                  animation: outAt
                    ? `fdw-on 280ms ease ${inAt}ms both, fdw-off 220ms ease ${outAt}ms both`
                    : `fdw-on 280ms ease ${inAt}ms both`,
                }}>{v}</span>
              ))}
            </span>
          </div>
          <svg className="fdw-grow-svg" viewBox="0 0 300 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="fdw-gf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(22,163,74,0.28)"/><stop offset="1" stopColor="rgba(22,163,74,0)"/></linearGradient>
            </defs>
            <path className="fdw-garea" d="M0 56 L50 52 L100 45 L150 37 L200 27 L250 16 L300 6 L300 64 L0 64 Z" fill="url(#fdw-gf)"/>
            <path className="fdw-gline" d="M0 56 L50 52 L100 45 L150 37 L200 27 L250 16 L300 6" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" pathLength="100"/>
            <circle className="fdw-gdot" cx="300" cy="6" r="3.4" fill="#16A34A"/>
          </svg>
        </div>
      </div>
    </main>
  </div>
);

/* ── 6: multi-agent orchestration — five agents, one routes, tools fire ─ */
const AGENTS = [
  { id: "academic", n: "Academic", okAt: 3000 },
  { id: "career", n: "Career", star: true },
  { id: "finance", n: "Finance", okAt: 3400 },
  { id: "wellness", n: "Wellness", okAt: 3800 },
  { id: "admin", n: "Records", okAt: 4200 },
];
const CAREER_TOOLS = [
  { t: "Résumé · profile", at: 6300, icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></> },
  { t: "Handshake · job boards", at: 6700, icon: <><path d="M11 17a2 2 0 0 0 2 2 2 2 0 0 0 2-2"/><path d="M9 11l2.5 2.5a2 2 0 0 0 3 0L20 8"/><path d="M3 12l3-3 4 4"/></> },
  { t: "Major match", at: 7100, icon: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></> },
];
const MultiScreen = () => (
  <div className="fdw-app">
    <aside className="fdw-side">
      <div className="fdw-side-brand"><NiaGlyph s={20} gid="fdm1"/> <span>Nia</span></div>
      <span className="fdw-arail-h">Agents · 5</span>
      <div className="fdw-arail">
        {AGENTS.map((a) => (
          <span key={a.id} className={`fdw-agent${a.star ? " star" : ""}`}>
            <img src={`/agents/${a.id}-badge.svg`} alt="" width="26" height="26"/>
            <span>{a.n}</span>
            {a.star ? (
              <em className="fdw-ag-route fdw-pop" style={{ animationDelay: "5400ms" }}>routing</em>
            ) : (
              <em className="fdw-ag-ok fdw-pop" style={{ animationDelay: `${a.okAt}ms` }}>✓</em>
            )}
          </span>
        ))}
      </div>
      <div className="fdw-side-user">Orchestrator · one audit log</div>
    </aside>
    <main className="fdw-main">
      <div className="fdw-feed">
        <div className="fdw-date fdw-rise" style={{ animationDelay: "200ms" }}>Same thread · 2:14 PM</div>
        <div className="fdw-user fdw-rise" style={{ animationDelay: "500ms" }}>What about internships?</div>
        {/* all five convene in-thread, then Career takes it */}
        <div className="fdw-aens">
          {AGENTS.map((a, i) => (
            <span key={a.id} className={`fdw-aen${a.star ? " star" : ""}`}
              style={{ animation: `fdw-pop 360ms cubic-bezier(0.2,1.4,0.4,1) ${1400 + i * 180}ms both, ${a.star ? "fdw-aen-lift" : "fdw-aen-dim"} 460ms cubic-bezier(0.2,1.2,0.4,1) 5400ms forwards` }}>
              <span className="fdw-aen-img"><img src={`/agents/${a.id}-badge.svg`} alt="" width="46" height="46"/></span>
              <span className="fdw-aen-l">{a.n}</span>
            </span>
          ))}
        </div>
        <div className="fdw-route fdw-pop" style={{ animationDelay: "5700ms" }}>→ routed to Career agent</div>
        {/* the Career agent's tools light up */}
        <div className="fdw-tools">
          {CAREER_TOOLS.map((t) => (
            <span key={t.t} className="fdw-tool fdw-pop" style={{ animationDelay: `${t.at}ms` }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
              {t.t}
            </span>
          ))}
        </div>
        <div className="fdw-handoff fdw-rise" style={{ animationDelay: "7700ms" }}>
          <span className="fdw-handoff-tag">Career</span>
          Three internships match your major and schedule. Intro drafts are ready for review.
        </div>
        <div className="fdw-audit fdw-rise" style={{ animationDelay: "9400ms" }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0d8a5a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Same thread · same audit log · zero seams
        </div>
      </div>
      <div className="fdw-input">Message Nia…<span className="fdw-send">↑</span></div>
    </main>
  </div>
);

const SCREENS = [StudentScreen, StaffScreen, NudgeScreen, EvidenceScreen, SmartScreen, MultiScreen];

export default function FrontDoorsShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % ITEMS.length);
      setRun((r) => r + 1);
    }, DUR[active]);
    return () => clearTimeout(t);
  }, [active, paused, run]);

  const select = (i) => {
    if (i !== active) {
      setActive(i);
      setRun((r) => r + 1);
    }
  };

  const Screen = SCREENS[active];

  return (
    <div className="fdw-grid">
      <div className="fdw-list" onMouseLeave={() => { setPaused(false); setRun((r) => r + 1); }}>
        {ITEMS.map((it, i) => (
          <button
            key={it.t}
            type="button"
            className={`fdw-item${i === active ? " on" : ""}`}
            onMouseEnter={() => { setPaused(true); select(i); }}
            onClick={() => select(i)}
          >
            <span className="fdw-item-t">{it.t}</span>
            <span className="fdw-item-sub"><span className="fdw-item-s">{it.s}</span></span>
            {i === active && (
              <span className="fdw-prog">
                <span key={`${active}-${run}`} style={{ animationDuration: `${DUR[active]}ms`, animationPlayState: paused ? "paused" : "running" }}/>
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="fdw-stage">
        <div className="fdw-mac">
          <div className="fdw-lid">
            <div className="fdw-screen">
              <span className="fdw-notch"><i/></span>
              <div className="fdw-chrome">
                <span className="fdw-dots"><i/><i/><i/></span>
                <span className="fdw-url">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#9aa0b4" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  nia.streaque.app
                </span>
              </div>
              <div className="fdw-screen-body" key={`${active}-${run}`}>
                <Screen/>
              </div>
              <span className="fdw-mbp">MacBook Pro</span>
            </div>
          </div>
          <div className="fdw-base"><span className="fdw-groove"/></div>
          <div className="fdw-floor"/>
        </div>
      </div>

      <style>{`
        .fdw-grid{
          display: grid;
          grid-template-columns: 0.42fr 0.58fr;
          gap: 44px;
          align-items: center;
        }
        .fdw-grid > *{ min-width: 0; }
        /* ── the accordion list ── */
        .fdw-list{ display: grid; gap: 10px; }
        .fdw-item{
          position: relative; overflow: hidden;
          text-align: left; cursor: pointer;
          font-family: inherit;
          background: rgba(105,91,215,0.06);
          border: 1px solid rgba(105,91,215,0.09);
          border-radius: 16px;
          padding: 15px 22px 17px;
          transition: background 220ms ease, box-shadow 220ms ease, border-color 220ms ease, padding 280ms ease;
        }
        .fdw-item:hover{ background: rgba(105,91,215,0.11); }
        .fdw-item.on{
          background: white;
          border-color: var(--line);
          box-shadow: 0 22px 44px -24px rgba(15,23,42,0.22);
          padding: 18px 22px 21px;
        }
        .fdw-item-t{
          display: block;
          font-family: var(--font-display); font-weight: 600; font-size: 20px;
          letter-spacing: -0.02em; color: var(--ink-2);
          transition: color 220ms ease;
        }
        .fdw-item.on .fdw-item-t{ color: var(--ink); }
        .fdw-item-sub{
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .fdw-item-sub > span{ overflow: hidden; min-height: 0; }
        .fdw-item.on .fdw-item-sub{ grid-template-rows: 1fr; }
        .fdw-item-s{ display: block; padding-top: 6px; font-size: 13.5px; line-height: 1.55; color: var(--ink-3); }
        .fdw-prog{
          position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: rgba(11,16,32,0.06);
        }
        .fdw-prog > span{
          display: block; height: 100%; width: 100%;
          background: var(--brand-gradient);
          transform-origin: left;
          animation-name: fdw-prog; animation-timing-function: linear; animation-fill-mode: both;
        }
        @keyframes fdw-prog{ from{ transform: scaleX(0); } to{ transform: scaleX(1); } }

        /* ── the MacBook: screen-first, shallow deck ── */
        .fdw-mac{ width: 100%; max-width: 100%; }
        .fdw-lid{
          background: linear-gradient(180deg, #EDF0F4 0%, #C8CDD6 100%);
          border-radius: 15px 15px 0 0;
          padding: 3px 3px 0;
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 36px 64px -30px rgba(11,16,32,0.42);
        }
        .fdw-screen{
          position: relative;
          background: #05070D;
          border-radius: 13px 13px 0 0;
          padding: 12px 10px 16px;
          overflow: hidden;
        }
        /* camera notch, in the bezel, dipping into the chrome */
        .fdw-notch{
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 64px; height: 17px;
          background: #05070D;
          border-radius: 0 0 8px 8px;
          z-index: 5;
          display: flex; align-items: flex-end; justify-content: center;
          padding-bottom: 4px;
        }
        .fdw-notch i{
          width: 4px; height: 4px; border-radius: 50%;
          background: #101B30; box-shadow: 0 0 2px rgba(64,120,210,0.55);
        }
        /* glass glare across the panel */
        .fdw-screen::after{
          content: ""; position: absolute; inset: 0; z-index: 4;
          background: linear-gradient(112deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 24%, transparent 40%);
          border-radius: inherit;
          pointer-events: none;
        }
        .fdw-mbp{
          position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%);
          font-size: 6px; letter-spacing: 0.14em; color: #59606E;
          white-space: nowrap;
        }
        .fdw-chrome{
          display: flex; align-items: center; gap: 10px;
          padding: 6px 10px;
          background: #F2F4F8;
          border-radius: 8px 8px 0 0;
          border-bottom: 1px solid #E3E6EE;
        }
        .fdw-dots{ display: inline-flex; gap: 5px; }
        .fdw-dots i{ width: 8px; height: 8px; border-radius: 50%; }
        .fdw-dots i:nth-child(1){ background: #FF5F57; }
        .fdw-dots i:nth-child(2){ background: #FEBC2E; }
        .fdw-dots i:nth-child(3){ background: #28C840; }
        .fdw-url{
          flex: 1; max-width: 260px; margin: 0 auto;
          display: inline-flex; align-items: center; justify-content: center; gap: 4px;
          font-size: 9.5px; color: var(--ink-3);
          background: white; border: 1px solid #E3E6EE; border-radius: 6px;
          padding: 3px 0;
        }
        .fdw-screen-body{ background: white; height: 392px; }
        .fdw-base{
          position: relative;
          width: 113%; margin-left: -6.5%;
          height: 14px;
          background: linear-gradient(180deg, #F4F6F9 0%, #D7DBE2 28%, #B6BDC9 70%, #848D9D 100%);
          border-radius: 2px 2px 14px 14px;
          clip-path: polygon(1% 0, 99% 0, 100% 100%, 0 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 3px rgba(11,16,32,0.18);
        }
        .fdw-groove{
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 78px; height: 6px;
          background: linear-gradient(180deg, #9AA2B1, #C3C9D3);
          border-radius: 0 0 9px 9px;
          box-shadow: inset 0 1px 2px rgba(11,16,32,0.25);
        }
        .fdw-floor{
          height: 16px; width: 86%; margin: 2px auto 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(11,16,32,0.30), transparent 65%);
          filter: blur(5px);
        }

        /* ── shared app layout on screen ── */
        .fdw-app{ display: flex; height: 100%; }
        .fdw-side{
          width: 138px; flex-shrink: 0;
          background: #F7F8FC; border-right: 1px solid #ECEEF5;
          display: flex; flex-direction: column;
          padding: 10px 8px;
        }
        .fdw-side-brand{
          display: flex; align-items: center; gap: 6px;
          font-family: var(--font-display); font-weight: 700; font-size: 12px; color: var(--ink);
          padding: 2px 6px 10px;
        }
        .fdw-side nav{ display: grid; gap: 2px; }
        .fdw-nav{
          display: flex; align-items: center; justify-content: space-between;
          font-size: 10px; font-weight: 500; color: var(--ink-3);
          padding: 6px 8px; border-radius: 7px;
        }
        .fdw-nav.on{ background: #ECEDFB; color: #3d4ed8; font-weight: 600; }
        .fdw-nav em{
          font-style: normal; font-size: 8px; font-weight: 700;
          background: #3d4ed8; color: white; border-radius: 999px; padding: 1px 5px;
        }
        .fdw-side-user{
          margin-top: auto;
          display: flex; align-items: center; gap: 6px;
          font-size: 9.5px; font-weight: 600; color: var(--ink-2);
          padding: 6px;
          border-top: 1px solid #ECEEF5;
        }
        .fdw-side-user img{ border-radius: 50%; }
        .fdw-dc{
          width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
          background: var(--brand-gradient); color: white;
          font-size: 7.5px; font-weight: 700;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .fdw-main{ flex: 1; min-width: 0; position: relative; display: flex; flex-direction: column; overflow: hidden; }
        .fdw-main-pad{ padding: 12px 16px; gap: 10px; }

        /* ── student chat ── */
        .fdw-feed{ flex: 1; padding: 14px 18px 8px; display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
        .fdw-date{ align-self: center; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.12em; text-transform: uppercase; color: #9aa0b4; }
        .fdw-rise{ opacity: 0; animation: fdw-rise 420ms cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes fdw-rise{ from{ opacity: 0; transform: translateY(9px); } to{ opacity: 1; transform: none; } }
        .fdw-pop{ opacity: 0; animation: fdw-pop 280ms cubic-bezier(0.2,1.4,0.4,1) both; }
        @keyframes fdw-pop{ from{ opacity: 0; transform: scale(0.4); } to{ opacity: 1; transform: scale(1); } }
        @keyframes fdw-on{ to{ opacity: 1; } }
        @keyframes fdw-off{ to{ opacity: 0; visibility: hidden; } }
        .fdw-user{
          align-self: flex-end; max-width: 62%;
          background: linear-gradient(90deg, #0ea5e9, #3d4ed8); color: white;
          font-size: 11.5px; line-height: 1.45; padding: 8px 12px;
          border-radius: 13px 13px 4px 13px;
          box-shadow: 0 4px 10px -4px rgba(61,78,216,0.45);
        }
        .fdw-typing{
          display: inline-flex; gap: 4px; padding: 8px 12px;
          background: #F2F4F9; border-radius: 13px 13px 13px 4px; width: fit-content;
          opacity: 0;
          animation: fdw-rise 420ms cubic-bezier(0.16,1,0.3,1) 1400ms both, fdw-gone 220ms ease 2450ms both;
        }
        .fdw-typing i{ width: 5px; height: 5px; border-radius: 50%; background: #A7ADC2; animation: fdw-blink 1.1s ease-in-out infinite; }
        .fdw-typing i:nth-child(2){ animation-delay: 0.18s; }
        .fdw-typing i:nth-child(3){ animation-delay: 0.36s; }
        @keyframes fdw-blink{ 0%,100%{ opacity: 0.35; } 50%{ opacity: 1; } }
        .fdw-bot{ max-width: 88%; }
        .fdw-bot-row{ display: flex; align-items: flex-start; gap: 7px; font-size: 11.5px; line-height: 1.5; color: var(--ink-2); }
        .fdw-plan{
          margin: 9px 0 0 23px;
          background: white; border: 1px solid #E3E6EE; border-radius: 12px;
          padding: 4px 0;
          box-shadow: 0 8px 20px -12px rgba(31,52,128,0.25);
        }
        .fdw-plan-row{
          display: flex; align-items: center; gap: 9px;
          padding: 6px 12px;
        }
        .fdw-plan-row + .fdw-plan-row{ border-top: 1px solid #F0F2F7; }
        .fdw-plan-day{ font-family: var(--font-mono); font-size: 8.5px; color: #9aa0b4; width: 24px; flex-shrink: 0; }
        .fdw-plan-t{ flex: 1; font-size: 10.5px; font-weight: 600; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .fdw-plan-m{ font-family: var(--font-mono); font-size: 8px; color: #3d4ed8; background: #ECEDFB; border-radius: 999px; padding: 2px 7px; flex-shrink: 0; }
        .fdw-check{
          width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0;
          background: #16A34A; display: inline-flex; align-items: center; justify-content: center;
        }
        .fdw-chips{ display: flex; gap: 6px; margin: 9px 0 0 23px; }
        .fdw-chips span{
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.05em;
          color: #3d4ed8; background: #ECEDFB; border-radius: 999px; padding: 3.5px 9px;
        }
        .fdw-input{
          margin: 0 18px 12px; padding: 8px 12px;
          display: flex; align-items: center; justify-content: space-between;
          background: #F5F6FA; border: 1px solid #E3E6EE; border-radius: 11px;
          font-size: 10.5px; color: #9aa0b4;
          flex-shrink: 0;
        }
        .fdw-send{
          width: 18px; height: 18px; border-radius: 6px;
          background: linear-gradient(92.81deg, #695bd7, #424dd3); color: white;
          font-size: 10px; display: inline-flex; align-items: center; justify-content: center;
        }
        .fdw-toast{
          position: absolute; top: 10px; right: 12px;
          display: flex; align-items: flex-start; gap: 8px;
          background: white; border: 1px solid #E3E6EE; border-radius: 11px;
          padding: 8px 11px; max-width: 215px;
          box-shadow: 0 14px 30px -12px rgba(31,52,128,0.35);
        }
        .fdw-toast-ic{
          width: 22px; height: 22px; border-radius: 7px; flex-shrink: 0;
          background: #ECEDFB; display: inline-flex; align-items: center; justify-content: center;
        }
        .fdw-toast strong{ display: block; font-size: 10px; color: var(--ink); }
        .fdw-toast span span, .fdw-toast > span:last-child{ font-size: 9px; color: var(--ink-3); line-height: 1.4; }

        /* ── staff dashboard ── */
        .fdw-main-staff{ padding: 12px 16px; gap: 9px; }
        .fdw-staff-head{ display: flex; align-items: center; justify-content: space-between; }
        .fdw-staff-title{ font-family: var(--font-display); font-weight: 700; font-size: 14px; color: var(--ink); }
        .fdw-live{
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--success);
        }
        .fdw-live i{ width: 6px; height: 6px; border-radius: 50%; background: var(--success); animation: fdw-blink 2.2s ease-in-out infinite; }
        .fdw-kpis{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .fdw-kpi{
          background: white; border: 1px solid #E3E6EE; border-radius: 10px;
          padding: 8px 10px;
          box-shadow: 0 6px 14px -10px rgba(31,52,128,0.25);
        }
        .fdw-kpi strong{
          display: block; font-family: var(--font-display); font-size: 17px; letter-spacing: -0.02em;
          background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .fdw-kpi span{ display: block; font-size: 8.5px; color: var(--ink-3); margin-top: 2px; }
        .fdw-chart{
          background: white; border: 1px solid #E3E6EE; border-radius: 10px;
          padding: 8px 10px 4px;
          box-shadow: 0 6px 14px -10px rgba(31,52,128,0.25);
        }
        .fdw-chart-head{ display: flex; justify-content: space-between; align-items: center; }
        .fdw-chart-head span{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
        .fdw-chart-head em{ font-style: normal; font-size: 10px; font-weight: 700; color: #15803D; }
        .fdw-chart svg{ display: block; width: 100%; height: 44px; margin-top: 4px; }
        .fdw-chart-line{
          stroke-dasharray: 330; stroke-dashoffset: 330;
          animation: fdw-draw 1600ms cubic-bezier(0.4,0,0.2,1) 7000ms forwards;
        }
        @keyframes fdw-draw{ to{ stroke-dashoffset: 0; } }
        .fdw-chart-fill{ opacity: 0; animation: fdw-fade 700ms ease 8000ms forwards; }
        @keyframes fdw-fade{ to{ opacity: 1; } }
        .fdw-queue{ display: grid; gap: 6px; }
        .fdw-row{
          display: flex; align-items: center; gap: 8px;
          background: white; border: 1px solid #E3E6EE; border-radius: 10px;
          padding: 6px 10px;
          box-shadow: 0 4px 10px -8px rgba(31,52,128,0.3);
        }
        .fdw-row.hot{ border-color: rgba(217,119,6,0.4); background: #FFFCF5; }
        .fdw-row img{ border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 0 1px rgba(15,23,42,0.08); }
        .fdw-row-main{ flex: 1; min-width: 0; display: grid; line-height: 1.3; }
        .fdw-row-main strong{ font-size: 10.5px; color: var(--ink); }
        .fdw-row-main span{ font-size: 8.5px; color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .fdw-tag, .fdw-swap-a, .fdw-swap-b{
          font-family: var(--font-mono); font-size: 8px; font-weight: 600; white-space: nowrap;
          border-radius: 999px; padding: 3px 8px;
        }
        .fdw-tag{ color: var(--ink-3); background: var(--bg-alt); border: 1px solid var(--line); }
        .fdw-swap{ position: relative; display: inline-flex; flex-shrink: 0; }
        .fdw-swap-a{
          color: #B45309; background: rgba(217,119,6,0.1); border: 1px solid rgba(217,119,6,0.35);
          animation: fdw-gone 240ms ease both;
        }
        @keyframes fdw-gone{ from{ opacity: 1; } to{ opacity: 0; visibility: hidden; } }
        .fdw-swap-b{
          position: absolute; right: 0; top: 0;
          color: var(--success); background: rgba(13,138,90,0.08); border: 1px solid rgba(13,138,90,0.3);
          opacity: 0; animation: fdw-pop 300ms cubic-bezier(0.2,1.4,0.4,1) both;
        }
        .fdw-audit{
          display: flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 8.5px; color: var(--ink-3);
          background: rgba(13,138,90,0.05); border: 1px solid rgba(13,138,90,0.18);
          border-radius: 8px; padding: 6px 10px;
          margin-top: auto;
        }

        /* ── nudge engine ── */
        .fdw-sig{
          display: flex; align-items: center; gap: 7px; width: fit-content;
          font-family: var(--font-mono); font-size: 9px; color: var(--ink-2);
          background: rgba(227,38,46,0.05); border: 1px solid rgba(227,38,46,0.22);
          border-radius: 9px; padding: 6px 10px;
        }
        .fdw-think{ display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .fdw-think-chip{
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.04em;
          color: #3d4ed8; background: #ECEDFB; border-radius: 999px; padding: 3px 8px;
          opacity: 0; animation: fdw-pop 280ms cubic-bezier(0.2,1.4,0.4,1) both;
        }
        .fdw-audit-flow{ margin-top: 0; width: fit-content; }
        /* the notification drawer — card + carousel chrome — rises from the bottom */
        .fdw-ndrawer{
          position: absolute; bottom: 12px; left: 50%;
          width: min(336px, 95%);
          opacity: 0; z-index: 3;
          animation: fdw-ncard-in 660ms cubic-bezier(0.16,1,0.3,1) 4600ms both;
        }
        @keyframes fdw-ncard-in{
          from{ opacity: 0; transform: translateX(-50%) translateY(135%) scale(0.94); }
          to{ opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .fdw-ncard{ position: relative; }
        /* the lighter card stacked behind, peeking 7px above, inset ~4.2% each side (matches Figma: x22 / 520) */
        .fdw-ncard-stack{
          position: absolute; top: -7px; left: 4.2%; right: 4.2%; bottom: 0;
          border-radius: 13px; background: rgba(171,176,220,0.5); z-index: 0;
        }
        /* the app's drawer card, to the letter: paint0 base + paint1 purple @0.7 */
        .fdw-ncard-face{
          position: relative; z-index: 1; border-radius: 13px; overflow: hidden;
          padding: 14px 15px 13px;
          background-image:
            linear-gradient(92.81deg, rgba(105,91,215,0.7) -4.09%, rgba(66,77,211,0.7) 109.24%),
            linear-gradient(85.36deg, #40BFEA 0%, #0A16A0 99.57%);
          background-blend-mode: normal, normal; background-repeat: no-repeat; background-size: 100% 100%;
          box-shadow: 0 20px 40px rgba(11,16,32,0.4);
        }
        .fdw-ncard-top{ display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
        /* .fdw-ncard ancestor lifts specificity above the global .mf h3 rule (which forces dark ink + 22px) */
        .fdw-ncard .fdw-ncard-h{
          flex: 1; min-width: 0;
          font-family: var(--font-display); font-size: 14.5px; font-weight: 600; line-height: 1.25;
          letter-spacing: -0.01em; color: #ffffff;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .fdw-ncard-meta{ display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0; margin-top: 1px; }
        .fdw-ncard-meta em{ font-style: normal; font-size: 10px; color: rgba(255,255,255,0.82); white-space: nowrap; }
        .fdw-ncard-x{ display: inline-flex; color: white; opacity: 0.92; }
        .fdw-ncard-p{ font-size: 10.5px; line-height: 1.5; color: rgba(255,255,255,0.88); margin-top: 7px; padding-right: 66px; }
        .fdw-ncard-p b{ font-weight: 700; color: white; }
        .fdw-ncard-row{ display: flex; align-items: center; gap: 10px; margin-top: 12px; position: relative; z-index: 2; }
        .fdw-ncard-cta{
          display: inline-flex; align-items: center; gap: 7px; border: 0; cursor: default;
          background: white; color: #1d2233; font-family: inherit;
          font-size: 11px; font-weight: 600; border-radius: 9px; padding: 8px 13px;
          box-shadow: 0 2px 6px rgba(11,16,32,0.18);
        }
        .fdw-ncard-ico{
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
        }
        .fdw-ncard-done{ background: rgba(255,255,255,0.16); }
        .fdw-ncard-cal{
          position: absolute; right: 0; bottom: -8px; width: 60px; height: auto; z-index: 1;
          filter: drop-shadow(0 8px 12px rgba(7,10,40,0.38));
          animation: fdw-cal-bob 3.2s ease-in-out 5600ms infinite;
        }
        @keyframes fdw-cal-bob{ 0%, 100%{ transform: translateY(0) rotate(0); } 50%{ transform: translateY(-3px) rotate(-2deg); } }
        /* carousel chrome below the card */
        .fdw-nchrome{ display: flex; align-items: center; justify-content: space-between; padding: 11px 6px 2px; }
        .fdw-nprev, .fdw-nnext{ display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; }
        .fdw-nprev{ border-radius: 50%; background: rgba(105,91,215,0.14); }
        .fdw-ndots{ display: inline-flex; align-items: center; gap: 8px; }
        .fdw-ndots i{ width: 8px; height: 8px; border-radius: 50%; background: white; box-shadow: inset 0 0 0 1.5px #6B72D6; }
        .fdw-ndots i.on{ background: #5754D5; box-shadow: none; }

        /* ── evidence: thread + scaffold rail ── */
        .fdw-main-evidence{ flex-direction: row; }
        .fdw-ethread{ flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .fdw-feed-tight{ gap: 7px; padding: 12px 14px 6px; }
        .fdw-ebub{
          align-self: flex-start; max-width: 86%;
          background: #F2F4F9; color: var(--ink-2);
          font-size: 11px; line-height: 1.45; padding: 7px 11px;
          border-radius: 4px 13px 13px 13px;
        }
        .fdw-win{
          display: flex; align-items: center; gap: 7px; align-self: flex-start;
          width: 88%; padding: 6px 9px; border-radius: 9px;
          background: rgba(105,91,215,0.07); border: 1px solid rgba(105,91,215,0.3);
        }
        .fdw-winck{ position: relative; width: 15px; height: 15px; flex: 0 0 auto; }
        .fdw-winck-ring{ position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid #C6CBDC; }
        .fdw-winck-fill{
          position: absolute; inset: 0; border-radius: 50%;
          background: #16A34A;
          display: inline-flex; align-items: center; justify-content: center;
          opacity: 0; animation: fdw-pop 300ms cubic-bezier(0.2,1.4,0.4,1) both;
        }
        .fdw-win-t{ flex: 1; min-width: 0; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .fdw-win-m{ font-family: var(--font-mono); font-size: 8px; color: #695bd7; text-transform: uppercase; flex-shrink: 0; }
        .fdw-erail{
          position: relative;
          width: 150px; flex-shrink: 0;
          background: linear-gradient(180deg, #FAFAFE, #F5F4FC);
          border-left: 1px solid rgba(105,91,215,0.16);
          padding: 13px 12px 12px 14px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .fdw-erail-h{
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: #695bd7;
          margin-bottom: 2px;
        }
        .fdw-erail-h i{ width: 6px; height: 6px; border-radius: 50%; background: #695bd7; box-shadow: 0 0 7px rgba(105,91,215,0.6); animation: fdw-blink 2s ease-in-out infinite; }
        /* vertical spine connecting the three steps */
        .fdw-erail-line{ position: absolute; left: 24px; top: 42px; bottom: 18px; width: 1.5px; background: linear-gradient(180deg, rgba(105,91,215,0.35), rgba(105,91,215,0.12)); }
        .fdw-ebadge{
          align-self: flex-start; width: fit-content;
          margin-bottom: -4px;
          font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.06em; text-transform: uppercase;
          color: #695bd7; background: rgba(105,91,215,0.08);
          border: 1px solid rgba(105,91,215,0.3); border-radius: 999px;
          padding: 2px 8px;
        }
        .fdw-estep{
          position: relative; z-index: 1;
          display: flex; gap: 9px;
          padding: 8px 9px 9px;
          background: white; border: 1px solid var(--line); border-radius: 10px;
          opacity: 0.4;
          animation: fdw-estep-on 460ms cubic-bezier(0.2,0.9,0.3,1) both;
        }
        @keyframes fdw-estep-on{
          to{
            opacity: 1;
            border-color: rgba(105,91,215,0.5);
            box-shadow: 0 10px 22px -12px rgba(105,91,215,0.55);
          }
        }
        .fdw-estep-n{
          position: relative; flex: 0 0 auto;
          width: 16px; height: 16px; border-radius: 50%;
          background: rgba(105,91,215,0.12);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .fdw-estep-n em{ font-style: normal; font-family: var(--font-mono); font-size: 8.5px; font-weight: 700; color: #695bd7; }
        .fdw-estep-ck{
          position: absolute; inset: 0; border-radius: 50%; background: #16A34A;
          display: inline-flex; align-items: center; justify-content: center;
          opacity: 0; animation: fdw-pop 320ms cubic-bezier(0.2,1.4,0.4,1) both;
        }
        .fdw-estep-body{ flex: 1; min-width: 0; }
        .fdw-estep-t{ display: block; font-size: 9.5px; font-weight: 700; color: var(--ink); line-height: 1.25; }
        .fdw-estep-w{ display: block; font-size: 8.5px; line-height: 1.35; color: var(--ink-3); margin-top: 2px; }
        .fdw-estep-c{
          display: inline-block; margin-top: 5px;
          font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.04em;
          color: #695bd7; background: rgba(105,91,215,0.08); border-radius: 4px; padding: 1.5px 5px;
        }

        /* ── gets smarter: Maya at the centre, data orbiting in ── */
        .fdw-main-smart{ padding: 12px 16px; gap: 8px; }
        .fdw-pdf{
          font-style: normal; font-family: var(--font-mono); font-size: 7px; font-weight: 700;
          color: white; background: #E3262E; border-radius: 4px; padding: 1.5px 4px;
        }
        .fdw-constel{ position: relative; flex: 1; min-height: 0; }
        .fdw-wires{ position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .fdw-wire{ stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 0; animation: fdw-wire 620ms ease both; }
        @keyframes fdw-wire{ 0%{ opacity: 0; stroke-dashoffset: 1; } 30%{ opacity: 1; } 100%{ opacity: 1; stroke-dashoffset: 0; } }
        /* Maya — the sun at the centre */
        .fdw-centre{
          position: absolute; left: 50%; top: 47%; transform: translate(-50%, -50%); z-index: 2;
          display: flex; flex-direction: column; align-items: center;
        }
        .fdw-centre-halo{
          position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
          width: 72px; height: 72px; border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.34), transparent 70%);
          animation: fdw-halo 3.4s ease-in-out infinite;
        }
        @keyframes fdw-halo{ 0%,100%{ opacity: 0.5; transform: translateX(-50%) scale(0.92); } 50%{ opacity: 0.95; transform: translateX(-50%) scale(1.14); } }
        .fdw-centre img{
          width: 54px; height: 54px; border-radius: 50%; position: relative;
          box-shadow: 0 6px 16px -6px rgba(15,23,42,0.4), 0 0 0 3px #fff, 0 0 0 4px rgba(22,163,74,0.45);
        }
        .fdw-centre-n{ font-family: var(--font-display); font-weight: 600; font-size: 11px; color: var(--ink); margin-top: 7px; }
        /* the data tiles, arcing over the top */
        .fdw-ptile{
          position: absolute; transform: translate(-50%, -50%); z-index: 3;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          width: 54px;
        }
        .fdw-ptile-ic, .fdw-ptile-doc{
          width: 42px; height: 42px; border-radius: 12px;
          background: white; border: 1px solid #E6E8F0;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 18px -10px rgba(31,52,128,0.35);
        }
        .fdw-ptile-ic img{ width: 27px; height: 27px; }
        .fdw-ptile-doc{ position: relative; overflow: visible; padding: 0; }
        .fdw-ptile-doc img{ width: 30px; height: 38px; object-fit: cover; object-position: top; border-radius: 4px; border: 1px solid #E3E6EE; }
        .fdw-ptile-doc .fdw-pdf{ position: absolute; bottom: -5px; right: -7px; }
        .fdw-ptile-l{ font-size: 8px; color: var(--ink-3); white-space: nowrap; }
        /* the data drops in toward the centre */
        .fdw-drop{ opacity: 0; animation: fdw-drop 560ms cubic-bezier(0.22,1,0.36,1) both; }
        .fdw-drop.alt{ animation-name: fdw-drop-alt; }
        @keyframes fdw-drop{
          0%{ opacity: 0; transform: translate(-50%, -50%) translateY(-20px) rotate(-3deg) scale(0.8); }
          62%{ opacity: 1; transform: translate(-50%, -50%) translateY(2px) rotate(0.8deg) scale(1.04); }
          100%{ opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes fdw-drop-alt{
          0%{ opacity: 0; transform: translate(-50%, -50%) translateY(-20px) rotate(3deg) scale(0.8); }
          62%{ opacity: 1; transform: translate(-50%, -50%) translateY(2px) rotate(-0.8deg) scale(1.04); }
          100%{ opacity: 1; transform: translate(-50%, -50%); }
        }
        /* Nia's understanding rises over time — the graph at the bottom */
        .fdw-grow{
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 1;
          padding-top: 22px;
        }
        .fdw-grow-head{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px; }
        .fdw-grow-brand{
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-3);
        }
        .fdw-gdelta{ position: relative; min-width: 36px; height: 15px; display: inline-block; }
        .fdw-gdelta-v{ position: absolute; right: 0; top: 0; font-family: var(--font-display); font-weight: 700; font-size: 14px; color: #15803D; opacity: 0; }
        .fdw-grow-svg{ display: block; width: 100%; height: 60px; }
        .fdw-gline{ stroke-dasharray: 100; stroke-dashoffset: 100; animation: fdw-gdraw 4400ms cubic-bezier(0.4,0,0.2,1) 1300ms forwards; }
        @keyframes fdw-gdraw{ to{ stroke-dashoffset: 0; } }
        .fdw-garea{ clip-path: inset(0 100% 0 0); animation: fdw-greveal 4400ms cubic-bezier(0.4,0,0.2,1) 1300ms forwards; }
        @keyframes fdw-greveal{ to{ clip-path: inset(0 0 0 0); } }
        .fdw-gdot{ opacity: 0; animation: fdw-pop 340ms cubic-bezier(0.2,1.4,0.4,1) 5400ms both; transform-box: fill-box; transform-origin: center; }

        /* ── multi-agent: the rail routes ── */
        .fdw-arail-h{
          font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #9aa0b4; padding: 2px 8px 4px;
        }
        .fdw-arail{ display: grid; gap: 2px; }
        .fdw-agent{
          display: flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 500; color: var(--ink-3);
          padding: 5px 8px; border-radius: 7px;
        }
        .fdw-agent img{ border-radius: 50%; flex-shrink: 0; }
        .fdw-agent > span{ flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .fdw-agent.star{ animation: fdw-agon 320ms ease 5400ms both; }
        @keyframes fdw-agon{ to{ background: #ECEDFB; color: #3d4ed8; font-weight: 600; box-shadow: 0 0 0 1px rgba(61,78,216,0.2); } }
        .fdw-ag-ok{
          font-style: normal; font-size: 9px; font-weight: 700; color: var(--success);
        }
        .fdw-ag-route{
          font-style: normal; font-family: var(--font-mono); font-size: 7px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: #3d4ed8; background: white; border: 1px solid rgba(61,78,216,0.3);
          border-radius: 999px; padding: 2px 6px;
        }
        /* the ensemble, in-thread — five agents, bigger */
        .fdw-aens{ display: flex; gap: 14px; justify-content: center; margin: 6px 0 2px; }
        .fdw-aen{ display: inline-flex; flex-direction: column; align-items: center; gap: 5px; opacity: 0; }
        .fdw-aen-img{ position: relative; display: inline-flex; }
        .fdw-aen-img img{ display: block; border-radius: 50%; box-shadow: 0 5px 12px -4px rgba(15,23,42,0.32); }
        .fdw-aen.star .fdw-aen-img::after{
          content: ""; position: absolute; inset: -4px; border-radius: 50%;
          border: 2px solid rgba(61,78,216,0.6);
          box-shadow: 0 0 16px rgba(61,78,216,0.4);
          opacity: 0; animation: fdw-on 320ms ease 5500ms both;
        }
        .fdw-aen-l{ font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
        @keyframes fdw-aen-dim{ to{ opacity: 0.32; filter: grayscale(0.6); } }
        @keyframes fdw-aen-lift{ to{ opacity: 1; transform: translateY(-4px) scale(1.12); } }
        .fdw-route{
          align-self: flex-start;
          font-family: var(--font-mono); font-size: 8.5px; font-weight: 600; letter-spacing: 0.04em;
          color: #3d4ed8; background: rgba(61,78,216,0.08); border: 1px solid rgba(61,78,216,0.3);
          border-radius: 999px; padding: 4px 10px;
        }
        /* the Career agent's tools, lighting up */
        .fdw-tools{ display: flex; flex-wrap: wrap; gap: 6px; align-self: flex-start; margin-top: 6px; padding-left: 2px; }
        .fdw-tool{
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.02em; color: var(--ink-2);
          background: white; border: 1px solid #E3E6EE; border-radius: 999px; padding: 4px 9px 4px 7px;
          box-shadow: 0 6px 14px -10px rgba(31,52,128,0.35);
        }
        .fdw-tool svg{ color: #3d4ed8; flex-shrink: 0; }
        .fdw-handoff{
          position: relative; align-self: flex-start; max-width: 88%;
          margin-top: 8px; padding: 9px 11px;
          font-size: 11px; line-height: 1.45; color: var(--ink-2);
          background: white; border: 1px solid #E3E6EE; border-radius: 12px;
          box-shadow: 0 8px 20px -12px rgba(31,52,128,0.25);
        }
        .fdw-handoff-tag{
          position: absolute; top: -7px; left: 10px;
          font-family: var(--font-mono); font-size: 7.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: white; background: #E98A64; border-radius: 4px; padding: 1px 6px;
        }

        @media (max-width: 980px){
          .fdw-grid{ grid-template-columns: 1fr; gap: 28px; }
          .fdw-stage{ order: -1; }
          .fdw-screen-body{ height: 400px; }
        }
        @media (max-width: 600px){
          .fdw-side{ display: none; }
          .fdw-item-t{ font-size: 17px; }
          .fdw-toast{ max-width: 170px; }
          .fdw-screen-body{ height: 330px; }
          .fdw-user{ max-width: 84%; }
          .fdw-erail{ display: none; }
          .fdw-feed-tight{ gap: 5px; padding: 10px 12px 4px; }
          .fdw-ebub, .fdw-feed-tight .fdw-user{ font-size: 10px; padding: 5px 9px; }
          .fdw-ebadge{ display: none; }
          .fdw-aens{ gap: 10px; }
          .fdw-aen-img img{ width: 38px; height: 38px; }
          .fdw-ptile{ width: 50px; }
          .fdw-ptile-ic, .fdw-ptile-doc{ width: 38px; height: 38px; }
          .fdw-ptile-ic img{ width: 24px; height: 24px; }
        }
        @media (prefers-reduced-motion: reduce){
          .fdw-rise, .fdw-pop, .fdw-chart-line, .fdw-chart-fill, .fdw-swap-a, .fdw-swap-b, .fdw-prog > span, .fdw-typing i, .fdw-live i,
          .fdw-ndrawer, .fdw-ncard-cal, .fdw-think-chip, .fdw-estep, .fdw-estep-ck, .fdw-winck-fill, .fdw-wire, .fdw-centre-halo, .fdw-gdelta-v,
          .fdw-gline, .fdw-garea, .fdw-gdot, .fdw-tool, .fdw-agent.star, .fdw-drop, .fdw-aen, .fdw-aen-img::after{
            animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
