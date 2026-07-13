import React from 'react'
import AIInsightsHero from './components/AIInsightsHero'
import AIInsightNotice from './components/AIInsightNotice'
import PurposeLegal from './components/PurposeLegal'
import AIGovernance from './components/AIGovernance'
import AINotDo from './components/AINotDo'
import ProhibitedUses from './components/ProhibitedUses'
import HumanOversight from './components/HumanOversight'
import ExplainabilityEvidence from './components/ExplainabilityEvidence'
import AccuracyLimitations from './components/AccuracyLimitations'
import DataUseProtection from './components/DataUseProtection'
import HighRiskDeployment from './components/HighRiskDeployment'
import ContactZoikoTime from './components/ContactZoikoTime'

export default function page() {
  return (
    <main>
        <AIInsightsHero />
        <AIInsightNotice />
        <PurposeLegal />
        <AIGovernance />
        <AINotDo />
        <ProhibitedUses />
        <HumanOversight />
        <ExplainabilityEvidence />
        <AccuracyLimitations />
        <DataUseProtection />
        <HighRiskDeployment />
        <ContactZoikoTime />
    </main>
  )
}
