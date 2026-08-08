import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import DesignHero from "./components/DesignHero";
import SurveillanceInvariant from "./components/SurveillanceInvariant";
import Principles from "./components/Principles";
import AssessmentDimensions from "./components/AssessmentDimensions";
import FairnessAndAccess from "./components/FairnessAndAccess";
import DesignSafeguards from "./components/DesignSafeguards";
import ReviewLifecycle from "./components/ReviewLifecycle";
import EvidenceDirectory from "./components/EvidenceDirectory";
import FeedbackRoutes from "./components/FeedbackRoutes";
import DesignConductFaq from "./components/DesignConductFaq";

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
  title: "Ethical Design Principles | ZoikoTime",
  description:
    "Twelve governed principles covering legitimate need, affected people, data, authority, safeguards, tests, limitations, owners, review dates, and correction history — each carrying an honest implementation state.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} ed-type`}>
      <DesignHero />
      <SurveillanceInvariant />
      <Principles />
      <AssessmentDimensions />
      <FairnessAndAccess />
      <DesignSafeguards />
      <ReviewLifecycle />
      <EvidenceDirectory />
      <FeedbackRoutes />
      <DesignConductFaq />
    </div>
  );
}
