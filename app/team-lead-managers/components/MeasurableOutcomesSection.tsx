import React from 'react';

interface MetricCard {
  title: string;
  description: string;
  category: string;
}

const metricsData: MetricCard[] = [
  {
    title: 'Record completeness',
    description:
      'Required records present and in an accepted state for the operating period.',
    category: 'Readiness and follow-up',
  },
  {
    title: 'Exception rate',
    description:
      'Records needing information or review, divided by in-scope records.',
    category: 'Process improvement',
  },
  {
    title: 'Exception aging',
    description:
      'Time from flag to resolved, segmented by owner and issue type.',
    category: 'Capacity and SLA review',
  },
  {
    title: 'First-pass resolution',
    description: 'Exceptions resolved without repeated handoffs.',
    category: 'Review design and training',
  },
  {
    title: 'Approval turnaround',
    description: 'Time from ready-for-review to approved or returned.',
    category: 'Manager workflow health',
  },
  {
    title: 'Attribution completeness',
    description:
      'Approved records carrying required project, task, customer, or cost fields.',
    category: 'Project and billing readiness',
  },
  {
    title: 'Post-approval change rate',
    description:
      'Approved records changed after approval, with reason and reapproval state.',
    category: 'Change-control quality',
  },
  {
    title: 'Adoption',
    description:
      'Eligible workers and managers completing required actions in the period.',
    category: 'Onboarding and retention',
  },
];

export default function MeasurableOutcomesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <div className="max-w-[760px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Measurable Outcomes &amp; Business Case
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Metrics About the Workflow, Never About<br className="hidden sm:inline" />
            the Worker
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Every metric here describes record and review conditions your team can act on. None of them describes an individual worker&apos;s productivity.
          </p>
        </div>

        {/* Responsive Metrics Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between gap-4 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {metric.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {metric.description}
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {metric.category}
              </div>
            </div>
          ))}
        </div>

        {/* Business Case Notice Banner */}
        <div className="w-full p-5 bg-slate-100 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
          {/* Lock / Security Shield Icon */}
          <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/80 rounded-lg border border-emerald-300 dark:border-emerald-800 shrink-0 text-emerald-600 dark:text-emerald-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          
          <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base font-semibold leading-relaxed">
            The business-case estimator stays gated until assumptions, formulas, sources, ranges, and review are complete. No estimates of recovered &ldquo;time theft&rdquo; or guaranteed labor-cost savings &mdash; ever.
          </p>
        </div>

      </div>
    </section>
  );
}