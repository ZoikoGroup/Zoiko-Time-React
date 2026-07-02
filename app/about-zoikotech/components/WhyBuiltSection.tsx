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
    response: "Payroll and timesheet integrity workflows with exception handling",
  },
  {
    challenge: "Managers need better review tools",
    response: "Structured approvals, escalation, and exception workflows",
  },
  {
    challenge: "Enterprises need defensible records",
    response: "Audit-grade evidence, retention controls, and legal hold support",
  },
  {
    challenge: "Workers need transparency",
    response: "Worker access, guides, and responsible oversight principles",
  },
  {
    challenge: "Customers need governance",
    response: "Role-based controls, security, implementation support, and policy alignment",
  },
];

export default function WhyBuiltSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-15">
          <span className="inline-block text-xs font-semibold tracking-[1.32px] text-[#009D8C] mb-2">
            WHY ZOIKOTIME WAS BUILT
          </span>
          <h2 className="text-[34px] font-bold text-[#0D1526] mb-3">
            Why Zoiko Tech Built ZoikoTime
          </h2>
          <p className="text-[#5A6E87] max-w-230 mx-auto">
            ZoikoTime was created because modern workforce management has outgrown basic time tracking. Distributed work, contractor-heavy operations, professional services delivery, payroll risk, client billing pressure, compliance expectations, and hybrid teams require stronger workforce records.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-[32%_68%]">
            <div className="bg-[#E4EBF4] border-2 border-[#E4EBF4] px-6 py-3 text-xs font-bold tracking-wide text-[#8A9BBB]">
              WORKFORCE CHALLENGE
            </div>
            <div className="bg-[#0D1526] border-2 border-[#E4EBF4] px-6 py-3 text-xs font-bold tracking-wide text-[#00C6A9]">
              ZOIKOTIME RESPONSE
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.challenge}
              className={`grid grid-cols-[32%_68%] text-sm border border-[#E4EBF4]`}
            >
              <div className="px-6 py-4 font-medium bg-[#FAFBFC] text-slate-800">
                {row.challenge}
              </div>
              <div className="px-6 py-4 bg-white text-slate-500 flex gap-1 items-start">
                <Check size={16} className="text-teal-600 shrink-0 mt-0.5" />
                <span>{row.response}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#5A6E87] font-semibold mt-8">
          ZoikoTime exists because workforce data must be trusted before it can support payroll, billing, productivity, and operational decisions.
        </p>
      </div>
    </section>
  );
}
