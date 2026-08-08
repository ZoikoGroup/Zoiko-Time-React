type Dimension = {
  title: string;
  body: string;
  note?: string;
  muted?: boolean;
};

const dimensions: Dimension[] = [
  {
    title: "Availability",
    body: "Eligible successful service behavior for defined requests or critical journeys.",
    note: "Not a platform-wide claim from one endpoint.",
  },
  {
    title: "Performance",
    body: "Latency, processing time, queue age, throughput, and load behavior within a defined scope.",
    note: "Region, workload, and method always stated.",
  },
  {
    title: "Job completion",
    body: "Imports, exports, schedules, classifications, approvals, reports, and other asynchronous work.",
    note: "A fast UI can sit above a stalled queue.",
  },
  {
    title: "Data freshness",
    body: "Time since source, processing, or synchronization event under a defined clock and scope.",
    note: "Stale data is a reliability failure.",
  },
  {
    title: "Integrity & durability",
    body: "Completeness, uniqueness, consistency, lineage, persistence, verification, and correction.",
    note: "No perfect-integrity guarantee is made.",
  },
  {
    title: "Change safety",
    body: "Validation, rollout, observation, rollback, and emergency-change evidence.",
    note: "Most incidents begin as a change.",
  },
  {
    title: "Recoverability",
    body: "Backup, restore, failover, reconciliation, dependency, and human-response evidence.",
    note: "Backup existence is not restore proof.",
  },
  {
    title: "Why separate?",
    body: "Collapsing these into a single uptime figure hides exactly the failures that affect workforce records most — a delayed export, a stale sync, a silent integrity gap.",
    muted: true,
  },
];

export default function ControlModel() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Reliability Control Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Seven Dimensions That Must Not Collapse Into One Number
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A responding interface does not prove that records are correct,
            synchronized, or ready for payroll. These dimensions fail
            independently, so they are measured independently.
          </p>

        </div>

        {/* Dimensions */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {dimensions.map((dimension) => (
            <article
              key={dimension.title}
              className={`flex flex-col rounded-xl border p-4 ${
                dimension.muted
                  ? "border-[#E2F3EC] bg-[#F5FEF7] dark:border-emerald-900/40 dark:bg-emerald-950/20"
                  : "border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >

              <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                {dimension.title}
              </h3>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {dimension.body}
              </p>

              {dimension.note && (
                <p className="mt-3 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                  {dimension.note}
                </p>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
