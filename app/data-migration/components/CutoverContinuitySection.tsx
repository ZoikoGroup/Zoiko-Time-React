interface CutoverControl {
  control: string;
  requiredContent: string;
}

const controlsData: CutoverControl[] = [
  {
    control: 'Cutover scope',
    requiredContent:
      'Exact objects, periods, entities, locations, source versions, mapping version, exclusions, accepted exceptions.',
  },
  {
    control: 'Freeze strategy',
    requiredContent:
      'What freezes, who authorizes, the window only when approved, late-change handling, and communication.',
  },
  {
    control: 'Runbook',
    requiredContent:
      'Ordered actions, owners, checkpoints, verification, pause and resume, escalation, rollback, evidence capture.',
  },
  {
    control: 'Go / no-go',
    requiredContent:
      'Named authority, quorum or conditions, evidence summary, blockers, accepted exceptions, recorded decision.',
  },
  {
    control: 'Operational continuity',
    requiredContent:
      'Source-of-truth transition, read-only period, user access, critical process continuity, support, communication.',
  },
  {
    control: 'Rollback',
    requiredContent:
      'Trigger, authority, restoration point, destination handling, source reactivation, communication, post-event review.',
  },
  {
    control: 'Stabilization',
    requiredContent:
      'Observation window where contractually approved, exception queue, correction routing, reconciliation refresh, support ownership.',
  },
  {
    control: 'Partial success',
    requiredContent:
      'Object-level state and independence. No global green status while a critical object is blocked.',
  },
  {
    control: 'Closure',
    requiredContent:
      'Final reconciliation, evidence pack, access review, staging deletion, source disposition, open items, operational acceptance.',
  },
];

export default function CutoverContinuitySection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8">
        <header className="flex w-full max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Cutover, Operational Continuity &amp; Rollback
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Cutover Is an Authorized Operational Change
          </h2>
          <p className="max-w-[643px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Nine controls, designed before the window opens. Rollback is planned
            while there is still time to plan it.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300">
                  <th scope="col" className="min-w-[160px] w-1/4 px-5 py-3.5 sm:w-1/5">
                    Control
                  </th>
                  <th scope="col" className="w-3/4 px-5 py-3.5 sm:w-4/5">
                    Required content
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
                {controlsData.map((item) => (
                  <tr
                    key={item.control}
                    className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                  >
                    <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-slate-900 dark:text-slate-100">
                      {item.control}
                    </td>
                    <td className="align-top px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.requiredContent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex w-full max-w-[820px] flex-col gap-1 rounded-xl border border-rose-200 bg-rose-50 p-4 shadow-sm dark:border-rose-900/60 dark:bg-rose-950/40 sm:p-5">
          <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
            We do not promise zero downtime
          </span>
          <p className="text-xs leading-relaxed text-rose-800 dark:text-rose-300 sm:text-sm">
            Continuity and cutover design depend on the source, scope,
            interfaces, operating model, and approved plan. Any organization
            promising no downtime before seeing your source landscape is guessing.
          </p>
        </div>
      </div>
    </section>
  );
}
