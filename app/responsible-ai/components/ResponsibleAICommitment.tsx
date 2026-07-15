import React from "react";

export default function ResponsibleAICommitment() {
  const commitments = [
    {
      title: "Human-centered",
      description:
        "AI assists people; it does not replace HR, legal, manager, or employer judgment.",
    },
    {
      title: "Explainable",
      description:
        "Signals come with context so authorized users understand why review may be needed.",
    },
    {
      title: "Permissioned",
      description:
        "Users only see records, analytics, and evidence they are authorized to access.",
    },
    {
      title: "Transparent",
      description:
        "Workers understand relevant tracking, correction, and review processes per policy and law.",
    },
    {
      title: "Governed",
      description:
        "Policies, audit logs, retention, redaction, and escalation controls surround AI signals.",
    },
    {
      title: "Accountable",
      description:
        "Final decisions remain with the customer and its authorized human reviewers.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#0b1515] py-16 lg:py-[74px]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Our Commitment
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Responsible AI commitment
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime uses AI to support better workforce review — not to make
            final workforce decisions.
          </p>
        </div>


        {/* Commitment List */}
        <div className="mt-16 max-w-[760px] space-y-5">

          {commitments.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
                {item.title}
              </h3>

              <p className="mt-1 text-base leading-6 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}