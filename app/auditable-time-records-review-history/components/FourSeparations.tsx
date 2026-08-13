import React from 'react';

interface Separation {
  title: string;
  description: string;
  inTheRecord: string;
}

const separations: Separation[] = [
  {
    title: 'Review ≠ approval',
    description:
      'Assignment, comments, information requests, and escalation are review activity. None of them is a decision.',
    inTheRecord: 'In the record: assigned 05 Aug, decided 07 Aug.',
  },
  {
    title: 'Request ≠ correction',
    description:
      'A submitted request has no effect on the governing record until an authorized workflow changes it.',
    inTheRecord: 'In the record: requested 06 Aug 08:14, applied 15:42.',
  },
  {
    title: 'Decision ≠ execution',
    description:
      'An approval may change record state or authorize a downstream action. External execution and acceptance stay separate.',
    inTheRecord: 'In the record: approved at v3, released at v1.',
  },
  {
    title: 'Delivery ≠ agreement',
    description:
      'Generated, sent, delivered, and acknowledged are four states. Acknowledgement is still not consent or agreement.',
    inTheRecord: 'In the record: delivered, never acknowledged.',
  },
];

export default function FourSeparations() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Four separations the timeline never collapses
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Every one of these was visible in the record above. Collapsing any of them would make a
            history that reads cleanly and describes something that did not happen.
          </p>
        </div>

        {/* Separation Cards */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
          {separations.map((item) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 flex flex-col gap-2 border-t lg:border-t-0 lg:border-l first:border-t-0 lg:first:border-l-0 border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
              <p className="mt-auto pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                {item.inTheRecord}
              </p>
            </div>
          ))}
        </div>

        {/* No-Overwrite Callout */}
        <div className="w-full p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 space-y-1.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            No silent overwrite, and no pretend rollback
          </span>
          <p className="text-xs sm:text-sm leading-relaxed text-rose-800 dark:text-rose-200">
            Material corrections create a linked new version or an explicitly governed corrective
            event. Where reversal is not supported — as with an external package already sent — the
            history shows a compensating corrective event rather than implying a rollback took
            place. Prior versions and decisions remain historical with a successor link and a
            reason.
          </p>
        </div>

      </div>
    </section>
  );
}
