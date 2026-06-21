"use client";
/* Hero — two fanned iPhones, recreated natively from public/agent-process-video.
   Left phone  (Specialized Agents): the agent thinking process, then a
     "your week" rundown showing the breadth of what Nia knows.
   Right phone (Proactive AI): iOS home screen → Nia push → launches into the
     app (faded chat behind) → "3 New Notifications" pill → morphs into the
     FAFSA card → Submit is pressed → the FAFSA site sheet loads.
   Brand mark is the real Nia glyph (public/.../sidebar-nia-icon.svg).
   Each phone loops independently. Timings mirror src/Composition.tsx. */
import { useEffect, useState } from "react";

const AGENT_MS = 14200;
const NOTIFY_MS = 14200;

/* ── Nia brand mark (from sidebar-nia-icon.svg) ─────────────── */
const NiaGlyph = ({ s = 24, gid = "n" }) => (
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
const NiaMark = ({ s = 24, gid }) => (
  <span className="hp-niamark" style={{ width: s, height: s }}><NiaGlyph s={s} gid={gid}/></span>
);
const NiaAppIcon = ({ s = 28, gid, r = "24%" }) => (
  <span className="hp-appicon" style={{ width: s, height: s, borderRadius: r }}><NiaGlyph s={s * 0.84} gid={gid}/></span>
);

/* ── tiny lucide-style icons ────────────────────────────────── */
const I = ({ s = 14, sw = 2, c = "currentColor", children, style, cls }) => (
  <svg className={cls} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>
);
const IcSparkles = (p) => <I {...p}><path d="M12 3l1.9 5.7a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></I>;
const IcBulb = (p) => <I {...p}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.2 1.3 1.4 2.1h4.2c.2-.8.7-1.6 1.4-2.1A6 6 0 0 0 12 3z"/></I>;
const IcWrench = (p) => <I {...p}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></I>;
const IcCheck = (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>;
const IcLoader = (p) => <I {...p}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></I>;
const IcBell = (p) => <I {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></I>;
const IcX = (p) => <I {...p}><path d="M18 6 6 18M6 6l12 12"/></I>;
const IcExtern = (p) => <I {...p}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></I>;
const IcSnooze = (p) => <I {...p}><circle cx="11" cy="13" r="8"/><path d="M11 9v4l2.5 1.5"/><path d="M18 3v4"/><path d="M16 5h4"/></I>;
const IcCheckCircle = (p) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></I>;
const IcBook = (p) => <I {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></I>;
const IcDollar = (p) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M16 8.5h-5a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4H8"/><path d="M12 6v12"/></I>;
const IcCal = (p) => <I {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18"/></I>;
const IcLockS = (p) => <I {...p}><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></I>;

/* ── shared chrome ──────────────────────────────────────────── */
const StatusBar = ({ dark }) => {
  const c = dark ? "rgba(255,255,255,0.95)" : "#0f172a";
  return (
    <div className="hp-status" style={{ color: c }}>
      <span className="hp-time">9:41</span>
      <span className="hp-status-icons">
        <svg width="15" height="10" viewBox="0 0 15 10" fill={c}><rect x="0" y="6" width="2.6" height="4" rx="0.8"/><rect x="4" y="4" width="2.6" height="6" rx="0.8"/><rect x="8" y="2" width="2.6" height="8" rx="0.8"/><rect x="12" y="0" width="2.6" height="10" rx="0.8" opacity="0.35"/></svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"><path d="M1 3.5a9 9 0 0 1 12 0"/><path d="M3.4 6a5.6 5.6 0 0 1 7.2 0"/><circle cx="7" cy="8.6" r="1" fill={c} stroke="none"/></svg>
        <svg width="20" height="10" viewBox="0 0 20 10"><rect x="0.5" y="0.5" width="16" height="9" rx="2.5" fill="none" stroke={c} strokeOpacity="0.45"/><rect x="2" y="2" width="11" height="6" rx="1.4" fill={c}/><path d="M18.2 3.4v3.2a1.8 1.8 0 0 0 0-3.2z" fill={c} fillOpacity="0.45"/></svg>
      </span>
    </div>
  );
};

/* ── Scene A · agent process (Specialized Agents) ───────────── */
const STEPS = [
  { at: 2100, chip: "Preparing", Icon: IcSparkles, text: "Setting up the right agent context." },
  { at: 3300, chip: "Planning", Icon: IcBulb, text: "Choosing the right specialist." },
  { at: 4500, chip: "Tools", Icon: IcWrench, text: "Searching Canvas student data…" },
  { at: 5700, chip: "Tools", Icon: IcWrench, text: "Searching university resources…" },
  { at: 6900, chip: "Tools", Icon: IcWrench, text: "Reading profile context…" },
];
const A_DONE = 7700;

const SceneAgent = () => (
  <div className="hp-scene hp-scene-light">
    <StatusBar/>
    <div className="hp-appbar">
      <NiaMark s={26} gid="avbar"/>
      <div className="hp-appbar-name">
        Nia
        <span className="hp-appbar-sub"><span className="hp-dot-online"/> online</span>
      </div>
      <span className="hp-appbar-bell"><IcBell s={15} sw={1.9}/></span>
    </div>
    <div className="hp-chat">
      <div className="hp-chat-scroll">
        <div className="hp-today hp-rise" style={{ animationDelay: "150ms" }}>Today</div>

        <div className="hp-bubble-user hp-rise" style={{ animationDelay: "550ms" }}>
          Hey Nia, what should I focus on this week?
        </div>

        <div className="hp-think-row hp-rise" style={{ animationDelay: "1500ms" }}>
          <NiaMark s={22} gid="avthink"/>
          <div className="hp-think-card">
            <div className="hp-think-head">
              <span className="hp-think-spark"><IcSparkles s={11} sw={2.1}/></span>
              <span className="hp-think-title">NIA is thinking</span>
              <span className="hp-state">
                <IcLoader s={13} sw={2.3} cls="hp-rot" style={{ animationDelay: "0ms, " + A_DONE + "ms" }}/>
                <IcCheck s={11} sw={2.6} cls="hp-pop hp-state-check" style={{ animationDelay: `${A_DONE}ms` }}/>
              </span>
            </div>
            <ul className="hp-steps">
              {STEPS.map((st, i) => {
                const doneAt = i < STEPS.length - 1 ? STEPS[i + 1].at : A_DONE;
                return (
                  <li key={i} className="hp-step hp-rise" style={{ animationDelay: `${st.at}ms` }}>
                    <span className="hp-step-state">
                      <IcLoader s={10} sw={2.6} cls="hp-rot hp-step-spin" style={{ animationDelay: `0ms, ${doneAt}ms` }}/>
                      <IcCheck s={9} sw={3} cls="hp-pop hp-step-check" style={{ animationDelay: `${doneAt}ms` }}/>
                    </span>
                    <span className="hp-step-line">
                      <span className="hp-chip"><st.Icon s={8.5} sw={2.4}/>{st.chip}</span>
                      <span className="hp-step-text">{st.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="hp-think-row hp-rise" style={{ animationDelay: "8000ms" }}>
          <NiaMark s={22} gid="avans"/>
          <div className="hp-bubble-nia">
            Done! <strong>BIO 201 quiz prep is priority #1</strong>, and your 10-minute plan is ready. Here&apos;s everything else to stay ahead of:
          </div>
        </div>

        <div className="hp-think-row hp-rise" style={{ animationDelay: "9000ms" }}>
          <NiaMark s={22} gid="avweek"/>
          <div className="hp-week-card">
            <div className="hp-week-head">Your week · synced just now</div>
            {[
              { Icon: IcBook, tint: "rgba(43,179,223,0.14)", c: "#1a8fc0", t: "BIO 201 quiz · Friday", s: "10-min prep plan ready", at: 9400 },
              { Icon: IcDollar, tint: "rgba(13,138,90,0.12)", c: "#0d8a5a", t: "FAFSA deadline · Wednesday", s: "Reminder set for tonight", at: 9700 },
              { Icon: IcCal, tint: "rgba(144,92,244,0.12)", c: "#7c5ce0", t: "Advisor check-in · Thu 2:00", s: "Dr. Chen confirmed", at: 10000 },
            ].map((r) => (
              <div key={r.t} className="hp-week-row hp-rise" style={{ animationDelay: `${r.at}ms` }}>
                <span className="hp-week-ic" style={{ background: r.tint, color: r.c }}><r.Icon s={10.5} sw={2.1}/></span>
                <span className="hp-week-txt">
                  <span className="hp-week-t">{r.t}</span>
                  <span className="hp-week-s">{r.s}</span>
                </span>
              </div>
            ))}
            <div className="hp-week-foot hp-rise" style={{ animationDelay: "10400ms" }}>From Canvas · SIS · Campus calendar</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Scene B · home screen → push → launch → drawer ─────────── */
/* Real iOS app icon artwork (extracted from the Home Screen reference SVG,
   downscaled to /public/ios-icons). Messages + Phone stay hand-drawn —
   they weren't in the reference set. */
const DRAWN_TILES = {
  messages: (
    <svg viewBox="0 0 60 60" width="42" height="42" style={{ display: "block" }}>
      <defs><linearGradient id="ap-messages" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5DF777"/><stop offset="100%" stopColor="#0BD318"/></linearGradient></defs>
      <rect width="60" height="60" fill="url(#ap-messages)"/>
      <path d="M30 13.5c-10.8 0-19.5 7-19.5 15.6 0 5 2.9 9.4 7.4 12.2-.3 2.5-1.5 4.7-3.3 6.3 3.2-.4 6.1-1.7 8.3-3.5 2.2.7 4.6 1 7.1 1 10.8 0 19.5-7 19.5-15.6S40.8 13.5 30 13.5z" fill="white"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 60 60" width="42" height="42" style={{ display: "block" }}>
      <defs><linearGradient id="ap-phone" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#71FB8B"/><stop offset="100%" stopColor="#10CB2F"/></linearGradient></defs>
      <rect width="60" height="60" fill="url(#ap-phone)"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white" transform="translate(7.5 7.5) scale(1.88)"/>
    </svg>
  ),
};

const AppTile = ({ kind }) => (
  <span className="hp-app">
    {DRAWN_TILES[kind] || (
      <img src={`/ios-icons/${kind}.png`} alt="" width="42" height="42" style={{ display: "block" }} loading="lazy" decoding="async"/>
    )}
  </span>
);

const APPS_GRID = ["maps", "photos", "camera", "weather", "health", null /* Nia */, "notes", "music", "wallet", "facetime", "appstore", "podcasts"];
const APPS_DOCK = ["phone", "safari", "messages", "mail"];

const ChatBackdrop = () => (
  <div className="hp-chatbg">
    <StatusBar/>
    <div className="hp-appbar">
      <NiaMark s={26} gid="bgbar"/>
      <div className="hp-appbar-name">Nia<span className="hp-appbar-sub"><span className="hp-dot-online"/> online</span></div>
      <span className="hp-appbar-bell"><IcBell s={15} sw={1.9}/></span>
    </div>
    <div className="hp-chat">
      <div className="hp-today">Today</div>
      <div className="hp-bubble-user">Hey Nia, what should I focus on this week?</div>
      <div className="hp-think-row">
        <NiaMark s={22} gid="bgthink"/>
        <div className="hp-think-card">
          <div className="hp-think-head">
            <span className="hp-think-spark"><IcSparkles s={11} sw={2.1}/></span>
            <span className="hp-think-title">NIA is thinking</span>
            <span className="hp-state"><IcCheck s={11} sw={2.6} c="#059669"/></span>
          </div>
          <ul className="hp-steps">
            {STEPS.slice(0, 3).map((st, i) => (
              <li key={i} className="hp-step">
                <span className="hp-step-state"><IcCheck s={9} sw={3} c="rgba(5,150,105,0.95)"/></span>
                <span className="hp-step-line">
                  <span className="hp-chip"><st.Icon s={8.5} sw={2.4}/>{st.chip}</span>
                  <span className="hp-step-text">{st.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SceneNotify = () => (
  <div className="hp-scene hp-scene-dark">
    {/* phase 1 — iOS home screen, with the push banner that opens the app */}
    <div className="hp-home">
      <div className="hp-home-wall"/>
      <StatusBar dark/>
      <div className="hp-home-grid">
        {APPS_GRID.map((kind, i) =>
          kind === null ? (
            <div key={i} className="hp-home-cell hp-rise" style={{ animationDelay: `${180 + i * 45}ms` }}>
              <span className="hp-home-nia"><NiaAppIcon s={42} gid="home" r="11px"/><span className="hp-home-badge">1</span></span>
              <span className="hp-home-lbl" style={{ width: 22 }}/>
            </div>
          ) : (
            <div key={i} className="hp-home-cell hp-rise" style={{ animationDelay: `${180 + i * 45}ms` }}>
              <AppTile kind={kind}/>
              <span className="hp-home-lbl"/>
            </div>
          )
        )}
      </div>
      <div className="hp-home-dock">
        {APPS_DOCK.map((kind) => <AppTile key={kind} kind={kind}/>)}
      </div>

      <div className="hp-banner">
        <NiaMark s={30} gid="ban"/>
        <div className="hp-banner-body">
          <div className="hp-banner-top"><span className="hp-banner-app">NIA</span><span className="hp-banner-now">now</span></div>
          <div className="hp-banner-title">Financial aid deadline in 2 days</div>
          <div className="hp-banner-sub">Submit your FAFSA so your aid package stays on track.</div>
        </div>
      </div>
    </div>

    {/* phase 2 — launched: faded chat behind, pill → reminder card → FAFSA site */}
    <div className="hp-launch">
      <div className="hp-launch-chat"><ChatBackdrop/></div>
      <div className="hp-scrim"/>
      <div className="hp-glow hp-glow-purple"/>
      <div className="hp-pill">
        <IcBell s={15} sw={2.1}/> 3 New Notifications
      </div>
      <div className="hp-drawer">
        <div className="hp-drawer-back"/>
        <div className="hp-drawer-card">
          <span className="hp-drawer-x"><IcX s={11} sw={2.2}/></span>
          <div className="hp-drawer-kicker"><NiaMark s={16} gid="dk"/> Nia · Reminder</div>
          <div className="hp-drawer-h">Don&apos;t forget to submit your FAFSA for Financial Aid.</div>
          <div className="hp-drawer-p">Your financial aid priority deadline is in 2 days. Submit the FAFSA now so your aid package stays on track.</div>
          <div className="hp-drawer-actions">
            <button className="hp-drawer-cta">Submit FAFSA <IcExtern s={10} sw={2.2}/></button>
            <span className="hp-drawer-ic"><IcSnooze s={14} sw={1.9}/></span>
            <span className="hp-drawer-ic"><IcCheckCircle s={14} sw={1.9}/></span>
          </div>
          <img src="/notif-clock.png" alt="" className="hp-clock" width="78" height="111"/>
        </div>
        <div className="hp-drawer-dots"><span className="on"/><span/><span/></div>
      </div>

      {/* phase 3 — Submit pressed: the FAFSA site sheet slides up */}
      <div className="hp-site">
        <span className="hp-site-load"/>
        <div className="hp-site-urlbar">
          <IcLockS s={9} sw={2.2}/> studentaid.gov
          <span className="hp-site-x"><IcX s={10} sw={2.2}/></span>
        </div>
        <div className="hp-site-head">
          <span className="hp-site-seal"><IcCheckCircle s={11} sw={2}/></span>
          Federal Student Aid
        </div>
        <div className="hp-site-body">
          <div className="hp-site-eyebrow hp-rise" style={{ animationDelay: "10350ms" }}>FAFSA® Form</div>
          <div className="hp-site-h hp-rise" style={{ animationDelay: "10500ms" }}>2026–27 FAFSA Form</div>
          <div className="hp-site-status hp-rise" style={{ animationDelay: "10650ms" }}>
            <span className="hp-site-dot"/> In progress · saved 2 min ago
            <span className="hp-site-pct">62%</span>
          </div>
          <div className="hp-site-track hp-rise" style={{ animationDelay: "10800ms" }}><span className="hp-site-fill"/></div>
          <button className="hp-site-cta hp-rise" style={{ animationDelay: "10950ms" }}>Continue your form →</button>

          <div className="hp-site-sechead hp-rise" style={{ animationDelay: "11150ms" }}>Your sections</div>
          <div className="hp-site-secs">
            {[
              { t: "Personal identifiers", s: "done", r: "Complete", at: 11300 },
              { t: "Student demographics", s: "done", r: "Complete", at: 11420 },
              { t: "Financial information", s: "now", r: "In progress", at: 11540 },
              { t: "Colleges & programs", s: "next", r: "Up next", at: 11660 },
              { t: "Signature & submit", s: "next", r: "", at: 11780 },
            ].map((row) => (
              <div key={row.t} className={`hp-site-sec hp-rise${row.s === "now" ? " now" : ""}`} style={{ animationDelay: `${row.at}ms` }}>
                {row.s === "done" && (
                  <span className="hp-site-sec-ic done"><IcCheck s={8} sw={3}/></span>
                )}
                {row.s === "now" && <span className="hp-site-sec-ic now"><span/></span>}
                {row.s === "next" && <span className="hp-site-sec-ic next"/>}
                <span className="hp-site-sec-t">{row.t}</span>
                <span className={`hp-site-sec-r${row.s === "now" ? " now" : ""}`}>{row.r}</span>
              </div>
            ))}
          </div>

          <div className="hp-site-callout hp-rise" style={{ animationDelay: "11950ms" }}>
            <IcSnooze s={13} sw={2}/>
            <span><strong>Priority deadline: Wednesday.</strong> Finish your financial section to keep your aid package on track.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── one phone ──────────────────────────────────────────────── */
const Phone = ({ variant, cls }) => {
  const [cycle, setCycle] = useState(0);
  const dur = variant === "agent" ? AGENT_MS : NOTIFY_MS;
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), dur);
    return () => clearTimeout(t);
  }, [cycle, dur]);
  return (
    <div className={`mf-hero-phone ${cls}`} aria-hidden>
      <div className="hp-zoom">
      <div className="hp-frame">
        <span className="hp-sbtn" style={{ left: -3, top: 92, height: 20 }}/>
        <span className="hp-sbtn" style={{ left: -3, top: 134, height: 36 }}/>
        <span className="hp-sbtn" style={{ left: -3, top: 180, height: 36 }}/>
        <span className="hp-sbtn" style={{ right: -3, top: 152, height: 52 }}/>
        <div className="hp-bezel">
          <div className="hp-screen">
            <div key={cycle} className="hp-scene-mount">
              {variant === "agent" ? <SceneAgent/> : <SceneNotify/>}
            </div>
            <div className="hp-island"><span className="hp-cam"/></div>
            <div className="hp-homebar"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

/* ── both phones, fanned ────────────────────────────────────── */
export default function HeroPhones() {
  return (
    <div className="hp-fan" aria-label="Nia mobile app: the agent thinking process, and a proactive student notification">
      <Phone variant="agent" cls="hp-a"/>
      <Phone variant="notify" cls="hp-b"/>

      <style>{`
        /* ── fan layout ──
           Sizing uses CSS zoom (re-layout, pixel-crisp text) instead of
           transform scale (rasterized downsample, blurry text). Transforms
           only carry the rotation + entrance motion. */
        .hp-fan { position: absolute; left: 50%; bottom: 0; top: 0; width: 0; }
        .mf-hero-phone { position: absolute; bottom: 0; transform-origin: bottom center; }
        .hp-a { left: -230px; bottom: 22px; z-index: 1; animation: hp-fan-a 1150ms cubic-bezier(0.22, 1, 0.36, 1) 260ms both; }
        .hp-b { left: -28px; bottom: 0; z-index: 2; animation: hp-fan-b 1150ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both; }
        .hp-a .hp-zoom { zoom: 0.90; }
        .hp-b .hp-zoom { zoom: 0.94; }
        @keyframes hp-fan-a {
          from { opacity: 0; transform: translate(46px, 30px) rotate(0deg) scale(0.9); }
          to   { opacity: 1; transform: translate(0, 0) rotate(-6deg); }
        }
        @keyframes hp-fan-b {
          from { opacity: 0; transform: translate(-46px, 30px) rotate(0deg) scale(0.9); }
          to   { opacity: 1; transform: translate(0, 0) rotate(5deg); }
        }

        /* ── shell ── */
        .hp-frame {
          position: relative; width: 292px; aspect-ratio: 292 / 597;
          background: linear-gradient(155deg, #4a4f5b 0%, #23262e 30%, #15171d 55%, #3a3f4b 100%);
          border-radius: 47px; padding: 9px;
          box-shadow: inset 0 0 2px rgba(255,255,255,0.35), inset 0 0 1px rgba(255,255,255,0.6),
                      0 36px 64px rgba(11,16,38,0.28), 0 14px 30px rgba(56,86,214,0.12), 0 8px 16px rgba(11,16,32,0.14);
        }
        .hp-sbtn { position: absolute; width: 3px; border-radius: 2px; background: linear-gradient(90deg, #2c303a, #181a20); }
        .hp-bezel { width: 100%; height: 100%; background: #000; border-radius: 39px; padding: 3px; box-sizing: border-box; }
        .hp-screen { position: relative; width: 100%; height: 100%; border-radius: 36px; overflow: hidden; background: var(--ink); }
        .hp-island {
          position: absolute; top: 9px; left: 50%; transform: translateX(-50%);
          width: 74px; height: 21px; border-radius: 12px; background: #000; z-index: 30;
          display: flex; align-items: center; justify-content: flex-end; padding-right: 7px; box-sizing: border-box;
        }
        .hp-cam { width: 9px; height: 9px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #1d2f4a 0%, #0a0f18 60%); }
        .hp-homebar { position: absolute; bottom: 7px; left: 50%; transform: translateX(-50%); width: 96px; height: 4px; border-radius: 2px; background: currentColor; opacity: 0.22; z-index: 30; color: #555; }
        .hp-scene-mount, .hp-scene { position: absolute; inset: 0; }
        .hp-scene { display: flex; flex-direction: column; animation: hp-scenefade 420ms ease both; }
        @keyframes hp-scenefade { from { opacity: 0; } to { opacity: 1; } }

        /* ── brand mark ── */
        .hp-niamark { flex: 0 0 auto; border-radius: 50%; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }
        .hp-appicon { flex: 0 0 auto; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(11,16,32,0.35); }

        /* ── shared ── */
        .hp-status { display: flex; align-items: center; justify-content: space-between; padding: 13px 22px 0 26px; height: 24px; flex-shrink: 0; position: relative; z-index: 2; }
        .hp-time { font-family: var(--font-display); font-size: 12.5px; font-weight: 600; letter-spacing: 0.01em; }
        .hp-status-icons { display: inline-flex; align-items: center; gap: 5px; }
        .hp-rise { opacity: 0; animation: hp-rise 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hp-rise { from { opacity: 0; transform: translateY(9px); } to { opacity: 1; transform: none; } }
        .hp-rot { animation: hp-rotate 900ms linear infinite, hp-gone 160ms linear both; }
        @keyframes hp-rotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes hp-gone { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        .hp-pop { opacity: 0; animation: hp-pop 260ms cubic-bezier(0.2, 1.4, 0.4, 1) both; }
        @keyframes hp-pop { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }

        /* ── light chat (scene A + chat backdrop) ── */
        .hp-scene-light, .hp-chatbg { background: #f4f6f8; color: #0f172a; }
        .hp-chatbg { position: absolute; inset: 0; display: flex; flex-direction: column; }
        .hp-appbar { display: flex; align-items: center; gap: 8px; padding: 9px 14px 9px 16px; border-bottom: 1px solid rgba(15,23,42,0.07); background: rgba(255,255,255,0.75); flex-shrink: 0; margin-top: 4px; }
        .hp-appbar-name { font-family: var(--font-display); font-size: 13px; font-weight: 600; line-height: 1.1; }
        .hp-appbar-sub { display: flex; align-items: center; gap: 4px; font-family: var(--font-body); font-size: 8.5px; font-weight: 400; color: #64748b; margin-top: 1px; }
        .hp-dot-online { width: 5px; height: 5px; border-radius: 50%; background: #0d8a5a; }
        .hp-appbar-bell { margin-left: auto; color: #64748b; position: relative; display: inline-flex; }
        .hp-appbar-bell::after { content: ""; position: absolute; top: -1px; right: -1px; width: 5px; height: 5px; border-radius: 50%; background: #3D4ED8; }
        .hp-chat { flex: 1; padding: 12px 12px 16px; display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
        .hp-chat-scroll { display: flex; flex-direction: column; gap: 9px; animation: hp-scrollup 800ms cubic-bezier(0.16, 1, 0.3, 1) 8600ms both; }
        @keyframes hp-scrollup { from { transform: translateY(0); } to { transform: translateY(-170px); } }
        .hp-week-card {
          flex: 1; min-width: 0; padding: 10px 11px;
          background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 4px 14px 14px 14px;
          box-shadow: 0 1px 3px rgba(15,23,42,0.06);
          display: grid; gap: 8px;
        }
        .hp-week-head { font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; }
        .hp-week-row { display: flex; align-items: center; gap: 8px; }
        .hp-week-ic { width: 20px; height: 20px; border-radius: 6px; flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; }
        .hp-week-txt { flex: 1; min-width: 0; display: grid; line-height: 1.3; }
        .hp-week-t { font-family: var(--font-display); font-size: 10.5px; font-weight: 600; color: #0f172a; }
        .hp-week-s { font-size: 9.5px; color: #64748b; }
        .hp-week-foot { border-top: 1px solid rgba(15,23,42,0.06); padding-top: 7px; font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.1em; text-transform: uppercase; color: #94a3b8; }
        .hp-today { align-self: center; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase; color: #94a3b8; }
        .hp-bubble-user {
          align-self: flex-end; max-width: 82%; padding: 8px 11px;
          background: var(--brand-gradient); color: white;
          border-radius: 14px 14px 4px 14px; font-size: 11.5px; line-height: 1.45;
          box-shadow: 0 3px 8px -2px rgba(56,65,177,0.35);
        }
        .hp-think-row { display: flex; gap: 7px; align-items: flex-start; }
        .hp-bubble-nia {
          max-width: 86%; padding: 8px 11px; background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 4px 14px 14px 14px; font-size: 11.5px; line-height: 1.45; color: #1e293b;
          box-shadow: 0 1px 3px rgba(15,23,42,0.06);
        }
        .hp-think-card {
          flex: 1; min-width: 0; padding: 10px 11px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eef2ff 100%);
          border: 1px solid #c7d2fe; border-radius: 4px 14px 14px 14px;
          box-shadow: 0 1px 3px rgba(15,23,42,0.08);
        }
        .hp-think-head { display: flex; align-items: center; gap: 7px; }
        .hp-think-spark {
          width: 20px; height: 20px; border-radius: 50%; flex: 0 0 auto;
          background: rgba(61,78,216,0.10); outline: 1px solid rgba(61,78,216,0.15); color: #3D4ED8;
          display: inline-flex; align-items: center; justify-content: center;
          animation: hp-sparkpulse 2s ease-in-out infinite;
        }
        @keyframes hp-sparkpulse { 0%, 100% { box-shadow: 0 0 10px rgba(61,78,216,0.10); } 50% { box-shadow: 0 0 16px rgba(61,78,216,0.22); } }
        .hp-think-title { flex: 1; font-size: 11.5px; font-weight: 500; color: #334155; }
        .hp-state { position: relative; width: 14px; height: 14px; flex: 0 0 auto; color: rgba(61,78,216,0.8); display: inline-flex; align-items: center; justify-content: center; }
        .hp-state svg { position: absolute; inset: 0; margin: auto; }
        .hp-state-check { color: #059669; }
        .hp-steps { list-style: none; margin: 9px 0 0; padding: 9px 0 0; border-top: 1px solid rgba(199,210,254,0.9); display: grid; gap: 8px; }
        .hp-step { display: flex; gap: 7px; align-items: flex-start; }
        .hp-step-state {
          position: relative; width: 16px; height: 16px; flex: 0 0 auto; margin-top: 1px;
          background: rgba(255,255,255,0.95); border-radius: 50%;
          box-shadow: 0 1px 2px rgba(15,23,42,0.08); outline: 1px solid rgba(226,232,240,0.9);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .hp-step-state svg { position: absolute; inset: 0; margin: auto; }
        .hp-step-spin { color: #3D4ED8; }
        .hp-step-check { color: rgba(5,150,105,0.95); }
        .hp-step-line { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; }
        .hp-chip {
          display: inline-flex; align-items: center; gap: 3px; flex: 0 0 auto;
          background: rgba(224,231,255,0.9); box-shadow: inset 0 0 0 1px rgba(199,210,254,0.6);
          color: #3730a3; font-size: 7.5px; font-weight: 700; letter-spacing: 0.03em;
          text-transform: uppercase; border-radius: 999px; padding: 3px 6px; line-height: 1;
        }
        .hp-step-text { font-size: 10.5px; color: #64748b; line-height: 1.35; }
        .hp-step:last-child .hp-step-text { color: #1e293b; font-weight: 500; }

        /* ── scene B · dark stage ── */
        .hp-scene-dark { background: #070a14; color: white; }

        /* home screen */
        .hp-home { position: absolute; inset: 0; display: flex; flex-direction: column; overflow: hidden;
          animation: hp-home-out 640ms cubic-bezier(0.5, 0, 0.75, 0) 4000ms both; }
        @keyframes hp-home-out { 0% { opacity: 1; transform: scale(1); filter: blur(0); } 100% { opacity: 0; transform: scale(1.12); filter: blur(6px); } }
        .hp-home-wall { position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(120% 80% at 78% 8%, rgba(64,191,234,0.30), transparent 52%),
            radial-gradient(120% 80% at 12% 96%, rgba(144,92,244,0.34), transparent 55%),
            linear-gradient(165deg, #16204a 0%, #0c1230 48%, #070a17 100%); }
        .hp-home > * { position: relative; z-index: 1; }
        .hp-home-grid { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px 14px; padding: 70px 22px 0; align-content: start; }
        .hp-home-cell { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .hp-app { width: 42px; height: 42px; border-radius: 11px; box-shadow: 0 3px 8px rgba(0,0,0,0.28); overflow: hidden; display: inline-flex; }
        .hp-home-lbl { width: 28px; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.35); }
        .hp-home-nia { position: relative; display: inline-flex; }
        .hp-home-nia .hp-appicon { box-shadow: 0 5px 14px rgba(43,179,223,0.45); }
        .hp-home-badge { position: absolute; top: -5px; right: -5px; min-width: 15px; height: 15px; padding: 0 4px; border-radius: 999px; background: #ff3b30; color: #fff; font-family: var(--font-body); font-size: 9px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 0 0 1.5px rgba(7,10,20,0.5); }
        .hp-home-dock { margin: 0 14px 18px; padding: 12px; display: flex; justify-content: space-between; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.12); border-radius: 22px; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }

        /* push banner */
        .hp-banner {
          position: absolute; top: 40px; left: 10px; right: 10px; z-index: 20;
          display: flex; align-items: flex-start; gap: 9px; padding: 10px 11px;
          background: rgba(249,250,253,0.97); border: 1px solid rgba(255,255,255,0.6);
          border-radius: 18px; box-shadow: 0 16px 34px rgba(0,0,0,0.40);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          opacity: 0; transform-origin: top center;
          animation: hp-banner-in 720ms cubic-bezier(0.16, 1, 0.3, 1) 1500ms both, hp-banner-press 360ms ease 3760ms both;
        }
        @keyframes hp-banner-in { 0% { opacity: 0; transform: translateY(-46px) scale(0.96); } 70% { opacity: 1; } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes hp-banner-press { 0% { transform: scale(1); } 55% { transform: scale(0.965); } 100% { transform: scale(0.99); } }
        .hp-banner-body { flex: 1; min-width: 0; color: #0f172a; }
        .hp-banner-top { display: flex; align-items: center; justify-content: space-between; }
        .hp-banner-app { font-family: var(--font-body); font-size: 9px; font-weight: 700; letter-spacing: 0.08em; color: #64748b; text-transform: uppercase; }
        .hp-banner-now { font-family: var(--font-body); font-size: 9px; color: #94a3b8; }
        .hp-banner-title { font-family: var(--font-display); font-size: 12px; font-weight: 600; line-height: 1.25; margin-top: 2px; }
        .hp-banner-sub { font-size: 10px; line-height: 1.4; color: #475569; margin-top: 2px; }

        /* launched view */
        .hp-launch { position: absolute; inset: 0; opacity: 0; animation: hp-launch-in 1ms linear 4020ms forwards; }
        @keyframes hp-launch-in { to { opacity: 1; } }
        .hp-launch-chat { position: absolute; inset: 0; transform: scale(1.06); opacity: 0; filter: blur(1.5px);
          animation: hp-chat-in 620ms cubic-bezier(0.16, 1, 0.3, 1) 4040ms both; }
        @keyframes hp-chat-in { from { opacity: 0; transform: scale(1.1); } to { opacity: 1; transform: scale(1); } }
        .hp-scrim { position: absolute; inset: 0; background: rgba(7,10,20,0.55); opacity: 0;
          animation: hp-scrim-in 520ms ease 4180ms both; z-index: 2; }
        @keyframes hp-scrim-in { to { opacity: 1; } }
        .hp-glow { position: absolute; border-radius: 50%; pointer-events: none; z-index: 3; }
        .hp-glow-purple { width: 250px; height: 250px; left: 50%; top: 74%; transform: translate(-50%, -50%); background: radial-gradient(circle, rgba(105,91,215,0.30), transparent 64%); opacity: 0; animation: hp-scrim-in 700ms ease 4300ms both; }

        /* "3 New Notifications" pill — docked at the very bottom of the UI (matches the app),
           then expands upward into the reminder card like a bottom drawer */
        .hp-pill {
          position: absolute; left: 50%; bottom: 26px; z-index: 4;
          display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
          padding: 12px 17px; border-radius: 999px;
          background: #6358B6; color: white; font-size: 12px; font-weight: 600;
          box-shadow: 0 0 30px rgba(99,88,182,0.6), 0 10px 22px rgba(0,0,0,0.35);
          opacity: 0;
          animation:
            hp-pill-in 620ms cubic-bezier(0.2, 1.3, 0.4, 1) 4420ms both,
            hp-pill-out 400ms cubic-bezier(0.5, 0, 0.75, 0) 5980ms both;
        }
        @keyframes hp-pill-in { from { opacity: 0; transform: translateX(-50%) translateY(30px) scale(0.6); } 70% { opacity: 1; transform: translateX(-50%) translateY(-3px) scale(1.05); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
        @keyframes hp-pill-out { from { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } to { opacity: 0; transform: translateX(-50%) translateY(-16px) scale(1.35); filter: blur(3px); } }

        .hp-drawer {
          position: absolute; left: 50%; bottom: 24px; width: 86%; z-index: 4;
          transform-origin: bottom center; opacity: 0;
          animation: hp-drawerin 760ms cubic-bezier(0.16, 1, 0.3, 1) 6150ms both;
        }
        @keyframes hp-drawerin { from { opacity: 0; transform: translateX(-50%) translateY(46px) scale(0.5); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
        .hp-drawer-back { position: absolute; top: -7px; left: 10px; right: 10px; bottom: 36px; border-radius: 14px; background: rgba(171,176,220,0.5); }
        .hp-drawer-card {
          position: relative; border-radius: 15px; padding: 13px 14px; overflow: hidden;
          background-image:
            linear-gradient(92.81deg, rgba(105,91,215,0.78) -4%, rgba(66,77,211,0.78) 109%),
            linear-gradient(85.36deg, #40BFEA 0%, #0A16A0 99.6%);
          border: 1px solid rgba(99,88,182,0.4);
          box-shadow: 0 22px 44px rgba(0,0,0,0.45);
        }
        .hp-drawer-x { position: absolute; top: 12px; right: 12px; color: rgba(255,255,255,0.85); display: inline-flex; z-index: 4; }
        .hp-drawer-kicker { display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.82); position: relative; z-index: 2; }
        .hp-drawer-h { font-family: var(--font-display); font-size: 14px; font-weight: 600; line-height: 1.3; letter-spacing: -0.01em; padding-right: 16px; margin-top: 8px; position: relative; z-index: 2; }
        .hp-drawer-p { margin-top: 7px; font-size: 10px; line-height: 1.5; color: rgba(255,255,255,0.9); padding-right: 58px; position: relative; z-index: 2; }
        .hp-drawer-actions { display: flex; align-items: center; gap: 11px; margin-top: 13px; position: relative; z-index: 2; }
        .hp-drawer-cta {
          display: inline-flex; align-items: center; gap: 6px; border: 0; cursor: default;
          background: white; color: #111827; font-family: inherit;
          font-size: 10px; font-weight: 600; border-radius: 7px; padding: 7px 10px;
          animation: hp-ctapress 420ms ease 8550ms;
        }
        @keyframes hp-ctapress { 0%, 100% { transform: scale(1); } 40% { transform: scale(0.91); filter: brightness(0.88); box-shadow: 0 0 0 5px rgba(255,255,255,0.22); } }
        .hp-drawer-ic { color: rgba(255,255,255,0.92); display: inline-flex; }
        .hp-clock {
          position: absolute; right: 2px; bottom: -8px; z-index: 1;
          width: 78px; height: auto;
          filter: drop-shadow(0 10px 14px rgba(7, 10, 40, 0.4));
          transform-origin: 50% 80%;
          animation: hp-clockring 2.8s ease-in-out 7100ms infinite;
        }
        @keyframes hp-clockring { 0%, 78%, 100% { transform: rotate(0); } 82% { transform: rotate(-2.6deg); } 86% { transform: rotate(2.4deg); } 90% { transform: rotate(-1.6deg); } 94% { transform: rotate(1deg); } }
        .hp-drawer-dots { display: flex; justify-content: center; gap: 7px; margin-top: 12px; }
        .hp-drawer-dots span { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.32); }
        .hp-drawer-dots .on { width: 7px; height: 7px; background: white; box-shadow: 0 0 6px rgba(255,255,255,0.6); }

        /* FAFSA site — in-app browser sheet that slides up after Submit is pressed */
        .hp-site {
          position: absolute; left: 0; right: 0; top: 30px; bottom: 0; z-index: 6;
          background: #f1f5f9; border-radius: 18px 18px 0 0; overflow: hidden;
          box-shadow: 0 -14px 36px rgba(0,0,0,0.45);
          display: flex; flex-direction: column;
          animation: hp-site-up 660ms cubic-bezier(0.16, 1, 0.3, 1) 9050ms both;
        }
        @keyframes hp-site-up { from { transform: translateY(104%); } to { transform: translateY(0); } }
        .hp-site-load { position: absolute; top: 0; left: 0; height: 2.5px; background: #1e62d0; z-index: 5; width: 0;
          animation: hp-loadbar 520ms ease-out 9750ms both, hp-gone 240ms linear 10300ms both; }
        @keyframes hp-loadbar { from { width: 0; } to { width: 100%; } }
        .hp-site-urlbar {
          display: flex; align-items: center; justify-content: center; gap: 5px; position: relative;
          padding: 9px 12px; background: white; border-bottom: 1px solid #e2e8f0;
          font-family: var(--font-mono); font-size: 9.5px; font-weight: 600; color: #334155;
        }
        .hp-site-x { position: absolute; right: 11px; top: 50%; transform: translateY(-50%); color: #94a3b8; display: inline-flex; }
        .hp-site-head {
          display: flex; align-items: center; gap: 7px; padding: 11px 14px;
          background: #14366b; color: white;
          font-family: var(--font-display); font-size: 11.5px; font-weight: 600; letter-spacing: 0.01em;
        }
        .hp-site-seal { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.35); display: inline-flex; align-items: center; justify-content: center; }
        .hp-site-body { padding: 16px 14px; display: grid; gap: 9px; align-content: start; }
        .hp-site-eyebrow { font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase; color: #1e62d0; font-weight: 600; }
        .hp-site-h { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: #0f172a; letter-spacing: -0.01em; }
        .hp-site-status { display: flex; align-items: center; gap: 6px; font-size: 9.5px; color: #475569; }
        .hp-site-dot { width: 6px; height: 6px; border-radius: 50%; background: #0d8a5a; box-shadow: 0 0 5px rgba(13,138,90,0.5); }
        .hp-site-pct { margin-left: auto; font-family: var(--font-mono); font-size: 9px; font-weight: 600; color: #1e62d0; }
        .hp-site-track { height: 5px; border-radius: 3px; background: #e2e8f0; overflow: hidden; }
        .hp-site-fill { display: block; width: 62%; height: 100%; border-radius: 3px; background: linear-gradient(90deg, #1e62d0, #2BB3DF); }
        .hp-site-cta {
          border: 0; cursor: default; margin-top: 3px;
          background: #1e62d0; color: white; font-family: inherit;
          font-size: 10.5px; font-weight: 600; border-radius: 8px; padding: 9px 12px;
          box-shadow: 0 4px 12px -3px rgba(30,98,208,0.5);
        }
        .hp-site-sechead { margin-top: 6px; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b; font-weight: 600; }
        .hp-site-secs { display: grid; gap: 4px; }
        .hp-site-sec {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 9px; border-radius: 8px;
          background: white; border: 1px solid #e2e8f0;
        }
        .hp-site-sec.now { background: #eff6ff; border-color: rgba(30,98,208,0.35); }
        .hp-site-sec-ic { width: 15px; height: 15px; border-radius: 50%; flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; }
        .hp-site-sec-ic.done { background: rgba(13,138,90,0.12); color: #0d8a5a; }
        .hp-site-sec-ic.now { border: 1.5px solid #1e62d0; }
        .hp-site-sec-ic.now span { width: 5px; height: 5px; border-radius: 50%; background: #1e62d0; animation: hp-sparkpulse 2s ease-in-out infinite; }
        .hp-site-sec-ic.next { border: 1.5px dashed #cbd5e1; }
        .hp-site-sec-t { flex: 1; min-width: 0; font-size: 9.5px; font-weight: 500; color: #1e293b; }
        .hp-site-sec.now .hp-site-sec-t { font-weight: 600; color: #0f172a; }
        .hp-site-sec-r { font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.04em; text-transform: uppercase; color: #94a3b8; }
        .hp-site-sec-r.now { color: #1e62d0; font-weight: 600; }
        .hp-site-callout {
          display: flex; align-items: flex-start; gap: 7px; margin-top: 2px;
          padding: 9px 10px; border-radius: 9px;
          background: rgba(233,138,100,0.10); border: 1px solid rgba(233,138,100,0.35);
          font-size: 9px; line-height: 1.45; color: #7c3a1d;
        }
        .hp-site-callout svg { flex: 0 0 auto; margin-top: 1px; color: #b4552c; }
        .hp-site-callout strong { font-weight: 600; color: #5f2c14; }

        /* centered fan — zoom carries the per-breakpoint sizing */
        @media (max-width: 980px) {
          .hp-a { left: -187px; bottom: 16px; }
          .hp-b { left: -41px; }
          .hp-a .hp-zoom { zoom: 0.76; }
          .hp-b .hp-zoom { zoom: 0.80; }
        }
        @media (max-width: 860px) {
          .hp-a { left: -181px; bottom: 14px; }
          .hp-b { left: -23px; }
          .hp-a .hp-zoom { zoom: 0.68; }
          .hp-b .hp-zoom { zoom: 0.72; }
        }
        @media (max-width: 560px) {
          .hp-a { left: -147px; bottom: 12px; }
          .hp-b { left: -22px; }
          .hp-a .hp-zoom { zoom: 0.55; }
          .hp-b .hp-zoom { zoom: 0.60; }
        }
        /* small phones (~320-400): the fixed-size fan overflows and the front
           phone's content gets cut off — shrink it and pull the pair back so
           both phones sit balanced within the viewport. */
        @media (max-width: 400px) {
          .hp-a { left: -140px; bottom: 11px; }
          .hp-b { left: -30px; }
          .hp-a .hp-zoom { zoom: 0.48; }
          .hp-b .hp-zoom { zoom: 0.52; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hp-fan *, .mf-hero-phone { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
