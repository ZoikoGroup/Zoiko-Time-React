import type { Metadata } from "next";
import Hero from "./components/Hero";
import PartnershipSection from "./components/PartnershipSection";
import ValueSection from "./components/ValueSection";
import CTABanner from "./components/CTABanner";
import LifecycleSection from "./components/LifecycleSection";
import OutcomesSection from "./components/OutcomesSection";
import SignalsSection from "./components/SignalsSection";
import ActionSection from "./components/ActionSection";
import RenewalSection from "./components/RenewalSection";
import ProofSection from "./components/ProofSection";
import FAQSection from "./components/FAQSection";

export const metadata: Metadata = {
  title: "ZoikoTime Customer Success | Outcomes, Adoption & Value",
  description: "Turn your ZoikoTime deployment into sustained value with customer success focused on outcomes, adoption, explainable signals, and renewal readiness.",
};

export default function CustomerSuccessPage() {
  return (
    <>
      <Hero />
      <PartnershipSection />
      <ValueSection />
      <CTABanner
        title="From first outcome to renewal — one accountable path."
        subtitle="A success lifecycle that makes value reviewable, not asserted."
        img="/customer-success/image (3).png"
      />
      <LifecycleSection />
      <OutcomesSection />
      <SignalsSection />
      <CTABanner
        title="Success that respects workers."
        subtitle="Aggregate adoption, explainable signals, and the anti-surveillance invariant — always."
        img="/customer-success/image (2).png"
      />
      <ActionSection />
      <RenewalSection />
      <ProofSection />
      <FAQSection />
    </>
  );
}