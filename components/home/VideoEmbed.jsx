"use client";
/* "A real week with Nia" — click-to-play YouTube facade.
   Keeps the designed cover (navy, grid, play button) until the user clicks,
   then swaps in the privacy-enhanced YouTube iframe with autoplay. */
import { useState } from "react";

const YT_ID = "ZwRa_kVMAS8";

export default function VideoEmbed() {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--ink)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&rel=0`}
          title="A real week with Nia walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play the walkthrough video"
          className="mf-video-cover"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, padding: 0, background: "transparent", cursor: "pointer", fontFamily: "inherit" }}
        >
          <span style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,11,97,0.5), transparent 60%)" }}/>
          <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }}/>
          <span className="mf-video-play" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 72, height: 72, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--primary)"><path d="M5 3.5v17l15-8.5z"/></svg>
          </span>
          <span style={{ position: "absolute", bottom: 16, left: 16, color: "white", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>▶ watch · from noise to momentum</span>
          <style>{`
            .mf-video-cover .mf-video-play { transition: transform 180ms ease, box-shadow 180ms ease; }
            .mf-video-cover:hover .mf-video-play { transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
          `}</style>
        </button>
      )}
    </div>
  );
}
