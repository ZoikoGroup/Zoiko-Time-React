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
