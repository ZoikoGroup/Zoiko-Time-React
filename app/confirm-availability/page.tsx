import React from 'react'
import VerifyAvailability from './components/VerifyAvailability'
import AvailabilityForm from './components/AvailabilityForm'
import WhoUses from './components/WhoUses'
import ResultStates from './components/ResultStates'
import EnterpriseDeploymentIncludes from './components/EnterpriseDeploymentIncludes'

export default function page() {
  return (
    <main>
        <VerifyAvailability />
        <AvailabilityForm />
        <WhoUses />
        <ResultStates />
        <EnterpriseDeploymentIncludes />
    </main>
  )
}
