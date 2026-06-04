import { ShieldCheck } from "./icons";

export default function TrustBar() {
  return (
    <div className="mf-trustbar">
      <div className="mf-trustbar-inner">
        <span className="lbl">BUILT FOR HIGHER-ED</span>
        <div className="items">
          <span><ShieldCheck/> Official Canvas Partner</span>
          <span><ShieldCheck/> FERPA Aligned</span>
          <span><ShieldCheck/> GDPR Aligned</span>
          <span><ShieldCheck/> SSO Ready</span>
          <span><ShieldCheck/> Mobile-First Security</span>
        </div>
      </div>
    </div>
  );
}
