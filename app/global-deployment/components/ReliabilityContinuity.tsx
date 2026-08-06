const areas = [
  {
    area: "Dependency map",
    specification:
      "Approved service, identity, integration, data, support, and external dependencies.",
    boundary: "No “fully redundant” claim without evidence.",
  },
  {
    area: "Continuity mode",
    specification:
      "Supported degraded behavior, read and write boundaries, communication, queueing, recovery, evidence.",
    boundary: "No invented offline or regional failover.",
  },
  {
    area: "Backup and restore",
    specification:
      "Approved scope, retention, access, validation, restoration test, owner, evidence.",
    boundary: "No location or recovery guarantee without documentation.",
  },
  {
    area: "Failover and relocation",
    specification:
      "Preconditions, authority, data and access impact, integrations, support, communication, test, rollback.",
    boundary:
      "No active-active, multi-region, or automatic claim without proof.",
  },
  {
    area: "RTO / RPO / SLO / SLA",
    specification:
      "Only from approved authority and the correct entitlement.",
    boundary: "Values are never derived or rounded for marketing.",
  },
  {
    area: "Post-incident",
    specification:
      "Timeline, impact, actions, evidence, communication, follow-up ownership.",
    boundary: "No blame labels and no hidden findings.",
  },
];

export default function ReliabilityContinuity() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Reliability, Continuity &amp; Disaster Recovery
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            The Governance Model, Without Invented Numbers
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Resilience claims resolve to approved authority and your correct
            entitlement. Marketing does not derive, round, or restate them.
          </p>

        </div>

        {/* Governance Table */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <table className="w-full min-w-[820px] border-collapse text-left">

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800">

                <th className="w-40 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Area
                </th>

                <th className="w-[48%] border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Required specification
                </th>

                <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Claim boundary
                </th>

              </tr>
            </thead>

            <tbody>
              {areas.map((row, index) => (
                <tr
                  key={row.area}
                  className={
                    index === areas.length - 1
                      ? ""
                      : "border-b border-stone-100 dark:border-slate-800"
                  }
                >

                  <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                    {row.area}
                  </td>

                  <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.specification}
                  </td>

                  <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.boundary}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}
