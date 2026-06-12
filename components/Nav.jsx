"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

const DropItem = ({ href, t, d, active }) => (
  <Link
    href={href}
    style={{ display: "block", padding: "12px 14px", borderRadius: "var(--radius)", textDecoration: "none", background: active ? "var(--bg-alt)" : "transparent", transition: "background 100ms" }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-alt)")}
    onMouseLeave={(e) => (e.currentTarget.style.background = active ? "var(--bg-alt)" : "transparent")}
  >
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{t}</div>
    <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{d}</div>
  </Link>
);

export default function Nav({ active = "home" }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const cls = (k) => (active === k ? "active" : undefined);
  const productActive = active === "how" || active === "security";

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mf-nav${condensed ? " is-condensed" : ""}`}>
      <div className="mf-nav-inner">
        <Link href="/" className="mf-logo" style={{ textDecoration: "none" }}>
          <img src="/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 30, display: "block" }}/>
        </Link>
        <div className="mf-nav-links">
          <Link className={cls("home")} href="/">Home</Link>
          <Link className={cls("about")} href="/#about">About</Link>

          <span
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <Link
              href="/how-nia-works"
              className={productActive ? "active" : undefined}
              style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
            >
              How Nia Works
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            {open && (
              <div style={{ position: "absolute", top: "100%", left: -16, paddingTop: 12, zIndex: 30 }}>
                <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: 8, minWidth: 280 }}>
                  <DropItem href="/how-nia-works" t="Product Overview" d="The two platforms, the connection, the loop" active={active === "how"}/>
                  <DropItem href="/security" t="Security" d="Bank-grade encryption, Zero Trust, FERPA" active={active === "security"}/>
                </div>
              </div>
            )}
          </span>

          <Link className={cls("contact")} href="/contact">Contact</Link>
        </div>
        <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-sm mf-nav-cta mf-cta-fx" style={{ textDecoration: "none" }}>
          Book a demo
          <span className="mf-cta-arr" aria-hidden="true">
            <ArrowRight s={12}/>
            <ArrowRight s={12}/>
          </span>
          <span className="mf-cta-cap" aria-hidden="true">🎓</span>
        </Link>
        <button
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
        <div className="mf-nav-mobile">
          {[
            { href: "/", t: "Home", k: "home" },
            { href: "/#about", t: "About", k: "about" },
            { href: "/how-nia-works", t: "How Nia Works", k: "how" },
            { href: "/security", t: "Security", k: "security" },
            { href: "/contact", t: "Contact", k: "contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className={active === l.k ? "active" : undefined} onClick={() => setMobileOpen(false)}>
              {l.t}
            </Link>
          ))}
          <Link href="/contact#form" className="mf-btn mf-btn-primary" style={{ textDecoration: "none", justifyContent: "center", marginTop: 6 }} onClick={() => setMobileOpen(false)}>
            Book a demo <ArrowRight s={12}/>
          </Link>
        </div>
      )}
    </div>
  );
}
