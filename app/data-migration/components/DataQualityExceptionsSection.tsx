interface ExceptionCategory {
  category: string;
  examples: string;
  disposition: string;
}

const exceptionCategories: ExceptionCategory[] = [
  {
    category: 'Structural',
    examples: 'Missing column, invalid type, duplicate key, broken relationship.',
    disposition: 'Correct the source or export, apply an approved transform, exclude, or block.',
  },
  {
    category: 'Semantic',
    examples: 'Ambiguous code, changed meaning, undocumented field, mixed units.',
    disposition: 'Business owner decision and a versioned mapping.',
  },
  {
    category: 'Temporal',
    examples: 'Missing time zone, DST ambiguity, invalid period, out-of-order event.',
    disposition: 'Approved temporal rule, correction, exclusion, or block.',
  },
  {
    category: 'Identity',
    examples: 'No match, multiple matches, recycled identifier, inactive identity.',
    disposition: 'Human review. Ambiguous people are never auto-merged.',
  },
  {
    category: 'Policy / approval',
    examples: 'Missing policy version, unresolved approval, disputed record.',
    disposition: 'Preserve the unresolved state and route to authorized review.',
  },
  {
    category: 'Privacy / security',
    examples: 'Out-of-scope sensitive field, overbroad access, insecure transfer path.',
    disposition: 'Remove, restrict, redesign, or block until approved.',
  },
  {
    category: 'Correction / evidence',
    examples: 'Open correction, missing attribution, unavailable attachment, broken evidence link.',
    disposition: 'Map, reference, exclude with approved treatment, or block.',
  },
  {
    category: 'Unsupported',
    examples: 'Object, format, source version, volume, or behavior outside verified support.',
    disposition: 'Mark unavailable and route to assessment or controlled custom review.',
  },
];

export default function DataQualityExceptionsSection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8">
        <header className="mx-auto flex max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Data Quality, Exceptions &amp; Source Remediation
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Eight Exception Categories, Each With an Approved Disposition
          </h2>
          <p className="max-w-[640px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A finding needs a decision, not a rating. Every category below routes
            to a named human with a defined set of options.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300">
                  <th scope="col" className="w-1/6 px-5 py-3.5">
                    Category
                  </th>
                  <th scope="col" className="w-5/12 px-5 py-3.5">
                    Examples
                  </th>
                  <th scope="col" className="w-5/12 px-5 py-3.5">
                    Required disposition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
                {exceptionCategories.map((item) => (
                  <tr
                    key={item.category}
                    className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                  >
                    <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-slate-900 dark:text-slate-100">
                      {item.category}
                    </td>
                    <td className="align-top px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.examples}
                    </td>
                    <td className="align-top px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.disposition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-100/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/20">
            <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed font-semibold text-slate-800 dark:text-slate-200 sm:text-base">
            No composite blame score. Source quality and migration readiness are
            never reduced to a hidden number that ranks teams, workers, or
            administrators. We show findings, evidence, ownership, and gates.
          </p>
        </div>
      </div>
    </section>
  );
}
