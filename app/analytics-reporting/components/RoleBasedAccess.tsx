export default function RoleBasedAccess() {
  const roles = [
    {
      role: "Organization owner",
      permission:
        "Full commercial and governance visibility. High-impact export and retention actions may still require separation of duties.",
    },
    {
      role: "Analytics administrator",
      permission:
        "Manage metric catalog, reports, dashboards, quality rules, schedules, and access within approved scope.",
    },
    {
      role: "Report author",
      permission:
        "Create and edit reports from permitted metrics and populations. Cannot alter canonical definitions without separate authority.",
    },
    {
      role: "Executive viewer",
      permission:
        "View approved aggregated dashboards and annotations. No unrestricted drill-down and no export.",
    },
    {
      role: "HR / people analyst",
      permission:
        "Authorized workforce-record analysis within purpose, policy, privacy, and scope.",
    },
    {
      role: "Payroll / finance reviewer",
      permission:
        "Approved period readiness, corrections, reconciliation, and controlled exports.",
    },
    {
      role: "Privacy / compliance reviewer",
      permission:
        "Review purpose, privacy treatment, access, retention, exports, evidence, and exceptions.",
    },
    {
      role: "Data / integration admin",
      permission:
        "Source health, lineage, mapping, quality, and delivery. No automatic access to worker-level analytical detail.",
    },
    {
      role: "Auditor / viewer",
      permission:
        "Read-only evidence and approved reports. Export only where explicitly granted.",
    },
    {
      role: "Worker / representative",
      permission:
        "Relevant worker-facing records, correction status, and transparent use information where supported. No access to restricted organization analytics.",
    },
  ];


  return (
    <section className="w-full px-4 py-16 sm:px-8 lg:px-32">

      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8">


        {/* Header */}
        <div className="flex max-w-[780px] flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
            Role-Based Access & Sharing
          </p>


          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Separation of Duties, Written as Permissions
          </h2>


          <p className="max-w-[650px] text-base leading-7 text-slate-600 dark:text-slate-300">
            Ten role patterns. Note where authority stops — a report author
            cannot rewrite a canonical definition, and a data admin gets no
            automatic path to worker-level detail.
          </p>

        </div>



        {/* Table */}
        <div
          className="
          w-full overflow-x-auto rounded-2xl
          border border-slate-200
          bg-white
          dark:border-slate-700
          dark:bg-slate-900
          "
        >

          <table className="min-w-[900px] w-full border-collapse">

            <thead>

              <tr className="bg-slate-50 dark:bg-slate-800">

                <th
                  className="
                  w-52 px-4 py-4 text-left
                  text-xs font-bold uppercase tracking-wide
                  text-slate-900 dark:text-white
                  "
                >
                  Role
                </th>


                <th
                  className="
                  px-4 py-4 text-left
                  text-xs font-bold uppercase tracking-wide
                  text-slate-900 dark:text-white
                  "
                >
                  Typical permission boundary
                </th>

              </tr>

            </thead>


            <tbody>

              {roles.map((item, index) => (

                <tr
                  key={item.role}
                  className="
                  border-t border-slate-200
                  dark:border-slate-700
                  "
                >

                  <td
                    className="
                    px-4 py-4
                    text-sm font-semibold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {item.role}
                  </td>


                  <td
                    className="
                    px-4 py-4
                    text-sm leading-6
                    text-slate-600
                    dark:text-slate-300
                    "
                  >
                    {item.permission}
                  </td>

                </tr>

              ))}


            </tbody>

          </table>

        </div>



        {/* CTA */}
        <div className="flex w-full justify-center">

          <button
            className="
            inline-flex items-center gap-2
            rounded-lg
            border border-slate-200
            bg-white
            px-6 py-3.5
            text-base font-bold
            text-slate-900
            shadow-sm
            transition
            hover:bg-slate-50

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:hover:bg-slate-800
            "
          >

            Identity & Access Management

            <span className="text-lg">
              →
            </span>

          </button>

        </div>


      </div>

    </section>
  );
}