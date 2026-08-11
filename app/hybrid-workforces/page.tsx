import React from 'react'
import HybridWorkforceHero from './components/HybridWorkforceHero'
import WhyZoikoTimeHybrid from './components/WhyZoikoTimeHybrid'
import HybridCommand from './components/HybridCommand'
import RecordFlow from './components/RecordFlow'
import HybridWork from './components/HybridWork'
import WorkerManager from './components/WorkerManager'
import Integrations from './components/Integrations'
import Adoption from './components/Adoption'
import Proof from './components/Proof'
import TruthCta from './components/TruthCta'
 export default function page() {
  return (
    <main>
        <HybridWorkforceHero />
        <WhyZoikoTimeHybrid />
        <HybridCommand />
        <RecordFlow />
        <HybridWork />
        <WorkerManager />
        <Integrations />
        <Adoption />
        <Proof />
        <TruthCta />
    </main>
  )
}
