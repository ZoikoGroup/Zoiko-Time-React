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
