"use client";
/* Section I — Hero. "An ongoing relationship, not a 1-minute chat."
   The visual is a single chat thread that spans two semesters: a $150 hold
   cleared in the fall is remembered when a spring registration nudge arrives. */
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { NiaGlyph, NiaMark } from "./ui";

const LOOP = 15000;

const Thread = () => (
  <div className="np-thread">
    {/* fall */}
    <div className="np-divider np-rise" style={{ animationDelay: "200ms" }}><span>Fall semester · Oct 14</span></div>
    <div className="np-row np-bot np-rise" style={{ animationDelay: "600ms" }}>
      <NiaMark s={24} gid="hg1"/>
      <div className="np-bub np-bub-nia">
        Good news — your <b>$150 library hold</b>{" "}just cleared. You&apos;re clear to register the moment spring enrollment opens.
        <span className="np-chip np-chip-ok"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Hold cleared</span>
      </div>
    </div>
    <div className="np-row np-user np-rise" style={{ animationDelay: "1500ms" }}>
      <div className="np-bub np-bub-user">oh nice, thank you!!</div>
    </div>

    {/* the thread keeps going — across the break */}
    <div className="np-gap np-rise" style={{ animationDelay: "2300ms" }}>
      <span className="np-gap-line"/>
      <span className="np-gap-tag">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>
        5 months later · same thread
      </span>
      <span className="np-gap-line"/>
    </div>

    {/* spring */}
    <div className="np-divider np-rise" style={{ animationDelay: "3100ms" }}><span>Spring semester · Mar 2</span></div>
    <div className="np-row np-bot np-rise" style={{ animationDelay: "3600ms" }}>
      <NiaMark s={24} gid="hg2"/>
      <div className="np-bub np-bub-nia">
        Spring registration opens tomorrow at 9 AM. Since we cleared that fall hold, nothing&apos;s blocking you — want me to line up your shortlist?
        <span className="np-recall" style={{ animationDelay: "4400ms" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l-7 7 7 7"/></svg>
          Remembered from Fall
        </span>
      </div>
    </div>
    <div className="np-row np-user np-rise" style={{ animationDelay: "5200ms" }}>
      <div className="np-bub np-bub-user">yes please 🙏</div>
    </div>
  </div>
);

export default function NiaHero() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), LOOP);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <section className="mf-hero np-hero">
      <div className="mf-hero-bg"/>
      <div className="mf-container np-hero-grid">
        <div className="np-hero-copy">
          <span className="mf-eyebrow">Student-shaped, not funnel-shaped</span>
          <h1 style={{ marginTop: 16 }}>
            An ongoing relationship,<br/>
            <span className="mf-grad-text">not a 1-minute chat.</span>
          </h1>
          <p className="mf-hero-sub" style={{ marginTop: 22, maxWidth: 540 }}>
            Nia is built outward from the student&apos;s entire journey — every hold cleared, goal set,
            and deadline met — not bolted onto a department&apos;s sales funnel. The thread that started
            in the fall still remembers them in the spring.
          </p>
          <div className="mf-hero-actions" style={{ marginTop: 30 }}>
            <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-lg mf-cta-fx" style={{ textDecoration: "none" }}>
              Book a demo
              <span className="mf-cta-arr" aria-hidden="true"><ArrowRight s={13}/><ArrowRight s={13}/></span>
            </Link>
            <Link href="/how-nia-works" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none" }}>
              How Nia works <ArrowRight s={13}/>
            </Link>
          </div>
        </div>

        <div className="np-hero-stage">
          <div className="np-phone">
            <span className="np-phone-notch"/>
            <div className="np-screen">
              <div className="np-appbar">
                <span className="np-appbar-id"><NiaGlyph s={18} gid="hgb"/> <strong>Nia</strong></span>
                <span className="np-appbar-tag">one continuous thread</span>
              </div>
              <div className="np-screen-body" key={cycle}><Thread/></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .np-hero{ overflow: hidden; }
        .np-hero-grid{ display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; position: relative; }
        .np-hero-copy{ min-width: 0; }
        .np-hero-stage{ display: flex; justify-content: center; min-width: 0; }
        /* hero phone is a touch taller than the moat phones */
        .np-hero-stage .np-phone{ width: 286px; max-width: 100%; }
        .np-hero-stage .np-screen{ height: 580px; }
        .np-bub{ max-width: 80%; }
        /* match the moats: brand cyan→blue gradient, not the homepage hero override */
        .np-hero .mf-grad-text{ background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }

        .np-recall{ display: inline-flex; align-items: center; gap: 5px; margin-top: 8px; font-family: var(--font-mono); font-size: 8.5px; font-weight: 600; letter-spacing: 0.03em; padding: 4px 9px; border-radius: 999px; color: #7c3aed; background: rgba(124,58,237,0.10); border: 1px solid rgba(124,58,237,0.25); opacity: 0; animation: np-recall 600ms ease both, np-recall-pulse 2.4s ease-in-out 1200ms infinite; }
        @keyframes np-recall{ from{ opacity: 0; transform: translateY(4px); } to{ opacity: 1; transform: none; } }
        @keyframes np-recall-pulse{ 0%,100%{ box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50%{ box-shadow: 0 0 0 4px rgba(124,58,237,0.10); } }
        .np-recall svg{ flex-shrink: 0; }
        .np-gap{ display: flex; align-items: center; gap: 8px; margin: 2px 4px; }
        .np-gap-line{ flex: 1; height: 0; border-top: 1px dashed var(--line-2); }
        .np-gap-tag{ display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-3); white-space: nowrap; }

        @media (max-width: 900px){
          .np-hero-grid{ grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .np-hero-copy .mf-hero-sub{ margin-left: auto; margin-right: auto; }
          .np-hero-copy .mf-hero-actions{ justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce){
          .np-recall{ animation-duration: 0.001ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}
