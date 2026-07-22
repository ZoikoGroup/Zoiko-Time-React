import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const topics = [
  "Workforce Assurance",
  "Time Tracking",
  "Timesheet Integrity",
  "Worker Transparency",
  "Responsible AI",
  "Audit Evidence",
  "Payroll Readiness",
  "Enterprise Governance",
  "Professional Services",
];

export default function BlogHero() {
  return (
    <section
    id = "browse-topic"
     className="relative overflow-hidden bg-[#F3FCFB] dark:bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center px-4 py-20">
        {/* Badge */}
        <div className="rounded-full border border-teal-300 bg-teal-100 px-6 py-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
            ZoikoTime Blog &amp; Insights
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-center text-[56px] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-900 dark:text-white">
          Workforce Insights for Modern Teams
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-center text-[16px] leading-8 text-slate-500 dark:text-slate-400">
          Practical insights on workforce assurance, time integrity,
          timesheet accuracy, responsible AI, worker transparency, and
          enterprise governance.
        </p>

        {/* Search */}
        <div className="mt-10 flex h-14 w-full max-w-[760px] overflow-hidden rounded-xl bg-white shadow-xl shadow-teal-900/10">
          <div className="flex flex-1 items-center px-6">
            <Search className="mr-3 h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search insights, guides, and articles"
              className="w-full bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="w-44 bg-teal-600 text-lg font-semibold text-white transition hover:bg-teal-700">
            Search
          </button>
        </div>

        {/* Topics */}
        <div className="mt-8 flex max-w-6xl flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <button
              key={topic}
              className="rounded-full bg-slate-200 px-5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-teal-600 hover:text-white"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row">
          <Link
  href="/blog#explore-insights"
  className="inline-flex h-12 w-56 items-center justify-center rounded-lg bg-teal-600 text-sm font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700"
>
  Explore Insights
</Link>

          <Link
  href="/blog#browse-topic"
  className="inline-flex h-12 w-56 items-center justify-center rounded-lg border border-teal-600 bg-transparent text-sm font-medium text-teal-600 transition hover:bg-teal-50 dark:hover:bg-slate-900"
>
  Browse Topics
</Link>
        </div>
      </div>
    </section>
  );
}