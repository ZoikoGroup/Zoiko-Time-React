import React from 'react'
import ResponsibleAIHero from './components/ResponsibleAIHero'
import ResponsibleAICommitment from './components/ResponsibleAICommitment'
import AIBoundaries from './components/AIBoundaries'
import HumanReviewSection from './components/HumanReviewSection'
import Explainability from './components/Explainability'
import PrivacyTransparency from './components/PrivacyTransparency'
import GovernanceControls from './components/GovernanceControls'
import ResponsibleAIFAQ from './components/ResponsibleAIFAQ'
import GovernedAICTA from './components/GovernedAICTA'

export default function page() {
  return (
    <main>
        <ResponsibleAIHero />
        <ResponsibleAICommitment />
        <AIBoundaries />
        <HumanReviewSection />
        <Explainability />
        <PrivacyTransparency />
        <GovernanceControls />
        <ResponsibleAIFAQ />
        <GovernedAICTA />
    </main>
  )
}
