import React from "react";

export default function DefinitionSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 2 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          2. Definitions
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Authorized User"
            </span>{" "}
            means an individual employee, contractor, administrator, worker,
            consultant, agent, or other person authorized by Customer to access
            or use the Services under Customer's account.
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Customer"
            </span>{" "}
            means the organization or person entering into the Agreement with
            Zoiko Tech Inc. or using the Services under an account,
            subscription, trial, or Order Form.
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Customer Data"
            </span>{" "}
            means data, files, records, content, configuration, policies,
            worker information, time records, activity records, screenshots
            where enabled, usage events, work classifications, documents, and
            other materials submitted to or generated through the Services by
            Customer or Authorized Users.
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Personal Data"
            </span>{" "}
            means information relating to an identified or identifiable natural
            person where such information is protected as personal information,
            personal data, or personally identifiable information under
            applicable law.
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Services"
            </span>{" "}
            means ZoikoTime and all related websites, applications, APIs,
            dashboards, software, support, updates, documentation,
            professional services, integrations, and related offerings provided
            by Zoiko Tech Inc.
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
            <span className="font-bold text-slate-900 dark:text-white">
              "Worker"
            </span>{" "}
            means any employee, contractor, contingent worker, freelancer,
            agency worker, consultant, or other person whose work, time,
            activity, productivity, status, or related data may be processed
            through ZoikoTime.
          </p>
        </div>
      </section>
    </div>
  );
}