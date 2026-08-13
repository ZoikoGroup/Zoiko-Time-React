import React from 'react';

interface FailureState {
  condition: string;
  behaviour: React.ReactNode;
  emphasised?: boolean;
}

const failureStates: FailureState[] = [
  {
    condition: 'Records changed after preview',
    emphasised: true,
    behaviour: (
      <>
        The manifest becomes <span className="font-bold text-slate-900 dark:text-white">stale</span>{' '}
        and requires revalidation. Changed versions are{' '}
        <span className="font-bold text-slate-900 dark:text-white">never silently substituted</span>{' '}
        into the confirmed package.
      </>
    ),
  },
  {
    condition: 'Generation partially succeeds',
    behaviour:
      'The bundle is Partial, the failed items are named in the final manifest, and it is not presented as Ready.',
  },
  {
    condition: 'Generation fails',
    behaviour:
      'Failure state with a safe reason, a retry path, and no half-usable artifact presented as a package.',
  },
  {
    condition: 'Duplicate confirmation',
    behaviour: 'Idempotent — a repeated confirmation does not silently create a second package.',
  },
  {
    condition: 'Permission changed since generation',
    behaviour:
      'Access is rechecked server-side and newly restricted content is withheld, without leaking through the error.',
  },
  {
    condition: 'Item unavailable at packaging time',
    behaviour:
      'Named as unavailable with a safe reason and support route; no placeholder content is generated.',
  },
  {
    condition: 'Integrity feature unsupported',
    behaviour: (
      <>
        Stated as not supported.{' '}
        <span className="font-bold text-slate-900 dark:text-white">
          No checksum, signature, or verification language appears.
        </span>
      </>
    ),
  },
  {
    condition: 'Delivery rejected',
    behaviour: 'Recorded as rejected, distinct from generation success and from access state.',
  },
  {
    condition: 'Downstream mismatch',
    behaviour: 'Expected and observed both shown; the conflict is not resolved inside the package.',
  },
  {
    condition: 'Bundle expired or revoked',
    behaviour:
      'Access blocked and the manifest remains historically attributable — with no claim that external copies were recalled.',
  },
  {
    condition: 'Retention-limited',
    behaviour:
      'Allowed residual metadata and the period limitation. Disposed content is not reconstructed.',
  },
  {
    condition: 'No JavaScript',
    behaviour:
      'Server-rendered direct answer, manifest summary, limitations, and approved links remain usable.',
  },
];

export default function PackagingFailureStates() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            When packaging goes wrong
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The governing rule: never silently substitute a changed version into a confirmed package,
            and never present a partial package as complete.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200">
                <th scope="col" className="w-64 py-3.5 px-5">
                  Condition
                </th>
                <th scope="col" className="py-3.5 px-5">
                  Required behaviour
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              {failureStates.map((item) => (
                <tr
                  key={item.condition}
                  className={
                    item.emphasised
                      ? 'bg-rose-50/40 dark:bg-rose-950/20'
                      : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors'
                  }
                >
                  <td className="py-4 px-5 font-semibold text-slate-900 dark:text-slate-100 align-top">
                    {item.condition}
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
          {failureStates.map((item) => (
            <div
              key={item.condition}
              className={`p-5 rounded-2xl border shadow-sm space-y-2 ${
                item.emphasised
                  ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.condition}</h3>
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
