import React from 'react';

type TagVariant = 'default' | 'warning' | 'danger' | 'info';

interface TagItem {
  label: string;
  variant: TagVariant;
}

const noAnswerTags: TagItem[] = [
  { label: 'Unsupported question', variant: 'default' },
  { label: 'Missing context', variant: 'warning' },
  { label: 'No eligible sources', variant: 'default' },
  { label: 'Permission denied', variant: 'danger' },
  { label: 'Privacy threshold', variant: 'info' },
  { label: 'Source unavailable', variant: 'danger' },
  { label: 'Stale beyond policy', variant: 'warning' },
  { label: 'Source conflict', variant: 'warning' },
  { label: 'Policy unavailable', variant: 'default' },
  { label: 'Version conflict', variant: 'warning' },
  { label: 'Jurisdiction restriction', variant: 'info' },
  { label: 'Withdrawn content', variant: 'default' },
  { label: 'Service degradation', variant: 'danger' },
];

export default function HumanHandoffAndLimits() {
  const getTagClasses = (variant: TagVariant) => {
    switch (variant) {
      case 'warning':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      case 'danger':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-200 dark:border-rose-800/60';
      case 'info':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border-sky-200 dark:border-sky-800/60';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 font-sans transition-colors">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Human Handoff & Consequential Limits */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          <header className="flex flex-col gap-2.5">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Human Handoff &amp; Consequential Limits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Every Consequential Path Leaves Kairos
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Handoff triggers include correction, assigned review, approval or rejection, policy administration, access request, exception resolution, support, security or privacy escalation, and evidence access.
            </p>
          </header>

          {/* List of Handoff Parameters */}
          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white pr-1">Fresh authorization</strong>
                — the destination re-evaluates identity, role, object scope, record version, policy, purpose, jurisdiction, and action permission.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white pr-1">Minimum context</strong>
                — only the identifiers needed to reopen the authoritative object. Never sensitive data, question text, answer text, or credentials in a URL.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white pr-1">Action form</strong>
                — object and version, action, impact, reason, evidence, affected downstream processes, confirmation, and a cancel route.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white pr-1">Kairos status</strong>
                — “Explanation complete; no action performed.”
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: No-Answer, Conflict & Recovery */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              No-Answer, Conflict &amp; Recovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Thirteen honest ways to not answer
            </h2>
          </header>

          {/* Tag Cloud */}
          <div className="flex flex-wrap gap-2 pt-1">
            {noAnswerTags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${getTagClasses(
                  tag.variant
                )}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Conflict Behavior Card */}
          <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Conflict behavior
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Where two eligible sources disagree, Kairos shows each one with its authority, status, and version — and routes to authoritative human review. It does not silently choose a winner.
            </p>
          </div>

          {/* Failure States Callout */}
          <div className="p-5 sm:p-6 bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              Failure states describe systems, records, configuration, permissions, and workflow conditions — never worker intent or misconduct. And errors never reveal restricted source names, hidden fields, permission rules, credentials, or other users' data.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}