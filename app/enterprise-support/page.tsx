import React from 'react'
import SupportHero from './components/SupportHero'
import SupportCapabilities from './components/SupportCapabilities'
import SupportRequestCTA from './components/SupportRequestCTA'
import WhyGovernedSupport from './components/WhyGovernedSupport'
import HumanLedSupport from './components/HumanLedSupport'
import SupportLifecycle from './components/SupportLifecycle'
import GuidedIntake from './components/GuidedIntake'
import SupportBoundaries from './components/SupportBoundaries'
import KnowledgeCorrection from './components/KnowledgeCorrection'
import ProcurementEvaluation from './components/ProcurementEvaluation'
import GetStarted from './components/GetStarted'
import SupportFAQ from './components/SupportFAQ'


export default function page() {
  return (
    <main>
        <SupportHero />
        <SupportCapabilities />
        <SupportRequestCTA />
        <WhyGovernedSupport />
        <HumanLedSupport />
        <SupportLifecycle />
        <GuidedIntake />
        <SupportBoundaries />
        <KnowledgeCorrection />
        <ProcurementEvaluation />
        <GetStarted />
        <SupportFAQ />
    </main>
  )
}
