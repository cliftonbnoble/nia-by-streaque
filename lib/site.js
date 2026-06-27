/* Single source of truth for the site's canonical origin.
   Override per deploy with NEXT_PUBLIC_SITE_URL (e.g. the workers.dev host
   while the domain is still being pointed); defaults to the production domain.
   Used by metadata, OpenGraph, sitemap, robots, and JSON-LD so they always
   agree on one host. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://streaque.com").replace(/\/+$/, "");

/* Per-page metadata: a self-canonical URL + page-specific OpenGraph/Twitter cards,
   so sharing any page shows THAT page's title + description, not the generic
   homepage card. Paths are relative — metadataBase (set in app/layout.js) makes
   them absolute. og:image stays the shared card unless a page overrides it. */
export function pageMetadata({ path, title, description }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Nia by Streaque",
      url: path,
      title,
      description,
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nia by Streaque — every signal, every student, answered." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
