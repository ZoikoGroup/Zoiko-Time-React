import Link from "next/link";
import React from 'react';

interface TimelineStep {
  id: string;
  title: string;
  description: string;
}

const workerActions = [
  'See the record and why it was flagged',
  'Add context or request a correction',
  'Track status and receive notification',
  'Use a documented support path',
];

const managerActions = [
  'Approve, or approve with amendment',
  'Return for information',
  'Reassign or escalate',
  'Recuse, or reject within your authority',
];

const timelineSteps: TimelineStep[] = [
  {
    id: 'flag-created',
    title: 'Flag created',
    description: 'Neutral state, stated reason, applied policy version.',
  },
  {
    id: 'worker-notified',
    title: 'Worker notified',
    description: 'Where configured, with the record visible to them.',
  },
  {
    id: 'context-submitted',
    title: 'Context submitted',
    description: 'Comment, correction request, or supporting reference.',
  },
  {
    id: 'manager-review',
    title: 'Manager review',
    description: 'You hold the next action, within your permissions.',
  },
  {
    id: 'ops-review',
    title: 'Operations or payroll review',
    description: 'Second-line check where the policy requires it.',
  },
  {
    id: 'resolution',
    title: 'Resolution',
    description: 'Prior value, new value, author, time, and reason preserved.',
  },
  {
    id: 'approval',
    title: 'Approval',
    description: 'Versioned, with reapproval state where changes apply.',
  },
  {
    id: 'downstream-release',
    title: 'Downstream release',
    description: 'Released to authorized systems, or held with a reason.',
  },
];

export default function ExceptionResolution() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Context & Capabilities */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Header Block */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Exception Resolution &amp; Human Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Resolve Exceptions With<br />
              Context, Ownership, and a<br />
              Complete History
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              When a record is incomplete or conflicts with configured context, ZoikoTime creates a neutral review state, assigns the next action, lets authorized people add information or corrections, and preserves the full decision history.
            </p>
          </div>

          {/* Canonical Example Card */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
            <span className="inline-self-start px-2.5 py-1 bg-slate-100 dark:bg-slate-700/60 rounded-full border border-slate-200 dark:border-slate-600 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              Canonical example
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-1">
              &ldquo;Unverified Exit &mdash; Pending Review&rdquo;
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              A session has no recorded end event. The state describes the record, not the person. Accusatory labels were rejected in design review because they ask a manager to take a side before anyone has looked at the evidence &mdash; and because that label then follows a worker into every downstream report.
            </p>
          </div>

          {/* Dual Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Worker Actions */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                What the worker can do
              </h4>
              <ul className="flex flex-col gap-2.5 pt-1">
                {workerActions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" aria-hidden="true" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manager Actions */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                What you can do
              </h4>
              <ul className="flex flex-col gap-2.5 pt-1">
                {managerActions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" aria-hidden="true" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link href="/human-in-command" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Explore Human-in-Command Controls
            </Link>
            <Link href="/eliminate-time-disputes" className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
              Eliminate Time Disputes
            </Link>
          </div>

        </div>

        {/* Right Column: Interactive Review Timeline Card */}
        <div className="lg:col-span-6 p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-6">
          <span className="inline-self-start px-2.5 py-1 bg-slate-100 dark:bg-slate-700/60 rounded-full border border-slate-200 dark:border-slate-600 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
            Review timeline
          </span>

          {/* Timeline Vertical Stepper */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
            {timelineSteps.map((step) => (
              <div key={step.id} className="relative flex flex-col gap-1">
                {/* Node Dot */}
                <span 
                  className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-500 shrink-0" 
                  aria-hidden="true" 
                />
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Authority Notice Callout */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
            <div className="p-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              An anomaly signal can create a review flag. It cannot determine misconduct, pay, discipline, or final approval &mdash; that authority stays with you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
