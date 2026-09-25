import Hero from "./components/Hero";
import BenefitsBar from "./components/BenefitsBar";
import ProblemSection from "./components/ProblemSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ModulesSection from "./components/ModulesSection";
import WorkflowSection from "./components/WorkflowSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import PricingPage from "./components/pricing";
import HomeFAQ from "./components/HomeFAQ";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-gray-900 transition-colors">
      <Hero />
      <BenefitsBar />
      <ProblemSection />
      <CapabilitiesSection />
      <ModulesSection />
      <PricingPage />
      <WorkflowSection />
      <TestimonialsSection />
      <CTASection />
      <HomeFAQ />
    </main>
  );
}