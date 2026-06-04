/* Direction C — Compliance / Trust-Forward
   Vibe: lead with governance. The hero foregrounds the institution's control
   plane — permissions, audit trail, data residency — and only then introduces
   Nia as the warm coach on top. Targets CIOs/General Counsel/Provosts. */

const DirC = () => (
  <div className="wf wf-inner" id="dir-c-root">
    <Nav cta="Request governance brief" />

    {/* HERO ── compliance ribbon up top, then promise */}
    <div className="wf-section" style={{ paddingTop: 28, paddingBottom: 56, position: 'relative' }}>
      <SectionLabel n="01" name="Hero · Trust-led" />

      {/* Top ribbon — moved above hero */}
      <div className="wf-stroke" style={{ display: 'flex', gap: 0, alignItems: 'stretch', marginBottom: 36, overflow: 'hidden' }}>
        <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
          <small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>BUILT FOR HIGHER-ED →</small>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px 16px', flexWrap: 'wrap', gap: 8 }}>
          {TRUST_ITEMS.map((t) => <TrustBadge key={t}>{t}</TrustBadge>)}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, alignItems: 'center' }}>
        <div>
          <Eyebrow>Nia by Streaque</Eyebrow>
          <h1 style={{ marginTop: 14, fontSize: 52 }}>
            Student-first AI<br/>
            with the <Squiggle accent>institution<br/>holding the keys.</Squiggle>
          </h1>
          <p style={{ fontSize: 17, marginTop: 16, maxWidth: 460 }}>
            Personalized coaching for every learner — under your governance,
            on your data, in your name. Always.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            <Btn variant="accent">Get started</Btn>
            <Btn variant="ghost">Read the governance brief</Btn>
          </div>
        </div>

        {/* Governance "control panel" mock */}
        <div className="wf-box" style={{ padding: 16, position: 'relative' }}>
          <div className="wf-box-corner">institution control plane</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {[
              { l: 'Data ownership', v: 'Institution', s: 'on' },
              { l: 'PII residency', v: 'US-East · your tenant', s: 'on' },
              { l: 'Model access', v: 'Read-only · scoped', s: 'on' },
              { l: 'Advisor override', v: 'Always available', s: 'on' },
              { l: 'Student opt-out', v: 'One tap', s: 'on' },
            ].map((row) => (
              <div key={row.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 4px', borderBottom: '1px dashed var(--ink-3)', fontSize: 13 }}>
                <span className="wf-tick">✓</span>
                <span style={{ flex: 1 }}>{row.l}</span>
                <small style={{ fontFamily: 'var(--mono)', textTransform: 'none', letterSpacing: 0 }}>{row.v}</small>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11 }}>
            <small>audit log · 1.2k events · 24h</small>
            <small style={{ color: 'var(--accent)' }}>● live</small>
          </div>
          <Anno arrowDir="right" arrowLen={50}
            style={{ top: 18, left: -110, width: 110 }}>
            every toggle, your call
          </Anno>
        </div>
      </div>
    </div>

    {/* TWO EXPERIENCES */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="02" name="Two Experiences" />
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2>One governance model. <Squiggle>Two front doors.</Squiggle></h2>
      </div>
      <div className="wf-grid-2">
        <div className="wf-stroke" style={{ padding: 22 }}>
          <Chip kind="accent">Students</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 22 }}>Coaching they trust.</h3>
          <p style={{ marginTop: 6 }}>Warm, evidence-based, scoped to their courses. Nothing creepy, nothing hidden.</p>
          <Img label="student app · transparency screen" h={120} style={{ marginTop: 12 }} />
        </div>
        <div className="wf-stroke" style={{ padding: 22 }}>
          <Chip kind="amber">Staff</Chip>
          <h3 style={{ marginTop: 10, fontFamily: 'var(--hand-bold)', fontSize: 22 }}>Tools they can sign off on.</h3>
          <p style={{ marginTop: 6 }}>Advisors and faculty get co-pilot speed without losing the receipt trail.</p>
          <Img label="advisor desk · audit panel" h={120} style={{ marginTop: 12 }} />
        </div>
      </div>
    </div>

    {/* FEATURES — vertical numbered list, more text-heavy for serious buyers */}
    <div className="wf-section">
      <SectionLabel n="03" name="What Makes Nia Different" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 28 }}>
        <div>
          <h2>Built different.<br/>On purpose.</h2>
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

    {/* TECH & PRIVACY — promoted up, shown as flow diagram */}
    <div className="wf-section wf-section-alt">
      <SectionLabel n="04" name="Architecture · How Data Flows" />
      <h2 style={{ marginBottom: 20 }}>Sits <Squiggle accent>between</Squiggle> your systems and the model.</h2>
      <div className="wf-box" style={{ padding: 24 }}>
        <div className="wf-box-corner">data flow</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
          <div className="wf-col" style={{ gap: 8, flex: 1 }}>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>Canvas LMS</div>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>Banner / Workday SIS</div>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>Salesforce / CRM</div>
            <small style={{ textAlign: 'center' }}>Institution systems</small>
          </div>
          <div style={{ width: 50, textAlign: 'center', fontSize: 22 }}>→</div>
          <div style={{ flex: 1.2 }}>
            <div className="wf-stroke-2 wf-stroke" style={{ padding: 18, background: 'var(--ink)', color: 'var(--paper)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--hand-bold)', fontSize: 22 }}>Nia Orchestrator</div>
              <small style={{ color: 'color-mix(in oklch, var(--paper) 70%, var(--ink))' }}>policy · routing · audit · redaction</small>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
                <Chip>FERPA</Chip><Chip>GDPR</Chip><Chip>RBAC</Chip>
              </div>
            </div>
            <small style={{ display: 'block', textAlign: 'center', marginTop: 6 }}>Streaque governance layer</small>
          </div>
          <div style={{ width: 50, textAlign: 'center', fontSize: 22 }}>→</div>
          <div className="wf-col" style={{ gap: 8, flex: 1 }}>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>LLM (sandboxed)</div>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>Tutor agents</div>
            <div className="wf-stroke" style={{ padding: 10, textAlign: 'center', fontSize: 13 }}>Workflow actions</div>
            <small style={{ textAlign: 'center' }}>AI surface</small>
          </div>
        </div>
      </div>

      <div className="wf-grid-2" style={{ marginTop: 22, gap: 14 }}>
        <div className="wf-stroke" style={{ padding: 14 }}>
          <h3 style={{ fontSize: 16 }}>What we promise</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            <li><span className="wf-tick">✓</span> Institution retains data ownership</li>
            <li><span className="wf-tick">✓</span> Encryption in transit and at rest</li>
            <li><span className="wf-tick">✓</span> Role-based permissions, top to bottom</li>
            <li><span className="wf-tick">✓</span> Full audit log for every model call</li>
          </ul>
        </div>
        <div className="wf-stroke" style={{ padding: 14 }}>
          <h3 style={{ fontSize: 16 }}>What we never do</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            <li>✗ Train on your student data</li>
            <li>✗ Move PII off your tenant</li>
            <li>✗ Bypass advisor authority</li>
            <li>✗ Hide a decision from review</li>
          </ul>
        </div>
      </div>
    </div>

    {/* VIDEO + STATS combined */}
    <div className="wf-section">
      <SectionLabel n="05" name="Proof · Video + Stats" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'stretch' }}>
        <div className="wf-img" style={{ height: 320 }}>
          <div className="wf-img-label">16:9 · governance walkthrough</div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid var(--ink)', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>▶</div>
          </div>
        </div>
        <div className="wf-col" style={{ gap: 10 }}>
          {STATS.map((s) => (
            <div key={s.num} className="wf-stroke" style={{ padding: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
              <div className="wf-stat-num" style={{ fontSize: 52 }}>{s.num}</div>
              <p style={{ fontSize: 13 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="wf-section" style={{ background: 'var(--paper-2)', padding: '48px 40px', textAlign: 'center', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <Eyebrow>Find your fit</Eyebrow>
      <h2 style={{ margin: '12px 0', fontSize: 40 }}>Pilot with us. <Squiggle accent>Or invest with us.</Squiggle></h2>
      <p style={{ maxWidth: 480, margin: '0 auto 18px' }}>
        Customized workflows · Shared roadmap · Preferred pricing · Dedicated support
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        <Btn variant="accent">Start a pilot</Btn>
        <Btn variant="ghost">Investor materials</Btn>
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

window.DirC = DirC;
