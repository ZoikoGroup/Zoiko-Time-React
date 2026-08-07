const records = [
  {
    label: "Record 01",
    title: "Deployment charter",
    description:
      "Scope, purpose, owners, included and excluded objects, timeline, dependencies, status, version.",
    closesWith: "Named approval.",
  },
  {
    label: "Record 02",
    title: "Availability record",
    description:
      "Scope, dimensions, status, evidence references, owner, reviewer, limitations.",
    closesWith: "Effective and review dates.",
  },
  {
    label: "Record 03",
    title: "Configuration and test",
    description:
      "Profiles, changes, impact, expected and actual results, defects, reviewer and approver.",
    closesWith: "Effective date.",
  },
  {
    label: "Record 04",
    title: "Rollout decision",
    description:
      "Wave, evidence summary, unresolved conditions, approvers, decision, cutover and rollback, communication.",
    closesWith: "Recorded activation event.",
  },
];

export default function EvidenceRecords() {
  return (
    <section id="evidence-model" className="scroll-mt-24 w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Evidence, Procurement &amp; Commercial Readiness
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Four Records That Make a Deployment Defensible
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Evidence supports deployment, procurement, operations, and review —
            without exposing sensitive worker, security, legal, credential, or
            contract detail.
          </p>

        </div>

        {/* Record Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {records.map((record) => (
            <div
              key={record.label}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-7 dark:border-slate-800 dark:bg-slate-900"
            >

              {/* Accent Bar */}
              <span
                className="absolute inset-y-0 left-0 w-[3px] bg-emerald-400"
                aria-hidden="true"
              />

              <p className="text-xs font-extrabold leading-5 tracking-wider text-emerald-800 dark:text-emerald-400">
                {record.label}
              </p>

              <h3 className="mt-2.5 text-base font-bold leading-6 text-sky-950 dark:text-white">
                {record.title}
              </h3>

              <p className="mt-1 flex-1 pb-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                {record.description}
              </p>

              <div className="border-t border-stone-200 pt-3 dark:border-slate-800">

                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:text-white">
                  Closes with
                </p>

                <p className="mt-1 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {record.closesWith}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
