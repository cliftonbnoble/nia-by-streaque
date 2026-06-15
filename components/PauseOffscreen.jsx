"use client";
/* Wraps animation-heavy children and pauses their CSS/SVG animations while
   they're scrolled out of view (IntersectionObserver), so the orbital stages
   and hero phones aren't burning frames off-screen. Falls back to "always
   playing" where IntersectionObserver isn't available. The actual pausing is
   the `.pof-paused` rule in globals.css. */
import { useEffect, useRef, useState } from "react";

export default function PauseOffscreen({ children, className, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pof${visible ? "" : " pof-paused"}${className ? " " + className : ""}`} style={style}>
      {children}
    </div>
  );
}
