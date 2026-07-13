import React from "react";

const retentionPolicies = [
  {
    icon: "📌",
    title: "Record Scope",
    description:
      "Define which record categories are covered by each retention rule.",
  },
  {
    icon: "📅",
    title: "Retention Duration",
    description:
      "Configure periods based on capability, customer policy, plan, agreement, and applicable requirements.",
  },
  {
    icon: "👤",
    title: "Role-Based Administration",
    description:
      "Control which users can create, modify, approve, or deactivate retention policies.",
  },
  {
    icon: "🌍",
    title: "Jurisdictional Variation",
    description:
      "Support different retention rules by region, department, or worker type where configured.",
  },
  {
    icon: "🔄",
    title: "Change History",
    description:
      "Maintain logs of retention policy changes, who changed the rule, when, and what changed.",
  },
  {
    icon: "🗑",
    title: "Expiry Behavior",
    description:
      "Define what happens when records reach the end of their retention period.",
  },
];

const legalHoldSteps = [
  {
    number: "1",
    title: "Identify the Matter",
    description:
      "Authorized users define the matter, business reason, owner, scope, and approval requirements.",
  },
  {
    number: "2",
    title: "Define the Scope",
    description:
      "The hold may be scoped by worker, team, department, project, date range, or record type.",
  },
  {
    number: "3",
    title: "Apply the Hold",
    description:
      "Relevant records are preserved from ordinary expiry or deletion workflows while active.",
  },
  {
    number: "4",
    title: "Restrict Access",
    description:
      "Access to held records is controlled by role, permission, matter assignment, and policy.",
  },
  {
    number: "5",
    title: "Review and Export",
    description:
      "Authorized reviewers may locate, review, package, and export relevant records where permitted.",
  },
  {
    number: "6",
    title: "Release the Hold",
    description:
      "When the matter ends, authorized users may release the hold according to customer policy.",
  },
  {
    number: "7",
    title: "Resume Lifecycle",
    description:
      "After release, records return to applicable retention, expiry, or archival workflows.",
  },
];

export default function RetentionPolicies() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Configurable Retention Policies
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-500 dark:text-gray-300">
              ZoikoTime supports retention controls that help organizations
              align workforce records with internal policy, operational needs,
              contractual commitments, and applicable legal requirements.
            </p>

            <div className="mt-8 space-y-4">
              {retentionPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-xl">{policy.icon}</div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {policy.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-gray-300">
                        {policy.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="inline-flex items-center pt-3 text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Contact Sales to discuss enterprise retention requirements
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Legal Hold Preservation
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-500 dark:text-gray-300">
              When a legal hold is applied, relevant records can be preserved
              from ordinary deletion or retention expiry while the hold remains
              active.
            </p>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              {legalHoldSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 ${
                    index !== legalHoldSteps.length - 1
                      ? "border-b border-slate-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-teal-200 bg-emerald-50 dark:border-teal-700 dark:bg-teal-900/20">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}