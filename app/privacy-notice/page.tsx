import type { Metadata } from "next";
import React from 'react'
import PrivacyNoticeHeader from './components/PrivacyNoticeHeader'
import PrivacyNoticeIntro from './components/PrivacyNoticeIntro'
import PurposeAndScope from './components/PurposeAndScope'
import WhoWeAreContact from './components/WhoWeAreContact'
import RolesControllerProcessor from './components/RolesControllerProcessor'
import PersonalInformationCollected from './components/PersonalInformationCollected'
import WorkforceMonitoringData from './components/WorkforceMonitoringData'
import PurposesForProcessing from './components/PurposesForProcessing'
import ArtificialIntelligenceInsights from './components/ArtificialIntelligenceInsights'
import InternationalTransfers from './components/InternationalTransfers'
import DataRetention from './components/DataRetention'
import YourPrivacyRights from './components/YourPrivacyRights'
import USStatePrivacyNotice from './components/USStatePrivacyNotice'
import UKEEASwissPrivacyRights from './components/UKEEASwissPrivacyRights'
import ChangesToPrivacyNotice from './components/ChangesToPrivacyNotice'
import ContactZoikoTime from './components/ContactZoikoTime'

export const metadata: Metadata = {
  title: "ZoikoTime Privacy Notice | Data Protection & Policy",
  description: "ZoikoTime privacy notice explains how we collect, use, and protect your personal data, cookies, and information when using our platform services.",
};

export default function page() {
  return (
    <>
      <PrivacyNoticeHeader />
      <PrivacyNoticeIntro />
      <PurposeAndScope />
      <WhoWeAreContact />
      <RolesControllerProcessor />
      <PersonalInformationCollected />
      <WorkforceMonitoringData />
      <PurposesForProcessing />
      <ArtificialIntelligenceInsights />
      <InternationalTransfers />
      <DataRetention />
      <YourPrivacyRights />
      <USStatePrivacyNotice />
      <UKEEASwissPrivacyRights />
      <ChangesToPrivacyNotice />
      <ContactZoikoTime />
    </>
  )
}
