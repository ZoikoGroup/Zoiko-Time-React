import Image from "next/image";

const stages = [
  {
    stage: "Stage 01",
    title: "Establish scope",
    youSee:
      "Entities, locations, groups, owners, timeline, policies, systems, support.",
    platformDoes: "Creates a versioned deployment charter.",
  },
  {
    stage: "Stage 02",
    title: "Verify operability",
    youSee: "Current readiness and its stated limitations.",
    platformDoes:
      "Checks approved technical, contractual, legal, support, documentation, monitoring, and commercial records.",
  },
  {
    stage: "Stage 03",
    title: "Configure local context",
    youSee: "Jurisdiction, time, locale, calendar, policies, notices, retention.",
    platformDoes:
      "Applies supported profiles, inheritance, impact and conflict checks.",
  },
  {
    stage: "Stage 04",
    title: "Connect and map",
    youSee: "Identity, integrations, inputs, outputs, corrections.",
    platformDoes:
      "Enforces authorization, mapping, validation, acknowledgement, reconciliation.",
  },
  {
    stage: "Stage 05",
    title: "Test readiness",
    youSee: "Scenarios, permissions, failures, support, accessibility, rollback.",
    platformDoes: "Runs the defined test suites and records every result.",
  },
  {
    stage: "Stage 06",
    title: "Approve the wave",
    youSee: "Reviewers, evidence, gaps, cutover, rollback.",
    platformDoes: "Blocks activation until required decisions are complete.",
  },
  {
    stage: "Stage 07",
    title: "Activate",
    youSee: "Approved scope and effective time.",
    platformDoes: "Activates only authorized scope and records the event.",
  },
  {
    stage: "Stage 08",
    title: "Observe and reconcile",
    youSee: "Quality, support, incidents, acknowledgements, corrections.",
    platformDoes: "Routes accountable attention using neutral states.",
  },
  {
    stage: "Stage 09",
    title: "Stabilize, expand, suspend, or retire",
    youSee: "Post-launch review and future scope.",
    platformDoes: "Versions each change and preserves withdrawal evidence.",
  },
];

export default function DeploymentLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Governed Deployment Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nine Stages, in Order, With Activation Blocked Until Approval
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Each stage states what your organization sees and what the platform
            does. Nothing auto-advances, and no stage can be skipped by
            configuration.
          </p>

        </div>

        {/* Stage Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {stages.map((item) => (
            <div
              key={item.stage}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-xs font-extrabold leading-5 tracking-wide text-emerald-800 dark:text-emerald-400">
                {item.stage}
              </p>

              <h3 className="mt-2 text-base font-bold leading-6 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                You see
              </p>

              <p className="mt-1 text-xs font-normal leading-5 text-slate-700 dark:text-slate-300">
                {item.youSee}
              </p>

              <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                Platform does
              </p>

              <p className="mt-1 text-xs font-normal leading-5 text-slate-700 dark:text-slate-300">
                {item.platformDoes}
              </p>

            </div>
          ))}

        </div>

        {/* Human Authority Callout */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-5 py-4 dark:border-slate-800 dark:bg-slate-900">

          <Image
            src="/global-deployment/tick-mark.svg"
            alt=""
            width={20}
            height={20}
            className="mt-0.5 h-5 w-5 shrink-0"
          />

          <p className="text-base font-semibold leading-6 text-sky-950 dark:text-white">
            System readiness supports review. Authorized people approve
            consequential deployment and workforce-record decisions.
          </p>

        </div>

      </div>
    </section>
  );
}
