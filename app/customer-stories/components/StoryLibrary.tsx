"use client";

import Image from "next/image";
import { FiCheckCircle, FiChevronDown, FiArrowRight } from "react-icons/fi";

const filters = [
  {
    label: "Outcome: Any",
    active: true,
  },
  {
    label: "Role: Any",
  },
  {
    label: "Work Model: Any",
  },
  {
    label: "Verified: Last 12 months",
  },
];

const stories = [
  {
    image: "/customer-stories/featured-story.png",
    category: "Logistics · Enterprise",
    title: "National Logistics Customer Cuts Exception Review Time by 62%",
    date: "Jul 2026",
  },
  {
    image: "/customer-stories/work-model-1.png",
    category: "Retail · Multi-Site",
    title: "Regional Retailer Standardizes Break Policy Across 120 Stores",
    date: "Jun 2026",
  },
  {
    image: "/customer-stories/work-model-2.png",
    category: "Warehouse · Shift-Based",
    title: "Distribution Operator Reaches Audit-Ready Status in One Quarter",
    date: "May 2026",
  },
  {
    image: "/customer-stories/work-model-3.png",
    category: "Healthcare · Shift-Based",
    title: "Healthcare System Reduces Manual Break Corrections by Half",
    date: "Apr 2026",
  },
  {
    image: "/customer-stories/customer-story.png",
    category: "Corporate · Hybrid",
    title: "Professional Services Firm Unifies Policy Across Three Regions",
    date: "Mar 2026",
  },
  {
    image: "/customer-stories/story-6.png",
    category: "Technology · Corporate",
    title: "SaaS Company Onboards 900 Employees onto Governed Time",
    date: "Feb 2026",
  },
];

export default function StoryLibrary() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Story Library
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Every verified story, searchable.
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                filter.active
                  ? "border-emerald-100 bg-emerald-50 text-teal-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-teal-300"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {filter.label}
              <FiChevronDown className="h-4 w-4" />
            </button>
          ))}
        </div>

        {/* Stories */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-56">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  {story.category}
                </p>

                <h3 className="mt-3 min-h-[56px] text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 dark:border-emerald-800 dark:bg-emerald-900/20">
                    <FiCheckCircle className="h-4 w-4 text-teal-700 dark:text-teal-300" />

                    <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                      Consented
                    </span>
                  </div>

                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {story.date}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                >
                  Read Story
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}