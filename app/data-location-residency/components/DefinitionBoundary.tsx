const terms = [
  {
    term: "Data location",
    definition:
      "A named country, region, facility jurisdiction, or provider region associated with a defined handling activity.",
    notProve: "Does not by itself prove residency or exclusive handling.",
  },
  {
    term: "Primary storage",
    definition:
      "The approved principal persistent store for a defined data category and environment.",
    notProve:
      "Replicas, indexes, caches, logs, and backups remain separate.",
  },
  {
    term: "Residency",
    definition:
      "A scoped operational or contractual commitment that designated data is stored or handled within defined locations and conditions.",
    notProve:
      "Meaningless unless it states data, copies, processing, access, transfers, and exceptions.",
  },
  {
    term: "Processing location",
    definition:
      "Where a service, provider, or authorized human performs an operation on data.",
    notProve: "May differ entirely from storage location.",
  },
  {
    term: "Access location",
    definition: "Where an authorized person or service can reach data.",
    notProve:
      "Remote access may cross a border without moving the primary store.",
  },
  {
    term: "Replication",
    definition:
      "Additional copies maintained for availability, performance, integrity, or recovery.",
    notProve:
      "Replica location and consistency model are separate evidence.",
  },
  {
    term: "Backup / archive",
    definition:
      "Copies retained for recovery, continuity, legal hold, or approved archival purpose.",
    notProve: "Deletion and access timing differ from primary storage.",
  },
  {
    term: "Transfer",
    definition:
      "Disclosure, remote access, transmission, or movement across an organizational or geographic boundary.",
    notProve:
      "The technical path and the legal mechanism are distinct things.",
  },
  {
    term: "Failover / disaster recovery",
    definition:
      "Temporary or sustained use of alternate systems or locations after defined conditions.",
    notProve:
      "Emergency paths require explicit scope and governance — they are not silent exceptions.",
  },
  {
    term: "Customer-controlled destination",
    definition:
      "A location created by customer export, integration, download, forwarding, or local storage.",
    notProve: "Customer responsibility begins at the defined handoff.",
  },
  {
    term: "Data localization requirement",
    definition:
      "A legal, regulatory, contractual, or policy condition on location or handling.",
    notProve:
      "ZoikoTime does not determine whether one applies to you, and gives no legal advice.",
  },
];

export default function DefinitionBoundary() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Definition Boundary
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eleven Terms That Are Routinely Collapsed Into One
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Most misleading location claims are not lies. They are one true
            statement presented as if it answered a different question. The
            third column is where that happens.
          </p>

        </div>

        {/* Definition Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">

                  <th className="w-[190px] border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                    Term
                  </th>

                  <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                    Definition
                  </th>

                  <th className="w-[380px] border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-amber-700 dark:border-slate-800 dark:text-amber-400">
                    What it does not prove
                  </th>

                </tr>
              </thead>

              <tbody className="bg-white dark:bg-slate-950">
                {terms.map((row) => (
                  <tr
                    key={row.term}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.term}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.definition}
                    </td>

                    <td className="bg-amber-50/40 px-4 py-3.5 align-top text-sm font-normal leading-6 text-amber-700 dark:bg-amber-950/10 dark:text-amber-300/90">
                      {row.notProve}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Worked Example */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 pb-3 pt-2.5 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            A worked example
          </p>

          <p className="mt-0.5 text-xs font-normal leading-5 text-red-700 dark:text-red-200/80">
            &quot;Primary storage in the EU&quot; can be entirely true while a
            replica sits elsewhere for recovery, a support engineer accesses the
            record remotely from another country, diagnostic metadata is
            processed by a provider in a third, and a customer-configured export
            delivers a copy to a destination we never see. Each of those is a
            separate statement requiring separate evidence.
          </p>

        </div>

      </div>
    </section>
  );
}
