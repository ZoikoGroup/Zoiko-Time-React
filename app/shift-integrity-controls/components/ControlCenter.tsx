const metrics = [
  { value: "1,204", label: "Records verified", note: "↑ 3.1% week over week" },
  { value: "22", label: "Needs review", note: "6 due today" },
  { value: "98.4%", label: "Policy health", note: "No unresolved conflicts" },
  { value: "99.1%", label: "Source freshness", note: "All sources syncing" },
];

const exceptions = [
  {
    exception: "Late Clock-In",
    site: "Northwind Ops",
    correction: "Worker submitted",
    status: "Pending Review",
    tone: "bg-indigo-50 text-blue-700",
  },
  {
    exception: "Missed Break",
    site: "Meridian+",
    correction: "Not yet submitted",
    status: "Needs Context",
    tone: "bg-orange-100 text-yellow-700",
  },
  {
    exception: "Duplicate Clock-Out",
    site: "Astera Retail",
    correction: "Reviewer corrected",
    status: "Approved",
    tone: "bg-emerald-50 text-teal-700",
  },
];

const auditTimeline = [
  { event: "Policy v4.2 published", time: "Aug 3" },
  { event: "Grace window updated · Site B", time: "Jul 29" },
  { event: "Kiosk source reconnected", time: "Jul 27" },
];

const activityFeed = [
  { event: "Reviewer approved #2318", time: "2 min ago" },
  { event: "Worker context added #2291", time: "18 min ago" },
  { event: "Schedule sync completed", time: "1 hr ago" },
];

export default function ControlCenter() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Shift Integrity Control Center
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            The full picture, in one dashboard
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
                Control Center · Full view
              </p>
            </div>
            <p className="text-xs font-normal leading-5 text-white/60">
              Aug 5, 2026 · Rolling 7 days
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

          {/* Exceptions */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  {["Exception", "Site", "Correction", "Status"].map((head) => (
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
                {exceptions.map(
                  ({ exception, site, correction, status, tone }) => (
                    <tr
                      key={exception}
                      className="border-b border-slate-200 dark:border-slate-700"
                    >
                      <td className="px-6 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {exception}
                      </td>
                      <td className="px-6 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {site}
                      </td>
                      <td className="px-6 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {correction}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block rounded-[20px] px-3.5 py-1.5 text-xs font-bold leading-5 ${tone}`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          {/* Audit timeline + activity feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {[
              { title: "Audit timeline", rows: auditTimeline },
              { title: "Activity feed", rows: activityFeed },
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
                  {rows.map(({ event, time }) => (
                    <li
                      key={event}
                      className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 py-2.5 last:border-b-0 dark:border-slate-700"
                    >
                      <span className="text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {event}
                      </span>
                      <span className="shrink-0 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                        {time}
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
