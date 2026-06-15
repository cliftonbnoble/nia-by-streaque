/* Shared base styles for the Nia page — the phone frame, chat thread, bubbles,
   chips, and entrance animation that several sections reuse. Rendered once on
   the page so the section components only carry their own specific styles. */
export default function NpStyles() {
  return (
    <style>{`
      .np-niamark{ flex: 0 0 auto; border-radius: 50%; background: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(15,23,42,0.18); }

      /* phone frame */
      .np-phone{ position: relative; background: linear-gradient(160deg,#1b2030,#0c0f1a); border-radius: 44px; padding: 10px; box-shadow: 0 44px 84px -30px rgba(11,16,32,0.55), inset 0 0 0 1px rgba(255,255,255,0.06); }
      .np-phone-notch{ position: absolute; top: 19px; left: 50%; transform: translateX(-50%); width: 82px; height: 24px; background: #0c0f1a; border-radius: 13px; z-index: 4; }
      .np-screen{ position: relative; background: #fff; border-radius: 32px; overflow: hidden; display: flex; flex-direction: column; }
      .np-appbar{ display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 32px 18px 12px; border-bottom: 1px solid var(--line); flex-shrink: 0; }
      .np-appbar-id{ display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 16px; color: var(--ink); }
      .np-appbar-tag{ font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-4); white-space: nowrap; }
      .np-screen-body{ flex: 1; min-height: 0; overflow: hidden; }

      /* chat thread */
      .np-thread{ display: flex; flex-direction: column; gap: 11px; padding: 16px 15px; }
      .np-divider{ align-self: center; }
      .np-divider span{ font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-4); background: var(--bg-alt); border-radius: 999px; padding: 4px 12px; }
      .np-row{ display: flex; align-items: flex-end; gap: 8px; }
      .np-row.np-bot{ justify-content: flex-start; }
      .np-row.np-user{ justify-content: flex-end; }
      .np-bub{ font-size: 12.5px; line-height: 1.5; padding: 9px 12px; max-width: 84%; }
      .np-bub b{ font-weight: 700; }
      .np-bub-nia{ background: #F1F3F9; color: var(--ink-2); border-radius: 4px 14px 14px 14px; }
      .np-bub-user{ background: linear-gradient(135deg,#2BB3DF,#3841B1); color: #fff; border-radius: 14px 14px 4px 14px; box-shadow: 0 6px 14px -6px rgba(56,65,177,0.5); }

      /* chips */
      .np-chip{ display: inline-flex; align-items: center; gap: 5px; margin-top: 8px; font-family: var(--font-mono); font-size: 8.5px; font-weight: 600; letter-spacing: 0.03em; padding: 4px 8px; border-radius: 999px; }
      .np-chip svg{ flex-shrink: 0; }
      .np-chip-ok{ color: var(--success); background: rgba(13,138,90,0.09); }

      /* input bar */
      .np-inputbar{ margin: 0 14px 14px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; background: var(--bg-alt); border: 1px solid var(--line); border-radius: 12px; font-size: 11px; color: var(--ink-4); flex-shrink: 0; }
      .np-send{ width: 19px; height: 19px; border-radius: 6px; background: linear-gradient(135deg,#695bd7,#424dd3); color: #fff; font-size: 11px; display: inline-flex; align-items: center; justify-content: center; }

      /* entrance */
      .np-rise{ opacity: 0; animation: np-rise 460ms cubic-bezier(0.16,1,0.3,1) both; }
      @keyframes np-rise{ from{ opacity: 0; transform: translateY(10px); } to{ opacity: 1; transform: none; } }
      .np-pop{ opacity: 0; animation: np-pop 380ms cubic-bezier(0.2,1.4,0.4,1) both; }
      @keyframes np-pop{ from{ opacity: 0; transform: scale(0.5); } to{ opacity: 1; transform: scale(1); } }

      @media (prefers-reduced-motion: reduce){
        .np-rise, .np-pop{ animation-duration: 0.001ms !important; animation-delay: 0ms !important; }
      }
    `}</style>
  );
}
