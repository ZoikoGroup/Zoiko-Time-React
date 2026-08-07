import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import TrainingHero from "./components/TrainingHero";
import ExecutiveBenefits from "./components/ExecutiveBenefits";
import WhyItMatters from "./components/WhyItMatters";
import BuiltToEngage from "./components/BuiltToEngage";
import AdoptionLifecycle from "./components/AdoptionLifecycle";
import LearningPrograms from "./components/LearningPrograms";
import MeetLearners from "./components/MeetLearners";
import ContentLibrary from "./components/ContentLibrary";
import LearnByDoing from "./components/LearnByDoing";
import MakeItStick from "./components/MakeItStick";
import EnterpriseTrust from "./components/EnterpriseTrust";
import CustomerSuccess from "./components/CustomerSuccess";
import TrainingFaq from "./components/TrainingFaq";
import TrainingCta from "./components/TrainingCta";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Training & Adoption | ZoikoTime",
  description:
    "Help administrators, managers, and workers succeed with ZoikoTime through structured learning programs, guided practice, certification, and continuous adoption support — measurable, accessible, and governed.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} ta-type`}>
      <TrainingHero />
      <ExecutiveBenefits />
      <WhyItMatters />
      <BuiltToEngage />
      <AdoptionLifecycle />
      <LearningPrograms />
      <MeetLearners />
      <ContentLibrary />
      <LearnByDoing />
      <MakeItStick />
      <EnterpriseTrust />
      <CustomerSuccess />
      <TrainingFaq />
      <TrainingCta />
    </div>
  );
}
