import "./globals.css";

export const metadata = {
  title: "Streaque — The Higher Education AI platform",
  description:
    "Institution-governed AI that turns LMS, SIS, and CRM signals into warm, evidence-based coaching for every student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
