import React from 'react'
import TransparencyHero from './components/TransparencyHero'
import ExplainabilityEngine from './components/ExplainabilityEngine'
import TransparencyViews from './components/TransparencyViews'
import SystemLogicPipeline from './components/SystemLogicPipeline'
import DecisionTrace from './components/DecisionTrace'
import SystemBoundaries from './components/SystemBoundaries'
import LiveExplainabilityExamples from './components/LiveExplainabilityExamples'
import FrequentlyAsked from './components/FrequentlyAsked'
import CategoryDefiningCTA from './components/CategoryDefiningCTA'

export default function page() {
  return (
    <main>
        <TransparencyHero />
        <ExplainabilityEngine />
        <TransparencyViews />
        <SystemLogicPipeline />
        <DecisionTrace />
        <SystemBoundaries />
        <LiveExplainabilityExamples />
        <FrequentlyAsked />
        <CategoryDefiningCTA />
    </main>
  )
}
