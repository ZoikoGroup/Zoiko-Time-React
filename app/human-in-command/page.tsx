import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import CommandHero from "./components/CommandHero";
import AuthorityInvariant from "./components/AuthorityInvariant";
import DecisionClasses from "./components/DecisionClasses";
import AutomationBoundaries from "./components/AutomationBoundaries";
import ReviewLifecycle from "./components/ReviewLifecycle";
import ReviewWorkspace from "./components/ReviewWorkspace";
import EvidenceAndReason from "./components/EvidenceAndReason";
import ReviewRights from "./components/ReviewRights";
import Mechanisms from "./components/Mechanisms";
import SeparationOfDuties from "./components/SeparationOfDuties";
import ControlEvidence from "./components/ControlEvidence";
import AuthorityFaq from "./components/AuthorityFaq";

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
  title: "Human-in-Command Controls | ZoikoTime",
  description:
    "Automation assists — it calculates, classifies, routes, summarizes, and flags. An authorized person reviews the evidence, can disagree with it, and owns the outcome. The affected worker can understand it, correct it, challenge it, escalate it, and see its history.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} hic-type`}>
      <CommandHero />
      <AuthorityInvariant />
      <DecisionClasses />
      <AutomationBoundaries />
      <ReviewLifecycle />
      <ReviewWorkspace />
      <EvidenceAndReason />
      <ReviewRights />
      <Mechanisms />
      <SeparationOfDuties />
      <ControlEvidence />
      <AuthorityFaq />
    </div>
  );
}
