import Link from "next/link";

/* Real brand glyphs — recognizable at a glance, clearly tappable. */
const YouTubeIcon = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
  </svg>
);
const LinkedInIcon = ({ s = 19 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z"/>
  </svg>
);

/* External profiles — the Nia by Streaque channel and company page. */
const SOCIAL = [
  { id: "youtube", href: "https://www.youtube.com/@NiabyStreaque", label: "Streaque on YouTube", color: "#FF0000", Icon: YouTubeIcon },
  { id: "linkedin", href: "https://www.linkedin.com/company/streaque/", label: "Streaque on LinkedIn", color: "#0A66C2", Icon: LinkedInIcon },
];

const colLabel = { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 };

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.7)", padding: "64px 0 32px" }}>
      <div className="mf-container">
        <div className="mf-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 48 }}>
          <div>
            <img src="/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 34, display: "block" }}/>
            <p style={{ marginTop: 16, fontSize: 14, color: "rgba(255,255,255,0.55)", maxWidth: 320, lineHeight: 1.55 }}>
              The Higher Education AI platform. Institution-governed, student-first.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
              {SOCIAL.map(({ id, href, label, color, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="mf-social"
                  style={{ "--social": color }}
                >
                  <Icon/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={colLabel}>Site</div>
            <div style={{ display: "grid", gap: 11, fontSize: 14 }}>
              <Link href="/" className="mf-foot-link">Home</Link>
              <Link href="/about" className="mf-foot-link">About</Link>
              <Link href="/how-nia-works" className="mf-foot-link">How Nia Works</Link>
              <Link href="/security" className="mf-foot-link">Security</Link>
              <Link href="/contact" className="mf-foot-link">Contact</Link>
            </div>
          </div>

          <div>
            <div style={colLabel}>Legal</div>
            <div style={{ display: "grid", gap: 11, fontSize: 14 }}>
              <Link href="/privacy" className="mf-foot-link">Privacy Policy</Link>
              <Link href="/terms" className="mf-foot-link">Terms &amp; Conditions</Link>
            </div>
          </div>

          <div>
            <div style={colLabel}>Contact</div>
            <div style={{ display: "grid", gap: 11, fontSize: 14 }}>
              <a href="mailto:info@streaque.com" className="mf-foot-link">info@streaque.com</a>
              <a href="https://www.linkedin.com/company/streaque/" target="_blank" rel="noopener noreferrer" className="mf-foot-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <span>© 2026 Streaque. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>FERPA · GDPR · SSO Ready</span>
        </div>
      </div>
    </footer>
  );
}
