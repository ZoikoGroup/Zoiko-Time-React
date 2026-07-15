import React from 'react'
import PolicyLocationHero from './components/PolicyLocationHero'
import PolicyStats from './components/PolicyStats'
import ContextFailureCost from './components/ContextFailureCost'
import PolicyIntelligenceEngine from './components/PolicyIntelligenceEngine'
import CrossBorderComplexity from './components/CrossBorderComplexity'
import RealTimePolicyDecisions from './components/RealTimePolicyDecisions'
import PolicyConflictResolution from './components/PolicyConflictResolution'
import ComplianceEngine from './components/ComplianceEngine'
import FailureRiskScenarios from './components/FailureRiskScenarios'
import Traceability from './components/Traceability'
import EnterpriseImpact from './components/EnterpriseImpact'
import CompetitiveDisplacement from './components/CompetitiveDisplacement'
import PrivacyEthics from './components/PrivacyEthics'
import GetStarted from './components/GetStarted'

export default function page() {
  return (
    <main>
        <PolicyLocationHero />
        <PolicyStats />
        <ContextFailureCost />
        <PolicyIntelligenceEngine />
        <CrossBorderComplexity />
        <RealTimePolicyDecisions />
        <PolicyConflictResolution />
        <ComplianceEngine />
        <FailureRiskScenarios />
        <Traceability />
        <EnterpriseImpact />
        <CompetitiveDisplacement />
        <PrivacyEthics />
        <GetStarted />
    </main>
  )
}
