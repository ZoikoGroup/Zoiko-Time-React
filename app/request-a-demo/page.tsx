import React from 'react'
import ContactHero from './components/ContactHero'
import TrustedStats from './components/TrustedStats'
import PricingSection from './components/PricingSection'
import SecurityCompliance from './components/SecurityCompliance'
import CustomerOutcomes from './components/CustomerOutcomes'
import BuyerEnablement from './components/BuyerEnablement'
import FaqSection from './components/FaqSection'

export default function page() {
  return (
    <main>
        <ContactHero />
        <TrustedStats />
        <PricingSection />
        <SecurityCompliance />
        <CustomerOutcomes />
        <BuyerEnablement />
        <FaqSection />
    </main>
  )
}
