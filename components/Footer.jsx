import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.7)", padding: "64px 0 32px" }}>
      <div className="mf-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 48 }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "white", letterSpacing: "-0.01em" }}>
              Streaque
            </span>
            <p style={{ marginTop: 14, fontSize: 14, color: "rgba(255,255,255,0.55)", maxWidth: 320 }}>
              The Higher Education AI platform. Institution-governed, student-first.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {["YT", "in"].map((s) => (
                <span key={s} style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.08)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontFamily: "var(--font-mono)" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Site</div>
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Home</Link>
              <Link href="/#about" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>About</Link>
              <Link href="/how-nia-works" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>How Nia Works</Link>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Legal</div>
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              <a style={{ color: "rgba(255,255,255,0.75)" }}>Privacy Policy</a>
              <a style={{ color: "rgba(255,255,255,0.75)" }}>Terms & Conditions</a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              <a href="mailto:info@streaque.com" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>info@streaque.com</a>
              <a href="mailto:cliftonbnoble@gmail.com" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>cliftonbnoble@gmail.com</a>
              <a href="tel:7077423090" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>(707) 742-3090</a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <span>© 2026 Streaque. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>FERPA · GDPR · SSO Ready</span>
        </div>
      </div>
    </footer>
  );
}
