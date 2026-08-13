import React from 'react';

interface DetailRow {
  label: string;
  value: React.ReactNode;
}

const sourceRows: DetailRow[] = [
  { label: 'Source', value: 'Site terminal check-in and check-out' },
  { label: 'Recorded', value: 'Check-in 06:58, check-out 14:12, both received at the time' },
  { label: 'Freshness', value: 'Current — no delay affecting this record' },
  {
    label: 'Known limitation',
    value:
      'The site register feed was delayed on this date, so project references were not attached automatically',
  },
];

const policyRows: DetailRow[] = [
  {
    label: 'Policy used',
    value: 'Field North Working Time, version 3 — the version effective on 6 August',
  },
  {
    label: 'Plain explanation',
    value:
      'Your shift was within the standard threshold and your break met the minimum for a shift of this length, so it classified as a standard field shift.',
  },
  {
    label: 'Newer policy',
    value: (
      <>
        A newer policy version exists.{' '}
        <span className="font-bold">This record used version 3</span> and was not reclassified under
        it.
      </>
    ),
  },
];

export default function WorkerOwnRecord() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            A worker&apos;s own record
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            One synthetic record in a state that needs attention — because a record that is already
            approved demonstrates nothing about how a worker is treated when something is wrong.
          </p>
        </div>

        {/* Record Card */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

          {/* Synthetic Data Banner */}
          <div className="px-4 sm:px-5 py-2 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900/60">
            <span className="text-xs font-bold tracking-tight text-amber-700 dark:text-amber-400">
              Illustrative synthetic record — not real worker data
            </span>
          </div>

          {/* Record Header */}
          <div className="px-4 sm:px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-start justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 dark:text-white leading-7">
                Wednesday 6 August 2026
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 leading-5">
                Site survey · Northgate · 6h 45m recorded · break 45m · times in Europe/Berlin
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/30 text-xs font-bold text-amber-700 dark:text-amber-400 shrink-0">
              Needs context
            </span>
          </div>

          {/* What This Means */}
          <div className="px-4 sm:px-5 pt-3 pb-3.5 bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-900/60 space-y-1.5">
            <span className="block text-[9px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              What this means
            </span>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-6">
              A required project reference is missing from this record, so it needs context before
              review can complete. This is a missing detail —{' '}
              <span className="font-bold">it is not a finding about you</span>, and it does not affect
              any other record.
            </p>
            <p className="pt-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400 leading-5">
              Next decision: unit reviewer, Field Services North · not an automated decision
            </p>
          </div>

          {/* Where This Came From */}
          <div className="px-4 sm:px-5 pt-3 pb-3.5 border-b border-slate-100 dark:border-slate-800/60 space-y-3">
            <span className="block text-[9px] font-extrabold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              Where this came from
            </span>
            <dl className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-4">
              {sourceRows.map((row) => (
                <React.Fragment key={row.label}>
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-5">
                    {row.label}
                  </dt>
                  <dd className="text-xs text-slate-700 dark:text-slate-300 leading-5 mb-1 sm:mb-0">
                    {row.value}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-5">
              <span className="font-bold text-slate-800 dark:text-slate-200">
                The delay is a system condition, not a worker condition.
              </span>{' '}
              It explains why the reference is absent.
            </p>
          </div>

          {/* Which Rules Applied */}
          <div className="px-4 sm:px-5 pt-3 pb-3.5 border-b border-slate-100 dark:border-slate-800/60 space-y-3">
            <span className="block text-[9px] font-extrabold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              Which rules applied
            </span>
            <dl className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-4">
              {policyRows.map((row) => (
                <React.Fragment key={row.label}>
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-5">
                    {row.label}
                  </dt>
                  <dd className="text-xs text-slate-700 dark:text-slate-300 leading-5 mb-1 sm:mb-0">
                    {row.value}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-5">
              This explains how the record was categorized. It is not legal advice and does not state
              any pay entitlement.
            </p>
          </div>

          {/* Your Rights On This Record */}
          <div className="px-4 sm:px-5 pt-2.5 pb-3 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-1">
            <span className="block text-[9px] font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              Your rights on this record
            </span>
            <p className="text-xs text-emerald-900/90 dark:text-emerald-200/90 leading-5">
              You can add context, request a correction, see who reviewed it and why, follow the
              status, and escalate if you disagree with the outcome. Using any of these does not waive
              a privacy, grievance, appeal, legal, or contractual right — and no action here is
              required before you can ask a question.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
