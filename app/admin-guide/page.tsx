import type { Metadata } from "next";
import React from 'react'
import AdminHero from './components/AdminHero'
import AdminResponsibilities from './components/AdminResponsibilities'
import AdminStructure from './components/AdminStructure'
import TimeReporting from './components/TimeReporting'
import SensitiveRecords from './components/SensitiveRecords'
import AdminGuideFAQs from './components/AdminGuideFAQs'
import AdminGuideCTA from './components/AdminGuideCTA'

export const metadata: Metadata = {
  title: "ZoikoTime Admin Guide | Setup & Governance",
  description: "Configure and manage ZoikoTime with guidance on workspace setup, departments, permissions, reporting, time settings, evidence controls, and governance.",
};

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
