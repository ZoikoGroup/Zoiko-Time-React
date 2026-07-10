import React from "react";

export default function RolloutPhases() {
  const phases = [
    "Phase 1 — Scope and Alignment",
    "Phase 2 — Policy and Workflow Mapping",
    "Phase 3 — Platform Configuration",
    "Phase 4 — Training and Communication",
    "Phase 5 — Pilot and Validation",
    "Phase 6 — Launch and Optimize",
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          Phases
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
          The six rollout phases
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-gray-500 dark:text-gray-400">
          Each phase has a clear focus and required outputs. Expand a phase to see
          what it produces.
        </p>


        {/* Phase List */}
        <div className="mt-12 space-y-5 text-left max-w-4xl mx-auto">

          {phases.map((phase, index) => (
            <div
              key={index}
              className="
              flex items-center gap-4
              text-gray-700
              dark:text-gray-300
              text-base
              "
            >

              {/* Arrow */}
              <span className="text-teal-600 text-lg">
                ›
              </span>


              {/* Text */}
              <p>
                {phase}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}