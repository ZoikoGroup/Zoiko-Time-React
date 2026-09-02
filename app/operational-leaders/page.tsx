import type { Metadata } from "next";
import AttendanceCoverage from "./components/AttendanceCoverage";
import ControlledRecordLifecycle from "./components/ControlledRecordLifecycle";
import CoreOperationalWorkflows from "./components/CoreOperationalWorkflows";
import ExceptionResolution from "./components/ExceptionResolution";
import FAQSection from "./components/FAQSection";
import FinalConversionBanner from "./components/FinalConversionBanner";
import GlobalPolicyControls from "./components/GlobalPolicyControls";
import ImplementationPhases from "./components/ImplementationPhases";
import IntegrationsDataFlow from "./components/IntegrationsDataFlow";
import MeasurableOutcomes from "./components/MeasurableOutcomes";
import OperationalControlGap from "./components/OperationalControlGap";
import OperationalLeadersHero from "./components/OperationalLeadersHero";
import OperationsCommandCenter from "./components/OperationsCommandCenter";
import PilotScorecard from "./components/PilotScorecard";
import ProjectTimeCostControl from "./components/ProjectTimeCostControl";
import RemoteDistributedOperations from "./components/RemoteDistributedOperations";
import ValueStrip from "./components/ValueStrip";

export const metadata: Metadata = {
  title: "Workforce Management for Operational Leaders | ZoikoTime",
  description: "ZoikoTime workforce management system helps operational leaders manage time, attendance, scheduling, productivity, and workforce costs with greater control.",
};

export default function Page() {
  return (
    <main>
      <OperationalLeadersHero />
      <ValueStrip />
      <OperationalControlGap />
      <ControlledRecordLifecycle />
      <CoreOperationalWorkflows />
      <OperationsCommandCenter />
      <AttendanceCoverage />
      <ExceptionResolution />
      <ProjectTimeCostControl />
      <RemoteDistributedOperations />
      <GlobalPolicyControls />
      <IntegrationsDataFlow />
      <MeasurableOutcomes />
      <PilotScorecard />
      <ImplementationPhases />
      <FAQSection />
      <FinalConversionBanner />
    </main>
  );
}
