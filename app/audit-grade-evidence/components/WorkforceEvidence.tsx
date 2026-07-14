import React from "react";

const evidenceCards = [
  {
    icon: "⏰",
    title: "Time and Attendance",
    description:
      "Clock-in / clock-out records, work sessions, break records, attendance events, shift exceptions, and manual entries.",
  },
  {
    icon: "📊",
    title: "Activity Verification",
    description:
      "Application activity, URL activity, active and idle patterns, work-session metadata, and verification signals where enabled.",
  },
  {
    icon: "📸",
    title: "Screenshot Records",
    description:
      "Screenshot records, redacted screenshots, metadata, reviewer actions, access logs, and retention rules where enabled.",
  },
  {
    icon: "💳",
    title: "Timesheet and Payroll",
    description:
      "Timesheet submissions, approvals, corrections, disputes, payroll export logs, and payroll reconciliation records.",
  },
  {
    icon: "👥",
    title: "HR and Operations",
    description:
      "Policy acknowledgments, exception reviews, manager decisions, worker correction requests, and investigation notes.",
  },
  {
    icon: "📈",
    title: "Reporting Records",
    description:
      "Generated reports, parameters, analytics outputs, dashboard snapshots where supported, and export logs.",
  },
  {
    icon: "⚙",
    title: "Administrative Records",
    description:
      "Role changes, permission changes, policy configuration changes, retention changes, and legal hold actions.",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Signals",
    description:
      "Confidence scores, anomaly flags, AI-assisted summaries, human review actions, and override history where applicable.",
  },
];

const WorkforceEvidence = () => {
  return (
    <section className="bg-slate-900 dark:bg-black py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-6 h-[2px] bg-teal-500" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-500 text-center">
            What ZoikoTime Preserves
          </span>
        </div>

        <h2 className="max-w-3xl mx-auto text-center text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight text-white">
          Eight Categories of Workforce Evidence
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-center text-base leading-7 text-slate-400">
          Depending on customer configuration, plan, deployment model, and
          agreement, ZoikoTime may help organizations preserve multiple
          categories of workforce evidence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-teal-500/40 hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="text-3xl mb-6">{card.icon}</div>

              <h3 className="text-lg font-semibold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-sm leading-7 text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkforceEvidence;