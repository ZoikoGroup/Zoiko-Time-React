"use client";

const policies = [
  {
    title: "Standard Contractor Policy v4",
    description: "Applies globally",
    status: "Live",
    type: "live",
  },
  {
    title: "Agency Partner Addendum",
    description: "Edited by Procurement",
    status: "Draft",
    type: "draft",
  },
  {
    title: "EU Contractor Policy v2",
    description: "Effective Sep 1, 2026",
    status: "Scheduled",
    type: "scheduled",
  },
];

const policyTabs = [
  "Engagement Rules",
  "Approval Policy",
  "Export Formats",
  "Access & Roles",
];

const boundaries = [
  "No worker classification determination",
  "No payroll, payment, or tax processing",
  "No surveillance or activity monitoring",
  "No screenshots or keystroke capture",
  "No GPS or location tracking",
  "No productivity monitoring or scoring",
];

function PolicyStatus({
  status,
  type,
}: {
  status: string;
  type: string;
}) {
  const styles = {
    live: "bg-emerald-50 text-green-600 dark:bg-emerald-950/40 dark:text-emerald-300",
    draft:
      "bg-orange-100 text-yellow-700 dark:bg-orange-950/40 dark:text-orange-300",
    scheduled:
      "bg-indigo-50 text-blue-950 dark:bg-indigo-950/40 dark:text-indigo-300",
  };

  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${
        styles[type as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function PolicyControls() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8">
          {/* Heading */}
          <div className="flex w-full max-w-[620px] flex-col items-start gap-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Global Policy Controls
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Consistent rules across every
              <br className="hidden sm:block" />
              agency and region.
            </h2>
          </div>

          {/* Policy Workspace */}
          <div className="w-full rounded-3xl border border-slate-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-900 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              {/* Navigation */}
              <div className="w-full shrink-0 lg:w-52 lg:border-r lg:border-slate-200 lg:pr-4 dark:lg:border-slate-700">
                <div className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                  {policyTabs.map((tab, index) => (
                    <button
                      key={tab}
                      type="button"
                      className={`shrink-0 rounded-[10px] px-2.5 py-2 text-left text-xs leading-5 transition ${
                        index === 0
                          ? "border border-slate-200 bg-white font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          : "font-normal text-gray-500 hover:bg-white/70 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Policy List */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                {policies.map((policy) => (
                  <div
                    key={policy.title}
                    className="flex flex-col gap-3 rounded-[10px] border border-slate-200 bg-white px-3.5 py-3 dark:border-slate-700 dark:bg-slate-800 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold leading-5 text-gray-700 dark:text-slate-200">
                        {policy.title}
                      </p>

                      <p className="mt-1 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                        {policy.description}
                      </p>
                    </div>

                    <PolicyStatus
                      status={policy.status}
                      type={policy.type}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Boundaries */}
          <div className="w-full rounded-3xl bg-slate-800 px-6 py-7 dark:bg-slate-900 sm:px-9 sm:py-8">
            <h3 className="text-base font-semibold leading-6 text-white">
              What ZoikoTime does not do
            </h3>

            <p className="mt-2 max-w-[640px] text-sm font-normal leading-5 text-indigo-300">
              Being clear about this product&apos;s boundaries is part of how
              we earn trust with operations, legal, and the contractors whose
              records live here.
            </p>

            {/* Boundary List */}
            <div className="mt-5 grid grid-cols-1 gap-y-1.5 sm:grid-cols-2">
              {boundaries.map((item) => (
                <div
                  key={item}
                  className="flex min-h-5 items-center gap-2 py-0.5"
                >
                  <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full border border-teal-200" />
                  </div>

                  <span className="text-xs font-normal leading-5 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Statement */}
            <div className="mt-5 border-t border-white/20 pt-4">
              <p className="text-xs font-semibold leading-5 text-teal-200">
                ZoikoTime is Workforce Truth Infrastructure — governed
                contractor records with transparent workflows, not surveillance
                software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}