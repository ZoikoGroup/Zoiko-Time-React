import SectionHeading from "./SectionHeading";

const RELATIONSHIPS = [
  {
    label: "Captured from",
    means: "This record originates in a named source event.",
    limit: "Source existence does not prove accuracy, worker intent, or completeness.",
  },
  {
    label: "Derived from",
    means: "A rule version produced this value from named inputs.",
    limit: "Deterministic derivation is not infallible, and it is not AI.",
  },
  {
    label: "Evaluated against",
    means: "A policy version, effective at the time, governed the derivation.",
    limit: "Policy configuration is not legal compliance, and current policy never applies backwards.",
  },
  {
    label: "Corrects / supersedes",
    means: "A later version replaces an earlier one as current.",
    limit: "A correction does not mean misconduct, and the prior state has not vanished.",
  },
  {
    label: "Approved by",
    means: "An authorized person decided within a stated authority scope.",
    limit: "Approval does not guarantee payroll, billing, legal, or downstream completion.",
  },
  {
    label: "Exported as / sent to",
    means: "A named version was generated and transmitted for a purpose.",
    limit: "Sent does not mean received, accepted, or reconciled.",
    strong: true,
  },
  {
    label: "Acknowledged by",
    means: "A target returned a reference and a status.",
    limit: "Acknowledgment does not mean semantic correctness or completed processing.",
  },
  {
    label: "Reconciled with",
    means: "Expected version and status were compared with what the target holds.",
    limit: "Reconciliation does not prove legal or financial correctness.",
  },
];

export default function RelationshipMeaning() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <SectionHeading
          title="What each relationship means - and does not"
          description={
            <>
              Direction is part of the meaning. Sent to and acknowledged by point
              opposite ways and prove different things.
            </>
          }
        />

        <div className="flex w-full flex-col gap-2">
          {RELATIONSHIPS.map((r) => (
            <div
              key={r.label}
              className="flex flex-col overflow-hidden rounded-[10px] border border-gray-200 dark:border-gray-700 sm:flex-row"
            >
              <div className="w-full shrink-0 bg-gray-50 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:bg-gray-800 dark:text-white sm:w-44">
                {r.label}
              </div>
              <div className="w-full border-t border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300 sm:w-1/2 sm:border-l sm:border-t-0">
                {r.means}
              </div>
              <div
                className={`w-full border-t border-gray-200 bg-amber-50 px-3.5 py-2.5 text-xs text-amber-800 dark:border-gray-700 dark:bg-amber-900/20 dark:text-amber-300 sm:border-l sm:border-t-0 ${
                  r.strong ? "font-bold" : ""
                }`}
              >
                {r.limit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
