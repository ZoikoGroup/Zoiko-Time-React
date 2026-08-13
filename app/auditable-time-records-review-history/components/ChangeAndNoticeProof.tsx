import React from 'react';

interface ComparisonRow {
  label: string;
  before: React.ReactNode;
  after: React.ReactNode;
}

const rows: ComparisonRow[] = [
  {
    label: 'Project ref',
    before: <span className="font-bold text-amber-600 dark:text-amber-400">Not provided</span>,
    after: <span className="font-bold text-amber-600 dark:text-amber-400">PRJ-Northgate-02</span>,
  },
  { label: 'Duration', before: '6h 49m', after: '6h 49m' },
  { label: 'State', before: 'Needs input', after: 'Conditionally approved' },
  {
    label: 'Externally',
    before: 'Released 08 Aug, target holds this',
    after: 'Not yet reconciled',
  },
];

export default function ChangeAndNoticeProof() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* Change Proof Column */}
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Change proof
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Before and after, shown only where material and permitted — with units, time zone, and
              rounding included wherever they affect meaning.
            </p>
          </div>

          {/* Version Comparison */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">

              {/* Version 1 — Preserved */}
              <div className="bg-white dark:bg-slate-900 flex flex-col">
                <div className="px-4 py-3 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Version 1 · preserved
                  </span>
                </div>
                <dl className="flex-1">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-wrap gap-x-3 px-4 py-2.5 text-xs leading-5 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
                    >
                      <dt className="w-20 shrink-0 font-semibold text-slate-500 dark:text-slate-400">
                        {row.label}
                      </dt>
                      <dd className="flex-1 min-w-0 text-slate-700 dark:text-slate-200">
                        {row.before}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Linkage Divider */}
              <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/40 border-y md:border-y-0 md:border-x border-slate-200 dark:border-slate-800 px-3 py-2 md:py-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 md:[writing-mode:vertical-rl] md:rotate-180">
                  Linked · not replaced
                </span>
              </div>

              {/* Version 3 — Current */}
              <div className="bg-white dark:bg-slate-900 flex flex-col">
                <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Version 3 · current for review
                  </span>
                </div>
                <dl className="flex-1">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-wrap gap-x-3 px-4 py-2.5 text-xs leading-5 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
                    >
                      <dt className="w-20 shrink-0 font-semibold text-slate-500 dark:text-slate-400">
                        {row.label}
                      </dt>
                      <dd className="flex-1 min-w-0 text-slate-700 dark:text-slate-200">
                        {row.after}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Duration did not change — only the missing reference was added. A correction that
            supplies context is a different event from one that changes hours, and the comparison
            makes that visible rather than asking for trust.
          </p>
        </div>

        {/* Notice Proof Column */}
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Notice proof
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Communication state is tracked separately from the decision it describes, because a
              decision remains valid whether or not its notice was delivered.
            </p>
          </div>

          <img
            className="w-full h-auto rounded-2xl object-cover"
            src="/auditable-time-records-review-history/notice-proof.png"
            alt="A sealed decision on one track, with generated, sent, failed, and delivered notice states on a separate track"
          />
        </div>

      </div>
    </section>
  );
}
