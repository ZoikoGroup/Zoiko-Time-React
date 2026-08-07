'use client'
import React, { useState } from 'react';

const popularSearchTags = [
  'Break & rest policy setup',
  'Preparing for an audit',
  'Remote & hybrid time tracking',
  'Payroll close checklist',
];

const roleFilters = [
  { emoji: '👤', label: 'For Workers' },
  { emoji: '🧾', label: 'For Payroll' },
  { emoji: '🧭', label: 'For HR & People' },
  { emoji: '🛠️', label: 'For IT & Admins' },
  { emoji: '📋', label: 'For Compliance' },
];

const trustPoints = [
  'Every guide is reviewed and source-linked',
  'Not a substitute for canonical documentation',
  'Version-controlled and dated',
];

export default function GuidesHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search action
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[760px] h-96 bg-radial from-teal-600/10 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1140px] mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Header Text */}
        <header className="flex flex-col items-center gap-3 max-w-[760px]">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Guides
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-white leading-[1.15]">
            Learn ZoikoTime, by <br className="hidden sm:inline" />
            outcome or by role
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 leading-relaxed max-w-[560px] mt-2">
            Role-aware, source-linked, version-controlled guides that help you understand, implement, and adopt ZoikoTime — separate from, and always pointing back to, canonical documentation.
          </p>
        </header>

        {/* Search Bar Container */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-[640px] bg-white dark:bg-slate-900 rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] border border-gray-300 dark:border-slate-800 p-2 flex items-center gap-2 transition-shadow focus-within:shadow-lg"
        >
          {/* Search Icon */}
          <div className="pl-3 text-gray-400 shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 dark:text-slate-100 placeholder-gray-400 focus:outline-none px-2 py-1"
          />

          {/* Search Submit Button */}
          <button
            type="submit"
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-[10px] transition-colors shrink-0 shadow-xs"
          >
            Search Guides
          </button>
        </form>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-[850px] text-xs sm:text-sm">
          <span className="text-gray-500 dark:text-slate-400 font-normal mr-1">
            Popular:
          </span>
          {popularSearchTags.map((tag, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium rounded-full border border-gray-300 dark:border-slate-800 hover:border-teal-600 dark:hover:border-teal-400 transition-colors shadow-2xs"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {roleFilters.map((role, idx) => (
            <button
              key={idx}
              type="button"
              className="px-4 py-2.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium rounded-full border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] hover:border-teal-600 dark:hover:border-teal-400 transition-all"
            >
              <span className="mr-1.5">{role.emoji}</span>
              <span>{role.label}</span>
            </button>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4 text-xs text-gray-500 dark:text-slate-400">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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