import type { Metadata } from "next";
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
 export const metadata: Metadata = {
  title: "Hybrid Workforce Management | ZoikoTime",
  description: "ZoikoTime delivers hybrid workforce management for schedules, time, attendance, breaks, projects, and approvals—all without employee surveillance.",
};

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
