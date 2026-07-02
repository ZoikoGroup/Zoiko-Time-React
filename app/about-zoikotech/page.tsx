import CapabilityEcosystemSection from "./components/CapabilityEcosystemSection";
import CtaSection from "./components/CtaSection";
import EngineeringGovernanceSection from "./components/EngineeringGovernanceSection";
import FaqSection from "./components/FaqSection";
import GroupBackingSection from "./components/GroupBackingSection";
import Hero from "./components/Hero";
import TrustedTechnologySection from "./components/TrustedTechnologySection";
import WhyBuiltSection from "./components/WhyBuiltSection";

export default function AboutZoikoTechPage() {
    return (
        <main>
            <Hero />
            <TrustedTechnologySection />
            <WhyBuiltSection />
            <CapabilityEcosystemSection />
            <EngineeringGovernanceSection />
            <GroupBackingSection />
            <FaqSection />
            <CtaSection />
        </main>
    )
}