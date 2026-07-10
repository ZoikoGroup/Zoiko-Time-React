import React from "react";

const statusItems = [
  {
    title: "Check System Status",
    description:
      "View current availability, degraded service notices, maintenance windows, and incident updates.",
    link: "Check System Status →",
  },
  {
    title: "View Incident Updates",
    description:
      "Follow active incidents, maintenance notices, and resolution updates.",
    link: "View Incident & Availability Status →",
  },
  {
    title: "Security Questions",
    description:
      "Review security controls, access, encryption, infrastructure, enterprise posture, and documentation.",
    link: "View Security Addendum →",
  },
  {
    title: "Retention & Legal Hold",
    description:
      "Review data retention, legal hold, record preservation, and evidence governance guidance.",
    link: "View Data Retention & Legal Hold →",
  },
];

export default function StatusHelp() {
  return (
    <section className="bg-white py-16 dark:bg-slate-900 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Status &amp; Security
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Status, security, and availability
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
            If ZoikoTime appears slow, unavailable, or is not behaving as
            expected, check system status before opening a support request.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {statusItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-slate-300">
                {item.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                {item.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}