import React from "react";

const topRowTopics = [
  "What is ZoikoTime?",
  "Pricing",
  "Free trial",
  "Timesheets",
  "Screenshots",
  "Worker privacy",
];

const bottomRowTopics = [
  "Mobile app",
  "Security",
  "Responsible AI",
  "Legal hold",
];

export default function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#9DD8D1_0%,#33B8AE_45%,#08A99C_100%)] dark:bg-[linear-gradient(135deg,#0F172A_0%,#134E4A_45%,#0F766E_100%)]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_58%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[465px] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            ZoikoTime FAQs
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-[760px] text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[64px]">
          Frequently Asked Questions
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[760px] text-center text-base leading-8 text-white/80 sm:text-lg">
          Find clear answers about ZoikoTime, including workforce verification,
          time tracking, timesheets, screenshots, worker privacy, security, and
          enterprise governance.
        </p>

        {/* Quick Topics */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {topRowTopics.map((topic) => (
              <button
                key={topic}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {bottomRowTopics.map((topic) => (
              <button
                key={topic}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-white/55">
          Designed for responsible workforce visibility — not covert monitoring.
        </p>
      </div>
    </section>
  );
}