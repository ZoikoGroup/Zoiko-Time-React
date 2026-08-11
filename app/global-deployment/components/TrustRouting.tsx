import Link from "next/link";

const topics = [
  {
    topic: "Security",
    treatment:
      "Least privilege, change control, evidence, incident routing, support access, current limitations.",
    routeLabel: "Security",
    href: "/security",
  },
  {
    topic: "Privacy",
    treatment:
      "Minimization, data categories, location and transfer, retention, rights, current terms.",
    routeLabel: "Privacy & DPA",
    href: "/privacy",
  },
  {
    topic: "Anti-surveillance",
    treatment: "The exact invariant, across every tier and configuration.",
    routeLabel: "Anti-Surveillance",
    href: "#",
  },
  {
    topic: "Human control",
    treatment: "Named approval, neutral states, correction, escalation.",
    routeLabel: "Human-in-Command",
    href: "/human-in-command",
  },
  {
    topic: "AI governance",
    treatment:
      "Deterministic classification, approved AI scope only, Kairos decides nothing.",
    routeLabel: "AI Governance",
    href: "/ai-governance",
  },
  {
    topic: "Accessibility",
    treatment:
      "WCAG 2.2 AA is release-blocking. Known limitations and remediation are published.",
    routeLabel: "Accessibility",
    href: "/accessibility",
  },
  {
    topic: "Reliability and incidents",
    treatment: "Operational status and communications.",
    routeLabel: "System Status",
    href: "/system-status",
  },
  {
    topic: "Procurement",
    treatment:
      "Current artifacts with status, owner, review date, and withdrawal handling.",
    routeLabel: "Procurement & Legal",
    href: "/procurement-and-legal-resources",
  },
];

export default function TrustRouting() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[740px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Security, Privacy &amp; Trust Routing
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Every Claim Resolves to an Authoritative Surface
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            This page summarizes deployment implications and then hands you to
            the surface that owns the evidence.
          </p>

        </div>

        {/* Routing Table */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <table className="w-full min-w-[860px] border-collapse text-left">

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800">

                <th className="w-52 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Topic
                </th>

                <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Deployment treatment
                </th>

                <th className="w-52 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-700 dark:text-slate-300">
                  Authoritative route
                </th>

              </tr>
            </thead>

            <tbody>
              {topics.map((row, index) => (
                <tr
                  key={row.topic}
                  className={
                    index === topics.length - 1
                      ? ""
                      : "border-b border-stone-100 dark:border-slate-800"
                  }
                >

                  <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                    {row.topic}
                  </td>

                  <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {row.treatment}
                  </td>

                  <td className="px-4 py-3.5 align-top">
                    <Link
                      href={row.href}
                      className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold leading-6 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
                    >
                      <span>{row.routeLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}
