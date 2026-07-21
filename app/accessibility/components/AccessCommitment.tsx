import React from "react";

const commitmentCards = [
  {
    icon: "👥",
    title: (
      <>
        Built for Different Workforce
        <br />
        Roles
      </>
    ),
    description: (
      <>
        ZoikoTime considers the needs
        <br />
        of administrators, workers,
        <br />
        managers, HR, legal, and finance
        <br />
        users across all product surfaces.
      </>
    ),
  },
  {
    icon: "⌨",
    title: (
      <>
        Designed for Clear
        <br />
        Navigation
      </>
    ),
    description: (
      <>
        Interfaces should be structured,
        <br />
        predictable, and easy to move
        <br />
        through with keyboard
        <br />
        navigation, visible focus states,
        <br />
        and logical tab order.
      </>
    ),
  },
  {
    icon: "📐",
    title: (
      <>
        Guided by Recognized
        <br />
        Standards
      </>
    ),
    description: (
      <>
        ZoikoTime aims to align with
        <br />
        WCAG-based accessibility
        <br />
        principles including perceivable,
        <br />
        operable, understandable, and
        <br />
        robust digital experiences.
      </>
    ),
  },
  {
    icon: "🔄",
    title: (
      <>
        Improved Through
        <br />
        Feedback
      </>
    ),
    description: (
      <>
        Accessibility issues are reviewed,
        <br />
        prioritized, and addressed
        <br />
        through a structured issue
        <br />
        reporting process open to all
        <br />
        users and enterprise customers.
      </>
    ),
  },
];

export default function AccessCommitment() {
  return (
    <section className="w-full overflow-hidden bg-emerald-50 px-5 py-20 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1052px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[1.5px] w-5 bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Our Commitment
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Our Accessibility Commitment
          </h2>

          <p className="mt-5 max-w-[555px] text-base leading-7 text-slate-500 dark:text-white/50">
            ZoikoTime treats accessibility as part of responsible workforce
            technology. The platform is designed to be clear, navigable,
            readable, and usable across roles and contexts.
          </p>
        </div>

        {/* Commitment Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitmentCards.map((card) => (
            <div
              key={card.icon}
              className="min-h-[240px] rounded-2xl border border-slate-200 bg-white p-[23px] dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="text-2xl leading-8 text-slate-700 dark:text-white">
                {card.icon}
              </div>

              <h3 className="mt-4 text-base font-normal leading-6 text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-white/50">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accessibility Notice */}
        <div className="mx-auto mt-10 max-w-[700px] rounded-r-lg border-l-[3px] border-teal-600 bg-white px-5 py-4 dark:bg-white/[0.04]">
          <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-400">
            ZoikoTime should not claim full accessibility certification unless
            a formal audit has been completed. Use &quot;designed to support
            accessible use&quot; rather than claiming complete compliance.
          </p>
        </div>
      </div>
    </section>
  );
}