import type { Metadata } from "next";
import React from 'react'
import ContactHero from './components/ContactHero'
import TrustedStats from './components/TrustedStats'
import PricingSection from './components/PricingSection'
import SecurityCompliance from './components/SecurityCompliance'
import CustomerOutcomes from './components/CustomerOutcomes'
import BuyerEnablement from './components/BuyerEnablement'
import FaqSection from './components/FaqSection'

export const metadata: Metadata = {
  title: "Request a Product Demo | ZoikoTime",
  description: "Request a ZoikoTime demo to explore verified work records, compliance controls, audit trails, and workforce insights designed for modern business teams.",
};

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
