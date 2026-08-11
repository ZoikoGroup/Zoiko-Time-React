const intersection = [
  "Tenant and entity",
  "Group and worker population",
  "Purpose",
  "Role and permitted action",
  "Data category",
  "Jurisdiction",
  "Current policy version",
];

const stages = [
  {
    number: "01",
    title: "Draft",
    body: "Reason, owner, and intended scope recorded.",
    owner: "Proposer",
  },
  {
    number: "02",
    title: "Scope review",
    body: "Affected entities, groups, and populations confirmed.",
    owner: "Reviewer",
  },
  {
    number: "03",
    title: "Validation",
    body: "Conflicts, floors, and incomplete sources checked.",
    owner: "System",
  },
  {
    number: "04",
    title: "Simulation",
    body: "Impact preview on synthetic or minimized data.",
    owner: "Proposer & reviewer",
  },
  {
    number: "05",
    title: "Required approvals",
    body: "Eligible approvers, separated from the proposer.",
    owner: "Human only",
    highlighted: true,
  },
  {
    number: "06",
    title: "Scheduled activation",
    body: "Effective date and timezone; staged by cohort where approved.",
    owner: "System, on schedule",
  },
  {
    number: "07",
    title: "Active monitoring",
    body: "Behavior, source health, and worker impact observed.",
    owner: "Operating owner",
  },
  {
    number: "08",
    title: "Correction or rollback",
    body: "Original change preserved; downstream reconciliation tracked.",
    owner: "Authorized human",
  },
  {
    number: "09",
    title: "Supersession or retirement",
    body: "Prior version linked, never deleted.",
    owner: "Governance",
  },
];

export default function RolesAndChangeLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Roles & Separation */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Roles, Approvals &amp; Separation
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              A Global Role Is Not Global Access
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Effective permission is computed, not assigned. The same role in two
              scopes yields two different results.
            </p>

            {/* The Intersection */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                The intersection
              </h3>

              <ul className="mt-4 flex flex-col gap-2.5">
                {intersection.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Every one must permit the action. Any single denial denies the
                whole.
              </p>

            </div>

            {/* Separation of Duties */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Separation of duties
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                No self-approval where separation is required. Proposing, reviewing,
                approving, activating, and auditing are distinct authorities. There
                is no silent reassignment, and neither workflow automation nor
                Kairos can decide, approve, or activate an administrative change.
              </p>

            </div>

          </div>

          {/* Change Lifecycle */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Administrative Change Lifecycle
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Nine stages, no instant high-risk activation
            </h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px] border-collapse text-left">

                  <tbody>
                    {stages.map((stage) => (
                      <tr
                        key={stage.number}
                        className={`border-b border-stone-100 last:border-b-0 dark:border-slate-800/60 ${
                          stage.highlighted
                            ? "bg-emerald-50/40 dark:bg-emerald-950/10"
                            : ""
                        }`}
                      >

                        <td
                          className={`w-14 border-r border-stone-100 px-4 py-6 text-center align-middle text-xs font-extrabold leading-5 dark:border-slate-800/60 ${
                            stage.highlighted
                              ? "text-emerald-800 dark:text-emerald-300"
                              : "text-zinc-500 dark:text-slate-400"
                          }`}
                        >
                          {stage.number}
                        </td>

                        <td className="px-4 py-3.5 align-middle">

                          <p className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                            {stage.title}
                          </p>

                          <p className="mt-0.5 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                            {stage.body}
                          </p>

                        </td>

                        <td
                          className={`w-40 border-l border-stone-100 px-4 py-6 align-middle text-xs leading-5 dark:border-slate-800/60 ${
                            stage.highlighted
                              ? "font-bold text-emerald-800 dark:text-emerald-300"
                              : "font-normal text-zinc-500 dark:text-slate-400"
                          }`}
                        >
                          {stage.owner}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            <p className="mt-5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

              <span className="font-bold text-sky-950 dark:text-white">
                A failed activation enters a safe recoverable state with partial
                effects visible
              </span>{" "}
              — not a silent half-applied configuration. And rollback does not
              erase the original change, nor does it guarantee downstream
              reconciliation is complete; that is tracked separately.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
