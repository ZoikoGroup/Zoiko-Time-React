import type { Metadata } from "next";
import React from 'react'
import ServiceStatusHero from './components/ServiceStatusHero'
import ComponentStatus from './components/ComponentStatus'
import ActiveIncidents from './components/ActiveIncidents'
import ScheduledMaintenance from './components/ScheduledMaintenance'
import RecentServiceHistory from './components/RecentServiceHistory'
import StatusSubscription from './components/StatusSubscription'
import RelatedResources from './components/RelatedResources'
import StatusNotice from './components/StatusNotice'

export const metadata: Metadata = {
  title: "ZoikoTime Status | Live Service Updates",
  description: "Get real-time ZoikoTime service status updates, including uptime monitoring, maintenance schedules, resolved incidents, and platform availability details.",
};

export default function page() {
  return (
    <main>
        <ServiceStatusHero />
        <ComponentStatus />
        <ActiveIncidents />
        <ScheduledMaintenance />
        <RecentServiceHistory />
        <StatusSubscription />
        <RelatedResources />
        <StatusNotice />
    </main>
  )
}
