
function Pill({ children, tone }: { children: React.ReactNode; tone: "indigo" | "slate" }) {
  const tones: Record<string, string> = {
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
  { label: "Outcomes achieved", value: "2 of 5 · 2 on track · 1 at risk (owned)" },
  { label: "Risks", value: "2 open · both with owners & next steps" },
  { label: "Value evidence", value: "Outcome register + review history" },
];

export default function RenewalSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Renewal &amp; Expansion
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Honest readiness — never pressure
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Renewal readiness is a balanced, evidence-based review of outcomes
            achieved. Expansion is customer-declared — there is no propensity
            model quietly steering you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
              <span className="text-xs font-semibold text-white">Renewal readiness · Northwind Ops</span>
              <Pill tone="slate">On track</Pill>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-gray-700">
              {ROWS.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-2 px-5 py-3">
                  <span className="text-xs text-slate-800 dark:text-gray-200">{row.label}</span>
                  <span className="col-span-2 text-xs text-slate-800 dark:text-gray-200">{row.value}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 items-center gap-2 px-5 py-3">
                <span className="text-xs text-slate-800 dark:text-gray-200">Expansion</span>
                <div className="col-span-2 flex items-center gap-2">
                  <Pill tone="indigo">None declared</Pill>
                  <span className="text-xs text-slate-800 dark:text-gray-200">· customer choice</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 px-5 py-3">
                <span className="text-xs text-slate-800 dark:text-gray-200">Readiness signal</span>
                <span className="col-span-2 text-xs text-slate-800 dark:text-gray-200">Explained · no hidden renewal score</span>
              </div>
            </div>

            <p className="px-5 py-4 text-xs leading-4 text-gray-500 dark:text-gray-400">
              A readiness review — not a pressure tactic. Your team decides
              renewal and any expansion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-9 text-slate-800 dark:text-white">
              Balanced renewal, customer-declared expansion
            </h3>
            <p className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-400">
              Come to renewal with a clear, honest picture: outcomes achieved,
              risks resolved, and value delivered. Any expansion is something
              your organization chooses and declares — not something a hidden
              model pushes.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Balanced, non-coercive renewal readiness</CheckItem>
              <CheckItem>Expansion is customer-declared, not modeled</CheckItem>
              <CheckItem>Evidence of value, not sales pressure</CheckItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}