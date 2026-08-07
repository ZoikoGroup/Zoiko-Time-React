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
  title: "Trust Center | ZoikoTime",
  description:
    "How ZoikoTime protects organization data, keeps time classification deterministic and reviewable, and keeps human authority over consequential decisions — with the scope, status, owner, limitations, and correction history behind every claim recoverable.",
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
