import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "System Status & Service Availability | ZoikoTime",
  description: "Stay informed with ZoikoTime system status, including active incidents, planned maintenance, component health, service updates, and verified status history.",
};

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