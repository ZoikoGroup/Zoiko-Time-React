import React from "react";

export default function ArtificialIntelligenceInsights() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6 bg-white dark:bg-slate-950">

      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          9. Artificial Intelligence, Automated Insights,
          <br className="hidden sm:block" />
          <span className="sm:inline block">Human Review</span>
        </h2>

        {/* Teal Line */}
        <div
          className="
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
            mt-4
            mb-6
          "
        />

        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          ZoikoTime may use rules-based systems, statistical methods, machine
          learning, or AI to support workforce assurance, anomaly detection,
          operational reporting, and time verification. Where AI or automated
          insights are enabled by customer configuration, they are designed as
          decision-support tools for human review—not as autonomous
          decision-makers.
        </p>

        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime&apos;s AI and automated insights are designed around
          explainability, auditability, proportionality, and customer
          governance. Customers remain responsible for notices, consultations,
          impact assessments, lawful basis, and decisions based on AI outputs.
          ZoikoTime does not use identifiable Customer Data to train general AI
          models for other customers.
        </p>

      </div>

    </section>
  );
}