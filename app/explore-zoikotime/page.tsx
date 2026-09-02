import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ExploreHero from "./components/ExploreHero";
import ExploreTrustStrip from "./components/ExploreTrustStrip";
import FeaturedPath from "./components/FeaturedPath";
import ExploreByGoal from "./components/ExploreByGoal";
import ExploreByRole from "./components/ExploreByRole";
import ExploreByEnvironment from "./components/ExploreByEnvironment";
import CapabilityDirectory from "./components/CapabilityDirectory";
import WhyThisPath from "./components/WhyThisPath";
import WorkerTransparency from "./components/WorkerTransparency";
import RecommendationMethodology from "./components/RecommendationMethodology";
import ExploreFaq from "./components/ExploreFaq";
import RelatedContent from "./components/RelatedContent";
import ExploreCta from "./components/ExploreCta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Explore Workforce Records & Trust Evidence | ZoikoTime",
  description: "Explore ZoikoTime to find the right workforce-record path by goal, role, or environment, with explainable recommendations and no invasive worker monitoring.",
};

export default function Page() {
  return (
    <div className={poppins.className}>
      <ExploreHero />
      <ExploreTrustStrip />
      <FeaturedPath />
      <ExploreByGoal />
      <ExploreByRole />
      <ExploreByEnvironment />
      <CapabilityDirectory />
      <WhyThisPath />
      <WorkerTransparency />
      <RecommendationMethodology />
      <RelatedContent />
      <ExploreCta />
      <ExploreFaq />
    </div>
  );
}
