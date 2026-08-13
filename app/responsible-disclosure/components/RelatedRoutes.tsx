import Link from "next/link";

const routes = [
  {
    category: "Trust & Governance",
    title: "Security",
    description: "Our broader security program and controls.",
    href: "/security",
  },
  {
    category: "Trust & Governance",
    title: "Privacy",
    description: "Data practices and privacy rights.",
    href: "/privacy",
  },
  {
    category: "Operations",
    title: "System Status",
    description: "Live operational state — the single source of truth.",
    href: "/system-status",
  },
];

export default function RelatedRoutes() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Related Routes
            </span>
          </div>

          <h2 className="mt-3 max-w-[650px] text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            Responsible Disclosure doesn&apos;t replace these.
          </h2>
        </div>

        {/* Route Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="
                group
                min-h-[160px]
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:shadow-sm
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
              "
            >
              <div className="flex h-full flex-col">
                {/* Category */}
                <span className="text-xs font-semibold uppercase leading-4 tracking-wide text-teal-700 dark:text-teal-400">
                  {route.category}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                  {route.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {route.description}
                </p>

                {/* Link */}
                <span className="mt-auto pt-4 text-xs font-semibold leading-5 text-blue-950 transition-colors group-hover:text-teal-700 dark:text-slate-200 dark:group-hover:text-teal-300">
                  Visit page →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}