"use client";
/* Section II — the moats. Six feature blocks in the site's alternating
   two-column rhythm (copy one side, a live UI mock the other), each speaking
   the same visual language as the rest of the site. */
import { NiaGlyph, NiaMark } from "./ui";

/* ── shared building blocks ──────────────────────────────────── */
const Tick = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

const Moat = ({ n, eyebrow, title, grad, body, points, alt, reverse, children }) => (
  <section className={`mf-section${alt ? " alt" : ""}`}>
    <div className="mf-container">
      <div className={`np-moat${reverse ? " np-moat-rev" : ""}`}>
        <div className="np-moat-copy">
          <span className="np-moat-n">Moat {n}</span>
          <span className="mf-eyebrow" style={{ display: "block", marginTop: 14 }}>{eyebrow}</span>
          <h2 style={{ marginTop: 14 }}>{title} <span className="mf-grad-text">{grad}</span></h2>
          <p style={{ marginTop: 16, fontSize: 16, maxWidth: 480 }}>{body}</p>
          {points && (
            <ul className="np-points">
              {points.map((p) => (
                <li key={p}><span className="np-points-t"><Tick/></span>{p}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="np-moat-vis">{children}</div>
      </div>
    </div>
  </section>
);

/* ── Moat 1 — Proactive Intervention · the desktop (MacBook Pro) view ── */
const ProactiveVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-mac">
      <div className="np-mac-lid">
        <div className="np-mac-screen">
          <span className="np-mac-notch"/>
          <div className="np-mac-chrome">
            <span className="np-mac-dots"><i/><i/><i/></span>
            <span className="np-mac-url">app.niahub.ai</span>
          </div>
          <div className="np-mac-app">
            <aside className="np-mac-side">
              <div className="np-mac-side-head">
                <span className="np-mac-logo"><NiaGlyph s={17} gid="m1g"/></span>
                <span className="np-mac-collapse" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                </span>
              </div>
              <nav className="np-mac-actions">
                <span className="np-mac-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.4 2.6a2 2 0 1 1 2.8 2.8L12 14.6 8 16l1.4-4z"/></svg>
                  New Chat
                </span>
                <span className="np-mac-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 8h6M12 5v6"/></svg>
                  New Notebook
                </span>
                <span className="np-mac-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                  Notifications
                  <em className="np-mac-badge">1</em>
                </span>
              </nav>
              <span className="np-mac-sec">Today</span>
              <nav className="np-mac-chats">
                <span className="np-mac-chat on">Registration hold</span>
                <span className="np-mac-chat">Spring shortlist</span>
                <span className="np-mac-chat">Aid &amp; FAFSA timeline</span>
              </nav>
              <div className="np-mac-foot">
                <span className="np-mac-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  Help
                </span>
                <span className="np-mac-user"><img loading="lazy" decoding="async" src="/students/maya.png" alt="" width="22" height="22"/> <span>Maya Reyes</span></span>
              </div>
            </aside>
            <main className="np-mac-main">
              <div className="np-mac-head">
                <span>Today · 8:02 AM</span>
                <span className="np-first">Nia reached out first</span>
              </div>
              <div className="np-mac-thread">
                <div className="np-row np-bot np-rise" style={{ animationDelay: "500ms" }}>
                  <NiaMark s={26} gid="m1m"/>
                  <div className="np-bub np-bub-nia">
                    I noticed a <b>$150 hold</b>{" "}that might block your registration next week. Let&apos;s fix it before it&apos;s a problem.
                    <div className="np-card-actions">
                      <span className="np-btn-w">Clear it now <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                      <span className="np-btn-q">What is it?</span>
                    </div>
                  </div>
                </div>
                <div className="np-await np-rise" style={{ animationDelay: "1500ms" }}>
                  <span className="np-await-dot"/> waiting on the student, who never had to ask
                </div>
              </div>
              <div className="np-inputbar">Message Nia…<span className="np-send">↑</span></div>
            </main>
          </div>
          <span className="np-mac-label">MacBook Pro</span>
        </div>
      </div>
      <div className="np-mac-base"><span className="np-mac-groove"/></div>
      <div className="np-mac-floor"/>
    </div>
  </div>
);

/* ── Moat 2 — Unified Student Memory ─────────────────────────── */
const SourceTile = ({ kind, label }) => {
  const marks = {
    canvas: <svg width="20" height="20" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#E3262E"/>{Array.from({ length: 12 }).map((_, i) => { const a = (i * 30 * Math.PI) / 180; return <circle key={i} cx={20 + 11 * Math.cos(a)} cy={20 + 11 * Math.sin(a)} r="2.1" fill="#fff"/>; })}<circle cx="20" cy="20" r="3.2" fill="#fff"/></svg>,
    crm: <svg width="20" height="20" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="var(--primary)"/><circle cx="20" cy="16" r="5" fill="#fff"/><path d="M10 31c0-5.5 4.5-8.5 10-8.5s10 3 10 8.5z" fill="#fff"/></svg>,
    handshake: <svg width="20" height="20" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#2E2A6B"/><path d="M12 19l4-4 4 3 4-3 4 4" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 18v8M16 22l4 4 4-4" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  };
  return <span className="np-src"><span className="np-src-mk">{marks[kind]}</span>{label}</span>;
};

/* a clean pentagon: node center {x,y} and the point where its wire stops,
   ~13 units shy of the hub centre (50,42) so lines never cross her face */
const DOMAINS = [
  { id: "academic", n: "Academic", x: 50, y: 9, ex: 50, ey: 29 },
  { id: "career", n: "Career", x: 82, y: 32, ex: 62, ey: 38 },
  { id: "finance", n: "Finance", x: 70, y: 70, ex: 58, ey: 53 },
  { id: "wellness", n: "Wellness", x: 30, y: 70, ex: 42, ey: 53 },
  { id: "admin", n: "Records", x: 18, y: 32, ex: 38, ey: 38 },
];

const MemoryVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-memcard">
      <div className="np-memhead">
        <span className="np-src-label">Connected sources</span>
        <span className="np-src-row">
          <SourceTile kind="canvas" label="Canvas"/>
          <SourceTile kind="crm" label="CRM"/>
          <SourceTile kind="handshake" label="Handshake"/>
        </span>
      </div>
      <div className="np-constel">
        <svg className="np-wires" viewBox="0 0 100 100" preserveAspectRatio="none">
          {DOMAINS.map((d, i) => (
            <line key={d.id} x1={d.x} y1={d.y} x2={d.ex} y2={d.ey} pathLength="1" className="np-wire" style={{ animationDelay: `${700 + i * 200}ms` }} stroke="rgba(56,65,177,0.38)" strokeWidth="1.3" vectorEffect="non-scaling-stroke"/>
          ))}
        </svg>
        <div className="np-hub">
          <span className="np-hub-halo"/>
          <img loading="lazy" decoding="async" src="/students/maya.png" alt=""/>
          <span className="np-hub-n">Maya Reyes</span>
          <span className="np-chip np-chip-grad np-hub-pill">one state object</span>
        </div>
        {DOMAINS.map((d, i) => (
          <span key={d.id} className="np-node np-nodepop" style={{ left: `${d.x}%`, top: `${d.y}%`, animationDelay: `${1000 + i * 200}ms` }}>
            <img loading="lazy" decoding="async" src={`/agents/${d.id}-badge.svg`} alt="" width="30" height="30"/>
            <em>{d.n}</em>
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ── Moat 3 — Progress Blueprint ─────────────────────────────── */
const BLUEPRINT = [
  { tag: "Goal", t: "Declare Biology major", meta: "Fall · Yr 1", tone: "goal" },
  { tag: "Obstacle", t: "Stumbled in CHEM 101, built a recovery plan", meta: "Spring · Yr 1", tone: "obs" },
  { tag: "Decision", t: "Chose a summer research internship over a job", meta: "Spring · Yr 2", tone: "dec" },
  { tag: "Goal", t: "On track for a Fall graduation", meta: "Now · Yr 4", tone: "goal" },
];
const BlueprintVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-blueprint">
      <div className="np-bp-head">
        <span><NiaGlyph s={17} gid="m3g"/> Progress Blueprint</span>
        <span className="np-bp-vs">not a temporary chat log</span>
      </div>
      <div className="np-bp-line">
        {BLUEPRINT.map((b, i) => (
          <div key={b.t} className={`np-bp-item np-rise tone-${b.tone}`} style={{ animationDelay: `${400 + i * 350}ms` }}>
            <span className="np-bp-node"/>
            <div className="np-bp-card">
              <span className="np-bp-tag">{b.tag}</span>
              <span className="np-bp-t">{b.t}</span>
              <span className="np-bp-meta">{b.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── Moat 4 — Care Routing ───────────────────────────────────── */
const CareVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-care">
      <div className="np-care-side np-rise" style={{ animationDelay: "300ms" }}>
        <div className="np-care-head"><span className="np-care-role">Student</span><span className="np-care-who"><img loading="lazy" decoding="async" src="/students/maya.png" alt=""/> Maya</span></div>
        <div className="np-care-bub">
          <NiaMark s={22} gid="m4m"/>
          <span>This one deserves a person. I&apos;m connecting you to <b>Dana in Financial Aid</b>. She&apos;ll already have your full history.</span>
        </div>
        <span className="np-care-note">No rabbit hole, no repeating yourself.</span>
      </div>

      <div className="np-care-flow np-rise" style={{ animationDelay: "1000ms" }}>
        <span className="np-care-line"/>
        <span className="np-care-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg> warm handoff · full context</span>
        <span className="np-care-line"/>
      </div>

      <div className="np-care-side np-care-adv np-rise" style={{ animationDelay: "1500ms" }}>
        <div className="np-care-head"><span className="np-care-role">Advisor · Dana</span><span className="np-care-live"><i/>new alert</span></div>
        <div className="np-care-alert">
          <span className="np-care-warn">!</span>
          <div><strong>Maya Reyes</strong><span>Aid appeal · high-stakes · needs a human</span></div>
        </div>
        <div className="np-care-ctx">
          <span className="np-care-ctx-h">Context, already summarized</span>
          {["Pell-eligible · appeal in progress", "GPA recovered after CHEM 101", "$150 hold cleared back in October"].map((c, i) => (
            <span key={c} className="np-care-ctx-row np-pop" style={{ animationDelay: `${2000 + i * 280}ms` }}><Tick/> {c}</span>
          ))}
        </div>
        <span className="np-care-cap">Advisor capacity preserved</span>
      </div>
    </div>
  </div>
);

/* ── Moat 5 — Near-Zero Hallucinations (NL2SQL) ──────────────── */
const EngineVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-engine">
      <div className="np-eng-q np-rise" style={{ animationDelay: "300ms" }}>
        <span className="np-eng-ava"><img loading="lazy" decoding="async" src="/students/maya.png" alt=""/></span>
        &ldquo;How much aid do I have left this term?&rdquo;
      </div>

      <div className="np-eng-paths">
        <div className="np-eng-bad np-rise" style={{ animationDelay: "700ms" }}>
          <span className="np-eng-x">✕</span> Generic model · paraphrases, may hallucinate
        </div>
        <div className="np-eng-good">
          <div className="np-eng-box np-rise" style={{ animationDelay: "1100ms" }}>
            <span className="np-eng-box-h"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg> Institutional Data Engine</span>
            <code className="np-eng-sql"><span className="np-kw">SELECT</span> remaining<br/><span className="np-kw">FROM</span> aid_awards<br/><span className="np-kw">WHERE</span> student = &lsquo;maya.j&rsquo;</code>
          </div>
          <span className="np-eng-down np-pop" style={{ animationDelay: "1700ms" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
          </span>
          <div className="np-eng-ans np-rise" style={{ animationDelay: "2000ms" }}>
            <strong>$2,480 remaining</strong>
            <span className="np-eng-cite"><Tick/> from your SIS · 3 live rows · 1:36 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Moat 6 — Governance Substrate ───────────────────────────── */
const TOGGLES = [
  { label: "Ingest Canvas grades", on: true },
  { label: "Ingest counseling notes", on: false, flip: true },
  { label: "Ingest SIS holds & aid", on: true },
];
const GovernanceVisual = () => (
  <div className="np-vis-wrap">
    <div className="np-gov">
      <div className="np-gov-head">
        <span><NiaGlyph s={17} gid="m6g"/> Governance console</span>
        <span className="np-gov-tenant">per-tenant · isolated</span>
      </div>
      <div className="np-gov-sec">
        <span className="np-gov-sec-h">Data ingestion rules</span>
        {TOGGLES.map((t, i) => (
          <div key={t.label} className="np-gov-row np-rise" style={{ animationDelay: `${400 + i * 220}ms` }}>
            <span>{t.label}</span>
            <span className={`np-tgl${t.on ? " on" : ""}${t.flip ? " flip" : ""}`}><i/></span>
          </div>
        ))}
      </div>
      <div className="np-gov-sec">
        <span className="np-gov-sec-h">Tone calibration</span>
        <div className="np-gov-tone np-rise" style={{ animationDelay: "1100ms" }}>
          <span>Warm</span>
          <span className="np-gov-track"><span className="np-gov-knob"/></span>
          <span>Formal</span>
        </div>
        <span className="np-gov-voice">Voice tuned to your institution&apos;s brand &amp; SOPs</span>
      </div>
    </div>
  </div>
);

/* ── the section ─────────────────────────────────────────────── */
export default function Moats() {
  return (
    <>
      <section className="mf-section" style={{ paddingBottom: 8 }}>
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="mf-eyebrow">Why Nia is hard to copy</span>
            <h2 style={{ marginTop: 14 }}>Six moats, <span className="mf-grad-text">one relationship.</span></h2>
            <p style={{ marginTop: 16 }}>Most campus AI answers a question and forgets you. Nia is built differently on purpose. Here is what compounds underneath the conversation.</p>
          </div>
        </div>
      </section>

      <Moat
        n="01"
        eyebrow="Proactive intervention"
        title="Help arrives"
        grad="before they ask."
        body="Generic tools wait for a confident student to type the right question. The students who most need help are the ones who never ask, so Nia goes first, ending the regressive success tax where a stumble quietly compounds into a stall."
        points={["Watches signals across every system, not a single inbox", "Opens the conversation the moment a risk appears", "Turns a silent hold into a two-tap fix"]}
        reverse
      >
        <ProactiveVisual/>
      </Moat>

      <Moat
        n="02"
        eyebrow="The unified student memory"
        title="Five domains,"
        grad="one student."
        body="Academic, Career, Finance, Wellness, and Admin don't live in five disconnected bots. They share a single state object, so a financial-aid fact is known by the career conversation and a wellness check informs the academic nudge."
        points={["Canvas, Workday, and Handshake feed one profile", "No re-explaining across departments", "Every agent reasons from the same source of truth"]}
        alt
      >
        <MemoryVisual/>
      </Moat>

      <Moat
        n="03"
        eyebrow="The progress blueprint"
        title="It remembers the"
        grad="whole journey."
        body="A standard chat forgets you when the tab closes. Nia keeps a living blueprint of the student's goals, the decisions they made, and the obstacles they cleared, across the entire academic lifecycle, not a single session."
        points={["Goals, decisions, and obstacles, kept in context", "Picks up exactly where the last semester left off", "Coaching that builds on history, not a blank slate"]}
        reverse
      >
        <BlueprintVisual/>
      </Moat>

      <Moat
        n="04"
        eyebrow="Care routing · the anti-rabbit-hole"
        title="The right human,"
        grad="at the right moment."
        body="Nia is not trying to replace your people. When a question turns high-stakes, like a mental-health disclosure or a tangled aid appeal, Nia stops, recognizes it, and routes the student to the right human with their history already summarized."
        points={["Detects high-stakes issues instead of looping on them", "Hands off with a written context summary, not a cold transfer", "Protects advisor capacity for the work only people can do"]}
        alt
      >
        <CareVisual/>
      </Moat>

      <Moat
        n="05"
        eyebrow="Governed, source-linked answers"
        title="Answers from your data,"
        grad="not a guess."
        body="Generic AI paraphrases and hopes. Nia translates the student's question into a real query against actual rows in your systems, so &ldquo;how much aid is left?&rdquo; returns a number that is mathematically true and source-linked, every time."
        points={["Natural language becomes a governed, real query", "Bypasses the raw model for anything factual", "Every figure is traceable back to its source row"]}
        reverse
      >
        <EngineVisual/>
      </Moat>

      <Moat
        n="06"
        eyebrow="The governance substrate"
        title="Your instance,"
        grad="your rules."
        body="Nia runs in a protected, per-tenant instance, never a shared brain. Administrators tune what Nia ingests and how it speaks, down to the field level, so it reflects your institution's templates, SOPs, voice, and values."
        points={["Per-tenant isolation: cross-tenant movement is impossible", "Field-level control over what data Nia may use", "Tone calibrated to your brand, not a generic assistant"]}
        alt
      >
        <GovernanceVisual/>
      </Moat>

      <MoatStyles/>
    </>
  );
}

/* styles live once, at the end, so every moat row shares them */
const MoatStyles = () => (
  <style>{`
    .np-moat{ display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .np-moat-rev .np-moat-copy{ order: 2; }
    .np-moat-copy{ min-width: 0; }
    .np-moat-n{ font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-4); }
    .np-points{ list-style: none; margin: 22px 0 0; padding: 0; display: grid; gap: 11px; }
    .np-points li{ display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink-2); line-height: 1.5; }
    .np-points-t{ flex: 0 0 auto; width: 20px; height: 20px; border-radius: 50%; background: rgba(13,138,90,0.1); color: var(--success); display: inline-flex; align-items: center; justify-content: center; margin-top: 1px; }
    .np-moat-vis{ min-width: 0; display: flex; justify-content: center; }
    .np-vis-wrap{ width: 100%; display: flex; justify-content: center; }

    /* moat 1 — the desktop (MacBook Pro) view */
    .np-mac{ width: 100%; max-width: 500px; }
    .np-mac-lid{ background: linear-gradient(180deg,#EDF0F4 0%,#C8CDD6 100%); border-radius: 16px 16px 0 0; padding: 3px 3px 0; box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 38px 66px -30px rgba(11,16,32,0.45); }
    .np-mac-screen{ position: relative; background: #05070D; border-radius: 13px 13px 0 0; padding: 11px 9px 15px; overflow: hidden; }
    .np-mac-notch{ position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 58px; height: 15px; background: #05070D; border-radius: 0 0 8px 8px; z-index: 5; }
    .np-mac-chrome{ display: flex; align-items: center; gap: 9px; padding: 6px 10px; background: #F2F4F8; border-radius: 8px 8px 0 0; border-bottom: 1px solid #E3E6EE; }
    .np-mac-dots{ display: inline-flex; gap: 5px; }
    .np-mac-dots i{ width: 8px; height: 8px; border-radius: 50%; }
    .np-mac-dots i:nth-child(1){ background: #FF5F57; }
    .np-mac-dots i:nth-child(2){ background: #FEBC2E; }
    .np-mac-dots i:nth-child(3){ background: #28C840; }
    .np-mac-url{ flex: 1; max-width: 210px; margin: 0 auto; text-align: center; font-size: 9.5px; color: var(--ink-3); background: #fff; border: 1px solid #E3E6EE; border-radius: 6px; padding: 3px 0; }
    .np-mac-app{ display: flex; height: 348px; background: #fff; }
    /* the real app sidebar: a cyan→indigo gradient with white text, white active pill */
    .np-mac-side{ width: 144px; flex-shrink: 0; background: linear-gradient(180deg, #2BB3DF 0%, #3841B1 100%); color: #fff; display: flex; flex-direction: column; padding: 12px 9px 10px; }
    .np-mac-side-head{ display: flex; align-items: center; justify-content: space-between; padding: 0 4px 12px; }
    .np-mac-logo{ width: 26px; height: 26px; border-radius: 7px; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11,16,32,0.2); }
    .np-mac-collapse{ display: inline-flex; color: rgba(255,255,255,0.7); }
    .np-mac-actions{ display: grid; gap: 2px; }
    .np-mac-item{ display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.92); padding: 7px 8px; border-radius: 8px; }
    .np-mac-item svg{ flex-shrink: 0; opacity: 0.9; }
    .np-mac-badge{ margin-left: auto; font-style: normal; font-size: 8px; font-weight: 700; background: #fff; color: #2f3aa0; border-radius: 999px; padding: 1px 6px; }
    .np-mac-sec{ display: block; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); padding: 15px 8px 6px; }
    .np-mac-chats{ display: grid; gap: 2px; }
    .np-mac-chat{ font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.85); padding: 7px 8px; border-radius: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .np-mac-chat.on{ background: #fff; color: #2a2f78; font-weight: 600; box-shadow: 0 3px 9px rgba(11,16,32,0.18); }
    .np-mac-foot{ margin-top: auto; padding-top: 10px; display: grid; gap: 3px; border-top: 1px solid rgba(255,255,255,0.18); }
    .np-mac-user{ display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 600; color: #fff; padding: 6px 8px; }
    .np-mac-user img{ border-radius: 50%; box-shadow: 0 0 0 1.5px rgba(255,255,255,0.5); }
    .np-mac-main{ flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .np-mac-head{ display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 12px 16px 11px; border-bottom: 1px solid var(--line); }
    .np-mac-head > span:first-child{ font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-4); }
    .np-mac-thread{ flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 11px; padding: 16px 16px 8px; overflow: hidden; }
    .np-mac-label{ position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%); font-size: 6px; letter-spacing: 0.14em; color: #59606E; }
    .np-mac-base{ position: relative; width: 113%; margin-left: -6.5%; height: 14px; background: linear-gradient(180deg,#F4F6F9 0%,#D7DBE2 28%,#B6BDC9 70%,#848D9D 100%); border-radius: 2px 2px 14px 14px; clip-path: polygon(1% 0,99% 0,100% 100%,0 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 3px rgba(11,16,32,0.18); }
    .np-mac-groove{ position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 78px; height: 6px; background: linear-gradient(180deg,#9AA2B1,#C3C9D3); border-radius: 0 0 9px 9px; box-shadow: inset 0 1px 2px rgba(11,16,32,0.25); }
    .np-mac-floor{ height: 16px; width: 86%; margin: 2px auto 0; background: radial-gradient(ellipse at 50% 0%, rgba(11,16,32,0.30), transparent 65%); filter: blur(5px); }
    .np-first{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em; text-transform: uppercase; color: #7c3aed; background: rgba(124,58,237,0.10); border-radius: 999px; padding: 4px 9px; }
    .np-card-actions{ display: flex; align-items: center; gap: 9px; margin-top: 11px; }
    .np-btn-w{ display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: #fff; background: linear-gradient(135deg,#2BB3DF,#3841B1); border-radius: 9px; padding: 8px 12px; box-shadow: 0 6px 14px -6px rgba(56,65,177,0.5); }
    .np-btn-q{ font-size: 11px; font-weight: 600; color: var(--ink-3); }
    .np-await{ display: inline-flex; align-items: center; gap: 7px; align-self: center; margin-top: 6px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.03em; color: var(--ink-4); }
    .np-await-dot{ width: 6px; height: 6px; border-radius: 50%; background: var(--ink-4); animation: np-blink 1.6s ease-in-out infinite; }
    @keyframes np-blink{ 0%,100%{ opacity: 0.3; } 50%{ opacity: 1; } }
    .np-inputbar{ margin: 0 14px 14px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; background: var(--bg-alt); border: 1px solid var(--line); border-radius: 12px; font-size: 11px; color: var(--ink-4); flex-shrink: 0; }
    .np-send{ width: 19px; height: 19px; border-radius: 6px; background: linear-gradient(135deg,#695bd7,#424dd3); color: #fff; font-size: 11px; display: inline-flex; align-items: center; justify-content: center; }

    /* memory hub */
    .np-memcard{ width: 100%; max-width: 420px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-xl); box-shadow: 0 30px 60px -28px rgba(31,52,128,0.4), 0 2px 6px rgba(11,16,32,0.05); padding: 18px 18px 22px; }
    .np-memhead{ display: flex; flex-direction: column; align-items: center; gap: 10px; padding-bottom: 6px; }
    .np-src-label{ font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-4); }
    .np-src-row{ display: inline-flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
    .np-src{ display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600; color: var(--ink-2); background: var(--bg-alt); border: 1px solid var(--line); border-radius: 999px; padding: 5px 12px 5px 6px; }
    .np-src-mk{ display: inline-flex; }
    .np-chip-grad{ font-family: var(--font-mono); font-size: 8.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #fff; background: var(--brand-gradient); border-radius: 999px; padding: 4px 10px; }
    .np-constel{ position: relative; width: 320px; max-width: 100%; height: 320px; margin: 10px auto 0; }
    .np-wires{ position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
    .np-wire{ stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 0; animation: np-wire 700ms ease both; }
    @keyframes np-wire{ 0%{ opacity: 0; stroke-dashoffset: 1; } 30%{ opacity: 1; } 100%{ opacity: 1; stroke-dashoffset: 0; } }
    .np-hub{ position: absolute; left: 50%; top: 42%; transform: translate(-50%,-50%); z-index: 2; display: flex; flex-direction: column; align-items: center; }
    .np-hub-halo{ position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 86px; height: 86px; border-radius: 50%; background: radial-gradient(circle, rgba(43,179,223,0.3), transparent 70%); animation: np-halo 3.4s ease-in-out infinite; }
    @keyframes np-halo{ 0%,100%{ opacity: 0.5; transform: translateX(-50%) scale(0.92); } 50%{ opacity: 0.95; transform: translateX(-50%) scale(1.12); } }
    .np-hub img{ width: 64px; height: 64px; border-radius: 50%; position: relative; box-shadow: 0 8px 18px -6px rgba(15,23,42,0.45), 0 0 0 3px #fff, 0 0 0 4px rgba(43,179,223,0.5); }
    .np-hub-n{ font-family: var(--font-display); font-weight: 600; font-size: 12.5px; color: var(--ink); margin-top: 9px; }
    .np-hub-pill{ margin-top: 6px; }
    .np-node{ position: absolute; transform: translate(-50%,-50%); z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .np-node img{ border-radius: 50%; box-shadow: 0 6px 14px -6px rgba(31,52,128,0.4); background: #fff; }
    .np-node em{ font-style: normal; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-3); }
    .np-nodepop{ opacity: 0; animation: np-nodepop 380ms cubic-bezier(0.2,1.4,0.4,1) both; }
    @keyframes np-nodepop{ from{ opacity: 0; transform: translate(-50%,-50%) scale(0.5); } to{ opacity: 1; transform: translate(-50%,-50%) scale(1); } }

    /* blueprint */
    .np-blueprint{ width: 100%; max-width: 420px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-xl); box-shadow: 0 30px 60px -28px rgba(31,52,128,0.4), 0 2px 6px rgba(11,16,32,0.05); padding: 20px 22px 24px; }
    .np-bp-head{ display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 18px; }
    .np-bp-head > span:first-child{ display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-display); font-weight: 600; font-size: 15px; color: var(--ink); }
    .np-bp-vs{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--ink-4); background: var(--bg-alt); border-radius: 999px; padding: 4px 9px; }
    .np-bp-line{ position: relative; }
    .np-bp-item{ position: relative; display: flex; gap: 15px; padding-bottom: 18px; }
    .np-bp-item:last-child{ padding-bottom: 0; }
    /* connector runs from this node's bottom to the next node — no overhang */
    .np-bp-item:not(:last-child)::before{ content: ""; position: absolute; left: 5.5px; top: 15px; height: calc(100% - 7px); width: 2px; background: var(--line-2); z-index: 0; }
    .np-bp-node{ position: relative; z-index: 1; flex: 0 0 auto; width: 13px; height: 13px; margin-top: 2px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 2.5px currentColor; }
    .np-bp-item.tone-goal{ color: var(--primary); }
    .np-bp-item.tone-obs{ color: #c98a1a; }
    .np-bp-item.tone-dec{ color: #7c3aed; }
    .np-bp-card{ flex: 1; min-width: 0; display: grid; gap: 3px; }
    .np-bp-tag{ font-family: var(--font-mono); font-size: 8px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: currentColor; }
    .np-bp-t{ font-size: 13px; font-weight: 500; color: var(--ink); line-height: 1.4; }
    .np-bp-meta{ font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.04em; color: var(--ink-4); }

    /* care routing */
    .np-care{ width: 100%; max-width: 420px; }
    .np-care-side{ background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: 0 22px 48px -26px rgba(31,52,128,0.38), 0 2px 6px rgba(11,16,32,0.05); padding: 14px 16px 16px; }
    .np-care-head{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 11px; }
    .np-care-role{ font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); font-weight: 600; }
    .np-care-who{ display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--ink); }
    .np-care-who img{ width: 20px; height: 20px; border-radius: 50%; }
    .np-care-bub{ display: flex; gap: 9px; align-items: flex-start; font-size: 12.5px; line-height: 1.5; color: var(--ink-2); }
    .np-care-bub b{ color: var(--ink); }
    .np-care-note{ display: block; margin-top: 10px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.03em; color: var(--ink-4); }
    .np-care-flow{ display: flex; align-items: center; gap: 8px; margin: 10px 6px; }
    .np-care-line{ flex: 1; height: 0; border-top: 1px dashed var(--line-2); }
    .np-care-tag{ display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--primary); white-space: nowrap; }
    .np-care-adv{ border-color: rgba(35,86,201,0.25); box-shadow: 0 16px 36px -18px rgba(35,86,201,0.35); }
    .np-care-live{ display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--success); }
    .np-care-live i{ width: 6px; height: 6px; border-radius: 50%; background: var(--success); animation: np-blink 2s ease-in-out infinite; }
    @keyframes np-blink{ 0%,100%{ opacity: 0.35; } 50%{ opacity: 1; } }
    .np-care-alert{ display: flex; align-items: center; gap: 10px; padding: 9px 11px; border-radius: 11px; background: #FFF7ED; border: 1px solid rgba(217,119,6,0.3); }
    .np-care-warn{ flex: 0 0 auto; width: 20px; height: 20px; border-radius: 50%; background: #d97706; color: #fff; font-weight: 800; font-size: 12px; display: inline-flex; align-items: center; justify-content: center; }
    .np-care-alert strong{ display: block; font-size: 12.5px; color: var(--ink); }
    .np-care-alert span{ font-size: 10.5px; color: var(--ink-3); }
    .np-care-ctx{ margin-top: 12px; display: grid; gap: 7px; }
    .np-care-ctx-h{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-4); }
    .np-care-ctx-row{ display: flex; align-items: center; gap: 7px; font-size: 11.5px; color: var(--ink-2); }
    .np-care-ctx-row svg{ color: var(--success); flex-shrink: 0; }
    .np-care-cap{ display: inline-flex; margin-top: 13px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--success); background: rgba(13,138,90,0.08); border-radius: 999px; padding: 5px 11px; }

    /* data engine */
    .np-engine{ width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 12px; }
    .np-eng-q{ display: flex; align-items: center; gap: 9px; align-self: stretch; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 11px 14px; font-size: 13px; font-style: italic; color: var(--ink); box-shadow: var(--shadow-card); }
    .np-eng-ava img{ width: 26px; height: 26px; border-radius: 50%; display: block; }
    .np-eng-paths{ display: flex; flex-direction: column; gap: 10px; }
    .np-eng-bad{ display: inline-flex; align-items: center; gap: 7px; align-self: center; font-family: var(--font-mono); font-size: 9.5px; color: var(--ink-4); text-decoration: line-through; text-decoration-color: rgba(154,160,180,0.6); }
    .np-eng-x{ text-decoration: none; color: #c2410c; font-weight: 700; }
    .np-eng-good{ display: flex; flex-direction: column; align-items: center; gap: 0; }
    .np-eng-box{ width: 100%; background: var(--ink); border-radius: 14px; padding: 13px 15px; box-shadow: 0 18px 40px -18px rgba(11,16,32,0.6); }
    .np-eng-box-h{ display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em; text-transform: uppercase; color: #8fe0f7; font-weight: 600; }
    .np-eng-sql{ display: block; margin-top: 9px; font-family: var(--font-mono); font-size: 11px; line-height: 1.6; color: rgba(255,255,255,0.82); }
    .np-eng-sql .np-kw{ color: #c4b5fd; }
    .np-eng-down{ display: inline-flex; color: var(--success); margin: 5px 0; }
    .np-eng-ans{ width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; background: #fff; border: 1px solid rgba(13,138,90,0.3); border-radius: 14px; padding: 12px 15px; box-shadow: 0 14px 30px -16px rgba(13,138,90,0.35); }
    .np-eng-ans strong{ font-family: var(--font-display); font-size: 19px; letter-spacing: -0.02em; color: var(--ink); }
    .np-eng-cite{ display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.03em; color: var(--success); }
    .np-eng-cite svg{ flex-shrink: 0; }

    /* governance console */
    .np-gov{ width: 100%; max-width: 400px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-xl); box-shadow: 0 30px 60px -28px rgba(31,52,128,0.4), 0 2px 6px rgba(11,16,32,0.05); padding: 18px 20px 22px; }
    .np-gov-head{ display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 14px; border-bottom: 1px solid var(--line); }
    .np-gov-head > span:first-child{ display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-display); font-weight: 600; font-size: 15px; color: var(--ink); }
    .np-gov-tenant{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--primary); background: var(--primary-50); border-radius: 999px; padding: 4px 9px; }
    .np-gov-sec{ margin-top: 16px; }
    .np-gov-sec-h{ display: block; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-4); margin-bottom: 10px; }
    .np-gov-row{ display: flex; align-items: center; justify-content: space-between; padding: 9px 0; font-size: 13px; color: var(--ink-2); border-top: 1px solid var(--line); }
    .np-gov-row:first-of-type{ border-top: none; }
    .np-tgl{ flex: 0 0 auto; width: 36px; height: 21px; border-radius: 999px; background: var(--line-2); position: relative; transition: background 260ms ease; }
    .np-tgl i{ position: absolute; top: 2px; left: 2px; width: 17px; height: 17px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(11,16,32,0.3); transition: transform 260ms cubic-bezier(0.2,0.9,0.3,1); }
    .np-tgl.on{ background: var(--success); }
    .np-tgl.on i{ transform: translateX(15px); }
    .np-tgl.flip{ animation: np-flip 4s ease-in-out 1600ms infinite; }
    @keyframes np-flip{ 0%,40%{ background: var(--line-2); } 55%,90%{ background: var(--success); } 100%{ background: var(--line-2); } }
    .np-tgl.flip i{ animation: np-flip-knob 4s ease-in-out 1600ms infinite; }
    @keyframes np-flip-knob{ 0%,40%{ transform: translateX(0); } 55%,90%{ transform: translateX(15px); } 100%{ transform: translateX(0); } }
    .np-gov-tone{ display: flex; align-items: center; gap: 11px; font-size: 11px; color: var(--ink-3); }
    .np-gov-track{ flex: 1; height: 6px; border-radius: 999px; background: linear-gradient(90deg, #2BB3DF, #3841B1); position: relative; }
    .np-gov-knob{ position: absolute; top: 50%; left: 32%; transform: translate(-50%,-50%); width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(11,16,32,0.3), 0 0 0 1px var(--line); animation: np-knob 5s ease-in-out 1s infinite; }
    @keyframes np-knob{ 0%,100%{ left: 30%; } 50%{ left: 42%; } }
    .np-gov-voice{ display: block; margin-top: 12px; font-size: 11px; color: var(--ink-3); }

    @media (max-width: 900px){
      .np-moat{ grid-template-columns: 1fr; gap: 32px; }
      .np-moat-rev .np-moat-copy{ order: 0; }
      .np-moat-copy{ text-align: center; }
      .np-points{ max-width: 420px; margin-left: auto; margin-right: auto; text-align: left; }
      .np-moat-copy .mf-eyebrow{ display: block; }
      .np-moat-copy p{ margin-left: auto; margin-right: auto; }
    }
    /* on a phone the fixed sidebar squeezes the chat — drop it so the desktop
       view's message stays legible; the MacBook frame still reads as desktop */
    @media (max-width: 560px){
      .np-mac-side{ display: none; }
    }
    @media (prefers-reduced-motion: reduce){
      .np-wire, .np-pop, .np-nodepop, .np-await-dot, .np-hub-halo{ animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
    }
  `}</style>
);
