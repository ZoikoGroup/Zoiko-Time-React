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
