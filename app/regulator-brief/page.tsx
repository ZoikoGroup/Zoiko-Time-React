import React from 'react'
import Hero from './components/Hero'
import RegulatorCovers from './components/RegulatorCovers'
import GovernanceNotice from './components/GovernanceNotice'
import GovernanceCTA from './components/GovernanceCTA'

export default function page() {
  return (
    <main>
        <Hero />
        <RegulatorCovers />
        <GovernanceNotice />
        <GovernanceCTA />
    </main>
  )
}
