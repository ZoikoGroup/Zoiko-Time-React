import React from 'react'
import EvidenceHero from './components/EvidenceHero'
import EvidenceOverview from './components/EvidenceOverview'
import CapabilityHighlights from './components/CapabilityHighlights'
import WhyEvidence from './components/WhyEvidence'
import EvidenceLifecycle from './components/EvidenceLifecycle'
import GovernanceCenter from './components/GovernanceCenter'
import ResourceCategories from './components/ResourceCategories'
import AccessClasses from './components/AccessClasses'
import ResourceMetadata from './components/ResourceMetadata'
import RequestFlow from './components/RequestFlow'
import RequestWorkspace from './components/RequestWorkspace'
import LegalBoundaries from './components/LegalBoundaries'
import TrustResources from './components/TrustResources'
import EvidenceVersionTimeline from './components/EvidenceVersionTimeline'
import EnterpriseTrustPanel from './components/EnterpriseTrustPanel'
import ProcurementLegalResourcesFAQ from './components/ProcurementLegalResourcesFAQ'

export default function page() {
  return (
    <main>
        <EvidenceHero />
        <EvidenceOverview />
        <CapabilityHighlights />
        <WhyEvidence />
        <EvidenceLifecycle />
        <GovernanceCenter />
        <ResourceCategories />
        <AccessClasses />
        <ResourceMetadata />
        <RequestFlow />
        <RequestWorkspace />
        <LegalBoundaries />
        <TrustResources />
        <EvidenceVersionTimeline />
        <EnterpriseTrustPanel />
        <ProcurementLegalResourcesFAQ />
    </main>
  )
}
