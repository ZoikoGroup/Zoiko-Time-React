import type { Metadata } from "next";
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
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Kairos Assistant - AI Workforce Assistant | ZoikoTime",
  description: "Kairos Assistant helps authorized users ask governed questions and understand ZoikoTime workforce data with evidence, scope, timing, limits & human control.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://zoikotime.com/kairos-assistant/",
  "name": "Kairos Assistant"
};

export default function page(){
    return(
        <main>
          <JsonLd data={jsonLd} />
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