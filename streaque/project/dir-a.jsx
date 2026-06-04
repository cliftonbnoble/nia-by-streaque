/* Direction A — Editorial / Investor-Forward
   Vibe: New-York-Times-meets-AI-startup. Heavy serifs would feel wrong here so we keep
   the hand-drawn voice. Lead with momentum and outcomes; hero pairs a confident headline
   with an animated "conversation peek" + investor-worthy stat strip. */

const DirA = () => (
  <div className="wf wf-inner" id="dir-a-root">
    <Nav cta="Talk to Us" />

    {/* HERO ── editorial split, conversation peek + stat strip */}
    <div className="wf-section" style={{ paddingTop: 48, paddingBottom: 56, position: 'relative' }}>
      <SectionLabel n="01" name="Hero · Editorial" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }}>
        <div>
          <Eyebrow>Nia by Streaque · Higher-Ed AI</Eyebrow>
          <h1 style={{ marginTop: 14, marginBottom: 18 }}>
            The institution-governed<br/>
            <Squiggle accent>student success</Squiggle> layer<br/>
            <span style={{ fontFamily: 'var(--hand)', fontWeight: 400, fontSize: 38, color: 'var(--ink-2)' }}>
              for the next decade of higher ed.
            </span>
          </h1>
          <p style={{ fontSize: 18, maxWidth: 480, marginBottom: 22 }}>
            Nia turns every signal — from the LMS to the SIS — into warm, evidence-based
            coaching, so no student falls through the cracks.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Btn variant="accent" size="lg">Read the brief →</Btn>
            <Btn variant="ghost">Watch 60-sec demo</Btn>
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 22, alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>
              {['M', 'J', 'A'].map((c, i) => (
                <span key={i} className="wf-avatar" style={{ marginLeft: i ? -10 : 0, background: i === 1 ? 'color-mix(in oklch, var(--accent) 25%, var(--paper))' : 'var(--paper-2)' }}>{c}</span>
              ))}
            </div>
            <small>Trusted by advisors at 12+ institutions</small>
          </div>
        </div>

        {/* Conversation peek card */}
        <div style={{ position: 'relative' }}>
          <div className="wf-box" style={{ padding: 16, transform: 'rotate(0.6deg)' }}>
            <div className="wf-box-corner">live · 04:21 pm</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              <div className="wf-bubble nia">Hey Maya — I noticed you skipped the Bio quiz. Want me to walk through ch. 4 in 10 mins?</div>
              <div className="wf-bubble user">honestly i'm overwhelmed</div>
              <div className="wf-bubble nia">Totally fair. Let's pick the one thing due first. <span style={{ opacity: 0.6 }}>(opens calendar)</span></div>
              <div style={{ display: 'flex', gap: 6, alignSelf: 'flex-start' }}>
                <Chip kind="accent">Academic agent</Chip>
                <Chip kind="amber">+ Wellness</Chip>
              </div>
            </div>
          </div>
          <Anno arrowDir="left" arrowLen={60}
            style={{ top: 30, right: -160, width: 160 }}>
            agents hand off mid-conversation — tone stays warm
          </Anno>
          <Anno arrowDir="up" arrowLen={50}
            style={{ bottom: -70, left: 30 }}>
            FERPA-scoped · advisor can mirror
          </Anno>
        </div>
      </div>

      {/* Stat ribbon */}
      <div className="wf-stroke-2 wf-stroke" style={{ marginTop: 56, padding: '20px 28px', display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: 24, alignItems: 'center', background: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 22, lineHeight: 1.05, paddingRight: 18, borderRight: '1.5px solid var(--paper)' }}>
          The numbers,<br/>so far.
        </div>
        {STATS.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 44 }}>{s.num}</div>
            <small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>{s.label}</small>
          </div>
        ))}
      </div>
    </div>

    {/* TRUST BAR */}
    <div className="wf-section wf-section-alt" style={{ paddingTop: 28, paddingBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 220, flexShrink: 0 }}>
          <h3 style={{ fontFamily: 'var(--hand-bold)', fontSize: 22, lineHeight: 1.05 }}>Built for higher-ed standards.</h3>
          <Note style={{ fontSize: 12 }}>secure · integration-ready · privacy-by-design</Note>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {TRUST_ITEMS.map((t) => <TrustBadge key={t}>{t}</TrustBadge>)}
        </div>
      </div>
    </div>

    {/* TWO EXPERIENCES */}
    <div className="wf-section" style={{ paddingTop: 56 }}>
      <SectionLabel n="02" name="Two Experiences" />
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <Eyebrow>Two views, one governed system</Eyebrow>
        <h2 style={{ marginTop: 8 }}>Two experiences. <Squiggle>One unified system.</Squiggle></h2>
      </div>
      <div className="wf-grid-2">
        {[
          { tag: 'For Students', title: 'A coach, not a chatbot.', body: 'Personalized nudges. Scaffolded conversations. Always in their corner.', items: ['Daily momentum plan', 'Course-aware tutoring', 'Career & finance, in one place'], side: 'student' },
          { tag: 'For Staff', title: 'Co-pilot for the front line.', body: 'Advisors and faculty get the early warning signal — and the reply draft.', items: ['Early-alert queue', 'Conversation summaries', 'Outreach templates that learn'], side: 'staff' },
        ].map((c, i) => (
          <div key={i} className="wf-stroke" style={{ padding: 22, position: 'relative' }}>
            <Chip kind={i === 0 ? 'accent' : 'amber'}>{c.tag}</Chip>
            <h3 style={{ marginTop: 10, fontSize: 26, fontFamily: 'var(--hand-bold)' }}>{c.title}</h3>
            <p style={{ marginTop: 6 }}>{c.body}</p>
            <Img label={c.side === 'student' ? 'mobile · student feed' : 'desktop · advisor queue'} h={130} style={{ marginTop: 14 }} />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {c.items.map((it) => (
                <li key={it} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14 }}>
                  <span className="wf-tick">✓</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* FEATURES — bento with one hero card */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="03" name="What Makes Nia Different" />
      <h2 style={{ maxWidth: 560, marginBottom: 22 }}>Coaching that <Squiggle accent>learns</Squiggle> the institution it serves.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 14 }}>
        <div className="wf-stroke" style={{ padding: 20, gridRow: 'span 2', display: 'flex', flexDirection: 'column' }}>
          <span className="wf-icon">↗</span>
          <h3 style={{ marginTop: 10 }}>Proactive Nudging</h3>
          <p style={{ marginTop: 6 }}>Signals from your LMS, SIS, and CRM become timely nudges — not noise.</p>
          <Img label="signal → nudge timeline" h={150} style={{ marginTop: 14 }} />
        </div>
        {FEATURES.slice(1).map((f) => (
          <div key={f.title} className="wf-stroke" style={{ padding: 18 }}>
            <span className="wf-icon">{f.icon}</span>
            <h3 style={{ marginTop: 8 }}>{f.title}</h3>
            <p style={{ marginTop: 6, fontSize: 14 }}>{f.body}</p>
          </div>
        ))}
        <div className="wf-stroke wf-stroke-dashed" style={{ padding: 18, gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="wf-num">+1</span>
          <div>
            <h3 style={{ fontSize: 18 }}>Outcome-tied</h3>
            <p style={{ fontSize: 14 }}>Every nudge is measured against retention, GPA, and time-to-degree.</p>
          </div>
        </div>
      </div>
    </div>

    {/* VIDEO */}
    <div className="wf-section">
      <SectionLabel n="04" name="See Nia in Action" />
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <h2>See how Nia <Squiggle>transforms</Squiggle> student success.</h2>
      </div>
      <div className="wf-img" style={{ height: 360, position: 'relative' }}>
        <div className="wf-img-label">16:9 · YouTube embed</div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', border: '2px solid var(--ink)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>▶</div>
        </div>
      </div>
    </div>

    {/* TECH & PRIVACY */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="05" name="Tech Stack & Privacy" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 32, alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ marginBottom: 14 }}>Data privacy, by design.</h2>
          <p style={{ marginBottom: 14, fontSize: 16 }}>Secure, interoperable, and built for higher-ed governance from day one.</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Official Canvas Partner', 'Connects to LMS / SIS / CRM', 'Institution retains data ownership', 'Role-based permissions', 'Encryption in transit & at rest'].map((it) => (
              <li key={it} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className="wf-tick">✓</span>{it}
              </li>
            ))}
          </ul>
        </div>
        {/* Architecture diagram */}
        <div className="wf-box" style={{ padding: 22 }}>
          <div className="wf-box-corner">architecture</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, alignItems: 'center', marginTop: 6 }}>
            <div className="wf-col" style={{ gap: 10 }}>
              {['LMS', 'SIS', 'CRM'].map((s) => <div key={s} className="wf-stroke" style={{ padding: '10px 12px', textAlign: 'center', fontSize: 14 }}>{s}</div>)}
            </div>
            <div style={{ position: 'relative', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="wf-stroke" style={{ padding: '14px 18px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: 10, textAlign: 'center', fontFamily: 'var(--hand-bold)', fontSize: 18 }}>
                Nia<br/><small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>orchestrator</small>
              </div>
            </div>
            <div className="wf-col" style={{ gap: 10 }}>
              {['LLMs', 'Tutors', 'Workflows'].map((s) => <div key={s} className="wf-stroke" style={{ padding: '10px 12px', textAlign: 'center', fontSize: 14 }}>{s}</div>)}
            </div>
          </div>
          <Note style={{ marginTop: 14, display: 'block', textAlign: 'center' }}>
            sits between your systems and AI models — orchestrating governed nudges & workflows
          </Note>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="wf-section" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '56px 40px' }}>
      <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
        <Eyebrow style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>Find your fit</Eyebrow>
        <h2 style={{ color: 'var(--paper)', margin: '12px 0 14px', fontSize: 44 }}>
          Pilot with us. <span style={{ color: 'color-mix(in oklch, var(--accent) 70%, var(--paper))' }}>Or invest with us.</span>
        </h2>
        <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, var(--ink))', fontSize: 16, marginBottom: 22 }}>
          Customized workflows · Shared roadmap · Preferred pricing · Dedicated support
        </p>
        <Btn variant="accent" size="lg">Get started →</Btn>
      </div>
    </div>

    {/* FOOTER */}
    <div className="wf-section" style={{ paddingTop: 28, paddingBottom: 22, background: 'var(--paper-2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 24 }}>
        <div>
          <Logo />
          <p style={{ fontSize: 13, marginTop: 10 }}>Streaque is a Higher Education AI platform.</p>
          <small>© 2026 Streaque</small>
        </div>
        <div className="wf-col" style={{ gap: 6, fontSize: 14 }}>
          <small>Site</small>
          <span>Home</span><span>About</span><span>How Nia Works</span><span>Our Team</span>
        </div>
        <div className="wf-col" style={{ gap: 6, fontSize: 14 }}>
          <small>Legal</small>
          <span>Privacy</span><span>Terms</span>
        </div>
        <div className="wf-col" style={{ gap: 6, fontSize: 13 }}>
          <small>Get in touch</small>
          <span>info@streaque.com</span>
          <span>(707) 742-3090</span>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            <span className="wf-icon" style={{ width: 26, height: 26, fontSize: 12 }}>YT</span>
            <span className="wf-icon" style={{ width: 26, height: 26, fontSize: 12 }}>in</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

window.DirA = DirA;
