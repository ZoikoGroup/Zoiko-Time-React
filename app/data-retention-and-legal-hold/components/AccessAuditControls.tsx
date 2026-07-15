import React from "react";

const controls = [
  {
    image: "/AccessAuditControls/access.png",
    title: "Permission-Based Access",
    description:
      "Limit access by role, team, department, jurisdiction, matter, worker group, or record type where configured.",
  },
  {
    image: "/AccessAuditControls/controls.png",
    title: "Export Controls",
    description:
      "Restrict who can export workforce records, require appropriate permissions, and log all export actions.",
  },
  {
    image: "/AccessAuditControls/audit.png",
    title: "Audit Trails",
    description:
      "Record key administrative and review actions including retention-policy changes, legal hold activity, access events, and export logs.",
  },
  {
    image: "/AccessAuditControls/evidence.png",
    title: "Evidence Packaging",
    description:
      "Package relevant records with timestamps, approvals, exceptions, policy references, and review history where supported.",
  },
  {
    image: "/AccessAuditControls/duties.png",
    title: "Separation of Duties",
    description:
      "Support governance models where legal, HR, compliance, payroll, finance, and IT have separate access responsibilities.",
  },
  {
    image: "/AccessAuditControls/privacy.png",
    title: "Worker Privacy",
    description:
      "Support controlled access, minimization, notice, and transparency principles where applicable and configured.",
  },
];

export default function AccessAuditControls() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Access, Export, and Audit Controls
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-300">
            Retention and legal hold must be supported by controlled access,
            clear permissions, audit trails, and accountable exports.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-6">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}