import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import YourWork from './components/YourWork'
import StayConnected from './components/StayConnected'
import CtaSection from './components/CtaSection'
import CompensationExpectations from './components/CompensationExpectations'
import CurrentOpenings from './components/CurrentOpenings'
import RoleImpactMapping from './components/RoleImpactMapping'

export const metadata: Metadata = {
  title: "ZoiKoTime Careers | Join Our Growing Team",
  description: "Join ZoikoTime and build the future of work with innovative workforce systems, AI solutions, and enterprise technology that drives trust and accountability.",
};

export default function page() {
    return (
        <main>
            <Hero />
            <RoleImpactMapping />
            <CurrentOpenings />
            <YourWork />
            <CompensationExpectations />
            <StayConnected />
            <CtaSection />
        </main>
    )
}
