import React from 'react'
import IdentityAssuranceHero from './components/IdentityAssuranceHero'
import HiddenFailure from './components/HiddenFailure'
import SystemGuarantees from './components/SystemGuarantees'
import VerificationEngine from './components/VerificationEngine'
import Decision from './components/Decision'
import FailureCases from './components/FailureCases'
import LiveDemo from './components/LiveDemo'
import EvidenceEngine from './components/EvidenceEngine'
import WhyTraditionalSystemsFail from './components/WhyTraditionalSystemsFail'
import PrivacyCards from './components/PrivacyCards'
import ImpactCards from './components/ImpactCards'
import GetStarted from './components/GetStarted'

export default function page() {
  return (
    <main>
        <IdentityAssuranceHero />
        <HiddenFailure />
        <SystemGuarantees />
        <VerificationEngine />
        <Decision />
        <FailureCases />
        <LiveDemo />
        <EvidenceEngine />
        <WhyTraditionalSystemsFail />
        <PrivacyCards />
        <ImpactCards />
        <GetStarted />
    
    </main>
  )
}
