import type { Metadata } from "next";
import React from 'react'
import SecurityHero from './components/SecurityHero'
import SecurityOverview from './components/SecurityOverview'
import SecurityDataProtected from './components/SecurityDataProtected'
import IdentityAccessControl from './components/IdentityAccessControl'
import DataProtection from './components/DataProtection'
import EvidenceSection from './components/EvidenceSection'
import OperationsSecurity from './components/OperationsSecurity'
import CustomerResponsibilities from './components/CustomerResponsibilities'
import SecurityReviewProcurement from './components/SecurityReviewProcurement'
import ResponsibleDisclosure from './components/ResponsibleDisclosure'
import SecurityAddendumFAQs from './components/SecurityAddendumFAQs'
import EnterpriseReviewCTA from './components/EnterpriseReviewCTA'


export const metadata: Metadata = {
  title: "Security Addendum Policy for Data Security | ZoikoTime",
  description: "Learn how ZoikoTime protects workforce data with its security addendum, covering access controls, encryption, audit logs & enterprise security practices.",
};

export default function page() {
  return (
    <main>
        <SecurityHero />
        <SecurityOverview />
        <SecurityDataProtected />
        <IdentityAccessControl />
        <DataProtection />
        <EvidenceSection />
        <OperationsSecurity / >
        <CustomerResponsibilities />
        <SecurityReviewProcurement />
        <ResponsibleDisclosure />
        <SecurityAddendumFAQs />
        <EnterpriseReviewCTA />
        
    </main>
  )
}
