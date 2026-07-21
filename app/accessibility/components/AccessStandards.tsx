import React from "react";

const standards = [
  {
    icon: "♿",
    title: "WCAG-Aligned Design",
    description:
      "ZoikoTime aims to align product design and development with Web Content Accessibility Guidelines to support accessible workforce management experiences.",
  },
  {
    icon: "⌨",
    title: "Keyboard Navigation",
    description:
      "Core workflows should support keyboard navigation where technically supported, with visible focus states, logical tab order, and keyboard-accessible controls.",
  },
  {
    icon: "📢",
    title: "Screen Reader Support",
    description:
      "Headings, labels, form fields, buttons, alerts, and page structure should support assistive technologies including screen readers.",
  },
  {
    icon: "🎨",
    title: "Color and Contrast",
    description:
      "The interface should not rely on color alone to communicate meaning. Text, controls, indicators, and alerts should meet contrast standards.",
  },
  {
    icon: "📖",
    title: "Readable Content",
    description:
      "Pages, forms, reports, guides, alerts, and instructions should use clear language, appropriate font sizes, and comfortable line lengths.",
  },
  {
    icon: "✅",
    title: "Error Prevention and Recovery",
    description:
      "Forms and critical workflows should provide clear instructions, helpful validation, specific error messages, and easy recovery pathways.",
  },
];

export default function AccessStandards() {
  return (
    <section className="w-full bg-slate-100 px-5 py-20 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1052px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Standards and Design Approach
          </h2>

          <p className="mx-auto mt-5 max-w-[480px] text-base leading-7 text-slate-500 dark:text-white/50">
            ZoikoTime&apos;s accessibility approach is guided by recognized
            standards and practical usability principles.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard) => (
            <div
              key={standard.title}
              className="relative min-h-[208px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              {/* Icon */}
              <div className="text-2xl leading-8 text-slate-700 dark:text-white">
                {standard.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-normal text-slate-900 dark:text-white">
                {standard.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-white/50">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}