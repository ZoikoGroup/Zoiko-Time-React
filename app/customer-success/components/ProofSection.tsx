
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-amber-900/30 px-2.5 py-1 text-[10px] font-bold text-yellow-700 dark:text-amber-300">
      {children}
    </span>
  );
}

const SCORECARD_ROWS = [
  { q: "Outcomes achieved", a: "Did the customer-owned outcomes hit their targets, measured against baseline?" },
  { q: "Adoption breadth", a: "Are more teams actively and appropriately using ZoikoTime — in aggregate?" },
  { q: "Risk resolution", a: "Were risks turned into owned actions and resolved with evidence?" },
  { q: "Signal transparency", a: "Could the customer see the inputs behind every health/risk signal?" },
  { q: "Renewal readiness", a: "Is readiness supported by evidence of value — not sales pressure?" },
];

const CASE_STUDIES = [
  { name: "Liam Fletcher", role: "HR Generalist", initials: "LF" },
  { name: "Emma Watson", role: "Financial Analyst", initials: "EW" },
  { name: "James Harrington", role: "Operations Director", initials: "JH" },
];

export default function ProofSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Proof
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Honest proof — no invented customers
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Where a signed public reference isn't available yet, we use a
            rigorous validation scorecard and clearly-labeled placeholders
            instead of fabricated logos, names, or quotes.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
            <h3 className="text-base font-semibold text-white">Customer success validation scorecard</h3>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-gray-700">
            {SCORECARD_ROWS.map((row) => (
              <div key={row.q} className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-4 sm:gap-4">
                <span className="text-xs font-semibold text-slate-800 dark:text-white sm:col-span-1">{row.q}</span>
                <span className="text-xs leading-5 text-gray-700 dark:text-gray-400 sm:col-span-3">{row.a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
              <Pill>★ Featured case study</Pill>
              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                "Reserved for a verified customer quote — added only with
                signed approval, including named role, scope, measured
                result, and time period."
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200 dark:border-gray-700 pt-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-50 dark:bg-teal-900/30 text-xs font-bold text-teal-700 dark:text-teal-300">
                  {c.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-white">{c.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Role — {c.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}