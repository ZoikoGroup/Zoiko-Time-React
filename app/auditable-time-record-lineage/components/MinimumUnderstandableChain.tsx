import SectionHeading from "./SectionHeading";

const STAGES = [
  {
    n: 1,
    node: "Original source event",
    context: "Source type, source reference, captured and received time, time zone, source status",
    label: "Captured from / received from",
  },
  {
    n: 2,
    node: "Derived record",
    context: "Derived value, method and rule version, inputs, transform, created time",
    label: "Derived from",
  },
  {
    n: 3,
    node: "Historical policy context",
    context: "Policy reference where permitted, version, effective period, scope, jurisdiction context",
    label: "Evaluated against / governed by",
  },
  {
    n: 4,
    node: "Correction / later version",
    context: "Before and after fields, reason, actor and role, submitted and approved time, evidence reference",
    label: "Corrects / supersedes",
  },
  {
    n: 5,
    node: "Human approval",
    context: "Approver role, authority scope, decision, rationale where required, effective time",
    label: "Approved by / reviewed by",
  },
  {
    n: 6,
    node: "Export / handoff",
    context: "Export version, purpose, manifest reference, generated and sent time, target",
    label: "Exported as / sent to",
  },
  {
    n: 7,
    node: "Target acknowledgment",
    context: "Acknowledgment reference, returned version and status, received time",
    label: "Acknowledged by",
  },
  {
    n: 8,
    node: "Reconciliation",
    context: "Expected versus returned object and status, mismatch if any, reconciliation time and owner",
    label: "Reconciled with",
  },
];

export default function MinimumUnderstandableChain() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <SectionHeading
          title="The minimum understandable chain"
          description={
            <>
              Eight stages, each with its own visible context and its own relationship
              label. Read the relationship labels - they carry the direction, and
              direction is what makes a chain explainable rather than decorative.
            </>
          }
        />

        <div className="hidden w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="w-16 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Stage
                </th>
                <th className="w-52 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Node
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Visible context
                </th>
                <th className="w-56 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Relationship label
                </th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((s, i) => (
                <tr
                  key={s.n}
                  className={i !== STAGES.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}
                >
                  <td className="px-4 py-4 align-top text-sm font-semibold text-slate-900 dark:text-white">
                    {s.n}
                  </td>
                  <td className="px-4 py-4 align-top text-sm font-bold text-gray-700 dark:text-gray-200">
                    {s.node}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
                    {s.context}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
                    {s.label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex w-full flex-col gap-3 md:hidden">
          {STAGES.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                  {s.n}
                </span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
                  {s.node}
                </span>
              </div>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{s.context}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
