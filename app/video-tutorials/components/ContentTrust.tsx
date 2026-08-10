"use client";

import { FiInfo } from "react-icons/fi";

const trustPoints = [
  {
    title: "Version-aware",
    description:
      "Every tutorial states the exact product version it was recorded against, and a last-updated date — so you know if it still matches what you're using.",
  },
  {
    title: "Safe demo data",
    description:
      "All on-screen data is synthetic. No tutorial ever shows real worker names, records, or organization data.",
  },
  {
    title: "Not documentation, not release notes",
    description:
      "Tutorials teach a task; they don't replace canonical documentation or serve as a webinar archive or marketing gallery.",
  },
];

export default function ContentTrust() {
  return (
    <section className="w-full bg-gray-50 py-14 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Content Trust
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white">
            A learning platform, not a video gallery
          </h2>
        </div>

        {/* Trust Cards */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

                <div>
                  <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-5 text-gray-500 dark:text-slate-400">
                    {point.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 text-center">
          <FiInfo className="h-3.5 w-3.5 shrink-0 text-gray-500 dark:text-slate-400" />

          <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
            Outdated tutorials are retired or re-recorded — not left live with
            a stale version badge.
          </p>
        </div>

      </div>
    </section>
  );
}