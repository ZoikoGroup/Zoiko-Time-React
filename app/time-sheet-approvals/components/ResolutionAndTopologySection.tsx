import React from 'react';

const workflowDefinitionItems = [
  'Name, purpose, scope, period type',
  'Applicable groups, policy and jurisdiction',
  'Effective version, steps, permitted decisions',
  'Reason requirements and fallback',
];

const delegationItems = [
  'Delegator, delegate, reason, scope',
  'Start and end dates',
  'Prohibited conflicts',
  'Worker visibility where applicable',
];

export default function ResolutionAndTopologySection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Return, Information Request & Resolution */}
          <div className="flex flex-col gap-6">
            
            {/* Header */}
            <header className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Return, Information Request &amp; Resolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Structured Non-Final Paths
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                Every non-final action identifies the issue, the owner, the next action, and the history — without implying anyone did anything wrong.
              </p>
            </header>

            {/* Language Rule Callout */}
            <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
              <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wide">
                Language rule
              </span>
              <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
                Describe the record issue, not the person. “Careless,” “suspicious,” “dishonest,” “non-compliant,” and “low quality” are never applied as worker labels.
              </p>
            </div>

            {/* Privacy & Notification Disclaimer */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Notification content, channel, timing, recipient, and privacy are availability-qualified. The interface always shows the in-product state even when a notification fails to send.
            </p>
          </div>

          {/* Right Column: Approval Topology & Separation of Duties */}
          <div className="flex flex-col gap-5">
            
            {/* Header */}
            <header className="flex flex-col gap-1">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Approval Topology &amp; Separation of Duties
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Configurable, and honestly qualified
              </h3>
            </header>

            {/* Availability Disclosure Box */}
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-l-4 border-l-emerald-500 border-r border-t border-b border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1.5">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">
                Availability disclosure
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Exact approval steps, parallel or sequential behavior, conditions, limits, and plan availability must be confirmed in current product documentation. This page does not assert a topology it cannot evidence.
              </p>
            </div>

            {/* Nested Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Card 1: Workflow Definition */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Workflow definition
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {workflowDefinitionItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Delegation */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Delegation
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {delegationItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner: Escalation, Aging & Coverage */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
          <div className="w-5 h-5 rounded border border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
            <svg
              className="w-3 h-3 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-extrabold">
              Escalation, aging &amp; coverage.
            </strong>{' '}
            Dashboards aggregate counts by objective state, workflow, period, and source health — they do not rank individuals. Executive views aggregate where individual detail is unnecessary. Coverage and aging support workflow continuity without monitoring behavior or scoring people.
          </p>
        </div>

      </div>
    </section>
  );
}