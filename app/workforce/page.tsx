import React from 'react'
import HeroWorkforce from './components/HeroWorkforce'
import WorkforceProblem from './components/WorkforceProblem'
import ZoikoTimeAnswer from './components/ZoikoTimeAnswer'
import CoreIntelligenceCapabilities from './components/CoreIntelligenceCapabilities'
import StakeholderTeams from './components/StakeholderTeams'
import AIGovernance from './components/AIGovernance'
import EvidenceSecurity from './components/EvidenceSecurity'
import WorkforceUseCases from './components/WorkforceUseCases'
import WorkforceFAQ from './components/WorkforceFAQ'
import WorkforceDataCTA from './components/WorkforceDataCTA'

export default function page() {
  return (
    <main>
        <HeroWorkforce />
        <WorkforceProblem />
        <ZoikoTimeAnswer />
        <CoreIntelligenceCapabilities />
        <StakeholderTeams />
        <AIGovernance />
        <EvidenceSecurity />
        <WorkforceUseCases />
        <WorkforceFAQ />
        <WorkforceDataCTA />
    </main>
  )
}
