// app/about-us/components/capabilities.tsx

import Image from "next/image";

const capabilities = [
  {
    number: "Capability 01",
    image: "/about-us/shield.png",
    title: "Workforce Assurance",
    description:
      "ZoikoTime provides policy-driven assurance signals that validate work sessions, detect anomalies, and manage exceptions — supported by structured human oversight at every consequential decision point.",
    points: [
      "Reduce payroll leakage and policy drift across all workforce types",
      "Strengthen defensibility in audits, investigations, and disputes",
      "Increase confidence in recorded work and time data at scale",
    ],
  },
  {
    number: "Capability 02",
    image: "/about-us/scale.png",
    title: "Performance Intelligence",
    description:
      "ZoikoTime transforms workforce data into explainable, decision-grade insights that connect effort, tools, and outcomes — enabling organisations to manage performance fairly, accurately, and at scale.",
    points: [
      "Understand workload distribution, constraints, and bottlenecks",
      "Improve delivery planning, capacity management, and resource allocation",
      "Conduct fair, evidence-based performance discussions without subjectivity",
    ],
  },
  {
    number: "Capability 03",
    image: "/about-us/audit.png",
    title: "Audit-Ready Documentation",
    description:
      "ZoikoTime produces structured, tamper-evident records aligned with HR, legal, and compliance workflows — enabling organisations to respond rapidly to audits, investigations, and regulatory inspections.",
    points: [
      "Respond rapidly to audits, investigations, and formal disputes",
      "Support wage-and-hour and policy compliance reviews across jurisdictions",
      "Maintain consistent documentation standards globally, without manual effort",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:min-h-[1144px] lg:px-12 lg:py-[102px]">
      <div className="mx-auto max-w-[1040px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[910px] text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            What We Do
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Three Enterprise-Critical Capabilities
            <br className="hidden sm:block" />
            One Governed Platform
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-base font-normal leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            ZoikoTime unifies workforce assurance, performance intelligence,
            and audit-ready documentation into a single, governed system of
            record — engineered for the complexity of modern enterprise
            operations.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-[68px] lg:grid-cols-3 lg:gap-[34px]">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="group relative flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Top Gradient Border */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              {/* Capability Number */}
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-600 dark:text-teal-400">
                {capability.number}
              </p>

              {/* Icon */}
              <div className="mt-7 flex h-12 items-center">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 min-h-[72px] text-xl font-bold leading-9 text-slate-900 dark:text-white">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-base leading-6 text-slate-500 dark:text-slate-400">
                {capability.description}
              </p>

              {/* Points */}
              <div className="mt-8 space-y-6">
                {capability.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" />

                    <p className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}