import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ZoikoTime Implementation Guide | Setup & Rollout",
  description: "Launch ZoikoTime with a structured implementation guide covering setup, rollout planning, configuration, training, governance, and workforce readiness.",
};

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
