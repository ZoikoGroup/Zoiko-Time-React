import React from 'react'
import ComplianceReview from './components/ComplianceReview'
import Coverage from './components/Coverage'
import WhoShouldAttend from './components/WhoShouldAttend'
import ReviewDeliverables from './components/ReviewDeliverables'
import FitCriteria from './components/FitCriteria'
import DeploymentCTA from './components/DeploymentCTA'

export default function page() {
  return (
    <main>
        <ComplianceReview />
        <Coverage />
        <WhoShouldAttend />
        <ReviewDeliverables />
        <FitCriteria />
        <DeploymentCTA />
    </main>
  )
}
