/* Mid-fi B+ — Hero + Two Experiences only.
   Real type, real spacing, real screen mocks. Other sections will follow. */

const MF_FEATURES = [
  { title: 'Proactive Nudging', body: 'Turns LMS, SIS, and CRM signals into timely nudges — not noise.' },
  { title: 'Evidence-Based', body: 'Motivational, scaffolded conversations grounded in research.' },
  { title: 'Gets Smarter', body: 'Refines triggers, timing, and tone based on real outcomes.' },
  { title: 'Multi-Agent', body: 'Academic, career, and finance agents orchestrating together.' },
];

// ── icons ───────────────────────────────────────────
const ShieldCheck = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
const Tick = () => (
  <span className="mf-tick">
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
  </span>
);
const ArrowRight = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);

// ── compliance trust bar (top) ─────────────────────
const TrustBar = () => (
  <div className="mf-trustbar">
    <div className="mf-trustbar-inner">
      <span className="lbl">BUILT FOR HIGHER-ED</span>
      <div className="items">
        <span><ShieldCheck/> Official Canvas Partner</span>
        <span><ShieldCheck/> FERPA Aligned</span>
        <span><ShieldCheck/> GDPR Aligned</span>
        <span><ShieldCheck/> SSO Ready</span>
        <span><ShieldCheck/> Mobile-First Security</span>
      </div>
    </div>
  </div>
);

// ── nav ─────────────────────────────────────────────
const NavBar = () => (
  <div className="mf-nav">
    <div className="mf-nav-inner">
      <span className="mf-logo">
        <img src="assets/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 30, display: 'block' }}/>
      </span>
      <div className="mf-nav-links">
        <a className="active" href="Streaque Mid-fi.html">Home</a>
        <a href="#about">About</a>
        <a href="How Nia Works.html">How Nia Works</a>
        <a href="Contact.html">Contact</a>
      </div>
      <a href="Contact.html#form" className="mf-btn mf-btn-primary mf-btn-sm" style={{ textDecoration: 'none' }}>Book a demo <ArrowRight s={12}/></a>
    </div>
  </div>
);

