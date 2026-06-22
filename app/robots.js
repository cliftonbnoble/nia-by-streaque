import { SITE_URL } from "@/lib/site";

// Required for `output: export` — emit a static robots.txt at build time.
export const dynamic = "force-static";

/* Allow everything — every route is a public marketing page. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
