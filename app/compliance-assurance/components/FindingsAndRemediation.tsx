import AssuranceStatusPill, {
  type AssuranceTone,
} from "./AssuranceStatusPill";
import AssurancePracticeCard, {
  type AssurancePracticeCardProps,
} from "./AssurancePracticeCard";

const cards: AssurancePracticeCardProps[] = [
  {
    title: "Finding record",
    status: { label: "Current", tone: "green" },
    objective:
      "make material deficiencies visible at an appropriate level of abstraction.",
    rows: [
      {
        label: "Recorded",
        value:
          "Finding ID, source assessment, safe title, severity category, affected scope, detected date, owner, status, due date",
      },
      {
        label: "Also recorded",
        value:
          "Corrective action, re-test result, and accepted residual risk",
      },
      {
        label: "Exceptions",
        value:
          "Rationale, approver, scope, start and end dates, and compensating controls",
      },
      {
        label: "Explicit states",
        value: "Overdue and unknown are shown as such, not smoothed over",
      },
    ],
    limitation: (
      <>
        public summaries use safe abstraction; controlled detail stays protected.
        Finding severity is <span className="font-bold">never</span> used to rank
        customers or workers — it describes a control condition, not a person or
        an account.
      </>
    ),
  },
  {
    title: "Corrective action & verification",
    status: { label: "Current", tone: "green" },
    objective:
      "ensure a closed finding means a restored control, not a completed ticket.",
    rows: [
      {
        label: "Plan carries",
        value:
          "Owner, milestones, evidence, due date, dependencies, status, and verification criteria",
      },
      {
        label: "Closure requires",
        value:
          "Independent or eligible verification appropriate to the risk",
      },
      {
        label: "Reopening",
        value: "Preserves the full prior history rather than replacing it",
      },
    ],
    limitation:
      "task completion alone is not evidence of control restoration — that distinction is the entire point of the verification step. No guaranteed completion date is published unless it has been approved.",
  },
];

const remediationStates: { label: string; tone: AssuranceTone }[] = [
  { label: "Planned", tone: "blue" },
  { label: "In progress", tone: "blue" },
  { label: "Blocked", tone: "red" },
  { label: "Ready for verification", tone: "blue" },
  { label: "Verified", tone: "green" },
  { label: "Closed", tone: "green" },
  { label: "Reopened", tone: "amber" },
  { label: "Accepted residual risk", tone: "blue" },
  { label: "Superseded", tone: "neutral" },
];

export default function FindingsAndRemediation() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Findings, Exceptions &amp; Remediation
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Findings Are Not Hidden by Default
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A finding is omitted only where disclosure would itself create risk —
            never because it is inconvenient. Omission that would materially
            mislead a public assurance claim is prohibited.
          </p>

        </div>

        {/* Finding Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <AssurancePracticeCard key={card.title} {...card} />
          ))}
        </div>

        {/* Remediation States */}
        <div className="mt-8">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Nine remediation states
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {remediationStates.map((state) => (
              <AssuranceStatusPill
                key={state.label}
                label={state.label}
                tone={state.tone}
              />
            ))}
          </div>

          <p className="mt-5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

            <span className="font-bold text-sky-950 dark:text-white">
              Accepted residual risk is not the same as passing.
            </span>{" "}
            It records that an eligible authority decided to live with a known
            gap, with compensating controls and an end date — which is a
            legitimate decision, and a materially different one from having no
            gap.

          </p>

        </div>

      </div>
    </section>
  );
}
