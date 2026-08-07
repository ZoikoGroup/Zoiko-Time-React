import AnatomyOfReviewablePeriod from "./components/AnatomyOfReviewablePeriod";
import ApprovalQueueSection from "./components/ApprovalQueueSection";
import ApprovalReviewDetail from "./components/ApprovalReviewDetail";
import CorrectionWorkflowSection from "./components/CorrectionWorkflowSection";
import DecisionBoundariesSection from "./components/DecisionBoundariesSection";
import EnterpriseAndCTASection from "./components/EnterpriseAndCTASection";
import EvidenceAndReleaseSection from "./components/EvidenceAndReleaseSection";
import FaqAccordionSection from "./components/FaqAccordionSection";
import GovernanceAndWorkerRightsSection from "./components/GovernanceAndWorkerRightsSection";
import PolicyAndImpactSection from "./components/PolicyAndImpactSection";
import ResolutionAndTopologySection from "./components/ResolutionAndTopologySection";
import TimesheetsAndApprovalsHero from "./components/TimesheetsAndApprovalsHero";
import TraceableWorkflowSection from "./components/TraceableWorkflowSection";
import WhatTimesheetsIs from "./components/WhatTimesheetsIs";
import WorkerPeriodReview from "./components/WorkerPeriodReview";
import WorkflowModelSection from "./components/WorkflowModelSection";

export default function page(){
    return(
        <main>
              <TimesheetsAndApprovalsHero/>
              <WhatTimesheetsIs/>
              <WorkflowModelSection/>
              <AnatomyOfReviewablePeriod/>
              <WorkerPeriodReview/>
              <CorrectionWorkflowSection/>
              <ApprovalQueueSection/>
              <ApprovalReviewDetail/>
              <ResolutionAndTopologySection/>
              <PolicyAndImpactSection/>
              <EvidenceAndReleaseSection/>
              <GovernanceAndWorkerRightsSection/>
              <DecisionBoundariesSection/>
              <EnterpriseAndCTASection/>
              <TraceableWorkflowSection/>
              <FaqAccordionSection/>
              
             
        </main>
    )
}