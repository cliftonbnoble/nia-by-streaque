"use client";

/* ── The Whole Student ─────────────────────────────────────────────
   Big centered headline over a horizontal row of real app screens.
   Row scrolls with faint glass arrows; outer tiles fade at the
   section edges (reference: "Join over 1 million members" layout). */

import { useEffect, useRef, useState } from "react";

const SHOTS = [
  { src: "/app-shots/onboard-a.webp", alt: "Help and feedback screen in the Nia app" },
  { src: "/app-shots/checkin.webp",   alt: "Quick check-in asking when a student is most active" },
  { src: "/app-shots/reminders.webp", alt: "Exam registration reminder with Check with Nia actions" },
  { src: "/app-shots/onboard-b.webp", alt: "Student profile spanning academics, career, wellness, and finances" },
  { src: "/app-shots/resume.webp",    alt: "Résumé PDF with education, experience, and skills extracted into the profile" },
  { src: "/app-shots/chat-a.webp",    alt: "Student overview with a live Canvas LMS integration" },
  { src: "/app-shots/chat-b.webp",    alt: "Progress overview with purpose statement and productivity trend" },
  { src: "/app-shots/prompt.webp",    alt: "Check-in asking whether the student plans to apply for financial aid" },
];

const Chevron = ({ flip }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M9 5l7 7-7 7"/>
  </svg>
);

export default function WholeStudent() {
  const rowRef = useRef(null);
  const [can, setCan] = useState({ left: false, right: false });

  const update = () => {
    const el = rowRef.current; if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCan({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
  };

  useEffect(() => {
    const el = rowRef.current; if (!el) return;
    // open centered on the profile pair; mobile carousel starts at its first tile
    if (window.matchMedia("(min-width: 761px)").matches) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }
    update();
    // second pass after layout settles, in case hydration raced the first measure
    const raf = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const nudge = (dir) => rowRef.current?.scrollBy({ left: dir * 508, behavior: "smooth" });

  return (
    <section className="ws-section" aria-label="Nia knows the whole student">
      <div className="mf-container">
        <div className="mf-section-head" style={{ marginBottom: 0 }}>
          <span className="mf-eyebrow">Proprietary student signal</span>
          <h2 style={{ marginTop: 16 }}>Nia knows the <span className="mf-grad-text">whole student.</span></h2>
          <p>
            Goals, check-ins, reminders, courses, career plans, wellness, and finances
            come together in one living profile. Depth that a general model can't see and
            a point solution can't build.
          </p>
        </div>
      </div>

      <div className="ws-rowwrap">
        <div className="ws-row" ref={rowRef} role="list">
          {SHOTS.map((s) => (
            <div className="ws-tile" role="listitem" key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async"/>
            </div>
          ))}
        </div>
      </div>
      <div className="ws-nav" aria-hidden={!can.left && !can.right}>
        <button type="button" className="ws-arr" aria-label="Scroll screenshots left" disabled={!can.left} onClick={() => nudge(-1)}><Chevron flip/></button>
        <button type="button" className="ws-arr" aria-label="Scroll screenshots right" disabled={!can.right} onClick={() => nudge(1)}><Chevron/></button>
      </div>

      <style>{`
        .ws-section{
          padding: 96px 0 88px;
          background: linear-gradient(180deg, #ffffff 0%, #F5F8FE 100%);
          overflow: hidden;
        }
        .ws-rowwrap{
          position: relative;
          /* cap the visible window so the row ALWAYS overflows — even on wide
             screens the outer tiles get cut off at the edge, then fade. */
          max-width: 1180px;
          margin: 56px auto 0;
        }
        .ws-row{
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 8px 64px 32px;
          overflow-x: auto;
          scrollbar-width: none;
          /* a short, defined fade right at the cut edge — not an endless dissolve */
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%);
        }
        .ws-row::-webkit-scrollbar{ display: none; }
        /* centers the row when it fits the viewport, scrolls when it doesn't */
        .ws-tile:first-child{ margin-left: auto; }
        .ws-tile:last-child{ margin-right: auto; }
        .ws-tile{
          flex: 0 0 236px;
          width: 236px;
          height: 420px;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(11,16,32,0.08);
          box-shadow: 0 18px 40px -22px rgba(11,16,32,0.22);
        }
        .ws-tile img{
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .ws-nav{
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }
        .ws-arr{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(11,16,32,0.12);
          background: white;
          box-shadow: 0 6px 16px -8px rgba(11,16,32,0.25);
          color: var(--ink-2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: opacity .2s ease, color .15s ease, border-color .15s ease;
        }
        .ws-arr:hover:not(:disabled){ color: var(--ink); border-color: rgba(11,16,32,0.22); }
        .ws-arr:disabled{ opacity: 0.3; cursor: default; }
        @media (max-width: 760px){
          .ws-section{ padding: 72px 0 64px; }
          .ws-rowwrap{ margin-top: 40px; }
          .ws-row{
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 4px 24px 24px;
            -webkit-mask-image: none;
            mask-image: none;
          }
          /* Help & Feedback opens the row on desktop's faded edge; on mobile
             scroll it reads first, so send it to the back of the line */
          .ws-tile:first-child{ order: 2; margin-left: 0; }
          .ws-tile:last-child{ margin-right: 0; }
          .ws-tile{
            flex: 0 0 198px;
            width: 198px;
            height: 352px;
            border-radius: 20px;
            scroll-snap-align: center;
          }
          .ws-arr{ width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}
