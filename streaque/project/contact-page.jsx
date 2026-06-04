/* global React */

// ── FOOTER (matches home/how-nia-works) ──────────────────────────────────────────
const Footer = () => (
  <footer id="contact" style={{ background: 'var(--ink)', color: 'white', paddingTop: 80, paddingBottom: 32 }}>
    <div className="mf-container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div>
          <img src="assets/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 32, display: 'block', filter: 'brightness(0) invert(1)' }}/>
          <p style={{ marginTop: 18, fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 280, lineHeight: 1.55 }}>
            The Higher Education AI platform. Institution-governed, student-first.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Site</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 14 }}>
            <a href="Streaque Mid-fi.html" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Home</a>
            <a href="Streaque Mid-fi.html#about" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>About</a>
            <a href="How Nia Works.html" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>How Nia Works</a>
            <a href="Contact.html" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Legal</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 14 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Terms &amp; Conditions</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Contact</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 14 }}>
            <a href="mailto:info@streaque.com" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>info@streaque.com</a>
            <a href="mailto:cliftonbnoble@gmail.com" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>cliftonbnoble@gmail.com</a>
            <a href="tel:7077423090" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>(707) 742-3090</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 64, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>© 2026 Streaque. All rights reserved.</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>FERPA · GDPR · SSO Ready</div>
      </div>
    </div>
  </footer>
);

// ── PAGE ──────────────────────────────────────────
const Contact = () => (
  <div className="mf">
    {window.ContactTrustBar && <window.ContactTrustBar/>}
    {window.ContactNavBar && <window.ContactNavBar/>}
    {window.ContactHero && <window.ContactHero/>}
    {window.ContactPaths && <window.ContactPaths/>}
    {window.ContactForm && <window.ContactForm/>}
    {window.ContactFounders && <window.ContactFounders/>}
    {window.ContactDirectLines && <window.ContactDirectLines/>}
    {window.ContactFAQ && <window.ContactFAQ/>}
    <Footer/>
  </div>
);

window.Contact = Contact;
