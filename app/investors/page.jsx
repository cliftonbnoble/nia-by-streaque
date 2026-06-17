import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata = {
  title: "Investors · Nia by Streaque",
  description:
    "The investment case for Nia by Streaque — the institution-governed AI platform for higher-ed student success.",
  // Investor material is sensitive and this is still a scaffold — keep it out of
  // search until the real numbers are in and you choose to make it public.
  robots: { index: false, follow: false },
};

/* SCAFFOLD — replace every <PH> placeholder with real, defensible figures before
   sharing this link. Anything wrapped in <PH> renders highlighted so it's obvious
   what still needs filling. The Northeastern pilot and the product are real; the
   market sizes, metrics, and raise details are placeholders. */
const PH = ({ children }) => (
  <span
    style={{
      color: "var(--inprogress)",
      background: "rgba(201,138,26,0.10)",
      border: "1px dashed rgba(201,138,26,0.45)",
      borderRadius: 6,
      padding: "0 7px",
      fontSize: "0.9em",
      fontWeight: 600,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: "24px 26px" }}>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, letterSpacing: "-0.02em", color: "var(--ink)" }}>{value}</div>
    <div style={{ marginTop: 8, fontSize: 13.5, color: "var(--ink-3)", lineHeight: 1.5 }}>{label}</div>
  </div>
);

