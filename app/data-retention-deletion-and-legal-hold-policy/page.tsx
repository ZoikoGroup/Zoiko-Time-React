import React from 'react'
import DataRetentionHero from './components/DataRetentionHero'
import PolicyNotice from './components/PolicyNotice'
import PurposeLegalFunction from './components/PurposeLegalFunction'
import Scope from './components/Scope'
import RetentionPrinciples from './components/RetentionPrinciples'
import DefaultRetentionSchedule from './components/DefaultRetentionSchedule'
import LegalHold from './components/LegalHold'
import AuditIntegrity from './components/AuditIntegrity'
import BackupsDisasterRecovery from './components/BackupsDisasterRecovery'
import ContactZoikoTime from './components/ContactZoikoTime'

export default function page() {
  return (
    <main>
        <DataRetentionHero />
        <PolicyNotice />
        <PurposeLegalFunction />
        <Scope />
        <RetentionPrinciples />
        <DefaultRetentionSchedule />
        <LegalHold />
        <AuditIntegrity />
        <BackupsDisasterRecovery />
        <ContactZoikoTime />
    </main>
  )
}
