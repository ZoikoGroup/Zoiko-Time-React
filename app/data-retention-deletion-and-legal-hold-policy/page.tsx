import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Data Retention, Deletion & Legal Hold Policy | ZoikoTime",
  description: "Learn how ZoikoTime manages data retention, secure deletion, and legal holds to protect information, ensure compliance & support responsible data handling.",
};

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
