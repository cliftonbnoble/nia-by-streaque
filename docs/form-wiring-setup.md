# Contact form wiring — setup

The contact form posts to a small Cloudflare **Worker** (`worker/index.js`, wired
in `wrangler.jsonc` as `main`), which verifies Turnstile + a honeypot, then
forwards to a Google Apps Script that **appends a row to a Sheet** and **emails
`info@streaque.com`**. The same Worker serves the static site (`out/`) for every
other route.

```
form → POST /api/lead → Worker (Turnstile + honeypot + validate)
                          → Apps Script → Sheet row + email to info@streaque.com
```

The Turnstile **site** key is baked into the code (it's public), so the form is
already wired to the real `/api/lead` path. The three runtime secrets below still
need to be set for submissions to succeed.

> **Order matters.** An assets-only Worker can't hold variables (that's the
> "Variables cannot be added to a Worker that only has static assets" error).
> Deploy the Worker *with its script first* (step 3a), THEN add the secrets.

## 1. Cloudflare Turnstile
1. Cloudflare dashboard → **Turnstile** → **Add widget**.
2. Name it (e.g. "Streaque contact"), add the hostname(s): your domain plus the
   `*.workers.dev` host (for testing on the deployed Worker).
3. Copy the **Site key** (public) and **Secret key** (private).

## 2. Google Apps Script + Sheet
1. Open (or create) the leads Google Sheet in your Workspace.
2. Make **row 1** these headers, left to right:
   `Timestamp · Name · Email · Institution · Role · Students · Interest · Message · Source · Landing URL · utm_source · utm_medium · utm_campaign`
3. **Extensions → Apps Script**, paste in [`lead-apps-script.gs`](./lead-apps-script.gs).
4. Set `SHARED_SECRET` to a random string — it must match `LEAD_WEBHOOK_SECRET`
   below. Keep this real value OUT of git.
5. **Deploy → New deployment → Web app** → *Execute as: Me* · *Who has access: Anyone* → **Deploy**.
   Authorize when prompted. Copy the **Web app URL**.

## 3. Deploy the Worker, then add its variables

**a. Deploy the Worker (so it has code, not just assets):**
```
npm run build      # emits out/
npx wrangler deploy
```
(or trigger your connected Workers build.)

**b. Runtime secrets** — set these with the **CLI** so they survive deploys:
```
npx wrangler secret put TURNSTILE_SECRET      # Turnstile SECRET key (matches the site key)
npx wrangler secret put LEAD_WEBHOOK_URL       # Apps Script web-app URL
npx wrangler secret put LEAD_WEBHOOK_SECRET    # must equal the Apps Script SHARED_SECRET
```
Each prompts for the value. Verify with `npx wrangler secret list` (should show all 3).

> ⚠️ **Do NOT add these as plain-text variables in the dashboard.** `wrangler deploy`
> replaces the Worker's vars with what's in `wrangler.jsonc` (which has none), so it
> *wipes* dashboard-added variables on the next deploy. `wrangler secret put` stores
> them as encrypted secrets that persist across deploys.

**c. Build-time variable** — none needed. The Turnstile **site** key is already in
the code (`app/contact/ContactForm.jsx`), since it's public. You can override it
with a `NEXT_PUBLIC_TURNSTILE_SITE_KEY` build var later if you ever rotate keys.

## 4. Verify (on the deployed Worker)
The `/api/lead` route only runs on the deployed Worker — not `next dev`. After
deploying with the variables set:
1. Submit the form on the live / `workers.dev` URL.
2. Confirm a row lands in the Sheet **and** an email arrives at `info@streaque.com`.
3. Test spam handling: a submission with the honeypot filled (or a bad Turnstile
   token) should be rejected.

## Notes
- The notification email is sent **from the Apps Script owner's account** via
  `MailApp` (Workspace quota: ~1,500/day — far beyond inquiry volume).
- To add a CRM later, extend the Apps Script `doPost` (the single fan-out point).
- Never commit real secret values. `lead-apps-script.gs` in the repo is a template
  with a placeholder `SHARED_SECRET`; keep your real one only in Apps Script + the
  Worker secret.
