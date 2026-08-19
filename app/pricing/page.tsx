import React from 'react'
import PricingHero from './components/PricingHero'
import PricingPlans from './components/PricingPlans'
import PricingFAQ from './components/PricingFAQ'
import BuiltSection from './components/built'
import PricingSection from './components/Pricing'
import BillingClearly from './components/BillingClearly'
import PricingEnterpriseCTA from './components/PricingEnterpriseCTA'

export default function page() {
  return (
    <main>
      <PricingHero/>
        <PricingSection/>
        <BuiltSection/>
        <BillingClearly/>
        <PricingFAQ />
        <PricingEnterpriseCTA />
    </main>
  )
}
