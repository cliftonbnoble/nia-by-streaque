import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* self-hosted variable fonts: one file per family covers every weight,
   no render-blocking request to Google */
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });

export const metadata = {
  title: "Streaque — The Higher Education AI platform",
  description:
    "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
  // favicon.ico, icon.svg, and apple-icon.png in app/ are picked up automatically
  // by Next's file conventions; this adds the PWA manifest + iOS home-screen label.
  manifest: "/favicon/site.webmanifest",
  appleWebApp: { title: "Nia" },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
