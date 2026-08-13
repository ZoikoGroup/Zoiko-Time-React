import React from 'react';
import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';

import PublicEvidenceHero from './components/PublicEvidenceHero';
import PublicEvidenceDirectory from './components/PublicEvidenceDirectory';
import AccessClassesAndStates from './components/AccessClassesAndStates';
import WhyEvidenceIsNotPublic from './components/WhyEvidenceIsNotPublic';
import WhenEvidenceCannotBeShown from './components/WhenEvidenceCannotBeShown';
import AuthorityOwnership from './components/AuthorityOwnership';
import ControlledEvidenceCta from './components/ControlledEvidenceCta';
import EvidenceAccessQuestions from './components/EvidenceAccessQuestions';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Public Security Evidence | ZoikoTime',
  description:
    'Current public security, privacy, governance and accessibility evidence, available without a form — each record stating its scope, status, owner, review dates, and what it does not prove.',
};

export default function Page() {
  return (
    <div className={`${figtree.variable} ${inter.variable} tc-type`}>
      <PublicEvidenceHero />
      <PublicEvidenceDirectory />
      <AccessClassesAndStates />
      <WhyEvidenceIsNotPublic />
      <WhenEvidenceCannotBeShown />
      <AuthorityOwnership />
      <ControlledEvidenceCta />
      <EvidenceAccessQuestions />
    </div>
  );
}
