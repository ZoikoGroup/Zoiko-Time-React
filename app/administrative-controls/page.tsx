import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import AdminControlsHero from "./components/AdminControlsHero";
import BindingAdministrativeLimit from "./components/BindingAdministrativeLimit";
import ControlDomains from "./components/ControlDomains";
import InheritanceAndPrecedence from "./components/InheritanceAndPrecedence";
import RolesAndChangeLifecycle from "./components/RolesAndChangeLifecycle";
import PolicyAndIntegrationControls from "./components/PolicyAndIntegrationControls";
import WorkerTransparencyAuthority from "./components/WorkerTransparencyAuthority";
import BreakGlassAndExceptions from "./components/BreakGlassAndExceptions";
import ControlEvidenceDirectory from "./components/ControlEvidenceDirectory";
import RequestControlsReview from "./components/RequestControlsReview";
import AdminFaq from "./components/AdminFaq";

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

export const metadata: Metadata = {
  title: "Administrative Controls | ZoikoTime",
  description:
    "Scope, permissions, versions, approvals, effective dates, worker visibility, integrations, emergency access, audit, and rollback. Administration is deny-by-default and attributable — and every material change is reversible without erasing what came before.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} ac-type`}>
      <AdminControlsHero />
      <BindingAdministrativeLimit />
      <ControlDomains />
      <InheritanceAndPrecedence />
      <RolesAndChangeLifecycle />
      <PolicyAndIntegrationControls />
      <WorkerTransparencyAuthority />
      <BreakGlassAndExceptions />
      <ControlEvidenceDirectory />
      <RequestControlsReview />
      <AdminFaq />
    </div>
  );
}
