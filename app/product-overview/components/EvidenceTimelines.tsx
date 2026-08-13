import React from 'react';
import SectionEyebrow from './SectionEyebrow';

interface TimelineRow {
  time: string;
  event: string;
  badge: string;
  badgeStyles: string;
}

const timelineRows: TimelineRow[] = [
  {
    time: 'Aug 4, 09:12',
    event: 'Record TR-40921 corrected — break time adjusted by M. Alders (HR)',
    badge: 'Approved',
    badgeStyles: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400',
  },
  {
    time: 'Aug 4, 08:40',
    event: 'Correction proposed — reason: unlogged lunch break',
    badge: 'Review',
    badgeStyles: 'bg-orange-100 dark:bg-amber-950/40 text-yellow-800 dark:text-amber-400',
  },
  {
    time: 'Aug 3, 09:02',
    event: 'Original event received from desktop app — deterministic classification applied',
    badge: 'Original',
    badgeStyles: 'bg-sky-100 dark:bg-sky-950/40 text-blue-900 dark:text-sky-300',
  },
];

interface Metric {
  value: string;
  label: string;
  context: string;
}

const metrics: Metric[] = [
  { value: '1,204', label: 'Records ready', context: 'This pay period · org-wide' },
  { value: '18', label: 'Needs review', context: 'This pay period · org-wide' },
  { value: '42', label: 'Corrected', context: 'Aggregate · no individual ranking' },
  { value: '93%', label: 'Export-ready', context: 'Definition: approved & reconciled' },
];

export default function EvidenceTimelines() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pt-12 sm:pt-16 pb-16 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-10 sm:gap-12">

        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Evidence, Reporting &amp; Connected Work</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            Evidence Timelines, Not Decorative Charts
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400 leading-7">
            Every metric carries a definition, scope, timeframe, and data-quality context — no worker
            ranking, ever.
          </p>
        </div>

        <div className="w-full flex flex-col gap-5">

          {/* Record Timeline */}
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            {timelineRows.map((row, idx) => (
              <div
                key={row.time}
                className={`py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 ${
                  idx > 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''
                }`}
              >
                <span className="sm:w-28 shrink-0 text-xs text-slate-400 dark:text-slate-500 leading-5">
                  {row.time}
                </span>
                <span className="flex-1 text-xs text-slate-900 dark:text-slate-200 leading-5">
                  {row.event}
                </span>
                <span
                  className={`sm:w-24 shrink-0 self-start sm:self-auto px-2.5 py-1 rounded-full text-xs font-bold leading-5 text-center ${row.badgeStyles}`}
                >
                  {row.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Defined Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 bg-green-50 dark:bg-slate-900 rounded-[10px] flex flex-col gap-1"
              >
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white leading-10">
                  {metric.value}
                </span>
                <span className="text-xs text-gray-500 dark:text-slate-400 leading-5">
                  {metric.label}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 leading-4">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>

          {/* Reporting Photo */}
          <figure className="relative rounded-[20px] overflow-hidden">
            <img
              className="w-full h-64 sm:h-72 object-cover"
              src="/product-overview/evidence-reporting.png"
              alt="A finance and operations analyst reviewing scoped, defined reporting metrics"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-6 sm:px-8 py-6 bg-linear-to-t from-slate-900/90 to-slate-900/0 text-white text-sm sm:text-base font-medium leading-6">
              <span className="block max-w-136">
                Every metric is scoped, defined, and sourced — built for review, not for ranking
                people.
              </span>
            </figcaption>
          </figure>

          {/* Governed Assistant Answer */}
          <div className="p-5 sm:p-6 bg-slate-900 rounded-2xl flex flex-col gap-2">
            <p className="text-sm text-white/60 leading-6">
              &quot;How many records in Operations are still pending review this period?&quot;
            </p>
            <p className="text-sm sm:text-base text-white leading-6">
              18 records are pending review in Operations for this pay period, mostly awaiting manager
              approval.
            </p>
            <p className="text-xs text-emerald-400 leading-5">
              Governed sources: Time Record Ledger · scope: Operations, Aug Period 1 · open source
              record →
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
