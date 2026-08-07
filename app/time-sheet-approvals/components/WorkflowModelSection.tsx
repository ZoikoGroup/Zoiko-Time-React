import React from 'react';

interface StageCard {
  stage: string;
  title: string;
  description: string;
  owner: string;
}

const workflowStages: StageCard[] = [
  {
    stage: 'Stage 01',
    title: 'Review',
    description:
      'Assemble a defined period and show records, sources, status, issues, policy context, and version.',
    owner: 'worker or authorized reviewer',
  },
  {
    stage: 'Stage 02',
    title: 'Correct',
    description:
      'Request or make permitted factual corrections with reason, impact preview, evidence, and lineage.',
    owner: 'worker or authorized editor',
  },
  {
    stage: 'Stage 03',
    title: 'Submit',
    description:
      'Confirm the reviewed version, unresolved items, destination, and a neutral declaration.',
    owner: 'worker or authorized submitter',
  },
  {
    stage: 'Stage 04',
    title: 'Approve',
    description:
      'Review assigned scope and make an attributable human decision with reason and evidence context.',
    owner: 'authorized approver',
  },
  {
    stage: 'Stage 05',
    title: 'Resolve',
    description:
      'Request information, return, correct, escalate, reopen, or supersede — without hiding prior states.',
    owner: 'assigned human roles',
  },
  {
    stage: 'Stage 06',
    title: 'Release',
    description:
      'Send the approved version downstream and track acknowledgment and reconciliation.',
    owner: 'integration or finance authority',
  },
];

export default function WorkflowModelSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            The Workflow Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Review → Correct → Submit → Approve → Resolve → Release
          </h2>
          <p className="max-w-[640px] text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
            Six stages, each with a named owner. Nothing here is instantaneous and nothing here is automated.
          </p>
        </header>

        {/* 6-Stage Workflow Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 items-stretch">
          {workflowStages.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-3 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide">
                  {item.stage}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight block">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Owner:</span> {item.owner}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}