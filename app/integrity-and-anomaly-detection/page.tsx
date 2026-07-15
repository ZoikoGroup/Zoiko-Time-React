import React from 'react'
import IntegrityControl from './components/IntegrityControl'
import RiskSection from './components/RiskSection'
import IntegritySystem from './components/IntegritySystem'
import DetectionFlow from './components/DetectionFlow'
import AnomalyCoverage from './components/AnomalyCoverage'
import FinancialImpactEngine from './components/FinancialImpactEngine'
import CounterIntel from './components/CounterIntel'
import HumanCommand from './components/HumanCommand'
import EnterpriseImpact from './components/EnterpriseImpact'
import WhyZoiko from './components/WhyZoiko'
import GetStarted from './components/GetStarted'

export default function page() {
  return (
    <main>
        <IntegrityControl />
        <RiskSection />
        <IntegritySystem />
        <DetectionFlow />
        <AnomalyCoverage />
        <FinancialImpactEngine />
        <CounterIntel />
        <HumanCommand />
        <EnterpriseImpact />
        <WhyZoiko />
        <GetStarted />
    </main>
  )
}
