import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import HrHero from "./components/HrHero";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
import HrRecordProblem from "./components/HrRecordProblem";
import HowItWorks from "./components/HowItWorks";
import RoleCoverage from "./components/RoleCoverage";
import ProductProof from "./components/ProductProof";
import WorkerTrust from "./components/WorkerTrust";
import GlobalPolicyControl from "./components/GlobalPolicyControl";
import SystemFit from "./components/SystemFit";
import MeasurableOutcomes from "./components/MeasurableOutcomes";
import Rollout from "./components/Rollout";
import HrFaq from "./components/HrFaq";
import HrCta from "./components/HrCta";

export const metadata: Metadata = {
  title: "For HR & People Teams | ZoikoTime",
  description:
    "Manage attendance, breaks, approvals, payroll inputs, and disputes across office, remote, hybrid, and contractor work — without screenshots, keystroke capture, or invasive monitoring.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} hr-type`}>
      <HrHero />
      <HrRecordProblem />
      <HowItWorks />
      <RoleCoverage />
      <ProductProof />
      <WorkerTrust />
      <GlobalPolicyControl />
      <SystemFit />
      <MeasurableOutcomes />
      <Rollout />
      <HrFaq />
      <HrCta />
    </div>
  );
}
