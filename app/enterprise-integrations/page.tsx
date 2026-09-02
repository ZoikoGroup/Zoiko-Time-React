import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import IntegrationsHero from "./components/IntegrationsHero";
import ShortAnswer from "./components/ShortAnswer";
import WhyItMatters from "./components/WhyItMatters";
import ConnectionLifecycle from "./components/ConnectionLifecycle";
import GovernanceCenter from "./components/GovernanceCenter";
import MappingAndTesting from "./components/MappingAndTesting";
import ConnectionStates from "./components/ConnectionStates";
import IntegrationPatterns from "./components/IntegrationPatterns";
import DeliveryEvidence from "./components/DeliveryEvidence";
import SharedResponsibility from "./components/SharedResponsibility";
import NotSurveillance from "./components/NotSurveillance";
import IntegrationsFaq from "./components/IntegrationsFaq";
import IntegrationsCta from "./components/IntegrationsCta";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enterprise Integrations & Data Governance | ZoikoTime",
  description: "Manage enterprise integrations & data governance with ZoikoTime. Govern authorization, mappings, testing, activation, reconciliation, and traceable changes.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} ei-type`}>
      <IntegrationsHero />
      <ShortAnswer />
      <WhyItMatters />
      <ConnectionLifecycle />
      <GovernanceCenter />
      <MappingAndTesting />
      <ConnectionStates />
      <IntegrationPatterns />
      <DeliveryEvidence />
      <SharedResponsibility />
      <NotSurveillance />
      <IntegrationsFaq />
      <IntegrationsCta />
    </div>
  );
}
