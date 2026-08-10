import React from 'react'
import DownloadZoikoTime from './components/DownloadZoikoTime'
import SecureInstallationJourney from './components/SecureInstallationJourney'
import TeamWorkContexts from './components/TeamWorkContexts'
import WhyInstallZoikoTime from './components/WhyInstallZoikoTime'
import CrossDeviceExperience from './components/CrossDeviceExperience'
import SystemRequirements from './components/SystemRequirements'
import EnterpriseDeployment from './components/EnterpriseDeployment'
import UpdatesReleaseNotes from './components/UpdatesReleaseNotes'
import Troubleshooting from './components/Troubleshooting'
import DownloadZoikoTimeFAQ from './components/DownloadZoikoTimeFAQ'
import DownloadZoikoTimeCTA from './components/DownloadZoikoTimeCTA'

export default function page() {
  return (
    <main>
        <DownloadZoikoTime />
        <SecureInstallationJourney />
        <TeamWorkContexts />
        <WhyInstallZoikoTime />
        <CrossDeviceExperience />
        <SystemRequirements />
        <EnterpriseDeployment />
        <UpdatesReleaseNotes />
        <Troubleshooting />
        <DownloadZoikoTimeFAQ />
        <DownloadZoikoTimeCTA />
    </main>
  )
}
