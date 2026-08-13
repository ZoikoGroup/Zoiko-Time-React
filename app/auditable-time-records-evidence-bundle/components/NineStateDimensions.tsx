import React from 'react';

interface Dimension {
  title: string;
  values: string;
  caveat: string;
}

const dimensions: Dimension[] = [
  {
    title: 'Builder state',
    values: 'Draft · validation error · ready to confirm · approval required.',
    caveat: 'Do not infer generation readiness from evidence completeness alone.',
  },
  {
    title: 'Generation state',
    values: 'Queued · processing · partial · failed · ready · unknown result.',
    caveat: 'Job state is separate from access and delivery.',
  },
  {
    title: 'Evidence completeness',
    values:
      'Complete for the selected purpose · partial · missing · restricted · stale · conflicting · unknown.',
    caveat: 'No universal “complete evidence” claim.',
  },
  {
    title: 'Permission state',
    values: 'Authorized · limited · approval required · denied · changed since generation.',
    caveat: 'Server-authoritative, always rechecked.',
  },
  {
    title: 'Access state',
    values: 'Available · viewed · downloaded · expired · revoked · blocked.',
    caveat: 'Separate from delivery.',
  },
  {
    title: 'Delivery state',
    values: 'Not requested · pending · delivered · rejected · unknown.',
    caveat: 'Separate from recipient acceptance and reconciliation.',
  },
  {
    title: 'Reconciliation state',
    values: 'Not applicable · pending · matched · mismatch · unresolved · reopened.',
    caveat: 'Only where a downstream comparison is configured.',
  },
  {
    title: 'Lifecycle state',
    values: 'Current · superseded · retention-limited · disposition pending · disposed where supported.',
    caveat: 'Historical attribution stays distinct from current usability.',
  },
  {
    title: 'Integrity feature state',
    values: 'Not supported · available · generated · verification failed or unknown.',
    caveat: 'Never imply cryptographic assurance from package presence.',
  },
];

export default function NineStateDimensions() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Nine independent state dimensions
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            These are orthogonal, not stages. A bundle can be authorized, generated, and expired at
            the same time — and generation readiness can never be inferred from evidence
            completeness.
          </p>
        </div>

        {/* Dimension Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {dimensions.map((item) => (
            <div
              key={item.title}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.values}
              </p>
              <p className="mt-auto pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                {item.caveat}
              </p>
            </div>
          ))}
        </div>

        {/* Orthogonality Callout */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 space-y-1.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Why orthogonality matters
          </span>
          <p className="text-xs sm:text-sm leading-relaxed text-rose-800 dark:text-rose-200">
            Collapsing these into a single progress bar is the most common way an export feature
            starts lying. “Ready” would then imply delivered, delivered would imply accepted, and a
            package with four of nine items would look finished. Keeping them independent is what
            lets the manifest above say <em className="italic font-semibold">partial</em> and mean it.
          </p>
        </div>

      </div>
    </section>
  );
}
