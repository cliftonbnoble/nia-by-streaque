import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    path: "/investors",
    title: "Investors · Nia by Streaque",
    description:
      "The investment case for Nia by Streaque: the institution-governed AI platform for higher-ed student success.",
  }),
  // Investor material is sensitive and this is still a scaffold — keep it out of
  // search until the real numbers are in and you choose to make it public.
  robots: { index: false, follow: false },
};

/* NOTE: the pilot partner is anonymized as "a top-tier R1 university" — there is no
   signed agreement to use its name publicly. The pilot/cohort numbers and the raise
   are real; the institution count is sourced (NCES/IPEDS, 2023–24) and the market-size
   and retention-loss figures are internal estimates. Page stays noindex until public. */

/* Nia brand glyph — inlined so the hero mockups stay self-contained */
const IvGlyph = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill="url(#ivg0)"/>
    <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill="url(#ivg1)"/>
    <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
    <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    <defs>
      <linearGradient id="ivg0" x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id="ivg1" x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
  </svg>
);

const Stat = ({ value, label, bloom }) => {
  const card = (
    <div className="iv-stat">
      {!bloom && <span className="iv-stat-glow" aria-hidden="true"/>}
      <div className="iv-stat-v">{value}</div>
      <div className="iv-stat-l">{label}</div>
    </div>
  );
  if (!bloom) return card;
  return (
    <div className="iv-cell">
      <span aria-hidden="true" className={`iv-bloom iv-bloom-${bloom}`}/>
      {card}
    </div>
  );
};

/* shared styles for the investor stat cards (traction + market) */
const StatStyles = () => (
  <style>{`
    .iv-statgrid{ display: grid; gap: 16px; margin-top: 36px; }
    .iv-statgrid.four{ grid-template-columns: repeat(4, 1fr); }
    .iv-statgrid.three{ grid-template-columns: repeat(3, 1fr); }
    .iv-stat{
      position: relative; overflow: hidden;
      background: #FBFCFE; border: 1px solid var(--line);
      border-radius: var(--radius-lg); padding: 22px 24px;
      transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
    }
    .iv-stat:hover{ transform: translateY(-3px); box-shadow: 0 22px 44px -22px rgba(15,23,42,0.16); border-color: #D8DEF0; }
    .iv-stat-glow{ position: absolute; width: 240px; height: 240px; left: -70px; top: -150px; border-radius: 50%; background: radial-gradient(circle closest-side, rgba(43,179,223,0.13), transparent 100%); opacity: 0; transition: opacity 240ms ease; pointer-events: none; }
    .iv-stat:hover .iv-stat-glow{ opacity: 1; }
    .iv-stat-v{ position: relative; font-family: var(--font-display); font-weight: 700; font-size: 34px; letter-spacing: -0.03em; line-height: 1; color: var(--ink); }
    .iv-stat-u{ font-size: 17px; font-weight: 600; color: var(--ink-3); letter-spacing: -0.01em; }
    .iv-stat-l{ position: relative; margin-top: 11px; font-size: 13px; color: var(--ink-3); line-height: 1.5; }
    /* small ambient bloom behind a card (market stats + why-we-win moats):
       the color lives behind the card and its shadow, not on the card */
    .iv-cell{ position: relative; display: flex; }
    .iv-cell > :not(.iv-bloom){ position: relative; z-index: 1; width: 100%; background: #fff; }
    .iv-bloom{ position: absolute; z-index: 0; inset: -10% -14%; filter: blur(44px); pointer-events: none; }
    .iv-bloom-blue{ background: radial-gradient(60% 62% at 50% 50%, rgba(84,201,255,0.69), transparent 74%); }
    .iv-bloom-purple{ background: radial-gradient(60% 62% at 50% 50%, rgba(123,103,241,0.63), transparent 74%); }
    @media (max-width: 860px){
      .iv-statgrid.four, .iv-statgrid.three{ grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 520px){
      .iv-statgrid.four, .iv-statgrid.three{ grid-template-columns: 1fr; }
    }
  `}</style>
);

