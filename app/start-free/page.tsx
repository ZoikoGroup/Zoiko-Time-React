import React from 'react'
import HeroCTA from './components/HeroCTA'
import Activation from './components/Activation'
import SecurityGovernance from './components/SecurityGovernance'
import Pricing from './components/Pricing'
import Plan from './components/Plan'
import Proof from './components/proof'
import UseCase from './components/usecase'
import FAQ from './components/faq'

export default function page() {
  return (
   <main>
    <HeroCTA />
    <Activation />
    <SecurityGovernance />
    <Pricing />
    <Plan />
    <Proof />
    <UseCase />
    <FAQ />
   </main>
  )
}
