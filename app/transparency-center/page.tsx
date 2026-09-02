import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ZoikoTime Transparency Center | Trust & Governance",
  description: "ZoikoTime transparency center gives clear visibility into data usage, AI workflows, and workforce analytics with trusted governance & accountability tools.",
};

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
