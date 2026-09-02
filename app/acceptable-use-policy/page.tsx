import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import PolicyNotice from './components/PolicyNotice'
import PurposePolicyStatus from './components/PurposePolicyStatus'
import ScopeApplicability from './components/ScopeApplicability'
import GeneralStandardAcceptableUse from './components/GeneralStandardAcceptableUse'
import ProhibitedUses from './components/ProhibitedUses'
import WorkforceMonitoringRights from './components/WorkforceMonitoringRights'
import ArtificialIntelligenceDecisionSupport from './components/ArtificialIntelligenceDecisionSupport'
import Investigation from './components/Investigation'
import PolicyChanges from './components/PolicyChanges'
import ContactZoikoTime from './components/ContactZoikoTime'

export const metadata: Metadata = {
  title: "Acceptable Use Policy for Platform Users | ZoikoTime",
  description: "Learn about ZoikoTime acceptable use policy, including user obligations, restricted activities, security measures, and compliance requirements.",
};

export default function page() {
  return (
    <main>
        <Hero />
        <PolicyNotice />
        <PurposePolicyStatus />
        <ScopeApplicability />
        <GeneralStandardAcceptableUse />
        <ProhibitedUses />
        <WorkforceMonitoringRights />
        <ArtificialIntelligenceDecisionSupport />
        <Investigation />
        <PolicyChanges />
        <ContactZoikoTime />
    </main>
  )
}
