"use client";

const governanceFeatures = [
  {
    icon: "🔀",
    title: "Conditional Logic",
    description:
      "Workflows adapt dynamically based on data, role, jurisdiction, and outcome — ensuring the right path is taken every time without manual routing decisions.",
  },
  {
    icon: "✅",
    title: "Multi-Level Approvals",
    description:
      "Approval chains are configured by role, risk level, and decision type — ensuring the right authorities are always involved at the right stage of every process.",
  },
  {
    icon: "🚨",
    title: "Escalation Paths",
    description:
      "Time-sensitive cases and unresolved actions are automatically escalated through predefined paths — no issues fall through the cracks due to inaction or oversight.",
  },
];

export default function WorkflowGov() {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Workflow Governance
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Workflows That Enforce Policy and Accountability
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            Policy isn&apos;t just documented — it&apos;s embedded into every
            workflow step, ensuring compliance and accountability without
            relying on individual discretion.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {governanceFeatures.map((feature) => (
            <article
              key={feature.title}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl transition-all duration-300 hover:border-teal-500/40 sm:p-8"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-950 text-xl">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-7 text-lg font-bold leading-7 text-white">
                {feature.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            </article>
          ))}
        </div>

        {/* Governance Statement */}
        <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-950/40 px-6 py-8 text-center sm:px-10">
          <p className="text-base font-semibold leading-7 text-slate-200 sm:text-lg">
            This is{" "}
            <span className="font-extrabold text-indigo-400">
              governance embedded in workflows
            </span>{" "}
            — not governance bolted on after the fact.
          </p>
        </div>
      </div>
    </section>
  );
}