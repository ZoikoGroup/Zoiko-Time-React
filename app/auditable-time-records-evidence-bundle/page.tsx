import React from 'react';
import type { Metadata } from 'next';
import EvidenceBundleHero from './components/EvidenceBundleHero';
import SyntheticBundleManifest from './components/SyntheticBundleManifest';
import ThirteenItemStates from './components/ThirteenItemStates';
import NineStateDimensions from './components/NineStateDimensions';
import FormatGateAndRedaction from './components/FormatGateAndRedaction';
import AccessAndExpiry from './components/AccessAndExpiry';
import WorkerRecordProtection from './components/WorkerRecordProtection';
import PackagingFailureStates from './components/PackagingFailureStates';
import ModuleBoundaries from './components/ModuleBoundaries';
import ExportEvidenceCta from './components/ExportEvidenceCta';
import EvidenceBundleQuestions from './components/EvidenceBundleQuestions';

export const metadata: Metadata = {
  title: 'Evidence Bundle & Export | ZoikoTime',
  description:
    'Package permitted workforce-record evidence for a stated purpose, with pinned versions, an inspectable manifest, declared gaps, redaction categories, and separated access, delivery, and receipt states.',
};

export default function page() {
  return (
    <main>
      <EvidenceBundleHero />
      <SyntheticBundleManifest />
      <ThirteenItemStates />
      <NineStateDimensions />
      <FormatGateAndRedaction />
      <AccessAndExpiry />
      <WorkerRecordProtection />
      <PackagingFailureStates />
      <ModuleBoundaries />
      <ExportEvidenceCta />
      <EvidenceBundleQuestions />
    </main>
  );
}
