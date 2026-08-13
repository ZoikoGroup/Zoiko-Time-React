import React from 'react';

interface HistoryState {
  state: string;
  behaviour: React.ReactNode;
  emphasised?: boolean;
}

const states: HistoryState[] = [
  {
    state: 'Loading',
    behaviour: 'Skeleton for timeline and detail; context heading preserved; completion announced.',
  },
  {
    state: 'No material history',
    behaviour:
      '“No material review-history events are available for this record in your permitted scope.”',
  },
  {
    state: 'Restricted',
    behaviour: (
      <>
        A safe explanation, with{' '}
        <span className="font-bold text-slate-900 dark:text-white">
          no hidden titles, counts, or content
        </span>
        .
      </>
    ),
  },
  {
    state: 'Partial history',
    behaviour: 'Available period and coverage, plus the missing, retention, or migration limitation.',
  },
  {
    state: 'Late event',
    behaviour: 'Inserted with a late-arrival marker and an explanation that preserves prior chronology.',
  },
  {
    state: 'Missing linkage',
    behaviour:
      'The event exists but its linked version or evidence is unavailable — owner and recovery path shown.',
  },
  {
    state: 'Authority changed',
    emphasised: true,
    behaviour: (
      <>
        The decision stays historical; current authority is shown separately.{' '}
        <span className="font-bold text-slate-900 dark:text-white">No retroactive relabelling.</span>
      </>
    ),
  },
  {
    state: 'Superseded',
    behaviour:
      'Successor and current link with reason; the prior event remains accessible where permitted.',
  },
  {
    state: 'Notice failed',
    behaviour: 'The decision and history remain recorded; the notification failure is explicit and owned.',
  },
  {
    state: 'Permission changed while viewing',
    behaviour:
      'Access revalidated, newly restricted content hidden, safe context maintained — and no leak through the error.',
  },
  {
    state: 'Retention-limited',
    behaviour: (
      <>
        Allowed residual metadata and the period limitation.{' '}
        <span className="font-bold text-slate-900 dark:text-white">
          Disposed content is not reconstructed.
        </span>
      </>
    ),
  },
  {
    state: 'Migration-limited',
    behaviour:
      'Import batch, coverage, and transform reference, plus the missing prior-history limitation.',
  },
  {
    state: 'Service error',
    behaviour:
      'Selected record and filter context preserved, retry, a reference ID, and a route to the Help Center.',
  },
  {
    state: 'No JavaScript',
    behaviour: 'Server-rendered direct answer, event list, limitations, and links remain usable.',
  },
  {
    state: 'Reversal unsupported',
    behaviour: 'A compensating corrective event is shown rather than implying a rollback occurred.',
  },
];

export default function IncompleteHistoryStates() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            When history is incomplete
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Fifteen states. None of them fabricates a chronology, reconstructs disposed content, or
            leaks a restricted event through an error message.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200">
                <th scope="col" className="w-64 py-3.5 px-5">
                  State
                </th>
                <th scope="col" className="py-3.5 px-5">
                  Required behaviour
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              {states.map((item) => (
                <tr
                  key={item.state}
                  className={
                    item.emphasised
                      ? 'bg-rose-50/60 dark:bg-rose-950/20'
                      : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors'
                  }
                >
                  <td className="py-4 px-5 font-semibold text-slate-900 dark:text-slate-100 align-top">
                    {item.state}
                  </td>
                  <td className="py-4 px-5 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                    {item.behaviour}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="grid md:hidden grid-cols-1 gap-4 w-full">
          {states.map((item) => (
            <div
              key={item.state}
              className={`p-5 rounded-2xl border shadow-sm space-y-2 ${
                item.emphasised
                  ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.state}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.behaviour}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
