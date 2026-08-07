"use client";

import Link from "next/link";

export default function CommercialEvaluation() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6">

        {/* Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Commercial, Licensing &amp; Enterprise Evaluation
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Two Products, Two Subscriptions,
            <br />
            One Qualified Conversation
          </h2>

          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Zoiko Sema and ZoikoTime may require separate
            subscriptions, enterprise setup, implementation,
            support and contract review.
          </p>

        </div>

        {/* Main Card */}
        <div className="w-full rounded-[20px] border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900 lg:p-10">

          {/* Card Header */}
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-slate-700 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
                Integration Status For Your Organization
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                Eligibility Review Required
              </h3>

            </div>

            {/* Status Badge (No Icon) */}
            <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-5 py-2 dark:bg-slate-800">

              <span className="text-sm font-bold text-sky-700 dark:text-sky-400">
                Verify with Sales
              </span>

            </div>

          </div>

          {/* Continue in Part 2 */}
                    {/* Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            {/* Evaluation Factors */}
            <div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Evaluation Factors
              </h4>

              <div className="mt-5 space-y-4">

                {[
                  "Products and editions, users and workspaces",
                  "Organizations, units, context categories, environments",
                  "Regions, jurisdictions, mapping complexity",
                  "Identity and security, privacy and legal review",
                  "Implementation, support, reporting, residency requirements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>

                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* Not Claimed Here */}
            <div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Not Claimed Here
              </h4>

              <div className="mt-5 space-y-4">

                {[
                  "“Included,” “free,” “instant,” or “unlimited”",
                  "Real-time delivery or a fixed timeline",
                  "ROI, compliance, or outcome guarantees",
                  "Universal plan or region support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>

                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Continue in Part 3 */}
                    {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/request-enterprise-demo"
              className="rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Request Enterprise Demo
            </Link>

            <Link
              href="/start-free"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Start Free
            </Link>

            <Link
              href="#"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Pricing
            </Link>

            <Link
              href="#"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Procurement Resources
            </Link>

          </div>

          {/* Disclaimer */}
          <div className="mt-8">

            <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
              Start Free evaluates ZoikoTime generally. It does not
              guarantee integration access. Sales follow-up and
              marketing consent are separate, neither is preselected,
              and access to policy or support is independent of both.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}