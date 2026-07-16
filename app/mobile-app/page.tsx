import React from 'react'
import MobileAppHero from './components/MobileAppHero'
import RolloutStatus from './components/RolloutStatus'
import WhoItsFor from './components/WhoItsFor'
import WorkerActions from './components/WorkerActions'
import ManagerActions from './components/ManagerActions'
import PrivacyBoundary from './components/PrivacyBoundary'
import MobilePermissions from './components/MobilePermissions'
import Connectivity from './components/Connectivity'
import DeviceReadiness from './components/DeviceReadiness'
import AccessPathways from './components/AccessPathways'
import AppScreensPreview from './components/AppScreensPreview'
import EnterpriseControls from './components/EnterpriseControls'
import RoleAwareNotifications from './components/RoleAwareNotifications'
import AccessibilitySection from './components/AccessibilitySection'
import MobileAppFAQs from './components/MobileAppFAQs'
import MobileWorkforceAssurance from './components/MobileWorkforceAssurance'

export default function page() {
  return (
    <main>
        <MobileAppHero />
        <RolloutStatus />
        <WhoItsFor />
        <WorkerActions />
        <ManagerActions />
        <PrivacyBoundary />
        <MobilePermissions />
        <Connectivity />
        <DeviceReadiness />
        <AccessPathways />
        <AppScreensPreview />
        <EnterpriseControls />
        <RoleAwareNotifications />
        <AccessibilitySection />
        <MobileAppFAQs />
        <MobileWorkforceAssurance />
    </main>
  )
}
