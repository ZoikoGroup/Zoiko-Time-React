import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import PrivacyHero from './components/PrivacyHero';
import PrivacyBasics from './components/PrivacyBasics';
import CalmPathBanner from './components/CalmPathBanner';
import PrivacyFaq from './components/PrivacyFaq';
import NeedsAPersonCta from './components/NeedsAPersonCta';
import RequestReviewForm from './components/RequestReviewForm';
import RoutingAndBoundaries from './components/RoutingAndBoundaries';

// Poppins is loaded here rather than in the root layout, so it applies to this page only.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Request a Privacy Review | ZoikoTime',
  description:
    'Read what ZoikoTime collects, why, and who can see it — then request a privacy review for enterprise diligence, customer configuration, a worker question, data use, processors/transfers, or AI/automation, reviewed by a qualified human.',
};

export default function page() {
  return (
    <div className={poppins.className}>
      <PrivacyHero />
      <PrivacyBasics />
      <CalmPathBanner />
      <PrivacyFaq />
      <NeedsAPersonCta />
      <RequestReviewForm />
      <RoutingAndBoundaries />
    </div>
  );
}
