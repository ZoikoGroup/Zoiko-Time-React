import React from 'react'
import DataProcessing from './components/DataProcessing'
import DataProcessingFlow from './components/DataProcessingFlow'
import ProcessingScope from './components/ProcessingScope'
import SecurityInfrastructure from './components/SecurityInfrastructure'
import SubProcessorTransparency from './components/SubProcessorTransparency'
import CrossBorderDataTransfer from './components/CrossBorderDataTransfer'
import DataSubjectRights from './components/DataSubjectRights'
import ConfigurableRetentionDeletion from './components/ConfigurableRetentionDeletion'
import CompliancePackDownload from './components/CompliancePackDownload'
import DPAVersionControl from './components/DPAVersionControl'
import PrivacyTeamAccess from './components/PrivacyTeamAccess'
import DataProcessingConfidence from './components/DataProcessingConfidence'

export default function page() {
  return (
    <main>
        <DataProcessing />
        <DataProcessingFlow />
        <ProcessingScope />
        <SecurityInfrastructure />
        <SubProcessorTransparency />
        <CrossBorderDataTransfer />
        <DataSubjectRights />
        <ConfigurableRetentionDeletion />
        <CompliancePackDownload />
        <DPAVersionControl />
        <PrivacyTeamAccess />
        <DataProcessingConfidence />
    </main>
  )
}
