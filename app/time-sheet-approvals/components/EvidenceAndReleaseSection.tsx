import React from 'react';

const historyItems = [
  'Submission · assignment · views where appropriate',
  'Information requests · corrections · decisions',
  'Reopen · supersede · release · reconciliation',
  'Each with actor, role, reason, timestamp, and source reference',
];

const releaseGateItems = [
  'Only an approved, current, authorized version can be selected',
  'Correction, conflict, and lock state re-checked at the moment of release',
  'Release authority separated from approval authority where configured',
  'Payload preview shows included fields, exclusions, transformations, and privacy minimization',
];

interface ReleaseState {
  label: string;
  type: 'neutral' | 'success' | 'danger' | 'info' | 'warning';
}

const releaseStates: ReleaseState[] = [
  { label: 'Not eligible', type: 'neutral' },
  { label: 'Released', type: 'success' },
  { label: 'Acknowledged', type: 'success' },
  { label: 'Failed', type: 'danger' },
  { label: 'Retrying', type: 'info' },
  { label: 'Reconciliation required', type: 'warning' },
  { label: 'Reconciled', type: 'success' },
];

const getStatusBadgeClass = (type: ReleaseState['type']) => {
  const base =
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold transition-colors';

  switch (type) {
    case 'success':
      return `${base} bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50`;
    case 'danger':
      return `${base} bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50`;
    case 'info':
      return `${base} bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800/50`;
    case 'warning':
      return `${base} bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50`;
    default:
      return `${base} bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700`;
  }
};

export default function EvidenceAndReleaseSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Evidence & Traceable History */}
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Evidence &amp; Traceable History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Every Submission, Decision, and Reason
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Traceable history records what the system and authorized users did, using available sources and versions. It does not create missing facts, and it does not promise legal admissibility.
            </p>
          </header>

          {/* History List */}
          <ul className="flex flex-col gap-3 pt-1">
            {historyItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-2 shrink-0" />
                <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Button / Link */}
          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base font-bold shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
            >
              <span>Evidence Ledger</span>
              <svg
                className="w-4 h-4 text-slate-900 dark:text-white transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Governed Release & Reconciliation */}
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-1">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Governed Release &amp; Reconciliation
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Checked immediately before release
            </h3>
          </header>

          {/* Card 1: Release Gate */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Release gate
            </h4>
            <ul className="flex flex-col gap-3">
              {releaseGateItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-2 shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Release States */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Release states
            </h4>

            {/* Dynamic Status Badges Grid */}
            <div className="flex flex-wrap gap-2">
              {releaseStates.map((state, idx) => (
                <span key={idx} className={getStatusBadgeClass(state.type)}>
                  {state.label}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800/80">
              A named integration target appears only when verified, with direction, purpose, mapping version, and availability stated.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}