import type { Metadata } from "next";
import React from 'react'
import GlobalWorkforceHero from './components/GlobalWorkforceHero'
import GlobalCoordinationGap from './components/GlobalCoordinationGap'
import GlobalRequirements from './components/GlobalRequirements'
import GlobalWorkforceControlCenter from './components/GlobalWorkforceControlCenter'
import RoleExperiences from './components/RoleExperiences'
import TimeZoneDateIntegrity from './components/TimeZoneDateIntegrity'
import IntegrationsDeployment from './components/IntegrationsDeployment'
import GlobalImplementationAdoption from './components/GlobalImplementationAdoption'
import CustomerProof from './components/CustomerProof'

export const metadata: Metadata = {
  title: "Global Workforce Management | ZoikoTime",
  description: "Simplify global workforce management with accurate time tracking, attendance, approvals, and local context for better visibility, control, and compliance.",
};

export default function page() {
  return (
    <main>
        <GlobalWorkforceHero />
        <GlobalCoordinationGap />
        <GlobalRequirements />
        <GlobalWorkforceControlCenter />
        <RoleExperiences />
        <TimeZoneDateIntegrity />
        <IntegrationsDeployment />
        <GlobalImplementationAdoption />
        <CustomerProof />
    </main>
  )
}
