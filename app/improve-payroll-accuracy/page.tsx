import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import PayrollHero from "./components/PayrollHero";
import PayrollImpact from "./components/PayrollImpact";
import WhyAccuracySlips from "./components/WhyAccuracySlips";
import HowItHelps from "./components/HowItHelps";
import ReadinessView from "./components/ReadinessView";
import AccuracyPath from "./components/AccuracyPath";
import ControlMetrics from "./components/ControlMetrics";
import AccurateNotInvasive from "./components/AccurateNotInvasive";
import PilotScorecard from "./components/PilotScorecard";
import PayrollFaq from "./components/PayrollFaq";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Improve Payroll Accuracy | ZoikoTime",
  description:
    "ZoikoTime helps organizations improve the accuracy of the time, attendance, break, and approval records that reach payroll — with deterministic rules, human review, complete change history, and clean, validated exports.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} ipa-type`}>
      <PayrollHero />
      <PayrollImpact />
      <WhyAccuracySlips />
      <HowItHelps />
      <ReadinessView />
      <AccuracyPath />
      <ControlMetrics />
      <AccurateNotInvasive />
      <PilotScorecard />
      <PayrollFaq />
    </div>
  );
}
