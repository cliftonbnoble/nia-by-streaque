import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NpStyles from "./styles";
import NiaHero from "./Hero";
import Moats from "./Moats";
import Qa from "./Qa";
import { SecCTA } from "@/components/home/CampaignSections";

export const metadata = {
  title: "Nia · Streaque",
  description:
    "Nia is an ongoing relationship, not a 1-minute chat. Built outward from the student's whole journey: proactive intervention, a unified student memory, care routing, and source-linked answers from your data on a governed, per-tenant substrate.",
};

export default function NiaPage() {
  return (
    <div className="mf">
      <TrustBar/>
      <Nav active="nia"/>
      <main id="main">
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
