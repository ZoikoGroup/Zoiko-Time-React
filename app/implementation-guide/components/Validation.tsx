export default function Validation() {
  const rows = [
    {
      window: "First 30 days",
      focus:
        "Adoption, approvals, reports, corrections, and training gaps.",
    },
    {
      window: "First 60 days",
      focus:
        "Policy fit, manager behavior, workflow bottlenecks, and support patterns.",
    },
    {
      window: "First 90 days",
      focus:
        "Governance review, optimization, and next-phase expansion planning.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Validation
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Launch validation & post-launch optimization
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-center text-base leading-7 text-gray-500 dark:text-gray-400">
          Confirm workflows, permissions, reports, training, support, and
          evidence controls before expanding — then optimize.
        </p>


        <div className="mt-12 max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">

          <table className="w-full text-left">

            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-5 py-4 text-sm font-semibold">
                  Window
                </th>

                <th className="px-5 py-4 text-sm font-semibold">
                  Focus
                </th>
              </tr>
            </thead>


            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.window}
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    index % 2 !== 0
                      ? "bg-gray-50 dark:bg-slate-800/50"
                      : ""
                  }`}
                >
                  <td className="px-5 py-4 text-sm font-bold text-slate-800 dark:text-white">
                    {row.window}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>


        <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-orange-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700 p-5 flex gap-4">

          <div className="mt-1 h-4 w-4 rounded-full border-2 border-teal-600 shrink-0" />

          <p className="text-sm leading-5 text-yellow-900 dark:text-yellow-200">
            <span className="font-bold">
              Launch readiness gate.{" "}
            </span>

            Before broad rollout: managers understand their responsibilities,
            worker communication is delivered, manager review workflows are
            confirmed, reports are validated, and support paths are live.
          </p>

        </div>

      </div>
    </section>
  );
}