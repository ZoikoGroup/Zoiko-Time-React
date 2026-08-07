import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import ConsultationHero from "./components/ConsultationHero";
import LegalBoundary from "./components/LegalBoundary";
import TrustCommitments from "./components/TrustCommitments";
import ResourceDirectory from "./components/ResourceDirectory";
import ResourceDetail from "./components/ResourceDetail";
import ConsultationLifecycle from "./components/ConsultationLifecycle";
import ScopeFirst from "./components/ScopeFirst";
import PackManifest from "./components/PackManifest";
import AttributableDialogue from "./components/AttributableDialogue";
import CommitmentRegister from "./components/CommitmentRegister";
import RolloutGates from "./components/RolloutGates";
import ConsultationFaq from "./components/ConsultationFaq";
import ConsultationCta from "./components/ConsultationCta";

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
  title: "Works-Council & Consultation Resources | ZoikoTime",
  description:
    "Versioned product and governance materials for employers, representative bodies, advisors, and workers — each with its scope, owner, review date, and stated limitations.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} wcc-type`}>
      {/* 1 */} <ConsultationHero />
      {/* 2 */} <LegalBoundary />
      {/* 3 */} <TrustCommitments />
      {/* 4 */} <ResourceDirectory />
      {/* 5 */} <ResourceDetail />
      {/* 6 */} <ConsultationLifecycle />
      {/* 7 */} <ScopeFirst />
      {/* 8 */} <PackManifest />
      {/* 9 */} <AttributableDialogue />
      {/* 10 */} <CommitmentRegister />
      {/* 11 */} <RolloutGates />
      {/* 12 */} <ConsultationFaq />
      {/* 13 */} <ConsultationCta />
    </div>
  );
}