// ── hero ────────────────────────────────────────────
const Hero = () => (
  <section className="mf-hero">
    <div className="mf-hero-bg"/>
    <div className="mf-container mf-hero-inner">
      <div className="mf-hero-grid">
        <div>
          <span className="mf-eyebrow">Nia by Streaque</span>
          <h1 style={{ marginTop: 18 }}>
            Every signal,<br/>
            <span className="mf-grad-text">every student,</span><br/>
            answered.
          </h1>
          <p className="mf-hero-sub">
            The institution-governed AI layer that turns LMS, SIS, and CRM data
            into warm, evidence-based coaching — for every student, every week.
          </p>
          <div className="mf-hero-actions">
            <a href="Contact.html#form" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: 'none' }}>Book a demo <ArrowRight/></a>
            <a href="mailto:info@streaque.com?subject=Investor%20brief" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: 'none' }}>Investor brief</a>
          </div>
          <div className="mf-hero-meta">
            <div className="mf-hero-meta-stat">
              <span className="num">12+</span>
              <span className="lbl">institutions piloting</span>
            </div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat">
              <span className="num">93%</span>
              <span className="lbl">active momentum plans</span>
            </div>
            <div className="mf-hero-meta-divider"/>
            <div className="mf-hero-meta-stat">
              <span className="num">100%</span>
              <span className="lbl">institution-owned data</span>
            </div>
          </div>
        </div>

        {/* product mocks */}
        <div className="mf-mock-stage">
          {/* desktop */}
          <div className="mf-mock-desktop">
            <div className="mf-mock-desktop-bar">
              <span className="dot"/><span className="dot"/><span className="dot"/>
              <span className="url">advisor.streaque.app / queue</span>
              <span style={{ marginLeft: 'auto' }}>● live</span>
            </div>
            <div className="mf-mock-desktop-body">
              <div className="mf-mock-desktop-statrow">
                <div className="mf-mock-stat-card primary">
                  <div className="num">93%</div>
                  <div className="lbl">momentum plans</div>
                </div>
                <div className="mf-mock-stat-card">
                  <div className="num">75%</div>
                  <div className="lbl">nudge engagement</div>
                </div>
                <div className="mf-mock-stat-card">
                  <div className="num">63%</div>
                  <div className="lbl">recs completed</div>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 8, marginTop: 4 }}>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4 }}>EARLY-ALERT QUEUE · 4</div>
                {[
                  { i: 'M', n: 'Maya Reyes', s: 'BIO 201 · missed quiz', tag: 'Nudged', tagKind: 'success' },
                  { i: 'J', n: 'Jonas Kim', s: 'GPA dip · 3 weeks', tag: 'Draft reply', tagKind: 'warm' },
                  { i: 'A', n: 'Anya Patel', s: 'Low engagement', tag: 'Schedule', tagKind: '' },
                  { i: 'R', n: 'Ravi Shah', s: 'Aid form overdue', tag: 'Auto-routed', tagKind: 'success' },
                ].map((r) => (
                  <div key={r.n} className="mf-mock-row">
                    <span className="mf-mock-avatar">{r.i}</span>
                    <span className="grow"><span className="name">{r.n}</span> · <span className="sig">{r.s}</span></span>
                    <span className={'mf-chip ' + (r.tagKind === 'success' ? 'mf-chip-success' : r.tagKind === 'warm' ? 'mf-chip-warm' : 'mf-chip-neutral')} style={{ fontSize: 10, padding: '2px 8px' }}>{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="mf-mock-phone">
            <div className="mf-mock-phone-screen">
              <div className="mf-mock-phone-status">
                <span>9:41</span>
                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }}/>
                  Nia
                </span>
              </div>
              <div className="mf-mock-phone-greet">Good morning, Maya 👋</div>
              <div className="mf-bubble nia">Ready for ch. 4? I'll keep it to 10 min.</div>
              <div className="mf-bubble user">ok yeah</div>
              <div className="mf-bubble nia">Great — starting with the hardest concept first.</div>
              <div className="mf-mock-phone-card">
                <div className="title">BIO 201 · Cell respiration</div>
                <div className="meta">10 min lesson · adapts to your pace</div>
              </div>
            </div>
          </div>

          {/* annotations */}
          <div className="mf-anno" style={{ top: -22, left: 100 }}>
            <svg width="40" height="22" viewBox="0 0 40 22"><path d="M2 4 Q 20 24, 38 18 L 32 14 M 38 18 L 34 22"/></svg>
            staff view
          </div>
          <div className="mf-anno" style={{ bottom: 60, left: -90, width: 90, whiteSpace: 'normal', textAlign: 'right' }}>
            <span>same brain,<br/>student view</span>
            <svg width="50" height="22" viewBox="0 0 50 22"><path d="M2 11 Q 25 0, 48 14 L 42 10 M 48 14 L 44 18"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── two experiences ─────────────────────────────────
const TwoExperiences = () => (
  <section className="mf-section alt">
    <div className="mf-container">
      <div className="mf-section-head">
        <span className="mf-eyebrow">Two experiences · One unified system</span>
        <h2>Same data model. Same governance. <em style={{ fontStyle: 'normal', color: 'var(--ink-3)' }}>Two front doors.</em></h2>
        <p>Tuned to who's holding the device — never to who pays the bill.</p>
      </div>
      <div className="mf-two-grid">
        {/* Students */}
        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-grad">Nia for Students</span>
            <span className="mf-status-pill mf-status-live">
              <span className="dot"/> Available now
            </span>
          </div>
          <h3>A coach in the pocket.</h3>
          <p className="lede">Personalized momentum plans, course-aware tutoring, and quiet nudges that actually land.</p>

          <div className="mf-experience-mock" style={{ flexDirection: 'row' }}>
            <div className="mf-mini-phone">
              <div className="top"><span>9:41</span><span>Nia</span></div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600 }}>Today · 3 things</div>
              <div className="mf-mini-bubble nia">Pop-quiz prep?</div>
              <div className="mf-mini-bubble user">yes</div>
              <div className="mf-mini-bubble nia">Starting at ch. 4 →</div>
              <div style={{ marginTop: 'auto', padding: 6, background: 'var(--bg-alt)', border: '1px solid var(--line)', borderRadius: 8, fontSize: 9 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 10 }}>BIO 201 · 10 min</div>
                <div style={{ color: 'var(--ink-3)', marginTop: 1 }}>adaptive lesson</div>
              </div>
            </div>
            <ul style={{ flex: 1, margin: 0, padding: '0 0 0 4px' }}>
              <li><Tick/> Daily momentum plan</li>
              <li><Tick/> Course-aware tutoring</li>
              <li><Tick/> Career & finance agents</li>
              <li><Tick/> Always FERPA-scoped</li>
            </ul>
          </div>
        </div>

        {/* Staff */}
        <div className="mf-experience-card">
          <div className="head">
            <span className="mf-chip mf-chip-warm">Nia for Staff</span>
            <span className="mf-status-pill mf-status-dev">
              <span className="dot"/> In development · Pilot 2026
            </span>
          </div>
          <h3>A co-pilot at the desk.</h3>
          <p className="lede">Conversation summaries, draft replies, and the receipt trail behind every nudge.</p>

          <div className="mf-experience-mock" style={{ background: 'white' }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between' }}>
              <span>EARLY-ALERT QUEUE · 12</span>
              <span style={{ color: 'var(--success)' }}>● synced</span>
            </div>
            {[
              { i: 'M', n: 'Maya Reyes', s: 'missed BIO quiz', tag: 'Nudged', tagKind: 'success' },
              { i: 'J', n: 'Jonas Kim', s: 'GPA dip', tag: 'Draft reply', tagKind: 'warm' },
              { i: 'A', n: 'Anya Patel', s: 'low engagement', tag: 'Meet?', tagKind: '' },
              { i: 'R', n: 'Ravi Shah', s: 'aid overdue', tag: 'Auto-routed', tagKind: 'success' },
            ].map((r) => (
              <div key={r.n} className="mf-queue-row">
                <span className="mf-mock-avatar" style={{ width: 22, height: 22, fontSize: 10 }}>{r.i}</span>
                <span className="grow"><span className="name">{r.n}</span> · <span className="sig">{r.s}</span></span>
                <span className={'mf-chip ' + (r.tagKind === 'success' ? 'mf-chip-success' : r.tagKind === 'warm' ? 'mf-chip-warm' : 'mf-chip-neutral')} style={{ fontSize: 10, padding: '2px 8px' }}>{r.tag}</span>
              </div>
            ))}
          </div>
          <ul>
            <li><Tick/> Early-alert queue, ranked by impact</li>
            <li><Tick/> One-click reply drafts in your voice</li>
            <li><Tick/> Audit log on every action</li>
            <li><Tick/> Role-based permissions, top to bottom</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ── main page ───────────────────────────────────────
const MidfiBPlus = () => {
  // Resolve window.MF* at render time (not parse time) so midfi-rest.jsx
  // has had a chance to register them.
  const Features = window.MFFeatures || (() => null);
  const Video = window.MFVideo || (() => null);
  const Stats = window.MFStats || (() => null);
  const Team = window.MFTeam || (() => null);
  const TechPrivacy = window.MFTechPrivacy || (() => null);
  const CTA = window.MFCTA || (() => null);
  const Footer = window.MFFooter || (() => null);
  return (
    <div className="mf">
      <TrustBar/>
      <NavBar/>
      <Hero/>
      <TwoExperiences/>
      <Features/>
      <Video/>
      <Stats/>
      <Team/>
      <TechPrivacy/>
      <CTA/>
      <Footer/>
    </div>
  );
};

// expose Tick + ArrowRight for midfi-rest.jsx
window.Tick = Tick;
window.ArrowRight = ArrowRight;
window.MidfiBPlus = MidfiBPlus;
