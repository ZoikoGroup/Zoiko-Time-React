import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ZoikoTime Privacy Controls | Data Protection Center",
  description: "ZoikoTime privacy controls let you manage data access, user permissions, and security settings with enterprise-grade privacy and transparent governance.",
};

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
