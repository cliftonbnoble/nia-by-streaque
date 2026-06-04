/* global React */

// ── FOUNDERS STRIP ──────────────────────────────────────────
const Founders = () => {
  const founders = [
    {
      name: 'Luke',
      role: 'CEO & Co-founder',
      img: 'assets/team-luke.jpg?v=2',
      blurb: 'Higher-ed strategy, partnerships, pilots. Best for institutional leaders, RFPs, and partnership conversations.',
      email: 'info@streaque.com',
      phone: '(707) 742-3090',
    },
    {
      name: 'Clifton',
      role: 'CTO & Co-founder',
      img: 'assets/team-clifton.jpg?v=2',
      blurb: 'Technology, integrations, security. Best for IT leadership, security questions, and architecture deep-dives.',
      email: 'cliftonbnoble@gmail.com',
      phone: null,
    },
  ];
  return (
    <section id="founders" style={{ padding: '120px 0', background: 'var(--bg-alt)' }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 56 }}>
          <span className="mf-eyebrow">Talk to founders</span>
          <h2 style={{ marginTop: 14 }}>Skip the form. <span className="mf-grad-text">Talk directly.</span></h2>
          <p>For peer founders, institutional leaders, and partnership conversations — reach us directly.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {founders.map((f) => (
            <div key={f.name} style={{
              background: 'white', borderRadius: 16, padding: 32,
              border: '1px solid var(--line)',
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'start',
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: 16, overflow: 'hidden',
                background: 'var(--bg-alt)',
              }}>
                <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)' }}>{f.name}</div>
                <div className="mf-eyebrow" style={{ marginTop: 4, fontSize: 11 }}>{f.role}</div>
                <p style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{f.blurb}</p>
                <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
                  <a href={`mailto:${f.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>
                    <img src="assets/mail-nia-icon.png" style={{ width: 16, height: 12, opacity: 0.7 }} alt=""/>
                    {f.email}
                  </a>
                  {f.phone && (
                    <a href={`tel:${f.phone.replace(/\D/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>
                      <img src="assets/call-nia-icon.png" style={{ width: 14, height: 14, opacity: 0.7 }} alt=""/>
                      {f.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── DIRECT LINES + SOCIAL ──────────────────────────────────────────
const DirectLines = () => (
  <section style={{ padding: '100px 0', background: 'white' }}>
    <div className="mf-container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <span className="mf-eyebrow">Direct lines</span>
          <h2 style={{ marginTop: 14 }}>Reach us <span className="mf-grad-text">how you prefer.</span></h2>
          <p style={{ marginTop: 18, fontSize: 16, color: 'var(--ink-2)' }}>
            Not every conversation needs a form. Here's every way to find us.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { icon: 'assets/mail-nia-icon.png', label: 'General', value: 'info@streaque.com', href: 'mailto:info@streaque.com', accent: 'var(--brand-cyan)' },
            { icon: 'assets/call-nia-icon.png', label: 'Phone', value: '(707) 742-3090', href: 'tel:7077423090', accent: 'var(--brand-blue)' },
            { icon: 'assets/linkedin-nia-icon.png', label: 'LinkedIn', value: 'Streaque', href: '#', accent: '#0a66c2' },
            { icon: 'assets/yt-nia-icon.png', label: 'YouTube', value: 'Watch demos', href: '#', accent: '#dc2626' },
          ].map((c) => (
            <a key={c.label} href={c.href} style={{
              padding: '20px 22px', border: '1px solid var(--line)', borderRadius: 12,
              textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14,
              transition: 'border-color 150ms, transform 150ms',
              minWidth: 0,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={c.icon} alt="" style={{ width: 20, height: 20, objectFit: 'contain' }}/>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="mf-eyebrow" style={{ fontSize: 10 }}>{c.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── FAQ-LITE ──────────────────────────────────────────
const FAQ = () => {
  const faqs = [
    { q: 'How fast will you respond?', a: 'Within one business day, from a real person on our team. Most replies come same-day.' },
    { q: 'What happens after I submit the form?', a: 'A founder or success lead will email you to schedule a 30-minute discovery call. No demos before we understand your goals.' },
    { q: 'Do I need to commit to anything?', a: 'No. The first call is purely exploratory — we learn about your institution, you see Nia in action, and we both decide if there\'s a fit.' },
    { q: 'Can I try Nia myself first?', a: 'Yes. The student app is live and we\'re happy to set you up with a sandbox account before any institutional conversation.' },
    { q: 'How do you handle student data?', a: 'FERPA-aligned by design. All institutional data stays on your tenant, never trains models, and is governed by your IT policies.' },
    { q: 'Are you fundraising?', a: 'We\'re always open to talking with mission-aligned investors. Email info@streaque.com for our current brief.' },
  ];
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-alt)' }}>
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 56 }}>
          <span className="mf-eyebrow">Common questions</span>
          <h2 style={{ marginTop: 14 }}>What to expect <span className="mf-grad-text">when you reach out.</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ borderTop: '1px solid var(--line)', paddingTop: 24 }}>
              <div style={{ fontSize: 17, fontWeight: 600, fontFamily: 'var(--font-display)' }}>{f.q}</div>
              <p style={{ marginTop: 10, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ContactFounders = Founders;
window.ContactDirectLines = DirectLines;
window.ContactFAQ = FAQ;
