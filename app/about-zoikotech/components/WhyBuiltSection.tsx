import { Check } from "lucide-react";

const rows = [
  {
    challenge: "Distributed work is harder to verify",
    response: "Verified time and activity intelligence across all locations",
  },
  {
    challenge: "Productivity data is fragmented",
    response: "Unified workforce intelligence and reporting in one platform",
  },
  {
    challenge: "Timesheets affect payroll and billing",
    response:
      "Payroll and timesheet integrity workflows with exception handling",
  },
  {
    challenge: "Managers need better review tools",
    response:
      "Structured approvals, escalation, and exception workflows",
  },
  {
    challenge: "Enterprises need defensible records",
    response:
      "Audit-grade evidence, retention controls, and legal hold support",
  },
  {
    challenge: "Workers need transparency",
    response:
      "Worker access, guides, and responsible oversight principles",
  },
  {
    challenge: "Customers need governance",
    response:
      "Role-based controls, security, implementation support, and policy alignment",
  },
];

export default function WhyBuiltSection() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-20 lg:px-32 xl:px-54 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold tracking-[1.32px] text-[#009D8C] dark:text-teal-400">
            WHY ZOIKOTIME WAS BUILT
          </span>

          <h2 className="mb-4 text-3xl font-bold text-[#0D1526] dark:text-white md:text-[34px]">
            Why Zoiko Tech Built ZoikoTime
          </h2>

          <p className="mx-auto max-w-4xl text-[#5A6E87] dark:text-gray-300">
            ZoikoTime was created because modern workforce management has
            outgrown basic time tracking. Distributed work, contractor-heavy
            operations, professional services delivery, payroll risk, client
            billing pressure, compliance expectations, and hybrid teams require
            stronger workforce records.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-xl border border-[#E4EBF4] dark:border-gray-700 md:block">
          <div className="grid grid-cols-[32%_68%]">
            <div className="border border-[#E4EBF4] bg-[#E4EBF4] px-6 py-3 text-xs font-bold tracking-wide text-[#8A9BBB] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              WORKFORCE CHALLENGE
            </div>

            <div className="border border-[#E4EBF4] bg-[#0D1526] px-6 py-3 text-xs font-bold tracking-wide text-[#00C6A9] dark:border-gray-700 dark:bg-gray-950 dark:text-teal-400">
              ZOIKOTIME RESPONSE
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.challenge}
              className="grid grid-cols-[32%_68%] border border-[#E4EBF4] dark:border-gray-700"
            >
              <div className="bg-[#FAFBFC] px-6 py-4 font-medium text-slate-800 dark:bg-gray-800 dark:text-white">
                {row.challenge}
              </div>

              <div className="flex items-start gap-2 bg-white px-6 py-4 text-slate-600 dark:bg-gray-900 dark:text-gray-300">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-teal-600 dark:text-teal-400"
                />
                <span>{row.response}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden">
          {rows.map((row) => (
            <div
              key={row.challenge}
              className="overflow-hidden rounded-xl border border-[#E4EBF4] bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="bg-[#E4EBF4] px-4 py-2 dark:bg-gray-700">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#8A9BBB] dark:text-gray-300">
                  Workforce Challenge
                </p>
              </div>

              <div className="px-4 py-3 text-sm font-medium text-slate-800 dark:text-white">
                {row.challenge}
              </div>

              <div className="border-t border-[#E4EBF4] bg-[#0D1526] px-4 py-2 dark:border-gray-700 dark:bg-gray-950">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#00C6A9] dark:text-teal-400">
                  ZoikoTime Response
                </p>
              </div>

              <div className="flex items-start gap-2 px-4 py-3 text-sm text-slate-600 dark:text-gray-300">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-teal-600 dark:text-teal-400"
                />
                <span>{row.response}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm font-semibold text-[#5A6E87] dark:text-gray-400">
          ZoikoTime exists because workforce data must be trusted before it can
          support payroll, billing, productivity, and operational decisions.
        </p>
      </div>
    </section>
  );
}