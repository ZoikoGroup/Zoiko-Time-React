import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";

import SemaIntegrationHero from "./components/SemaIntegrationHero";
import ProductRelationship from "./components/ProductRelationship";
import ConnectionModel from "./components/ConnectionModel";
import AvailabilityAndAudiences from "./components/AvailabilityAndAudiences";
import MappingRecord from "./components/MappingRecord";
import BridgeGovernance from "./components/BridgeGovernance";
import SetupStages from "./components/SetupStages";
import ReviewAndHealth from "./components/ReviewAndHealth";
import ExceptionHandling from "./components/ExceptionHandling";
import MeetingContextAndAi from "./components/MeetingContextAndAi";
import ParticipantTransparency from "./components/ParticipantTransparency";
import EvidenceRoutes from "./components/EvidenceRoutes";
import RolloutAndCommercial from "./components/RolloutAndCommercial";
import IntegrationCta from "./components/IntegrationCta";
import IntegrationFaq from "./components/IntegrationFaq";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});



export default function Page() {
  return (
    <div className={`${figtree.variable} ${poppins.variable} zsi-type`}>
      <SemaIntegrationHero />
      <ProductRelationship />
      <ConnectionModel />
      <AvailabilityAndAudiences />
      <MappingRecord />
      <BridgeGovernance />
      <SetupStages />
      <ReviewAndHealth />
      <ExceptionHandling />
      <MeetingContextAndAi />
      <ParticipantTransparency />
      <EvidenceRoutes />
      <RolloutAndCommercial />
      <IntegrationCta />
      <IntegrationFaq />
    </div>
  );
}
