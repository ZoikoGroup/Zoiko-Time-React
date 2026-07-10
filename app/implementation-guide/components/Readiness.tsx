import React from "react";

export default function Readiness() {
  const items = [
    {
      category: "Business",
      title: "Business readiness",
      desc: "Goals, scope, owners, and success metrics are agreed.",
    },
    {
      category: "Workforce",
      title: "Workforce readiness",
      desc: "Worker communication is prepared and transparency is in place.",
    },
    {
      category: "Governance",
      title: "Governance readiness",
      desc: "Policies, permissions, retention, and evidence boundaries are set.",
    },
    {
      category: "Technical",
      title: "Technical readiness",
      desc: "Integrations, SSO, and configuration are tested.",
    },
    {
      category: "Reporting",
      title: "Reporting readiness",
      desc: "Dashboards, exports, and approvals are validated.",
    },
    {
      category: "Support",
      title: "Support readiness",
      desc: "Escalation paths and internal support owners are defined.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Readiness
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Pre-launch readiness
          </h2>

          <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
            Confirm the organization is ready across six dimensions before expanding.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              bg-white dark:bg-slate-900
              rounded-2xl
              p-7
              shadow-sm
              border border-slate-200 dark:border-slate-800
              transition-colors
              "
            >

              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {item.category}
              </p>


              <h3 className="
              mt-3
              text-base
              font-semibold
              text-slate-800
              dark:text-white
              ">
                {item.title}
              </h3>


              <p className="
              mt-4
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-400
              ">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}