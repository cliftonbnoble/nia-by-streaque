"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

export default function Nav({ active = "home" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const burgerRef = useRef(null);
  const drawerRef = useRef(null);
  const cls = (k) => (active === k ? "active" : undefined);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer when the viewport grows past the mobile breakpoint —
  // otherwise the burger disappears and the open drawer gets stuck with no way out.
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile drawer a11y: Escape closes it, focus moves into it on open and back to
  // the burger on close, and Tab is trapped between the burger (close) and the links.
  useEffect(() => {
    if (!mobileOpen) return;
    const links = () => (drawerRef.current ? [...drawerRef.current.querySelectorAll("a[href]")] : []);
    links()[0]?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const items = [burgerRef.current, ...links()].filter(Boolean);
        if (items.length < 2) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <div className={`mf-nav${condensed ? " is-condensed" : ""}`}>
      <div className="mf-nav-inner">
        <Link href="/" className="mf-logo" style={{ textDecoration: "none" }}>
          <img src="/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 30, display: "block" }}/>
        </Link>
        <div className="mf-nav-links">
          <Link className={cls("home")} href="/">Home</Link>
          <Link className={cls("how")} href="/how-nia-works">Platform</Link>
          <Link className={cls("nia")} href="/why-nia">Why Nia</Link>
          <Link className={cls("security")} href="/security">Security</Link>
          <Link className={cls("contact")} href="/contact">Contact</Link>
        </div>
        <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-sm mf-nav-cta mf-cta-fx" style={{ textDecoration: "none" }}>
          <span>Book <span className="mf-nav-cta-trim">a pilot </span>demo</span>
          <span className="mf-cta-arr" aria-hidden="true">
            <ArrowRight s={12}/>
            <ArrowRight s={12}/>
          </span>
        </Link>
        <button
          ref={burgerRef}
          className="mf-nav-burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div ref={drawerRef} className="mf-nav-mobile">
          {[
            { href: "/", t: "Home", k: "home" },
            { href: "/how-nia-works", t: "Platform", k: "how" },
            { href: "/why-nia", t: "Why Nia", k: "nia" },
            { href: "/security", t: "Security", k: "security" },
            { href: "/contact", t: "Contact", k: "contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className={active === l.k ? "active" : undefined} onClick={() => setMobileOpen(false)}>
              {l.t}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
