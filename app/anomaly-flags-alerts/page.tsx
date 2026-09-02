import type { Metadata } from "next";
import AnatomySection from "./components/AnatomySection";
import AnomalyFlagExplanation from "./components/AnomalyFlagExplanation";
import AnomalyFlagsSection from "./components/AnomalyFlagsSection";
import ConditionFamiliesTable from "./components/ConditionFamiliesTable";
import ElevenInterpretationsSection from "./components/ElevenInterpretationsSection";
import FAQSection from "./components/FAQSection";
import GovernanceBanner from "./components/GovernanceBanner";
import GovernanceCardsGrid from "./components/GovernanceCardsGrid";
import GovernanceSection from "./components/GovernanceSection";
import GovernedLifecycleSection from "./components/GovernedLifecycleSection";
import HumanReviewWorkflowSection from "./components/HumanReviewWorkflowSection";
import KairosBoundarySection from "./components/KairosBoundarySection";
import PriorityRulesSection from "./components/PriorityRulesSection";
import WorkerTransparencySection from "./components/WorkerTransparencySection";

export const metadata: Metadata = {
  title: "Workforce Anomaly Detection & Alerts | ZoikoTime",
  description: "Simplify workforce anomaly detection with smart alerts and clear insights. Identify unusual attendance patterns and resolve employee record issues faster.",
};

export default function page(){
    return(
        <main>
        <AnomalyFlagsSection/>
        <AnomalyFlagExplanation/>
        <GovernedLifecycleSection/>
        <ConditionFamiliesTable/>
        <ElevenInterpretationsSection/>
        <AnatomySection/>
        <PriorityRulesSection/>
        <HumanReviewWorkflowSection/>
        <WorkerTransparencySection/>
        <GovernanceCardsGrid/>
        <KairosBoundarySection/>
        <GovernanceSection/>
        <GovernanceBanner/>
        <FAQSection/>
        </main>
    )
}