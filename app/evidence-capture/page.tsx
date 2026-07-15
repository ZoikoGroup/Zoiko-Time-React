import React from 'react'
import EvidenceCapture from './components/EvidenceCapture'
import ProblemCards from './components/ProblemCards'
import EvidenceLayer from './components/EvidenceLayer'
import CustodyRecord from './components/CustodyRecord'
import LegalAdmissibility from './components/LegalAdmissibility'
import SelectiveDisclosure from './components/SelectiveDisclosure'
import EvidenceCreatedTruth from './components/EvidenceCreatedTruth'
import EvidenceCoverage from './components/EvidenceCoverage'
import AuditSimulation from './components/AuditSimulation'
import LifecycleManagement from './components/LifecycleManagement'
import DisputeResolution from './components/DisputeResolution'
import EnterpriseImpact from './components/EnterpriseImpact'
import WhyLogsNotEvidence from './components/WhyLogsNotEvidence'
import GetStartedEvidence from './components/GetStartedEvidence'

export default function page() {
  return (
    <main>
        <EvidenceCapture />
        <ProblemCards />
        <EvidenceLayer />
        <CustodyRecord />
        <LegalAdmissibility />
        <SelectiveDisclosure />
        <EvidenceCreatedTruth />
        <EvidenceCoverage />
        <AuditSimulation />
        <LifecycleManagement />
        <DisputeResolution />
        <EnterpriseImpact />
        <WhyLogsNotEvidence />
        <GetStartedEvidence />
    </main>
  )
}
