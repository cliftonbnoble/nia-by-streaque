import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav/>
      <main id="main">
      <section className="mf-hero" style={{ paddingBottom: 96 }}>
        <div className="mf-hero-bg"/>
        <div className="mf-container mf-hero-inner" style={{ textAlign: "center", maxWidth: 720 }}>
          <span className="mf-eyebrow">404 · Page not found</span>
          <h1 style={{ marginTop: 18, fontSize: "clamp(44px, 6vw, 72px)" }}>
            This page hasn't <span className="mf-grad-text">enrolled yet.</span>
          </h1>
          <p className="mf-hero-sub" style={{ margin: "22px auto 0", maxWidth: 480 }}>
            We're a small team shipping fast, and this corner of the site is still being built.
            The important stuff is all one click away.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/" className="mf-btn mf-btn-primary mf-btn-lg" style={{ textDecoration: "none" }}>
              Back to home <ArrowRight/>
            </Link>
            <Link href="/contact" className="mf-btn mf-btn-ghost mf-btn-lg" style={{ textDecoration: "none" }}>
              Talk to us
            </Link>
          </div>
          <div style={{ marginTop: 44, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 14 }}>
            {[
              { href: "/how-nia-works", l: "How Nia Works" },
              { href: "/security", l: "Security" },
              { href: "/contact", l: "Contact" },
            ].map((x) => (
              <Link key={x.href} href={x.href} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>
                {x.l} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer/>
    </div>
  );
}
