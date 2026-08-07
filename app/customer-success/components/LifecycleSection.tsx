// components/customer-success/LifecycleSection.tsx
const STAGES = [
  { title: "Qualify & confirm entitlement", desc: "Confirm scope, entitlements, roles, and success sponsors — no surprises later." },
  { title: "Baseline", desc: "Capture the honest starting point across the outcomes that matter to you." },
  { title: "Define outcomes & success plan", desc: "Agree owner-assigned outcomes, measures, targets, and timelines you control." },
  { title: "Activate & verify adoption", desc: "Enable teams and confirm real usage — measured in aggregate, never by ranking workers." },
  { title: "Review health & risks", desc: "Look at explainable signals together — each with its inputs and reasons." },
  { title: "Coordinate actions & escalations", desc: "Turn risks into owned, tracked actions with clear next steps and accountability." },
  { title: "Optimize governance", desc: "Tune policy, roles, and integrations so value compounds without losing control." },
  { title: "Prepare renewal & expansion", desc: "Review outcomes achieved and readiness — balanced, honest, and non-coercive." },
  { title: "Transition, change, or close", desc: "Handle role changes, transitions, or offboarding cleanly, with evidence preserved." },
];

export default function LifecycleSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            The Lifecycle
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            A nine-stage customer success lifecycle
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Qualify → baseline → define outcomes → activate → review →
            coordinate → optimize → renew/expand → transition.
          </p>
        </div>

        <ol className="mx-auto mt-12 max-w-3xl">
          {STAGES.map((stage, i) => (
            <li key={stage.title} className="relative flex gap-4 pb-8 last:pb-0">
              {i !== STAGES.length - 1 && (
                <span className="absolute left-5 top-10 h-full w-0.5 bg-emerald-100 dark:bg-teal-900" />
              )}
              <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-base font-bold text-white shadow-[0px_7px_14px_0px_rgba(16,162,141,0.30)]">
                {i + 1}
              </span>
              <div className="w-full rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {stage.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}