import StatusPill, { type Tone } from "./StatusPill";

const stages = [
  {
    step: "Stage 01",
    title: "Assess",
    ownership: "Customer owns",
    body: "Jurisdiction, representative body, and process owner. ZoikoTime supplies product facts, not a legal determination.",
  },
  {
    step: "Stage 02",
    title: "Define",
    ownership: "Customer owns",
    body: "Proposal, scope, workforce groups, use cases, and configuration assumptions.",
  },
  {
    step: "Stage 03",
    title: "Assemble",
    ownership: "Both",
    body: "Current resource pack assembled, with evidence gaps identified rather than hidden.",
  },
  {
    step: "Stage 04",
    title: "Share & discuss",
    ownership: "Both",
    body: "Share, explain, meet, receive questions, and provide evidence-led responses.",
  },
  {
    step: "Stage 05",
    title: "Record",
    ownership: "Customer owns",
    body: "Commitments, conditions, unresolved issues, and the customer-reported outcome.",
  },
  {
    step: "Stage 06",
    title: "Verify & monitor",
    ownership: "Both",
    body: "Verify the rollout gate, train, pilot, deploy, monitor, and reassess on material change.",
  },
];

const statuses: { label: string; tone: Tone }[] = [
  { label: "Not assessed", tone: "neutral" },
  { label: "Assessment in progress", tone: "green" },
  { label: "Preparation", tone: "amber" },
  { label: "Ready for customer review", tone: "blue" },
  { label: "Shared for review", tone: "blue" },
  { label: "In dialogue", tone: "blue" },
  { label: "Conditions proposed", tone: "violet" },
  { label: "Customer-recorded outcome", tone: "green" },
  { label: "Rollout gate satisfied", tone: "green" },
  { label: "Rollout blocked", tone: "red" },
  { label: "Reassessment required", tone: "amber" },
  { label: "Superseded / withdrawn", tone: "neutral" },
];

export default function ConsultationLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Consultation Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Operational Stages — Not Legal Deadlines
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            This describes how ZoikoTime supports a customer-owned process. It
            does not automate law, and rollout does not advance merely because
            materials were sent.
          </p>

        </div>

        {/* Stage Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {stages.map((stage) => (
            <div
              key={stage.step}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="text-xs font-bold leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                {stage.step}
              </span>

              <h3 className="mt-2 text-lg font-bold leading-6 text-sky-950 dark:text-white">
                {stage.title}
              </h3>

              <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                {stage.ownership}
              </p>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {stage.body}
              </p>

            </div>
          ))}

        </div>

        {/* Lifecycle Statuses */}
        <p className="mt-10 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
          Twelve lifecycle statuses
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {statuses.map((status) => (
            <StatusPill
              key={status.label}
              label={status.label}
              tone={status.tone}
            />
          ))}
        </div>

        {/* Status Boundaries */}
        <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Status boundaries
          </p>

          <p className="mt-1.5 text-sm font-normal leading-6 text-red-900 dark:text-red-200/80">
            &ldquo;Not assessed&rdquo; never means consultation is not required.
            &ldquo;Ready for customer review&rdquo; is an internal preparation
            gate, not a legal conclusion. &ldquo;Shared for review&rdquo; means
            delivery occurred — not that meaningful consultation happened.
            &ldquo;Rollout gate satisfied&rdquo; proves operational
            prerequisites, not legal approval.
          </p>

        </div>

      </div>
    </section>
  );
}
