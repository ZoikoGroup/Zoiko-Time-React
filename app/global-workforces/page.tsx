import React from 'react'
import GlobalWorkforceHero from './components/GlobalWorkforceHero'
import GlobalCoordinationGap from './components/GlobalCoordinationGap'
import GlobalRequirements from './components/GlobalRequirements'
import GlobalWorkforceControlCenter from './components/GlobalWorkforceControlCenter'
import RoleExperiences from './components/RoleExperiences'
import TimeZoneDateIntegrity from './components/TimeZoneDateIntegrity'
import IntegrationsDeployment from './components/IntegrationsDeployment'
import GlobalImplementationAdoption from './components/GlobalImplementationAdoption'
import CustomerProof from './components/CustomerProof'

export default function page() {
  return (
    <main>
        <GlobalWorkforceHero />
        <GlobalCoordinationGap />
        <GlobalRequirements />
        <GlobalWorkforceControlCenter />
        <RoleExperiences />
        <TimeZoneDateIntegrity />
        <IntegrationsDeployment />
        <GlobalImplementationAdoption />
        <CustomerProof />
    </main>
  )
}
