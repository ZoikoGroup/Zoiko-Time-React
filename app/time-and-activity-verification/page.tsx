import type { Metadata } from "next";
import React from 'react'
import TimeActivityVerification from './components/TimeActivityVerification'
import WhyItMatters from './components/WhyItMatters'
import WhatWeVerify from './components/WhatWeVerify'
import TheFlow from './components/TheFlow'
import ResponsibleContext from './components/ResponsibleContext'
import ExceptionsWorkflow from './components/ExceptionsWorkflow'
import EvidenceSupport from './components/EvidenceSupport'
import BuiltForTeams from './components/BuiltForTeams'
import ResponsibleUse from './components/ResponsibleUse'
import WorkforceTruthCTA from './components/WorkforceTruthCTA'

export const metadata: Metadata = {
  title: "Time and Activity Verification Software | ZoikoTime",
  description: "Time and activity verification with ZoikoTime connects time records, activity context, approvals, exceptions, policies, and audit trails for clear evidence.",
};

export default function page() {
  return (
    <main>
        <TimeActivityVerification />
        <WhyItMatters />
        <WhatWeVerify />
        <TheFlow />
        <ResponsibleContext />
        <ExceptionsWorkflow />
        <EvidenceSupport />
        <BuiltForTeams />
        <ResponsibleUse />
        <WorkforceTruthCTA />
    </main>
  )
}
