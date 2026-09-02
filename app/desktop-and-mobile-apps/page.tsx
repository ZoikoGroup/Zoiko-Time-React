import type { Metadata } from "next";
import React from 'react'
import DesktopMobileAppsHero from './components/DesktopMobileAppsHero'
import DesktopMobileApps from './components/DesktopMobileApps'
import ExperienceModel from './components/ExperienceModel'
import RoleBasedEntryPoints from './components/RoleBasedEntryPoints'
import WorkerDesktopWorkspace from './components/WorkerDesktopWorkspace'
import RecordSession from './components/RecordSession'
import AvailabilityRegistry from './components/AvailabilityRegistry'
import ReviewAuthority from './components/ReviewAuthority'
import CrossDeviceContinuity from './components/CrossDeviceContinuity'
import PermissionsCenter from './components/PermissionsCenter'
import PurposefulAlerts from './components/PurposefulAlerts'
import AccessOfflineAccessibility from './components/AccessOfflineAccessibility'
import DesktopMobileAppsFAQ from './components/DesktopMobileAppsFAQ'
import DesktopMobileAppsCTA from './components/DesktopMobileAppsCTA'



export const metadata: Metadata = {
  title: "Desktop & Mobile Time Tracking Apps | ZoikoTime",
  description: "Explore desktop & mobile time tracking apps from ZoikoTime to track employee hours, manage timesheets, and simplify attendance across all devices.",
};

export default function page() {
  return (
    <main>
        <DesktopMobileAppsHero />
        <DesktopMobileApps />
        <ExperienceModel />
        <RoleBasedEntryPoints />
        <WorkerDesktopWorkspace />
        <RecordSession />
        <AvailabilityRegistry />
        <ReviewAuthority />
        <CrossDeviceContinuity />
        <PermissionsCenter />
        <PurposefulAlerts />
        <AccessOfflineAccessibility />
        <DesktopMobileAppsFAQ />
        <DesktopMobileAppsCTA />
    
    </main>
  )
}
