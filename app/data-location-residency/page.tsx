import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import LocationHero from "./components/LocationHero";
import DefinitionBoundary from "./components/DefinitionBoundary";
import AvailabilityMatrix from "./components/AvailabilityMatrix";
import DataFlowModel from "./components/DataFlowModel";
import CopyTypes from "./components/CopyTypes";
import ProcessingAndTransfers from "./components/ProcessingAndTransfers";
import ExceptionalPaths from "./components/ExceptionalPaths";
import ResponsibilityModel from "./components/ResponsibilityModel";
import ChangeHistory from "./components/ChangeHistory";
import RequestLocationEvidence from "./components/RequestLocationEvidence";
import LocationFaq from "./components/LocationFaq";

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
  title: "Data Location and Residency | ZoikoTime",
  description:
    "Where ZoikoTime data is stored, processed, replicated, backed up, accessed, transferred, recovered, and exported — each location activity with its own scope, status, effective date, limitations, and owner. A map pin is not a residency guarantee.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} dlr-type`}>
      <LocationHero />
      <DefinitionBoundary />
      <AvailabilityMatrix />
      <DataFlowModel />
      <CopyTypes />
      <ProcessingAndTransfers />
      <ExceptionalPaths />
      <ResponsibilityModel />
      <ChangeHistory />
      <RequestLocationEvidence />
      <LocationFaq />
    </div>
  );
}
