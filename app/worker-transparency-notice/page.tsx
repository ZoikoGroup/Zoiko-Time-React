import React from 'react'
import WorkerNoticeHero from './components/WorkerNoticeHero'
import TransparencyBanner from './components/TransparencyBanner'
import PurposeNotice from './components/PurposeNotice'
import DataController from './components/DataController'
import TransparencyPrinciple from './components/TransparencyPrinciple'
import ProcessedInformation from './components/ProcessedInformation'
import NotCollectedData from './components/NotCollectedData'
import MonitoringSection from './components/MonitoringSection'
import AIInsights from './components/AIInsights'
import WorkerRights from './components/WorkerRights'
import DisputesReview from './components/DisputesReview'
import WorkerRepresentatives from './components/WorkerRepresentatives'
import ContactZoikoTime from './components/ContactZoikoTime'


export default function page() {
  return (
    <main>
        <WorkerNoticeHero />
        <TransparencyBanner />
        <PurposeNotice />
        <DataController />
        <TransparencyPrinciple />
        <ProcessedInformation />
        <NotCollectedData />
        <MonitoringSection />
        <AIInsights />
        <WorkerRights />
        <DisputesReview />
        <WorkerRepresentatives />
        <ContactZoikoTime />
    </main>
  )
}
