const areas = [
  {
    area: "Region availability",
    zoikotime: "Verify capability, evidence, dependencies, and status.",
    organization: "Confirm eligibility, requirements, and contract.",
    provider: "Provider service and evidence may constrain availability.",
  },
  {
    area: "Data categorization",
    zoikotime: "Define product categories and purposes.",
    organization:
      "Configure lawful and appropriate use, and local labels where allowed.",
    provider: "Shared review for custom integrations and content.",
  },
  {
    area: "Storage & processing",
    zoikotime: "Operate approved platform scope.",
    organization:
      "Select available options and control downstream copies.",
    provider:
      "Provider delivers contracted service; duties remain scoped.",
  },
  {
    area: "Access",
    zoikotime: "Enforce roles, approvals, and audit.",
    organization: "Assign authorized users and protect credentials.",
    provider: "Shared for support, incident, and implementation access.",
  },
  {
    area: "Transfers",
    zoikotime: "Document platform flows and approved mechanisms.",
    organization:
      "Assess legal and contractual needs, and customer-controlled transfers.",
    provider: "Provider and recipient evidence and contracts may apply.",
  },
  {
    area: "Exports & integrations",
    zoikotime: "Provide governed handoff and audit where supported.",
    organization:
      "Own destinations, recipients, retention, and downstream controls after handoff.",
    provider: "Third-party responsibilities remain explicit.",
  },
  {
    area: "Migration",
    zoikotime: "Provide method, validation, rollback, and evidence.",
    organization: "Approve scope, timing, and business checks.",
    provider: "Shared provider and implementation dependencies.",
  },
  {
    area: "Deletion",
    zoikotime: "Execute platform schedules and scoped verification.",
    organization: "Manage customer copies and legal or contractual holds.",
    provider:
      "Provider backup and retirement schedules may affect completion.",
  },
];

const headers = [
  { label: "Area", width: "w-[180px]" },
  { label: "ZoikoTime", width: "w-[280px]" },
  { label: "Your organization", width: "w-[300px]" },
  { label: "Provider / shared", width: "w-[280px]" },
];

export default function ResponsibilityModel() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Responsibility Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Areas, Three Parties
          </h2>

        </div>

        {/* Responsibility Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {headers.map((header) => (
                    <th
                      key={header.label}
                      className={`${header.width} border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-slate-950">
                {areas.map((row) => (
                  <tr
                    key={row.area}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.area}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.zoikotime}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.organization}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.provider}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Professional Boundary */}
        <p className="mx-auto mt-8 max-w-[900px] border-t border-stone-200 pt-6 text-sm font-normal leading-6 text-zinc-500 dark:border-slate-800 dark:text-slate-400">

          <span className="font-bold text-sky-950 dark:text-white">
            Professional boundary.
          </span>{" "}
          Product information is not legal advice, and not a determination that
          your configuration satisfies any localization or transfer law.
          Authorized humans approve region availability, exceptions,
          cross-border access, transfer mechanisms, migrations, and contractual
          commitments — Kairos may retrieve or summarize governed location
          evidence where approved, but it decides nothing and cannot create a
          residency commitment.

        </p>

      </div>
    </section>
  );
}
