import React from 'react'
import AdminHero from './components/AdminHero'
import AdminResponsibilities from './components/AdminResponsibilities'
import AdminStructure from './components/AdminStructure'
import TimeReporting from './components/TimeReporting'
import SensitiveRecords from './components/SensitiveRecords'
import AdminGuideFAQs from './components/AdminGuideFAQs'
import AdminGuideCTA from './components/AdminGuideCTA'

export default function page() {
  return (
    <main>
        <AdminHero />
        <AdminResponsibilities />
        <AdminStructure />
        <TimeReporting />
        <SensitiveRecords />
        <AdminGuideFAQs />
        <AdminGuideCTA />
    </main>
  )
}
