"use client";

type Status = "In Scope" | "Conditionally In Scope" | "Under Review";

type ScopeItem = {
  asset: string;
  owner: string;
  environment: string;
  conditions: string;
  status: Status;
};

const scopeItems: ScopeItem[] = [
  {
    asset: "Public web application",
    owner: "Product Security",
    environment: "Production",
    conditions: "Test account required",
    status: "In Scope",
  },
  {
    asset: "Public API endpoints",
    owner: "Product Security",
    environment: "Production",
    conditions: "Rate-limited",
    status: "Conditionally In Scope",
  },
  {
    asset: "Customer-managed integrations",
    owner: "Third-party",
    environment: "Varies",
    conditions: "Provider authorization required",
    status: "Under Review",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    "In Scope":
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    "Conditionally In Scope":
      "bg-indigo-50 text-blue-600 dark:bg-indigo-950/40 dark:text-indigo-300",
    "Under Review":
      "bg-orange-100 text-yellow-700 dark:bg-orange-950/40 dark:text-orange-300",
  };

  return (
    <span
      className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold leading-4 ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function ScopeTable() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              In-Scope Asset Registry
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            Current scope — synthetic example.
          </h2>

          <p className="mt-3 max-w-[630px] text-sm leading-6 text-gray-500 sm:text-base dark:text-slate-400">
            Illustrative record structure only. Real scope entries publish here
            only after policy approval.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-800/70">
                <th className="w-[24%] px-[18px] py-3 text-left text-xs font-semibold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                  Asset / Class
                </th>

                <th className="w-[18%] px-[18px] py-3 text-left text-xs font-semibold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                  Owner
                </th>

                <th className="w-[18%] px-[18px] py-3 text-left text-xs font-semibold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                  Environment
                </th>

                <th className="w-[22%] px-[18px] py-3 text-left text-xs font-semibold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                  Conditions
                </th>

                <th className="w-[18%] px-[18px] py-3 text-left text-xs font-semibold uppercase tracking-tight text-slate-800 dark:text-slate-200">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {scopeItems.map((item) => (
                <tr
                  key={item.asset}
                  className="border-t border-gray-100 dark:border-slate-800"
                >
                  <td className="px-[18px] py-3 text-xs leading-5 text-gray-700 dark:text-slate-200">
                    {item.asset}
                  </td>

                  <td className="px-[18px] py-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {item.owner}
                  </td>

                  <td className="px-[18px] py-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {item.environment}
                  </td>

                  <td className="px-[18px] py-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {item.conditions}
                  </td>

                  <td className="px-[18px] py-3">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-8 space-y-4 lg:hidden">
          {scopeItems.map((item) => (
            <article
              key={item.asset}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                  {item.asset}
                </h3>

                <StatusBadge status={item.status} />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                    Owner
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-slate-300">
                    {item.owner}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                    Environment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-slate-300">
                    {item.environment}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                    Conditions
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-slate-300">
                    {item.conditions}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div
          className="
            mt-4
            rounded-[10px]
            border
            border-slate-200
            bg-gray-50
            px-4
            py-3
            sm:px-[17px]
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
            If you can&apos;t find an asset here, do not assume it&apos;s in
            scope. Report it through the protected route below and we&apos;ll
            clarify.
          </p>
        </div>
      </div>
    </section>
  );
}