import type { Metadata } from "next";
import React from 'react'
import SecurityPositioning from './components/SecurityPositioning'
import Hero from './components/Hero'
import ArchitectureTable from './components/ArchitectureTable'
import SharedResponsibility from './components/SharedResponsibility'
import IdentityAccess from './components/IdentityAccess'
import DataProtection from './components/DataProtection'
import ThreatModel from './components/ThreatModel'
import IncidentResponse from './components/IncidentResponse'
import ControlAlignment from './components/ControlAlignment'
import SecurityResources from './components/SecurityResources'
import SecurityContact from './components/SecurityContact'
import EnterpriseConfidence from './components/EnterpriseConfidence'

export const metadata: Metadata = {
  title: "Security Engineered for Enterprise Assurance | ZoikoTime",
  description: "Discover how ZoikoTime protects workforce data with security-first architecture, policy-driven access controls, monitoring & enterprise security practices.",
};

export default function page() {
  return (
    <main>
        <Hero />
        <SecurityPositioning />
        <ArchitectureTable />
        <SharedResponsibility />
        <IdentityAccess />
        <DataProtection />
        <ThreatModel />
        <IncidentResponse />
        <ControlAlignment />
        <SecurityResources />
        <SecurityContact />
        <EnterpriseConfidence />
    </main>
  )
}
