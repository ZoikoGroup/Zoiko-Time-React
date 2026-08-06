import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import GlobalDeploymentHero from "./components/GlobalDeploymentHero";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
import SixDimensions from "./components/SixDimensions";
import UncontrolledRollout from "./components/UncontrolledRollout";
import DeploymentLifecycle from "./components/DeploymentLifecycle";
import OrganizationalScope from "./components/OrganizationalScope";
import DataLocation from "./components/DataLocation";
import RegionalAvailability from "./components/RegionalAvailability";
import TimeContext from "./components/TimeContext";
import JurisdictionConfiguration from "./components/JurisdictionConfiguration";
import Localization from "./components/Localization";
import PolicyInheritance from "./components/PolicyInheritance";
import IntegrationReadiness from "./components/IntegrationReadiness";
import IdentityAccess from "./components/IdentityAccess";
import RolloutWaves from "./components/RolloutWaves";
import DataMigrationBoundary from "./components/DataMigrationBoundary";
import OperationalMonitoring from "./components/OperationalMonitoring";
import SupportReadiness from "./components/SupportReadiness";
import ReliabilityContinuity from "./components/ReliabilityContinuity";
import WorkerVisibility from "./components/WorkerVisibility";
import TrustRouting from "./components/TrustRouting";
import EvidenceRecords from "./components/EvidenceRecords";
import DeploymentFAQ from "./components/DeploymentFAQ";

export const metadata: Metadata = {
  title: "Global Deployment | ZoikoTime",
  description:
    "Define scope, verify current operability, and configure jurisdiction, data, time, locale, identity, policy, integrations, support, and rollout evidence before activation.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} gd-type`}>
      <GlobalDeploymentHero />
      <SixDimensions />
      <UncontrolledRollout />
      <DeploymentLifecycle />
      <OrganizationalScope />
      <RegionalAvailability />
      <DataLocation />
      <JurisdictionConfiguration />
      <TimeContext />
      <Localization />
      <PolicyInheritance />
       <IdentityAccess />
      <IntegrationReadiness />
      <DataMigrationBoundary />
      <RolloutWaves />
      <OperationalMonitoring />
      <SupportReadiness />
      <ReliabilityContinuity />
      <WorkerVisibility />
      <TrustRouting />
      <EvidenceRecords />
      <DeploymentFAQ />
    </div>
  );
}
