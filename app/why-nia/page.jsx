import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NpStyles from "./styles";
import NiaHero from "./Hero";
import Moats from "./Moats";
import Qa from "./Qa";
import { SecCTA } from "@/components/home/CampaignSections";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/why-nia",
  title: "Why Nia · Nia by Streaque",
  description:
    "Nia is an ongoing relationship, not a 1-minute chat. Built outward from the student's whole journey, on your data, governed by your institution.",
});

export default function NiaPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="nia"/>
      <main id="main" className="cv-sections">
      <NpStyles/>
      <NiaHero/>
      <Moats/>
      <Qa/>
      <SecCTA/>
      </main>
      <Footer/>
    </div>
  );
}
