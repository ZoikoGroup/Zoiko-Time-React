import Link from "next/link";

const panels = [
  {
    title: "Accessibility",
    body: "We target WCAG 2.2 AA and publish the tested journeys, the methods used, the known limitations, the owner, the last-reviewed date, and the correction route.",
    calloutTitle: "No perfect-conformance claim",
    calloutBody:
      "Any product that claims flawless accessibility has not tested honestly. Our known limitations and their remediation status are published alongside the conformance position.",
    action: { label: "Open Accessibility", href: "/accessibility" },
  },
  {
    title: "Operational transparency",
    body: "Incidents, maintenance, component state, subscriptions, and history route to the authoritative live status source. This page does not duplicate live state.",
    calloutTitle: "No static uptime percentage",
    calloutBody:
      "A number printed on a marketing page has no source, no scope, and no measurement window. Platform Reliability stays evidence-gated until maintained SLO definitions, measurement method, history, and ownership exist.",
    action: { label: "Open System Status", href: "/status" },
  },
];

export default function HonestLimits() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {panels.map((panel) => (
            <div
              key={panel.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {panel.title}
              </h3>

              <p className="mt-3 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                {panel.body}
              </p>

              <div className="mt-5 flex-1 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                  {panel.calloutTitle}
                </p>

                <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                  {panel.calloutBody}
                </p>

              </div>

              <Link
                href={panel.action.href}
                className="group mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >

                <span>{panel.action.label}</span>

                <span
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>

              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
