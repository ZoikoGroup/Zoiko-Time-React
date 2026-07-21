import React from "react";

const accessibilityItems = [
  "WCAG-aligned design practices",
  "Keyboard-accessible workflows",
  "Screen reader support",
  "Accessible forms and field labels",
  "Readable reports and dashboards",
  "Accessible documentation and guides",
];

export default function AccessibilityHero() {
  return (
    <section className="w-full overflow-hidden bg-[#effcf9] text-neutral-800 transition-colors dark:bg-slate-950 dark:text-white">
      {/* Hero Content */}
      <div className="mx-auto grid min-h-[520px] max-w-[1052px] grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 md:px-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:px-0 lg:py-16">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="mb-5 inline-flex h-6 items-center rounded-full bg-teal-500/10 px-4 outline outline-1 outline-teal-500/20">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-500">
              Accessibility
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[500px] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Accessibility Is Part of
            <br />
            Workforce Trust
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-base leading-7 text-neutral-800/60 dark:text-white/60">
            ZoikoTime is designed to support accessible workforce intelligence
            for administrators, managers, workers, and enterprise teams —
            built with WCAG-aligned design, keyboard navigation, clear
            workflows, and structured documentation.
          </p>

          {/* Secondary Description */}
          <p className="mt-5 max-w-[480px] text-base leading-6 text-neutral-800/40 dark:text-white/40">
            Workforce systems must be usable by the people who depend on them.
            ZoikoTime aims to make its platform, documentation, and support
            resources as accessible, clear, and inclusive as possible.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="h-12 rounded-lg bg-teal-600 px-7 text-sm font-semibold text-white shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)] transition hover:bg-teal-700">
              Report an Accessibility Issue
            </button>

            <button className="h-12 rounded-lg border border-teal-600 px-8 text-sm font-medium text-teal-600 transition hover:bg-teal-600/10 dark:text-teal-400">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Accessibility Commitment Card */}
        <div className="w-full rounded-2xl border border-neutral-800/10 bg-neutral-800/[0.04] p-6 dark:border-white/10 dark:bg-white/[0.04]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-wide text-neutral-800/40 dark:text-white/40">
            Accessibility Commitment
          </p>

          <div className="space-y-2.5">
            {accessibilityItems.map((item) => (
              <div
                key={item}
                className="flex min-h-9 items-center gap-3 rounded-lg border border-teal-500/20 bg-teal-600/10 px-3.5"
              >
                <span className="text-sm font-bold text-teal-500">✓</span>

                <span className="text-xs text-neutral-800 dark:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Disclaimer */}
      <div className="border-t border-neutral-800/5 bg-neutral-800/[0.04] px-5 py-3.5 text-center dark:border-white/5 dark:bg-white/[0.04]">
        <p className="text-[10px] text-neutral-800/30 dark:text-white/30">
          ZoikoTime is a platform of Zoiko Tech Inc., a technology subsidiary
          of Zoiko Group Inc.
        </p>
      </div>

      {/* Dark Information Bar */}
      <div className="bg-slate-900 px-5 py-7 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-[860px] flex-wrap items-center justify-center gap-x-5 gap-y-5">
          {[
            "WCAG-aligned design",
            "Keyboard navigation",
            "Screen reader support",
            "Clear forms and interfaces",
            "Accessible documentation",
          ].map((item, index) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />

                <span className="text-xs font-semibold text-white/60">
                  {item}
                </span>
              </div>

              {index < 4 && (
                <span className="hidden h-4 w-px bg-white/10 sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
