import type { Metadata } from "next";
import React from 'react'
import CustomQuote from './components/CustomQuote'
import QuoteFactors from './components/QuoteFactors'
import PricingCTA from './components/PricingCTA'

export const metadata: Metadata = {
  title: "See Your Custom ZoikoTime Quote | Tailored Pricing",
  description: "See your custom ZoikoTime quote with pricing tailored to workforce size, countries, governance requirements, rollout plans, and your approval process.",
};

export default function page() {
  return (
    <main>
        <CustomQuote />
        <QuoteFactors />
        <PricingCTA />
    </main>
  )
}
