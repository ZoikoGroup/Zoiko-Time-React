import React from "react";
import Link from "next/link";


export default function HelpHero() {
  const tags = [
    "All",
    "Reset password",
    "Submit timesheet",
    "Add users",
    "Billing",
    "SSO & Security",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[750px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:py-24">
        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
          ZoikoTime Help Center
        </p>

        {/* Heading */}
        <h1 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          How can we{" "}
          <span className="text-teal-600">help?</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-gray-600 dark:text-gray-300">
          Search support articles, product guides, troubleshooting
          resources, account help, timesheet guidance, mobile app support,
          billing help, security references, and system status updates.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search help articles, guides, and troubleshooting topics"
            className="h-14 flex-1 rounded-xl border border-gray-300 bg-white px-5 text-base text-slate-800 placeholder:text-gray-500 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400 dark:focus:ring-teal-500/30"
          />

          <button className="h-14 rounded-xl bg-teal-600 px-8 font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700">
            Search Help Articles
          </button>
        </div>

        {/* Tags */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-slate-700 transition hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-400"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Bottom Link */}
<div className="mt-10 text-center">
  <Link
    href="/product-documentation"
    className="inline-flex items-center justify-center font-semibold text-teal-700 transition hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
  >
    Browse Product Documentation →
  </Link>
</div>
      </div>
    </section>
  );
}