import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import AiGovernanceHero from "./components/AiGovernanceHero";
import CapabilityTaxonomy from "./components/CapabilityTaxonomy";
import ProhibitedUses from "./components/ProhibitedUses";
import GovernanceLifecycle from "./components/GovernanceLifecycle";
import CapabilityRegister from "./components/CapabilityRegister";
import EvaluationEvidence from "./components/EvaluationEvidence";
import HumanControlsAndRights from "./components/HumanControlsAndRights";
import OperatingAndIncidents from "./components/OperatingAndIncidents";
import RequestGovernanceReview from "./components/RequestGovernanceReview";
import AiGovernanceFaq from "./components/AiGovernanceFaq";

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
  title: "AI Governance | ZoikoTime",
  description:
    "Deterministic rules, approved machine-learning flags, governed assistance, and human-only decisions are four different things with four different authority levels. Each governed use states its purpose, sources, allowed output, human control, limitations, owner, status, and correction path.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} aig-type`}>
      <AiGovernanceHero />
      <CapabilityTaxonomy />
      <ProhibitedUses />
      <GovernanceLifecycle />
      <CapabilityRegister />
      <EvaluationEvidence />
      <HumanControlsAndRights />
      <OperatingAndIncidents />
      <RequestGovernanceReview />
      <AiGovernanceFaq />
    </div>
  );
}
