import EnterpriseReadiness from "../deterministic-time-classification/components/EnterpriseReadiness";
import DataGovernanceAndQualitySection from "./components/DataGovernanceAndQualitySection";
import EnterpriseReadinessSection from "./components/EnterpriseReadinessSection";
import EvidenceAndBoundariesSection from "./components/EvidenceAndBoundariesSection";
import ExplainableByDesignSection from "./components/ExplainableByDesignSection";
import FAQSection from "./components/FAQSection";
import InsightBoundariesSection from "./components/InsightBoundariesSection";
import InsightLifecycleSection from "./components/InsightLifecycleSection";
import InsightsHeroSection from "./components/InsightsHeroSection";
import ProductInvariantsSection from "./components/ProductInvariantsSection";
import ReviewableInsightSection from "./components/ReviewableInsightSection";
import WorkerAndReviewerSection from "./components/WorkerAndReviewerSection";
import WorkforceRecordInsights from "./components/WorkforceRecordInsights";

export default function page(){
    return(
        <main>
        <InsightsHeroSection/>
        <WorkforceRecordInsights/>
        <ProductInvariantsSection/>
        <InsightLifecycleSection/>
        <ReviewableInsightSection/>
        <DataGovernanceAndQualitySection/>
        <InsightBoundariesSection/>
        <WorkerAndReviewerSection/>
        <EvidenceAndBoundariesSection/>
        <EnterpriseReadinessSection/>
        <ExplainableByDesignSection/>
        <FAQSection/>
        
        </main>
    )
}