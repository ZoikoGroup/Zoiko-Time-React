import React from 'react'
import PricingHero from './components/PricingHero'
import PricingPlans from './components/PricingPlans'
import BillingClearly from './components/BillingClearly'
import PricingFAQ from './components/PricingFAQ'
import PricingEnterpriseCTA from './components/PricingEnterpriseCTA'

export default function page() {
  return (
    <main>
        <PricingHero />
        <PricingPlans />
        <BillingClearly />
        <PricingFAQ />
        <PricingEnterpriseCTA />
    </main>
  )
}
