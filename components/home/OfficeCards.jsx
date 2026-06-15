/* ── Office cards ──────────────────────────────────────────────────
   Three tall "playing cards" (reference: Whoop "Start the day with
   confidence"): big title, short body, then a static drawn phone UI
   cropped at the card bottom with elements popping off the screen.
   Phone chrome mimics a real device: titanium rail, dark bezel ring,
   side buttons. In-phone UI follows the app's own design language
   (purple check-in modals, chat, profile cards) set in our fonts.
   Server component, no animation. */

const APP = "#5E56E0";          // the app's primary purple
const APP_SOFT = "#F1F0FD";

const NiaGlyph = ({ s = 22, gid = "oc" }) => (
  <svg width={s} height={s} viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M15.4952 17.7824C15.3857 16.4685 15.883 16.0711 16.1111 16.0711C15.3583 15.3868 14.3318 14.9088 13.4421 14.9772C12.5525 15.0457 11.8682 15.7987 11.8682 17.7145C11.8682 18.4685 12.5525 19.6985 13.8528 21.7515C14.8929 23.394 15.3811 22.5727 15.4952 21.9568C15.5408 21.1128 15.6047 19.0963 15.4952 17.7824Z" fill={`url(#${gid}0)`}/>
    <path d="M11.8687 11.2129C10.8285 13.3481 11.5038 16.7332 11.9372 18.1932C11.9372 17.1666 12.0604 15.3189 13.1006 15.0452C14.4008 14.703 15.9063 15.8664 16.2485 16.2085C16.5222 16.4823 17.8225 18.1247 18.6437 19.4933L23.0234 26.9526C24.2552 29.1425 27.061 32.0852 29.5246 31.4008C32.1826 30.6624 32.0567 27.6432 32.0567 26.1314C32.0567 24.5575 31.0302 19.6986 29.8668 18.9459C28.9361 18.3437 28.6578 19.3793 28.635 19.9724V22.7097C28.3613 26.4052 26.1714 24.01 25.8976 23.7362C25.6813 23.5198 24.2552 21.5464 21.4495 16.4823C18.6437 11.4182 17.6856 11.2129 17.1381 10.7339C16.6951 10.3463 13.169 8.54402 11.8687 11.2129Z" fill={`url(#${gid}1)`}/>
    <circle cx="13.3058" cy="30.4435" r="2.80578" fill="#905CF4"/>
    <circle cx="29.5924" cy="11.5558" r="2.80578" fill="#32C6F0"/>
    <defs>
      <linearGradient id={`${gid}0`} x1="12.6894" y1="15.3877" x2="14.8792" y2="22.7101" gradientUnits="userSpaceOnUse"><stop stopColor="#4167C0"/><stop offset="0.447" stopColor="#5680D7"/></linearGradient>
      <linearGradient id={`${gid}1`} x1="21.6878" y1="9.7793" x2="21.6878" y2="31.5017" gradientUnits="userSpaceOnUse"><stop stopColor="#35B2E7"/><stop offset="1" stopColor="#4296EE"/></linearGradient>
    </defs>
  </svg>
);

const StatusBar = ({ dark }) => {
  const c = dark ? "rgba(255,255,255,0.92)" : "#16192A";
  return (
    <>
      <span className="oc-island"><span className="oc-cam"/></span>
      <div className="oc-status" style={{ color: c }}>
        <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "-0.01em" }}>9:41</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4.5 }}>
          <svg width="13" height="9" viewBox="0 0 13 9" fill={c}><rect x="0" y="5" width="2" height="4" rx="0.6"/><rect x="3.4" y="3.4" width="2" height="5.6" rx="0.6"/><rect x="6.8" y="1.8" width="2" height="7.2" rx="0.6"/><rect x="10.2" y="0" width="2" height="9" rx="0.6"/></svg>
          <svg width="12" height="9" viewBox="0 0 24 17" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round"><path d="M2 6.5C7.5 1 16.5 1 22 6.5"/><path d="M5.5 10.2c3.8-3.6 9.2-3.6 13 0"/><circle cx="12" cy="14.5" r="1.6" fill={c} stroke="none"/></svg>
          <svg width="17" height="9" viewBox="0 0 17 9" fill="none"><rect x="0.5" y="0.5" width="13" height="8" rx="2.2" stroke={c} opacity="0.45"/><rect x="2" y="2" width="9" height="5" rx="1" fill={c}/><path d="M15.2 3v3" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/></svg>
        </span>
      </div>
    </>
  );
};

