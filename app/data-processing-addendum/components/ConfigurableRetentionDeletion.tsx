import React from "react";

const retentionData = [
  {
    title: "Session Evidence Records",
    years: "7 years",
    reason: "Legal hold / statute",
    width: "w-full",
  },
  {
    title: "Workforce Activity Logs",
    years: "5 years",
    reason: "Contractual / audit",
    width: "w-3/4",
  },
  {
    title: "Anomaly & Alert Records",
    years: "4 years",
    reason: "Dispute resolution",
    width: "w-2/3",
  },
  {
    title: "Configuration & Policy Logs",
    years: "3 years",
    reason: "Compliance audit",
    width: "w-1/2",
  },
  {
    title: "Access & Authentication Logs",
    years: "2 years",
    reason: "Security review",
    width: "w-1/3",
  },
  {
    title: "Temporary Processing Cache",
    years: "24 hours",
    reason: "Processing complete",
    width: "w-1",
  },
];

export default function ConfigurableRetentionDeletion() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Configurable Retention Automated Deletion
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400 max-w-5xl mx-auto">
            Retention periods are configurable by customer policy within the
            bounds of applicable legal requirements. Automated deletion is
            enforced at the end of each retention period — with deletion
            certificates issued for each deletion event.
          </p>
        </div>


        {/* Table Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden max-w-5xl mx-auto">

          {/* Header */}
          <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
            <h3 className="text-white text-sm font-bold">
              Default Retention Schedule
            </h3>

            <p className="text-white/50 text-xs font-semibold">
              Configurable by customer — maximums apply per jurisdiction
            </p>
          </div>


          {/* Rows */}
          {retentionData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 px-6 py-4 border-b border-slate-200 dark:border-slate-800"
            >

              {/* Title */}
              <div className="w-52 text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </div>


              {/* Progress */}
              <div className="flex-1">
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`${item.width} h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full`}
                  />
                </div>
              </div>


              {/* Years */}
              <div className="w-16 text-xs font-bold text-teal-600 font-mono">
                {item.years}
              </div>


              {/* Reason */}
              <div className="hidden lg:block bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                {item.reason}
              </div>

            </div>
          ))}


          {/* Footer */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-t border-teal-600/10 px-6 py-4 text-center">
            <p className="text-xs font-bold text-teal-700 dark:text-teal-400">
              Deletion certificates are issued automatically for each automated
              deletion event — available for download as audit evidence in the
              Account Governance panel.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}