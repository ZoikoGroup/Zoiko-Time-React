export default function Training() {
  const rows = [
    {
      role: "Administrator",
      scope:
        "Workspace setup, users, roles, permissions, teams, policies, reports, evidence controls, exports, and support routing.",
    },
    {
      role: "Manager",
      scope:
        "Approvals, exceptions, corrections, team dashboards, review workflows, worker questions, and responsible use of records.",
    },
    {
      role: "Worker",
      scope:
        "Clock-in/out, time records, activity visibility, timesheets, correction requests, mobile usage, transparency, and support.",
    },
    {
      role: "HR & Legal",
      scope:
        "Sensitive workflows, evidence review, disputes, retention, legal hold, correction pathways, and documentation boundaries.",
    },
    {
      role: "Finance & Payroll",
      scope:
        "Timesheet integrity, approvals, payroll cutoff readiness, billing evidence, exports, and reconciliation.",
    },
    {
      role: "Operations",
      scope:
        "Daily review, utilization visibility, project allocation, exception monitoring, analytics, and operational reporting.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4">

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Enablement
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Training and change management
        </h2>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-base">
          Each audience receives training scoped to how they use the platform.
        </p>


        <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">

          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-5 py-4 text-sm font-semibold">
                  Training track
                </th>
                <th className="px-5 py-4 text-sm font-semibold">
                  Scope
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={item.role}
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    index % 2 !== 0
                      ? "bg-gray-50 dark:bg-slate-800/50"
                      : ""
                  }`}
                >
                  <td className="px-5 py-5 text-sm font-bold text-slate-800 dark:text-white align-top">
                    {item.role}
                  </td>

                  <td className="px-5 py-5 text-sm text-gray-600 dark:text-gray-300 leading-6">
                    {item.scope}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}