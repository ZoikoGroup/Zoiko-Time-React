import React from "react";

export default function ByRole() {
  const roles = [
    "Worker",
    "Manager / Reviewer",
    "Administrator",
    "Finance / Audit",
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          By Role
        </p>


        {/* Heading */}
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            The same lifecycle, seen from each seat
          </h2>
        </div>


        {/* Description */}
        <div className="max-w-2xl text-center">
          <p className="text-base leading-7 text-gray-500 dark:text-slate-300">
            Selection personalizes emphasis only — it never creates an account
            or infers identity.
          </p>
        </div>


        {/* Role Selector */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">

          {roles.map((role, index) => (
            <button
              key={role}
              type="button"
              className={
                index === 0
                  ? "rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)]"
                  : "rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              }
            >
              {role}
            </button>
          ))}

        </div>


        {/* Role Information Cards */}
        <div className="mt-4 flex w-full max-w-5xl flex-col gap-4 lg:flex-row">

          {/* What you can see */}
          <div className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900">

            <div className="mb-2 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                What you can see
              </h3>
            </div>


            <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
              Your record date, source summary, captured time, the
              policy/classification explanation, current state, and the
              evidence visible to you.
            </p>

          </div>

                    {/* What you can do */}
          <div className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900">

            <div className="mb-2 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                What you can do
              </h3>
            </div>


            <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
              Request a correction, track a neutral pending state, see the
              human decision, view your updated history, and reach support or
              escalation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}