import React from 'react';

interface ScorecardRow {
  measure: string;
  baselineWindow: string;
  targetRule: string;
}

const scorecardData: ScorecardRow[] = [
  {
    measure: 'Required-record completeness',
    baselineWindow: 'Two comparable operating periods',
    targetRule: 'Improvement target agreed with you; denominator disclosed.',
  },
  {
    measure: 'Open exception aging',
    baselineWindow: 'Median and 90th percentile',
    targetRule: 'Reduction without suppressing valid review flags.',
  },
  {
    measure: 'Owner assignment',
    baselineWindow: 'Current share assigned within SLA',
    targetRule: 'Target based on the agreed operating model.',
  },
  {
    measure: 'Approval turnaround',
    baselineWindow: 'Ready-for-review to decision',
    targetRule: 'Target segmented by team and role.',
  },
  {
    measure: 'Project attribution',
    baselineWindow: 'Required-field completeness',
    targetRule: 'Target for in-scope projects only.',
  },
  {
    measure: 'Worker & manager adoption',
    baselineWindow: 'Eligible users completing required actions',
    targetRule: 'Minimum adoption threshold plus a support plan.',
  },
  {
    measure: 'Trust and acceptance',
    baselineWindow: 'Feedback and escalation volume',
    targetRule: 'No material unresolved governance or consultation blockers.',
  },
];

export default function PilotScorecardSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <div className="max-w-[780px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Validation Before Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            A Pilot Scorecard, Not a Testimonial Wall
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Named customer evidence appears here only when it is attributable, permissioned, measured, and current. Until then, this is exactly how we would prove the value with one of your teams.
          </p>
        </div>

        {/* Scorecard Data Table Card */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3.5 px-6 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider w-1/4">
                    Measure
                  </th>
                  <th className="py-3.5 px-6 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider w-1/3">
                    Baseline window
                  </th>
                  <th className="py-3.5 px-6 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Target / decision rule
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {scorecardData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                      {row.measure}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                      {row.baselineWindow}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                      {row.targetRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action CTA Button */}
        <div className="flex justify-center pt-2 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Request a team readiness review
          </button>
        </div>

      </div>
    </section>
  );
}