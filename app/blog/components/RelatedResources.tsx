import React from "react";

const resources = [
  {
    title: "Product Documentation",
    action: "View Docs →",
  },
  {
    title: "Implementation Guide",
    action: "View Guide →",
  },
  {
    title: "Responsible AI",
    action: "View Policy →",
  },
  {
    title: "Security Addendum",
    action: "View Security →",
  },
];

export default function RelatedResources() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900 transition-colors">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Related Resources
            </h2>

            <div className="mt-10 space-y-4">
              {resources.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-6 py-4 transition hover:border-teal-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <button className="text-xs font-bold text-teal-600 hover:text-teal-700 dark:hover:text-teal-400">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Get ZoikoTime Insights
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Receive occasional insights on workforce assurance, time
              integrity, responsible AI, and enterprise governance.
              Unsubscribe at any time.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="email"
                placeholder="Your business email address"
                className="w-full rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />

              <input
                type="text"
                placeholder="Role or area of interest..."
                className="w-full rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                />

                <span className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  I agree to receive ZoikoTime updates. I can unsubscribe at
                  any time.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Subscribe to Updates
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}