"use client";

const stats = [
  {
    value: "14",
    label: "Requests in queue",
    sub: "3 unassigned",
  },
  {
    value: "4.2 days",
    label: "Avg. review time",
    sub: "Rolling 30 days",
  },
  {
    value: "9",
    label: "Packs due for review",
    sub: "Next 60 days",
  },
  {
    value: "100%",
    label: "Access-tier compliance",
    sub: "Last audit",
  },
];

const queue = [
  {
    item: "Sub-processor List",
    type: "Controlled",
    requester: "Legal · Meridian+",
    reviewer: "M. Alvarez",
    status: "Assigned",
    color:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-500/10 dark:text-blue-400",
  },
  {
    item: "Pen Test Summary",
    type: "Customer-specific",
    requester: "Security · Astera",
    reviewer: "Unassigned",
    status: "Unassigned",
    color:
      "bg-rose-50 text-red-700 dark:bg-rose-500/10 dark:text-rose-400",
  },
  {
    item: "Accessibility Conformance Report",
    type: "Public",
    requester: "Procurement · Northbridge",
    reviewer: "—",
    status: "Delivered",
    color:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
];

const calendar = [
  ["Security pack re-review", "Sep 12"],
  ["DPA annual review", "Oct 3"],
  ["Accessibility audit refresh", "Nov 20"],
];

const audit = [
  ["Access granted · Pen Test Summary", "Reviewer: M. Alvarez"],
  ["Version updated · DPA v4.1", "Owner: Legal"],
  ["Request denied · unscoped NDA", "Reviewer: T. Byrne"],
];

export default function GovernanceCenter() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Evidence Governance Center
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
            The dashboard behind every request
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-slate-500 dark:text-slate-400">
            Production-faithful, shown here with synthetic data — the same
            registry, queue, and audit trail your reviewer works from.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-10 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">
          {/* Top Bar */}
          <div className="flex flex-col justify-between gap-3 bg-slate-800 px-5 py-4 text-white sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-sm bg-green-500 ring-4 ring-green-500/25" />
              <span className="text-xs font-semibold">
                Governance Center · Full view
              </span>
            </div>

            <p className="text-xs text-white/60">
              Role: Procurement Reviewer
            </p>
          </div>

          {/* Stats */}
          <div className="grid border-b border-slate-200 md:grid-cols-2 xl:grid-cols-4 dark:border-slate-800">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-slate-200 p-5 last:border-r-0 dark:border-slate-800"
              >
                <p className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>

                <p className="mt-2 text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Queue Item
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Requestor
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Reviewer
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {queue.map((row) => (
                  <tr
                    key={row.item}
                    className="border-t border-slate-200 dark:border-slate-800"
                  >
                    <td className="px-5 py-4">
                      <p className="text-xs text-slate-800 dark:text-white">
                        {row.item}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {row.type}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-800 dark:text-white">
                      {row.requester}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-800 dark:text-white">
                      {row.reviewer}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${row.color}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Panels */}
          <div className="grid border-t border-slate-200 md:grid-cols-2 dark:border-slate-800">
            <div className="border-r border-slate-200 p-5 dark:border-slate-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Review Calendar
              </h3>

              <div className="mt-3 space-y-3">
                {calendar.map(([title, date]) => (
                  <div
                    key={title}
                    className="flex justify-between border-b border-slate-200 pb-2 text-xs last:border-0 dark:border-slate-800"
                  >
                    <span className="text-slate-800 dark:text-white">
                      {title}
                    </span>

                    <span className="text-slate-500">{date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Audit Trail
              </h3>

              <div className="mt-3 space-y-3">
                {audit.map(([title, owner]) => (
                  <div
                    key={title}
                    className="flex justify-between border-b border-slate-200 pb-2 text-xs last:border-0 dark:border-slate-800"
                  >
                    <span className="text-slate-800 dark:text-white">
                      {title}
                    </span>

                    <span className="text-slate-500">{owner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}