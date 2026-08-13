import React from 'react';

interface Dimension {
  title: string;
  values: string;
  caveat: string;
}

const dimensions: Dimension[] = [
  {
    title: 'Record lifecycle',
    values:
      'Source received · classified · review required · approved · corrected or superseded · retention-limited.',
    caveat: 'What the record itself is.',
  },
  {
    title: 'Worker action',
    values:
      'No action · review available · context requested · correction draft · submitted · acknowledgement available · escalation available.',
    caveat: 'What the worker can do right now.',
  },
  {
    title: 'Correction',
    values:
      'None · draft · submitted · withdrawn · information requested · accepted · partially accepted · no change approved · superseded · reopened.',
    caveat: 'Separate from review state.',
  },
  {
    title: 'Review',
    values:
      'Unassigned · assigned · pending · information requested · decision recorded · escalated · reassigned · closed · reopened.',
    caveat: 'Who holds it, not what they concluded.',
  },
  {
    title: 'Source quality',
    values: 'Current · delayed · stale · missing · unavailable · conflicting · imported · partial · unknown.',
    caveat: 'A system condition, never a worker condition.',
  },
  {
    title: 'Policy / evaluation',
    values:
      'Applicable · historical · superseded · missing · conflicting · revalidation required · restricted.',
    caveat: 'Historical stays historical.',
  },
  {
    title: 'Notification',
    values:
      'Not required · generated · sent · delivered where known · failed · corrected · acknowledged where configured.',
    caveat: 'Four separate facts, not one.',
  },
  {
    title: 'Sync',
    values: 'Online · saved draft · offline · pending sync · synced · failed · unknown result · conflict.',
    caveat: 'A record never silently disappears.',
  },
  {
    title: 'Permission',
    values:
      'Allowed · restricted field · action unavailable · permission denied · role changed · session expired.',
    caveat: 'Server-checked, and explained when it blocks.',
  },
  {
    title: 'Downstream',
    values:
      'Not applicable · not released · release pending · sent · target received · reconciled · rejected · unknown.',
    caveat: 'Sent is not received is not reconciled.',
  },
  {
    title: 'Support',
    values: 'No case · help viewed · support requested · response pending · resolved · escalation required.',
    caveat: 'A worker can always reach a person.',
  },
  {
    title: 'Accessibility alternative',
    values:
      'Standard flow available · alternative requested · alternative provided · barrier unresolved.',
    caveat: 'An unresolved barrier is visible, not hidden.',
  },
];

export default function TwelveStateDimensions() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-7">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Twelve independent state dimensions
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Do not collapse record truth, correction workflow, review, source health, notification,
            sync, permission, downstream, support, and accessibility into one ambiguous status chip. A
            worker seeing a single amber dot learns nothing actionable.
          </p>
        </div>

        {/* Dimension Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {dimensions.map((item) => (
            <div
              key={item.title}
              className="px-3.5 pt-3.5 pb-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5"
            >
              <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-5">{item.values}</p>
              <p className="mt-auto pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-xs text-amber-700 dark:text-amber-400 leading-5">
                {item.caveat}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
