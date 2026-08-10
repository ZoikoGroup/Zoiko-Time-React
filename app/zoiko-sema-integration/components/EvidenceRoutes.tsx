import Link from "next/link";

const routes = [
  {
    title: "Trust Center",
    body: "Entry point for assurance evidence.",
    href: "/trust-center",
  },
  {
    title: "Security",
    body: "Identity, access, encryption, logging, incidents.",
    href: "/security-overview",
  },
  {
    title: "Privacy",
    body: "Categories, purposes, retention, rights.",
    href: "/privacy",
  },
  {
    title: "AI Governance",
    body: "Approved scope, prohibited uses, authority classes.",
    href: "/ai-governance",
  },
  {
    title: "Human-in-Command",
    body: "Where decision authority sits and stays.",
    href: "/human-in-command",
  },
  {
    title: "Data Location",
    body: "Storage, processing, access, transfers — separately.",
    href: "/data-location-residency",
  },
  {
    title: "Accessibility",
    body: "Tested scope, methods, known limitations.",
    href: "/accessibility",
  },
  {
    title: "System Status",
    body: "Authoritative current operational state.",
    href: "/system-status",
  },
];

export default function EvidenceRoutes() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Security, Privacy, AI Governance &amp; Trust
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Where the Evidence Lives
          </h2>

        </div>

        {/* Evidence Routes */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-sky-950 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-500"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {route.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {route.body}
              </p>

            </Link>
          ))}

        </div>

        {/* Jurisdiction & Claims */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Jurisdiction, Residency, Retention &amp; Lifecycle
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Qualified, never asserted
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Data location, transfer, retention, deletion, and retirement for the
              integration are qualified against your contract and configuration.
              This page makes no residency guarantee for any region.
            </p>

            <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Retirement covers disabling a mapping, pausing exchange, deleting or
              retaining prior context per schedule, and preserving audit history.
              Decommissioning the bridge does not delete records already created in
              ZoikoTime under policy.
            </p>

          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              No invented claims
            </h3>

            <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              No certification, compliance, data-residency, security, retention,
              customer, productivity, ROI, accuracy, or performance claim appears on
              this page. Where a claim would require evidence we do not currently
              hold, the claim is absent rather than hedged.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
