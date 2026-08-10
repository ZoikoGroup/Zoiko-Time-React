"use client";

const contractors = [
  {
    contractor: "J. Alvarado",
    project: "Distribution Rollout",
    status: "In Review",
    statusType: "review",
    owner: "PM · T. Okoye",
  },
  {
    contractor: "S. Rowntree",
    project: "Platform Migration",
    status: "In Review",
    statusType: "review",
    owner: "PM · L. Chen",
  },
  {
    contractor: "K. Devi",
    project: "Q3 Audit Prep",
    status: "Pending Approval",
    statusType: "pending",
    owner: "PM · R. Haddad",
  },
  {
    contractor: "M. Ferris",
    project: "Warehouse Retrofit",
    status: "Active",
    statusType: "active",
    owner: "PM · T. Okoye",
  },
];

const ownership = [
  { name: "Agency Partner Co.", count: "14 contractors" },
  { name: "Independent", count: "61 contractors" },
  { name: "Consulting Firms", count: "9 contractors" },
];

const exports = [
  { name: "This week", value: "88 clean", type: "clean" },
  { name: "Flagged", value: "3 held", type: "held" },
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

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-3.5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-xs font-semibold uppercase leading-5 tracking-wide text-slate-800 dark:text-slate-200">
        {title}
      </h3>

      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function OpsWorkspace() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-7 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:gap-10">
          {/* Heading */}
          <div className="flex w-full max-w-[620px] flex-col items-start gap-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Contractor Operations Workspace
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Roster, review, and export in one
              <br className="hidden sm:block" /> place.
            </h2>
          </div>

          {/* Workspace */}
          <div className="w-full rounded-3xl border border-slate-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:p-6 lg:p-7">
            {/* Contractor Table */}
            <div className="w-full overflow-hidden rounded-[10px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-slate-800">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                        Contractor
                      </th>

                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                        Project
                      </th>

                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                        Status
                      </th>

                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                        Owner
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {contractors.map((contractor) => (
                      <tr
                        key={contractor.contractor}
                        className="border-t border-gray-100 dark:border-slate-700"
                      >
                        <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                          {contractor.contractor}
                        </td>

                        <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                          {contractor.project}
                        </td>

                        <td className="px-4 py-3">
                          <StatusBadge
                            status={contractor.status}
                            type={contractor.statusType}
                          />
                        </td>

                        <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                          {contractor.owner}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Information Cards */}
            <div className="mt-3.5 grid w-full grid-cols-1 gap-3.5 md:grid-cols-2">
              {/* Ownership */}
              <InfoCard title="Ownership">
                <div>
                  {ownership.map((item, index) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between gap-4 py-2 ${
                        index !== 0
                          ? "border-t border-gray-100 dark:border-slate-700"
                          : "pt-2"
                      }`}
                    >
                      <span className="text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                        {item.name}
                      </span>

                      <span className="shrink-0 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </InfoCard>

              {/* Export Status */}
              <InfoCard title="Export Status">
                <div>
                  {exports.map((item, index) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between gap-4 py-2 ${
                        index !== 0
                          ? "border-t border-gray-100 dark:border-slate-700"
                          : "pt-2"
                      }`}
                    >
                      <span className="text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                        {item.name}
                      </span>

                      <span
                        className={`shrink-0 text-xs font-normal leading-4 ${
                          item.type === "clean"
                            ? "text-teal-700 dark:text-teal-400"
                            : "text-yellow-700 dark:text-yellow-400"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}