import AdministrationSection from "./components/AdministrationSection";
import BreakRestHeroSection from "./components/BreakRestHeroSection";
import CtaSection from "./components/CtaSection";
import ExceptionsRecoverySection from "./components/ExceptionsRecoverySection";
import FAQSection from "./components/FAQSection";
import GovernanceAndBreakRulesSection from "./components/GovernanceAndBreakRulesSection";
import ImplementationSection from "./components/ImplementationSection";
import OperatingModelSection from "./components/OperatingModelSection";
import ProductBoundariesSection from "./components/ProductBoundariesSection";
import ReportingTrustSection from "./components/ReportingTrustSection";
import ReviewerExperienceSection from "./components/ReviewerExperienceSection";
import SourcePolicyContextSection from "./components/SourcePolicyContextSection";
import StateModelSection from "./components/StateModelSection";
import WorkerExperienceSection from "./components/WorkerExperienceSection";

export default function(){
    return (
        <main>
            <BreakRestHeroSection/>
            <GovernanceAndBreakRulesSection/>
            <OperatingModelSection/>
            <StateModelSection/>
            <SourcePolicyContextSection/>
            <WorkerExperienceSection/>
            <ReviewerExperienceSection/>
            <AdministrationSection/>
            <ExceptionsRecoverySection/>
            <ProductBoundariesSection/>
            <ReportingTrustSection/>
            <ImplementationSection/>
            <CtaSection/>
            <FAQSection/>
            
            </main>
    )
}