import React from "react";
import PolicyEvidenceHero from "./components/PolicyEvidenceHero";
import PolicyEvidenceViewer from "./components/PolicyEvidenceViewer";
import WhyThisPolicy from "./components/WhyThisPolicy";
import HistoricalVsCurrent from "./components/HistoricalVsCurrent";
import ExceptionEvidenceTable from "./components/ExceptionEvidenceTable";
import WhatClassificationCannotDecide from "./components/WhatClassificationCannotDecide";
import IncompleteEvidenceStates from "./components/IncompleteEvidenceStates";
import RoleVisibilityAndModuleOwnership from "./components/RoleVisibilityAndModuleOwnership";
import ExplainClassificationCta from "./components/ExplainClassificationCta";
import PolicyEvidenceQuestions from "./components/PolicyEvidenceQuestions";



export default function Page() {
  return (
    <main className="gd-type bg-white text-slate-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <PolicyEvidenceHero />
      <PolicyEvidenceViewer />
      <WhyThisPolicy />
      <HistoricalVsCurrent />
      <ExceptionEvidenceTable />
      <WhatClassificationCannotDecide />
      <IncompleteEvidenceStates />
      <RoleVisibilityAndModuleOwnership />
      <ExplainClassificationCta />
      <PolicyEvidenceQuestions />
    </main>
  );
}
