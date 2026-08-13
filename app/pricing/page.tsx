import React from 'react'
import Pricing from './components/Pricing'
import Billing from './components/Billing'
import PricingFAQ from './components/PricingFAQ'
import EnterprisePricingCTA from './components/EnterprisePricingCTA'

export default function page() {
  return (
    <main>
        <Pricing />
        <Billing />
        <PricingFAQ />
        <EnterprisePricingCTA />
    </main>
  )
}
