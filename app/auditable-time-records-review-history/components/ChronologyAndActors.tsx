import React from 'react';

interface DefinitionRow {
  term: string;
  detail: React.ReactNode;
}

interface DefinitionCard {
  title: string;
  objective: string;
  rows: DefinitionRow[];
  limitations: string;
}

const cards: DefinitionCard[] = [
  {
    title: 'Chronology, time zone & effective time',
    objective:
      'keep five different times distinct instead of flattening them into one column.',
    rows: [
      { term: 'Event time', detail: 'When the action occurred, per the authoritative source' },
      { term: 'Receipt time', detail: 'When ZoikoTime recorded it, where materially different' },
      { term: 'Decision time', detail: 'When the authorized decision was recorded' },
      { term: 'Effective time', detail: 'When it became applicable for the configured purpose' },
      { term: 'Notice times', detail: 'Generated, sent, delivered, acknowledged — all separate' },
      {
        term: 'Late arrival',
        detail:
          'Shown at original event time with a marker; prior chronology is not silently rewritten',
      },
    ],
    limitations:
      'where source time precision or clock synchronization is limited, the limitation is shown rather than fabricating exactness. Default order is event time with a deterministic tie-breaker.',
  },
  {
    title: 'Actors, service identity & authority',
    objective:
      'never let a system look like a decision-maker, or a delegation stay invisible.',
    rows: [
      {
        term: 'Worker / requester',
        detail: 'Role and permitted identity — never represented as reviewer or approver',
      },
      {
        term: 'Reviewer / manager',
        detail: 'Role, scope, assignment, effective authority, decision eligibility',
      },
      {
        term: 'Service identity',
        detail: (
          <>
            Connector or service name and version —{' '}
            <span className="font-bold text-slate-800 dark:text-slate-100">
              never shown as a human decision-maker
            </span>
          </>
        ),
      },
      {
        term: 'System process',
        detail:
          'Validation, state transition, retry, notice orchestration — processing is not approval',
      },
      {
        term: 'Delegated authority',
        detail: (
          <>
            Delegator, delegate, scope, effective and expiry, decision linkage.{' '}
            <span className="font-bold text-slate-800 dark:text-slate-100">
              No invisible delegation.
            </span>
          </>
        ),
      },
      {
        term: 'Recusal',
        detail: 'Old and new owner, reason category, time. Prior activity stays attributable.',
      },
    ],
    limitations:
      'a reviewer cannot exceed current permission or self-approve where separation policy blocks it. Where authority later changes, the historical decision stays as recorded — there is no retroactive relabelling.',
  },
];

export default function ChronologyAndActors() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden"
          >
            {/* Card Header */}
            <div className="px-5 sm:px-6 pt-5 sm:pt-6 flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {card.title}
              </h3>
              <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                Current
              </span>
            </div>

            {/* Objective */}
            <div className="mx-5 sm:mx-6 mt-4 px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Objective:</span>{' '}
                {card.objective}
              </p>
            </div>

            {/* Definition Rows */}
            <dl className="px-5 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-5 flex-1">
              {card.rows.map((row) => (
                <React.Fragment key={row.term}>
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-6">
                    {row.term}
                  </dt>
                  <dd className="text-xs text-slate-700 dark:text-slate-300 leading-6 mb-2 sm:mb-0">
                    {row.detail}
                  </dd>
                </React.Fragment>
              ))}
            </dl>

            {/* Limitations Footer */}
            <div className="px-5 sm:px-6 py-4 bg-amber-50/50 dark:bg-amber-950/20 border-t border-dashed border-amber-200 dark:border-amber-900/60">
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                <span className="font-bold">Limitations:</span> {card.limitations}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
