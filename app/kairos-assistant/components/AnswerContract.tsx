import React from 'react';

interface ElementItem {
  title: string;
  description: string;
  highlighted?: boolean;
}

const twelveElements: ElementItem[] = [
  {
    title: 'Question & normalized scope',
    description: 'So you can verify what was actually answered, not what you meant to ask.',
  },
  {
    title: 'Answer summary',
    description: 'Source facts, governed aggregates, and generated text kept visually distinct.',
  },
  {
    title: 'Answer status',
    description: 'Complete · partial · conflicting · source unavailable · permission-limited · no supported answer · review required.',
  },
  {
    title: 'Scope',
    description: 'Organization, period, record types, filters, purpose, time zone, privacy threshold.',
  },
  {
    title: 'As-of',
    description: 'Retrieval time plus source-specific last-updated and version information.',
  },
  {
    title: 'Evidence references',
    description: 'Title, type, version, owner, date, and current-or-superseded status.',
  },
  {
    title: 'Completeness',
    description: 'What was evaluated, and what was excluded, missing, stale, conflicting, or unsupported.',
  },
  {
    title: 'Limitations',
    description: 'Product, data-quality, role, policy, jurisdiction, timing, payroll, or compliance boundaries.',
  },
  {
    title: 'Recommended next step',
    description: 'Open the record, review a queue, request a correction, view policy, retry, or contact support.',
  },
  {
    title: 'Action boundary',
    description: 'Consequential actions happen in the authoritative workflow, with fresh permission checks.',
  },
  {
    title: 'Feedback',
    description: 'A governed quality route — not a thumbs-up used as a proxy for correctness.',
  },
  {
    title: 'No certainty theatre',
    description: 'No fabricated confidence percentage, no typing animation, no artificial waiting sequence.',
    highlighted: true,
  },
];

export default function AnswerContract() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        
        {/* Section Header */}
        <header className="max-w-[800px] text-center flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Answer Workspace &amp; Answer Contract
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Every Answer Carries the Same Twelve Elements
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            If an element cannot be supplied, that absence is stated. An answer without its scope, as-of time, and completeness is not an answer.
          </p>
        </header>

        {/* 12-Element Grid Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {twelveElements.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col gap-2 ${
                item.highlighted
                  ? 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
              }`}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}