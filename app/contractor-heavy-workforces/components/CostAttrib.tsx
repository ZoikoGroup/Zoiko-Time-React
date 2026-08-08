"use client";

const records = [
  {
    contractor: "J. Alvarado",
    project: "Distribution Rollout",
    costCenter: "OPS-4410",
    hours: "38.5",
    status: "Review",
    type: "review",
  },
  {
    contractor: "S. Rowntree",
    project: "Platform Migration",
    costCenter: "IT-2201",
    hours: "24.0",
    status: "Review",
    type: "review",
  },
  {
    contractor: "K. Devi",
    project: "Q3 Audit Prep",
    costCenter: "FIN-1180",
    hours: "16.0",
    status: "Pending",
    type: "pending",
  },
  {
    contractor: "M. Ferris",
    project: "Warehouse Retrofit",
    costCenter: "OPS-4402",
    hours: "40.0",
    status: "Active",
    type: "active",
  },
];

function StatusBadge({
  status,
  type,
}: {
  status: string;
  type: string;
}) {
  const styles = {
    review:
      "bg-indigo-50 text-blue-950 dark:bg-indigo-950/40 dark:text-indigo-300",
    pending:
      "bg-orange-100 text-yellow-700 dark:bg-orange-950/40 dark:text-orange-300",
    active:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${
        styles[type as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function CostAttrib() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 px-4 py-7 sm:px-6 lg:gap-10 lg:px-8">
        {/* Heading */}
        <div className="flex w-full max-w-[620px] flex-col items-start gap-3.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Project &amp; Cost Attribution
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Every hour tied to a project and
            <br className="hidden sm:block" />
            cost center.
          </h2>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Contractor
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Project
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Cost Center
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Hours (wk)
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <tr
                    key={record.contractor}
                    className="border-t border-gray-100 dark:border-slate-700"
                  >
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {record.contractor}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {record.project}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {record.costCenter}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {record.hours}
                    </td>

                    <td className="px-4 py-3">
                      <StatusBadge
                        status={record.status}
                        type={record.type}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}