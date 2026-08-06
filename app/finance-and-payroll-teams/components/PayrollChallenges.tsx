import React from "react";

const challenges = [
  {
    title: "Incomplete time records",
    description:
      "Missing starts, stops, breaks, or required context delay review.",
  },
  {
    title: "Late or unclear approvals",
    description:
      "Payroll cannot distinguish approved records from records still awaiting a decision.",
  },
  {
    title: "Policy inconsistency",
    description:
      "Break, attendance, overtime, or exception rules are applied differently across teams or pay groups.",
  },
  {
    title: "Uncontrolled corrections",
    description:
      "Changes occur without a clear reason, version, or reapproval path.",
  },
  {
    title: "Allocation gaps",
    description:
      "Time reaches finance without the required project, task, customer, or cost code.",
  },
  {
    title: "Fragmented evidence",
    description:
      "Comments, approvals, and export records are spread across spreadsheets, messages, and systems.",
  },
];

export default function PayrollChallenges() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            The Payroll Input Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Payroll is only as reliable as the time data that 
            reaches it
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-slate-400">
            Distributed schedules, late approvals, inconsistent policy context,
            missing project codes, and undocumented corrections can turn every
            pay period into a manual reconciliation exercise.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-center dark:border-emerald-900/40 dark:bg-emerald-900/10">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            ZoikoTime creates{" "}
            <span className="font-bold text-teal-700 dark:text-teal-400">
              one controlled path
            </span>{" "}
            for capture, classification, review, approval, correction, and
            export — without monitoring private digital activity.
          </p>
        </div>
      </div>
    </section>
  );
}