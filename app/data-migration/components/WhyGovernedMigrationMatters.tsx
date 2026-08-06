interface MigrationRisk {
  id: string;
  title: string;
  risk: string;
  response: string;
}

const migrationRisks: MigrationRisk[] = [
  {
    id: 'sources-disagree',
    title: 'Multiple sources disagree',
    risk: 'The wrong system becomes authoritative by convenience.',
    response: 'Source authority, precedence, conflict states, and human resolution.',
  },
  {
    id: 'historical-semantics',
    title: 'Historical semantics changed',
    risk: 'Fields look similar but mean different things across systems or periods.',
    response:
      'Versioned object and field contracts with effective dates and transformation evidence.',
  },
  {
    id: 'missing-values',
    title: 'Missing or malformed values',
    risk: 'Import tools silently default or discard records.',
    response: 'Visible exceptions, no guessing, named ownership, approved disposition.',
  },
  {
    id: 'timezone-dst',
    title: 'Time-zone and DST differences',
    risk: 'Worked time, dates, and periods shift incorrectly.',
    response: 'Explicit temporal rules, source time zone, effective dates, boundary validation.',
  },
  {
    id: 'open-corrections',
    title: 'Open corrections and approvals',
    risk: 'Migration freezes an unresolved or contested record.',
    response: 'Correction, dispute, approval, and evidence continuity.',
  },
  {
    id: 'overbroad-scope',
    title: 'Overbroad historical scope',
    risk: 'Sensitive data moves without a current purpose.',
    response: 'Purpose limitation, minimization, exclusion, retention, and deletion gates.',
  },
  {
    id: 'access-mismatch',
    title: 'Access mismatch',
    risk: 'Users gain or lose access unexpectedly.',
    response: 'Identity mapping, least privilege, access validation, blocked fallback.',
  },
  {
    id: 'cutover-pressure',
    title: 'Cutover pressure',
    risk: 'Teams accept incomplete results to meet a date.',
    response: 'Readiness gates, go/no-go authority, accepted exceptions, rollback, stabilization.',
  },
];

export default function WhyGovernedMigrationMatters() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans transition-colors duration-200 dark:bg-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-10">
        <div className="flex max-w-[780px] flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Why Governed Migration Matters
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            A Migration Is Not a Copy Operation
          </h2>
          <p className="max-w-[644px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Workforce records carry meaning, attribution, correction rights, and
            evidence. Eight ways a technically successful transfer destroys all
            four.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3.5">
          {migrationRisks.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-slate-300 dark:border-slate-700/80 dark:bg-slate-800 dark:hover:border-slate-600 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              <div className="w-full shrink-0 sm:w-64">
                <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Risk:
                  </strong>{' '}
                  {item.risk}
                </p>

                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  <strong className="font-medium text-emerald-600 dark:text-emerald-400">
                    Response -
                  </strong>{' '}
                  {item.response}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
