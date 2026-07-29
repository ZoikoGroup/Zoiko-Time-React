import React from 'react'
import TrustGovernanceHero from './components/TrustGovernanceHero'
import TrustLayers from './components/TrustLayers'
import AntiSurveillanceCommitment from './components/AntiSurveillanceCommitment'
import TrustCenter from './components/TrustCenter'
import HowWeOperate from './components/HowWeOperate'
import ResourcesCompliance from './components/ResourcesCompliance'
import EvidenceRequest from './components/EvidenceRequest'

export default function page() {
  return (
    <main>
        <TrustGovernanceHero />
        <TrustLayers />
        <AntiSurveillanceCommitment />
        <TrustCenter />
        <HowWeOperate />
        <ResourcesCompliance />
        <EvidenceRequest />
    </main>
  )
}
