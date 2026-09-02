import type { Metadata } from "next";
import React from 'react'
import WebinarsEventsHero from './components/WebinarsEventsHero'
import FeaturedEvent from './components/FeaturedEvent'
import UpcomingEvents from './components/UpcomingEvents'
import BrowseByOutcome from './components/BrowseByOutcome'
import BrowseByRole from './components/BrowseByRole'
import EventSeries from './components/EventSeries'
import OnDemandLibrary from './components/OnDemandLibrary'
import EventDetail from './components/EventDetail'
import SpeakerProfiles from './components/SpeakerProfiles'
import MethodologyStandards from './components/MethodologyStandards'
import EventUpdatesCTA from './components/EventUpdatesCTA'
import WebinarsEventsFAQ from './components/WebinarsEventsFAQ'
import GetStartedCTA from './components/GetStartedCTA'

export const metadata: Metadata = {
  title: "ZoikoTime Webinars & Events | Live & On-Demand Sessions",
  description: "Learn how governed time works with ZoikoTime webinars and events. Join live sessions, explore workshops, or watch on-demand recordings anytime.",
};

export default function page() {
  return (
    <main>
        <WebinarsEventsHero />
        <FeaturedEvent />
        <UpcomingEvents />
        <BrowseByOutcome />
        <BrowseByRole />
        <EventSeries />
        <OnDemandLibrary />
        <EventDetail />
        <SpeakerProfiles />
        <MethodologyStandards />
        <EventUpdatesCTA />
        <WebinarsEventsFAQ />
        <GetStartedCTA />
    </main>
  )
}
