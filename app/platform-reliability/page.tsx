import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import ReliabilityHero from "./components/ReliabilityHero";
import SourceOfTruthBoundary from "./components/SourceOfTruthBoundary";
import ControlModel from "./components/ControlModel";
import ScopeAndDependencies from "./components/ScopeAndDependencies";
import MeasurementModel from "./components/MeasurementModel";
import OperationalPractice from "./components/OperationalPractice";
import IntegrityAndFreshness from "./components/IntegrityAndFreshness";
import IncidentAndRecovery from "./components/IncidentAndRecovery";
import ReliabilityTelemetry from "./components/ReliabilityTelemetry";
import EvidenceDirectory from "./components/EvidenceDirectory";
import SharedResponsibility from "./components/SharedResponsibility";
import RequestReliabilityReview from "./components/RequestReliabilityReview";
import ReliabilityFaq from "./components/ReliabilityFaq";

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
  title: "Platform Reliability & Recovery Evidence | ZoikoTime",
  description: "Learn how ZoikoTime measures and governs platform reliability with defined services, change safety, dependencies, incident practices, and recovery evidence.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} pr-type`}>
      <ReliabilityHero />
      <SourceOfTruthBoundary />
      <ControlModel />
      <ScopeAndDependencies />
      <MeasurementModel />
      <OperationalPractice />
      <IncidentAndRecovery />
      <IntegrityAndFreshness />
      <ReliabilityTelemetry />
      <EvidenceDirectory />
      <SharedResponsibility />
      <RequestReliabilityReview />
      <ReliabilityFaq />
    </div>
  );
}
