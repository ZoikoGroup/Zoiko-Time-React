import React from 'react';
import type { Metadata } from 'next';
import ReviewHistoryHero from './components/ReviewHistoryHero';
import ReviewHistoryViewer from './components/ReviewHistoryViewer';
import FourSeparations from './components/FourSeparations';
import ChangeAndNoticeProof from './components/ChangeAndNoticeProof';
import ChronologyAndActors from './components/ChronologyAndActors';
import WorkerFacingHistory from './components/WorkerFacingHistory';
import IncompleteHistoryStates from './components/IncompleteHistoryStates';
import ModuleBoundaries from './components/ModuleBoundaries';
import AccountableAdministrationCta from './components/AccountableAdministrationCta';
import ReviewHistoryQuestions from './components/ReviewHistoryQuestions';

export const metadata: Metadata = {
  title: 'Correction & Approval History | ZoikoTime',
  description:
    'Review corrections, reviewer actions, approvals, notices, reopenings, and superseding record versions as an attributable history — with every actor, reason, time, and effective version preserved.',
};

export default function page() {
  return (
    <main>
      <ReviewHistoryHero />
      <ReviewHistoryViewer />
      <FourSeparations />
      <ChangeAndNoticeProof />
      <ChronologyAndActors />
      <WorkerFacingHistory />
      <IncompleteHistoryStates />
      <ModuleBoundaries />
      <AccountableAdministrationCta />
      <ReviewHistoryQuestions />
    </main>
  );
}
