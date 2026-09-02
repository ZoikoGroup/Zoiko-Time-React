import type { Metadata } from "next";
import React from 'react'
import PayrollHero from './components/PayrollHero'
import PayrollFeatures from './components/PayrollFeatures'
import PayrollChallenges from './components/PayrollChallenges'
import PayrollLifecycle from './components/PayrollLifecycle'
import PayrollWorkflows from './components/PayrollWorkflows'
import PayrollControlCenter from './components/PayrollControlCenter'
import PayrollExceptions from './components/PayrollExceptions'
import PayrollClose from './components/PayrollClose'
import ProjectLaborAllocation from './components/ProjectLaborAllocation'
import GlobalPolicy from './components/GlobalPolicy'
import Integrations from './components/Integrations'
import MeasurableOutcomes from './components/MeasurableOutcomes'
import ProofValidation from './components/ProofValidation'
import Implementation from './components/Implementation'
import QuestionsAnswered from './components/QuestionsAnswered'

export const metadata: Metadata = {
  title: "Finance & Payroll Time Tracking Software | ZoikoTime",
  description: "ZoikoTime payroll time tracking software helps finance teams manage accurate time records, approvals, attendance data, and payroll-ready workflows with ease.",
};

export default function page() {
  return (
    <main>
        <PayrollHero />
        <PayrollFeatures />
        <PayrollChallenges />
        <PayrollLifecycle />
        <PayrollWorkflows />
        <PayrollControlCenter />
        <PayrollExceptions />
        <PayrollClose />
        <ProjectLaborAllocation />
        <GlobalPolicy />
        <Integrations />
        <MeasurableOutcomes />
        <ProofValidation />
        <Implementation />
        <QuestionsAnswered />
    </main>
  )
}