const Phone = ({ dark, screen, children }) => (
  <div className="oc-phone">
    <span className="oc-sbtn" style={{ left: -2.5, top: 100, height: 20 }}/>
    <span className="oc-sbtn" style={{ left: -2.5, top: 136, height: 34 }}/>
    <span className="oc-sbtn" style={{ left: -2.5, top: 178, height: 34 }}/>
    <span className="oc-sbtn" style={{ right: -2.5, top: 150, height: 52 }}/>
    <div className="oc-bezel">
      <div className="oc-screen" style={{ background: screen }}>
        <StatusBar dark={dark}/>
        {children}
      </div>
    </div>
  </div>
);

/* ── 1 · Academic Advising — chat that knows the transcript ───── */
const AcademicPhone = () => (
  <Phone screen="#F7F8FC">
    <div style={{ padding: "46px 13px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, paddingBottom: 9, borderBottom: "1px solid #E9EAF2" }}>
        <span style={{ width: 27, height: 27, borderRadius: "50%", background: "white", border: "1px solid #E6E8F0", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px -2px rgba(11,16,32,0.12)" }}><NiaGlyph s={21} gid="oca"/></span>
        <span>
          <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#16192A", lineHeight: 1.1 }}>Nia</span>
          <span style={{ display: "block", fontSize: 8, color: "#6B7187", marginTop: 1.5 }}>Academic advising</span>
        </span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 7.5, fontWeight: 600, color: "#15803D", background: "#EAF7EF", padding: "3px 8px", borderRadius: 999 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "#16A34A" }}/>On track</span>
      </div>

      <div style={{ textAlign: "center", marginTop: 11 }}>
        <span style={{ fontSize: 8, color: "#8A90A5" }}>Today · 2:14 PM</span>
      </div>

      <div style={{ marginTop: 9, marginLeft: "auto", width: "fit-content", maxWidth: 178, background: APP, color: "white", fontSize: 10.5, lineHeight: 1.45, padding: "8px 11px", borderRadius: "15px 15px 4px 15px", boxShadow: "0 4px 10px -4px rgba(94,86,224,0.45)" }}>
        Can I drop Stats 201 and still graduate in spring?
      </div>

      <div style={{ display: "flex", gap: 6, alignItems: "flex-end", marginTop: 9 }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: "white", border: "1px solid #E6E8F0", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><NiaGlyph s={14} gid="ocb"/></span>
        <div style={{ maxWidth: 188, background: "white", border: "1px solid #E9EAF2", color: "#404659", fontSize: 10.5, lineHeight: 1.5, padding: "9px 11px", borderRadius: "15px 15px 15px 4px", boxShadow: "0 6px 14px -8px rgba(11,16,32,0.16)" }}>
          Yes. I checked your degree audit: take STAT 210 in Summer A and you still graduate in May. Want me to draft the plan?
        </div>
      </div>
    </div>
  </Phone>
);

const MomentumPop = () => (
  <div className="oc-pop" style={{ left: "50%", transform: "translateX(-180px)", bottom: 26, width: 206, padding: "13px 15px 14px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 17, height: 17, borderRadius: "50%", background: "#E7F6EC", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
      </span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "#6B7187" }}>Weekly momentum</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA1B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "auto" }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 7 }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 700, color: "#0B1020", letterSpacing: "-0.04em", lineHeight: 1 }}>+12%</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 8.5, fontWeight: 600, color: "#15803D", background: "#E7F6EC", padding: "3px 8px", borderRadius: 999 }}>
        <svg width="7" height="7" viewBox="0 0 9 8"><path d="M4.5 0L9 8H0z" fill="#16A34A"/></svg>
        Ahead of plan
      </span>
    </div>
    <svg width="176" height="41" viewBox="0 0 196 46" style={{ display: "block", marginTop: 8 }}>
      <defs>
        <linearGradient id="ocmom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(22,163,74,0.28)"/>
          <stop offset="1" stopColor="rgba(22,163,74,0)"/>
        </linearGradient>
      </defs>
      <line x1="0" y1="36" x2="196" y2="36" stroke="#E9EBF1" strokeWidth="1" strokeDasharray="3 4"/>
      <path d="M2 38 C 22 35, 34 28, 52 29 S 86 34, 104 26 S 138 12, 156 14 S 182 8, 190 6 L190 46 L2 46 Z" fill="url(#ocmom)"/>
      <path d="M2 38 C 22 35, 34 28, 52 29 S 86 34, 104 26 S 138 12, 156 14 S 182 8, 190 6" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="190" cy="6" r="4" fill="#16A34A" stroke="white" strokeWidth="1.8"/>
    </svg>
    <div style={{ fontSize: 9, color: "#8A90A5", marginTop: 6 }}>4 of 5 actions done · updated today</div>
  </div>
);

