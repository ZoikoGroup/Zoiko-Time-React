"use client";

import React, { useState } from "react";

const popularSearchTags = [
  "Break & rest policy setup",
  "Preparing for an audit",
  "Remote & hybrid time tracking",
  "Payroll close checklist",
];

const roleFilters = [
  { emoji: "👤", label: "For Workers" },
  { emoji: "🧾", label: "For Payroll" },
  { emoji: "🧭", label: "For HR & People" },
  { emoji: "🛠️", label: "For IT & Admins" },
  { emoji: "📋", label: "For Compliance" },
];

const trustPoints = [
  "Every guide is reviewed and source-linked",
  "Not a substitute for canonical documentation",
  "Version-controlled and dated",
];

export default function GuidesHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search action
  };

  return (
    <section
    id="search-guides"
     className="relative w-full overflow-hidden bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-96 w-full max-w-[760px] -translate-x-1/2 bg-radial from-teal-600/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center gap-8 text-center">
        {/* Header Text */}
        <header className="flex max-w-[760px] flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Guides
          </span>

          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-800 sm:text-4xl md:text-5xl dark:text-white">
            Learn ZoikoTime, by{" "}
            <br className="hidden sm:inline" />
            outcome or by role
          </h1>

          <p className="mt-2 max-w-[560px] text-base leading-relaxed text-gray-500 sm:text-lg dark:text-slate-400">
            Role-aware, source-linked, version-controlled guides that help you
            understand, implement, and adopt ZoikoTime — separate from, and
            always pointing back to, canonical documentation.
          </p>
        </header>

        {/* Search Bar Container */}
        <form
          
          onSubmit={handleSearch}
          className="flex w-full max-w-[640px] items-center gap-2 rounded-2xl border border-gray-300 bg-white p-2 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] transition-shadow focus-within:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Search Icon */}
          <div className="shrink-0 pl-3 text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Search Input */}
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search guides — e.g. "payroll close readiness"'
            className="w-full min-w-0 bg-transparent px-2 py-1 text-sm text-slate-800 placeholder-gray-400 focus:outline-none sm:text-base dark:text-slate-100"
          />

          {/* Search Submit Button */}
          <button
            type="submit"
            className="shrink-0 rounded-[10px] bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500"
          >
            Search Guides
          </button>
        </form>

        {/* Popular Tags */}
        <div className="flex max-w-[850px] flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
          <span className="mr-1 font-normal text-gray-500 dark:text-slate-400">
            Popular:
          </span>

          {popularSearchTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 font-medium text-slate-800 shadow-sm transition-colors hover:border-teal-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {roleFilters.map((role) => (
            <button
              key={role.label}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition-all hover:border-teal-600 sm:text-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400"
            >
              <span className="mr-1.5">{role.emoji}</span>
              <span>{role.label}</span>
            </button>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gray-500 sm:gap-8 dark:text-slate-400">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}