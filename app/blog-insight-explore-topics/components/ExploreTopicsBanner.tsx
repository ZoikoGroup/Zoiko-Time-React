import React from "react";

interface ExploreTopicsBannerProps {
  onExploreClick: () => void;
}

export default function ExploreTopicsBanner({ onExploreClick }: ExploreTopicsBannerProps) {
  return (
    <div className="mx-auto max-w-7.5xl px-6 pb-16 font-sans">
      <div className="bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2.5 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-450 dark:text-slate-500 block">
            Explore Topics
          </span>
          <h2 className="text-2xl font-extrabold text-slate-850 dark:text-white">
            Browse current insights by topic.
          </h2>
          <p className="text-xs md:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
            Choose a current topic to narrow educational articles. Product behavior, trust evidence,
            release history, pricing, support, and enterprise commitments remain authoritative in their
            existing ZoikoTime pages.
          </p>
        </div>
        <button
          onClick={onExploreClick}
          className="px-6 py-3 bg-[#10A28D] text-sm font-bold text-white bg-teal-605 rounded-xl shadow-[0px_6px_16px_0px_rgba(16,162,141,0.25)] hover:bg-teal-700 transition-all cursor-pointer shrink-0"
        >
          Explore Topics
        </button>
      </div>
    </div>
  );
}
