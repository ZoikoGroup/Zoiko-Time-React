import React from "react";

const resources = [
  {
    title: "Product Documentation",
    description:
      "Detailed guidance across features, workflows, roles, and configuration.",
    action: "View Docs →",
  },
  {
    title: "Implementation Guide",
    description:
      "Rollout, training, configuration, and launch readiness guidance.",
    action: "View Guide →",
  },
  {
    title: "Worker Guide",
    description:
      "Plain-language guidance for individual users.",
    action: "View Worker Guide →",
  },
  {
    title: "Security Addendum",
    description:
      "Security, access, infrastructure, and enterprise control details.",
    action: "View Addendum →",
  },
];

export default function Resources() {
  return (
    <section className="bg-white py-16 dark:bg-slate-900 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Explore
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Explore ZoikoTime resources
          </h2>
        </div>

        {/* Resource Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {resource.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-slate-300">
                {resource.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                {resource.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}