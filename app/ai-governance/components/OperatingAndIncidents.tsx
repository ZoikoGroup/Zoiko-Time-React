import GovernanceStatusPill, {
  type GovernanceTone,
} from "./GovernanceStatusPill";
import GovernancePracticeCard, {
  type GovernancePracticeCardProps,
} from "./GovernancePracticeCard";

const cards: GovernancePracticeCardProps[] = [
  {
    title: "Runtime monitoring & operating limits",
    status: { label: "Current", tone: "green" },
    objective: "detect when a governed use stops behaving as evaluated.",
    rows: [
      {
        label: "Monitored",
        value:
          "Source availability and freshness, output behavior, override and correction patterns, incident signals, provider and tool health",
      },
      {
        label: "Override patterns matter",
        value:
          "A sharp rise in reviewers rejecting an output is a monitoring signal, not a reviewer problem",
      },
      {
        label: "Operating limits",
        value:
          "Scope, volume, and context limits are enforced rather than advisory",
      },
    ],
    limitation:
      "monitoring coverage is not measured to a published standard, and we make no completeness claim. Where a signal is ambiguous, the capability moves to Under Review rather than continuing silently.",
  },
  {
    title: "Incidents, correction & suspension",
    status: { label: "Current", tone: "green" },
    objective:
      "stop first, explain second — emergency suspension is intentionally easy.",
    rows: [
      {
        label: "Incident categories",
        value:
          "Groundedness failure, prohibited-use proximity, privacy or security event, fairness concern, provider failure, accessibility barrier",
      },
      {
        label: "Actions",
        value: "Suspend, narrow scope, roll back, correct, replace, or retire",
      },
      {
        label: "Recorded",
        value:
          "Trigger, affected scope, mitigation, customer and worker communication, and retrospective review",
      },
    ],
    limitation:
      "exploitable incident detail is never published. Unsafe or unsupported use-case claims may be removed from markup, search, and structured data immediately, followed by an attributable correction record.",
  },
];

const triggers = [
  "Model, provider, or tool change",
  "Source, permission, or retention change",
  "Purpose, scope, or authority-class change",
  "Region or data-handling change",
  "Drift-like behavior or incident",
  "Legal, contractual, or policy change",
  "Review-date trigger",
];

const gateDecisions: { label: string; tone: GovernanceTone }[] = [
  { label: "Approved", tone: "green" },
  { label: "Conditionally approved", tone: "violet" },
  { label: "Evidence-gated", tone: "neutral" },
  { label: "Rejected", tone: "red" },
  { label: "Suspended", tone: "red" },
  { label: "Retired", tone: "neutral" },
];

export default function OperatingAndIncidents() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Operating Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <GovernancePracticeCard key={card.title} {...card} />
          ))}
        </div>

        {/* Change & Gate Decisions */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Material Change */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Material Change &amp; Re-evaluation
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              A provider change is a governance event
            </h3>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Triggers requiring re-evaluation
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">
                {triggers.map((trigger) => (
                  <li key={trigger} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {trigger}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Gate Decisions */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Six Gate Decisions
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Each with a required record
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {gateDecisions.map((decision) => (
                <GovernanceStatusPill
                  key={decision.label}
                  label={decision.label}
                  tone={decision.tone}
                />
              ))}
            </div>

            <p className="mt-5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

              <span className="font-bold text-sky-950 dark:text-white">
                Conditional approval carries an automatic suspension trigger.
              </span>{" "}
              If the condition lapses or its expiry passes without verification,
              the capability suspends itself rather than quietly continuing. That
              is the difference between a condition and a hope.

            </p>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Retirement records the reason, any replacement, the effective date,
              data and artifact handling, and preserved public history.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
