import React from 'react'
import SemaTimeHero from './components/SemaTimeHero'
import SemaZoikoFlow from './components/SemaZoikoFlow'
import ConnectionModel from './components/ConnectionModel'
import BridgeArchitecture from './components/BridgeArchitecture'
import AvailabilityStatus from './components/AvailabilityStatus'
import RoleEntryPoints from './components/RoleEntryPoints'
import WsMap from './components/WsMap'
import OrgMap from './components/OrgMap'
import CtxReg from './components/CtxReg'
import GovMode from './components/GovMode'
import ConnectionStages from './components/ConnectionStages'
import TestingActivation from './components/TestingActivation'
import ReviewBeforeSync from './components/ReviewBeforeSync'
import ConnectionHealth from './components/ConnectionHealth'
import ExceptionsTable from './components/ExceptionsTable'
import MeetingContext from './components/MeetingContext'
import AiGovernance from './components/AiGovernance'
import WorkforceTruth from './components/WorkforceTruth'
import Transparency from './components/Transparency'
import EvidenceEvents from './components/EvidenceEvents'
import TrustAssurance from './components/TrustAssurance'
import ImplementationLifecycle from './components/ImplementationLifecycle'
import CommercialEvaluation from './components/CommercialEvaluation'
import GovernedConnectionCTA from './components/GovernedConnectionCTA'
import IntegrationFAQ from './components/IntegrationFAQ'

export default function page() {
  return (
    <main>
        <SemaTimeHero />
        <SemaZoikoFlow />
        <ConnectionModel />
        <BridgeArchitecture />
        <AvailabilityStatus />
        <RoleEntryPoints />
        <WsMap />
        <OrgMap />
        <CtxReg />
        <GovMode />
        <ConnectionStages />
        <TestingActivation />
        <ReviewBeforeSync />
        <ConnectionHealth />
        <ExceptionsTable />
        <MeetingContext />
        <AiGovernance />
        <WorkforceTruth />
        <Transparency />
        <EvidenceEvents />
        <TrustAssurance />
        <ImplementationLifecycle />
        <CommercialEvaluation />
        <GovernedConnectionCTA />
        <IntegrationFAQ />
    </main>
  )
}
