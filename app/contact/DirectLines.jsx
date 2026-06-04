"use client";

const channels = [
  { icon: "/mail-nia-icon.png", label: "General", value: "info@streaque.com", href: "mailto:info@streaque.com", accent: "var(--brand-cyan)" },
  { icon: "/call-nia-icon.png", label: "Phone", value: "(707) 742-3090", href: "tel:7077423090", accent: "var(--brand-blue)" },
  { icon: "/linkedin-nia-icon.png", label: "LinkedIn", value: "Streaque", href: "#", accent: "#0a66c2" },
  { icon: "/yt-nia-icon.png", label: "YouTube", value: "Watch demos", href: "#", accent: "#dc2626" },
];

export default function DirectLines() {
  return (
    <section style={{ padding: "100px 0", background: "white" }}>
      <div className="mf-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="mf-eyebrow">Direct lines</span>
            <h2 style={{ marginTop: 14 }}>Reach us <span className="mf-grad-text">how you prefer.</span></h2>
            <p style={{ marginTop: 18, fontSize: 16, color: "var(--ink-2)" }}>
              Not every conversation needs a form. Here's every way to find us.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {channels.map((c) => (
              <a key={c.label} href={c.href} style={{
                padding: "20px 22px", border: "1px solid var(--line)", borderRadius: 12,
                textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 14,
                transition: "border-color 150ms, transform 150ms", minWidth: 0,
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.accent}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={c.icon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }}/>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="mf-eyebrow" style={{ fontSize: 10 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
