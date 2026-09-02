import type { Metadata } from "next";
import React from 'react'
import HeroCTA from './components/HeroCTA'
import Activation from './components/Activation'
import SecurityGovernance from './components/SecurityGovernance'
import Pricing from './components/Pricing'
import Plan from './components/Plan'
import Proof from './components/proof'
import UseCase from './components/usecase'
import FAQ from './components/faq'

export const metadata: Metadata = {
  title: "Start Free with ZoikoTime | 30-Day Free Trial",
  description: "Start ZoikoTime free for 30 days with no credit card. Create a workspace for verified time records, team accountability, reports, and audit-ready evidence.",
};

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
