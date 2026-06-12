import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
