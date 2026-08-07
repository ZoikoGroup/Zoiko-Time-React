
function Pill({ children, tone }: { children: React.ReactNode; tone: "rose" | "slate" }) {
  const tones: Record<string, string> = {
    rose: "bg-rose-50 text-red-700 dark:bg-rose-900/30 dark:text-rose-300",
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

const SIGNAL_ROWS = [
  { label: "Signal", value: "Export validation trending down" },
  { label: "Why", value: "2 mapping reviews open on Reporting connection" },
  { label: "Inputs", value: "Validation pass rate · reconciliation cases" },
  { label: "Suggested action", value: "Owner reviews mapping v2→v3 (human decides)" },
];

export default function SignalsSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Signals
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Explainable health — never a secret score
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Every health or risk signal shows its inputs and its reason. There
            is no hidden health, churn, renewal, or upsell score driving the
            relationship.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Signals you can interrogate
            </h3>
            <p className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-400">
              When something is at risk, you see exactly why — the inputs, the
              trend, and a suggested action. ZoikoTime surfaces and suggests;
              your team decides. Nothing consequential happens automatically.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Inputs and reasons shown for every signal</CheckItem>
              <CheckItem>No secret health / churn / upsell score</CheckItem>
              <CheckItem>Suggestions assist — humans decide</CheckItem>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] lg:order-2">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
              <span className="text-xs font-semibold text-white">Health &amp; risk · explained</span>
              <Pill tone="slate">2 open risks</Pill>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-gray-700">
              {SIGNAL_ROWS.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-2 px-5 py-3">
                  <span className="text-xs text-slate-800 dark:text-gray-200">{row.label}</span>
                  <span className="col-span-2 text-xs text-slate-800 dark:text-gray-200">{row.value}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-5 py-3">
                <span className="text-xs text-slate-800 dark:text-gray-200">Not shown</span>
                <div className="col-span-2"><Pill tone="rose">No secret score</Pill></div>
              </div>
            </div>

            <p className="px-5 py-4 text-xs leading-4 text-gray-500 dark:text-gray-400">
              Every signal is explainable: you can see the inputs and the
              reason. ZoikoTime suggests; your team decides.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-emerald-100 dark:border-teal-900 bg-emerald-50 dark:bg-teal-900/20 px-6 py-5 sm:px-8">
          <p className="text-center text-sm leading-6 text-slate-800 dark:text-gray-200">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Deterministic and explainable — not AI scoring.
            </span>{" "}
            Kairos may help retrieve, summarize, or explain governed data, but
            it decides nothing.
          </p>
        </div>
      </div>
    </section>
  );
}