import type { Metadata } from "next";
import React from 'react'
import PricingHero from './components/PricingHero'
import PricingPlans from './components/PricingPlans'
import PricingFAQ from './components/PricingFAQ'
import BuiltSection from './components/built'
import PricingSection from './components/Pricing'
import BillingClearly from './components/BillingClearly'
import PricingEnterpriseCTA from './components/PricingEnterpriseCTA'

export const metadata: Metadata = {
  title: "ZoikoTime Pricing | Workforce Assurance Plans",
  description: "Discover ZoikoTime pricing for workforce assurance with flexible plans, transparent per-user pricing, trusted records, governance, and a 14-day free trial.",
};

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
