import type { Metadata } from "next";
import React from 'react'
import DataRetentionHero from './components/DataRetentionHero'
import WhyRetentionMatters from './components/WhyRetentionMatters'
import RecordsGoverned from './components/RecordsGoverned'
import RetentionPolicies from './components/RetentionPolicies'
import AccessAuditControls from './components/AccessAuditControls'
import RetentionFaq from './components/RetentionFaq'
import RetentionCTA from './components/RetentionCTA'
import RetentionResources from './components/RetentionResources'

export const metadata: Metadata = {
  title: "Data Retention & Legal Hold Management | ZoikoTime",
  description: "Manage data retention & legal hold management with ZoikoTime to protect business records, preserve critical information, and meet compliance requirements.",
};

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
