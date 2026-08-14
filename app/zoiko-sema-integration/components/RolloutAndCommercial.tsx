import Link from "next/link";

const phases = [
  {
    phase: "Phase 01",
    title: "Discovery & readiness",
    output:
      "Eligibility confirmed, authority named, purpose and acceptance criteria documented.",
  },
  {
    phase: "Phase 02",
    title: "Pilot",
    output:
      "One or two mappings, full governance, tested denied cases, participant notices live.",
  },
  {
    phase: "Phase 03",
    title: "Launch",
    output:
      "Scheduled activation, monitored first exchanges, rollback preserved, support runbook active.",
  },
  {
    phase: "Phase 04",
    title: "Stabilize & expand",
    output:
      "Health and exception review, audit evidence, expansion only after stabilization.",
  },
];

const qualified = [
  "Zoiko Sema subscription",
  "ZoikoTime subscription",
  "Integration eligibility under your plan and contract",
  "Enterprise setup and implementation scope",
  "Support model and region availability",
];

const customerRoutes = [
  { label: "Open Integration Settings", href: "#" },
  { label: "Documentation", href: "/product-documentation" },
  { label: "Service Status", href: "/system-status" },
  { label: "Product Updates", href: "/product-updates" },
  { label: "Contact Support", href: "/contact" },
  { label: "Enterprise Support", href: "/enterprise-support" },
];

export default function RolloutAndCommercial() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Controlled Rollout */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Implementation, Pilot, Launch &amp; Expansion
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Controlled Rollout
            </h2>

            <ol className="mt-6 flex flex-col gap-4">
              {phases.map((phase) => (
                <li
                  key={phase.phase}
                  className="rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-5 dark:border-slate-800 dark:bg-slate-900"
                >

                  <p className="text-xs font-bold leading-5 text-emerald-700 dark:text-emerald-400">
                    {phase.phase}
                  </p>

                  <h3 className="mt-1.5 text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                    Output
                  </p>

                  <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {phase.output}
                  </p>

                </li>
              ))}
            </ol>

            <p className="mt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              There is no universal implementation duration. Timing depends on
              scope, workspaces, governance review, jurisdictions, pilot outcomes,
              and support model.
            </p>

          </div>

          {/* Commercial Evaluation */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Commercial &amp; Enterprise Evaluation
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Separate subscriptions, separate setup
            </h3>

            {/* Separately Qualified */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What is separately qualified
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">
                {qualified.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                >
                  Pricing
                </Link>

                <Link
                  href="/procurement-and-legal-resources"
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                >
                  Procurement &amp; Legal
                </Link>

              </div>

            </div>

            {/* Empty State */}
            <div className="mt-5 rounded-2xl border border-dashed border-stone-300 bg-slate-50 px-6 pb-6 pt-6 text-center dark:border-slate-700 dark:bg-slate-900/60">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Customer &amp; implementation evidence
              </h4>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                No customer names, logos, counts, quotes, metrics, or case studies
                appear here, because none has been verified and approved for this
                integration. This is an intentional empty state rather than an
                omission — when verified evidence exists, it will appear with its
                scope and date.
              </p>

            </div>

            {/* Existing Customers */}
            <div className="mt-5 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Already a customer?
              </h4>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {customerRoutes.map((route) => (
                  <Link
                    key={route.label}
                    href={route.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
                  >
                    {route.label} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Pause, disable, and decommission are supported operations with their
                own evidence and notice requirements — not hidden settings.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
