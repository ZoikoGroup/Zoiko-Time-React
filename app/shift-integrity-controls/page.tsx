import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ShiftHero from "./components/ShiftHero";
import ThreeThings from "./components/ThreeThings";
import OperatingModel from "./components/OperatingModel";
import NeutralStates from "./components/NeutralStates";
import SourceContext from "./components/SourceContext";
import WorkerExperience from "./components/WorkerExperience";
import ReviewQueue from "./components/ReviewQueue";
import ControlCenter from "./components/ControlCenter";
import ScheduleAlignment from "./components/ScheduleAlignment";
import RecordAnatomy from "./components/RecordAnatomy";
import CorrectionWorkflow from "./components/CorrectionWorkflow";
import CommonExceptions from "./components/CommonExceptions";
import AccountabilityBanner from "./components/AccountabilityBanner";
import EvidenceCards from "./components/EvidenceCards";
import ImplementationJourney from "./components/ImplementationJourney";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shift Integrity Controls | ZoikoTime",
  description:
    "ZoikoTime keeps shift records policy-bound and reviewable — with worker transparency, neutral exception states, and traceable evidence at every step.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} sic-type`}>
      <ShiftHero />
      <ThreeThings />
      <OperatingModel />
      <NeutralStates />
      <SourceContext />
      <WorkerExperience />
      <ReviewQueue />
      <ControlCenter />
      <ScheduleAlignment />
      <RecordAnatomy />
      <CorrectionWorkflow />
      <CommonExceptions />
      <AccountabilityBanner />
      <EvidenceCards />
      <ImplementationJourney />
    </div>
  );
}
