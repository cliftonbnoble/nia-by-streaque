import Link from "next/link";
import { ArrowRight } from "./icons";

export default function Nav({ active = "home" }) {
  const cls = (k) => (active === k ? "active" : undefined);
  return (
    <div className="mf-nav">
      <div className="mf-nav-inner">
        <Link href="/" className="mf-logo" style={{ textDecoration: "none" }}>
          <img src="/nia-opt-web-logo.png" alt="Nia by Streaque" style={{ height: 30, display: "block" }}/>
        </Link>
        <div className="mf-nav-links">
          <Link className={cls("home")} href="/">Home</Link>
          <Link className={cls("about")} href="/#about">About</Link>
          <Link className={cls("how")} href="/how-nia-works">How Nia Works</Link>
          <Link className={cls("contact")} href="/contact">Contact</Link>
        </div>
        <Link href="/contact#form" className="mf-btn mf-btn-primary mf-btn-sm" style={{ textDecoration: "none" }}>
          Book a demo <ArrowRight s={12}/>
        </Link>
      </div>
    </div>
  );
}
