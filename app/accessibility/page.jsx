import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/accessibility",
  title: "Accessibility · Nia by Streaque",
  description:
    "Our commitment to making the Nia by Streaque website and platform usable by everyone, including people who rely on assistive technology.",
});

const SECTIONS = [
  {
    h: "Our commitment",
    body: [
      "We want everyone to be able to learn about and use Nia, including people who rely on assistive technology. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA across our website. This is an ongoing effort rather than a one-time certification, and we treat accessibility as part of how we build, not an afterthought.",
    ],
  },
  {
    h: "What we've built in",
    body: [
      "Reduced motion: the site honors your operating system's “reduce motion” setting. When it is on, the animated diagrams and decorative effects are stilled so the content stays readable without movement.",
      "Keyboard access: pages can be navigated with a keyboard, and interactive controls show a clear, visible focus indicator so you can always tell where you are.",
      "Structure and semantics: we use meaningful headings, landmarks, and labels so screen readers can present the page in a logical order, and we provide text alternatives for images that carry meaning.",
      "Readable layouts: the site is responsive and supports browser zoom and larger text, and we pay attention to color contrast for body copy and controls.",
    ],
  },
  {
    h: "Known limitations",
    body: [
      "Some sections use rich, animated product mockups to illustrate how Nia works. These are decorative; the same information is conveyed in the surrounding text. We are continuing to improve the labeling and alternatives for these elements.",
      "Because we ship improvements regularly, you may occasionally encounter an area that has not yet been fully reviewed. If you do, we want to hear about it.",
    ],
  },
  {
    h: "Giving us feedback",
    body: [
      "If you run into a barrier on this site, or need information in a different format, email info@streaque.com with the page and a short description of the problem. We aim to respond within five business days and will work with you to provide the information or function you need in an accessible way.",
    ],
  },
  {
    h: "Standards and testing",
    body: [
      "We develop against modern, standards-compliant browsers and test with keyboard navigation and screen-reader review as part of our process. As our testing and any third-party evaluations progress, we will update this statement to reflect what has been assessed.",
    ],
  },
];

export default function AccessibilityStatement() {
  return (
    <LegalPage
      title="Accessibility"
      updated="Last reviewed June 15, 2026"
      intro="This statement describes our approach to digital accessibility for the Nia by Streaque website, the steps we have already taken, and how to reach us if something is not working for you."
      sections={SECTIONS}
    />
  );
}
