import React from 'react'
import DisputeReview from './components/DisputeReview'
import TrustPills from './components/TrustPills'
import DisputeReasons from './components/DisputeReasons'
import PreventionWorkflow from './components/PreventionWorkflow'
import ReviewCenter from './components/ReviewCenter'
import RecordAnatomy from './components/RecordAnatomy'
import RecordComparison from './components/RecordComparison'
import PolicyExplanation from './components/PolicyExplanation'
import ResolutionWorkflow from './components/ResolutionWorkflow'
import EvidencePreserved from './components/EvidencePreserved'
import TwoWayParticipation from './components/TwoWayParticipation'
import IntegrationsAnalytics from './components/IntegrationsAnalytics'
import Implementation from './components/Implementation'
import TrustPrivacyGovernance from './components/TrustPrivacyGovernance'
import WhoItsFor from './components/WhoItsFor'

export default function page() {
  return (
    <main>
        <DisputeReview />
        <TrustPills />
        <DisputeReasons />
        <PreventionWorkflow />
        <ReviewCenter />
        <RecordAnatomy />
        <RecordComparison />
        <PolicyExplanation />
        <ResolutionWorkflow />
        <EvidencePreserved />
        <TwoWayParticipation />
        <IntegrationsAnalytics />
        <Implementation />
        <TrustPrivacyGovernance />
        <WhoItsFor />
    </main> 
  )
}
