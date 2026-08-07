import React from 'react';

interface StepCard {
  badge: string;
  badgeStyle: 'neutral' | 'accent';
  title: string;
  subtitle: string;
  points: string[];
}

const processSteps: StepCard[] = [
  {
    badge: 'Authoritative',
    badgeStyle: 'neutral',
    title: 'Deterministic Classification',
    subtitle: 'Produces the result.',
    points: [
      'Eligible input facts',
      'Rule identifier and version',
      'Ordered condition evaluation',
      'Effective dates and output',
      'Exception and override history',
    ],
  },
  {
    badge: 'Explanation only',
    badgeStyle: 'accent',
    title: 'Kairos',
    subtitle: 'Restates the existing trace.',
    points: [
      'Plain-language restatement',
      'Links to the governing rule',
      'Links to source facts and the current record',
    ],
  },
  {
    badge: 'Always human',
    badgeStyle: 'neutral',
    title: 'Review authority',
    subtitle: 'Acts on it.',
    points: [
      'Confirms or challenges the result',
      'Requests correction',
      'Escalates through the authoritative workflow',
    ],
  },
];

export default function DeterministicClassification() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10 lg:gap-12">
        
        {/* Section Header */}
        <header className="max-w-[800px] text-center flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Explain Existing Deterministic Classification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Kairos Restates a Trace. It Does Not Produce One.
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Deterministic Time Classification remains the authoritative policy-bound mechanism. Kairos can explain an existing, authorized classification result in plain language — nothing more.
          </p>
        </header>

        {/* 3-Step Workflow Flow */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-2">
          {processSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              
              {/* Step Card */}
              <div className="flex-1 p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-start gap-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${
                    step.badgeStyle === 'accent'
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {step.badge}
                </span>

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {step.subtitle}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-2 list-none pl-0 w-full">
                  {step.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flow Arrow (Down on mobile, Right on lg screen) */}
              {idx < processSteps.length - 1 && (
                <div className="flex items-center justify-center py-2 lg:py-0 lg:px-2 text-emerald-500 dark:text-emerald-400 text-xl font-bold">
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">→</span>
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* AI Boundary Notice Box */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/70 dark:bg-rose-950/20 flex flex-col gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            AI boundary
          </span>
          <p className="text-xs sm:text-sm text-rose-900 dark:text-rose-200 leading-relaxed">
            Kairos does not choose the rule, infer an undocumented rule, alter the result, or generate a new classification. If no authorized trace exists, there is nothing for Kairos to explain — and it says so rather than reasoning toward a plausible answer.
          </p>
        </div>

        {/* CTA / Related Link Banner */}
        <div className="flex justify-center">
          <a
            href="#deterministic-classification"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-slate-900 dark:text-white font-bold text-base group"
          >
            <span>Deterministic Time Classification</span>
            <span className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}