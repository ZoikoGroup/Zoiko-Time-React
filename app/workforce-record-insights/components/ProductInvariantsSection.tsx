import React from 'react';

interface PropertyCard {
  title: string;
  description: string;
  isSpecial?: boolean;
}

const properties: PropertyCard[] = [
  {
    title: "Governed source",
    description: "Every value derives only from approved, permissioned workforce records.",
  },
  {
    title: "Defined calculation",
    description: "Numerator, denominator, unit, inclusion, exclusion, rounding, null treatment, version — all inspectable.",
  },
  {
    title: "Bounded scope",
    description: "Organization, unit, purpose, record type, policy, jurisdiction, time window are explicit.",
  },
  {
    title: "Visible context",
    description: "Schedule, time zone, policy version, source status, and relevant exceptions accompany the value.",
  },
  {
    title: "Data-quality state",
    description: "Freshness, completeness, missing inputs, conflicts, and incompatible records are visible.",
  },
  {
    title: "Comparability state",
    description: "The system explains whether periods, units, policies, or jurisdictions can be responsibly compared.",
  },
  {
    title: "Permission-aware detail",
    description: "Counts, filters, drill-downs, exports, and deep links reveal only authorized data.",
  },
  {
    title: "Worker rights",
    description: "Applicable own-record insight includes explanation, supporting records where permitted, correction, status, escalation.",
  },
  {
    title: "Human review",
    description: "The insight points to an accountable review action. It does not decide the outcome.",
  },
  {
    title: "Evidence continuity",
    description: "Definition history, source lineage, annotations, review, and sharing are attributable and versioned.",
  },
  {
    title: "Explicit limitations",
    description: "The interface tells you what the insight cannot establish.",
  },
  {
    title: "No person scoring",
    description: "The system does not turn an individual into a score, rank, risk label, or inferred productivity judgment.",
    isSpecial: true,
  },
];

export default function ProductInvariantsSection() {
  return (
    <section className="w-full bg-slate-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 lg:gap-12">
        
        {/* Header Section */}
        <div className="max-w-3xl flex flex-col items-center text-center gap-3">
          <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
            Binding product invariant
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sans text-white leading-snug">
            No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.
          </h2>
          <p className="pt-2 text-slate-300 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-2xl">
            An insight layer is where surveillance usually enters a workforce product — by aggregating observation into something that looks objective. Twelve required properties exist to prevent exactly that.
          </p>
        </div>

        {/* 12 Required Properties Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {properties.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border shadow-sm flex flex-col gap-3 transition-all duration-200 hover:scale-[1.01] ${
                item.isSpecial
                  ? "bg-emerald-950/40 dark:bg-emerald-950/60 border-emerald-500/40 dark:border-emerald-500/50"
                  : "bg-white/5 dark:bg-slate-900/80 border-white/10 dark:border-slate-800 hover:border-white/20"
              }`}
            >
              <h3 className="text-white text-base sm:text-lg font-bold font-sans leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-300 dark:text-slate-400 text-sm font-normal leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}