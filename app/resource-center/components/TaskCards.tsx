"use client";

import Link from "next/link";

const tasks = [
  {
    title: "Get started",
    description:
      "Role-based first actions, prerequisites, setup, and verification.",
    link: "Getting Started →",
    href: "/getting-started",
  },
  {
    title: "Solve a problem",
    description:
      "Troubleshooting, known states, support, and recovery.",
    link: "Help Center →",
    href: "/help-center",
  },
  {
    title: "Understand product behaviour",
    description:
      "Current fields, states, workflows, permissions, and limitations.",
    link: "Product Documentation →",
    href: "/product-documentation",
  },
  {
    title: "See what changed",
    description:
      "Verified shipped changes, applicability, and required action.",
    link: "Release Notes →",
    href: "/release-notes",
  },
  {
    title: "Learn a concept or workflow",
    description:
      "Guides and tutorials with applicability and source visible.",
    link: "Learn family →",
    href: "/guides",
  },
  {
    title: "Build or integrate",
    description:
      "Current development guidance, contracts, and integration options.",
    link: "Development Documentation →",
    href: "/development-documentation",
  },
  {
    title: "Review trust and governance",
    description:
      "Security, privacy, human authority, accessibility, and status.",
    link: "Trust & Governance →",
    href: "/trust-governance",
  },
  {
    title: "Evaluate enterprise deployment",
    description:
      "Administration, identity, support, and procurement.",
    link: "Enterprise →",
    href: "/enterprise",
  },
  {
    title: "Compare commercial options",
    description:
      "Current plans, trial, and terms.",
    link: "Pricing — never duplicated here →",
    href: "/pricing",
  },
];

export default function TaskCards() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-5 sm:px-7">
        
        {/* Heading */}
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            Start from the task, not the taxonomy
          </h2>

          <p className="w-full max-w-[643px] text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 dark:text-gray-300">
            Nine high-frequency jobs, each routing to the single source that
            governs it. No search required.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <Link
              key={task.title}
              href={task.href}
              className="group flex min-h-[190px] flex-col rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
            >
              {/* Card content */}
              <div>
                <h3 className="text-base font-bold leading-5 text-slate-900 dark:text-white">
                  {task.title}
                </h3>

                <p className="mt-1.5 text-xs font-normal leading-5 text-gray-600 dark:text-gray-300">
                  {task.description}
                </p>
              </div>

              {/* Card link */}
              <div className="mt-auto pt-4">
                <div className="border-t border-gray-200 pt-2.5 text-xs font-bold leading-5 text-emerald-500 dark:border-white/10 dark:text-emerald-400">
                  {task.link}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}