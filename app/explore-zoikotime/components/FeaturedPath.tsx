import Image from "next/image";
import Link from "next/link";

import SectionHeading from "./SectionHeading";

const routeTags = [
  "Timesheets & Approvals",
  "Evidence Ledger",
  "Reports & Dashboards",
];

export default function FeaturedPath() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Featured Path"
          title="An example of how a recommendation looks."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[260px] lg:min-h-[434px]">
              <Image
                src="/explore-zoikotime/featured-path.png"
                alt="A payroll reviewer working through a timesheet approval period on a laptop"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Explanation */}
            <div className="bg-gray-50 px-8 py-10 dark:bg-slate-900 lg:px-11 lg:py-11">
              <p className="text-xs font-semibold leading-5 text-gray-500 dark:text-slate-400">
                Goal: Review and approve periods · Role: Finance &amp; Payroll
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-8 text-slate-800 dark:text-white">
                Primary path: Timesheets &amp; Approvals
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400">
                Matches your declared goal of reviewing and approving periods,
                with a supporting path to Evidence Ledger for traceable history
                and Reports for reconciliation.
              </p>

              {/* Route tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {routeTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold leading-4 text-blue-950 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 dark:border-emerald-900/40 dark:bg-emerald-900/20">
                  <Image
                    src="/explore-zoikotime/tick-mark.svg"
                    alt=""
                    width={11}
                    height={11}
                    aria-hidden="true"
                  />

                  <span className="text-xs font-semibold leading-4 text-teal-700 dark:text-emerald-300">
                    Matched, not ranked
                  </span>
                </span>

                <span className="text-xs font-medium leading-4 text-gray-500 dark:text-slate-400">
                  Route health: current
                </span>
              </div>

              <Link
                href="/time-sheet-approvals"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-7 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                See This Path
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
