const rows = [
  {
    worker: "Worker #2291",
    shift: "Shift Aug 4",
    issue: "Late clock-in, 6 min",
    status: "Needs Context",
    tone: "bg-orange-100 text-yellow-700",
    next: "Awaiting worker input",
  },
  {
    worker: "Worker #2304",
    shift: "Shift Aug 4",
    issue: "Missed break event",
    status: "Pending Review",
    tone: "bg-indigo-50 text-blue-700",
    next: "Context received · decide",
  },
  {
    worker: "Worker #2318",
    shift: "Shift Aug 3",
    issue: "Clock-out mismatch",
    status: "Approved",
    tone: "bg-emerald-50 text-teal-700",
    next: "Ready for export",
  },
];

export default function ReviewQueue() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Reviewer Experience
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            A focused queue, not a flood of alerts
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[960px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between gap-3 bg-slate-800 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-sm bg-green-500 shadow-[0px_0px_0px_3px_rgba(25,179,107,0.25)]"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold leading-5 text-white">
                Review Queue
              </p>
            </div>
            <p className="text-xs font-normal leading-5 text-white/60">
              Site: Northwind Ops
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-900/40">
                  {["Record", "Issue", "Status", "Next action"].map((head) => (
                    <th
                      key={head}
                      className="border-b border-slate-200 px-5 py-3 text-[10px] font-semibold uppercase leading-4 tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map(({ worker, shift, issue, status, tone, next }) => (
                  <tr
                    key={worker}
                    className="border-b border-slate-200 last:border-b-0 dark:border-slate-700"
                  >
                    <td className="px-5 py-4">
                      <p className="text-xs font-normal leading-5 text-slate-800 dark:text-white">
                        {worker}
                      </p>
                      <p className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                        {shift}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-300">
                      {issue}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-[20px] px-3.5 py-1.5 text-xs font-bold leading-5 ${tone}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-300">
                      {next}
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
