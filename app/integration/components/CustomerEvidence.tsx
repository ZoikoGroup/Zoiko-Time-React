"use client";

import Link from "next/link";

export default function CustomerEvidence() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6">

        {/* Heading */}
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Customer &amp; Implementation Evidence
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Verified Proof Only
          </h2>

        </div>

        {/* Evidence Card */}
        <div className="w-full rounded-2xl border border-sky-200 bg-slate-50 px-8 py-12 dark:border-slate-700 dark:bg-slate-900">

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

            {/* Empty State Icon (matches Figma) */}
            <div className="flex h-10 w-10 items-center justify-center">
              <svg
                className="h-8 w-8 text-slate-500 dark:text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
              No Published Integration Evidence Yet
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Verified integration evidence will appear here only
              after customer permission, product validation,
              methodology review and publication approval. We will
              not fill this space with unverified logos, customer
              counts or invented percentages.
            </p>

            {/* Continue in Part 2 */}
                        {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                href="#"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                How ZoikoTime Works
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Trust Center
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Request Enterprise Demo
              </Link>

            </div>

          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="max-w-6xl text-center">

          <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
            When evidence is published it will state scope, mapped
            workspaces and units, approved context categories,
            implementation pattern, verified outcome, time period,
            methodology, limitations and review date. If permission
            expires or evidence is superseded, the public proof is
            removed and internal governance history is preserved.
          </p>

        </div>

      </div>
    </section>
  );
}