/* Direction B+ — Recommended synthesis
   B's product-led chassis + C's compliance ribbon & promises +
   D's oversized stats + B's confident CTA. */

const DirBPlus = () => (
  <div className="wf wf-inner" id="dir-bp-root">
    {/* Top compliance strip — above the nav, the very first thing seen */}
    <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '8px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
      <small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>BUILT FOR HIGHER-ED →</small>
      <div style={{ display: 'flex', gap: 14, fontFamily: 'var(--mono)', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 11 }}>
        <span>✓ Canvas Partner</span>
        <span>✓ FERPA</span>
        <span>✓ GDPR</span>
        <span>✓ SSO Ready</span>
        <span>✓ Mobile-First Security</span>
      </div>
    </div>

    <Nav cta="Book a demo" />

    {/* HERO — B's layered mocks */}
    <div className="wf-section" style={{ paddingTop: 40, paddingBottom: 56, position: 'relative', overflow: 'hidden' }}>
      <SectionLabel n="01" name="Hero · Product-led + Trust-stamped" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 40, alignItems: 'center' }}>
        <div>
          <Eyebrow>Nia by Streaque</Eyebrow>
          <h1 style={{ marginTop: 14 }}>
            Every signal,<br/>
            <Squiggle accent>every student,</Squiggle><br/>
            answered.
          </h1>
          <p style={{ fontSize: 17, marginTop: 16, maxWidth: 420 }}>
            The institution-governed AI layer that turns LMS, SIS, and CRM
            data into warm, evidence-based coaching — for every student, every week.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            <Btn variant="accent">Book a demo</Btn>
            <Btn variant="ghost">Investor materials</Btn>
          </div>
          <Note style={{ display: 'block', marginTop: 16 }}>
            Pilot-ready · governance-first · live with 12+ institutions
          </Note>
        </div>

        {/* layered product mock — same as B */}
        <div style={{ position: 'relative', height: 380 }}>
          <div className="wf-stroke" style={{ position: 'absolute', top: 0, left: 0, right: 40, height: 320, padding: 12, background: 'var(--paper)', transform: 'rotate(-1.2deg)' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink)', opacity: 0.4 }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink)', opacity: 0.4 }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink)', opacity: 0.4 }} />
              <small style={{ marginLeft: 8 }}>advisor · early-alert queue</small>
            </div>
            <div className="wf-grid-3" style={{ gap: 8, marginBottom: 10 }}>
              {STATS.map((s) => (
                <div key={s.num} className="wf-stroke-dashed wf-stroke" style={{ padding: 8, fontSize: 11 }}>
                  <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 22 }}>{s.num}</div>
                  <small style={{ fontSize: 9 }}>{s.label.slice(0, 24)}…</small>
                </div>
              ))}
            </div>
            {[1,2,3,4].map((i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', borderTop: '1px dashed var(--ink-3)', fontSize: 12 }}>
                <span className="wf-avatar" style={{ width: 22, height: 22, fontSize: 11 }}>{['M','J','A','R'][i-1]}</span>
                <span style={{ flex: 1 }}>Student {i} · missed quiz</span>
                <Chip kind="accent">nudge sent</Chip>
              </div>
            ))}
          </div>

          <div className="wf-stroke-2 wf-stroke" style={{ position: 'absolute', bottom: -10, right: 0, width: 200, height: 340, padding: 14, background: 'var(--paper)', borderRadius: 22, transform: 'rotate(2deg)', boxShadow: '6px 6px 0 var(--ink)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 10 }}>
              <small>9:41</small><small>nia</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div className="wf-bubble nia" style={{ fontSize: 12, padding: '6px 10px', maxWidth: '92%' }}>Hey Maya 👋 ready for ch.4?</div>
              <div className="wf-bubble user" style={{ fontSize: 12, padding: '6px 10px', maxWidth: '70%' }}>10 min only</div>
              <div className="wf-bubble nia" style={{ fontSize: 12, padding: '6px 10px', maxWidth: '92%' }}>Perfect. Starting at the hardest concept.</div>
              <Img label="lesson card" h={70} style={{ marginTop: 4 }} />
            </div>
          </div>

          <Anno arrowDir="up" arrowLen={45} style={{ top: -10, left: 90 }}>staff view</Anno>
          <Anno arrowDir="right" arrowLen={50} style={{ bottom: 30, left: -70, width: 80 }}>student view, same brain</Anno>
        </div>
      </div>
    </div>

    {/* TWO EXPERIENCES — same as B but cleaner */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="02" name="Two Experiences" />
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2>Two experiences. <Squiggle accent>One unified system.</Squiggle></h2>
        <p style={{ marginTop: 8 }}>Same data model. Same governance. Two interfaces tuned to who's holding the device.</p>
      </div>
      <div className="wf-grid-2">
        <div className="wf-stroke" style={{ padding: 24 }}>
          <Chip kind="accent">Nia for Students</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 24 }}>A coach in the pocket.</h3>
          <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
            <div className="wf-stroke-2 wf-stroke" style={{ width: 130, height: 220, borderRadius: 18, padding: 8, flexShrink: 0 }}>
              <Ph label="momentum feed" h={48} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
                <div className="wf-bubble nia" style={{ fontSize: 10, padding: '4px 8px' }}>Pop-quiz prep?</div>
                <div className="wf-bubble user" style={{ fontSize: 10, padding: '4px 8px', maxWidth: '70%' }}>yes</div>
              </div>
              <Ph label="lesson" h={50} style={{ marginTop: 6 }} />
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
              <li><span className="wf-tick">✓</span> Daily momentum plan</li>
              <li><span className="wf-tick">✓</span> Course-aware tutoring</li>
              <li><span className="wf-tick">✓</span> Career & finance agents</li>
              <li><span className="wf-tick">✓</span> Always FERPA-scoped</li>
            </ul>
          </div>
        </div>

        <div className="wf-stroke" style={{ padding: 24 }}>
          <Chip kind="amber">Nia for Staff</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 24 }}>A co-pilot at the desk.</h3>
          <div style={{ marginTop: 14 }}>
            <div className="wf-stroke" style={{ padding: 10 }}>
              <small>early-alert queue · 12 students</small>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { n: 'Maya R.', s: 'missed BIO quiz', a: 'nudged' },
                  { n: 'Jonas K.', s: 'GPA dip', a: 'draft reply' },
                  { n: 'Anya P.', s: 'low engagement', a: 'meet?' },
                ].map((r) => (
                  <div key={r.n} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, paddingBottom: 4, borderBottom: '1px dashed var(--ink-3)' }}>
                    <span className="wf-avatar" style={{ width: 22, height: 22, fontSize: 11 }}>{r.n[0]}</span>
                    <span style={{ flex: 1 }}>{r.n} · <span style={{ color: 'var(--ink-3)' }}>{r.s}</span></span>
                    <Chip>{r.a}</Chip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FEATURES — DROP B's 4-across, USE C's numbered vertical list */}
    <div className="wf-section">
      <SectionLabel n="03" name="What Makes Nia Different" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 28 }}>
        <div>
          <h2>Built different.<br/><Squiggle accent>On purpose.</Squiggle></h2>
          <p style={{ marginTop: 12, maxWidth: 320 }}>Four design choices that separate governed coaching from a generic chatbot.</p>
        </div>
        <div className="wf-col" style={{ gap: 14 }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className="wf-stroke" style={{ padding: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span className="wf-num" style={{ width: 32, height: 32, fontSize: 14 }}>0{i+1}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 18 }}>{f.title}</h3>
                <p style={{ fontSize: 14, marginTop: 4 }}>{f.body}</p>
              </div>
              <Chip>governed</Chip>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* VIDEO */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="04" name="Video Explainer" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 28, alignItems: 'center' }}>
        <div>
          <h2>See it move.</h2>
          <p style={{ marginTop: 10 }}>A 90-second walk through a real week with Nia — from signal to nudge to outcome.</p>
          <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
            <Btn variant="accent" size="sm">▶ Play</Btn>
            <Btn variant="ghost" size="sm">Read transcript</Btn>
          </div>
        </div>
        <div className="wf-img" style={{ height: 280 }}>
          <div className="wf-img-label">16:9 · YouTube embed</div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid var(--ink)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>▶</div>
          </div>
        </div>
      </div>
    </div>

    {/* STATS — D's oversized editorial treatment */}
    <div className="wf-section">
      <SectionLabel n="05" name="Stats · The investor moment" />
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

    {/* TECH & PRIVACY — with C's promise/never-do pair */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="06" name="Tech & Privacy · Trust grafted from C" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'flex-start' }}>
        <div>
          <h2>Privacy is <Squiggle accent>the architecture.</Squiggle></h2>
          <p style={{ marginTop: 10, maxWidth: 380 }}>Nia sits between your systems and AI models — orchestrating governed nudges and workflows.</p>
          <div className="wf-box" style={{ marginTop: 16 }}>
            <div className="wf-box-corner">data flow</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
              <div className="wf-col" style={{ gap: 6, flex: 1 }}>
                {['LMS', 'SIS', 'CRM'].map((s) => <div key={s} className="wf-stroke" style={{ padding: 6, textAlign: 'center', fontSize: 12 }}>{s}</div>)}
              </div>
              <div style={{ fontSize: 18 }}>→</div>
              <div className="wf-stroke-2 wf-stroke" style={{ padding: 10, background: 'var(--ink)', color: 'var(--paper)', textAlign: 'center', flex: 1.2 }}>
                <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 16 }}>Nia</div>
                <small style={{ fontSize: 9, color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>orchestrator</small>
              </div>
              <div style={{ fontSize: 18 }}>→</div>
              <div className="wf-col" style={{ gap: 6, flex: 1 }}>
                {['LLM', 'Tutors', 'Workflows'].map((s) => <div key={s} className="wf-stroke" style={{ padding: 6, textAlign: 'center', fontSize: 12 }}>{s}</div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="wf-grid-2" style={{ gap: 12 }}>
          <div className="wf-stroke" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 16 }}>What we promise</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <li><span className="wf-tick">✓</span> Institution retains data ownership</li>
              <li><span className="wf-tick">✓</span> Encryption in transit & at rest</li>
              <li><span className="wf-tick">✓</span> Role-based permissions</li>
              <li><span className="wf-tick">✓</span> Full audit log per call</li>
            </ul>
          </div>
          <div className="wf-stroke" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 16 }}>What we never do</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <li>✗ Train on your student data</li>
              <li>✗ Move PII off your tenant</li>
              <li>✗ Bypass advisor authority</li>
              <li>✗ Hide a decision from review</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* CTA — B's confident accent treatment */}
    <div className="wf-section" style={{ background: 'var(--accent)', color: 'white', padding: '52px 40px', textAlign: 'center' }}>
      <Eyebrow style={{ color: 'rgba(255,255,255,0.8)' }}>Find your fit</Eyebrow>
      <h2 style={{ color: 'white', margin: '12px 0', fontSize: 40 }}>Pilot or invest. <Squiggle>Either way, let's talk.</Squiggle></h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 480, margin: '0 auto 18px' }}>
        Customized workflows · Shared roadmap · Preferred pricing · Dedicated support
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Btn size="lg">Start a pilot →</Btn>
        <Btn variant="ghost" size="lg">Investor brief</Btn>
      </div>
    </div>

    {/* FOOTER */}
    <div className="wf-section" style={{ paddingTop: 24, paddingBottom: 22 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 24 }}>
        <div>
          <Logo />
          <p style={{ fontSize: 13, marginTop: 8 }}>Higher Education AI platform.</p>
          <small>© 2026 Streaque</small>
        </div>
        <div className="wf-col" style={{ gap: 4, fontSize: 13 }}>
          <small>Site</small>
          <span>Home</span><span>About</span><span>How Nia Works</span><span>Our Team</span>
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

window.DirBPlus = DirBPlus;
