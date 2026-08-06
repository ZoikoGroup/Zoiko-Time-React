import Link from "next/link";

export default function StageTwoClassification() {
  const states = [
    "Classified",
    "Requires review",
    "Insufficient context",
    "Conflicting policy",
    "Policy unavailable",
    "Jurisdiction review",
    "Superseded",
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">

        <div className="grid w-full gap-8 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 shadow-md shadow-emerald-500/10 dark:bg-emerald-500/10">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-600 text-xs font-bold text-white">
                2
              </div>

              <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                Apply deterministic rules that people can inspect and review.
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
              Stage 2
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              A deterministic function bound to approved policy and jurisdiction
              context—with reviewable inputs, rule path, result, limits, and
              effective version.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Neutral Classification States
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {states.map((state) => (
                <span
                  key={state}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {state}
                </span>
              ))}
            </div>

            <Link
              href="/classification"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Explore Classification
            </Link>
          </div>

          {/* Right Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_44px_rgba(14,31,61,0.13)] dark:border-slate-700 dark:bg-slate-900">

            <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
              <h3 className="text-xs font-semibold text-white">
                Rule trace · policy &amp; jurisdiction
              </h3>

              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                Synthetic data
              </span>
            </div>

            <div className="space-y-6 p-6">

              <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                <span className="rounded-md border bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  Input facts
                </span>

                <span className="text-teal-600">→</span>

                <span className="rounded-md border bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  Rule conditions
                </span>

                <span className="text-teal-600">→</span>

                <span className="rounded-md border bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  Matched rule
                </span>

                <span className="text-teal-600">→</span>

                <span className="rounded-md border bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  Result
                </span>

                <span className="text-teal-600">→</span>

                <span className="rounded-md border bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  Review requirement
                </span>
              </div>
                            {/* Rule Details Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="w-48 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Element
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Value
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm">
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Policy
                      </td>

                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Meal/Rest • <strong>v4</strong> • effective Jan 1
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Jurisdiction
                      </td>

                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        US-East • schedule-aware
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Matched rule
                      </td>

                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Regular hours • break satisfied
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Result
                      </td>

                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-500/10 dark:text-teal-400">
                          Classified
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                        Conflicting policy
                      </td>

                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300">
                          Jurisdiction review
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                Deterministic — not AI. Classification never determines pay,
                discipline, or misconduct.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="w-full max-w-4xl rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-sm leading-7">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Deterministic classification is not AI.
            </span>{" "}
            <span className="text-slate-700 dark:text-slate-300">
              Any separately approved AI or anomaly function remains assistive,
              explainable, and non-decisional—and classification never
              determines payroll, discipline, misconduct, or termination.
            </span>
          </p>
        </div>

              </div>
    </section>
  );
}