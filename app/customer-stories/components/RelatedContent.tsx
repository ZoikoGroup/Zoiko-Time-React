"use client";

import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const relatedContent = [
  {
    category: "Trust & Governance",
    title: "Procurement & Legal Resources",
    description:
      "Evidence packs, access classes, and the request workflow.",
      href:"/procurement-and-legal-resources"
  },
  {
    category: "Trust & Governance",
    title: "Break & Rest Compliance",
    description:
      "How configured policy becomes a reviewable record.",
      href:"/break-rest-compliance"
  },
  {
    category: "Resources",
    title: "Webinars & Events",
    description:
      "Hear directly from customers and product leads, live.",
      href:"/webinars-and-events"
  },
];

export default function RelatedContent() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Related Content
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Where to go next.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedContent.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                {item.category}
              </p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <button
                type="button"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
              >
                Visit page
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}