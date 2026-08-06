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
