import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import PrivacyHero from "./components/PrivacyHero";
import SurveillanceBoundary from "./components/SurveillanceBoundary";
import DataLifecycle from "./components/DataLifecycle";
import DataCategories from "./components/DataCategories";
import RolesAuthority from "./components/RolesAuthority";
import WorkerVisibility from "./components/WorkerVisibility";
import PracticeAreas from "./components/PracticeAreas";
import AutomationBoundary from "./components/AutomationBoundary";
import PracticesDirectory from "./components/PracticesDirectory";
import RequestRouting from "./components/RequestRouting";
import DesignAndIncidents from "./components/DesignAndIncidents";
import PrivacyFaq from "./components/PrivacyFaq";

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
  title: "Workforce Data Privacy & Controls | ZoikoTime",
  description: "Learn how ZoikoTime handles workforce data with transparency, privacy controls, data rights, retention practices, and safeguards designed to protect users.",
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} pv-type`}>
      <PrivacyHero />
      <SurveillanceBoundary />
      <DataLifecycle />
      <DataCategories />
      <RolesAuthority />
      <WorkerVisibility />
      <PracticeAreas />
      <AutomationBoundary />
      <PracticesDirectory />
      <RequestRouting />
      <DesignAndIncidents />
      <PrivacyFaq />
    </div>
  );
}
