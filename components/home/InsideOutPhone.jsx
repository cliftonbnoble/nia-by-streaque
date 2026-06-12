"use client";
/* "Nia works inside-out" — the phone stage.
   Top ~80% of the hero phone playing the agent-thinking loop, wrapped in a
   soft gradient glow, growing concentric rings, and two slow orbits of
   data-source tiles (LMS, SIS, CRM, profile, resources, and so on): all the
   things Nia already knows before the global model is ever consulted. */
import { useEffect, useState } from "react";

const LOOP_MS = 12000;

/* ── Nia brand mark ─────────────────────────────────────────── */
const NiaGlyph = ({ s = 22, gid }) => (
  <svg width={s} height={s} viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill={`url(#${gid}0)`}/>
    <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill={`url(#${gid}1)`}/>
    <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
    <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    <defs>
      <linearGradient id={`${gid}0`} x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id={`${gid}1`} x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
  </svg>
);
const NiaMark = ({ s = 22, gid }) => (
  <span className="io-av" style={{ width: s, height: s }}><NiaGlyph s={s} gid={gid}/></span>
);

const I = ({ s = 14, sw = 2, c = "currentColor", children, style, cls }) => (
  <svg className={cls} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>
);
const IcSparkles = (p) => <I {...p}><path d="M12 3l1.9 5.7a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></I>;
const IcBulb = (p) => <I {...p}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.2 1.3 1.4 2.1h4.2c.2-.8.7-1.6 1.4-2.1A6 6 0 0 0 12 3z"/></I>;
const IcWrench = (p) => <I {...p}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></I>;
const IcCheck = (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>;
const IcLoader = (p) => <I {...p}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></I>;
const IcBell = (p) => <I {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></I>;
/* ── orbiting data tiles — real source icons from /inside-out/ ──
   10 per ring, every 36°; the outer ring is offset 18° so the two
   rings interleave. Short labels ride the tighter inner ring.
   Tiles stay upright (slight per-tile tilt for life) no matter the
   orbit angle: one @property angle drives both the sweep and the
   counter-rotation, so they can never fall out of sync. */
const TILTS = [-4, 3, -2, 5, -5, 2, -3, 4, -4, 3];
const ring = (names, offset) =>
  names.map((t, i) => ({ t, src: `/inside-out/${t.toLowerCase()}.png`, a: offset + i * 36, tilt: TILTS[i] }));

const RING_A = ring(
  ["Goals", "Profile", "CRM data", "Calendar", "Interests", "Resume", "Deadlines", "Applications", "LMS data", "SIS data"],
  -90
);
const RING_B = ring(
  ["Advising notes", "Class progress", "Canvas", "Degree audit", "Financial aid", "Internships", "Job services", "Message history", "SharePoint", "University resources"],
  -72
);

const Tile = ({ t, src, a, tilt }) => (
  <span className="io-sat" style={{ "--a": `${a}deg`, "--tilt": `${tilt}deg` }}>
    <span className="io-tile">
      <img className="io-tile-img" src={src} alt="" width="218" height="217" loading="lazy" decoding="async"/>
      <span className="io-tile-t">{t}</span>
    </span>
  </span>
);

/* ── the agent-thinking scene (top 80% visible) ─────────────── */
const STEPS = [
  { at: 1900, chip: "Preparing", Icon: IcSparkles, text: "Setting up the right agent context." },
  { at: 3000, chip: "Planning", Icon: IcBulb, text: "Choosing the right specialist." },
  { at: 4100, chip: "Tools", Icon: IcWrench, text: "Searching Canvas student data…" },
  { at: 5200, chip: "Tools", Icon: IcWrench, text: "Searching university resources…" },
  { at: 6300, chip: "Tools", Icon: IcWrench, text: "Reading profile context…" },
];
const DONE = 7100;

export default function InsideOutPhone() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="io-stage" aria-label="Nia answers from the inside out: student data, campus context, and university resources are consulted before the global model">
      {/* glow + growing rings, centered on the phone */}
      <div className="io-center">
        <span className="io-glow"/>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="io-ring" style={{ "--d": `${380 + i * 170}px`, "--o": 0.16 - i * 0.03, animationDelay: `${i * 1.1}s` }}/>
        ))}
        <div className="io-orbit io-orbit-a">
          {RING_A.map((x) => <Tile key={x.t} {...x}/>)}
        </div>
        <div className="io-orbit io-orbit-b">
          {RING_B.map((x) => <Tile key={x.t} {...x}/>)}
        </div>
      </div>

      {/* the phone — top 80%, bottom cropped by the stage */}
      <div className="io-phone" key={cycle}>
        <div className="io-zoom">
        <div className="io-frame">
          <div className="io-bezel">
            <div className="io-screen">
              <div className="io-status">
                <span className="io-time">9:41</span>
                <span className="io-sticons">
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="#0f172a"><rect x="0" y="6" width="2.6" height="4" rx="0.8"/><rect x="4" y="4" width="2.6" height="6" rx="0.8"/><rect x="8" y="2" width="2.6" height="8" rx="0.8"/><rect x="12" y="0" width="2.6" height="10" rx="0.8" opacity="0.35"/></svg>
                  <svg width="20" height="10" viewBox="0 0 20 10"><rect x="0.5" y="0.5" width="16" height="9" rx="2.5" fill="none" stroke="#0f172a" strokeOpacity="0.45"/><rect x="2" y="2" width="11" height="6" rx="1.4" fill="#0f172a"/></svg>
                </span>
              </div>
              <div className="io-appbar">
                <NiaMark s={24} gid={`iob${cycle}`}/>
                <span className="io-appbar-name">Nia</span>
                <span className="io-appbar-bell"><IcBell s={14} sw={1.9}/></span>
              </div>
              <div className="io-chat">
                <div className="io-today io-rise" style={{ animationDelay: "200ms" }}>Today</div>
                <div className="io-bubble-user io-rise" style={{ animationDelay: "500ms" }}>
                  Hey Nia, what should I focus on this week?
                </div>
                <div className="io-row io-rise" style={{ animationDelay: "1300ms" }}>
                  <NiaMark gid={`iot${cycle}`}/>
                  <div className="io-think">
                    <div className="io-think-head">
                      <span className="io-spark"><IcSparkles s={11} sw={2.1}/></span>
                      <span className="io-think-title">NIA is thinking</span>
                      <span className="io-state">
                        <IcLoader s={13} sw={2.3} cls="io-rot" style={{ animationDelay: `0ms, ${DONE}ms` }}/>
                        <IcCheck s={11} sw={2.6} cls="io-pop io-state-check" style={{ animationDelay: `${DONE}ms` }}/>
                      </span>
                    </div>
                    <ul className="io-steps">
                      {STEPS.map((st, i) => {
                        const doneAt = i < STEPS.length - 1 ? STEPS[i + 1].at : DONE;
                        return (
                          <li key={i} className="io-step io-rise" style={{ animationDelay: `${st.at}ms` }}>
                            <span className="io-step-state">
                              <IcLoader s={10} sw={2.6} cls="io-rot io-step-spin" style={{ animationDelay: `0ms, ${doneAt}ms` }}/>
                              <IcCheck s={9} sw={3} cls="io-pop io-step-check" style={{ animationDelay: `${doneAt}ms` }}/>
                            </span>
                            <span className="io-step-line">
                              <span className="io-chip"><st.Icon s={8.5} sw={2.4}/>{st.chip}</span>
                              <span className="io-step-text">{st.text}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="io-row io-rise" style={{ animationDelay: "7600ms" }}>
                  <NiaMark gid={`ioa${cycle}`}/>
                  <div className="io-bubble-nia">
                    Done! Your week is mapped. BIO 201 prep comes first, then your FAFSA signature.
                  </div>
                </div>
              </div>
              <div className="io-island"><span className="io-cam"/></div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <style>{`
        .io-stage { position: relative; height: 600px; }
        .io-av { flex: 0 0 auto; border-radius: 50%; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }

        /* center anchor for glow, rings, orbits — the phone's visible center */
        .io-center { position: absolute; left: 45%; top: calc(100% - 248px); width: 0; height: 0; }
        .io-glow {
          position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);
          width: 540px; height: 540px; border-radius: 50%; pointer-events: none;
          background:
            radial-gradient(circle at 44% 42%, rgba(84, 201, 255, 0.40) 0%, rgba(84, 201, 255, 0.16) 38%, transparent 64%),
            radial-gradient(circle at 62% 62%, rgba(123, 103, 241, 0.30) 0%, rgba(123, 103, 241, 0.12) 40%, transparent 66%);
          filter: blur(46px); opacity: 0.9;
        }
        .io-ring {
          position: absolute; left: 0; top: 0; transform: translate(-50%, -50%);
          width: var(--d); height: var(--d); border-radius: 50%;
          border: 1.5px solid rgba(61, 78, 216, var(--o));
          box-shadow: 0 0 30px rgba(84, 201, 255, 0.05);
          animation: io-breathe 7s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes io-breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.025); } }

        /* orbits — one animated angle (@property) drives both the sweep and
           each tile's counter-rotation, so tiles always read upright */
        @property --ioang { syntax: '<angle>'; inherits: true; initial-value: 0deg; }
        .io-orbit { position: absolute; left: 0; top: 0; --ioang: 0deg; }
        .io-orbit-a { animation: io-sweep 80s linear infinite; --r: 196px; }
        .io-orbit-b { animation: io-sweep-rev 130s linear infinite; --r: 286px; }
        @keyframes io-sweep { to { --ioang: 360deg; } }
        @keyframes io-sweep-rev { to { --ioang: -360deg; } }
        /* sat is zero-size so the transform composes about an exact point:
           swing to the radius, then undo the same angle (plus a slight tilt)
           about that point — the tile rides the circle but never flips */
        .io-sat {
          position: absolute; left: 0; top: 0; width: 0; height: 0;
          transform: rotate(calc(var(--ioang) + var(--a)))
                     translateY(calc(-1 * var(--r)))
                     rotate(calc(-1 * (var(--ioang) + var(--a)) + var(--tilt, 0deg)));
        }
        .io-tile {
          position: absolute; left: 0; top: 0;
          display: inline-flex; flex-direction: column; align-items: center; gap: 5px;
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }
        .io-tile-img {
          width: 52px; height: auto; display: block;
          filter: drop-shadow(0 10px 16px rgba(31, 52, 128, 0.18));
        }
        .io-tile-t {
          font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.04em; color: var(--ink-2);
          background: rgba(255,255,255,0.92); border: 1px solid #E7ECF8; border-radius: 999px;
          padding: 2.5px 8px; line-height: 1;
          box-shadow: 0 2px 6px rgba(31, 52, 128, 0.08);
        }
        .io-orbit-b .io-tile { opacity: 0.95; }

        /* phone shell — same language as the hero; the SECTION crops the bottom */
        .io-phone { position: absolute; left: 45%; bottom: -118px; transform: translateX(-50%); width: 292px; }
        .io-zoom { width: 100%; }
        .io-frame {
          position: relative; width: 100%; aspect-ratio: 292 / 597;
          background: linear-gradient(155deg, #4a4f5b 0%, #23262e 30%, #15171d 55%, #3a3f4b 100%);
          border-radius: 47px; padding: 9px; box-sizing: content-box;
          box-shadow: inset 0 0 2px rgba(255,255,255,0.35), inset 0 0 1px rgba(255,255,255,0.6),
                      0 36px 64px rgba(11,16,38,0.28), 0 14px 30px rgba(56,86,214,0.12);
        }
        .io-bezel { width: 100%; height: 100%; background: #000; border-radius: 39px; padding: 3px; box-sizing: border-box; }
        .io-screen { position: relative; width: 100%; height: 100%; border-radius: 36px; overflow: hidden; background: #f4f6f8; display: flex; flex-direction: column; }
        .io-island {
          position: absolute; top: 9px; left: 50%; transform: translateX(-50%);
          width: 74px; height: 21px; border-radius: 12px; background: #000; z-index: 9;
          display: flex; align-items: center; justify-content: flex-end; padding-right: 7px; box-sizing: border-box;
        }
        .io-cam { width: 9px; height: 9px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #1d2f4a 0%, #0a0f18 60%); }
        .io-status { display: flex; align-items: center; justify-content: space-between; padding: 13px 22px 0 26px; height: 24px; flex-shrink: 0; color: #0f172a; }
        .io-time { font-family: var(--font-display); font-size: 12.5px; font-weight: 600; }
        .io-sticons { display: inline-flex; align-items: center; gap: 5px; }
        .io-appbar { display: flex; align-items: center; gap: 8px; padding: 9px 14px 9px 16px; border-bottom: 1px solid rgba(15,23,42,0.07); background: rgba(255,255,255,0.75); flex-shrink: 0; margin-top: 4px; }
        .io-appbar-name { font-family: var(--font-display); font-size: 13px; font-weight: 600; color: var(--ink); }
        .io-appbar-bell { margin-left: auto; color: #64748b; position: relative; display: inline-flex; }
        .io-appbar-bell::after { content: ""; position: absolute; top: -1px; right: -1px; width: 5px; height: 5px; border-radius: 50%; background: #3D4ED8; }
        .io-chat { flex: 1; padding: 12px 12px 16px; display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
        .io-today { align-self: center; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase; color: #94a3b8; }
        .io-rise { opacity: 0; animation: io-rise 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes io-rise { from { opacity: 0; transform: translateY(9px); } to { opacity: 1; transform: none; } }
        .io-rot { animation: io-rotate 900ms linear infinite, io-gone 160ms linear both; }
        @keyframes io-rotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes io-gone { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        .io-pop { opacity: 0; animation: io-pop 260ms cubic-bezier(0.2, 1.4, 0.4, 1) both; }
        @keyframes io-pop { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }
        .io-bubble-user {
          align-self: flex-end; max-width: 82%; padding: 8px 11px;
          background: var(--brand-gradient); color: white;
          border-radius: 14px 14px 4px 14px; font-size: 11.5px; line-height: 1.45;
          box-shadow: 0 3px 8px -2px rgba(56,65,177,0.35);
        }
        .io-row { display: flex; gap: 7px; align-items: flex-start; }
        .io-bubble-nia {
          max-width: 86%; padding: 8px 11px; background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 4px 14px 14px 14px; font-size: 11.5px; line-height: 1.45; color: #1e293b;
          box-shadow: 0 1px 3px rgba(15,23,42,0.06);
        }
        .io-think {
          flex: 1; min-width: 0; padding: 10px 11px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eef2ff 100%);
          border: 1px solid #c7d2fe; border-radius: 4px 14px 14px 14px;
          box-shadow: 0 1px 3px rgba(15,23,42,0.08);
        }
        .io-think-head { display: flex; align-items: center; gap: 7px; }
        .io-spark {
          width: 20px; height: 20px; border-radius: 50%; flex: 0 0 auto;
          background: rgba(61,78,216,0.10); outline: 1px solid rgba(61,78,216,0.15); color: #3D4ED8;
          display: inline-flex; align-items: center; justify-content: center;
          animation: io-sparkpulse 2s ease-in-out infinite;
        }
        @keyframes io-sparkpulse { 0%, 100% { box-shadow: 0 0 10px rgba(61,78,216,0.10); } 50% { box-shadow: 0 0 16px rgba(61,78,216,0.22); } }
        .io-think-title { flex: 1; font-size: 11.5px; font-weight: 500; color: #334155; }
        .io-state { position: relative; width: 14px; height: 14px; flex: 0 0 auto; color: rgba(61,78,216,0.8); }
        .io-state svg { position: absolute; inset: 0; margin: auto; }
        .io-state-check { color: #059669; }
        .io-steps { list-style: none; margin: 9px 0 0; padding: 9px 0 0; border-top: 1px solid rgba(199,210,254,0.9); display: grid; gap: 8px; }
        .io-step { display: flex; gap: 7px; align-items: flex-start; }
        .io-step-state {
          position: relative; width: 16px; height: 16px; flex: 0 0 auto; margin-top: 1px;
          background: rgba(255,255,255,0.95); border-radius: 50%;
          box-shadow: 0 1px 2px rgba(15,23,42,0.08); outline: 1px solid rgba(226,232,240,0.9);
        }
        .io-step-state svg { position: absolute; inset: 0; margin: auto; }
        .io-step-spin { color: #3D4ED8; }
        .io-step-check { color: rgba(5,150,105,0.95); }
        .io-step-line { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; }
        .io-chip {
          display: inline-flex; align-items: center; gap: 3px; flex: 0 0 auto;
          background: rgba(224,231,255,0.9); box-shadow: inset 0 0 0 1px rgba(199,210,254,0.6);
          color: #3730a3; font-size: 7.5px; font-weight: 700; letter-spacing: 0.03em;
          text-transform: uppercase; border-radius: 999px; padding: 3px 6px; line-height: 1;
        }
        .io-step-text { font-size: 10.5px; color: #64748b; line-height: 1.35; }
        .io-step:last-child .io-step-text { color: #1e293b; font-weight: 500; }

        @media (max-width: 980px) {
          .io-stage { height: 520px; }
          .io-phone { width: 246px; bottom: -104px; }
          .io-zoom { zoom: 0.84; }
          .io-center { top: calc(100% - 208px); }
          .io-orbit-a { --r: 162px; }
          .io-orbit-b { --r: 234px; }
          .io-tile-img { width: 44px; }
          .io-tile-t { font-size: 7.5px; }
          .io-glow { width: 440px; height: 440px; }
        }
        @media (max-width: 560px) {
          .io-stage { height: 460px; }
          .io-phone { left: 50%; width: 211px; bottom: -90px; }
          .io-zoom { zoom: 0.72; }
          .io-center { left: 50%; top: calc(100% - 178px); }
          .io-orbit-a { --r: 124px; }
          .io-orbit-b { --r: 162px; }
          .io-tile-img { width: 38px; }
          .io-tile-t { font-size: 7px; padding: 2px 6px; }
          .io-glow { width: 360px; height: 360px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .io-stage * { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
