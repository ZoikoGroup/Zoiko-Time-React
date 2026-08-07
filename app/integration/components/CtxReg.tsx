"use client";

const rows = [
  {
    category: "Meeting / recap reference",
    use: "Attach a reviewed reference to a mapped workflow.",
    status: "Approved",
    color: "green",
  },
  {
    category: "Channel / space reference",
    use: "Scope and policy context for coordination.",
    status: "Approved",
    color: "green",
  },
  {
    category: "Structured decision",
    use: "Decision reference with owner and source link.",
    status: "Approved",
    color: "green",
  },
  {
    category: "Assigned action / follow-up",
    use: "Action, owner, due date, status.",
    status: "Approved",
    color: "green",
  },
  {
    category: "Workspace policy / configuration context",
    use: "Governance alignment checks.",
    status: "Review required",
    color: "blue",
  },
  {
    category: "Approved AI-generated summary or action",
    use: "Human-reviewed only, labelled, source-referenced.",
    status: "Review required",
    color: "blue",
  },
  {
    category: "Connection and audit metadata",
    use: "Health, evidence, and change history.",
    status: "Approved",
    color: "green",
  },
  {
    category: "Full message bodies, transcripts, recordings, files",
    use: "Not a default category. Requires explicit validation.",
    status: "Not approved",
    color: "gray",
  },
];

export default function CtxReg() {
  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Context Scope Registry
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            References and Structured Fields —
            <br className="hidden sm:block" />
            Not Message Bodies
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            Content minimization is the default. The registry prefers
            references, identifiers, approved structured fields, and source
            links over copying transcripts, recordings, files, or free text.
            Any content transfer requires explicit validation.
          </p>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <table className="min-w-full">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Category Family
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Permitted Use
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.category}
                  className="border-t border-slate-200 dark:border-slate-700"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                    {row.category}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                    {row.use}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold
                      ${
                        row.color === "green"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : row.color === "blue"
                          ? "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
                          : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Warning */}
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
            Prohibited Use of Any Category
          </p>

          <p className="mt-3 text-sm leading-6 text-red-700 dark:text-red-300">
            No behavior monitoring, productivity ranking, sentiment scoring,
            personality inference, misconduct accusation, hidden employee
            observation, or automatic consequential decision.
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Each category carries twenty-one required metadata fields, including
          purpose, permitted and prohibited use, sensitivity, participant
          notice, worker visibility, reviewer, correction path, retention,
          jurisdiction, owner, evidence, version, and review date. Where exact
          direction or timing is unverified, the registry displays "Subject to
          approved implementation" rather than fabricating behavior. External
          participant and guest data is excluded or separately governed.
        </p>
      </div>
    </section>
  );
}