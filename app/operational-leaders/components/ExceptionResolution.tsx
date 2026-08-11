import Link from "next/link";
import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface TimelineStep {
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    title: 'Flag created',
    description: 'Neutral state, stated reason, applied policy version.',
  },
  {
    title: 'Worker notified',
    description: 'Where configured, with the record visible to them.',
  },
  {
    title: 'Context submitted',
    description: 'Comment, correction request, or supporting reference.',
  },
  {
    title: 'Manager review',
    description: 'Named owner holds the next action within permissions.',
  },
  {
    title: 'Operations or payroll review',
    description: 'Second-line check where the policy requires it.',
  },
  {
    title: 'Resolution',
    description: 'Prior value, new value, author, time, and reason preserved.',
  },
  {
    title: 'Approval',
    description: 'Versioned, with reapproval state where changes apply.',
  },
  {
    title: 'Downstream release',
    description: 'Released to authorized systems, or held with a reason.',
  },
];

const workerRights = [
  'See the relevant record and why it was flagged',
  'Add context or request a correction',
  'Track status and receive notification',
  'Use a documented support path',
];

const reviewerActions = [
  'Approve, or approve with amendment',
  'Return for information',
  'Reassign or escalate',
  'Recuse, or reject within authority',
];

export default function ExceptionResolution() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Canonical Example & Action Lists */}
        <div className="flex flex-col gap-6">
          
          {/* Header Text */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
              Exception Resolution &amp; Human Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Resolve Exceptions With Context, Ownership, and a Complete History
            </h2>
            <p className="text-base text-slate-600 leading-relaxed pt-1">
              When a record is incomplete or conflicts with configured context, ZoikoTime creates a neutral review state, assigns the next action, lets authorized people add information or corrections, and preserves the full decision history.
            </p>
          </div>

          {/* Canonical Example Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-2">
            <span className="self-start px-2.5 py-0.5 bg-slate-100 text-emerald-700 text-xs font-bold uppercase tracking-wide rounded-full border border-slate-200">
              Canonical example
            </span>
            <h3 className="text-lg font-bold text-slate-900 pt-1">
              “Unverified Exit — Pending Review”
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A session has no recorded end event. The state describes the record, not the person. Accusatory labels were rejected in design review because they assign blame before a human has looked at the evidence — and because they follow a worker into every downstream report.
            </p>
          </div>

          {/* Rights & Actions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            
            {/* Worker Rights Card */}
            <div className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-3">
              <h4 className="text-base font-bold text-slate-900">
                Worker rights
              </h4>
              <ul className="flex flex-col gap-2.5">
                {workerRights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 mt-2 rounded-sm bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviewer Actions Card */}
            <div className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-3">
              <h4 className="text-base font-bold text-slate-900">
                Reviewer actions
              </h4>
              <ul className="flex flex-col gap-2.5">
                {reviewerActions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 mt-2 rounded-sm bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/human-in-command"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
            >
              Explore Human-in-Command Controls
            </Link>
            <Link
              href="/eliminate-time-disputes"
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-base rounded-lg border border-slate-200 transition-colors"
            >
              Eliminate Time Disputes
            </Link>
          </div>

        </div>

        {/* Right Column: Timeline Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-6">
          <span className="self-start px-2.5 py-0.5 bg-slate-100 text-emerald-700 text-xs font-bold uppercase tracking-wide rounded-full border border-slate-200">
            Review timeline
          </span>

          {/* Vertical Timeline Container */}
          <div className="relative pl-6 flex flex-col gap-8">
            {/* Continuous Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-4 w-0.5 bg-slate-200" />

            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col gap-1">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 z-10" />
                <h4 className="text-base font-bold text-slate-900 leading-none">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 leading-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footnote Warning Card */}
          <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200 flex items-start gap-3 mt-2">
            <ShieldAlert className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              An anomaly signal can create a review flag. It cannot determine misconduct, pay, discipline, or final approval.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
