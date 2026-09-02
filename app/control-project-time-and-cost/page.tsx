import type { Metadata } from "next";
import React from 'react'
import ProjectHero from './components/ProjectHero'
import ControlProof from './components/ControlProof'
import MeasureCards from './components/MeasureCards'
import Banner from './components/Banner'
import CostDrifts from './components/CostDrifts'
import ControlModel from './components/ControlModel'
import RoleCards from './components/RoleCards'
import RateGovernance from './components/RateGovernance'
import BudgetForecast from './components/BudgetForecast'
import Reconciliation from './components/Reconciliation'
import CompleteStates from './components/CompleteStates'
import FinanceBanner from './components/FinanceBanner'
import TrustCenter from '../trust-governance/components/TrustCenter'
import TrustSecurity from './components/TrustSecurity'
import ProjectTimeCostFAQ from './components/ProjectTimeCostFAQ'

export const metadata: Metadata = {
  title: "Project Time & Cost Control Software | ZoikoTime",
  description: "ZoikoTime project time & cost control software helps manage approved time, versioned rates, budgets, forecasts, corrections, and project cost control.",
};

export default function page() {
  return (
    <main>
    <ProjectHero />
    <ControlProof />
    <MeasureCards />
    <Banner />
    <CostDrifts />
    <ControlModel />
    <RoleCards />
    <RateGovernance />
    <BudgetForecast />
    <Reconciliation />
    <CompleteStates />
    <FinanceBanner />
    <TrustSecurity />
    <ProjectTimeCostFAQ />
    </main>
  )
}