/* ── 2 · Financial Aid — the app's quick check-in prompt ──────── */
const Radio = ({ on }) => (
  <span style={{ width: 13, height: 13, borderRadius: "50%", border: on ? "none" : "1.5px solid #C9CDF2", background: on ? APP : "white", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    {on && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "white" }}/>}
  </span>
);

const AidPhone = () => (
  <Phone screen="linear-gradient(180deg, #EDEDF6 0%, #E4E4F0 100%)">
    {/* dimmed app content behind the modal */}
    <div style={{ padding: "46px 14px 0", opacity: 0.45, filter: "blur(0.5px)" }}>
      <div style={{ background: "white", borderRadius: 12, padding: 10 }}>
        <div style={{ width: 92, height: 7, borderRadius: 4, background: "#DDE0EA" }}/>
        <div style={{ width: 150, height: 6, borderRadius: 3, background: "#EAECF2", marginTop: 6 }}/>
      </div>
    </div>

    <div style={{ margin: "14px 11px 0", background: APP, borderRadius: 20, padding: 12, boxShadow: "0 18px 36px -16px rgba(94,86,224,0.55)" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: "white" }}>Quick Check In!</span>
        <span style={{ marginLeft: "auto", fontSize: 8, color: "rgba(255,255,255,0.75)" }}>8:40 pm</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" style={{ marginLeft: 8 }}><path d="M18 6L6 18M6 6l12 12"/></svg>
      </div>

      <div style={{ background: "white", borderRadius: 13, padding: 12, marginTop: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#16192A", lineHeight: 1.45 }}>
          Do you receive or plan to apply for financial aid?
        </div>
        {[["Yes", true], ["No", false], ["Not sure", false], ["Ask Nia", false]].map(([label, on]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, padding: "7px 10px", borderRadius: 10, border: on ? `1.5px solid ${APP}` : "1px solid #E9EAF2", background: on ? APP_SOFT : "white" }}>
            <Radio on={on}/>
            <span style={{ fontSize: 10.5, fontWeight: on ? 700 : 500, color: on ? APP : "#404659" }}>{label}</span>
          </div>
        ))}
        <div style={{ marginTop: 10, background: APP, borderRadius: 10, padding: "9px 0", textAlign: "center", fontSize: 11, fontWeight: 600, color: "white" }}>Submit Now</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 22, padding: "10px 0 2px" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z"/></svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scale(-1)" }}><path d="M7 10v12M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z"/></svg>
      </div>
    </div>
  </Phone>
);

