import React from "react";

export default function FeaturedPosts() {
  return (
    <div className="mx-auto max-w-7.5xl px-6 pb-16 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
        {/* Featured Large Left Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.04)] overflow-hidden dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between">
          <div>
            {/* Image Placeholder */}
            <div className="h-64 roundex-xl bg-slate-100 dark:bg-slate-850 w-full flex items-center justify-center  text-slate-400 font-medium text-xs select-none">
              <img className="rounded-xl" src="/blog-insights-topic/Img (9).png"/>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                Time &amp; Attendance
              </span>
              <h2 className="text-2xl font-bold text-slate-850 dark:text-white leading-snug">
                Why time disputes happen — and how clear records prevent them
              </h2>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Most disputes aren’t about dishonesty; they’re about records without context.
                Here’s what a reviewable record contains, and how transparency prevents the
                argument in the first place.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500  mt-4">
            <span>Published 2026-07-18</span>
            <span>·</span>
            <span className="text-teal-700 dark:text-teal-400 font-semibold">Reviewed Jul 2026</span>
            <span>·</span>
            <span>Editorial Desk</span>
          </div>
        </div>

        {/* Featured Smaller Cards Stack (Right) */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.04)] overflow-hidden dark:bg-slate-900 dark:border-slate-800 flex gap-4 p-4 items-center">
            {/* Small Image Placeholder */}
            <div className="w-20 h-24 rounded-lg  flex items-center justify-center shrink-0 text-slate-400 text-[10px] text-center font-medium select-none p-1 leading-tight">
              <img src="/blog-insights-topic/Image (7).png" />
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                Human-in-Command &amp; AI
              </span>
              <h3 className="text-sm font-bold text-slate-850 dark:text-white leading-snug truncate md:whitespace-normal">
                Deterministic vs. AI classification: what the difference means
              </h3>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                Updated 2026-07-22
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.04)] overflow-hidden dark:bg-slate-900 dark:border-slate-800 flex gap-4 p-4 items-center">
            {/* Small Image Placeholder */}
            <div className="w-20 h-24 rounded-lg flex items-center justify-center shrink-0 text-slate-400 text-[10px] text-center font-medium select-none p-1 leading-tight">
               <img src="/blog-insights-topic/Image (8).png" />

            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                Workforce Governance
              </span>
              <h3 className="text-sm font-bold text-slate-850 dark:text-white leading-snug truncate md:whitespace-normal">
                Evidence you can defend: what belongs in a time record
              </h3>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                Reviewed Jul 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
