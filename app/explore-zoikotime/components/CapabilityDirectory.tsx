import Image from "next/image";
import Link from "next/link";

const activeFilters = [
  { label: "Goal: Any", active: true },
  { label: "Role: Any", active: false },
  { label: "Environment: Any", active: false },
  { label: "Stage: Any", active: false },
];

const capabilities = [
  {
    category: "Capture",
    title: "Time Tracking",
    description: "Source-linked work records people can review and correct.",
    image: "/explore-zoikotime/capability-capture.png",
    alt: "Warehouse staff recording work against labelled stock",
    href: "/time-and-activity-verification",
  },
  {
    category: "Review",
    title: "Timesheets & Approvals",
    description: "Corrections, submission, approval, and traceable history.",
    image: "/explore-zoikotime/capability-review.png",
    alt: "Two supervisors reviewing a paper record on a warehouse floor",
    href: "/time-sheet-approvals",
  },
  {
    category: "Integrity",
    title: "Shift Integrity Controls",
    description: "Scheduled-vs-recorded boundaries, changes, and exceptions.",
    image: "/explore-zoikotime/capability-integrity.png",
    alt: "Long warehouse aisle lined with racked inventory",
    href: "/shift-integrity-controls",
  },
  {
    category: "Classify",
    title: "Deterministic Time Classification",
    description: "Policy-bound, jurisdiction-aware, reviewable logic.",
    image: "/explore-zoikotime/capability-classify.png",
    alt: "A presentation screen showing classification rules to an audience",
    href: "/deterministic-time-classification",
  },
  {
    category: "Evidence",
    title: "Evidence Ledger",
    description: "Source-linked, attributable, versioned evidence.",
    image: "/explore-zoikotime/capability-evidence.png",
    alt: "Speakers presenting evidence to a seated audience",
    href: "/audit-grade-evidence",
  },
  {
    category: "Ask",
    title: "Kairos Assistant",
    description: "Retrieves, summarizes, and explains data — decides nothing.",
    image: "/explore-zoikotime/capability-ask.png",
    alt: "A lecture theatre with a presentation displayed on screen",
    href: "/kairos-assistant",
  },
];

const otherCapabilities = [
  { label: "Attendance & Presence", href: "/attendance-and-presence" },
  { label: "Break & Rest Compliance", href: "/break-rest-compliance" },
  { label: "Workforce Record Insights", href: "/reporting-and-workforce-analytics" },
  { label: "Reports & Dashboards", href: "/analytics-reporting" },
  { label: "Anomaly Flags & Alerts", href: "/integrity-and-anomaly-detection" },
  { label: "Zoiko Sema Integration", href: "/zoiko-sema-integration" },
];

export default function CapabilityDirectory() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                Approved Capability Directory
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-800 dark:text-white md:text-4xl">
              Every route stays reachable.
            </h2>
          </div>

          <Link
            href="/product"
            className="text-sm font-semibold leading-6 text-teal-700 transition hover:text-teal-800 dark:text-teal-400"
          >
            View full directory →
          </Link>
        </div>

        {/* Current filter state */}
        <div className="mt-8 flex flex-wrap gap-3">
          {activeFilters.map((filter) => (
            <span
              key={filter.label}
              className={`rounded-full border px-4 py-2 text-xs font-medium leading-5 ${
                filter.active
                  ? "border-emerald-100 bg-emerald-50 text-teal-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-300"
                  : "border-slate-200 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {filter.label}
            </span>
          ))}
        </div>

        {/* Capability cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Link
              key={capability.title}
              href={capability.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-[222px] w-full">
                <Image
                  src={capability.image}
                  alt={capability.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase leading-4 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                  {capability.category}
                </p>

                <h3 className="mt-3 text-base font-semibold leading-5 text-slate-800 dark:text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {capability.description}
                </p>

                <span className="mt-6 inline-flex text-xs font-semibold leading-5 text-slate-800 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining routes */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap gap-2 lg:flex-nowrap">
            {otherCapabilities.map((capability) => (
              <Link
                key={capability.label}
                href={capability.href}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-blue-950 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {capability.label}
              </Link>
            ))}
          </div>

          <Link
            href="/product"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            View full directory
          </Link>
        </div>

      </div>
    </section>
  );
}
