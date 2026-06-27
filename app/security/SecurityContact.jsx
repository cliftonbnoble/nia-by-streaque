/* Closing section of the security page. We funnel everyone through the single
   contact form instead of a second form here: this routes security reviews,
   questionnaires, and architecture deep-dives to /contact with the "Security
   review" interest pre-selected. Clifton's direct line stays as a human signal. */
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

const CTO_EMAIL = "clifton@streaque.com";

export default function SecurityContact() {
  return (
    <section style={{ background: "var(--ink)", color: "white", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }}/>
      <div style={{ position: "absolute", width: 560, height: 560, right: -220, top: -260, background: "radial-gradient(circle, rgba(43,179,223,0.14), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}/>
      <div className="mf-container" style={{ position: "relative" }}>
        <div className="mf-stack-sm" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(143,224,247,0.85)" }}>Direct line</span>
            <h2 style={{ color: "white", marginTop: 16, fontSize: 40, lineHeight: 1.1 }}>Still have questions? <span className="mf-grad-text" style={{ fontStyle: "italic", paddingRight: "0.14em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>Ask the team that built it.</span></h2>
            <p style={{ color: "rgba(255,255,255,0.78)", marginTop: 18, fontSize: 16, lineHeight: 1.65, maxWidth: 520 }}>
              Security reviews, questionnaires, and architecture deep-dives go to the people who built the platform, and get a reply within one business day.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 26 }}>
              <img loading="lazy" decoding="async" src="/team/clifton.jpg" alt="" width="44" height="44" style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.15)" }}/>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "white" }}>Clifton Noble · <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>CTO</span></div>
                <a href={`mailto:${CTO_EMAIL}`} style={{ fontSize: 13.5, color: "#8fe0f7", textDecoration: "none" }}>{CTO_EMAIL}</a>
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: 32, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(43,179,223,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#8fe0f7", marginBottom: 18 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 style={{ color: "white", fontSize: 22, lineHeight: 1.25 }}>Start a security review</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 10, fontSize: 14.5, lineHeight: 1.55, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
              Send your questionnaire or question through our contact form. Pick <strong style={{ color: "white", fontWeight: 600 }}>&ldquo;Security review&rdquo;</strong> and it routes straight to the right person.
            </p>
            <Link href="/contact#form-security" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none", marginTop: 22, justifyContent: "center" }}>
              Start a security review <ArrowRight s={14}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
