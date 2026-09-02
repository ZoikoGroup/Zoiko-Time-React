import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import TrustHero from "./components/TrustHero";
import SurveillanceInvariant from "./components/SurveillanceInvariant";
import ThreeGroups from "./components/ThreeGroups";
import EvidenceLifecycle from "./components/EvidenceLifecycle";
import FlagAuthority from "./components/FlagAuthority";
import ControlCategories from "./components/ControlCategories";
import HonestLimits from "./components/HonestLimits";
import EvidenceDirectory from "./components/EvidenceDirectory";
import EvidenceDetail from "./components/EvidenceDetail";
import RequestReview from "./components/RequestReview";
import TrustHistory from "./components/TrustHistory";
import TrustFaq from "./components/TrustFaq";
import TrustCta from "./components/TrustCta";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZoikoTime Trust Center | Security & Privacy Controls",
  description: "Learn how ZoikoTime protects organizational data with verified security controls, deterministic time classification, privacy measures, and human oversight.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} tc-type`}>
       <TrustHero />
       <SurveillanceInvariant />
       <ThreeGroups />
      <EvidenceLifecycle />
      <FlagAuthority />
      <ControlCategories />
      <HonestLimits />
      <EvidenceDirectory />
      <EvidenceDetail />
      <RequestReview />
      <TrustHistory />
      <TrustFaq />
      <TrustCta />
    </div>
  );
}
