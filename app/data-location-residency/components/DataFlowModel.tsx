const stages = [
  {
    number: "01",
    stage: "Source & collection",
    caption: "Approved input categories only",
    locationType: "Customer region",
    accessRoles: "Worker, authorized entry",
    transfer: "None",
  },
  {
    number: "02",
    stage: "Transmission",
    caption: "Protected in transit",
    locationType: "In transit",
    accessRoles: "Service identities",
    transfer: "Boundary crossing possible",
  },
  {
    number: "03",
    stage: "Primary processing",
    caption: "Core application operations",
    locationType: "Processing region",
    accessRoles: "Service identities",
    transfer: "Within approved scope",
  },
  {
    number: "04",
    stage: "Primary storage",
    caption: "Principal persistent store",
    locationType: "Storage region",
    accessRoles: "Role-scoped",
    transfer: "None in normal path",
  },
  {
    number: "05",
    stage: "Derived processing",
    caption: "Classification, reporting, security",
    locationType: "Processing region",
    accessRoles: "Service identities",
    transfer: "Results may or may not persist",
  },
  {
    number: "06",
    stage: "Integrations",
    caption: "Customer-authorized connectors",
    locationType: "Third-party",
    accessRoles: "Per connector scope",
    transfer: "Handoff — control ends",
    highlighted: true,
  },
  {
    number: "07",
    stage: "Exports",
    caption: "Download, API, webhook, SFTP, email",
    locationType: "Customer-controlled",
    accessRoles: "Customer",
    transfer: "Handoff — control ends",
    highlighted: true,
  },
  {
    number: "08",
    stage: "Retention",
    caption: "Per record-type schedule",
    locationType: "Storage region",
    accessRoles: "Role-scoped",
    transfer: "None",
  },
  {
    number: "09",
    stage: "Deletion",
    caption: "Scoped verification",
    locationType: "Storage region",
    accessRoles: "Platform",
    transfer: "None",
  },
  {
    number: "10",
    stage: "Backup expiry",
    caption: "Separate schedule from deletion",
    locationType: "Backup region",
    accessRoles: "Recovery roles",
    transfer: "None",
  },
];

const headers = [
  { label: "#", width: "w-[64px]" },
  { label: "Stage", width: "w-[260px]" },
  { label: "Location type", width: "w-[200px]" },
  { label: "Access roles", width: "w-[220px]" },
  { label: "Transfer relationship", width: "w-[220px]" },
];

export default function DataFlowModel() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Data-Flow &amp; Location Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Ten Stages From Collection to Backup Expiry
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Rendered as structured text rather than an architecture diagram,
            because a diagram either exposes topology or oversimplifies it.
          </p>

        </div>

        {/* Stage Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
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
                {stages.map((stage) => (
                  <tr
                    key={stage.number}
                    className={`border-b border-stone-100 last:border-b-0 dark:border-slate-800/60 ${
                      stage.highlighted
                        ? "bg-amber-50/50 dark:bg-amber-950/10"
                        : ""
                    }`}
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-500 dark:text-slate-400">
                      {stage.number}
                    </td>

                    <td className="px-4 py-3.5 align-top">

                      <p className="text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                        {stage.stage}
                      </p>

                      <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                        {stage.caption}
                      </p>

                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {stage.locationType}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {stage.accessRoles}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {stage.transfer}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Footnotes */}
        <p className="mt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Stages 06 and 07 are highlighted because they are where platform
          control ends. Everything after a handoff is a customer-controlled or
          third-party destination, and revoking a connector does not erase
          copies already exported.
        </p>

        <p className="mt-3 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Worker-facing summaries use plain language and restate the collection
          limits. No worker-level record appears in any example on this page.
        </p>

      </div>
    </section>
  );
}
