import React from "react";

const platformAreas = [
  {
    icon: "🌐",
    title: "Marketing Website",
    description:
      "Public pages use semantic structure, readable layouts, descriptive links, and accessible navigation for all visitors.",
  },
  {
    icon: "⚙",
    title: "Administrator Dashboard",
    description:
      "Admin workflows support structured settings, clear forms, accessible controls, keyboard navigation, and visible focus states.",
  },
  {
    icon: "👤",
    title: "Worker Experience",
    description:
      "Workers can review essential records, understand activity-related information, and submit timesheets through accessible workflows.",
  },
  {
    icon: "📊",
    title: "Reports and Analytics",
    description:
      "Reports use accessible tables, labels, summaries, filters, legends, and export options where technically supported.",
  },
  {
    icon: "📝",
    title: "Forms and Configuration",
    description:
      "Setup flows, policy configuration, and user management support accessible form labels, validation, and error handling.",
  },
  {
    icon: "📚",
    title: "Help Center and Documentation",
    description:
      "Guides and support content use clear headings, searchable structure, keyboard-accessible accordions, and descriptive links.",
  },
  {
    icon: "📱",
    title: "Mobile App",
    description:
      "The ZoikoTime mobile experience supports accessible navigation, readable views, clear interactions, and platform accessibility settings where supported.",
  },
  {
    icon: "🔔",
    title: "Notifications and Alerts",
    description:
      "Alerts are understandable, non-color-dependent, and designed to support screen reader and keyboard interaction.",
  },
];

export default function AccessPlatform() {
  return (
    <section className="w-full bg-white px-5 py-20 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-5 bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Accessibility Across ZoikoTime
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Accessible Experience Across the Full Platform
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-base leading-7 text-slate-500 dark:text-white/50">
            ZoikoTime&apos;s accessibility approach applies across the website,
            web application, mobile experience, documentation, forms, and
            support content.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platformAreas.map((area) => (
            <div
              key={area.title}
              className="min-h-[224px] rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="text-2xl leading-8 text-slate-700 dark:text-white">
                {area.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-normal leading-6 text-slate-900 dark:text-white">
                {area.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-white/50">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}