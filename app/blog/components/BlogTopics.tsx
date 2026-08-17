import Image from "next/image";
import Link from "next/link";
import React from "react";

const topics = [
  {
    image: "/BlogTopics/workforce1.png",
    title: "Workforce Assurance",
    description:
      "Insights on building clearer, more reliable, and more reviewable workforce records beyond basic time tracking.",
    href: "/workforce-assurance",
  },
  {
    image: "/BlogTopics/activity.png",
    title: "Time & Activity Verification",
    description:
      "How organizations can verify work-session data, manage activity context, and create stronger evidence trails.",
    href: "/time-and-activity-verification",
  },
  {
    image: "/BlogTopics/payroll.png",
    title: "Timesheets & Payroll Integrity",
    description:
      "Practical guidance on timesheet review, approval discipline, payroll readiness, and reducing time leakage.",
    href: "/payroll-and-timesheet-integrity",
  },
  {
    image: "/BlogTopics/analytics.png",
    title: "Workforce Analytics",
    description:
      "How to interpret workforce data responsibly to support operations, staffing, and business decisions.",
    href: "/analytics-reporting",
  },
  {
    image: "/BlogTopics/analytics1.png",
    title: "Worker Transparency & Privacy",
    description:
      "How organizations can deploy workforce oversight responsibly while maintaining worker trust and compliance.",
    href: "/privacy-notice",
  },
  {
    image: "/BlogTopics/ai.png",
    title: "Responsible AI",
    description:
      "ZoikoTime's approach to AI governance, explainability, human oversight, and responsible decision support.",
    href: "/responsible-ai",
  },
  {
    image: "/BlogTopics/governance.png",
    title: "Enterprise Governance",
    description:
      "Policy design, role-based controls, approval workflows, and audit-ready governance for large organizations.",
    href: "/enterprise-workforce-governance",
  },
  {
    image: "/BlogTopics/adoption.png",
    title: "Implementation & Adoption",
    description:
      "Setup planning, rollout strategies, worker communication, and adoption best practices.",
    href: "/implementation-services",
  },
  {
    image: "/BlogTopics/services.png",
    title: "Professional Services",
    description:
      "How consulting firms, agencies, and project-based businesses can protect billable time and improve client billing.",
    href: "/professional-services-firms",
  },
];

export default function BlogTopics() {
  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Header */}
        <div id="topic" className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-5 bg-teal-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 sm:text-xs">
              Browse by Topic
            </span>

            <div className="h-px w-5 bg-teal-600" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Explore Workforce Assurance Topics
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Browse insights organized by subject area — from time integrity
            and payroll readiness to responsible AI and enterprise governance.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-teal-500/40
                sm:p-6
              "
            >
              {/* Icon */}
              <div className="relative h-12 w-12">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {topic.description}
              </p>

              {/* Link */}
              <Link
                href={topic.href}
                className="
                  mt-6
                  inline-flex
                  items-center
                  text-sm
                  font-semibold
                  text-teal-600
                  transition-colors
                  hover:text-teal-700
                  dark:text-teal-400
                  dark:hover:text-teal-300
                "
              >
                View Topic

                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
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