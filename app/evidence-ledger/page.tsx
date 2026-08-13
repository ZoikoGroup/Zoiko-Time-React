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

export const metadata: Metadata = {
  title: "Evidence Ledger | ZoikoTime",
  description:
    "Every material workforce-record change — source event, classification, correction, review, approval, release, and reconciliation — connected and attributable, with explicit evidence availability, worker correction rights, and governed export.",
};

export default function Page() {
  return (
    <div className={inter.className}>
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
    </div>
  );
}
