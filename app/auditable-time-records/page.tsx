import type { Metadata } from "next";
import React from 'react'
import AuditableTimeRecordsHero from './components/AuditableTimeRecordsHero'
import IntegrityGap from './components/IntegrityGap'
import EvidenceArchitecture from './components/EvidenceArchitecture'
import ProductProof from './components/ProductProof'
import WorkerRecordView from './components/WorkerRecordView'
import SystemFit from './components/SystemFit'
import RecordReadiness from './components/RecordReadiness'
import IndependentValidation from './components/IndependentValidation'
import AuditabilityQuestions from './components/AuditabilityQuestions'


export const metadata: Metadata = {
  title: "Auditable Time Records Software | ZoikoTime",
  description: "Create auditable time records with ZoikoTime. Track accurate hours, review changes, manage approvals, and keep clear records for payroll and compliance.",
};

export default function page() {
  return (
    <main>
    <AuditableTimeRecordsHero />
    <IntegrityGap />
    <EvidenceArchitecture />
    <ProductProof />
    <WorkerRecordView />
    <SystemFit />
    <RecordReadiness />
    <IndependentValidation />
    <AuditabilityQuestions />
    </main>
    
  )
}
