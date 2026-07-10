import React from "react";

const tabs = [
  "All",
  "General",
  "Plans & Billing",
  "Time & Timesheets",
  "Screenshots & Privacy",
  "Security & Compliance",
  "Responsible AI",
  "Implementation & Support",
];

export default function FaqTabs() {
  return (
    <section className="w-full border-b border-slate-200 bg-slate-100 dark:bg-slate-900 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 rounded-xl">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-md border px-5 py-2 text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                index === 0
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}