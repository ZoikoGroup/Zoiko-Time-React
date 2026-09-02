import type { Metadata } from "next";
import React from 'react'
import ProjectHero from './components/ProjectHero'
import ControlGap from './components/ControlGap'
import ProjectDeliveryWorkspace from './components/ProjectDeliveryWorkspace'
import ProjectRecordLifecycle from './components/ProjectRecordLifecycle'
import TeamProjectTimeCapture from './components/TeamProjectTimeCapture'
import ManagerProjectLeadControl from './components/ManagerProjectLeadControl'
import FinanceProjectAccountingReadiness from './components/FinanceProjectAccountingReadiness'
import DisputesCorrectionsEvidence from './components/DisputesCorrectionsEvidence'
import GlobalProjectPolicyControls from './components/GlobalProjectPolicyControls'
import WhereProjectWorkHappens from './components/WhereProjectWorkHappens'
import ProjectFAQ from './components/ProjectFAQ'
import ProjectFinalCTA from './components/ProjectFinalCTA'


export const metadata: Metadata = {
  title: "Project Time Tracking Software | ZoikoTime",
  description: "ZoikoTime project time tracking software connects project teams, time records, approvals, and cost context to improve visibility, accountability & delivery.",
};

export default function page() {
  return (
    <main>
      <ProjectHero />
      <ControlGap />
      <ProjectDeliveryWorkspace />
      <ProjectRecordLifecycle />
      <TeamProjectTimeCapture />
      <ManagerProjectLeadControl />
      <FinanceProjectAccountingReadiness />
      <DisputesCorrectionsEvidence />
      <GlobalProjectPolicyControls />
      <WhereProjectWorkHappens />
      <ProjectFAQ />
      <ProjectFinalCTA />
    </main>
  )
}

