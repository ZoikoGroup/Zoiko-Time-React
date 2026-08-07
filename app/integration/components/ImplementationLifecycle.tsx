"use client";

const phases = [
  {
    phase: "Phase 01",
    title: "Discovery",
    description:
      "Purpose, products, workspaces, organization structure, participants, jurisdictions, context needs, risks, support, success criteria.",
  },
  {
    phase: "Phase 02",
    title: "Architecture & Governance",
    description:
      "Mapping, categories, roles, privacy, policy, human review, notices, retention, security, data flow, evidence, support.",
  },
  {
    phase: "Phase 03",
    title: "Readiness & Authority",
    description:
      "Contracts, product versions, ownership, administrative roles, approvals, documentation, environments, support model.",
  },
  {
    phase: "Phase 04",
    title: "Configuration",
    description:
      "Mappings, governance profiles, service authorization, review queues, exceptions, evidence, reports, notices, support routes.",
  },
  {
    phase: "Phase 05",
    title: "Validation",
    description:
      "Functional, permission, privacy, security, accessibility, jurisdiction, data, error, reconciliation, rollback, support, acceptance testing.",
  },
  {
    phase: "Phase 06",
    title: "Pilot",
    description:
      "Limited approved workspaces, units, and categories. Named participants, enhanced support, feedback routes and no unapproved expansion.",
  },
  {
    phase: "Phase 07",
    title: "Launch",
    description:
      "Approved activation window, notices, training, support, monitoring, rollback, executive and operational communication.",
  },
  {
    phase: "Phase 08",
    title: "Stabilization",
    description:
      "Health, exceptions, user questions, corrections, audit, support, mapping and policy changes, release issues, adoption.",
  },
  {
    phase: "Phase 09",
    title: "Expansion or Hold",
    description:
      "An evidence-led decision to expand approved scope or to pause or retire. Both are valid outcomes.",
  },
];

export default function ImplementationLifecycle() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Implementation, Pilot, Launch &amp; Expansion
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Nine Phases, Ending in
            <br />
            Expansion or Hold
          </h2>

          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Timeline, services, scope, outcomes and availability vary
            by contract, readiness, complexity, configuration,
            jurisdiction and product status.
          </p>

        </div>

        {/* Timeline */}
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">

          {phases.map((item) => (
            <div
              key={item.phase}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Green Side Bar */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-emerald-500" />

              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {item.phase}
              </p>

              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Continue in Part 2 */}
                {/* Existing Customer Access */}
        <div className="w-full pt-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Existing Customer Access, Support, Pause &amp; Retirement
          </h2>

        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">

          {/* Authenticated Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Authenticated Actions
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Open Integration Settings, Continue Setup
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  View Mappings, Review Governance, Run Tests
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  View Health, Resolve Exceptions, View Audit
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pause, Resume, Start Retirement
                </p>
              </div>

            </div>

            <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
              Each based on effective access.
            </p>

          </div>

          {/* Pause Preview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Pause Preview
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              Affected mappings, categories and workflows; queued
              and in-flight items; notices; reporting; support;
              restart prerequisites; approval; effective time.
            </p>

          </div>

          {/* Retirement Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Retirement Checklist
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Business approval, dependency inventory
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Stop new context, process or quarantine remaining
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Reconcile, export evidence, revoke credentials
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-[5px] w-[5px] rounded-sm bg-emerald-500"></span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Archive or delete, update notices, verify downstream,
                  final audit
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Continue in Part 3 */}
                {/* Bottom Notice */}
        <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-900/50">

          <p className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
            Help, Documentation, Status, Accessibility, Security
            Reporting, and customer support never require marketing
            consent or a demo submission.
          </p>

        </div>

      </div>
    </section>
  );
}