const categories = [
  {
    category: "Account & identity",
    contents:
      "Name, work email, account ID, authentication and role context.",
    purposes: "Account access, identity, permissions, support, security.",
    neverImplies:
      "That identity data determines employment status or legal authority.",
  },
  {
    category: "Organization & configuration",
    contents:
      "Entities, teams, groups, roles, policies, schedules, integrations.",
    purposes: "Administration, scope, workflow and reporting context.",
    neverImplies: "That customer configuration creates legal permission.",
  },
  {
    category: "Time & workforce records",
    contents:
      "Time entries, attendance and presence context, timesheets, breaks, approvals, exceptions, corrections where enabled.",
    purposes: "Create, review, approve, preserve and report governed records.",
    neverImplies:
      "Screenshots, keystroke content, URL history, application names, or clipboard content — none of which is ever collected.",
  },
  {
    category: "Device & service metadata",
    contents:
      "Device and app version, timestamps, sync, security and diagnostic metadata where approved.",
    purposes: "Service operation, security, troubleshooting, reliability.",
    neverImplies:
      "Covert productivity monitoring or unrestricted location tracking.",
  },
  {
    category: "Integration & provider records",
    contents:
      "External IDs, events, sync status, imported and exported records, connector health.",
    purposes: "Authorized data exchange, reconciliation, recovery.",
    neverImplies:
      "That every connector receives all data, or acts in the same privacy role.",
  },
  {
    category: "Support, audit & incident",
    contents:
      "Support requests, change history, access and audit events, incident context.",
    purposes:
      "Support, accountability, security, dispute resolution, legal and contractual needs.",
    neverImplies:
      "That all message content or sensitive attachments are required.",
  },
];

export default function DataCategories() {
  return (
    <section
      id="data-categories"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Data Categories &amp; Sources
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Categories — and What Each One Must Never Imply
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            The third column matters as much as the second. Most privacy harm
            comes from a category being read as more than it is.
          </p>

        </div>

        {/* Category Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[980px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">

                  {[
                    { label: "Category", width: "w-[15%]" },
                    { label: "Illustrative contents", width: "w-[30%]" },
                    { label: "Approved purposes", width: "w-[25%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}

                  <th className="w-[30%] border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:border-slate-800 dark:text-red-400">
                    Never implies
                  </th>

                </tr>
              </thead>

              <tbody>
                {categories.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.category}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.contents}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.purposes}
                    </td>

                    <td className="bg-[#FDFAFA] px-4 py-3.5 align-top text-sm font-normal leading-6 text-red-700 dark:bg-red-950/10 dark:text-red-300">
                      {row.neverImplies}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}
