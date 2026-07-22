"use client";

import React from "react";
import {
  Users,
  Globe,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function QuoteFactors() {
  return (
    <section
    
     className="bg-white py-16 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Built Around You
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What shapes your quote
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Card 1 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
              <Users className="h-6 w-6 text-teal-600" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
              Workforce structure
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Headcount, work model, and the mix of employees,
              contractors, and billable teams.
            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
              <Globe className="h-6 w-6 text-teal-600" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
              Jurisdictions
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Countries of operation drive governance,
              currency, and policy complexity.
            </p>

          </div>

          {/* Part 2 starts here */}
                    {/* Card 3 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
              <ShieldCheck className="h-6 w-6 text-teal-600" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
              Governance needs
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Audit trails, retention, residency, and approval
              controls inform the right plan.
            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
              <Rocket className="h-6 w-6 text-teal-600" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
              Rollout path
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Timeline and deployment model shape implementation
              and commercial terms.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}