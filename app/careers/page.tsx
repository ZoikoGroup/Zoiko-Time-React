import React from 'react'
import Hero from './components/Hero'
import YourWork from './components/YourWork'
import StayConnected from './components/StayConnected'
import CtaSection from './components/CtaSection'
import CompensationExpectations from './components/CompensationExpectations'
import CurrentOpenings from './components/CurrentOpenings'
import RoleImpactMapping from './components/RoleImpactMapping'

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
