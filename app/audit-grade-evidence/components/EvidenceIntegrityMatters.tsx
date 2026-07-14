import React from "react";

const cards = [
  {
    icon: "🔍",
    title: "Explain What Happened",
    description:
      "Preserve the timeline, signals, approvals, corrections, exceptions, and review actions behind workforce decisions.",
  },
  {
    icon: "📊",
    title: "Support Better Decisions",
    description:
      "Give HR, finance, legal, compliance, payroll, and operations teams structured records instead of fragmented notes and manual logs.",
  },
  {
    icon: "🛡",
    title: "Reduce Evidence Gaps",
    description:
      "Help reduce risk from missing timestamps, undocumented approvals, unsupported exceptions, unclear corrections, and absent review history.",
  },
];

const EvidenceIntegrityMatters = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-6 h-[2px] bg-teal-600" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 text-center">
            Why Evidence Integrity Matters
          </span>
        </div>

        <h2 className="max-w-4xl mx-auto text-center text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight text-slate-900 dark:text-white">
          Workforce Decisions Need More Than a Timestamp
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-center text-base leading-7 text-slate-600 dark:text-slate-400">
          Workforce records often support high-accountability decisions:
          payroll review, client billing, HR investigations, internal audits,
          labor disputes, compliance reviews, and legal inquiries.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-8">{card.icon}</div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {card.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceIntegrityMatters;