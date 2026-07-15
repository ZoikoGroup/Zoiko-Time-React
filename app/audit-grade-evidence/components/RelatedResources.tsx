import React from "react";

const resources = [
  {
    icon: "📁",
    title: "Data Retention & Legal Hold",
    description:
      "Understand how ZoikoTime supports retention policies, legal hold preservation, expiry rules, and deletion controls for workforce records.",
    link: "Explore Data Retention & Legal Hold →",
  },
  {
    icon: "🔒",
    title: "Security Addendum",
    description:
      "Review security safeguards, access controls, authentication practices, encryption, and administrative protections.",
    link: "View Security Addendum →",
  },
  {
    icon: "🆘",
    title: "Help Center",
    description:
      "Access support resources, product guidance, and administrative assistance.",
    link: "Visit Help Center →",
  },
];

const RelatedResources = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
          Related Resources
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-6">{item.icon}</div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <button className="mt-8 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline">
                {item.link}
              </button>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-14 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            ZoikoTime provides workforce evidence, audit trail, review,
            export, retention, and governance-related functionality to
            support customer workflows. ZoikoTime does not provide legal
            advice, does not determine legal admissibility of records, does
            not guarantee that records will satisfy every legal,
            regulatory, or judicial requirement, and does not replace
            employer, HR, legal, payroll, compliance, or tax obligations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;