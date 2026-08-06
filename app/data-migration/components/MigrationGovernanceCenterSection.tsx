interface StatusBadgeProps {
  label: string;
  variant: 'emerald' | 'amber' | 'rose' | 'sky' | 'indigo' | 'slate';
}

const statusVariantStyles: Record<StatusBadgeProps['variant'], string> = {
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  sky: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  slate: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
};

const StatusBadge = ({ label, variant }: StatusBadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors ${statusVariantStyles[variant]}`}
  >
    {label}
  </span>
);

interface ExceptionItem {
  category: string;
  object: string;
  owner: string;
  age: string;
  statusLabel: string;
  statusVariant: StatusBadgeProps['variant'];
}

const exceptionQueueData: ExceptionItem[] = [
  {
    category: 'Identity',
    object: 'People references',
    owner: 'Customer data owner',
    age: '9d',
    statusLabel: 'Blocked',
    statusVariant: 'rose',
  },
  {
    category: 'Semantic',
    object: 'Break codes',
    owner: 'Business owner',
    age: '-',
    statusLabel: 'Accepted exception',
    statusVariant: 'indigo',
  },
  {
    category: 'Temporal',
    object: 'Overnight shifts, 2019',
    owner: 'Migration lead',
    age: '4d',
    statusLabel: 'Needs review',
    statusVariant: 'amber',
  },
  {
    category: 'Structural',
    object: 'Duplicate keys, batch 7',
    owner: 'Source owner',
    age: '2d',
    statusLabel: 'Needs review',
    statusVariant: 'amber',
  },
  {
    category: 'Privacy',
    object: 'Out-of-scope field',
    owner: 'Privacy reviewer',
    age: '1d',
    statusLabel: 'Pending approval',
    statusVariant: 'sky',
  },
  {
    category: 'Unsupported',
    object: 'Legacy attachment type',
    owner: 'Migration lead',
    age: '-',
    statusLabel: 'Unavailable',
    statusVariant: 'slate',
  },
];

const moduleTags = [
  'Overview',
  'Sources',
  'Scope & Contracts',
  'Mappings',
  'Quality',
  'Rehearsals',
  'Validation',
  'Exceptions',
  'Reconciliation',
  'Cutover',
  'Corrections',
  'Evidence',
  'Decisions',
  'Access',
];

export default function MigrationGovernanceCenterSection() {
  return (
    <section className="w-full bg-slate-900 px-4 py-16 font-sans text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Migration Governance Center
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Object-Level Truth, Not a Global Progress Bar
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Each object carries its own state. When a critical object is
              blocked, the program does not show green. No summary can average
              away a blocker.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              'Source health - authority, access, owner, version, restriction review, extraction test',
              'Mapping status - approved, needs review, source conflict, unsupported semantic, changed since rehearsal',
              'Validation proof - passed, failed, warning, not run, accepted exception, dataset version',
              'Cutover readiness - authority, freeze, runbook, communications, support, rollback, evidence pack',
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/20">
                  <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-snug text-slate-200">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {moduleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Status vocabulary - text plus icon, never colour alone
            </span>
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="Verified" variant="emerald" />
              <StatusBadge label="Needs review" variant="amber" />
              <StatusBadge label="Blocked" variant="rose" />
              <StatusBadge label="Pending approval" variant="sky" />
              <StatusBadge label="Rehearsal required" variant="amber" />
              <StatusBadge label="Accepted exception" variant="indigo" />
              <StatusBadge label="Retired" variant="slate" />
              <StatusBadge label="Unavailable" variant="slate" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-5 shadow-xl sm:p-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Object-level state - Program MIG-3082
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
              <span className="text-xs font-bold text-slate-200">Time records</span>
              <StatusBadge label="Verified" variant="emerald" />
            </div>
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
              <span className="text-xs font-bold text-slate-200">Attendance</span>
              <StatusBadge label="Verified" variant="emerald" />
            </div>
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
              <span className="text-xs font-bold text-slate-200">Breaks</span>
              <StatusBadge label="Accepted exception" variant="indigo" />
            </div>
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3">
              <span className="text-xs font-bold text-slate-200">Identity refs</span>
              <StatusBadge label="Blocked" variant="rose" />
            </div>
            <div className="col-span-2 flex flex-col justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3 sm:col-span-1">
              <span className="text-xs font-bold text-slate-200">Corrections</span>
              <StatusBadge label="Pending approval" variant="sky" />
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-rose-500/40 bg-rose-950/40 p-4">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20">
              <svg className="h-3.5 w-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wide text-rose-300">
                Program status: not ready for cutover
              </span>
              <p className="text-xs leading-relaxed text-rose-200">
                Identity references are blocked on 6 ambiguous matches. Four of
                five objects are ready. The program is still not ready. There is
                no partial-green state.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <div className="overflow-x-auto rounded-xl border border-slate-700/80">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-700 bg-slate-900/90 uppercase tracking-wider text-slate-400">
                  <tr>
                    <th scope="col" className="px-3.5 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-3.5 py-3">
                      Object
                    </th>
                    <th scope="col" className="px-3.5 py-3">
                      Owner
                    </th>
                    <th scope="col" className="px-3.5 py-3">
                      Age
                    </th>
                    <th scope="col" className="px-3.5 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 bg-slate-900/40">
                  {exceptionQueueData.map((row) => (
                    <tr key={`${row.category}-${row.object}`} className="transition-colors hover:bg-slate-800/50">
                      <td className="px-3.5 py-3 font-semibold text-slate-100">{row.category}</td>
                      <td className="px-3.5 py-3 text-slate-300">{row.object}</td>
                      <td className="px-3.5 py-3 text-slate-300">{row.owner}</td>
                      <td className="px-3.5 py-3 text-slate-300">{row.age}</td>
                      <td className="px-3.5 py-3">
                        <StatusBadge label={row.statusLabel} variant={row.statusVariant} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] leading-relaxed text-slate-400 italic">
              Exception queue, synthetic. Categories are technical conditions,
              never judgments about workers or administrators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
