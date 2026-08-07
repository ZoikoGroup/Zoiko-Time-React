import Image from "next/image";

const points = [
  "Safe sandbox · no live worker data",
  "Role-appropriate assessments & scenarios",
  "Shareable certificates of completion",
];

const tasks = [
  { task: "Approve a timesheet before cutoff", attempts: "1", result: "Passed" },
  { task: "Return a record for correction", attempts: "2", result: "Passed" },
  { task: "Handle a policy exception", attempts: "1", result: "Review tips" },
  { task: "Reconcile a failed export", attempts: "—", result: "Not started" },
];

const resultStyles: Record<string, string> = {
  Passed: "bg-emerald-50 text-emerald-700",
  "Review tips": "bg-amber-50 text-amber-700",
  "Not started": "bg-sky-50 text-sky-700",
};

export default function LearnByDoing() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Practice &amp; Assessment
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Learn by doing — safely
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            A realistic sandbox with synthetic data lets learners practice real
            tasks and prove readiness before touching live records.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Supporting points */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold leading-8 text-slate-800 dark:text-white sm:text-2xl">
              Practice sandbox &amp; assessments
            </h3>

            <p className="mt-4 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
              Learners rehearse real workflows — approvals, corrections, exports
              — against synthetic data with unlimited retries, then confirm
              readiness with role-appropriate assessments and certification.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Image
                    src="/training-adoption/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-4 w-4 shrink-0"
                  />
                  <span className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sandbox panel */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.35)] dark:bg-slate-900">
              <div className="flex items-center justify-between gap-3 bg-slate-900 px-5 py-4">
                <p className="text-sm font-semibold leading-5 text-white">
                  Practice sandbox · Manager approvals
                </p>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-teal-400"
                    aria-hidden="true"
                  />
                  Synthetic data
                </span>
              </div>

              <div className="px-5 pb-5 pt-1">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="w-[56%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                        Task
                      </th>
                      <th className="w-[18%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                        Attempts
                      </th>
                      <th className="w-[26%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                        Result
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tasks.map(({ task, attempts, result }) => (
                      <tr
                        key={task}
                        className="border-b border-slate-200 dark:border-slate-700"
                      >
                        <td className="py-3.5 pr-3 text-sm font-normal leading-5 text-slate-800 dark:text-slate-200">
                          {task}
                        </td>
                        <td className="py-3.5 text-sm font-normal leading-5 text-slate-800 dark:text-slate-200">
                          {attempts}
                        </td>
                        <td className="py-3.5">
                          <span
                            className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold leading-4 ${resultStyles[result]}`}
                          >
                            {result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="mt-4 text-xs font-normal leading-5 text-gray-400">
                  A safe environment mirroring the real product — no live worker
                  records, no monitoring, unlimited retries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
