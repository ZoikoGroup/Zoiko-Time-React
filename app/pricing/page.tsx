import React from 'react'
import Pricing from './components/Pricing'
import Billing from './components/Billing'
import PricingFAQ from './components/PricingFAQ'
import EnterprisePricingCTA from './components/EnterprisePricingCTA'
import PricingHero from './components/pricing-hero'
import BuiltSection from './components/built'

export default function page() {
  return (
    <main>
      <PricingHero/>
        <Pricing />
        <BuiltSection/>
        <Billing />
        <PricingFAQ />
        <EnterprisePricingCTA />
    </main>
  )
}
