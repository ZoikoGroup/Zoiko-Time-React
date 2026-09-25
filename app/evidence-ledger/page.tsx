import type { Metadata } from "next";

import { inter } from "./fonts";
import EvidenceHero from "./components/EvidenceHero";
import LedgerVsActivityLog from "./components/LedgerVsActivityLog";
import ContinuityLifecycle from "./components/ContinuityLifecycle";
import EventAnatomy from "./components/EventAnatomy";
import RecordLineage from "./components/RecordLineage";
import WorkerVisibility from "./components/WorkerVisibility";
import HumanReview from "./components/HumanReview";
import EvidenceAvailability from "./components/EvidenceAvailability";
import AccessPrivacyRetention from "./components/AccessPrivacyRetention";
import GovernedExport from "./components/GovernedExport";
import ProductUi from "./components/ProductUi";
import SystemBoundaries from "./components/SystemBoundaries";
import EnterpriseReadiness from "./components/EnterpriseReadiness";
import EvidenceCta from "./components/EvidenceCta";
import EvidenceLedgerFAQ from "./components/EvidenceLedgerFAQ";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Evidence Ledger for Workforce Records | ZoikoTime",
  description: "Build traceable workforce records with ZoikoTime Evidence Ledger. Connect every material change to its evidence, review, approval, release & reconciliation.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://zoikotime.com/evidence-ledger/",
  "name": "ZoikoTime Evidence Ledger"
};

export default function Page() {
  return (
    <div className={inter.className}>
      <JsonLd data={jsonLd} />
      <EvidenceHero />
      <LedgerVsActivityLog />
      <ContinuityLifecycle />
      <EventAnatomy />
      <RecordLineage />
      <WorkerVisibility />
      <HumanReview />
      <EvidenceAvailability />
      <AccessPrivacyRetention />
      <GovernedExport />
      <ProductUi />
      <SystemBoundaries />
      <EnterpriseReadiness />
      <EvidenceCta />
      <EvidenceLedgerFAQ />
    </div>
  );
}
