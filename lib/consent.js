/* Cookie-consent contract.

   The CookieBanner stores the visitor's choice ("accepted" | "rejected") under
   CONSENT_KEY. Anything that would load analytics or set a non-essential cookie
   MUST call analyticsAllowed() first, so the stored choice is never ignored.

   No analytics ships today — this is the gate a future integration reads, which
   is the whole point: the consent value now controls something real instead of
   sitting unused. */
export const CONSENT_KEY = "mf-cookie-consent";

export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function analyticsAllowed() {
  return getConsent() === "accepted";
}
