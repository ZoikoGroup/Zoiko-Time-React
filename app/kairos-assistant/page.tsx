import AdministratorGovernance from "./components/AdministratorGovernance";
import AnswerContract from "./components/AnswerContract";
import BindingProductInvariant from "./components/BindingProductInvariant";
import DeterministicClassification from "./components/DeterministicClassification";
import EvidenceAndGovernance from "./components/EvidenceAndGovernance";
import EvidenceDrawer from "./components/EvidenceDrawer";
import FaqSection from "./components/FaqSection";
import HumanHandoffAndLimits from "./components/HumanHandoffAndLimits";
import InspectableByDesignHero from "./components/InspectableByDesignHero";
import InteractionModel from "./components/InteractionModel";
import KairosGovernanceOverview from "./components/KairosGovernanceOverview";
import KairosHeroSection from "./components/KairosHeroSection";
import PromptWordingGrantsNothing from "./components/PromptWordingGrantsNothing";
import QuestionComposer from "./components/QuestionComposer";
import QuestionDomains from "./components/QuestionDomains";
import TaskFirstRoutes from "./components/TaskFirstRoutes";

export default function page(){
    return(
        <main>
            <KairosHeroSection/>
            <KairosGovernanceOverview/>
            <BindingProductInvariant/>
            <InteractionModel/>
            <PromptWordingGrantsNothing/>
            <QuestionComposer/>
            <AnswerContract/>
            <EvidenceDrawer/>
            <DeterministicClassification/>
            <QuestionDomains/>
            <AdministratorGovernance/>
            <HumanHandoffAndLimits/>
            <EvidenceAndGovernance/>
            <TaskFirstRoutes/>
            <InspectableByDesignHero/>  
            <FaqSection/>
            </main>
    )
}