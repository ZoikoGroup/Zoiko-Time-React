import React from 'react';

interface PriorityDimension {
  dimension: string;
  allowed: React.ReactNode;
  prohibited: string;
}

const dimensions: PriorityDimension[] = [
  {
    dimension: 'Priority',
    allowed: 'Informational · review soon · time-sensitive · configured due date',
    prohibited: 'Worker risk, threat, guilt, or severity about a person',
  },
  {
    dimension: 'Status',
    allowed: 'Open · acknowledged · in review · information requested · resolved · unable to determine',
    prohibited: 'Pass/fail person labels',
  },
  {
    dimension: 'Colour',
    allowed: (
      <>
        Blue or neutral for open; amber for due attention;{' '}
        <strong className="font-bold text-slate-900 dark:text-white">
          red only for system delivery failure or destructive action
        </strong>
      </>
    ),
    prohibited: 'Red worker cards, heat maps of people, colour-only meaning',
  },
  {
    dimension: 'Ordering',
    allowed: 'Due date, definition family, workflow dependency, source outage, age, assignment',
    prohibited: '“Most suspicious” or “worst workers”',
  },
  {
    dimension: 'Counts',
    allowed: 'Flags, alert events, unresolved source issues, delivery failures',
    prohibited: 'Leaderboards by worker',
  },
  {
    dimension: 'Escalation',
    allowed: 'Ownership or coverage failure, or a configured deadline',
    prohibited: 'Punitive escalation based on a hidden score',
  },
  {
    dimension: 'Default sort',
    allowed: 'Due state, then created time — user-changeable within permission',
    prohibited: 'Opaque “smart priority”',
  },
];

export default function PriorityRulesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-6 md:gap-8">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
            Operational Priority, Due State &amp; Colour
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
            Priority Describes Attention Order, Never a<br className="hidden sm:inline" /> Person
          </h2>
        </div>

        {/* Desktop Table View (md and up) */}
        <div className="hidden md:block w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold   uppercase tracking-wide text-slate-900 dark:text-slate-200">
                <th scope="col" className="w-36 py-3.5 px-5">Dimension</th>
                <th scope="col" className="py-3.5 px-5">Allowed treatment</th>
                <th scope="col" className="w-80 lg:w-96 py-3.5 px-5">Prohibited treatment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm  ">
              {dimensions.map((item, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-5 font-semibold   text-slate-900 dark:text-slate-100 align-top">
                    {item.dimension}
                  </td>
                  <td className="py-4 px-5 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                    {item.allowed}
                  </td>
                  <td className="py-4 px-5 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                    {item.prohibited}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards (Below md screen size) */}
        <div className="grid md:hidden grid-cols-1 gap-4 w-full">
          {dimensions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm"
            >
              <h3 className="text-base font-bold   text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                {item.dimension}
              </h3>
              
              <div className="space-y-1">
                <span className="text-xs font-bold   uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Allowed treatment
                </span>
                <p className="text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.allowed}
                </p>
              </div>

              <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                <span className="text-xs font-bold   uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Prohibited treatment
                </span>
                <p className="text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.prohibited}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Caption */}
        <p className="w-full text-xs   text-slate-500 dark:text-slate-400 leading-relaxed text-left sm:text-center max-w-4xl">
          In the operations centre above, the only red status belongs to a failed alert delivery — a system condition. No record condition and no person is ever coloured red.
        </p>

      </div>
    </section>
  );
}