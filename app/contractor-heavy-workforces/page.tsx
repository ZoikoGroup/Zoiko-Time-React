import React from 'react'
import ContractorHeavyWorkforces from './components/ContractorHeavyWorkforces'
import OpsChallenges from './components/OpsChallenges'
import OpsNeeds from './components/OpsNeeds'
import OpsWorkspace from './components/OpsWorkspace'
import OpsLifecycle from './components/OpsLifecycle'
import ContractorSelf from './components/ContractorSelf'
import ManagerWorkspace from './components/ManagerWorkspace'
import FinanceReady from './components/FinanceReady'
import CostAttrib from './components/CostAttrib'
import TimeDisputes from './components/TimeDisputes'
import PolicyControls from './components/PolicyControls'
import IdentityOffboard from './components/IdentityOffboard'
import OpsIntegrations from './components/OpsIntegrations'
import ImplJourney from './components/ImplJourney'
import CustomerProof from './components/CustomerProof'
import OpsFaq from './components/OpsFaq'
import GetStarted from './components/GetStarted'

export default function page() {
  return (
    <main>
        <ContractorHeavyWorkforces />
        <OpsChallenges />
        <OpsNeeds />
        <OpsWorkspace />
        <OpsLifecycle />
        <ContractorSelf />
        <ManagerWorkspace />
        <FinanceReady />
        <CostAttrib />
        <TimeDisputes />
        <PolicyControls />
        <IdentityOffboard />
        <OpsIntegrations />
        <ImplJourney />
        <CustomerProof />
        <OpsFaq />
        <GetStarted />
    </main>
  )
}
