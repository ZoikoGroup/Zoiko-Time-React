// components/customer-success/OutcomesSection.tsx
function Pill({ children, tone }: { children: React.ReactNode; tone: "teal" | "amber" | "indigo" | "slate" }) {
  const tones: Record<string, string> = {
    teal: "bg-emerald-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    amber: "bg-orange-100 text-yellow-700 dark:bg-amber-900/30 dark:text-amber-300",
    indigo: "bg-indigo-50 text-blue-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    slate: "bg-white/20 text-white",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold whitespace-nowrap ${tones[tone]}`}>
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 flex-none">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 dark:text-teal-400" />
      </svg>
      <span className="text-sm text-gray-700 dark:text-gray-300">{children}</span>
    </li>
  );
}

const ROWS = [
  { outcome: "Payroll-ready by cutoff", owner: "Payroll lead", range: "74% → 90%", state: "On track", tone: "teal" as const },
  { outcome: "Approval cycle time", owner: "Ops manager", range: "36h → 12h", state: "Achieved", tone: "teal" as const },
  { outcome: "Export validation pass", owner: "Finance sys", range: "88% → 99%", state: "At risk", tone: "amber" as const },
  { outcome: "Adoption breadth", owner: "Admin", range: "6 → 9 teams", state: "In progress", tone: "indigo" as const },
];

export default function OutcomesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Outcomes
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            An Outcome Register your organization owns
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Every outcome has an owner, a baseline, a target, a measure, and a
            current state — so value is defined by you and reviewed together.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
              <span className="text-xs font-semibold text-white">Outcome Register · Success plan</span>
              <Pill tone="slate">Customer-owned</Pill>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-gray-700">
                    {["Outcome", "Owner", "Baseline → target", "State"].map((h) => (
                      <th key={h} className="px-4 py-2 text-[9.5px] font-semibold uppercase tracking-tight text-gray-500 dark:text-gray-400">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.outcome} className="border-b border-slate-200 dark:border-gray-700">
                      <td className="px-4 py-3 text-xs text-slate-800 dark:text-gray-200">{row.outcome}</td>
                      <td className="px-4 py-3 text-xs text-slate-800 dark:text-gray-200">{row.owner}</td>
                      <td className="px-4 py-3 text-xs text-slate-800 dark:text-gray-200">{row.range}</td>
                      <td className="px-4 py-3"><Pill tone={row.tone}>{row.state}</Pill></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="px-5 py-4 text-xs leading-4 text-gray-500 dark:text-gray-400">
              Outcomes are defined and owned by your organization — each with a
              baseline, target, measure, and current state. Value is
              reviewable, not asserted.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Define and track outcomes that matter
            </h3>
            <p className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-400">
              Instead of a vanity dashboard, Customer Success centers on
              outcomes you choose and own. Progress is measured honestly
              against a baseline, and the register is the shared source of
              truth in every review.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Customer-owned outcomes, owners & targets</CheckItem>
              <CheckItem>Honest baseline → target measurement</CheckItem>
              <CheckItem>Reviewed together on your cadence</CheckItem>
            </ul>
          </div> 
        </div>
      </div>
    </section>
  );
}