const FafsaPop = () => (
  <div className="oc-pop" style={{ left: "50%", transform: "translateX(-174px)", top: 52, width: 156, padding: "10px 13px", display: "flex", alignItems: "center", gap: 8 }}>
    <span style={{ width: 26, height: 26, borderRadius: 9, background: "#FFF4DE", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    </span>
    <span>
      <span style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#16192A" }}>FAFSA renews Mar 1</span>
      <span style={{ display: "block", fontSize: 8.5, color: "#8A90A5", marginTop: 1.5 }}>Reminder set · 2 weeks out</span>
    </span>
  </div>
);

const ScholarshipPop = () => (
  <div className="oc-pop" style={{ left: "50%", transform: "translateX(-8px)", top: 238, width: 164, padding: "12px 14px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 17, height: 17, borderRadius: "50%", background: APP_SOFT, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={APP} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13l1.5 9-5-3-5 3 1.5-9"/></svg>
      </span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "#6B7187" }}>Scholarships matched</span>
    </div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#0B1020", letterSpacing: "-0.04em", lineHeight: 1, marginTop: 7 }}>$5,400</div>
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
      <svg width="15" height="15" viewBox="0 0 15 15"><circle cx="7.5" cy="7.5" r="6" fill="none" stroke="#E9EAF2" strokeWidth="2.6"/><circle cx="7.5" cy="7.5" r="6" fill="none" stroke={APP} strokeWidth="2.6" strokeDasharray="37.7" strokeDashoffset="13" strokeLinecap="round" transform="rotate(-90 7.5 7.5)"/></svg>
      <span style={{ fontSize: 9, fontWeight: 600, color: APP }}>3 of 4 ready to apply</span>
    </div>
  </div>
);

/* ── 3 · Career Services — readiness ring + résumé / Handshake ── */
const CareerPhone = () => (
  <Phone screen="linear-gradient(180deg, #D9EBFF 0%, #EAF4F0 36%, #FFFFFF 64%)">
    <div style={{ padding: "46px 14px 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 6px -2px rgba(11,16,32,0.2)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16192A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span>
        <span style={{ textAlign: "center" }}>
          <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#16192A" }}>Career</span>
          <span style={{ display: "block", fontSize: 8, color: "#6B7187", marginTop: 1 }}>September 12</span>
        </span>
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 6px -2px rgba(11,16,32,0.2)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#16192A" }}>?</span>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
        <div style={{ position: "relative", width: 126, height: 126 }}>
          <svg width="126" height="126" viewBox="0 0 126 126">
            <defs>
              <linearGradient id="ocring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2BB3DF"/><stop offset="1" stopColor="#3841B1"/></linearGradient>
            </defs>
            <circle cx="63" cy="63" r="53" fill="rgba(255,255,255,0.9)"/>
            <circle cx="63" cy="63" r="53" fill="none" stroke="#E9EAF2" strokeWidth="9"/>
            <circle cx="63" cy="63" r="53" fill="none" stroke="url(#ocring)" strokeWidth="9" strokeDasharray="333" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 63 63)"/>
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#0B1020", letterSpacing: "-0.04em" }}>82%</span>
            <span style={{ fontSize: 8.5, color: "#6B7187", marginTop: 1 }}>career ready</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 144, background: "white", border: "1px solid #E9EAF2", borderRadius: 14, padding: "11px 12px", boxShadow: "0 6px 16px -10px rgba(11,16,32,0.18)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <svg width="10" height="10" viewBox="0 0 20 20"><path d="M10 1l2 5.4L17.4 8 12 10l-2 5.4L8 10 2.6 8 8 6.4z" fill="#16A34A"/></svg>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#16192A" }}>You're interview-ready</span>
        </div>
        <p style={{ margin: "5px 0 0", fontSize: 9, lineHeight: 1.5, color: "#6B7187" }}>
          Your résumé now leads with the UX research internship. Three new roles fit your portfolio and two close Friday, so apply early this week. Want a mock interview before then?
        </p>
      </div>
    </div>
  </Phone>
);

const ResumePop = () => (
  <div className="oc-pop" style={{ left: "50%", transform: "translateX(-162px)", top: 232, width: 158, padding: "11px 13px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 6.5, fontWeight: 800, color: "white", background: "#E2362F", borderRadius: 4, padding: "2px 4px", letterSpacing: "0.04em" }}>PDF</span>
      <span style={{ fontSize: 10, fontWeight: 600, color: "#6B7187" }}>Résumé</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
      <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="7" fill="#16A34A"/><path d="M4.2 7l2 2.1 3.6-4.2" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#15803D" }}>Synced</span>
    </div>
    <div style={{ fontSize: 7.5, color: "#8A90A5", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Maya_Reyes_Resume.pdf</div>
  </div>
);

/* the PDF page from the whole-student résumé card, floating off the phone */
const PdfPop = () => (
  <div style={{ position: "absolute", zIndex: 3, left: "50%", transform: "translateX(52px)", top: 238, filter: "drop-shadow(0 18px 26px rgba(11,16,32,0.3))" }}>
    <svg width="96" height="118" viewBox="0 0 96 118" fill="none">
      <path d="M8 14 a8 8 0 0 1 8 -8 H66 L88 28 V104 a8 8 0 0 1 -8 8 H16 a8 8 0 0 1 -8 -8 Z" fill="white" stroke="#E6E8F0"/>
      <path d="M66 6 L88 28 H74 a8 8 0 0 1 -8 -8 Z" fill="#EEF0F6" stroke="#E6E8F0" strokeLinejoin="round"/>
      <text x="17" y="29" fontSize="7.5" fontWeight="700" fill="#1A1D2B" fontFamily="var(--font-display)">Maya Reyes</text>
      <rect x="17" y="34" width="42" height="2.5" rx="1.25" fill="#D8DBE4"/>
      <rect x="17" y="45" width="62" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="17" y="51" width="55" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="17" y="57" width="59" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="17" y="68" width="26" height="3" rx="1.5" fill="#C9CDF2"/>
      <rect x="17" y="75" width="62" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="17" y="81" width="50" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="17" y="92" width="26" height="3" rx="1.5" fill="#C9CDF2"/>
      <rect x="17" y="99" width="57" height="2.5" rx="1.25" fill="#E9EBF1"/>
      <rect x="0" y="86" width="38" height="21" rx="6.5" fill="#E2362F"/>
      <text x="19" y="100.5" fontSize="9.5" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="0.5" fontFamily="var(--font-display)">PDF</text>
    </svg>
  </div>
);

/* ── cards ────────────────────────────────────────────────────── */
const CARDS = [
  {
    title: "Academic Advising",
    body: "Course planning, degree audits, and weekly momentum live in one conversation that already knows the transcript.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #F3E4DC 52%, #F4CDBE 100%)",
    phone: <AcademicPhone/>,
    pops: <MomentumPop/>,
  },
  {
    title: "Financial Aid",
    body: "Deadlines, loans, and scholarship matches surface in plain language, before they turn into emergencies.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #E4E0F6 52%, #CCC4EF 100%)",
    phone: <AidPhone/>,
    pops: <><FafsaPop/><ScholarshipPop/></>,
  },
  {
    title: "Career Services",
    body: "The résumé, the profile, and live job matches stay connected, so the next step is always one tap away.",
    bg: "linear-gradient(180deg, #EAF0F8 0%, #E0EFE2 52%, #C2E2CB 100%)",
    phone: <CareerPhone/>,
    pops: <><ResumePop/><PdfPop/></>,
  },
];

export default function OfficeCards() {
  return (
    <div className="oc-grid">
      {CARDS.map((c) => (
        <div className="oc-card" key={c.title} style={{ background: c.bg }}>
          <h3 className="oc-title">{c.title}</h3>
          <p className="oc-body">{c.body}</p>
          <div className="oc-stage">
            {c.phone}
            {c.pops}
          </div>
        </div>
      ))}

      <style>{`
        .oc-grid{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .oc-card{
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(11,16,32,0.06);
          box-shadow: 0 24px 56px -36px rgba(11,16,32,0.25);
          padding: 34px 34px 0;
        }
        .oc-title{
          margin: 0;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: var(--ink);
        }
        .oc-body{
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-2);
          min-height: 72px;
        }
        .oc-stage{
          position: relative;
          height: 460px;
          margin-top: 28px;
        }
        /* device: titanium rail → dark bezel ring → screen */
        .oc-phone{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          width: 276px;
          height: 568px;
          border-radius: 47px;
          background: linear-gradient(90deg, #9AA3B2 0%, #E6EAF0 4%, #C5CBD6 10%, #D8DCE4 50%, #C5CBD6 90%, #E6EAF0 96%, #9AA3B2 100%);
          padding: 3px;
          box-shadow: 0 36px 68px -34px rgba(11,16,32,0.55), 0 2px 5px rgba(11,16,32,0.16);
        }
        .oc-bezel{
          width: 100%;
          height: 100%;
          background: #05070D;
          border-radius: 44px;
          padding: 7px;
        }
        .oc-screen{
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 37px;
          overflow: hidden;
        }
        .oc-sbtn{
          position: absolute;
          width: 3px;
          border-radius: 1.5px;
          background: linear-gradient(180deg, #8E97A6, #B9C0CC 30%, #B9C0CC 70%, #8E97A6);
        }
        .oc-island{
          position: absolute;
          top: 11px;
          left: 50%;
          transform: translateX(-50%);
          width: 78px;
          height: 22px;
          border-radius: 11.5px;
          background: #05070D;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 7px;
        }
        .oc-cam{
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #2A3140 0%, #10141D 55%, #05070D 100%);
        }
        .oc-status{
          position: absolute;
          top: 12px;
          left: 25px;
          right: 21px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 4;
        }
        .oc-pop{
          position: absolute;
          z-index: 3;
          background: white;
          border: 1px solid rgba(11,16,32,0.07);
          border-radius: 18px;
          box-shadow: 0 22px 44px -18px rgba(11,16,32,0.35);
        }
        @media (max-width: 1080px){
          .oc-grid{ grid-template-columns: 1fr; gap: 24px; margin-top: 44px; }
          .oc-card{ max-width: 470px; width: 100%; margin: 0 auto; box-sizing: border-box; }
          .oc-body{ min-height: 0; }
        }
        @media (max-width: 560px){
          .oc-card{ padding: 26px 22px 0; }
          .oc-title{ font-size: 26px; }
          .oc-stage{ height: 430px; }
        }
      `}</style>
    </div>
  );
}
