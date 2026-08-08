import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Evidence visibility & limitations",
    status: { label: "Current", tone: "green" },
    objective: (
      <>
        show what supports a case <em>and</em> what remains uncertain, so a
        reviewer knows when not to decide.
      </>
    ),
    rows: [
      {
        label: "Shown",
        value:
          "Source records, collection method, policy and rule version, jurisdiction and timezone context, data quality, related evidence",
      },
      {
        label: "Also shown",
        value: "Missing evidence, conflicting sources, and stated limitations",
      },
      {
        label: "Sufficiency",
        value: (
          <>
            A case can be marked <em>insufficient evidence</em> — that is a
            legitimate outcome, not a failure to decide
          </>
        ),
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> evidence is shown within
        role, policy, and privacy boundaries — confidential third-party evidence
        is not exposed. Evidence supports review; it does not prove legal
        sufficiency.
      </>
    ),
  },
  {
    title: "Human decision & reason",
    status: { label: "Current", tone: "green" },
    objective:
      "require an accountable outcome rather than a mechanical confirmation.",
    rows: [
      {
        label: "Recorded",
        value:
          "Reviewer identity and role, authority source and scope, selected outcome, effective timing",
      },
      {
        label: "Reason",
        value:
          "Structured around evidence, policy, and stated limitations — with alternatives considered where required",
      },
      {
        label: "Attached",
        value:
          "Conditions, follow-up, downstream handoff, confirmation, and an attributable audit event",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> no system-authored final
        reason without human adoption and verification — a generated draft is a
        draft until a person owns it. And a well-formed reason does not prove
        legal sufficiency.
      </>
    ),
  },
];

export default function EvidenceAndReason() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
