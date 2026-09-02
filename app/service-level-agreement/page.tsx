import type { Metadata } from "next";
import React from 'react'
import SLAHero from './components/SLAHero'
import SLANotice from './components/SLANotice'
import PurposeAndLegalStatus from './components/PurposeAndLegalStatus'
import SLAScopeAndServiceBoundaries from './components/SLAScopeAndServiceBoundaries'
import Availability from './components/Availability'
import Measurement from './components/Measurement'
import Severity from './components/Severity'
import ServiceCredits from './components/ServiceCredits'
import Termination from './components/Termination'
import Precedence from './components/Precedence'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) | ZoikoTime",
  description: "Learn about the ZoikoTime Service Level Agreement, covering uptime targets, support SLAs, incident response rules & service credits for production services.",
};

export default function page() {
  return (
    <main> 
        <SLAHero />
        <SLANotice />
        <PurposeAndLegalStatus />
        <SLAScopeAndServiceBoundaries />
        <Availability />
        <Measurement />
        <Severity />
        <ServiceCredits />
        <Termination />
        <Precedence />
        <Contact />
    </main>
  )
}
