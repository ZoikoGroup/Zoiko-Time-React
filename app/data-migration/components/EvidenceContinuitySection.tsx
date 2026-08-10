interface EvidenceRecord {
  object: string;
  minimumContent: string;
}

const evidenceData: EvidenceRecord[] = [
  {
    object: 'Source snapshot',
    minimumContent:
      'Source ID, version, authority, owner, extraction scope, time, actor or service identity, integrity reference, restriction.',
  },
  {
    object: 'Mapping evidence',
    minimumContent:
      'Mapping set and version, field contract, transformation rule and version, test cases, author, reviewer, approval, effective date.',
  },
  {
    object: 'Rehearsal record',
    minimumContent:
      'Dataset reference, minimized scope, environment, run ID, versions, results, exceptions, decision, rerun lineage.',
  },
  {
    object: 'Validation record',
    minimumContent:
      'Check definition and version, object, expected, actual, result, limitation, reviewer, accepted exception, evidence link.',
  },
  {
    object: 'Reconciliation record',
    minimumContent:
      'Expected, extracted, loaded, excluded, failed and corrected counts, differences, owners, disposition, approval.',
  },
  {
    object: 'Cutover decision',
    minimumContent:
      'Scope version, evidence summary, blockers, exceptions, authority, decision, conditions, timestamp, rollback readiness.',
  },
  {
    object: 'Correction lineage',
    minimumContent:
      'Original record, migrated record, correction request, decision, changed values, attribution, downstream acknowledgement.',
  },
  {
    object: 'Closure pack',
    minimumContent:
      'Final scope, reconciliation, accepted differences, open items, access review, deletion and retirement evidence, runbooks, ownership.',
  },
  {
    object: 'Controlled export',
    minimumContent:
      'Purpose, requester, approver, fields, minimization, format, protection, expiry, revocation, download evidence.',
  },
];

export default function EvidenceContinuitySection() {
  return (
    <section id="evidence-continuity" className="w-full bg-slate-900 px-4 py-16 font-sans text-slate-100 transition-colors dark:bg-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8">
        <header className="mx-auto flex max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Evidence Continuity &amp; Controlled Exports
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Nine Records That Connect Every Migrated Outcome to Its Source
          </h2>
          <p className="max-w-[643px] text-base leading-relaxed text-slate-300">
            Evidence links outcome to source, mapping, validation, approval, and
            cutover context without exposing unnecessary workforce data.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60 shadow-xl backdrop-blur-xs">
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 bg-white/5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th scope="col" className="w-1/4 min-w-[160px] px-5 py-3.5 sm:w-1/5">
                    Evidence object
                  </th>
                  <th scope="col" className="w-3/4 px-5 py-3.5 sm:w-4/5">
                    Minimum content
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {evidenceData.map((row) => (
                  <tr key={row.object} className="transition-colors hover:bg-white/5">
                    <td className="whitespace-nowrap px-5 py-3.5 align-top font-semibold text-white">
                      {row.object}
                    </td>
                    <td className="align-top px-5 py-3.5 leading-relaxed text-slate-300">
                      {row.minimumContent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="w-full max-w-[1180px] text-xs leading-relaxed text-slate-400">
          Watermarking appears only where approved. Format, encryption, expiry,
          and revocation capabilities are stated only when current, documented,
          owned, and approved.
        </footer>
      </div>
    </section>
  );
}
