import Link from "next/link";
import { Eyebrow, AvailabilityPill, ActionPill } from "./Pills";
import { CheckCircleIcon } from "./Icons";

const assurances = [
  "Verified availability",
  "Audience impact",
  "Source-linked claims",
  "Visible revisions",
];

const audiences = ["Administrator", "Manager", "Payroll / Reviewer"];

export default function UpdatesHero() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <Eyebrow label="Product Updates" />

            <h1 className="mt-6 max-w-[460px] text-4xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-5xl">
              See what is new in ZoikoTime — and what it means for your work.
            </h1>

            <p className="mt-6 max-w-[470px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
              Explore verified product changes by role, outcome, and product
              area, with clear availability, current guidance, and next steps.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">

              <Link
                href="#latest-updates"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Explore product updates
              </Link>

              <Link
                href="/product-documentation"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                Read Release Notes
              </Link>

            </div>

            <p className="mt-8 max-w-[460px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
              No roadmap promises. No silent rollout assumptions. No unsupported
              benefit claims.
            </p>

            {/* Assurances */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {assurances.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-medium leading-5 text-gray-500 dark:text-slate-400"
                >

                  <CheckCircleIcon size={13} className="shrink-0 text-teal-600" />

                  {item}

                </span>
              ))}
            </div>

          </div>

          {/* Newsroom Preview */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">

            <div className="flex flex-wrap items-center justify-between gap-3">

              <span className="text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                Newsroom Preview
              </span>

              <span className="text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                Last verified today
              </span>

            </div>

            <p className="mt-5 text-xs font-semibold uppercase leading-4 tracking-wide text-teal-700 dark:text-teal-400">
              Reviewer Experience
            </p>

            <h2 className="mt-2 text-base font-semibold leading-6 text-slate-800 dark:text-white">
              Exception Queues Now Group by Location Automatically
            </h2>

            <p className="mt-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
              Reviewers with multi-site scope can now triage exceptions grouped
              by location instead of one flat queue.
            </p>

            {/* Audiences */}
            <div className="mt-5 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex rounded-full border border-slate-200 bg-gray-50 px-2.5 py-1 text-xs font-medium leading-4 text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {audience}
                </span>
              ))}
            </div>

            {/* State */}
            <div className="mt-4 flex flex-wrap gap-2">
              <AvailabilityPill label="Generally Available" />
              <ActionPill label="Action: Review" />
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 dark:border-slate-800">

              <span className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                3 related Release Notes entries
              </span>

              <span className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                Revision: current
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
