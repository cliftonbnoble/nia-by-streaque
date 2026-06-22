import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

/* Cloudflare Web Analytics beacon token (public, cookieless — no consent banner
   needed). Get it from the dashboard → Web Analytics → your site. Hardcode it
   here like the Turnstile site key, or set NEXT_PUBLIC_CF_ANALYTICS_TOKEN.
   Empty = no beacon rendered (so nothing breaks until it's set). */
const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || "";

/* self-hosted variable fonts: one file per family covers every weight,
   no render-blocking request to Google */
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nia by Streaque — the higher-ed AI platform",
  description:
    "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
  // favicon.ico, icon.svg, and apple-icon.png in app/ are picked up automatically
  // by Next's file conventions; this adds the PWA manifest + iOS home-screen label.
  manifest: "/favicon/site.webmanifest",
  appleWebApp: { title: "Nia" },
  openGraph: {
    type: "website",
    siteName: "Nia by Streaque",
    url: SITE_URL,
    title: "Nia by Streaque — the higher-ed AI platform",
    description:
      "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nia by Streaque — every signal, every student, answered." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nia by Streaque — the higher-ed AI platform",
    description:
      "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

/* Organization JSON-LD — helps search engines + LinkedIn/X render the brand
   (name, logo, profiles) for the site as a whole. */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Streaque",
  alternateName: "Nia by Streaque",
  url: SITE_URL,
  logo: `${SITE_URL}/nia-opt-web-logo.png`,
  description:
    "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
  sameAs: [
    "https://www.linkedin.com/company/streaque/",
    "https://www.youtube.com/@NiabyStreaque",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="mf-skip">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        {CF_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
          />
        )}
      </body>
    </html>
  );
}
