"use client";

const states = [
  {
    label: "Draft",
    className:
      "bg-white text-slate-800 border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700",
  },
  {
    label: "Provisional",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  },
  {
    label: "Submitted",
    className:
      "bg-white text-slate-800 border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700",
  },
  {
    label: "Approved",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
  },
  {
    label: "Corrected",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  },
  {
    label: "Exported",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
  },
  {
    label: "Reconciled",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
  },
  {
    label: "Soft-locked",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  },
  {
    label: "Hard-locked",
    className:
      "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30",
  },
  {
    label: "Adjustment-only",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  },
  {
    label: "Reopened",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
  },
  {
    label: "Archived",
    className:
      "bg-white text-slate-800 border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700",
  },
];

export default function CompleteStates() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Complete States
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            No ambiguous status — ever
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Time, budget, and period states are explicit throughout the
            entire lifecycle.
          </p>
        </div>

        {/* Status Chips */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-4">
          {states.map((state) => (
            <span
              key={state.label}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${state.className}`}
            >
              {state.label}
            </span>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            Period lock, project closure, billing, payroll, and accounting
            close are{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              separate
            </span>{" "}
            states. Late entries route through a governed adjustment or an
            authorized reopen process.
          </p>
        </div>
      </div>
    </section>
  );
}