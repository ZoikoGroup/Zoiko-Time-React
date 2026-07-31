import React from 'react'
import EnterpriseHero from './components/EnterpriseHero'
import AntiSurveillanceBanner from './components/AntiSurveillanceBanner'
import AdministrationPolicy from './components/AdministrationPolicy'
import IdentityAccess from './components/IdentityAccess'
import SupportProcurement from './components/SupportProcurement'
import EnterpriseTrust from './components/EnterpriseTrust'
import DeploymentModel from './components/DeploymentModel'
import WhyOrganizationsChoose from './components/WhyOrganizationsChoose'
import IntegrationDeployment from './components/IntegrationDeployment'
import EnterpriseTrustBar from './components/EnterpriseTrustBar'
import EnterpriseResources from './components/EnterpriseResources'
import EnterpriseFAQ from './components/EnterpriseFAQ'
import EnterpriseCTA from './components/EnterpriseCTA'

export default function page() {
  return (
    <main>
        <EnterpriseHero />
        <AntiSurveillanceBanner />
        <AdministrationPolicy />
        <IdentityAccess />
        <SupportProcurement />
        <EnterpriseTrust />
        <DeploymentModel />
        <WhyOrganizationsChoose />
        <IntegrationDeployment />
        <EnterpriseTrustBar />
        <EnterpriseResources />
        <EnterpriseFAQ />
        <EnterpriseCTA />
    </main>
  )
}
