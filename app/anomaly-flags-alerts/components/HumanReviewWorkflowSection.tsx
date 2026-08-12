import React from 'react';

interface WorkflowPoint {
  title: string;
}

const reviewerCapabilities: WorkflowPoint[] = [
  { title: 'Acknowledge ownership' },
  { title: 'Inspect trigger facts and source quality' },
  { title: 'Request information with a non-adverse status' },
  { title: 'Request a record correction' },
  { title: 'Resolve with a reason code' },
  { title: 'Escalate on coverage or deadline' },
];

const separationOfDutiesPoints: WorkflowPoint[] = [
  { title: 'Definition author and case reviewer separated for high-impact families' },
  { title: 'No self-review where the reviewer is the affected record owner' },
  { title: 'Coverage gaps escalate rather than silently expire' },
  { title: 'Recusal creates a neutral, attributable event' },
];

interface ResolutionState {
  label: string;
  variant: 'orange' | 'blue' | 'emerald' | 'gray';
}

const resolutionStates: ResolutionState[] = [
  { label: 'Open', variant: 'orange' },
  { label: 'Acknowledged', variant: 'blue' },
  { label: 'In review', variant: 'blue' },
  { label: 'Information requested', variant: 'blue' },
  { label: 'Resolved — expected variation', variant: 'emerald' },
  { label: 'Resolved — corrected record', variant: 'emerald' },
  { label: 'Resolved — definition changed', variant: 'emerald' },
  { label: 'Suppressed', variant: 'gray' },
  { label: 'Expired', variant: 'gray' },
  { label: 'Withdrawn', variant: 'gray' },
  { label: 'Escalated', variant: 'blue' },
  { label: 'Unable to determine', variant: 'gray' },
];

const badgeStyles: Record<ResolutionState['variant'], string> = {
  orange: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  blue: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800',
  emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  gray: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
};

export default function HumanReviewWorkflowSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        
        {/* Left Section: Human Review Workflow */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
              Human Review Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
              A Review Case Is a Human Workspace
            </h2>
            <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
              Evidence, requests, notes, decisions, corrections, and resolution — all attributable, all preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Reviewer capabilities */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <h3 className="text-base font-bold   text-slate-900 dark:text-white">
                A reviewer can
              </h3>
              <ul className="space-y-3">
                {reviewerCapabilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Separation of duties */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <h3 className="text-base font-bold   text-slate-900 dark:text-white">
                Separation of duties
              </h3>
              <ul className="space-y-3">
                {separationOfDutiesPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section: Resolution Taxonomy */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
              Resolution Taxonomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold   tracking-tight text-slate-900 dark:text-white">
              Twelve states, and two that matter most
            </h2>
          </div>

          {/* Flexible Tag Pills Grid */}
          <div className="flex flex-wrap gap-2 pt-1">
            {resolutionStates.map((state, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs font-bold   rounded-full border transition-colors ${badgeStyles[state.variant]}`}
              >
                {state.label}
              </span>
            ))}
          </div>

          {/* Highlighted Callout Box */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="text-base font-bold   text-slate-900 dark:text-white">
              “Expected variation” and “Unable to determine”
            </h3>
            <p className="text-sm   leading-relaxed text-slate-600 dark:text-slate-300">
              Both are legitimate, fully-recorded outcomes. A flag that turns out to describe normal operating context resolves as expected variation with{' '}
              <strong className="font-bold text-slate-900 dark:text-slate-100">no adverse inference</strong>. A flag with insufficient or conflicting evidence resolves as unable to determine, stating the limitation and the human next action — rather than being forced into a conclusion.
            </p>
          </div>

          {/* Explanatory Caption */}
          <p className="text-xs   leading-relaxed text-slate-500 dark:text-slate-400">
            Reason codes are neutral: expected variation, approved exception, corrected source, corrected record, policy clarified, definition changed. Acknowledgment records responsibility, not agreement with the signal.
          </p>
        </div>

      </div>
    </section>
  );
}