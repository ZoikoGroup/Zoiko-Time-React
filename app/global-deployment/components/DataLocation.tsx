const rows = [
  {
    concept: "Data categories",
    treatment:
      "Categories are named separately; they do not share one location fact.",
    proof: "Category-to-location register with purpose and authority.",
  },
  {
    concept: "Primary processing / storage",
    treatment: "Only approved options and their boundaries are described.",
    proof: "Profile, evidence, owner, effective and review dates.",
  },
  {
    concept: "Backup / continuity",
    treatment: "Operational copies are separate from the primary location.",
    proof: "Location class, retention, access controls, restoration test.",
  },
  {
    concept: "Transfers",
    treatment: "Transfer paths and mechanisms depend on scope and terms.",
    proof:
      "Source, destination, purpose, mechanism reference, approver, status.",
  },
  {
    concept: "Subprocessors / infrastructure",
    treatment: "Routes to the current authoritative list and data map.",
    proof: "Artifact status, version, owner, review date.",
  },
  {
    concept: "Support access",
    treatment: "Data location is separate from authorized support access.",
    proof: "Role, purpose, restriction, expiry, evidence.",
  },
  {
    concept: "Relocation",
    treatment:
      "Requires impact assessment, notices or terms, test, cutover, rollback.",
    proof: "Versioned change plan. No silent relocation.",
  },
];

export default function DataLocation() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Data Location, Residency &amp; Transfers
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Data Location Is a Governed Profile, Not a Flag on a Map
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Identity, workforce record, configuration, evidence, support,
            telemetry, export, backup, and integration data may be handled
            differently. Each category resolves to an approved profile with a
            purpose, an authority, and a review date.
          </p>

        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-stone-200 dark:border-slate-800">

          <table className="w-full min-w-[720px] border-collapse text-left">

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">

                <th className="w-1/4 px-4 py-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:text-slate-300">
                  Concept
                </th>

                <th className="w-2/5 px-4 py-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:text-slate-300">
                  Public treatment
                </th>

                <th className="px-4 py-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:text-slate-300">
                  Product proof
                </th>

              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.concept}
                  className="border-t border-stone-200 dark:border-slate-800"
                >

                  <td className="px-4 py-4 align-top text-sm font-bold leading-6 text-sky-950 dark:text-white">
                    {row.concept}
                  </td>

                  <td className="px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.treatment}
                  </td>

                  <td className="px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.proof}
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
