import { SITE_URL } from "@/lib/site";

// Required for `output: export` — emit a static sitemap.xml at build time.
export const dynamic = "force-static";

/* Indexable routes only. /resources is intentionally left out — it's a
   placeholder marked noindex, so we don't advertise it in the sitemap. */
const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/security", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-nia-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nia", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
