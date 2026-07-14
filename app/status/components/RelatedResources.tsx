import React from "react";

const resources = [
  {
    title: "Security Addendum",
    description:
      "Security, access, infrastructure, and enterprise control details.",
  },
  {
    title: "Help Center",
    description:
      "Search guides, troubleshooting, and support routes.",
  },
  {
    title: "Subscription Terms",
    description:
      "Plans, billing, renewals, and enterprise agreements.",
  },
];

export default function RelatedResources() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Related
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            Related Resources
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {resource.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}