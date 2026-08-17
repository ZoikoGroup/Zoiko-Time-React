import React from "react";

interface PathCard {
  number: string;
  title: string;
  description: string;
}

const paths: PathCard[] = [
  {
    number: "1",
    title: "New to ZoikoTime",
    description:
      "Core concepts, first-week setup, and what to expect from your first pay period.",
  },
  {
    number: "2",
    title: "Preparing for an audit",
    description:
      "Evidence, version history, and the records auditors ask for first.",
  },
  {
    number: "3",
    title: "Rolling out to a distributed team",
    description:
      "Remote, hybrid, field, and global configuration in one sequence.",
  },
];

export default function PopularPathsSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-10">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Popular Paths
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Start where your team actually is
          </h2>
        </header>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {paths.map((path) => (
            <div
              key={path.number}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex items-start gap-4 transition-all hover:shadow-md group"
            >
              {/* Number Badge */}
              <div className="w-9 h-9 rounded-[10px] bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 flex items-center justify-center text-sm font-bold shrink-0">
                {path.number}
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between h-full gap-3">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                    {path.title}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Action link removed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}