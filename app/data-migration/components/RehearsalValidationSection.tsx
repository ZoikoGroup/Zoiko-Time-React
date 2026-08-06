interface CheckLayer {
  title: string;
  description: string;
  isSpecial?: boolean;
}

const checkLayers: CheckLayer[] = [
  {
    title: 'Extraction',
    description: 'Authorized source, version, filters, checkpoint, object counts, integrity control where approved, exclusions, errors.',
  },
  {
    title: 'Structural',
    description: 'Schema, types, required fields, uniqueness, references, attachments, encoding, size and format boundaries.',
  },
  {
    title: 'Semantic',
    description: 'Code meaning, units, status meaning, policy references, approval state, correction state, unsupported values.',
  },
  {
    title: 'Temporal',
    description: 'Time zone, DST, effective dates, period boundaries, sequence, overlap, source and destination display.',
  },
  {
    title: 'Identity & access',
    description: 'Identity matches, ambiguous matches blocked, role mapping, least privilege. Denied access remains denied.',
  },
  {
    title: 'Business behavior',
    description: 'Deterministic classification boundary, policy application, neutral states, human review, worker-visible correction route.',
  },
  {
    title: 'Evidence',
    description: 'Source attribution, extraction ID, mapping and transform version, reviewer, approval, event timeline, artifact integrity.',
  },
  {
    title: 'Reconciliation',
    description: 'Expected, extracted, transformed, loaded, excluded, duplicate, failed, corrected, accepted difference, unresolved.',
  },
  {
    title: 'Repeatability',
    description: 'The same approved input and versions produce the same governed output. A re-run does not duplicate accepted records.',
    isSpecial: true,
  },
];

interface LedgerRow {
  object: string;
  expected: string;
  extracted: string;
  loaded: string;
  excluded: string;
  failed: string;
  acceptedDiff: string;
  unresolved: string;
  status: 'Verified' | 'Accepted exception' | 'Blocked' | 'Pending approval';
}

const ledgerData: LedgerRow[] = [
  {
    object: 'Time records',
    expected: '184,206',
    extracted: '184,206',
    loaded: '183,910',
    excluded: '296',
    failed: '0',
    acceptedDiff: '296',
    unresolved: '0',
    status: 'Verified',
  },
  {
    object: 'Attendance',
    expected: '61,044',
    extracted: '61,044',
    loaded: '61,044',
    excluded: '0',
    failed: '0',
    acceptedDiff: '0',
    unresolved: '0',
    status: 'Verified',
  },
  {
    object: 'Breaks',
    expected: '78,510',
    extracted: '78,510',
    loaded: '77,984',
    excluded: '508',
    failed: '18',
    acceptedDiff: '508',
    unresolved: '18',
    status: 'Accepted exception',
  },
  {
    object: 'People references',
    expected: '4,120',
    extracted: '4,120',
    loaded: '4,114',
    excluded: '0',
    failed: '6',
    acceptedDiff: '0',
    unresolved: '6',
    status: 'Blocked',
  },
  {
    object: 'Corrections',
    expected: '1,338',
    extracted: '1,338',
    loaded: '1,338',
    excluded: '0',
    failed: '0',
    acceptedDiff: '0',
    unresolved: '0',
    status: 'Pending approval',
  },
];

const getStatusBadge = (status: LedgerRow['status']) => {
  switch (status) {
    case 'Verified':
      return (
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
          Verified
        </span>
      );
    case 'Accepted exception':
      return (
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
          Accepted exception
        </span>
      );
    case 'Blocked':
      return (
        <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
          Blocked
        </span>
      );
    case 'Pending approval':
      return (
        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
          Pending approval
        </span>
      );
    default:
      return null;
  }
};

export default function RehearsalValidationSection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10">
        <header className="mx-auto flex max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Rehearsal, Validation &amp; Reconciliation
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Nine Check Layers, Then a Ledger That Has to Balance
          </h2>
          <p className="max-w-[643px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Rehearsal proves repeatability and meaning before production cutover.
            Validation and reconciliation stay reviewable at object and rule level.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {checkLayers.map((layer) => (
            <div
              key={layer.title}
              className={`flex flex-col gap-2 rounded-2xl border p-6 shadow-sm transition-all ${
                layer.isSpecial
                  ? 'border-slate-300 bg-slate-100/90 dark:border-slate-700 dark:bg-slate-900/90'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300">
                  <th scope="col" className="px-4 py-3.5">
                    Object
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Expected
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Extracted
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Loaded
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Excluded
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Failed
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Accepted diff.
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right">
                    Unresolved
                  </th>
                  <th scope="col" className="px-4 py-3.5">
                    State
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
                {ledgerData.map((row) => (
                  <tr
                    key={row.object}
                    className={`transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40 ${
                      row.status === 'Blocked' ? 'bg-rose-50/40 dark:bg-rose-950/10' : ''
                    }`}
                  >
                    <td className="align-middle whitespace-nowrap px-4 py-3.5 font-semibold text-slate-900 dark:text-slate-100">
                      {row.object}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.expected}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.extracted}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.loaded}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.excluded}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.failed}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.acceptedDiff}
                    </td>
                    <td className="align-middle px-4 py-3.5 text-right font-mono text-slate-600 dark:text-slate-300">
                      {row.unresolved}
                    </td>
                    <td className="align-middle whitespace-nowrap px-4 py-3.5">
                      {getStatusBadge(row.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
            Reconciliation ledger, synthetic. Every difference is categorized and
            owned - &quot;accepted difference&quot; is a decision with a name on it, not a
            rounding gap.
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          6 unresolved identity records block their object. They are not written
          as &quot;no match&quot; placeholders, and they do not reduce to a percentage that
          makes the program look complete.
        </p>
      </div>
    </section>
  );
}
