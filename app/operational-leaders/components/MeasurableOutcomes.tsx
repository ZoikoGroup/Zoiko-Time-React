import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface MetricCard {
  title: string;
  description: string;
  category: string;
}

const metrics: MetricCard[] = [
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
    category: 'Workflow health',
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

export default function MeasurableOutcomes() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <div className="max-w-[760px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Measurable Outcomes &amp; Business Case
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Operational Metrics You Can Define, Measure, and Defend
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            Every metric here describes workflow and record conditions. None of them describes an individual worker&apos;s productivity.
          </p>
        </div>

        {/* Responsive Grid of Metric Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between gap-3 transition-all hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {metric.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Metric Tag/Category */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-emerald-600 text-xs font-bold">
                  {metric.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="w-full bg-slate-100/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3 mt-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-slate-800 text-sm font-semibold leading-relaxed">
            The business-case estimator stays gated until assumptions, formulas, sources, ranges, and review are complete. No estimates of recovered “time theft” or guaranteed labor-cost savings — ever.
          </p>
        </div>

      </div>
    </section>
  );
}