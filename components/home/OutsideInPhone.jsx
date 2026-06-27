"use client";
/* "Other AIs work outside-in" — the colorless mirror of InsideOutPhone.
   A cheap plastic Android running a generic ad-supported chatbot. Around
   it: dashed gray rings, an orbit of internet junk flowing INWARD, and
   the student's own data tiles locked out in grayscale. The only color
   on the whole stage is the ad. */
import { useEffect, useState } from "react";

const LOOP_MS = 12500;

/* what orbits a web-first model: perfectly fine topics, all weighted
   the same — the student's homework is just one more pill in the ring */
const JUNK = [
  "Your homework", "Recipe ideas", "World history", "Movie reviews",
  "Travel tips", "Sports scores", "Product reviews", "Trivia",
].map((t, i) => ({ t, a: -90 + i * 45, tilt: [-4, 3, -3, 5, -5, 2, -2, 4][i] }));

/* the student's data, visible but locked out — parked outside the topic
   orbit (r=252) so the sweeping pills never collide with them */
const LOCKED = [
  // mirrored arc: upper pair at ±258, lower pair (wider) at ±300, same
  // heights left and right — Profile ↔ University, LMS ↔ SIS
  { t: "Profile", src: "/inside-out/profile.webp", x: -258, y: -262, hideMd: true },
  { t: "LMS data", src: "/inside-out/lms data.webp", x: -300, y: -96 },
  { t: "University resources", src: "/inside-out/university resources.webp", x: 258, y: -262, hideMd: true },
  { t: "SIS data", src: "/inside-out/sis data.webp", x: 300, y: -96 },
];

const Lock = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#878D9E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  </svg>
);

