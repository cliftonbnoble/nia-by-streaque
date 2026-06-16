/* Single source of truth for the site's canonical origin.
   Override per deploy with NEXT_PUBLIC_SITE_URL (e.g. the workers.dev host
   while the domain is still being pointed); defaults to the production domain.
   Used by metadata, OpenGraph, sitemap, robots, and JSON-LD so they always
   agree on one host. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://streaque.com").replace(/\/+$/, "");
