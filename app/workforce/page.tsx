import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Workforce Management Platform | ZoikoTime",
  description: "ZoikoTime workforce management platform helps teams manage time, schedules, payroll, approvals, and operations with privacy-first governance and oversight.",
};

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