export default function InvestorsPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="investors"/>

      {/* hero */}
      <section className="mf-hero" style={{ paddingBottom: 56 }}>
        <div className="mf-hero-bg"/>
        <div className="mf-container mf-hero-inner">
          <div style={{ maxWidth: 780 }}>
            <span className="mf-eyebrow">For investors</span>
            <h1 style={{ marginTop: 18, fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Invest in the <span className="mf-grad-text">AI layer</span> for higher education.
            </h1>
            <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 640 }}>
              Nia is the institution-governed AI platform that turns LMS, SIS, and CRM data into
              proactive, evidence-based coaching for every student — now live in a pilot with
              Northeastern University&apos;s Bay Area campus.
            </p>
            <div className="mf-hero-actions">
              <Link href="/contact#form-investor" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Request the full brief <ArrowRight/>
              </Link>
              <Link href="/nia" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none" }}>
                See the product depth →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* the thesis */}
      <section className="mf-section" style={{ paddingTop: 0 }}>
        <div className="mf-container" style={{ maxWidth: 820 }}>
          <span className="mf-eyebrow">The thesis</span>
          <p style={{ marginTop: 16, fontSize: 20, lineHeight: 1.7, color: "var(--ink-2)" }}>
            Every institution is about to adopt AI for student success — but generic chatbots
            can&apos;t touch student records, and point tools don&apos;t share a brain. The winner is the
            <strong> governed layer that sits between an institution&apos;s systems and the model</strong>,
            owns the unified student memory, and the institution controls end to end. <PH>[Sharpen with your one-sentence thesis.]</PH>
          </p>
        </div>
      </section>

      {/* the problem, in their words — real discovery-interview quotes,
          attributed with the interviewees' consent (per the user). These prove
          the problem + the need for institution-integrated AI; they are NOT
          product testimonials (no one here used Nia). */}
      <section className="mf-section alt">
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 760 }}>
            <span className="mf-eyebrow">The problem, in their words</span>
            <h2 style={{ marginTop: 14 }}>We heard it firsthand.</h2>
            <p>From our discovery interviews — real students at Northeastern, NYU, and CUNY describing the navigational friction Nia is built to remove.</p>
          </div>
          <div className="inv-quotes">
            {[
              { q: "They told me 4 to 6 weeks. I filed in late December and got the reply May 15th — about five months. I had to have a friend hold my classes for me.", who: "Ryan Wang", ctx: "Northeastern University" },
              { q: "I'd give it a solid 8 — which means I actually spend more time thinking about the logistics than actually learning at school.", who: "Crystal Tran", ctx: "NYU Stern" },
              { q: "I feel like they just give you different places to go around in school and never get to the point.", who: "Alison", ctx: "CUNY · BMCC → John Jay" },
              { q: "The class wasn't offered at the Oakland campus, so I had to talk to three people to fight for it to get added. It took weeks.", who: "Ashsmith Khayrul", ctx: "Northeastern University · Oakland (Bay Area)" },
            ].map((x) => (
              <figure key={x.who} className="inv-quote">
                <blockquote>&ldquo;{x.q}&rdquo;</blockquote>
                <figcaption><strong>{x.who}</strong><span>{x.ctx}</span></figcaption>
              </figure>
            ))}
          </div>

          {/* moat capstone — the ChatGPT-fails-on-institutional-tasks quote */}
          <figure className="inv-moatquote">
            <span className="mf-eyebrow" style={{ color: "var(--brand-blue)" }}>Why generic AI can&apos;t do this</span>
            <blockquote>&ldquo;I emailed the contact ChatGPT gave me, and she said she&apos;s not in charge of this and I should go talk to my academic advisor. I realized only the financial aid office could fix the error.&rdquo;</blockquote>
            <figcaption><strong>Crystal Tran</strong> · NYU Stern</figcaption>
            <p>Generic chatbots don&apos;t sit inside an institution&apos;s systems, so they send students in circles. Closing that loop — governed, institution-integrated — is exactly Nia&apos;s wedge.</p>
          </figure>
        </div>
        <style>{`
          .inv-quotes{ display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 36px; }
          .inv-quote{ margin: 0; background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 24px 26px; box-shadow: var(--shadow-sm); }
          .inv-quote blockquote{ margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 18px; line-height: 1.45; letter-spacing: -0.015em; color: var(--ink); }
          .inv-quote figcaption{ margin-top: 16px; display: flex; flex-direction: column; }
          .inv-quote figcaption strong{ font-size: 13.5px; color: var(--ink-2); }
          .inv-quote figcaption span{ font-size: 12.5px; color: var(--ink-3); margin-top: 2px; }
          .inv-moatquote{ margin: 18px 0 0; background: white; border: 1px solid rgba(61,78,216,0.22); border-left: 3px solid var(--brand-blue); border-radius: var(--radius-lg); padding: 26px 28px; box-shadow: 0 18px 40px -28px rgba(31,52,128,0.22); }
          .inv-moatquote blockquote{ margin: 12px 0 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; line-height: 1.35; letter-spacing: -0.02em; color: var(--ink); max-width: 820px; }
          .inv-moatquote figcaption{ margin-top: 14px; font-size: 13.5px; color: var(--ink-2); }
          .inv-moatquote figcaption strong{ color: var(--ink); }
          .inv-moatquote p{ margin: 14px 0 0; font-size: 14px; line-height: 1.6; color: var(--ink-3); max-width: 760px; }
          @media (max-width: 760px){ .inv-quotes{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* traction */}
      <section className="mf-section">
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Traction</span>
            <h2 style={{ marginTop: 14 }}>A live pilot, and an early signal.</h2>
            <p>Northeastern University · Bay Area campus is piloting Nia now — a top-tier R1 partner before a public launch.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 36 }} className="mf-stack-sm">
            <Stat value={<>1 <span style={{ fontSize: 18, color: "var(--ink-3)" }}>· R1</span></>} label="Live university pilot (Northeastern, Bay Area)"/>
            <Stat value={<PH>[# students]</PH>} label="Students in the pilot cohort"/>
            <Stat value={<PH>[engagement]</PH>} label="Weekly active / engagement signal"/>
            <Stat value={<PH>[ARR / pipeline]</PH>} label="ARR or signed pipeline"/>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--ink-3)" }}>
            <PH>[Add: pilot findings timeline, LOIs, waitlist, or design-partner logos as they land.]</PH>
          </p>
        </div>
      </section>

      {/* market / why now */}
      <section className="mf-section alt">
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Market · why now</span>
            <h2 style={{ marginTop: 14 }}>A large market, at the exact moment it adopts AI.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 36 }} className="mf-stack-sm">
            <Stat value={<PH>[$ TAM]</PH>} label="Total addressable market — US higher-ed student success + advising software"/>
            <Stat value={<PH>[# institutions]</PH>} label="Degree-granting institutions in the US, each an enterprise buyer"/>
            <Stat value={<PH>[retention $ ]</PH>} label="Tuition revenue lost to attrition each year — the budget Nia protects"/>
          </div>
          <p style={{ marginTop: 18, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 760 }}>
            Why now: institutions are under enrollment and retention pressure, AI is finally good
            enough to coach, and FERPA-grade governance is the gate generic tools can&apos;t pass.
            <PH>[Cite your sources for the figures above.]</PH>
          </p>
        </div>
      </section>

      {/* why we win */}
      <section className="mf-section">
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Why we win</span>
            <h2 style={{ marginTop: 14 }}>The moat is the architecture.</h2>
            <p>Six defensibility points — the full technical story lives on the product page.</p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px", maxWidth: 900 }} className="mf-stack-sm">
            {[
              ["Inside-out architecture", "Your data first, the global model last — expensive to copy."],
              ["Unified student memory", "Five domains, one profile, one source of truth."],
              ["Governed, source-linked answers", "Factual queries against real rows, not generation."],
              ["Per-tenant governance", "Your instance, your rules — never a shared brain."],
              ["Official Canvas Partner", "Distribution + integration advantage at the LMS layer."],
              ["Switching cost", "The longer Nia runs, the more institutional context it owns."],
            ].map(([t, d]) => (
              <li key={t} style={{ display: "flex", gap: 12 }}>
                <span style={{ flexShrink: 0, marginTop: 6, width: 7, height: 7, borderRadius: "50%", background: "var(--brand-gradient)" }}/>
                <span><strong style={{ color: "var(--ink)" }}>{t}.</strong> <span style={{ color: "var(--ink-2)" }}>{d}</span></span>
              </li>
            ))}
          </ul>
          <Link href="/nia" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
            See the full moat breakdown on the product page <ArrowRight s={15}/>
          </Link>
        </div>
      </section>

      {/* the ask */}
      <section style={{ background: "linear-gradient(160deg, #161a5e 0%, #25278a 52%, #3a37ad 100%)", color: "white", padding: "88px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 620, height: 620, right: -220, top: -240, background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 62%)", borderRadius: "50%", pointerEvents: "none" }}/>
        <div className="mf-container" style={{ position: "relative", maxWidth: 720, textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>The ask</span>
          <h2 style={{ color: "white", margin: "18px 0 0", fontSize: 40, lineHeight: 1.1 }}>
            We&apos;re raising <PH>[$ round]</PH> to <PH>[use of funds]</PH>.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: 560, margin: "18px auto 0", fontSize: 16, lineHeight: 1.6 }}>
            <PH>[One paragraph: stage, who you&apos;re raising from, the milestones this round funds, and your vision for where Nia goes next.]</PH>
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 20, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/contact#form-investor" className="mf-btn mf-btn-lg" style={{ textDecoration: "none", background: "white", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Request the full brief <ArrowRight/>
            </Link>
            <Link href="/contact#team" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
