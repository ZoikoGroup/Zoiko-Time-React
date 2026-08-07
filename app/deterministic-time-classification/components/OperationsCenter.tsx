const metrics = [
  { value: "8,412", label: "Classifications this week", note: "Policy v4.2 active" },
  { value: "31", label: "Review queue", note: "9 due today" },
  { value: "100%", label: "Policy health", note: "No conflicting rules" },
  { value: "99.6%", label: "Source freshness", note: "All sources syncing" },
];

const records = [
  {
    record: "#48213",
    site: "Meridian+",
    result: "Late Clock-In",
    rule: "Grace-Window-Tolerance",
    review: "Pending Review",
    tone: "bg-orange-100 text-yellow-700",
  },
  {
    record: "#48216",
    site: "Northwind Ops",
    result: "Verified",
    rule: "Break-Completeness-Check",
    review: "Approved",
    tone: "bg-emerald-50 text-teal-700",
  },
  {
    record: "#48219",
    site: "Astera Retail",
    result: "Duplicate Clock-Out",
    rule: "Duplicate-Event-Dedupe",
    review: "Corrected",
    tone: "bg-indigo-50 text-blue-700",
  },
];

const policyChanges = [
  { label: "Grace window 5 → 7 min · Site B", meta: "142 records affected" },
  { label: "New rule: Split-Shift-Detection", meta: "Draft · not published" },
];

const sourceHealth = [
  { label: "Mobile app", meta: "Syncing" },
  { label: "Kiosk · Site C", meta: "Syncing" },
  { label: "Scheduling integration", meta: "Syncing" },
];

export default function OperationsCenter() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Product UI Showcase
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Classification Operations Center
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
            Production-faithful, shown here with synthetic data.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800">
          {/* Title bar */}
          <div className="flex items-center justify-between gap-3 bg-slate-800 px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0px_0px_0px_3px_rgba(25,179,107,0.25)]"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold leading-5 text-white">
                Classification Operations Center
              </p>
            </div>
            <p className="text-xs font-normal leading-5 text-white/60">
              Aug 5, 2026
            </p>
          </div>

          {/* Metrics */}
          <dl className="grid grid-cols-2 border-b border-slate-200 dark:border-slate-700 lg:grid-cols-4">
            {metrics.map(({ value, label, note }) => (
              <div
                key={label}
                className="border-b border-slate-200 px-6 py-5 last:border-r-0 dark:border-slate-700 sm:border-b-0 lg:border-r"
              >
                <dd className="text-2xl font-bold leading-8 text-slate-800 dark:text-white">
                  {value}
                </dd>
                <dt className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {label}
                </dt>
                <p className="mt-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-400">
                  {note}
                </p>
              </div>
            ))}
          </dl>

          {/* Records */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F6F9F9] dark:bg-slate-900/40">
                  {["Record", "Result", "Rule", "Review state"].map((head) => (
                    <th
                      key={head}
                      className="border-b border-slate-200 px-6 py-3 text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-500 dark:border-slate-700 dark:text-slate-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {records.map(
                  ({ record, site, result, rule, review, tone }, index) => (
                    <tr
                      key={record}
                      className={`border-b border-slate-200 dark:border-slate-700 ${
                        index % 2 === 1
                          ? "bg-[#F6F9F9] dark:bg-slate-900/40"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <p className="text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                          {record}
                        </p>
                        <p className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                          {site}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {result}
                      </td>
                      <td className="px-6 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {rule}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block rounded-[20px] px-3.5 py-1.5 text-xs font-bold leading-5 ${tone}`}
                        >
                          {review}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          {/* Policy change preview + source health */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {[
              { title: "Policy change & impact preview", rows: policyChanges },
              { title: "Source health", rows: sourceHealth },
            ].map(({ title, rows }, index) => (
              <div
                key={title}
                className={`px-6 py-5 ${
                  index === 0
                    ? "border-b border-slate-200 dark:border-slate-700 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-500 dark:text-slate-400">
                  {title}
                </p>

                <ul className="mt-2">
                  {rows.map(({ label, meta }) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5 last:border-b-0 dark:border-slate-700"
                    >
                      <span className="text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {label}
                      </span>
                      <span className="shrink-0 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                        {meta}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
