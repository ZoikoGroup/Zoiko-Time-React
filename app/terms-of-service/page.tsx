import type { Metadata } from "next";
import AccountAdministration from "./components/AccountAdministration";
import AgreementSection from "./components/AgreementSection";
import AISection from "./components/AISection";
import ContactSection from "./components/ContactSection";
import CustomerResponsibilitiesSection from "./components/CustomerResponsibilitiesSection";
import DataOwnershipSection from "./components/DataOwnershipSection";
import DefinitionSection from "./components/DefinitionSection";
import DisclaimersSection from "./components/DisclaimersSection";
import Eligibility from "./components/Eligibility";
import Hero from "./components/Hero";
import LiabilitySection from "./components/LiabilitySection";
import LicenseSection from "./components/LicenseSection";
import NoticeBox from "./components/NoticeBox";
import ProviderSection from "./components/provider";
import ResolutionSection from "./components/ResolutionSection";
import RestrictionSection from "./components/RestrictionSection";
import SecuritySection from "./components/SecuritySection";
import WorkerTransparencySection from "./components/WorkerTransparencySection";

export const metadata: Metadata = {
  title: "Terms of Service & Conditions | Zoiko Time",
  description: "Read ZoikoTime Terms of Service covering user rights, responsibilities, acceptable use, and legal conditions for accessing and using the platform.",
};

export default function Page() {
  return (
    <main>
      <Hero />
      <NoticeBox />
      <AgreementSection />
      <DefinitionSection />
      <ProviderSection />
      <Eligibility />
      <AccountAdministration />
      <LicenseSection />
      <RestrictionSection />
      <CustomerResponsibilitiesSection />
      <WorkerTransparencySection />
      <AISection />
      <DataOwnershipSection />
      <SecuritySection />
      <DisclaimersSection />
      <LiabilitySection />
      <ResolutionSection />
      <ContactSection />
    </main>
  );
}
