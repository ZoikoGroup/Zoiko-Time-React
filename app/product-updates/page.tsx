import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import UpdatesHero from "./components/UpdatesHero";
import ValueStrip from "./components/ValueStrip";
import FeaturedUpdate from "./components/FeaturedUpdate";
import ProductAreas from "./components/ProductAreas";
import LatestUpdates from "./components/LatestUpdates";
import Collections from "./components/Collections";
import BeforeAfter from "./components/BeforeAfter";
import TrustImpact from "./components/TrustImpact";
import DeveloperUpdates from "./components/DeveloperUpdates";
import AdoptionSteps from "./components/AdoptionSteps";
import SearchArchive from "./components/SearchArchive";
import SubscribeBar from "./components/SubscribeBar";
import Methodology from "./components/Methodology";
import UpdatesCta from "./components/UpdatesCta";
import UpdatesFaq from "./components/UpdatesFaq";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latest Product Updates and Features | ZoikoTime",
  description: "Stay up to date with ZoikoTime product updates covering new features, improvements, security enhancements, integrations, workflows, and platform changes.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} pu-type`}>
      <UpdatesHero />
      <ValueStrip />
      <FeaturedUpdate />
      <ProductAreas />
      <LatestUpdates />
      <Collections />
      <BeforeAfter />
      <TrustImpact />
      <DeveloperUpdates />
      <AdoptionSteps />
      <SearchArchive />
      <SubscribeBar />
      <Methodology />
      <UpdatesCta />
      <UpdatesFaq />
    </div>
  );
}
