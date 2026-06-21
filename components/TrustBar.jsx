"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ShieldCheck, Lock } from "./icons";

const Phone = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>
  </svg>
);

export default function TrustBar() {
  const ref = useRef(null);

  // On mobile (where the bar overflows), gently auto-scroll once on load so every
  // badge drifts past, ending with "Security & privacy" parked on the right. The
  // user can still scroll freely; any touch/scroll cancels the animation.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 4) return; // fits the viewport (desktop) — nothing to reveal
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0, start = 0, cancelled = false;
    const DELAY = 850, DUR = 4200;
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const cleanup = () => {
      el.removeEventListener("pointerdown", cancel);
      el.removeEventListener("touchstart", cancel);
      el.removeEventListener("wheel", cancel);
    };
    function cancel() { cancelled = true; cancelAnimationFrame(raf); cleanup(); }
    el.addEventListener("pointerdown", cancel, { passive: true });
    el.addEventListener("touchstart", cancel, { passive: true });
    el.addEventListener("wheel", cancel, { passive: true });

    const step = (ts) => {
      if (cancelled) return;
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / DUR);
      el.scrollLeft = max * ease(t);
      if (t < 1) raf = requestAnimationFrame(step);
      else cleanup();
    };
    const timer = setTimeout(() => { if (!cancelled) raf = requestAnimationFrame(step); }, DELAY);

    return () => { cancelled = true; clearTimeout(timer); cancelAnimationFrame(raf); cleanup(); };
  }, []);

  return (
    <div className="mf-trustbar">
      <div className="mf-trustbar-inner" ref={ref}>
        <span className="lbl">BUILT FOR HIGHER-ED</span>
        <div className="items">
          <span><ShieldCheck/> Official Canvas Partner</span>
          <span><ShieldCheck/> FERPA &amp; GDPR Aligned</span>
          <span><ShieldCheck/> SSO Ready</span>
          <span><Phone/> Mobile-First</span>
          <Link href="/security" className="trust-sec">
            <Lock s={12}/> Security &amp; privacy
            <span className="trust-sec-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
