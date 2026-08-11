import Link from "next/link";

import SectionHeading from "./SectionHeading";

const goals = [
  {
    title: "Capture reviewable records",
    description: "Source-linked time records people can review and correct.",
    href: "/time-and-activity-verification",
    iconColor: "text-teal-600",
    icon: (
      <>
        <path d="M6 8L7.33333 9.33333L10 6.66667" />
        <circle cx="8" cy="8" r="6" />
      </>
    ),
  },
  {
    title: "Review & approve periods",
    description: "Corrections, submission, approval, and traceable history.",
    href: "/time-sheet-approvals",
    iconColor: "text-blue-600",
    icon: <rect x="2.67" y="2.67" width="10.67" height="10.67" rx="2" />,
  },
  {
    title: "Protect shift integrity",
    description: "Scheduled-vs-recorded boundaries and exceptions.",
    href: "/shift-integrity-controls",
    iconColor: "text-yellow-700",
    icon: (
      <>
        <path d="M2.67 4H13.33M2.67 8H13.33M2.67 12H9.33" />
      </>
    ),
  },
  {
    title: "Explain classification",
    description: "Policy-bound, jurisdiction-aware, reviewable logic.",
    href: "/deterministic-time-classification",
    iconColor: "text-blue-950",
    icon: (
      <>
        <path d="M8 5.33V8L10 9.33" />
        <circle cx="8" cy="8" r="6" />
      </>
    ),
  },
];

export default function ExploreByGoal() {
  return (
    <section id="explore-by-goal" className="bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Explore by Goal"
          title="Plain-language workforce-record needs."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <Link
              key={goal.title}
              href={goal.href}
              className="rounded-2xl border border-slate-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  aria-hidden="true"
                  className={`${goal.iconColor} dark:text-teal-400`}
                >
                  {goal.icon}
                </svg>
              </span>

              <h3 className="mt-6 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {goal.title}
              </h3>

              <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                {goal.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
