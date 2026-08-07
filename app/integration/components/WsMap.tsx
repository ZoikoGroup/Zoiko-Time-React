"use client";

import Image from "next/image";

const mappingActions = [
  "Propose connection",
  "Select ZoikoTime destination",
  "Define purpose and scope",
  "Choose governance profile",
  "Assign reviewers, test, submit for approval",
];

const impactPanel = [
  "Participants potentially affected",
  "Workflows using the mapping",
  "Context categories and policies",
  "Retention, notices, dependencies",
  "Required approvers",
];

export default function WsMap() {
  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Workspace Mapping
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Administrators Choose Which
            <br className="hidden sm:block" />
            Workspaces May Connect
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            Selection criteria are explicit: business purpose, approved owner,
            eligible workspace type, sensitivity classification, external
            participants, policy group, jurisdiction, retention, and
            source-data readiness.
          </p>

          {/* Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* Mapping Action */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Mapping Action
              </h3>

              <ul className="space-y-3">
                {mappingActions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Panel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Impact Panel
              </h3>

              <ul className="space-y-3">
                {impactPanel.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sensitive Workspace */}
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
            <p className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
              Sensitive Workspace Treatment
            </p>

            <p className="mt-3 text-sm leading-6 text-red-700 dark:text-red-300">
              Legal, executive, HR, security, medical, confidential, regulated,
              or other protected spaces are excluded or separately controlled
              according to approved policy. Automatic categories are never
              published without validation.
            </p>
          </div>

          {/* Notice */}
          <div className="mt-6 rounded-xl border-l-4 border-sky-600 border border-slate-200 bg-white p-5 dark:border-sky-500 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              No Silent Bulk Enablement
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Bulk proposal is available only when every workspace displays its
              scope, differences, conflicts, approvals, and partial-failure
              handling.
            </p>
          </div>
        </div>

        
        {/* Right Image */}
<div className="flex justify-center lg:justify-end">
  <Image
    src="/integration/ws-map.png"
    alt="Workspace Mapping"
    width={534}
    height={629}
    className="h-auto w-full max-w-md rounded-2xl object-cover lg:max-w-lg"
    priority
  />
</div>
          </div>
        
    </section>
  );
}