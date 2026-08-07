import ActiveIncidentsSection from "./components/ActiveIncidentsSection";
import ComponentsAndRegions from "./components/ComponentsAndRegions";
import IncidentDetailChronology from "./components/IncidentDetailChronology";
import PlannedMaintenance from "./components/PlannedMaintenance";
import RecentHistory from "./components/RecentHistory";
import RouteQuestion from "./components/RouteQuestion";
import ServiceStatusHeader from "./components/ServiceStatusHeader";
import SourceOfTruthBoundary from "./components/SourceOfTruthBoundary";
import SubscribeSection from "./components/SubscribeSection";
import UnknownStatePolicy from "./components/UnknownStatePolicy";

export default function page(){
    return(
        <main>
            <ServiceStatusHeader/>
            <SourceOfTruthBoundary/>
            <ActiveIncidentsSection/>
            <ComponentsAndRegions/>
            <PlannedMaintenance/>
            <IncidentDetailChronology/>
            <RecentHistory/>
            <UnknownStatePolicy/>
            <SubscribeSection/>
            <RouteQuestion/>
            </main>
    )
}