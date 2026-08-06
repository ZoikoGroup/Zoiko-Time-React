import React from "react";

export default function StageThree() {
  return (
    <section className="bg-gray-50 py-14 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-8">
        {/* Left Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 shadow-[0px_6px_14px_rgba(16,162,141,0.16)] dark:bg-teal-500/10">
            <div className="flex h-5 w-5 items-center justify-center rounded-[10px] bg-teal-600 text-xs font-bold text-white">
              3
            </div>

            <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
              Make review visible, neutral, and correctable.
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
            Stage 3
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-slate-300">
            Two synchronized views — the worker record detail and the reviewer
            case workspace. Workers see what was captured, the explanation, the
            current state, and a correction route.
          </p>

          {/* Label */}
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
            What a worker can see &amp; do
          </h3>

          {/* Pills */}
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "View record & source",
              "Read policy explanation",
              "Request a correction",
              "Track pending state",
              "See the decision",
              "Escalate for support",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-teal-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:bg-slate-800"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Explore Workers
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_2px_6px_rgba(14,31,61,0.05),0px_20px_44px_rgba(14,31,61,0.13)] dark:border-slate-700 dark:bg-slate-900">
          {/* Header */}
          <div className="flex items-center justify-between bg-slate-800 px-4 py-3">
            <h3 className="text-xs font-semibold text-white">
              Worker record &amp; reviewer case
            </h3>

            <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

              <span className="text-xs font-bold text-white">
                Synthetic data
              </span>
            </div>
          </div>

          <div className="p-5">

                        {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      Record
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      State
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      Owner
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      Aug 5 · regular
                    </td>

                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-900/30 dark:text-teal-300">
                        Approved
                      </span>
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      —
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      —
                    </td>
                  </tr>

                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      Aug 4 · missing exit
                    </td>

                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Requires review
                      </span>
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      Worker
                    </td>

                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-indigo-900/30 dark:text-blue-300">
                        Correct
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      Aug 3 · conflict
                    </td>

                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Insufficient context
                      </span>
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                      Reviewer
                    </td>

                    <td className="px-3 py-3">
                      <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-indigo-900/30 dark:text-blue-300">
                        Request info
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Note */}
            <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-slate-400">
              Neutral states only — never labeled a violation before authorized
              human review. Workers see the record, its explanation, and a
              correction route.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
