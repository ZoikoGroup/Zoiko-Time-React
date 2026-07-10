import React from 'react'
import ImplementationGuide from './components/ImplementationGuide'
import ImplementationOverview from './components/ImplementationOverview'
import RolloutPhases from './components/RolloutPhases'
import Readiness from './components/Readiness'
import ConfigurationWorkstreams from './components/ConfigurationWorkstreams'
import Training from './components/Training'
import Validation from './components/Validation'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function page() {
  return (
    <main>
        <ImplementationGuide />
        <ImplementationOverview />
        <RolloutPhases />
        <Readiness />
        <ConfigurationWorkstreams />
        <Training />
        <Validation />
        <FAQ />
        <CTA />
    </main>
  )
}
