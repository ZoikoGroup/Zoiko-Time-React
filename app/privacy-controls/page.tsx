import React from 'react'
import PrivacyControls from './components/PrivacyControls'
import PrivacyPositioning from './components/PrivacyPositioning'
import LawfulBasis from './components/LawfulBasis'
import RolesResponsibilities from './components/RolesResponsibilities'
import DataLifecycle from './components/DataLifecycle'
import AccessModel from './components/AccessModel'
import DataSubjectRights from './components/DataSubjectRights'
import PrivacyFrameworkAlignment from './components/PrivacyFrameworkAlignment'
import TransparencySystem from './components/TransparencySystem'
import PrivacyResources from './components/PrivacyResources'
import PrivacyContact from './components/PrivacyContact'
import PrivacyCTA from './components/PrivacyCTA'

export default function page() {
  return (
    <main>
        <PrivacyControls />
        <PrivacyPositioning />
        <LawfulBasis />
        <RolesResponsibilities />
        <DataLifecycle />
        <AccessModel />
        <DataSubjectRights />
        <PrivacyFrameworkAlignment />
        <TransparencySystem />
        <PrivacyResources />
        <PrivacyContact />
        <PrivacyCTA />
    </main>
  )
}
