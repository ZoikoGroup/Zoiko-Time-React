import React from 'react'
import Hero from './components/Hero'
import EvidenceIntegrityMatters from './components/EvidenceIntegrityMatters'
import WorkforceEvidence from './components/WorkforceEvidence'
import EvidenceContext from './components/EvidenceContext'
import RelatedResources from './components/RelatedResources'
import EvidenceFAQ from './components/EvidenceFAQ'
import EvidenceCTA from './components/EvidenceCTA'

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
