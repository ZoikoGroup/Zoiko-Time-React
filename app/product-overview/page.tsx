import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ProductOverviewHero from './components/ProductOverviewHero';
import HowARecordIsBuilt from './components/HowARecordIsBuilt';
import ReviewableRecord from './components/ReviewableRecord';
import CapabilitySystem from './components/CapabilitySystem';
import WorkerReview from './components/WorkerReview';
import EvidenceTimelines from './components/EvidenceTimelines';
import EvidenceNavigation from './components/EvidenceNavigation';
import ProductFaq from './components/ProductFaq';
import ReadyWhenYouAre from './components/ReadyWhenYouAre';

// Poppins is loaded here rather than in the root layout, so it applies to this page only.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Product Overview | ZoikoTime',
  description:
    'ZoikoTime creates deterministic, evidence-backed workforce records from approved time, attendance, policy and review context — for payroll, billing, reporting and audit workflows, without invasive monitoring.',
};

export default function page() {
  return (
    <div className={poppins.className}>
      <ProductOverviewHero />
      <HowARecordIsBuilt />
      <ReviewableRecord />
      <CapabilitySystem />
      <WorkerReview />
      <EvidenceTimelines />
      <EvidenceNavigation />
      <ProductFaq />
      <ReadyWhenYouAre />
    </div>
  );
}
