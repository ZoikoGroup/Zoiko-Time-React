import React from "react";

const accessibilityFeatures = [
  {
    title: "Plain-language messages",
    description:
      "Clear text labels and plain-language messages throughout.",
  },
  {
    title: "Screen-reader friendly",
    description:
      "Screen-reader-friendly labels across the experience.",
  },
  {
    title: "Explained blocked actions",
    description:
      "A worker-facing explanation for every blocked or unavailable action.",
  },
  {
    title: "High-contrast, touch-friendly",
    description:
      "High-contrast text and touch targets sized for mobile use.",
  },
];

export default function AccessibilitySection() {
  return (
    <section className="w-full bg-gray-50 px-5 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Accessibility
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Accessibility and mobile usability
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Designed to be clear and usable for everyone.
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 max-w-[700px] space-y-5 text-center">
          {accessibilityFeatures.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-slate-200 sm:text-base">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-slate-400 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}