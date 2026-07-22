"use client";

import Link from "next/link";

export default function DeploymentCTA() {
  return (
    <section
    id="lead"
    className="bg-gradient-to-r from-slate-800 to-blue-950 py-16 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-600 sm:text-base">
          Plan Your Deployment
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Turn governance requirements into an
          <br className="hidden sm:block" />
          enterprise deployment plan
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-white/80">
          Schedule the review, request a quote, or take the approval pack to
          your committee first.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Link
            href="/schedule-compliance-architecture#lead"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:w-auto"
          >
            Schedule Review
          </Link>

          <Link
            href="/see-your-custom-quote"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            Request Custom Quote
          </Link>

          <Link
            href="/enterprise-approval-pack"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            Download Approval Pack
          </Link>
        </div>
      </div>
    </section>
  );
}