import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import EvaluationHero from './components/EvaluationHero';
import ProductMeaning from './components/ProductMeaning';
import TrustBoundaries from './components/TrustBoundaries';
import OperationalCurrentness from './components/OperationalCurrentness';
import CommercialTruth from './components/CommercialTruth';
import EnterpriseQualification from './components/EnterpriseQualification';
import MorePaths from './components/MorePaths';
import GuidedConversion from './components/GuidedConversion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Start Your Evaluation | ZoikoTime Resource Center',
  description:
    'Self-directed evaluation of ZoikoTime — product capability, worker and trust boundaries, live documentation, pricing, and enterprise resources. No forms, no account, and no hidden score.',
};

export default function Page() {
  return (
    <div className={poppins.className}>
      <EvaluationHero />
      <ProductMeaning />
      <TrustBoundaries />
      <OperationalCurrentness />
      <CommercialTruth />
      <EnterpriseQualification />
      <MorePaths />
      <GuidedConversion />
    </div>
  );
}
