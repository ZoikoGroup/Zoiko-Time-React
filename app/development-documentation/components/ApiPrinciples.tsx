"use client";

export default function ApiPrinciples() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8 lg:px-10 xl:px-14">

        {/* Label */}
        <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
          API Principles
        </div>

        {/* Heading */}
        <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
          An API that respects people
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
          The same governance that shapes the product shapes the API:
          explainable rules, preserved evidence, and human authority — never
          surveillance.
        </p>

        {/* Governance Notice */}
        <div className="mt-8 w-full max-w-[900px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-5 dark:border-emerald-900/60 dark:bg-emerald-950/30 sm:px-8 sm:py-5">
          <p className="text-center text-sm leading-5 text-slate-800 dark:text-slate-300">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Human authority remains controlling.
            </span>{" "}
            The API exposes governed records, explainable policy, and preserved
            evidence; it does not make automatic employment, payroll, or legal
            decisions, and endpoints are provided as documented in the
            developer console.
          </p>
        </div>

      </div>
    </section>
  );
}