export default function OutsideInPhone() {
  const [cycle, setCycle] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => { setReduced(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearTimeout(t);
  }, [cycle, reduced]);

  return (
    <div className="oi-stage" role="img" aria-label="Generic chatbots work outside-in: web text and ads flow in, while the student's LMS, calendar, and profile stay locked out">
      <div className="oi-center">
        <span className="oi-glow"/>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="oi-ring" style={{ "--d": `${360 + i * 165}px`, "--o": 0.30 - i * 0.055 }}/>
        ))}

        {/* the web flowing inward */}
        <svg className="oi-flow" width="640" height="640" viewBox="-320 -320 640 640">
          {[32, 152, 262].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = Math.cos(rad) * 296, y1 = Math.sin(rad) * 296;
            const x2 = Math.cos(rad) * 168, y2 = Math.sin(rad) * 168;
            return (
              <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A7ADBD" strokeWidth="1.4" strokeDasharray="5 14" strokeLinecap="round" opacity="0.6">
                {!reduced && <animate attributeName="stroke-dashoffset" values="0;-38" dur="1.8s" repeatCount="indefinite"/>}
              </line>
            );
          })}
        </svg>

        <div className="oi-orbit">
          {JUNK.map((j) => (
            <span key={j.t} className="oi-sat" style={{ "--a": `${j.a}deg`, "--tilt": `${j.tilt}deg` }}>
              <span className="oi-pill">{j.t}</span>
            </span>
          ))}
        </div>

        {/* the student's world: present, grayscale, locked out */}
        {LOCKED.map((l, i) => (
          <span key={l.t} className={`oi-locked${l.hideMd ? " oi-locked-extra" : ""}`} style={{ left: l.x, top: l.y, animationDelay: `${i * 1.3}s` }}>
            <img src={l.src} alt="" width="218" height="217" loading="lazy" decoding="async"/>
            <span className="oi-locked-t"><Lock/>{l.t}</span>
            <span className="oi-noaccess">no access</span>
          </span>
        ))}
      </div>

      {/* the bad phone — boxy plastic, big chin, slightly crooked */}
      <div className="oi-phone" key={cycle}>
        <div className="oi-frame">
          <span className="oi-cam"/>
          <span className="oi-speaker"/>
          <div className="oi-screen">
            <div className="oi-status">
              <span>4:51</span>
              <span className="oi-status-r">▾ LTE ▮</span>
            </div>
            <div className="oi-appbar">
              <span className="oi-bothead">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6E7484" strokeWidth="1.8"><rect x="5" y="7" width="14" height="12" rx="2"/><circle cx="9.5" cy="12.5" r="1.2" fill="#6E7484" stroke="none"/><circle cx="14.5" cy="12.5" r="1.2" fill="#6E7484" stroke="none"/><path d="M12 7V4M9 19v2M15 19v2"/></svg>
              </span>
              <span>
                <span className="oi-appbar-name">AnswerBot</span>
                <span className="oi-appbar-sub">free plan · contains ads</span>
              </span>
            </div>
            <div className="oi-chat">
              <div className="oi-today oi-rise" style={{ animationDelay: "200ms" }}>Today</div>
              <div className="oi-bubble-user oi-rise" style={{ animationDelay: "500ms" }}>
                What should I focus on this week?
              </div>
              <div className="oi-bubble-bot oi-rise" style={{ animationDelay: "2000ms" }}>
                Great question! Productivity is important. Here are some universal tips:
                <ol>
                  <li>Wake up earlier</li>
                  <li>Make a to-do list</li>
                  <li>Stay hydrated</li>
                </ol>
              </div>
              {/* the only color on the stage */}
              <div className="oi-ad oi-rise" style={{ animationDelay: "5400ms" }}>
                <span className="oi-ad-tag">AD</span>
                <span className="oi-ad-body">
                  <span className="oi-ad-title">FocusBoost™ Energy Shots</span>
                  <span className="oi-ad-sub">Crush your week! 20% off code GRIND</span>
                </span>
                <span className="oi-ad-btn">Shop ▸</span>
              </div>
              <div className="oi-bubble-bot oi-small oi-rise" style={{ animationDelay: "8200ms" }}>
                Related: <u>10 best planners of 2026</u> (affiliate links)
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .oi-stage { position: relative; height: 600px; }

        .oi-center { position: absolute; left: 55%; top: calc(100% - 248px); width: 0; height: 0; }
        .oi-glow {
          position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);
          width: 520px; height: 520px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(124,131,150,0.16) 0%, rgba(124,131,150,0.07) 42%, transparent 66%);
          filter: blur(40px);
        }
        .oi-ring {
          position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);
          width: var(--d); height: var(--d); border-radius: 50%;
          border: 2px dashed rgba(110,117,136, var(--o));
          animation: oi-churn 90s linear infinite;
          pointer-events: none;
        }
        @keyframes oi-churn { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .oi-flow { position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); pointer-events: none; }

        /* junk orbit — same exact-point technique as the inside-out stage */
        @property --oiang { syntax: '<angle>'; inherits: true; initial-value: 0deg; }
        .oi-orbit { position: absolute; left: 0; top: 0; --oiang: 0deg; --r: 252px; animation: oi-sweep 95s linear infinite; }
        @keyframes oi-sweep { to { --oiang: 360deg; } }
        .oi-sat {
          position: absolute; left: 0; top: 0; width: 0; height: 0;
          transform: rotate(calc(var(--oiang) + var(--a)))
                     translateY(calc(-1 * var(--r)))
                     rotate(calc(-1 * (var(--oiang) + var(--a)) + var(--tilt, 0deg)));
        }
        .oi-pill {
          position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.08em; text-transform: uppercase;
          color: #7A8090; background: rgba(255,255,255,0.85);
          border: 1px dashed #C5C9D4; border-radius: 999px; padding: 5px 11px;
          box-shadow: 0 4px 10px -6px rgba(60,65,80,0.18);
        }

        /* the student's data, locked out */
        .oi-locked {
          position: absolute; transform: translate(-50%, -50%);
          display: inline-flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 9px 10px 7px; border-radius: 12px;
          border: 1px dashed #C5C9D4; background: rgba(250,250,251,0.8);
          animation: oi-drift 5.2s ease-in-out infinite;
        }
        @keyframes oi-drift { 0%,100% { margin-top: 0; } 50% { margin-top: -5px; } }
        .oi-locked img { width: 36px; height: auto; filter: grayscale(1); opacity: 0.5; }
        .oi-locked-t {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.04em;
          color: #878D9E; text-decoration: line-through; text-decoration-color: rgba(135,141,158,0.6);
        }
        .oi-noaccess {
          font-family: var(--font-mono); font-size: 6.5px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #A8473F;
          background: rgba(168,71,63,0.08);
          border-radius: 999px; padding: 1.5px 6px;
        }

        /* the phone: flat plastic, sharp corners, fat chin, slightly crooked */
        .oi-phone { position: absolute; left: 55%; bottom: -118px; transform: translateX(-50%) rotate(-1.8deg); width: 288px; }
        .oi-frame {
          position: relative; width: 100%; aspect-ratio: 288 / 590;
          background: #3A3D45;
          border: 1px solid #2C2E35;
          border-radius: 22px; padding: 30px 9px 34px; box-sizing: border-box;
          box-shadow: 0 28px 48px rgba(20,22,28,0.28);
        }
        .oi-cam { position: absolute; top: 11px; left: 50%; transform: translateX(-58px); width: 8px; height: 8px; border-radius: 50%; background: #15171c; box-shadow: inset 0 0 2px rgba(255,255,255,0.18); }
        .oi-speaker { position: absolute; top: 13px; left: 50%; transform: translateX(-50%); width: 52px; height: 4px; border-radius: 2px; background: #24262d; }
        .oi-screen {
          width: 100%; height: 100%; border-radius: 6px; overflow: hidden;
          background: #FCFBF4;
          display: flex; flex-direction: column;
          font-family: Arial, Helvetica, sans-serif;
        }
        .oi-status {
          display: flex; justify-content: space-between; padding: 6px 10px 4px;
          font-size: 9.5px; color: #6E7484; flex-shrink: 0;
        }
        .oi-status-r { letter-spacing: 0.06em; }
        .oi-appbar {
          display: flex; align-items: center; gap: 8px; padding: 7px 11px;
          background: #EFEEE6; border-bottom: 1px solid #DEDDD2; flex-shrink: 0;
        }
        .oi-bothead {
          width: 24px; height: 24px; border-radius: 5px; background: #DDDCD2;
          display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .oi-appbar-name { display: block; font-size: 12px; font-weight: 700; color: #3E424E; line-height: 1.1; }
        .oi-appbar-sub { display: block; font-size: 8px; color: #9296A3; margin-top: 1px; }
        .oi-chat { flex: 1; padding: 10px 10px 14px; display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
        .oi-today { align-self: center; font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: #ABAFBA; }
        .oi-rise { opacity: 0; animation: oi-rise 420ms ease-out both; }
        @keyframes oi-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .oi-bubble-user {
          align-self: flex-end; max-width: 82%; padding: 7px 10px;
          background: #8B93A6; color: white;
          border-radius: 3px; font-size: 11px; line-height: 1.4;
        }
        .oi-bubble-bot {
          align-self: flex-start; max-width: 88%; padding: 8px 10px;
          background: #ECEBE1; color: #4A4E59; border: 1px solid #DEDDD2;
          border-radius: 3px; font-size: 10.5px; line-height: 1.45;
        }
        .oi-bubble-bot ol { margin: 5px 0 0; padding-left: 16px; }
        .oi-bubble-bot li { margin-top: 2px; }
        .oi-bubble-bot.oi-small { font-size: 9.5px; color: #7A7E8A; }
        .oi-bubble-bot u { color: #5B6478; }

        /* the one thing with color */
        .oi-ad {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 9px; border-radius: 4px;
          background: linear-gradient(135deg, #FFE066 0%, #FFB938 100%);
          border: 1px solid #E8A400;
          box-shadow: 0 4px 10px -4px rgba(232,164,0,0.5);
        }
        .oi-ad-tag {
          flex-shrink: 0; font-size: 7.5px; font-weight: 800; letter-spacing: 0.08em;
          color: #7A5800; background: rgba(255,255,255,0.65); border: 1px solid rgba(122,88,0,0.35);
          border-radius: 3px; padding: 2px 4px;
        }
        .oi-ad-body { flex: 1; min-width: 0; }
        .oi-ad-title { display: block; font-size: 10.5px; font-weight: 800; color: #553D00; }
        .oi-ad-sub { display: block; font-size: 8.5px; color: #7A5800; margin-top: 1px; }
        .oi-ad-btn {
          flex-shrink: 0; font-size: 9px; font-weight: 800; color: #FFE9A8;
          background: #6B4E00; border-radius: 3px; padding: 5px 8px;
        }

        @media (max-width: 980px) {
          .oi-stage { height: 520px; }
          .oi-phone { width: 246px; bottom: -104px; }
          .oi-center { top: calc(100% - 208px); }
          .oi-orbit { --r: 206px; }
          .oi-glow { width: 430px; height: 430px; }
          .oi-locked-extra { display: none; }
        }
        @media (max-width: 560px) {
          .oi-stage { height: 470px; }
          .oi-phone { left: 50%; width: 216px; bottom: -92px; }
          .oi-center { left: 50%; top: calc(100% - 180px); }
          .oi-orbit { --r: 156px; }
          .oi-pill { font-size: 7.5px; padding: 4px 9px; }
          .oi-locked { display: none; }
          .oi-glow { width: 340px; height: 340px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .oi-stage * { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