export default function InvestorsPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="investors"/>
      <main id="main" className="cv-sections">
      <StatStyles/>

      {/* hero */}
      <section className="mf-hero" style={{ paddingBottom: 64, position: "relative", overflow: "hidden" }}>
        <div className="mf-hero-bg"/>
        <div className="mf-container mf-hero-inner">
          <div className="iv-hero-grid">
            <div className="iv-hero-copy">
              <span className="mf-eyebrow">For investors</span>
              <h1 style={{ marginTop: 18, fontSize: "clamp(32px, 6vw, 50px)", letterSpacing: "-0.03em", lineHeight: 1.06 }}>
                Invest in the <span className="mf-grad-text">AI layer</span> for higher education.
              </h1>
              <p className="mf-hero-sub" style={{ marginTop: 20, maxWidth: 520 }}>
                The institution-governed AI platform that turns LMS, SIS, and CRM data into proactive,
                evidence-based coaching for every student, live now in a pilot with a top-tier R1
                university.
              </p>
              <div className="mf-hero-actions">
                <Link href="/contact#form-investor" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Request the full brief <ArrowRight/>
                </Link>
                <Link href="/why-nia" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  See why Nia wins <ArrowRight/>
                </Link>
              </div>
            </div>

            {/* the graphic: the institution's desktop view + the student's phone,
                popping in one after the other, skewed and overlapping */}
            <div className="iv-stage" aria-hidden="true">
              <div className="iv-mac">
                <div className="iv-mac-lid">
                  <div className="iv-mac-screen">
                    <span className="iv-mac-notch"/>
                    <div className="iv-mac-chrome"><span className="iv-dots"><i/><i/><i/></span><span className="iv-url">app.niahub.ai</span></div>
                    <div className="iv-mac-app">
                      <span className="iv-rail">
                        <span className="iv-rail-logo"><IvGlyph s={15}/></span>
                        <span className="iv-rail-ic on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.4 2.6a2 2 0 1 1 2.8 2.8L12 14.6 8 16l1.4-4z"/></svg></span>
                        <span className="iv-rail-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
                        <span className="iv-rail-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></span>
                        <span className="iv-rail-ava" aria-hidden="true"/>
                      </span>
                      <div className="iv-dash">
                        <div className="iv-dash-head"><span className="iv-dash-t">Early-alert queue</span><span className="iv-live"><i/>demo</span></div>
                        <div className="iv-kpis">
                          <span className="iv-kpi"><b>93%</b>active plans</span>
                          <span className="iv-kpi"><b>75%</b>engaged · 24h</span>
                          <span className="iv-kpi"><b>13</b>open alerts</span>
                        </div>
                        <div className="iv-row hot">
                          <span className="iv-ava"/>
                          <span className="iv-row-main"><b>Maya Reyes</b>BIO 201 · missed quiz · sentiment ↓</span>
                          <span className="iv-tag ok">✓ Nudged</span>
                        </div>
                        <div className="iv-row">
                          <span className="iv-ava alt"/>
                          <span className="iv-row-main"><b>Jonas Kim</b>GPA dip · 3 weeks</span>
                          <span className="iv-tag">Draft reply</span>
                        </div>
                        <div className="iv-chart">
                          <div className="iv-chart-head"><span>Cohort sentiment · 14 days</span><em>+12%</em></div>
                          <svg viewBox="0 0 300 46" preserveAspectRatio="none">
                            <defs><linearGradient id="iv-cf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(61,78,216,0.20)"/><stop offset="1" stopColor="rgba(61,78,216,0)"/></linearGradient></defs>
                            <path d="M0 34 L25 32 L50 35 L75 28 L100 24 L125 22 L150 18 L175 20 L200 14 L225 11 L250 12 L275 7 L300 6 L300 46 L0 46 Z" fill="url(#iv-cf)"/>
                            <path d="M0 34 L25 32 L50 35 L75 28 L100 24 L125 22 L150 18 L175 20 L200 14 L225 11 L250 12 L275 7 L300 6" fill="none" stroke="#3d4ed8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className="iv-mac-mbp">MacBook Pro</span>
                  </div>
                </div>
                <div className="iv-mac-base"><span className="iv-mac-groove"/></div>
              </div>

              <div className="iv-phone">
                <span className="iv-phone-notch"/>
                <div className="iv-phone-screen">
                  <div className="iv-phone-bar"><span className="iv-phone-id"><span className="iv-phone-mark"><IvGlyph s={14}/></span>Nia</span><span className="iv-phone-first">reached out first</span></div>
                  <div className="iv-phone-feed">
                    <div className="iv-pdate">Today · 8:02 AM</div>
                    <div className="iv-pbot">
                      <span className="iv-pmark"><IvGlyph s={13}/></span>
                      <span className="iv-pbub">I noticed a <b>$150 hold</b> that could block your registration. Want me to clear it?
                        <span className="iv-pcta">Clear it now →</span>
                      </span>
                    </div>
                  </div>
                  <div className="iv-pinput">Message Nia…<span className="iv-psend">↑</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .iv-hero-grid{ display: grid; grid-template-columns: 1fr 1.04fr; gap: 40px; align-items: center; }
          .iv-hero-copy{ min-width: 0; }

          /* ── the stage ── */
          .iv-stage{ position: relative; min-width: 0; }
          .iv-mac{ width: 100%; max-width: 560px; margin: 0 auto; transform-origin: center bottom; opacity: 0; animation: iv-pop-mac 700ms cubic-bezier(0.2,0.8,0.25,1.04) 140ms both; }
          .iv-mac-lid{ background: linear-gradient(180deg,#EDF0F4 0%,#C8CDD6 100%); border-radius: 15px 15px 0 0; padding: 3px 3px 0; box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 40px 70px -34px rgba(11,16,32,0.5); }
          .iv-mac-screen{ position: relative; background: #05070D; border-radius: 12px 12px 0 0; padding: 10px 9px 14px; overflow: hidden; }
          .iv-mac-notch{ position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 56px; height: 14px; background: #05070D; border-radius: 0 0 8px 8px; z-index: 5; }
          .iv-mac-chrome{ display: flex; align-items: center; gap: 9px; padding: 6px 10px; background: #F2F4F8; border-radius: 8px 8px 0 0; border-bottom: 1px solid #E3E6EE; }
          .iv-dots{ display: inline-flex; gap: 5px; }
          .iv-dots i{ width: 8px; height: 8px; border-radius: 50%; }
          .iv-dots i:nth-child(1){ background:#FF5F57; } .iv-dots i:nth-child(2){ background:#FEBC2E; } .iv-dots i:nth-child(3){ background:#28C840; }
          .iv-url{ flex: 1; max-width: 210px; margin: 0 auto; text-align: center; font-size: 9.5px; color: var(--ink-3); background:#fff; border:1px solid #E3E6EE; border-radius:6px; padding:3px 0; }
          .iv-mac-app{ display: flex; height: 300px; background: #F7F8FC; }
          .iv-rail{ width: 40px; flex-shrink: 0; background: linear-gradient(180deg,#2BB3DF 0%,#3841B1 100%); display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 10px 0 11px; }
          .iv-rail-logo{ width: 24px; height: 24px; border-radius: 7px; background:#fff; display:inline-flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(11,16,32,0.2); margin-bottom: 2px; }
          .iv-rail-ic{ width: 26px; height: 26px; border-radius: 8px; display:inline-flex; align-items:center; justify-content:center; color: rgba(255,255,255,0.82); }
          .iv-rail-ic.on{ background: rgba(255,255,255,0.92); color: #2f3aa0; }
          .iv-rail-ava{ margin-top: auto; width: 25px; height: 25px; border-radius: 50%; background: linear-gradient(135deg,#E98A64,#8F7DF7); box-shadow: 0 0 0 1.5px rgba(255,255,255,0.55); }
          .iv-dash{ flex: 1; min-width: 0; overflow: hidden; padding: 12px 14px; display: flex; flex-direction: column; gap: 9px; }
          .iv-dash-head{ display: flex; align-items: center; justify-content: space-between; }
          .iv-dash-t{ font-family: var(--font-display); font-weight: 700; font-size: 13.5px; color: var(--ink); }
          .iv-live{ display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--success); }
          .iv-live i{ width: 6px; height: 6px; border-radius: 50%; background: var(--success); }
          .iv-kpis{ display: grid; grid-template-columns: repeat(3,1fr); gap: 7px; }
          .iv-kpi{ display: flex; flex-direction: column; gap: 1px; background:#fff; border:1px solid var(--line); border-radius: 9px; padding: 7px 9px; font-size: 8.5px; color: var(--ink-3); }
          .iv-kpi b{ font-family: var(--font-display); font-weight: 700; font-size: 15px; letter-spacing:-0.02em; color: var(--ink); }
          .iv-row{ display: flex; align-items: center; gap: 9px; background:#fff; border:1px solid var(--line); border-radius: 9px; padding: 7px 9px; }
          .iv-row.hot{ border-color: rgba(217,119,6,0.32); background:#FFFCF6; }
          .iv-ava{ width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: linear-gradient(135deg,#E98A64,#d36a3e); }
          .iv-ava.alt{ background: linear-gradient(135deg,#8F7DF7,#5b49c9); }
          .iv-row-main{ flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; font-size: 9px; color: var(--ink-3); overflow: hidden; }
          .iv-row-main b{ font-size: 11px; font-weight: 600; color: var(--ink); }
          .iv-tag{ flex-shrink: 0; font-family: var(--font-mono); font-size: 8px; color: var(--ink-3); background: var(--bg-alt); border:1px solid var(--line); border-radius: 999px; padding: 4px 8px; }
          .iv-tag.ok{ color: var(--success); background: rgba(13,138,90,0.10); border-color: rgba(13,138,90,0.22); }
          .iv-chart{ background:#fff; border:1px solid var(--line); border-radius: 9px; padding: 8px 10px; }
          .iv-chart-head{ display: flex; align-items: baseline; justify-content: space-between; }
          .iv-chart-head span{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-4); }
          .iv-chart-head em{ font-style: normal; font-family: var(--font-display); font-weight: 600; font-size: 12px; color: #3d4ed8; }
          .iv-chart svg{ width: 100%; height: 34px; margin-top: 4px; display: block; }
          .iv-mac-mbp{ position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%); font-size: 6px; letter-spacing: 0.14em; color: #59606E; }
          .iv-mac-base{ position: relative; width: 112%; margin-left: -6%; height: 13px; background: linear-gradient(180deg,#F4F6F9 0%,#D7DBE2 28%,#B6BDC9 70%,#848D9D 100%); border-radius: 2px 2px 13px 13px; clip-path: polygon(1% 0,99% 0,100% 100%,0 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 3px rgba(11,16,32,0.18); }
          .iv-mac-groove{ position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 74px; height: 6px; background: linear-gradient(180deg,#9AA2B1,#C3C9D3); border-radius: 0 0 9px 9px; box-shadow: inset 0 1px 2px rgba(11,16,32,0.25); }

          /* ── the phone, overlapping the MacBook's bottom-right, tilted ── */
          .iv-phone{ position: absolute; right: -6px; bottom: -34px; width: 152px; background: linear-gradient(160deg,#1b2030,#0c0f1a); border-radius: 26px; padding: 6px; box-shadow: 0 34px 60px -26px rgba(11,16,32,0.6), inset 0 0 0 1px rgba(255,255,255,0.07); transform: rotate(5deg); transform-origin: center bottom; opacity: 0; animation: iv-pop-phone 640ms cubic-bezier(0.2,0.9,0.3,1.2) 700ms both; }
          .iv-phone-notch{ position: absolute; top: 13px; left: 50%; transform: translateX(-50%); width: 46px; height: 14px; background: #0c0f1a; border-radius: 8px; z-index: 4; }
          .iv-phone-screen{ position: relative; background: #fff; border-radius: 21px; overflow: hidden; display: flex; flex-direction: column; height: 286px; }
          .iv-phone-bar{ display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 22px 11px 9px; border-bottom: 1px solid var(--line); }
          .iv-phone-id{ display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-display); font-weight: 700; font-size: 11px; color: var(--ink); }
          .iv-phone-mark{ width: 18px; height: 18px; border-radius: 50%; background:#fff; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }
          .iv-phone-first{ font-family: var(--font-mono); font-size: 6.5px; letter-spacing: 0.04em; text-transform: uppercase; color: #7c3aed; background: rgba(124,58,237,0.10); border-radius: 999px; padding: 3px 6px; white-space: nowrap; }
          .iv-phone-feed{ flex: 1; padding: 11px 11px; display: flex; flex-direction: column; gap: 8px; }
          .iv-pdate{ align-self: center; font-family: var(--font-mono); font-size: 6.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-4); }
          .iv-pbot{ display: flex; align-items: flex-end; gap: 5px; }
          .iv-pmark{ flex-shrink: 0; width: 17px; height: 17px; border-radius: 50%; background:#fff; display:inline-flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }
          .iv-pbub{ background: #F1F3F9; color: var(--ink-2); border-radius: 4px 12px 12px 12px; padding: 8px 10px; font-size: 10px; line-height: 1.45; }
          .iv-pbub b{ color: var(--ink); }
          .iv-pcta{ display: inline-flex; align-items: center; margin-top: 8px; font-size: 9.5px; font-weight: 600; color: #fff; background: linear-gradient(135deg,#2BB3DF,#3841B1); border-radius: 8px; padding: 6px 10px; box-shadow: 0 6px 13px -6px rgba(56,65,177,0.5); }
          .iv-pinput{ margin: 0 11px 11px; padding: 7px 10px; display: flex; align-items: center; justify-content: space-between; background: var(--bg-alt); border: 1px solid var(--line); border-radius: 10px; font-size: 9px; color: var(--ink-4); }
          .iv-psend{ width: 16px; height: 16px; border-radius: 5px; background: linear-gradient(135deg,#695bd7,#424dd3); color:#fff; font-size: 9px; display:inline-flex; align-items:center; justify-content:center; }

          @keyframes iv-pop-mac{ from{ opacity: 0; transform: translateY(18px) scale(0.93); } to{ opacity: 1; transform: translateY(0) scale(1); } }
          @keyframes iv-pop-phone{ from{ opacity: 0; transform: translateY(26px) rotate(11deg) scale(0.88); } to{ opacity: 1; transform: translateY(0) rotate(5deg) scale(1); } }

          /* ── the thesis ── */
          .iv-thesis{ margin-top: 18px; font-family: var(--font-display); font-weight: 500; font-size: 25px; line-height: 1.46; letter-spacing: -0.02em; color: var(--ink-2); }
          .iv-thesis-em{ color: var(--ink); font-weight: 600; }
          .iv-thesis-punch{ margin-top: 20px; font-family: var(--font-display); font-weight: 700; font-size: 34px; letter-spacing: -0.03em; line-height: 1.1; }

          @media (max-width: 980px){
            .iv-hero-grid{ grid-template-columns: 1fr; gap: 8px; }
            .iv-stage{ margin-top: 44px; padding-bottom: 40px; }
            .iv-mac{ max-width: 520px; }
            .iv-thesis{ font-size: 22px; }
            .iv-thesis-punch{ font-size: 30px; }
          }
          @media (max-width: 600px){
            .iv-phone{ width: 128px; right: 0; bottom: -26px; }
            .iv-phone-screen{ height: 244px; }
          }
          @media (prefers-reduced-motion: reduce){
            .iv-mac, .iv-phone{ animation-duration: 0.001ms !important; animation-delay: 0ms !important; }
          }
        `}</style>
      </section>

      {/* the thesis */}
      <section className="mf-section" style={{ paddingTop: 12 }}>
        <div className="mf-container" style={{ maxWidth: 880 }}>
          <span className="mf-eyebrow">The thesis</span>
          <p className="iv-thesis">
            Every institution is about to buy AI for student success. Generic chatbots can&apos;t touch a
            student record; point tools don&apos;t share a brain. The winner is the{" "}
            <span className="iv-thesis-em">governed layer between an institution&apos;s systems and the model</span>.
            It owns the unified student memory and answers to the institution, end to end.
          </p>
          <p className="iv-thesis-punch"><span className="mf-grad-text">Nia is that layer.</span></p>
        </div>
      </section>

      {/* the problem, in their words — real discovery-interview quotes,
          attributed with the interviewees' consent (per the user). These prove
          the problem + the need for institution-integrated AI; they are NOT
          product testimonials (no one here used Nia). */}
      <section className="mf-section" style={{ background: "linear-gradient(180deg, #F6F8FD 0%, #EDF1FA 100%)" }}>
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 760 }}>
            <span className="mf-eyebrow">The problem, in their words</span>
            <h2 style={{ marginTop: 14 }}>We heard it firsthand.</h2>
            <p>From our discovery interviews: real students at Northeastern, NYU, and CUNY describing the navigational friction Nia is built to remove.</p>
          </div>
          <div className="inv-quotes">
            {[
              { i: "R", who: "Ryan Wang", ctx: "Northeastern University",
                q: <>They told me 4 to 6 weeks. I filed in late December and got the reply May 15th, <span className="iv-hl">about five months.</span> I had to have a friend hold my classes for me.</> },
              { i: "C", who: "Crystal Tran", ctx: "NYU Stern",
                q: <>I&apos;d give it a solid 8, which means I actually <span className="iv-hl">spend more time thinking about the logistics than actually learning</span> at school.</> },
              { i: "A", who: "Alison", ctx: "CUNY · BMCC → John Jay",
                q: <>I feel like they just give you different places to go around in school and <span className="iv-hl">never get to the point.</span></> },
              { i: "A", who: "Ashsmith Khayrul", ctx: "a large public university",
                q: <>The class wasn&apos;t offered at my campus, so I had to talk to three people to fight for it to get added. <span className="iv-hl">It took weeks.</span></> },
            ].map((x) => (
              <figure key={x.who} className="inv-quote">
                <span className="inv-quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{x.q}</blockquote>
                <figcaption>
                  <span className="inv-quote-ava">{x.i}</span>
                  <span><strong>{x.who}</strong><span>{x.ctx}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* moat capstone — the ChatGPT-fails-on-institutional-tasks quote, as the
              dark punchline that turns the problem into Nia's wedge */}
          <figure className="inv-moatquote">
            <span className="inv-moat-glow" aria-hidden="true"/>
            <span className="inv-cap-eye">Why generic AI can&apos;t do this</span>
            <blockquote>&ldquo;I emailed the contact ChatGPT gave me, and she said she&apos;s not in charge of this and I should go talk to my academic advisor. I realized <span className="iv-hl-c">only the financial aid office could fix the error.</span>&rdquo;</blockquote>
            <figcaption><strong>Crystal Tran</strong> · NYU Stern</figcaption>
            <p>Generic chatbots don&apos;t sit inside an institution&apos;s systems, so they send students in circles. Closing that loop, governed and institution-integrated, is exactly <span className="iv-hl-c">Nia&apos;s wedge.</span></p>
          </figure>
        </div>
        <style>{`
          .inv-quotes{ display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 36px; }
          .iv-hl{ background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .inv-quote{
            position: relative; overflow: hidden; margin: 0;
            background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg);
            padding: 26px 26px 22px; box-shadow: 0 18px 40px -28px rgba(31,52,128,0.18);
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
          }
          .inv-quote:hover{ transform: translateY(-3px); box-shadow: 0 28px 54px -26px rgba(31,52,128,0.24); border-color: #D3DCF2; }
          .inv-quote-mark{ position: absolute; top: 6px; right: 20px; font-family: var(--font-display); font-weight: 700; font-size: 66px; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; opacity: 0.16; pointer-events: none; }
          .inv-quote blockquote{ position: relative; margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 18px; line-height: 1.5; letter-spacing: -0.015em; color: var(--ink); }
          .inv-quote figcaption{ margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 11px; }
          .inv-quote-ava{ flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: var(--brand-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 13px; }
          .inv-quote figcaption strong{ display: block; font-size: 13.5px; color: var(--ink); }
          .inv-quote figcaption span span{ display: block; font-size: 12px; color: var(--ink-3); margin-top: 1px; }

          .inv-moatquote{
            position: relative; overflow: hidden; margin: 22px 0 0;
            border-radius: var(--radius-xl); padding: 34px 38px;
            background: linear-gradient(150deg, #161a5e 0%, #25278a 55%, #3a37ad 100%);
            box-shadow: 0 30px 64px -30px rgba(37,39,138,0.55);
          }
          .inv-moat-glow{ position: absolute; width: 460px; height: 460px; right: -140px; top: -200px; border-radius: 50%; background: radial-gradient(circle, rgba(43,179,223,0.3), transparent 62%); pointer-events: none; }
          .inv-cap-eye{ position: relative; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #8fe0f7; }
          .inv-moatquote blockquote{ position: relative; margin: 14px 0 0; font-family: var(--font-display); font-weight: 600; font-size: 23px; line-height: 1.4; letter-spacing: -0.02em; color: #fff; max-width: 880px; }
          .inv-moatquote figcaption{ position: relative; margin-top: 16px; font-size: 13.5px; color: rgba(255,255,255,0.7); }
          .inv-moatquote figcaption strong{ color: #fff; }
          .inv-moatquote p{ position: relative; margin: 18px 0 0; font-size: 14.5px; line-height: 1.6; color: rgba(255,255,255,0.74); max-width: 800px; }
          .iv-hl-c{ color: #8fe0f7; font-weight: 600; }
          @media (max-width: 760px){ .inv-quotes{ grid-template-columns: 1fr; } .inv-moatquote{ padding: 28px 24px; } .inv-moatquote blockquote{ font-size: 20px; } }
        `}</style>
      </section>

      {/* traction */}
      <section className="mf-section" style={{ overflow: "hidden" }}>
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Traction</span>
            <h2 style={{ marginTop: 14 }}>A live pilot, and an early signal.</h2>
            <p>A top-tier R1 university is piloting Nia now, before a public launch.</p>
          </div>
          <div className="iv-statgrid four">
            <Stat bloom="purple" value={<>1<span className="iv-stat-u"> · R1</span></>} label="Live university pilot, a top-tier R1"/>
            <Stat bloom="blue" value={<span className="mf-grad-text">Cohort</span>} label="A summer cohort, engaged weekly through the pilot"/>
            <Stat bloom="purple" value={<>6–8<span className="iv-stat-u"> wks</span></>} label="Weeks of continuous student use, pilot to date"/>
            <Stat bloom="blue" value={<>Canvas<span className="iv-stat-u"> partner</span></>} label="Official LMS-layer distribution, before a dollar of spend"/>
          </div>
          <p style={{ marginTop: 18, fontSize: 13.5, color: "var(--ink-3)", maxWidth: 760 }}>
            Early, but real: a governed deployment running in production at a research university. Not a prototype, not a waitlist.
          </p>
        </div>
      </section>

      {/* market / why now */}
      <section className="mf-section" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #F5F8FE 0%, #ECF1FB 100%)" }}>
        <div aria-hidden="true" style={{ position: "absolute", width: 760, height: 520, top: -200, right: -160, background: "radial-gradient(ellipse, rgba(102,128,255,0.10), transparent 60%)", pointerEvents: "none" }}/>
        <div className="mf-container" style={{ position: "relative" }}>
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Market · why now</span>
            <h2 style={{ marginTop: 14 }}>A large market, at the <span className="mf-grad-text">exact moment</span> it adopts AI.</h2>
            <p>Big enough to matter, fragmented enough to win, and finally ready to buy.</p>
          </div>
          <div className="iv-statgrid three">
            <Stat bloom="blue" value={<><span className="mf-grad-text">$52B</span><span className="iv-stat-u"> est.</span></>} label="US higher-ed student-success and advising software: the market Nia sells into."/>
            <Stat bloom="purple" value={<span className="mf-grad-text">5,819</span>} label="Title IV institutions in the US, from degree to certificate to online. Each one an enterprise buyer."/>
            <Stat bloom="blue" value={<><span className="mf-grad-text">$26B</span><span className="iv-stat-u"> est.</span></>} label="Tuition revenue lost to attrition each year, roughly early departures times one year of tuition: the budget Nia is built to protect."/>
          </div>
          <p style={{ marginTop: 22, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 760 }}>
            Why now: institutions face real enrollment and retention pressure, AI is finally good
            enough to coach, and FERPA-aligned governance is the gate generic tools can&apos;t pass.
          </p>
          <p style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.02em", color: "var(--ink-3)", lineHeight: 1.6 }}>
            Institution count: 5,819 Title IV postsecondary institutions, NCES / IPEDS, 2023–24. Market and retention-loss figures are internal estimates.
          </p>
        </div>
      </section>

      {/* why we win */}
      <section className="mf-section" style={{ overflow: "hidden" }}>
        <div className="mf-container">
          <div className="mf-section-head" style={{ textAlign: "left", marginLeft: 0, maxWidth: 720 }}>
            <span className="mf-eyebrow">Why we win</span>
            <h2 style={{ marginTop: 14 }}>The moat is the architecture.</h2>
            <p>Six things that compound, and get more expensive to copy the longer Nia runs.</p>
          </div>
          <div className="iv-moat-grid mf-stack-sm">
            {[
              ["Inside-out architecture", "Your data first, the global model last. Expensive to copy."],
              ["Unified student memory", "Five domains, one profile, one source of truth."],
              ["Governed, source-linked answers", "Factual queries against real rows, not generation."],
              ["Per-tenant governance", "Your instance, your rules, never a shared brain."],
              ["Official Canvas Partner", "Distribution and integration advantage at the LMS layer."],
              ["Compounding switching cost", "The longer Nia runs, the more institutional context it owns."],
            ].map(([t, d], i) => (
              <div key={t} className="iv-cell">
                <span aria-hidden="true" className={`iv-bloom iv-bloom-${i % 2 === 0 ? "blue" : "purple"}`}/>
                <div className="iv-moat-card">
                  <span className="iv-moat-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <strong className="iv-moat-t">{t}</strong>
                  <span className="iv-moat-d">{d}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/why-nia" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
            See the full moat breakdown on Why Nia <ArrowRight s={15}/>
          </Link>
        </div>
        <style>{`
          .iv-moat-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
          .iv-moat-card{
            position: relative; overflow: hidden;
            display: flex; flex-direction: column;
            background: #FBFCFE; border: 1px solid var(--line);
            border-radius: var(--radius-lg); padding: 22px 22px 24px;
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
          }
          .iv-moat-card:hover{ transform: translateY(-4px); box-shadow: 0 24px 48px -22px rgba(15,23,42,0.16); border-color: #D8DEF0; }
          .iv-moat-n{ font-family: var(--font-display); font-weight: 700; font-size: 22px; letter-spacing: -0.03em; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .iv-moat-t{ margin-top: 12px; font-family: var(--font-display); font-weight: 600; font-size: 16px; letter-spacing: -0.01em; color: var(--ink); }
          .iv-moat-d{ margin-top: 7px; font-size: 13.5px; line-height: 1.55; color: var(--ink-2); }
          @media (max-width: 900px){ .iv-moat-grid{ grid-template-columns: 1fr 1fr; } }
          @media (max-width: 560px){ .iv-moat-grid{ grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* the ask */}
      <section style={{ background: "linear-gradient(160deg, #161a5e 0%, #25278a 52%, #3a37ad 100%)", color: "white", padding: "88px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 620, height: 620, right: -220, top: -240, background: "radial-gradient(circle, rgba(43,179,223,0.22), transparent 62%)", borderRadius: "50%", pointerEvents: "none" }}/>
        <div className="mf-container" style={{ position: "relative", maxWidth: 760, textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>The ask</span>
          <h2 style={{ color: "white", margin: "18px 0 0", fontSize: "clamp(28px, 5.2vw, 42px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            We&apos;re raising to build out the <span style={{ background: "linear-gradient(135deg,#8fe0f7,#aab0f2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>staff tool</span>.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: 600, margin: "18px auto 0", fontSize: 16, lineHeight: 1.6 }}>
            The student experience is live and in production. This round funds the advisor-facing co-pilot, the institution&apos;s side of the platform, and the runway to turn an active pilot into signed campuses.
          </p>
          <div className="iv-ask-uses">
            <span className="iv-ask-use"><b>Advisor co-pilot</b>Early-alert queue + outreach drafted in the advisor&apos;s voice</span>
            <span className="iv-ask-use"><b>Cohort analytics</b>Retention signals leadership can actually act on</span>
            <span className="iv-ask-use"><b>Pilot → paid</b>Convert the live deployment into signed institutions</span>
          </div>
          <div style={{ marginTop: 34, display: "flex", gap: 20, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/contact#form-investor" className="mf-btn mf-btn-lg" style={{ textDecoration: "none", background: "white", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Request the full brief <ArrowRight/>
            </Link>
            <Link href="/contact#team" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
              Meet the team →
            </Link>
          </div>
        </div>
        <style>{`
          .iv-ask-uses{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 32px auto 0; max-width: 720px; text-align: left; }
          .iv-ask-use{ display: flex; flex-direction: column; gap: 5px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: var(--radius-lg); padding: 16px 18px; font-size: 12.5px; line-height: 1.45; color: rgba(255,255,255,0.72); }
          .iv-ask-use b{ font-family: var(--font-display); font-weight: 600; font-size: 14.5px; color: #fff; }
          @media (max-width: 720px){ .iv-ask-uses{ grid-template-columns: 1fr; max-width: 420px; } }
        `}</style>
      </section>
      </main>

      <Footer/>
    </div>
  );
}
