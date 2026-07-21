import React from 'react'
import AccessibilityHero from './components/AccessibilityHero'
import AccessCommitment from './components/AccessCommitment'
import AccessStandards from './components/AccessStandards'
import AccessPlatform from './components/AccessPlatform'
import AccessReport from './components/AccessReport'
import AccessFAQ from './components/AccessFAQ'
import AccessCTA from './components/AccessCTA'

export default function page() {
  return (
    <main>
        <AccessibilityHero />
        <AccessCommitment />
        <AccessStandards />
        <AccessPlatform />
        <AccessReport />
        <AccessFAQ />
        <AccessCTA />
    </main>
  )
}
