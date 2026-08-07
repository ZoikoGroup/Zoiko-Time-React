"use client";

const requests = [
  {
    resource: "Security Overview Pack",
    submitted: "Aug 2",
    status: "In review",
    statusStyle:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-500/10 dark:text-indigo-300",
    nextStep: "Awaiting reviewer assignment",
  },
  {
    resource: "Master Service Agreement Template",
    submitted: "Jul 29",
    status: "Delivered",
    statusStyle:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/10 dark:text-teal-300",
    nextStep: "v2.0 · valid through renewal",
  },
  {
    resource: "Pen Test Summary",
    submitted: "Jul 25",
    status: "Needs NDA",
    statusStyle:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    nextStep: "Legal team to countersign",
  },
];

export default function RequestWorkspace() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Due Diligence Workspace
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Track every request in one place
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-slate-500 dark:text-slate-400">
            Once submitted, requestors see live status, assigned reviewer,
            and delivered evidence — no separate email thread to track.
          </p>
        </div>

        {/* Workspace */}
        <div className="mt-10 w-full max-w-[900px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-sm bg-green-500 shadow-[0_0_0_3px_rgba(25,179,107,0.25)]" />
              <span className="text-xs font-semibold text-white">
                My Requests
              </span>
            </div>

            <span className="text-xs text-white/60">
              Astera Retail · Procurement
            </span>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Resource
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Submitted
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Next step
                  </th>
                </tr>
              </thead>

              <tbody>
                {requests.map((item) => (
                  <tr
                    key={item.resource}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <td className="px-5 py-4 text-xs text-slate-800 dark:text-white">
                      {item.resource}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-700 dark:text-slate-300">
                      {item.submitted}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${item.statusStyle}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-700 dark:text-slate-300">
                      {item.nextStep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 p-5 md:hidden">
            {requests.map((item) => (
              <div
                key={item.resource}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.resource}
                </h3>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Submitted: {item.submitted}
                </p>

                <span
                  className={`mt-3 inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${item.statusStyle}`}
                >
                  {item.status}
                </span>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                  {item.nextStep}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}