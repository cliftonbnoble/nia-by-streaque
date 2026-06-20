# Contact form wiring — setup

The contact form posts to a Cloudflare Pages Function (`functions/api/lead.js`),
which verifies Turnstile + a honeypot, then forwards to a Google Apps Script that
**appends a row to a Sheet** and **emails `info@streaque.com`**.

```
form → POST /api/lead → Pages Function (Turnstile + honeypot + validate)
                          → Apps Script → Sheet row + email to info@streaque.com
```

Until `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set at build time, the form falls back
to its old `mailto:` behavior — so nothing breaks before the steps below are done.

## 1. Cloudflare Turnstile
1. Cloudflare dashboard → **Turnstile** → **Add widget**.
2. Name it (e.g. "Streaque contact"), add the hostname(s) (`streaque.com`,
   plus the `*.pages.dev` preview host for testing).
3. Copy the **Site key** (public) and **Secret key** (private).

## 2. Google Apps Script + Sheet
1. Open (or create) the leads Google Sheet in your Workspace.
2. Make **row 1** these headers, left to right:
   `Timestamp · Name · Email · Institution · Role · Students · Interest · Message · Source · Landing URL · utm_source · utm_medium · utm_campaign`
3. **Extensions → Apps Script**, paste in [`docs/lead-apps-script.gs`](./lead-apps-script.gs).
4. Set `SHARED_SECRET` to a random string (save it).
5. **Deploy → New deployment → Web app** → *Execute as: Me* · *Who has access: Anyone* → **Deploy**.
   Authorize when prompted. Copy the **Web app URL**.

## 3. Cloudflare Pages environment variables
Pages project → **Settings → Environment variables** (set for Production *and*
Preview):

| Variable | Value | Type |
|---|---|---|
| `TURNSTILE_SECRET` | Turnstile secret key | Secret |
| `LEAD_WEBHOOK_URL` | Apps Script web-app URL | Plain |
| `LEAD_WEBHOOK_SECRET` | same string as `SHARED_SECRET` | Secret |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile **site** key | Plain (build-time) |

> `NEXT_PUBLIC_*` is inlined at build, so a **redeploy** is required after setting it.

## 4. Verify (on a Pages preview deploy)
The Function only runs on Cloudflare Pages — not `next dev`. After deploying:
1. Submit the form on the preview URL.
2. Confirm a row lands in the Sheet **and** an email arrives at `info@streaque.com`.
3. Test spam handling: a submission with the honeypot filled (or a bad Turnstile
   token) should be rejected.

## Notes
- The notification email is sent **from the Apps Script owner's account** via
  `MailApp` (Workspace quota: ~1,500/day — far beyond inquiry volume).
- To add a CRM later, extend the Apps Script `doPost` (it's the single fan-out point).
