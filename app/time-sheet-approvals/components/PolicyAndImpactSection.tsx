import React from 'react';

interface ImpactItem {
  area: string;
  description: string;
}

const impactData: ImpactItem[] = [
  {
    area: 'Open approvals',
    description: 'Which in-flight decisions this change would invalidate.',
  },
  {
    area: 'Reports',
    description: 'Which published outputs referenced the superseded version.',
  },
  {
    area: 'Handoff',
    description: 'Whether the version was already released downstream, and to which target category.',
  },
  {
    area: 'Reconciliation',
    description: 'What must be reconciled, and who owns it.',
  },
  {
    area: 'Communication',
    description: 'Which worker and reviewer notices are required.',
  },
  {
    area: 'Evidence history',
    description: 'How the superseding version links to the original — which is preserved, never deleted.',
  },
];

export default function PolicyAndImpactSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8 lg:gap-10">
        
        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          
          {/* Card 1: Policy & Jurisdiction */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Policy &amp; jurisdiction context
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every period carries its policy name, version, effective date, configured rule references, and jurisdiction qualification — plus an explicit note that this is configuration, not legal advice.
            </p>
          </div>

          {/* Card 2: Exceptions & Conflicts */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Exceptions &amp; conflicts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Neutral states only: needs review, information requested, conflict, incomplete, returned, unresolved. Where sources conflict, both are shown with authority and version — the system does not pick a winner.
            </p>
          </div>

          {/* Card 3: Locked Periods & Late Corrections */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Locked periods &amp; late corrections
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              A locked period shows its lock reason, authority, effective timestamp, locked version, downstream status, and available correction path. Reopening or superseding requires permitted roles, checked at action time.
            </p>
          </div>

        </div>

        {/* Bottom Table Card: Late-Correction Impact Preview */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  <th className="py-3.5 px-6 w-1/4 sm:w-1/5 min-w-[160px]">
                    Impact area
                  </th>
                  <th className="py-3.5 px-6 w-3/4 sm:w-4/5">
                    What the preview shows
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
                {impactData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Caption */}
          <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Late-correction impact preview. Every affected area is named before anything is reopened.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}