import { SITE_URL } from "@/lib/site";

// Required for `output: export` — emit a static robots.txt at build time.
export const dynamic = "force-static";

/* Allow everything (the placeholder /resources stays out of search via its
   own noindex meta — we deliberately don't Disallow it here, so crawlers can
   reach the page and honor that noindex). */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
