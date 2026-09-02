import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import EvidenceIntegrityMatters from './components/EvidenceIntegrityMatters'
import WorkforceEvidence from './components/WorkforceEvidence'
import EvidenceContext from './components/EvidenceContext'
import RelatedResources from './components/RelatedResources'
import EvidenceFAQ from './components/EvidenceFAQ'
import EvidenceCTA from './components/EvidenceCTA'

export const metadata: Metadata = {
  title: "ZoikoTime Audit-Grade Evidence | Verified Work Proof",
  description: "Create audit-grade evidence with ZoikoTime. Capture verified work records, activity data, screenshots, and reports designed for compliance and trust.",
};

export default function page() {
  return (
    <main>
        <Hero />
        <EvidenceIntegrityMatters />
        <WorkforceEvidence />
        <EvidenceContext />
        <RelatedResources />
        <EvidenceFAQ />
        <EvidenceCTA />
    </main>
  )
}
