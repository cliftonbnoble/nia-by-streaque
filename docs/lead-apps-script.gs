/* Google Apps Script for the leads Sheet.
 *
 * Setup:
 *   1. Open your Google Sheet → Extensions → Apps Script.
 *   2. Paste this whole file in. Set SHARED_SECRET below to a random string.
 *   3. Make row 1 of the Sheet these headers (left to right):
 *        Timestamp | Name | Email | Institution | Role | Students | Interest |
 *        Message | Source | Landing URL | utm_source | utm_medium | utm_campaign
 *   4. Deploy → New deployment → type "Web app" →
 *        Execute as: Me  ·  Who has access: Anyone  → Deploy → copy the URL.
 *   5. In Cloudflare Pages env vars set:
 *        LEAD_WEBHOOK_URL    = the Web app URL
 *        LEAD_WEBHOOK_SECRET = the same string as SHARED_SECRET below
 *
 * The notification email is sent FROM the account that owns this script,
 * via MailApp — no third-party email service needed.
 */

const SHARED_SECRET = "REPLACE_WITH_A_RANDOM_STRING"; // must equal LEAD_WEBHOOK_SECRET
const NOTIFY_EMAIL = "info@streaque.com";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SHARED_SECRET) return json({ ok: false, error: "unauthorized" });

    const utm = body.utm || {};
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(),               // Timestamp (server-authoritative)
      body.name || "",
      body.email || "",
      body.institution || "",
      body.role || "",
      body.students || "",
      body.interest || "",
      body.message || "",
      body.source || "",        // referrer
      body.url || "",           // landing URL (with #hash)
      utm.source || "",
      utm.medium || "",
      utm.campaign || "",
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: body.email || NOTIFY_EMAIL,
      subject: "New inquiry — " + (body.institution || body.name || "Streaque") +
               (body.interest ? " (" + body.interest + ")" : ""),
      body: [
        "Name: " + (body.name || ""),
        "Email: " + (body.email || ""),
        "Institution: " + (body.institution || ""),
        "Role: " + (body.role || ""),
        "Students served: " + (body.students || "n/a"),
        "Interested in: " + (body.interest || ""),
        "",
        (body.message || "(no message)"),
        "",
        "—",
        "Source: " + (body.source || "direct"),
        "URL: " + (body.url || ""),
      ].join("\n"),
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
