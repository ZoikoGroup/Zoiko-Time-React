import SectionHeading from "./SectionHeading";

const CONDITIONS = [
  {
    condition: "Missing source",
    shown: '"Source unavailable," "not retained," or "not provided" as appropriate - origin is never invented.',
    next: "Review source issue or route the integration owner.",
  },
  {
    condition: "Conflicting source authority",
    shown: "Both authorities and the conflict scope. No last-write-wins explanation.",
    next: "Review mapping and authority configuration.",
    strong: true,
  },
  {
    condition: "Stale source",
    shown: "Last successful update and the affected scope.",
    next: "Refresh if supported, or review source health.",
  },
  {
    condition: "Policy unavailable",
    shown: "Policy reference or version unavailable; record may remain review-limited.",
    next: "Route the policy owner. Current policy is not inferred.",
  },
  {
    condition: "Migration-limited",
    shown: "Migration batch, coverage, transform version, and known missing history.",
    next: "Review migration evidence.",
  },
  {
    condition: "Circular mapping",
    shown: "Graph expansion is blocked and a configuration error is shown.",
    next: "Route the integration administrator.",
  },
  {
    condition: "Duplicate source",
    shown: "A possible-duplicate relationship, with no worker-fault language.",
    next: "Reconcile sources; preserve original objects.",
    strong: true,
  },
  {
    condition: "Stale target",
    shown: "Last acknowledgment or reconciliation, and unknown current state.",
    next: "Recheck the target or its owner.",
  },
  {
    condition: "Downstream mismatch",
    shown: "Expected versus observed object, version, and status.",
    next: "Open the reconciliation workflow.",
  },
  {
    condition: "Permission-limited",
    shown: "Only an allowed placeholder, where policy permits one.",
    next: "Request access through a governed path if available.",
  },
  {
    condition: "Graph too large",
    shown: "A cluster or filter prompt, plus list mode.",
    next: "Narrow by time, type, relationship, or depth.",
  },
  {
    condition: "Service error",
    shown: "The static explanation is preserved. No silent stale-as-current rendering.",
    next: "Retry, or use the status and help routes.",
    strong: true,
  },
];

export default function IncompleteLineage() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-9">
        <SectionHeading
          title="When lineage is incomplete"
          description={
            <>
              Twelve honest conditions. The rule underneath all of them:{" "}
              <span className="font-bold">never synthesize a missing link</span>, and
              never render stale data as current.
            </>
          }
        />

        <div className="hidden w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="w-48 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Condition
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  What is shown
                </th>
                <th className="w-72 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Next action
                </th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((c, i) => (
                <tr
                  key={c.condition}
                  className={i !== CONDITIONS.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}
                >
                  <td className="px-4 py-4 align-top text-sm font-semibold text-slate-900 dark:text-white">
                    {c.condition}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
                    {c.strong ? <span className="font-bold">{c.shown}</span> : c.shown}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
                    {c.next}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex w-full flex-col gap-3 md:hidden">
          {CONDITIONS.map((c) => (
            <div
              key={c.condition}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                {c.condition}
              </div>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-400 dark:text-gray-500">Shown: </span>
                {c.shown}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-400 dark:text-gray-500">Next: </span>
                {c.next}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
