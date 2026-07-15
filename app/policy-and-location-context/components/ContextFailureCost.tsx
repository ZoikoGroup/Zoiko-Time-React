import React from "react";

const financialRisks = [
  "Overtime underpayment liable for backpay + penalties",
  "Tax misclassification across jurisdictions",
  "Payroll audits triggered by inconsistent records",
];

const legalRisks = [
  "Employment tribunal claims from non-compliance",
  "GDPR violations from improper data handling",
  "Cross-border jurisdiction conflicts unresolved",
];

const operationalRisks = [
  "Different rules applied to same workforce type",
  "Manual overrides leading to undocumented decisions",
  "Audit failures due to incomplete policy records",
];

export default function ContextFailureCost() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
            Context Failure Cost
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
            The Cost of Applying the Wrong Rules
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            A single incorrect policy application is not a configuration issue.
            It is a financial, legal, and operational risk event.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Financial Risk */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="h-1 w-full bg-red-500"></div>

            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-2xl">
                💰
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                Financial Risk
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Payroll miscalculations and incorrect overtime calculations
                expose the organisation to direct monetary loss and recovery
                costs.
              </p>

              <div className="mt-8 space-y-4">
                {financialRisks.map((risk) => (
                  <div
                    key={risk}
                    className="rounded-lg border-l-4 border-slate-300 bg-slate-100 p-4 dark:bg-slate-800"
                  >
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

                    {/* Legal Risk */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="h-1 w-full bg-indigo-500"></div>

            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-2xl">
                ⚖️
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                Legal Risk
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Labor law violations and regulatory breaches create direct legal
                exposure across every active jurisdiction.
              </p>

              <div className="mt-8 space-y-4">
                {legalRisks.map((risk) => (
                  <div
                    key={risk}
                    className="rounded-lg border-l-4 border-slate-300 bg-slate-100 p-4 dark:bg-slate-800"
                  >
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

                    {/* Operational Risk */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="h-1 w-full bg-amber-500"></div>

            <div className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-2xl">
                ⚠️
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                Operational Risk
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Inconsistent policy application disrupts workforce management
                and undermines trust in people operations processes.
              </p>

              <div className="mt-8 space-y-4">
                {operationalRisks.map((risk) => (
                  <div
                    key={risk}
                    className="rounded-lg border-l-4 border-slate-300 bg-slate-100 p-4 dark:border-slate-600 dark:bg-slate-800"
                  >
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Warning Banner */}
        <div className="mt-14 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent p-8 text-center">
          <h3 className="text-xl font-bold leading-8 text-slate-900 dark:text-white">
            Applying the wrong policy is not a minor error —
            <br />
            <span className="text-red-600 dark:text-red-400">
              it is a financial and legal risk event.
            </span>
          </h3>
        </div>

              </div>
    </section>
  );
}