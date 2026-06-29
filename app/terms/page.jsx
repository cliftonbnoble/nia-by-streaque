import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions · Nia by Streaque",
  description:
    "The terms that govern use of the Nia by Streaque website and platform.",
});

const SECTIONS = [
  {
    h: "Acceptance of these terms",
    body: [
      "These Terms & Conditions (“Terms”) govern your access to and use of the Nia by Streaque website and, where applicable, the Nia platform (together, the “Services”). By using the Services, you agree to these Terms. If you do not agree, please do not use the Services.",
    ],
  },
  {
    h: "About the Services",
    body: [
      "Nia by Streaque provides AI tools that help institutions support student success by turning connected data into nudges, alerts, and next steps. We may update, add, or remove features over time.",
    ],
  },
  {
    h: "Institutional agreements control",
    body: [
      "Access to the Nia platform is provided to institutions under a separate written agreement (such as a master services or subscription agreement). Where those agreements differ from these Terms, the institutional agreement governs for that institution and its authorized users.",
    ],
  },
  {
    h: "Accounts and eligibility",
    body: [
      "Some features require an account or authorization through your institution. You are responsible for maintaining the confidentiality of your credentials and for activity under your account. Notify us promptly of any unauthorized use.",
    ],
  },
  {
    h: "Acceptable use",
    body: [
      "You agree not to misuse the Services, including by attempting to access them without authorization, interfering with their operation, reverse engineering, scraping at scale, or using them to violate the rights of others or any applicable law.",
    ],
  },
  {
    h: "Intellectual property",
    body: [
      "The Services, including software, designs, text, and graphics, are owned by Streaque or its licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable right to use the Services as permitted by these Terms or your institution's agreement. Institutional and student data remain the property of the institution.",
    ],
  },
  {
    h: "Third-party services",
    body: [
      "The Services may link to or integrate with third-party services, such as learning management systems or video platforms. We are not responsible for third-party services, and their use is governed by their own terms and policies.",
    ],
  },
  {
    h: "Disclaimers",
    body: [
      "The Services are provided “as is” and “as available” without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law. Nia provides decision support; it does not replace professional judgment by advisors, faculty, or staff.",
    ],
  },
  {
    h: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Streaque will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits or data, arising out of or related to your use of the Services. Nothing in these Terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    h: "Termination",
    body: [
      "We may suspend or terminate access to the Services if these Terms are violated or as needed to protect the Services or their users. Provisions that by their nature should survive termination will survive.",
    ],
  },
  {
    h: "Governing law",
    body: [
      "These Terms are governed by the laws of the United States and the State in which Streaque is established, without regard to conflict-of-laws principles, except where an institutional agreement specifies otherwise.",
    ],
  },
  {
    h: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. When we make material changes, we will update the date below and, where appropriate, provide additional notice. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "Questions about these Terms can be sent to info@streaque.com.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="Last updated June 28, 2026"
      intro="These Terms set out the general rules for using the Nia by Streaque website and platform. Institution-specific commitments are governed by the agreement between Streaque and each partner institution."
      sections={SECTIONS}
    />
  );
}
