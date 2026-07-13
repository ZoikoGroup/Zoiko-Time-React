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
