import Link from "next/link";
import { ShieldCheck, Lock } from "./icons";

const Phone = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>
  </svg>
);

export default function TrustBar() {
  return (
    <div className="mf-trustbar">
      <div className="mf-trustbar-inner">
        <span className="lbl">BUILT FOR HIGHER-ED</span>
        <div className="items">
          <span><ShieldCheck/> Official Canvas Partner</span>
          <span><ShieldCheck/> FERPA &amp; GDPR Aligned</span>
          <span><ShieldCheck/> SSO Ready</span>
          <span><Phone/> Mobile-First</span>
          <Link href="/security" className="trust-sec">
            <Lock s={12}/> Bank-Grade Security
            <span className="trust-sec-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
