import React from "react";

const cookieOptions = [
  {
    title: "Cookie Preference Center:",
    description:
      "Use the ZoikoTime Cookie Preference Center, where displayed, to accept, reject, or customize non-essential cookie categories.",
  },
  {
    title: "Browser Settings:",
    description:
      "Most browsers allow users to delete cookies, block cookies, restrict third-party cookies, or receive alerts before cookies are set.",
  },
  {
    title: "Device Settings:",
    description:
      "Mobile devices may provide advertising identifier, tracking permission, and app-level privacy settings.",
  },
  {
    title: "Platform Controls:",
    description:
      "Authenticated users may have account-level privacy and preference settings depending on their role and customer configuration.",
  },
  {
    title: "Customer Administrator Controls:",
    description:
      "Enterprise customers may configure certain product, security, telemetry, retention, and integration settings under the applicable agreement.",
  },
];

export default function ManageCookies() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          8. How to Manage Cookies
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-8 h-1 w-12 rounded-full bg-teal-600" />

        {/* Options */}
        <div className="space-y-6">
          {cookieOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:flex-row md:gap-6"
            >
              <h3 className="md:w-64 flex-shrink-0 text-base font-bold leading-7 text-slate-900 dark:text-white">
                {option.title}
              </h3>

              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-base leading-7 text-slate-700 dark:text-slate-300">
          Deleting or blocking cookies may affect site functionality,
          authentication, security checks, user preferences, saved consent
          choices, and access to certain services.
        </p>
      </div>
    </section>
  );
}