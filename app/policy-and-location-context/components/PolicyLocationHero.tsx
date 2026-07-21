import React from "react";
import Link from "next/link";

export default function PolicyLocationHero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-16 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Policy &amp; Location Context
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            A Real-Time Policy
            <br />
            <span className="text-teal-500">Control System</span>
            <span> for Global Workforces</span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            ZoikoTime dynamically interprets jurisdictional laws,
            organisational policies, and contextual signals — ensuring every
            workforce action is compliant, accurate, and defensible.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {[
            "Prevent compliance violations before they occur",
            "Eliminate payroll and legal errors",
            "Stay aligned with local laws globally",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-md transition dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="h-2 w-2 rounded-sm bg-teal-500"></span>

              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
  href="/request-a-demo"
  className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-teal-600"
>
  Request Demo →
</Link>

          <Link
  href="/policy-and-location-context#policyIntelligenceEngine"
  className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-8 py-3 text-base font-semibold text-teal-600 transition hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-slate-900"
>
  Run Policy Scenario
</Link>
        </div>

        {/* Live Dashboard */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          {/* Browser Header */}
          <div className="flex items-center border-b border-slate-200 bg-slate-100 px-6 py-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <div className="flex-1 text-center">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                ZoikoTime · Policy &amp; Location Control System — Live
              </p>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-8 p-5 sm:p-8">

                        {/* Country Cards */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* United Kingdom */}
              <div className="rounded-xl border border-teal-500/30 bg-gradient-to-br from-teal-500/5 to-transparent p-6">
                <div className="text-3xl">🇬🇧</div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  United Kingdom
                </p>

                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Working Time Regulations 1998
                </h3>

                <div className="mt-6 inline-flex rounded-full bg-teal-500/10 px-4 py-2">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    ✓ Rule Applied
                  </span>
                </div>
              </div>

              {/* Germany */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="text-3xl">🇩🇪</div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Germany
                </p>

                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Arbeitszeitgesetz (ArbZG)
                </h3>

                <div className="mt-6 inline-flex rounded-full bg-green-100 px-4 py-2 dark:bg-green-900/20">
                  <span className="text-xs font-bold text-green-700 dark:text-green-400">
                    ✓ Compliant
                  </span>
                </div>
              </div>

              {/* United States */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="text-3xl">🇺🇸</div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  United States
                </p>

                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  FLSA Overtime Threshold
                </h3>

                <div className="mt-6 inline-flex rounded-full bg-amber-100 px-4 py-2 dark:bg-amber-900/20">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                    ⚠ Location Shift
                  </span>
                </div>
              </div>
            </div>

            {/* Policy Resolution Engine */}
            <div className="rounded-xl border border-teal-500/20 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                    <span className="text-xl">🧠</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Policy Resolution Engine — Decision Active
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Worker relocated from
                      <span className="font-bold">
                        {" "}
                        London → New York
                      </span>
                      . Jurisdiction shift detected. Company flex policy
                      conflicts with FLSA threshold.
                      <span className="font-bold text-teal-500">
                        {" "}
                        Legal rule takes precedence → Overtime recalculated →
                        Payroll updated.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-start lg:justify-end">
                  <div className="rounded-full bg-green-100 px-5 py-2 dark:bg-green-900/20">
                    <span className="text-sm font-bold text-green-700 dark:text-green-400">
                      ✓ Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>

                        {/* Policy Insights */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/10">
                    🌍
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Jurisdiction Detection
                    </h4>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Automatically detects country, state and regional labor
                      laws in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/10">
                    ⚖️
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Conflict Resolution
                    </h4>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Company policies are evaluated against local regulations
                      before workforce decisions are executed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-500/10">
                    ✅
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Continuous Compliance
                    </h4>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Every attendance, payroll and scheduling action is
                      validated before processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Cards */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Countries Covered
                </p>

                <h2 className="mt-2 text-3xl font-bold text-teal-500">
                  190+
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Global workforce compliance coverage.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Policy Accuracy
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-500">
                  99.9%
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Real-time legal policy evaluation.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Decisions Today
                </p>

                <h2 className="mt-2 text-3xl font-bold text-indigo-500">
                  24.8K
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Automated policy decisions processed.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Compliance Rate
                </p>

                <h2 className="mt-2 text-3xl font-bold text-emerald-500">
                  100%
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Every rule evaluated before execution.
                </p>
              </div>
            </div>

                      </div>
        </div>
      </div>
    </section>
  );
}