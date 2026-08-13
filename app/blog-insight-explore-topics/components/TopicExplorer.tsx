import React from "react";

interface TopicExplorerProps {
  activeTopic: string;
  setActiveTopic: (topic: string) => void;
  filteredCount: number;
  totalCount: number;
  topics: string[];
}

export default function TopicExplorer({
  activeTopic,
  setActiveTopic,
  filteredCount,
  totalCount,
  topics
}: TopicExplorerProps) {
  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/60  font-sans">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-slate-850 dark:text-white">
            Topic Explorer
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Topics reflect the current editorial registry. Empty, withdrawn, stale, or unowned topics do not
            appear. Selecting a topic filters the articles below — it never creates a lead or personalizes
            based on your browsing.
          </p>
        </div>

        {/* Filtering Pills */}
        <div className="flex flex-wrap gap-2.5 max-w-5xl">
          {topics.map((topic) => {
            const isActive = activeTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-4.5 py-2.5 text-xs font-semibold rounded-full border transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-slate-800 text-white border-slate-800 dark:bg-teal-600 dark:border-teal-600"
                    : "bg-white text-slate-700 border-gray-300 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-850"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Results Counters */}
        <div className="space-y-1.5 pt-4">
          <h4 className="text-sm font-semibold text-slate-850 dark:text-white">
            Showing {activeTopic === "All" ? "all" : `"${activeTopic}"`} current insights.
          </h4>
          <p className="text-xs text-slate-450 dark:text-slate-555">
            <span>Showing {filteredCount} of {totalCount} current insights </span>
            <span>— ordered by current editorial priority, not by views.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
