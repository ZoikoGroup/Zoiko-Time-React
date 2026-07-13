import React from 'react'
import DataRetentionHero from './components/DataRetentionHero'
import WhyRetentionMatters from './components/WhyRetentionMatters'
import RecordsGoverned from './components/RecordsGoverned'
import RetentionPolicies from './components/RetentionPolicies'
import AccessAuditControls from './components/AccessAuditControls'
import RetentionFaq from './components/RetentionFaq'
import RetentionCTA from './components/RetentionCTA'
import RetentionResources from './components/RetentionResources'

export default function page() {
  return (
    <main>
        <DataRetentionHero />
        <WhyRetentionMatters />
        <RecordsGoverned />
        <RetentionPolicies />
        <AccessAuditControls />
        <RetentionFaq />
        <RetentionResources />
        <RetentionCTA />
    </main> 
  )
}
