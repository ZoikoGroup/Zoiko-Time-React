import CapabilityEcosystemSection from "./components/CapabilityEcosystemSection";
import CtaSection from "./components/CtaSection (2)";
import EngineeringGovernanceSection from "./components/EngineeringGovernanceSection";
import FaqSection from "./components/FaqSection";
import GroupBackingSection from "./components/GroupBackingSection";
import Hero from "./components/Hero";
import TrustedTechnologySection from "./components/TrustedTechnologySection";
import WhyBuiltSection from "./components/WhyBuiltSection";

export default function AboutZoikoTech() {
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