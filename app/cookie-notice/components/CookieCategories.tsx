import React from "react";

const categories = [
  {
    title: "Strictly Necessary",
    description:
      "Required for ZoikoTime digital services to work. Used to provide core functions including account access, session management, security, fraud prevention, network routing, and consent recording. These cookies cannot be disabled through the Cookie Preference Center because disabling them would prevent the service from operating properly.",
  },
  {
    title: "Functional / Preference",
    description:
      "Used to remember user preferences, language settings, display options, and similar choices. Disabling these may reduce platform functionality but will not prevent core use.",
  },
  {
    title: "Analytics & Performance",
    description:
      "Used to understand how visitors interact with ZoikoTime websites and applications — page views, session duration, navigation patterns, and error tracking. These are used to improve the platform and are only set after applicable consent where required.",
  },
  {
    title: "Security & Fraud Prevention",
    description:
      "Used to protect accounts, detect unauthorized access, prevent abuse, preserve evidence of security events, support incident response, and maintain service integrity.",
  },
  {
    title: "Marketing & Retargeting (Public Website Only)",
    description:
      "May be used on public marketing websites only where legally permitted and after consent. These technologies are not set inside authenticated worker-facing application environments.",
  },
];

export default function CookieCategories() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          5. Categories of Cookies We Use
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-8 h-1 w-12 rounded-full bg-teal-600" />

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}