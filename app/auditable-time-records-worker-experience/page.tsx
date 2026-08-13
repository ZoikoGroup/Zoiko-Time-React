import React from 'react';
import type { Metadata } from 'next';
import WorkerExperienceHero from './components/WorkerExperienceHero';
import WorkerOwnRecord from './components/WorkerOwnRecord';
import CorrectionFlowAndStates from './components/CorrectionFlowAndStates';
import AcknowledgementMeaning from './components/AcknowledgementMeaning';
import WordsAWorkerReads from './components/WordsAWorkerReads';
import TwelveStateDimensions from './components/TwelveStateDimensions';
import RecordedAndWhoDecides from './components/RecordedAndWhoDecides';
import DownstreamAndCoercion from './components/DownstreamAndCoercion';
import ReadQuestionChallengeCta from './components/ReadQuestionChallengeCta';
import WorkerRecordQuestions from './components/WorkerRecordQuestions';

export const metadata: Metadata = {
  title: 'Worker Record View | ZoikoTime',
  description:
    'A role-appropriate view of a worker’s own record — state, source, policy explanation, correction history, and escalation — with consequential decisions kept with authorized people and no surveillance or productivity scoring.',
};

export default function page() {
  return (
    <main>
      <WorkerExperienceHero />
      <WorkerOwnRecord />
      <CorrectionFlowAndStates />
      <AcknowledgementMeaning />
      <WordsAWorkerReads />
      <TwelveStateDimensions />
      <RecordedAndWhoDecides />
      <DownstreamAndCoercion />
      <ReadQuestionChallengeCta />
      <WorkerRecordQuestions />
    </main>
  );
}
