import React from "react";

const cards = [
  {
    icon: "⚙️",
    title: "Configurable Sensitivity",
    description:
      "Verification intensity is configurable by role, risk profile, and jurisdiction—applying only the level of assurance required for each context, not a one-size-fits-all surveillance model.",
  },
  {
    icon: "🔍",
    title: "Full User Transparency",
    description:
      "Every individual can understand what signals are collected, why they are collected, and how they influence their session confidence—visible through the ZoikoTime Transparency Center.",
  },
  {
    icon: "🛡️",
    title: "Signal-Based, Not Surveillance-Based",
    description:
      "ZoikoTime captures the minimum signals required to verify a session—not screenshots, keystrokes, or continuous screen monitoring. Assurance without invasion is the design principle.",
  },
];

export default function PrivacyCards() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Verification Without Surveillance
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            We Verify Signals — Not Invade Privacy
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
            Identity assurance and privacy protection are not in conflict in
            ZoikoTime—both are foundational design requirements, not competing
            priorities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-teal-200 dark:border-teal-700 text-2xl">
                {card.icon}
              </div>

              <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}