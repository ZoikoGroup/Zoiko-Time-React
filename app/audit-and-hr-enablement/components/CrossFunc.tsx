"use client";

const crossFunctionalFeatures = [
  {
    icon: "🤝",
    title: "Shared Truth",
    description:
      "One source of verified data — no siloed records, conflicting information, or parallel tracking systems across functions.",
  },
  {
    icon: "⚖️",
    title: "Consistent Decisions",
    description:
      "The same governance framework applies across every function — ensuring fair, equal, and defensible treatment at every level.",
  },
  {
    icon: "🔁",
    title: "Unified Workflows",
    description:
      "Integrated end-to-end workflows connect HR, audit, operations, and compliance into one coherent, governed operating model.",
  },
];

export default function CrossFunc() {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1040px]">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Cross-Functional
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            One System Across HR, Audit, and Operations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Unified decisions. Shared truth. One consistent operating layer
            across every function that touches workforce governance.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crossFunctionalFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl transition-all duration-300 hover:border-teal-500/40 sm:p-8"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-950 text-xl">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold leading-7 text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}