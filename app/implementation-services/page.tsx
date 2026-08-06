import AcceptanceAndHandover from "./components/AcceptanceAndHandover";
import DataMigrationBoundary from "./components/DataMigrationBoundary";
import DeliveryCenter from "./components/DeliveryCenter";
import GovernanceResponsibility from "./components/GovernanceResponsibility";
import GovernedDeliveryCTA from "./components/GovernedDeliveryCTA";
import GovernedImplementation from "./components/GovernedImplementation";
import GovernedLifecycle from "./components/GovernedLifecycle";
import ImplementationFAQ from "./components/ImplementationFAQ";
import ImplementationHero from "./components/ImplementationHero";
import ReadinessAssessment from "./components/ReadinessAssessment";
import ServiceAvailability from "./components/ServiceAvailability";
import StageGateAuthorities from "./components/StageGateAuthorities";
import StructuredImplementation from "./components/StructuredImplementation";
import ValidationTestingEvidence from "./components/ValidationTestingEvidence";
import WorkstreamRegistry from "./components/WorkstreamRegistry";

export default function main(){
    return(
        <main>
            <ImplementationHero/>
            <GovernedImplementation/>
            <StructuredImplementation/>
            <GovernedLifecycle/>
            <DeliveryCenter/>
            <ReadinessAssessment/>
            <WorkstreamRegistry/>
            <GovernanceResponsibility/>
            <DataMigrationBoundary/>
            <StageGateAuthorities/>
            <ValidationTestingEvidence/>
            <AcceptanceAndHandover/>
            <ServiceAvailability/>
            <GovernedDeliveryCTA/>
            <ImplementationFAQ/>
            </main>
    )
}