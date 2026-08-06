import React from 'react'
import TruthHero from './components/TruthHero'
import TrustCenterBanner from './components/TrustCenterBanner'
import HowItWorks from './components/HowItWorks'
import LifecycleProcess from './components/LifecycleProcess'
import CaptureStage from './components/CaptureStage'
import StageTwoClassification from './components/StageTwoClassification'
import StageThree from './components/StageThree'
import StageFour from './components/StageFour'
import StageFive from './components/StageFive'
import EvidenceLedger from './components/EvidenceLedger'
import SharedResponsibility from './components/SharedResponsibility'
import ByRole from './components/ByRole'
import ExceptionsSection from './components/ExceptionsSection'
import ConnectedWorkSection from './components/ConnectedWorkSection'
import ImplementationAdoption from './components/ImplementationAdoption'
import ZoikoTimeFAQ from './components/ZoikoTimeFAQ'
import ChooseYourPath from './components/ChooseYourPath'

export default function page() {
  return (
   <main>
    <TruthHero />
    <TrustCenterBanner />
    <HowItWorks />
    <LifecycleProcess />
    <CaptureStage />
    <StageTwoClassification />
    <StageThree />
    <StageFour />
    <StageFive />
    <EvidenceLedger />
    <SharedResponsibility />
    <ByRole />
    <ExceptionsSection />
    <ConnectedWorkSection />
    <ImplementationAdoption />
    <ZoikoTimeFAQ />
    <ChooseYourPath />
   </main>
  )
}
