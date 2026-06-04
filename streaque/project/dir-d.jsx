/* Direction D — Conversation-as-Hero (Wispr-inspired)
   Vibe: like wisprflow.ai — a single, oversized, animated demo of the product
   anchors the page. Wide, calm, lots of whitespace, copy is short and lyrical.
   The conversation itself is the hero; everything else supports it. */

const DirD = () => (
  <div className="wf wf-inner" id="dir-d-root">
    <Nav cta="Talk to Nia" />

    {/* HERO ── giant centered conversation, minimal copy */}
    <div className="wf-section" style={{ paddingTop: 64, paddingBottom: 72, textAlign: 'center', position: 'relative' }}>
      <SectionLabel n="01" name="Hero · Conversation as the product" />
      <Eyebrow>Nia by Streaque</Eyebrow>
      <h1 style={{ fontSize: 64, lineHeight: 1.0, marginTop: 18, maxWidth: 760, margin: '18px auto 0' }}>
        Every student,<br/>
        <Squiggle accent>quietly coached.</Squiggle>
      </h1>
      <p style={{ fontSize: 18, marginTop: 18, maxWidth: 480, margin: '18px auto 0' }}>
        Institution-governed AI that turns your data into warm,
        evidence-based conversations — the moment they matter.
      </p>

      {/* Big conversation showcase */}
      <div style={{ marginTop: 36, position: 'relative', maxWidth: 720, margin: '36px auto 0' }}>
        <div className="wf-stroke-2 wf-stroke" style={{ padding: 24, background: 'var(--paper)', borderRadius: 18, textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px dashed var(--ink-3)' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="wf-icon" style={{ width: 30, height: 30, fontSize: 14, background: 'var(--accent)', color: 'white' }}>N</span>
              <div>
                <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 16 }}>Nia · Academic agent</div>
                <small style={{ fontSize: 10 }}>FERPA-scoped · acting on Maya's BIO 201 signals</small>
              </div>
            </div>
            <Chip kind="accent">● live</Chip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="wf-bubble nia">Hey Maya — I noticed you skipped the Bio quiz this morning. Want to walk through ch. 4 together in 10 minutes?</div>
            <div className="wf-bubble user">honestly i'm overwhelmed</div>
            <div className="wf-bubble nia">That's fair. Let's pick the <em>one</em> thing due first and start there. Quiz is 8% — your essay's 25%. Essay first?</div>
            <div className="wf-bubble user">ok yeah</div>
            <div className="wf-bubble nia">
              Pulling your draft and the rubric. <span style={{ opacity: 0.7 }}>(opens Canvas)</span>
              <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <Chip kind="accent">→ academic agent</Chip>
                <Chip kind="amber">→ wellness check-in scheduled</Chip>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18, paddingTop: 12, borderTop: '1px dashed var(--ink-3)', fontSize: 11 }}>
            <small>advisor mirror: Dr. Chen</small>
            <small>audit · logged</small>
            <small>tone · warm / direct</small>
          </div>
        </div>

        <Anno arrowDir="right" arrowLen={60}
          style={{ top: 80, left: -180, width: 170, textAlign: 'right' }}>
          agent hands off to wellness — student never sees the seam
        </Anno>
        <Anno arrowDir="left" arrowLen={60}
          style={{ bottom: 30, right: -160, width: 150 }}>
          every turn audit-logged
        </Anno>
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
        <Btn variant="accent" size="lg">Get started</Btn>
        <Btn variant="ghost" size="lg">See how it works ↓</Btn>
      </div>
    </div>

    {/* TRUST — minimal, single line */}
    <div className="wf-section" style={{ paddingTop: 24, paddingBottom: 24, borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
        <small>built for higher-ed →</small>
        {TRUST_ITEMS.map((t) => <TrustBadge key={t}>{t}</TrustBadge>)}
      </div>
    </div>

    {/* TWO EXPERIENCES — diagonal split */}
    <div className="wf-section" style={{ paddingTop: 56 }}>
      <SectionLabel n="02" name="Two Experiences" />
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontSize: 44 }}>One brain. <Squiggle>Two front doors.</Squiggle></h2>
      </div>
      <div style={{ position: 'relative', minHeight: 320 }}>
        <div className="wf-stroke" style={{ position: 'absolute', top: 0, left: 0, width: '60%', padding: 22, transform: 'rotate(-0.5deg)' }}>
          <Chip kind="accent">For Students</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 26 }}>A coach that texts back.</h3>
          <p style={{ marginTop: 6 }}>Daily momentum. Course-aware tutoring. Always in their corner — never in their feed.</p>
          <Img label="phone · ambient companion" h={120} style={{ marginTop: 14 }} />
        </div>
        <div className="wf-stroke" style={{ position: 'absolute', top: 80, right: 0, width: '60%', padding: 22, transform: 'rotate(0.6deg)', background: 'var(--paper)' }}>
          <Chip kind="amber">For Staff</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 26 }}>A co-pilot that briefs you first.</h3>
          <p style={{ marginTop: 6 }}>Conversation summaries, draft replies, and the receipt trail behind every nudge.</p>
          <Img label="advisor desk · briefing" h={120} style={{ marginTop: 14 }} />
        </div>
        <div style={{ height: 320 }} />
      </div>
    </div>

    {/* FEATURES — 4 across, illustrated with mini conversations */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="03" name="What Makes Nia Different" />
      <h2 style={{ textAlign: 'center', marginBottom: 22 }}>Four moves. <Squiggle accent>Quietly, all the time.</Squiggle></h2>
      <div className="wf-grid-4">
        {[
          { title: 'Proactive Nudging', body: 'Signals → timely nudges, not noise.', preview: '"You missed the Bio quiz."' },
          { title: 'Evidence-Based', body: 'Motivational, scaffolded conversations.', preview: '"Let\'s start with the rubric."' },
          { title: 'Gets Smarter', body: 'Learns your students, your tone.', preview: '"You prefer mornings — okay."' },
          { title: 'Multi-Agent', body: 'Academic, career, finance — together.', preview: '"Looping in financial aid."' },
        ].map((f) => (
          <div key={f.title} className="wf-stroke" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 16 }}>{f.title}</h3>
            <p style={{ fontSize: 13, marginTop: 4 }}>{f.body}</p>
            <div className="wf-bubble nia" style={{ marginTop: 12, fontSize: 12, padding: '8px 10px' }}>
              {f.preview}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* STATS — oversized editorial */}
    <div className="wf-section">
      <SectionLabel n="04" name="Stats · Quiet outcomes" />
      <div className="wf-grid-3" style={{ gap: 32, alignItems: 'flex-start' }}>
        {STATS.map((s) => (
          <div key={s.num}>
            <div className="wf-stat-num" style={{ fontSize: 110 }}>{s.num}</div>
            <div style={{ height: 1.5, background: 'var(--ink)', marginTop: 6, marginBottom: 10 }} />
            <p style={{ fontSize: 14 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* VIDEO */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="05" name="Video Explainer" />
      <h2 style={{ textAlign: 'center', marginBottom: 22 }}>See a real week with Nia.</h2>
      <div className="wf-img" style={{ height: 360, maxWidth: 820, margin: '0 auto' }}>
        <div className="wf-img-label">16:9 · cinematic walkthrough</div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', border: '2px solid var(--ink)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>▶</div>
        </div>
      </div>
    </div>

    {/* TECH — quiet, single hub-and-spoke */}
    <div className="wf-section">
      <SectionLabel n="06" name="Tech & Privacy" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 28, alignItems: 'center' }}>
        <div>
          <h2>Quietly governed.<br/><Squiggle accent>Loudly capable.</Squiggle></h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            {['Official Canvas Partner', 'Connects to LMS / SIS / CRM', 'Institution retains data ownership', 'Role-based permissions', 'Encryption in transit & at rest'].map((it) => (
              <li key={it}><span className="wf-tick">✓</span> {it}</li>
            ))}
          </ul>
        </div>
        {/* Hub and spoke */}
        <div style={{ position: 'relative', height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="wf-stroke-2 wf-stroke" style={{ padding: 18, background: 'var(--ink)', color: 'var(--paper)', borderRadius: 999, width: 130, height: 130, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 24 }}>Nia</div>
            <small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>orchestrator</small>
          </div>
          {[
            { l: 'LMS', x: '8%', y: '10%' },
            { l: 'SIS', x: '8%', y: '70%' },
            { l: 'CRM', x: '85%', y: '10%' },
            { l: 'LLM', x: '85%', y: '70%' },
          ].map((s) => (
            <div key={s.l} className="wf-stroke" style={{ position: 'absolute', left: s.x, top: s.y, padding: '8px 14px', fontSize: 13 }}>{s.l}</div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="wf-section" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '64px 40px', textAlign: 'center' }}>
      <Eyebrow style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>Find your fit</Eyebrow>
      <h2 style={{ color: 'var(--paper)', margin: '12px 0', fontSize: 48 }}>
        Pilot with us.<br/>
        <span style={{ color: 'color-mix(in oklch, var(--accent) 65%, var(--paper))' }}>Or invest with us.</span>
      </h2>
      <p style={{ color: 'color-mix(in oklch, var(--paper) 75%, var(--ink))', maxWidth: 480, margin: '0 auto 22px' }}>
        Customized workflows · Shared roadmap · Preferred pricing · Dedicated support
      </p>
      <Btn variant="accent" size="lg">Get started →</Btn>
    </div>

    {/* FOOTER */}
    <div className="wf-section" style={{ paddingTop: 28, paddingBottom: 22 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 24 }}>
        <div>
          <Logo />
          <p style={{ fontSize: 13, marginTop: 8 }}>Higher Education AI platform.</p>
          <small>© 2026 Streaque</small>
        </div>
        <div className="wf-col" style={{ gap: 4, fontSize: 13 }}>
          <small>Site</small>
          <span>Home</span><span>About</span><span>How Nia Works</span>
        </div>
        <div className="wf-col" style={{ gap: 4, fontSize: 13 }}>
          <small>Legal</small>
          <span>Privacy</span><span>Terms</span>
        </div>
        <div className="wf-col" style={{ gap: 4, fontSize: 13 }}>
          <small>Contact</small>
          <span>info@streaque.com</span>
          <span>(707) 742-3090</span>
        </div>
      </div>
    </div>
  </div>
);

window.DirD = DirD;
