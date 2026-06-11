"use client";
/* "Nia for Students" — live chat demo in the hero phone's design language.
   A real back-and-forth: the student opens, and the conversation moves
   course prep → financial aid → advisor check-in. As each topic is handled,
   the matching capability chip animates into the footer, and the chat
   scrolls like a real thread. */
import { useEffect, useState } from "react";

const LOOP_MS = 17000;

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
  <span className="sc-av" style={{ width: s, height: s }}><NiaGlyph s={s} gid={gid}/></span>
);

const I = ({ s = 11, sw = 2.1, children, style }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>
);
const IcBell = (p) => <I {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></I>;
const IcCal = (p) => <I {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18"/></I>;
const IcCheck = (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>;
const IcSend = (p) => <I {...p}><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></I>;

/* one Nia turn: typing dots that resolve into the bubble */
const NiaTurn = ({ typeAt, sayAt, gid, children }) => (
  <div className="sc-row sc-rise" style={{ animationDelay: `${typeAt}ms` }}>
    <NiaMark gid={gid}/>
    <div className="sc-typing" style={{ animationDelay: `${sayAt - 60}ms` }}>
      <span/><span style={{ animationDelay: "150ms" }}/><span style={{ animationDelay: "300ms" }}/>
    </div>
    <div className="sc-bubble-nia sc-rise" style={{ animationDelay: `${sayAt}ms` }}>{children}</div>
  </div>
);

const CHIPS = [
  { t: "Course-aware tutoring", at: 2700, c: "#1a8fc0", tint: "rgba(43,179,223,0.10)", line: "rgba(43,179,223,0.45)" },
  { t: "Career & finance agents", at: 6300, c: "#0d8a5a", tint: "rgba(13,138,90,0.08)", line: "rgba(13,138,90,0.40)" },
  { t: "Advisor scheduling", at: 11900, c: "#7c5ce0", tint: "rgba(144,92,244,0.08)", line: "rgba(144,92,244,0.40)" },
  { t: "Always FERPA-scoped", at: 13400, c: "#475569", tint: "rgba(15,23,42,0.04)", line: "var(--line-2)" },
];

export default function StudentChatDemo() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="sc-panel" key={cycle} aria-label="Nia student chat demo: course prep, financial aid, and an advisor check-in handled in one conversation">
      <div className="sc-bar">
        <NiaMark s={24} gid={`scb${cycle}`}/>
        <span className="sc-bar-name">Nia</span>
        <span className="sc-bar-bell"><IcBell s={14} sw={1.9}/></span>
      </div>

      <div className="sc-chat">
        <div className="sc-scroll">
          <div className="sc-today sc-rise" style={{ animationDelay: "250ms" }}>Today · 8:05 AM</div>

          {/* topic 1 — the course */}
          <div className="sc-bubble-user sc-rise" style={{ animationDelay: "500ms" }}>
            hey Nia, not feeling ready for Friday&apos;s BIO 201 quiz
          </div>
          <NiaTurn typeAt={1300} sayAt={2300} gid={`n1-${cycle}`}>
            I&apos;ve got you, Maya. I built a <strong>10-minute prep</strong> from the two sections you missed. Tonight at 7?
          </NiaTurn>

          {/* topic 2 — financial aid */}
          <div className="sc-bubble-user sc-rise" style={{ animationDelay: "3900ms" }}>
            perfect. also my aid still hasn&apos;t hit my account…
          </div>
          <NiaTurn typeAt={4800} sayAt={5800} gid={`n2-${cycle}`}>
            There&apos;s a hold: your FAFSA needs <strong>one signature</strong>. I drafted the note to financial aid; just hit send.
          </NiaTurn>
          <div className="sc-receipt sc-rise" style={{ animationDelay: "7400ms" }}>
            <IcSend s={9} sw={2.3}/> Sent to financial aid
            <span className="sc-receipt-check"><IcCheck s={8} sw={3.2}/></span>
          </div>

          {/* topic 3 — the advisor */}
          <div className="sc-bubble-user sc-rise" style={{ animationDelay: "8300ms" }}>
            anything else I should get ahead of?
          </div>
          <NiaTurn typeAt={9200} sayAt={10200} gid={`n3-${cycle}`}>
            One thing: Dr. Chen has <strong>Thursday 2:00</strong> open for your check-in. Want it?
          </NiaTurn>
          <div className="sc-bubble-user sc-rise" style={{ animationDelay: "11400ms" }}>
            yes please
          </div>
          <div className="sc-row sc-rise" style={{ animationDelay: "12100ms" }}>
            <NiaMark gid={`n4-${cycle}`}/>
            <div className="sc-confirm">
              <span className="sc-confirm-ic"><IcCal s={12} sw={1.9}/></span>
              <span className="sc-confirm-t">
                Advisor check-in · Thu 2:00 PM
                <span className="sc-confirm-s">Added to your calendar · Dr. Chen notified</span>
              </span>
              <span className="sc-confirm-check" style={{ animationDelay: "12700ms" }}><IcCheck s={10} sw={3}/></span>
            </div>
          </div>
        </div>
      </div>

      <div className="sc-foot">
        {CHIPS.map((c) => (
          <span key={c.t} className="sc-chip" style={{ animationDelay: `${c.at}ms`, color: c.c, background: c.tint, borderColor: c.line }}>
            <span className="sc-chip-dot" style={{ background: c.c }}/>
            {c.t}
          </span>
        ))}
      </div>

      <style>{`
        .sc-panel {
          background: #f4f6f8; border: 1px solid var(--line); border-radius: var(--radius);
          overflow: hidden; display: flex; flex-direction: column; margin-top: 18px;
        }
        .sc-av { flex: 0 0 auto; border-radius: 50%; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }
        .sc-bar { display: flex; align-items: center; gap: 8px; padding: 9px 14px; background: rgba(255,255,255,0.85); border-bottom: 1px solid rgba(15,23,42,0.07); }
        .sc-bar-name { font-family: var(--font-display); font-weight: 600; font-size: 13px; color: var(--ink); }
        .sc-bar-bell { margin-left: auto; color: #64748b; position: relative; display: inline-flex; }
        .sc-bar-bell::after { content: ""; position: absolute; top: -1px; right: -1px; width: 5px; height: 5px; border-radius: 50%; background: #3D4ED8; }

        /* fixed viewport; the thread scrolls itself as it grows */
        .sc-chat { height: 312px; overflow: hidden; padding: 14px 14px 0; }
        .sc-scroll { display: flex; flex-direction: column; gap: 10px; animation: sc-scroll ${LOOP_MS}ms linear both; }
        @keyframes sc-scroll {
          0%, 38% { transform: translateY(0); }
          42%, 52% { transform: translateY(-68px); animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
          56%, 68% { transform: translateY(-148px); animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
          73%, 100% { transform: translateY(-218px); }
        }

        .sc-today { align-self: center; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.14em; text-transform: uppercase; color: #94a3b8; }
        .sc-rise { opacity: 0; animation: sc-rise 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes sc-rise { from { opacity: 0; transform: translateY(9px); } to { opacity: 1; transform: none; } }
        .sc-row { display: flex; gap: 8px; align-items: flex-start; position: relative; }
        .sc-typing {
          position: absolute; left: 30px; top: 0;
          display: inline-flex; gap: 4px; align-items: center;
          padding: 10px 12px; background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 4px 14px 14px 14px; box-shadow: 0 1px 3px rgba(15,23,42,0.06);
          animation: sc-gone 200ms linear both;
        }
        .sc-typing span { width: 5px; height: 5px; border-radius: 50%; background: #94a3b8; animation: sc-bounce 1s ease-in-out infinite; }
        @keyframes sc-bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-3px); } }
        @keyframes sc-gone { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        .sc-bubble-nia {
          max-width: 84%; padding: 9px 12px; background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 4px 14px 14px 14px; font-size: 12.5px; line-height: 1.5; color: #1e293b;
          box-shadow: 0 1px 3px rgba(15,23,42,0.06);
        }
        .sc-bubble-nia strong { font-weight: 600; color: #0f172a; }
        .sc-bubble-user {
          align-self: flex-end; max-width: 78%; padding: 9px 12px;
          background: var(--brand-gradient); color: white;
          border-radius: 14px 14px 4px 14px; font-size: 12.5px; line-height: 1.5;
          box-shadow: 0 3px 8px -2px rgba(56,65,177,0.35);
        }
        .sc-receipt {
          align-self: flex-end; display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.04em;
          color: #0d8a5a; background: rgba(13,138,90,0.07);
          border: 1px solid rgba(13,138,90,0.25); border-radius: 999px; padding: 4px 10px;
        }
        .sc-receipt-check { display: inline-flex; }
        .sc-confirm {
          flex: 1; min-width: 0; display: flex; align-items: center; gap: 9px;
          padding: 10px 12px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eef2ff 100%);
          border: 1px solid #c7d2fe; border-radius: 4px 14px 14px 14px;
          box-shadow: 0 1px 3px rgba(15,23,42,0.08);
        }
        .sc-confirm-ic { width: 24px; height: 24px; border-radius: 7px; flex: 0 0 auto; background: rgba(144,92,244,0.12); color: #7c5ce0; display: inline-flex; align-items: center; justify-content: center; }
        .sc-confirm-t { flex: 1; min-width: 0; font-family: var(--font-display); font-size: 11.5px; font-weight: 600; color: #0f172a; display: grid; line-height: 1.35; }
        .sc-confirm-s { font-family: var(--font-body); font-size: 9.5px; font-weight: 400; color: #64748b; }
        .sc-confirm-check {
          width: 18px; height: 18px; border-radius: 50%; flex: 0 0 auto;
          background: var(--brand-gradient); color: white;
          display: inline-flex; align-items: center; justify-content: center;
          opacity: 0; animation: sc-pop 320ms cubic-bezier(0.2, 1.4, 0.4, 1) both;
        }
        @keyframes sc-pop { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }

        .sc-foot { display: flex; gap: 6px; flex-wrap: wrap; padding: 11px 14px; border-top: 1px solid rgba(15,23,42,0.06); background: rgba(255,255,255,0.6); min-height: 44px; box-sizing: border-box; }
        .sc-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.05em;
          border: 1px solid; border-radius: 999px; padding: 3.5px 9px; white-space: nowrap;
          opacity: 0; animation: sc-chip-in 460ms cubic-bezier(0.2, 1.2, 0.4, 1) both;
        }
        .sc-chip-dot { width: 5px; height: 5px; border-radius: 50%; flex: 0 0 auto; }
        @keyframes sc-chip-in { from { opacity: 0; transform: translateY(6px) scale(0.92); } to { opacity: 1; transform: none; } }

        @media (prefers-reduced-motion: reduce) {
          .sc-panel * { animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}
