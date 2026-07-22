import React from 'react'
import CustomQuote from './components/CustomQuote'
import QuoteFactors from './components/QuoteFactors'
import PricingCTA from './components/PricingCTA'

export default function page() {
  return (
    <main>
        <CustomQuote />
        <QuoteFactors />
        <PricingCTA />
    </main>
  )
}
