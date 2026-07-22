import React from "react";

const articles = [
  {
    title: "How to reset your password",
    tags: ["Worker", "Account & Login"],
  },
  {
    title: "Submitting your timesheet",
    tags: ["Worker", "Timesheets"],
  },
  {
    title: "Requesting a time correction",
    tags: ["Worker", "Corrections"],
  },
  {
    title: "Adding users to your workspace",
    tags: ["Admin", "Setup"],
  },
  {
    title: "Configuring roles & permissions",
    tags: ["Admin", "Permissions"],
  },
  {
    title: "Exporting reports & analytics",
    tags: ["Admin", "Reports"],
  },
  {
    title: "Updating your billing details",
    tags: ["Finance", "Billing"],
  },
  {
    title: "Setting up SSO",
    tags: ["IT", "Security"],
  },
  {
    title: "How to contact support",
    tags: ["All", "Support"],
  },
];

export default function PopularHelp() {
  return (
    <section
    id ="popular"
     className="bg-gray-50 py-16 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Popular
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Popular help articles
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
            Start with the ZoikoTime support topics users ask for most often.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {article.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                      tag === "Worker" ||
                      tag === "Admin" ||
                      tag === "Finance" ||
                      tag === "IT" ||
                      tag === "All"
                        ? "bg-emerald-50 text-slate-800 dark:bg-emerald-900/30 dark:text-white"
                        : "bg-emerald-50 text-teal-700 dark:bg-emerald-900/30 dark:text-teal-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}