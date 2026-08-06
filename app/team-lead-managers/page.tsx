import AttendanceCoverageSection from "./components/AttendanceCoverageSection";
import ControlledRecordLifecycle from "./components/ControlledRecordLifecycle";
import CoreManagerWorkflows from "./components/CoreManagerWorkflows";
import DistributedTeamsSection from "./components/DistributedTeamsSection";
import ExceptionResolution from "./components/ExceptionResolution";
import FaqSection from "./components/FaqSection";
import GlobalPolicySection from "./components/GlobalPolicySection";
import ImplementationPhasesSection from "./components/ImplementationPhasesSection";
import IntegrationsDataFlowSection from "./components/IntegrationsDataFlowSection";
import ManagerCoordinationGap from "./components/ManagerCoordinationGap";
import MeasurableOutcomesSection from "./components/MeasurableOutcomesSection";
import PilotScorecardSection from "./components/PilotScorecardSection";
import ProjectLaborCostControl from "./components/ProjectLaborCostControl";
import TeamLeadsHero from "./components/TeamLeadsHero";
import TeamManagementWorkspace from "./components/TeamManagementWorkspace";
import ValuePropsBanner from "./components/ValuePropsBanner";

export default function page(){
    return(
        <main>
            <TeamLeadsHero/>
            <ValuePropsBanner/>
            <ManagerCoordinationGap/>
            <ControlledRecordLifecycle/>
            <CoreManagerWorkflows/>
            <TeamManagementWorkspace/>
            <AttendanceCoverageSection/>
            <ExceptionResolution/>
            <ProjectLaborCostControl/>
            <DistributedTeamsSection/>
            <GlobalPolicySection/>
            <IntegrationsDataFlowSection/>
            <MeasurableOutcomesSection/>
            <PilotScorecardSection/>
            <ImplementationPhasesSection/>
            <FaqSection/>
            </main>
    )
}