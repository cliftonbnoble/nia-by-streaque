import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy · Nia by Streaque",
  description:
    "How Nia by Streaque collects, uses, and protects information, including student records handled on behalf of partner institutions.",
});

const SECTIONS = [
  {
    h: "Overview",
    body: [
      "Nia by Streaque (“Streaque,” “we,” “us”) builds AI tools that help colleges and universities support student success. This Privacy Policy explains what information we collect, how we use it, and the choices available to you. It applies to our website and to the Nia platform.",
      "When we process student records on behalf of an institution, we act under that institution's direction. The institution remains the owner and controller of that data, and its agreement with us governs how the data may be used.",
    ],
  },
  {
    h: "Information we collect",
    body: [
      "Information you provide: contact details submitted through our forms (such as name, email, role, and institution), and the contents of messages you send us.",
      "Institutional and student data: when an institution connects systems such as a learning management system (LMS), student information system (SIS), or CRM, Nia processes the records those systems share, strictly to deliver the services the institution has requested.",
      "Usage information: standard technical data such as device type, browser, and pages viewed, used to operate and improve the website.",
    ],
  },
  {
    h: "How we use information",
    body: [
      "We use information to provide and improve the Nia platform, respond to inquiries, generate the nudges and insights an institution has configured, maintain security, and meet our legal and contractual obligations.",
      "We do not sell personal information, and we do not use student data to train models for other customers or for advertising.",
    ],
  },
  {
    h: "Student data and FERPA",
    body: [
      "For education records covered by the Family Educational Rights and Privacy Act (FERPA), Streaque acts as a “school official” with a legitimate educational interest, or as a service provider under the institution's direction. We use education records only to provide the contracted services and do not redisclose them except as permitted by the institution and applicable law.",
      "Students and parents who wish to exercise rights over education records should contact their institution, which administers those rights.",
    ],
  },
  {
    h: "How we share information",
    body: [
      "We share information with service providers (subprocessors) that help us operate the platform, such as cloud hosting and infrastructure providers, under contracts that require appropriate confidentiality and security safeguards.",
      "We may disclose information if required by law, to protect rights and safety, or in connection with a corporate transaction. We share student data with third parties only as directed by the institution or as permitted under applicable law.",
    ],
  },
  {
    h: "Data security",
    body: [
      "We use administrative, technical, and physical safeguards designed to protect information, including encryption in transit and at rest, access controls, and monitoring. No method of transmission or storage is completely secure, but we work to protect information consistent with industry standards.",
    ],
  },
  {
    h: "Data retention",
    body: [
      "We retain information for as long as needed to provide our services and meet legal, contractual, and operational requirements. Student data is retained and deleted according to the institution's instructions and our agreement with the institution.",
    ],
  },
  {
    h: "Your rights and choices",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information, or to object to certain processing. To make a request related to information we hold directly, contact us at info@streaque.com. For student education records, please contact your institution.",
      "You can opt out of marketing emails at any time using the unsubscribe link in those messages.",
    ],
  },
  {
    h: "Cookies and analytics",
    body: [
      "Our website uses a small set of essential cookies to operate the site and remember the choice you make in our cookie banner. We do not currently run third-party analytics or advertising trackers.",
      "If we introduce analytics in the future, we will use a privacy-friendly tool, gate it behind your cookie-banner choice, and update this policy to describe it. You can also control cookies through your browser settings.",
    ],
  },
  {
    h: "International users",
    body: [
      "We are based in the United States and process information there. Where we handle the personal data of individuals in other regions, we take steps intended to provide an appropriate level of protection consistent with applicable laws, including the GDPR where relevant.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the date below and, where appropriate, provide additional notice.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "If you have questions about this policy or our privacy practices, contact us at info@streaque.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated June 28, 2026"
      intro="This policy describes how Nia by Streaque handles information across our website and platform. It is written to be clear and general; institution-specific terms are governed by the agreement between Streaque and each partner institution."
      sections={SECTIONS}
    />
  );
}
