const navItems = [
  "Overview",
  "Connections",
  "Requests",
  "Mappings",
  "Test runs",
  "Activations",
  "Reconciliation",
  "Evidence",
];

const stats = [
  { label: "Active connections", value: "18" },
  { label: "Reviews due", value: "4" },
  { label: "Degraded", value: "1" },
  { label: "Recon. cases", value: "3" },
];

const rows = [
  {
    connection: "HRIS · worker master",
    direction: "Inbound",
    state: "Active",
    tone: "bg-[#EAF6F3] text-teal-700",
    mapping: "v4",
  },
  {
    connection: "Payroll · records",
    direction: "Outbound",
    state: "Active",
    tone: "bg-[#EAF6F3] text-teal-700",
    mapping: "v3",
  },
  {
    connection: "Reporting · warehouse",
    direction: "Outbound",
    state: "Mapping review",
    tone: "bg-orange-100 text-yellow-700",
    mapping: "v2→v3",
  },
  {
    connection: "Events · webhook",
    direction: "Outbound",
    state: "Test only",
    tone: "bg-indigo-50 text-blue-700",
    mapping: "v1",
  },
  {
    connection: "Billing · finance",
    direction: "Outbound",
    state: "Degraded",
    tone: "bg-rose-50 text-red-700",
    mapping: "v2",
  },
];

export default function GovernanceCenter() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Product Proof
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            The Integration Governance Center
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            A production-faithful view of connections, reviews, mapping
            versions, delivery evidence, and reconciliation — with synthetic
            data and no worker-risk scoring.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_28px_58px_0px_rgba(14,31,61,0.18)] dark:border-slate-700 dark:bg-slate-800">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" aria-hidden="true" />
            <p className="pl-2.5 text-xs font-medium leading-5 text-white/90">
              ZoikoTime · Integration Governance Center
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <nav className="border-b border-slate-200 bg-[#F6F9F9] px-2 py-3 dark:border-slate-700 dark:bg-slate-900 lg:w-40 lg:shrink-0 lg:border-b-0 lg:border-r">
              <p className="px-2 pb-2.5 text-xs font-extrabold leading-5">
                <span className="text-slate-800 dark:text-white">ZOIKO</span>
                <span className="text-teal-600 dark:text-teal-400">TIME</span>
                <span className="text-slate-800 dark:text-white"> · IGC</span>
              </p>

              <ul className="flex flex-wrap gap-1 lg:block">
                {navItems.map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                      index === 0
                        ? "bg-white shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:bg-slate-800"
                        : ""
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${
                        index === 0 ? "bg-teal-600" : "bg-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-xs font-medium leading-5 ${
                        index === 0
                          ? "text-slate-800 dark:text-white"
                          : "text-gray-500 dark:text-slate-400"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main panel */}
            <div className="flex-1 px-4 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  Overview
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#EAF6F3] px-2 py-0.5 dark:bg-slate-700">
                  <span
                    className="h-1.5 w-1.5 rounded-[3px] bg-teal-700"
                    aria-hidden="true"
                  />
                  <span className="text-[9.5px] font-bold leading-4 text-teal-700 dark:text-teal-400">
                    Authority preserved
                  </span>
                </span>
              </div>

              {/* Stat tiles */}
              <dl className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-200 bg-[#F6F9F9] p-2.5 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <dt className="text-[9px] font-normal uppercase leading-4 tracking-tight text-gray-500 dark:text-slate-400">
                      {label}
                    </dt>
                    <dd className="text-lg font-bold leading-7 text-slate-800 dark:text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Connection table */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr>
                      {["Connection", "Direction", "State", "Mapping"].map(
                        (head) => (
                          <th
                            key={head}
                            className="border-b border-slate-200 px-2 py-1.5 text-[9.5px] font-semibold uppercase leading-4 tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400"
                          >
                            {head}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map(
                      ({ connection, direction, state, tone, mapping }) => (
                        <tr
                          key={connection}
                          className="border-b border-slate-200 dark:border-slate-700"
                        >
                          <td className="px-2 py-2.5 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                            {connection}
                          </td>
                          <td className="px-2 py-2.5 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                            {direction}
                          </td>
                          <td className="px-2 py-2">
                            <span
                              className={`inline-block rounded-[20px] px-2 py-0.5 text-[9.5px] font-bold leading-4 ${tone}`}
                            >
                              {state}
                            </span>
                          </td>
                          <td className="px-2 py-2.5 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                            {mapping}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                Every row: owner · authorizer · last acknowledgement · review due
                · evidence. Synthetic data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
