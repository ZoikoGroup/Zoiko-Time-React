import React from 'react';

interface Step {
  stepNumber: number;
  label: string;
  href?: string;
  hasArrow?: boolean;
}

interface LearningPathCard {
  title: string | React.ReactNode;
  stepCountText: string;
  steps: Step[];
}

const paths: LearningPathCard[] = [
  {
    title: 'Implementation Readiness',
    stepCountText: '4 steps',
    steps: [
      { stepNumber: 1, label: 'Map your time sources and policies', href: '#map-sources', hasArrow: true },
      { stepNumber: 2, label: 'Configure roles and approval chains', href: '#configure-roles' },
      { stepNumber: 3, label: 'Run a representative pilot', href: '#run-pilot' },
      { stepNumber: 4, label: 'Prepare worker communications', href: '#prepare-comms' },
    ],
  },
  {
    title: 'Payroll Close Mastery',
    stepCountText: '4 steps',
    steps: [
      { stepNumber: 1, label: 'Understand readiness definitions', href: '#readiness-defs', hasArrow: true },
      { stepNumber: 2, label: 'Triage the exception queue', href: '#triage-queue', hasArrow: true },
      { stepNumber: 3, label: 'Reconcile failed exports', href: '#reconcile-exports', hasArrow: true },
      { stepNumber: 4, label: 'Build a recurring close calendar', href: '#close-calendar' },
    ],
  },
  {
    title: (
      <>
        Audit & Evidence
        <br />
        Fundamentals
      </>
    ),
    stepCountText: '4 steps',
    steps: [
      { stepNumber: 1, label: 'Understand the Evidence Ledger', href: '#evidence-ledger', hasArrow: true },
      { stepNumber: 2, label: 'Read a Rule Trace end to end', href: '#rule-trace' },
      { stepNumber: 3, label: 'Export a defensible record set', href: '#export-record-set' },
      { stepNumber: 4, label: 'Prepare for auditor questions', href: '#auditor-questions' },
    ],
  },
];

export default function LearningPathsSection() {
  return (
    <section
    id="explore-learning-paths"
     className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Learning Paths
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Guided sequences for a complete outcome
          </h2>
        </header>

        {/* 3-Column Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {paths.map((path, pathIdx) => (
            <div
              key={pathIdx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row Header */}
                <div className="flex items-start justify-between gap-4 mb-6 min-h-[48px]">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white leading-tight">
                    {path.title}
                  </h3>
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold rounded-full shrink-0">
                    {path.stepCountText}
                  </span>
                </div>

                {/* Steps List */}
                <ul className="flex flex-col divide-y divide-gray-200 dark:divide-slate-800 border-t border-gray-200 dark:border-slate-800">
                  {path.steps.map((step) => (
                    <li key={step.stepNumber}>
                      <a
                        href={step.href || '#'}
                        className="flex items-center gap-3 py-3 group hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        {/* Step Number Badge */}
                        <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                          {step.stepNumber}
                        </span>

                        {/* Step Title Label */}
                        <span className="text-xs font-normal text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {step.label}
                          {step.hasArrow && <span className="ml-1 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-0.5 inline-block transition-transform">→</span>}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}