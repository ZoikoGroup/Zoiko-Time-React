import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ClassificationHero from "./components/ClassificationHero";
import DeterministicMeans from "./components/DeterministicMeans";
import ClassificationAnatomy from "./components/ClassificationAnatomy";
import RuleTrace from "./components/RuleTrace";
import PolicyScope from "./components/PolicyScope";
import NeutralResult from "./components/NeutralResult";
import WorkerExplanation from "./components/WorkerExplanation";
import HumanReview from "./components/HumanReview";
import PolicyGovernance from "./components/PolicyGovernance";
import OperationsCenter from "./components/OperationsCenter";
import EvidenceHistory from "./components/EvidenceHistory";
import SystemBoundaries from "./components/SystemBoundaries";
import EnterpriseReadiness from "./components/EnterpriseReadiness";
import ClassificationFaq from "./components/ClassificationFaq";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deterministic Time Classification | ZoikoTime",
  description:
    "ZoikoTime classifies workforce records using policy-bound rules — not AI. Approved facts, context, and rule precedence produce a result you can explain, trace, and review, every time.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} dtc-type`}>
      <ClassificationHero />
      <DeterministicMeans />
      <ClassificationAnatomy />
      <RuleTrace />
      <PolicyScope />
      <NeutralResult />
      <WorkerExplanation />
      <HumanReview />
      <PolicyGovernance />
      <OperationsCenter />
      <EvidenceHistory />
      <SystemBoundaries />
      <EnterpriseReadiness />
      <ClassificationFaq />
    </div>
  );
}
