"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import SystemsCalculationsBanner from "./components/SystemsCalculationsBanner";
import DirectAnswer from "./components/DirectAnswer";
import SystemBoundaries from "./components/SystemBoundaries";
import AuthorityLifecycle from "./components/AuthorityLifecycle";
import WorkerExperience from "./components/WorkerExperience";
import SeeTheProof from "./components/SeeTheProof";
import GovernanceDirectory from "./components/GovernanceDirectory";
import ConfidenceBanner from "./components/ConfidenceBanner";

export default function ClassificationAiBoundariesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 dark:bg-gray-900 dark:text-white font-sans transition-colors duration-150">
      {/* 1. Hero Block */}
      <HeroSection />

      {/* 2. Overview banner */}
      <SystemsCalculationsBanner />

      {/* 3. The Direct Answer statement */}
      <DirectAnswer />

      {/* 4. Three lanes of architecture boundaries */}
      <SystemBoundaries />

      {/* 5. Human Authority Lifecycle stage pipeline */}
      <AuthorityLifecycle />

      {/* 6. Worker experience features */}
      <WorkerExperience />

      {/* 7. Audit mockups previews */}
      <SeeTheProof />

      {/* 8. Governance Shortcuts links list */}
      <GovernanceDirectory />

      {/* 9. Final Onboarding CTA Banner */}
      <ConfidenceBanner />
    </div>
  );
}
