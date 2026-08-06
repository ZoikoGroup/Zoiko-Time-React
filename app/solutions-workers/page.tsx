import AdoptionAndProofSection from "./components/AdoptionAndProofSection";
import AfterApprovalSection from "./components/AfterApprovalSection";
import AvailabilityRegistrySection from "./components/AvailabilityRegistrySection";
import CaptureAcrossDevicesSection from "./components/CaptureAcrossDevicesSection";
import DataTransparencySection from "./components/DataTransparencySection";
import FaqSection from "./components/FaqSection";
import GlobalAccessAndInclusionSection from "./components/GlobalAccessAndInclusionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import HumanInCommandSection from "./components/HumanInCommandSection";
import ReviewAndCorrectSection from "./components/ReviewAndCorrectSection";
import SecurityPrivacySupportSection from "./components/SecurityPrivacySupportSection";
import WhyItMattersSection from "./components/WhyItMattersSection";
import WorkerHeroSection from "./components/WorkerHeroSection";
import WorkerWorkspaceSection from "./components/WorkerWorkspaceSection";
import WorkPatternsSection from "./components/WorkPatternsSection";

export default function Page() {
  return (
    <main>
      <WorkerHeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <WorkerWorkspaceSection />
      <CaptureAcrossDevicesSection />
      <ReviewAndCorrectSection />
      <DataTransparencySection />
      <WorkPatternsSection />
      <HumanInCommandSection />
      <GlobalAccessAndInclusionSection />
      <AvailabilityRegistrySection />
      <SecurityPrivacySupportSection />
      <AfterApprovalSection />
      <AdoptionAndProofSection />
      <FaqSection />
    </main>
  );
}
