/* Hero capability teaser — three compact tiles that preview the page's three
   capability themes (sentiment, alerts, journeys). The full app mockups and
   the depth live in the For-Students / For-Staff rows below, so the hero teases
   rather than tells the same story twice (Audit III). Server component, static. */

const Ico = ({ d }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const IcoPulse = <Ico d={<path d="M3 12h4l2.5-7 4 14 2.5-7H21"/>}/>;
const IcoBell = <Ico d={<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>}/>;
const IcoRoute = <Ico d={<><circle cx="6" cy="19" r="2.6"/><circle cx="18" cy="5" r="2.6"/><path d="M8.5 19H14a4 4 0 0 0 4-4V7.6M6 16.4V9a4 4 0 0 1 4-4h5.5"/></>}/>;

const CARDS = [
  {
    tag: "Sentiment",
    title: "Real-time sentiment tracking",
    body: "Every conversation carries signal. Nia reads tone, frustration, and momentum — quietly, on every interaction.",
    bg: "linear-gradient(180deg, #F4F8FC 0%, #E7F0FA 100%)",
    accent: "#1a8fc0",
    icon: IcoPulse,
  },
  {
    tag: "Alerts",
    title: "Proactive intervention alerts",
    body: "The right person hears about the right student at the right moment — before a missed deadline becomes a missed term.",
    bg: "linear-gradient(180deg, #FBF6EF 0%, #F5ECDD 100%)",
    accent: "#B45309",
    icon: IcoBell,
  },
  {
    tag: "Journeys",
    title: "Personalized student journeys",
    body: "Plans that adapt to schedule, course load, and how each student actually studies — not a one-size-fits-all template.",
    bg: "linear-gradient(180deg, #F2F8F3 0%, #E6F2E9 100%)",
    accent: "#15803D",
    icon: IcoRoute,
  },
];

export default function CapabilityCards() {
  return (
    <div className="hc-grid">
      {CARDS.map((c) => (
        <div className="hc-card" key={c.tag} style={{ background: c.bg }}>
          <span className="hc-icon" style={{ color: c.accent }}>{c.icon}</span>
          <span className="hc-tag" style={{ color: c.accent }}>{c.tag}</span>
          <h3 className="hc-title">{c.title}</h3>
          <p className="hc-body">{c.body}</p>
        </div>
      ))}

      <style>{`
        .hc-grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .hc-card{
          position: relative;
          border-radius: 22px;
          border: 1px solid rgba(11,16,32,0.06);
          box-shadow: 0 18px 40px -30px rgba(11,16,32,0.22);
          padding: 28px 28px 30px;
          text-align: left;
        }
        .hc-icon{
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 13px;
          background: rgba(255,255,255,0.72);
          box-shadow: 0 4px 12px -6px rgba(11,16,32,0.18), inset 0 0 0 1px rgba(255,255,255,0.6);
        }
        .hc-tag{
          display: block; margin-top: 18px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 600;
        }
        .hc-title{
          margin: 8px 0 0;
          font-family: var(--font-display); font-size: 23px; font-weight: 600;
          letter-spacing: -0.02em; line-height: 1.15; color: var(--ink);
        }
        .hc-body{
          margin: 10px 0 0;
          font-size: 14px; line-height: 1.55; color: var(--ink-2);
        }
        @media (max-width: 1080px){
          .hc-grid{ grid-template-columns: 1fr; gap: 14px; margin-top: 36px; }
          .hc-card{ max-width: 520px; width: 100%; margin: 0 auto; box-sizing: border-box; }
        }
      `}</style>
    </div>
  );
}
