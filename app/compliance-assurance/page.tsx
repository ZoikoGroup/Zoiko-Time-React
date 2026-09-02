import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import ComplianceHero from "./components/ComplianceHero";
import CertificationBoundary from "./components/CertificationBoundary";
import AssuranceTaxonomy from "./components/AssuranceTaxonomy";
import ArtifactStatusSummary from "./components/ArtifactStatusSummary";
import CoverageStates from "./components/CoverageStates";
import ArtifactRecord from "./components/ArtifactRecord";
import FindingsAndRemediation from "./components/FindingsAndRemediation";
import OwnershipStates from "./components/OwnershipStates";
import WorkerRightsBoundary from "./components/WorkerRightsBoundary";
import AssuranceEvidenceDirectory from "./components/AssuranceEvidenceDirectory";
import RequestAssuranceReview from "./components/RequestAssuranceReview";
import AssuranceChangeLog from "./components/AssuranceChangeLog";
import AssuranceFaq from "./components/AssuranceFaq";

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
  title: "Compliance Assurance & Control Evidence | ZoikoTime",
  description: "Discover ZoikoTime compliance assurance with control mappings, assessment artifacts, findings, remediation records, scope, dates, and stated limitations.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} ca-type`}>
      <ComplianceHero />
      <CertificationBoundary />
      <AssuranceTaxonomy />
      <ArtifactStatusSummary />
      <CoverageStates />
      <ArtifactRecord />
      <FindingsAndRemediation />
      <OwnershipStates />
      <WorkerRightsBoundary />
      <AssuranceEvidenceDirectory />
      <RequestAssuranceReview />
      <AssuranceChangeLog />
      <AssuranceFaq />
    </div>
  );
}
