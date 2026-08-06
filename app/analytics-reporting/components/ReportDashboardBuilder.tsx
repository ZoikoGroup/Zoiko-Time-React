const stages = [
  {
    stage: "Start",
    behavior:
      "Approved template or blank report, with purpose, owner, audience, and data classification stated up front.",
  },
  {
    stage: "Metric selection",
    behavior:
      "Catalog search with definition preview, compatibility check, permissions, and version.",
  },
  {
    stage: "Scope and filters",
    behavior:
      "Population, record state, period, time zone, policy or jurisdiction context, and a privacy preview.",
  },
  {
    stage: "Visualization",
    behavior:
      "Approved chart and table options based on data type. An accessible text summary and data table are generated automatically.",
  },
  {
    stage: "Layout",
    behavior:
      "Grid with keyboard move and reorder controls. Drag with a pointer is never the only way to arrange a report.",
  },
  {
    stage: "Quality panel",
    behavior:
      "Freshness, completeness, exclusions, comparability, corrections, and warnings.",
  },
  {
    stage: "Access",
    behavior:
      "Viewer, editor, export, and share roles — with inherited and direct grants both visible.",
  },
  {
    stage: "Review",
    behavior:
      "Preview as the recipient, validate privacy, run an accessibility check, request approval where required.",
  },
  {
    stage: "Publish",
    behavior:
      "Versioned publication with owner, audience, effective date, and evidence.",
  },
  {
    stage: "Change",
    behavior:
      "Draft a new version, preserve the prior published snapshot, and show impacted subscriptions and exports.",
  },
];

export default function ReportDashboardBuilder() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-6">

        {/* Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Report &amp; Dashboard Builder
          </span>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
            Self-Service Within Governance,
            <br className="hidden md:block" />
            Not Around It
          </h2>

          <p className="max-w-[645px] text-base leading-7 text-slate-600 dark:text-slate-300">
            Authors compose from the approved catalog, see the privacy preview
            before publishing, and cannot reach a publish action without
            passing review.
          </p>

        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="bg-slate-50 dark:bg-slate-800">

                <tr>

                  <th className="w-52 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Stage
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Required Components &amp; Behavior
                  </th>

                </tr>

              </thead>

              <tbody>

                                {stages.map((item, index) => (
                  <tr
                    key={item.stage}
                    className={`transition-colors ${
                      index !== stages.length - 1
                        ? "border-b border-slate-200 dark:border-slate-800"
                        : ""
                    } hover:bg-slate-50 dark:hover:bg-slate-800/50`}
                  >
                    <td className="whitespace-nowrap px-6 py-5 align-top">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.stage}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.behavior}
                      </p>
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