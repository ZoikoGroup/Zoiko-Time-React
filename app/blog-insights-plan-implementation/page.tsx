"use client";

import React from "react";
import ImplementationHero from "./components/ImplementationHero";
import GovernedStages from "./components/GovernedStages";
import GradientCallout from "./components/GradientCallout";
import ScopeVocabularyTable from "./components/ScopeVocabularyTable";
import DecisionRightsTable from "./components/DecisionRightsTable";
import MovingParts from "./components/MovingParts";
import ReadinessAndChangeControl from "./components/ReadinessAndChangeControl";
import StakeholderMatrix from "./components/StakeholderMatrix";
import TwoClearPaths from "./components/TwoClearPaths";
import AdjacentAuthorities from "./components/AdjacentAuthorities";
import ImplementationFAQ from "./components/ImplementationFAQ";
import LaunchHandoverSection from "./components/LaunchHandoverSection";

export default function BlogInsightsPlanImplementationPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 dark:bg-gray-900 dark:text-white font-sans transition-colors duration-150">
      {/* 1. Hero Block */}
      <ImplementationHero />

      {/* 2. Public Implementation Model (9 stages) */}
      <GovernedStages />

      {/* 3. Gradient Callout Banner */}
      <GradientCallout />

      {/* 4. Scope Vocabulary Definitions Table */}
      <ScopeVocabularyTable />

      {/* 5. Decision Rights Table */}
      <DecisionRightsTable />

      {/* 6. Technical Dependencies Grid (Moving Parts) */}
      <MovingParts />

      {/* 7. Change & Risk Control Checklists */}
      <ReadinessAndChangeControl />
      <LaunchHandoverSection/>

      {/* 8. Stakeholder Matrix */}
      <StakeholderMatrix />

      {/* 9. Two Clear Paths Onboarding Routes */}
      <TwoClearPaths />

      {/* 10. Adjacent Link Pills */}
      <AdjacentAuthorities />

      {/* 11. Implementation Collapsible FAQ */}
      <ImplementationFAQ />
    </div>
  );
}
