import React from 'react';

interface StepItem {
  step: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    step: 'Step 01',
    title: 'Select',
    description:
      'Identify the record, field, interval, context, or classification being questioned.',
  },
  {
    step: 'Step 02',
    title: 'Explain',
    description:
      'Choose a structured reason. Free text is minimized and never sent to marketing analytics.',
  },
  {
    step: 'Step 03',
    title: 'Propose',
    description:
      'Enter the proposed factual value, with local and canonical time where relevant.',
  },
  {
    step: 'Step 04',
    title: 'Evidence',
    description:
      'Attach only permitted evidence, with purpose, visibility, and retention qualification shown.',
  },
  {
    step: 'Step 05',
    title: 'Preview',
    description:
      'See affected totals, records, approvals, and downstream impact before submitting.',
  },
];

const submissionReviewItems = [
  'Period, version, and included records',
  'Visible totals and corrections',
  'Unresolved items, carried forward not hidden',
  'Policy context and destination',
  'Current reviewer or queue',
];

export default function CorrectionWorkflowSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Correction Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Five Steps, and the Original Is Never Erased
          </h2>
          <p className="max-w-[640px] text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
            A correction is a proposal with a reason and a lineage — not a silent edit.
          </p>
        </header>

        {/* 5-Step Process Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide">
                {item.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lower Section: Neutral Confirmation & Submission */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          
          {/* Left Column: Wording Guidelines */}
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-1">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Neutral Confirmation &amp; Submission
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Submission is a confirmation, not a waiver
              </h3>
            </header>

            {/* Approved Wording Block */}
            <div className="p-6 bg-slate-100/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Approved confirmation wording
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                “I reviewed the information shown for this period and understand it will be submitted for the configured review process.”
              </p>
            </div>

            {/* Prohibited Copy Warning */}
            <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
              <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wide">
                Prohibited submission copy
              </span>
              <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
                No waiver of wage, correction, appeal, privacy, legal, or collective rights. No “all information is legally accurate” claim. No blame language. Any checkbox is used only where product and legal evidence require it — and is never preselected.
              </p>
            </div>
          </div>

          {/* Right Column: Submission Review Content */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              What the submission review shows
            </h4>

            <ul className="flex flex-col gap-2.5">
              {submissionReviewItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white">Primary action:</strong> Submit for review.{' '}
                <strong className="text-slate-900 dark:text-white">Secondary:</strong> Back to review · Save and return · Request correction · Get help.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}