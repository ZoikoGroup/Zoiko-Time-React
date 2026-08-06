const patterns = [
  {
    pattern: "Organization default",
    behavior:
      "Approved baseline with broad scope, owner, version, effective date, review.",
    risk: "Unowned configuration",
  },
  {
    pattern: "Entity / regional override",
    behavior:
      "Allowed only where role, capability, jurisdiction review, and approval permit.",
    risk: "Silent fragmentation",
  },
  {
    pattern: "Local exception",
    behavior:
      "Reason, scope, expiry, impact, communication, approval, evidence.",
    risk: "Permanent workaround",
  },
  {
    pattern: "Precedence",
    behavior:
      "Shows which rule applies and why; surfaces conflicts before activation.",
    risk: "Ambiguous classification",
  },
  {
    pattern: "Propagation",
    behavior:
      "Previews affected records, integrations, reports, notices, and waves.",
    risk: "Unexpected downstream impact",
  },
  {
    pattern: "Worker visibility",
    behavior:
      "Shows applicable context, effective date, correction route, authorized explanation.",
    risk: "Opaque outcomes",
  },
  {
    pattern: "Rollback",
    behavior:
      "Restores the approved prior version without deleting the attempted change or its evidence.",
    risk: "Loss of accountability",
  },
];

export default function PolicyInheritance() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Policy Inheritance &amp; Local Exceptions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Global Consistency and Local Control, Made Explicit
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Inheritance and exception logic are visible, so you can always see
            which rule applies and why — before activation, not after a dispute.
          </p>

        </div>

        {/* Inheritance Table */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 dark:border-slate-800">

          <table className="w-full min-w-[760px] border-collapse text-left">

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">

                <th className="w-52 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-slate-300">
                  Pattern
                </th>

                <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-slate-300">
                  Required behavior
                </th>

                <th className="w-64 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-slate-300">
                  Risk prevented
                </th>

              </tr>
            </thead>

            <tbody>
              {patterns.map((row, index) => (
                <tr
                  key={row.pattern}
                  className={
                    index === patterns.length - 1
                      ? ""
                      : "border-b border-stone-100 dark:border-slate-800"
                  }
                >

                  <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                    {row.pattern}
                  </td>

                  <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.behavior}
                  </td>

                  <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.risk}
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
