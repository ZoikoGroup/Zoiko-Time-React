interface RegistryItem {
  name: string;
  requiredFields: string;
  publicTreatment: string;
}

const registryData: RegistryItem[] = [
  {
    name: 'Source system',
    requiredFields:
      'Canonical name, version or mode, owner, objects, direction, authentication, region, limitations, status, evidence, review date.',
    publicTreatment: 'Approved records only, or a neutral "requires assessment" category.',
  },
  {
    name: 'Object family',
    requiredFields:
      'Object meaning, required fields, relationships, temporal rules, correction treatment, retention.',
    publicTreatment: 'Named families only where currently supported.',
  },
  {
    name: 'History and scale',
    requiredFields: 'Period support, volume band, performance constraint, dependency.',
    publicTreatment: 'Bands and constraints - never "all history".',
  },
  {
    name: 'Region',
    requiredFields: 'Data location context, transfer path, support access, restrictions.',
    publicTreatment: 'Shown only when registry-verified.',
  },
  {
    name: 'Exclusion',
    requiredFields: 'Object, reason, alternative, owner, review date.',
    publicTreatment: 'Exclusions are published, not omitted.',
  },
];

const checklistAnswers = [
  'Bring your source category, object families, scale band, history band, and region',
  'A qualified assessment confirms what is supported today',
  'It also names what requires preparation and what is excluded',
  'Every answer carries an owner and a review date',
];

const checklistExclusions = [
  'A connector logo wall or vendor grid',
  '"Any system" or "all history" claims',
  'Unverified system names or version support',
  'Volume or throughput figures without evidence',
];

export default function SourceScopeRegistrySection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10">
        <header className="mx-auto flex max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Source, Object &amp; Scope Registry
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Coverage Is a Verified Record, Not a Logo Wall
          </h2>
          <p className="max-w-[640px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A source appears here only as an approved registry record or under the
            neutral category &quot;requires assessment.&quot; We do not publish a list of
            systems we have not verified.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300">
                  <th scope="col" className="w-1/6 px-5 py-3.5">
                    Registry
                  </th>
                  <th scope="col" className="w-1/2 px-5 py-3.5">
                    Required fields
                  </th>
                  <th scope="col" className="w-1/3 px-5 py-3.5">
                    Public treatment
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
                {registryData.map((row) => (
                  <tr
                    key={row.name}
                    className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                  >
                    <td className="align-top px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">
                      {row.name}
                    </td>
                    <td className="align-top px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-300">
                      {row.requiredFields}
                    </td>
                    <td className="align-top px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-300">
                      {row.publicTreatment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-100/60 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-2.5">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-500/10 border border-emerald-500/40 dark:bg-emerald-500/20">
                <svg className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                How to get a real answer
              </h3>
            </div>

            <ul className="space-y-3">
              {checklistAnswers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-100/60 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-2.5">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-rose-500/40 bg-rose-500/10 dark:bg-rose-500/20">
                <svg className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                What you will not find here
              </h3>
            </div>

            <ul className="space-y-3">
              {checklistExclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs font-bold text-rose-600 dark:text-rose-400">
                    ✕
                  </span>
                  <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
