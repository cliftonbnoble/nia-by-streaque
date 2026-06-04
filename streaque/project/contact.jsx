/* global React */
const { useState } = React;

// ── small inline icons ────────────────────────────────────
const ArrowRight = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Check = ({ s = 14, color = 'var(--brand-cyan)' }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5L6 11.5L13 4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ShieldCheck = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5L13.5 3.5V8C13.5 11 11 13.5 8 14.5C5 13.5 2.5 11 2.5 8V3.5L8 1.5Z" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5.5 8L7 9.5L10.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Dot = ({ color = 'var(--brand-cyan)', s = 6 }) => (
  <span style={{ width: s, height: s, borderRadius: '50%', background: color, display: 'inline-block' }}/>
);

// ── TRUST BAR ──────────────────────────────────────────
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

// ── NAV ──────────────────────────────────────────
const NavBar = () => (
  <div className="mf-nav">
    <div className="mf-nav-inner">
      <a href="Streaque Mid-fi.html" className="mf-logo" style={{ textDecoration: 'none' }}>
        <img src="assets/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 30, display: 'block' }}/>
      </a>
      <div className="mf-nav-links">
        <a href="Streaque Mid-fi.html">Home</a>
        <a href="Streaque Mid-fi.html#about">About</a>
        <a href="How Nia Works.html">How Nia Works</a>
        <a className="active" href="Contact.html">Contact</a>
      </div>
      <a href="#form" className="mf-btn mf-btn-primary mf-btn-sm" style={{ textDecoration: 'none' }}>Book a demo <ArrowRight s={12}/></a>
    </div>
  </div>
);

window.ContactTrustBar = TrustBar;
window.ContactNavBar = NavBar;
