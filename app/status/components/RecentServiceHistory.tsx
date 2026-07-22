import React from "react";

const history = [
  {
    type: "Maintenance",
    title: "Reporting infrastructure maintenance",
    details:
      "Completed · 1h 12m · Reporting & Analytics — exports briefly delayed; resolved as planned.",
  },
  {
    type: "Incident",
    title: "Elevated API latency",
    details:
      "Resolved · 38m · Integrations & APIs — latency returned to normal after a configuration rollback.",
  },
  {
    type: "Maintenance",
    title: "Authentication provider update",
    details:
      "Completed · 45m · Authentication & SSO — no customer impact reported.",
  },
];

export default function RecentServiceHistory() {
  return (
    <section
    id = "incident-history"
     className="bg-white dark:bg-slate-950 px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            History
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            Recent Service History
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Recent incidents and maintenance activity. Resolved events are shown
            clearly; major incidents may link to a reviewed post-incident
            summary.
          </p>
        </div>

        {/* History Cards */}
        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {history.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Badge */}
                <span className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-teal-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                  {item.type}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}