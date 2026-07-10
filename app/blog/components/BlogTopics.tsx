import Image from "next/image";
import React from "react";

const topics = [
  {
    image: "/BlogTopics/workforce1.png",
    title: "Workforce Assurance",
    description:
      "Insights on building clearer, more reliable, and more reviewable workforce records beyond basic time tracking.",
  },
  {
    image: "/BlogTopics/activity.png",
    title: "Time & Activity Verification",
    description:
      "How organizations can verify work-session data, manage activity context, and create stronger evidence trails.",
  },
  {
    image: "/BlogTopics/payroll.png",
    title: "Timesheets & Payroll Integrity",
    description:
      "Practical guidance on timesheet review, approval discipline, payroll readiness, and reducing time leakage.",
  },
  {
    image: "/BlogTopics/analytics1.png",
    title: "Workforce Analytics",
    description:
      "How to interpret workforce data responsibly to support operations, staffing, and business decisions.",
  },
  {
    image: "/BlogTopics/privacy.png",
    title: "Worker Transparency & Privacy",
    description:
      "How organizations can deploy workforce oversight responsibly while maintaining worker trust and compliance.",
  },
  {
    image: "/BlogTopics/ai.png",
    title: "Responsible AI",
    description:
      "ZoikoTime's approach to AI governance, explainability, human oversight, and responsible decision support.",
  },
  {
    image: "/BlogTopics/governance.png",
    title: "Enterprise Governance",
    description:
      "Policy design, role-based controls, approval workflows, and audit-ready governance for large organizations.",
  },
  {
    image: "/BlogTopics/adoption.png",
    title: "Implementation & Adoption",
    description:
      "Setup planning, rollout strategies, worker communication, and adoption best practices.",
  },
  {
    image: "/BlogTopics/services.png",
    title: "Professional Services",
    description:
      "How consulting firms, agencies, and project-based businesses can protect billable time and improve client billing.",
  },
];

export default function BlogTopics() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Browse by Topic
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">
            Explore Workforce Assurance Topics
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
            Browse insights organized by subject area — from time integrity and
            payroll readiness to responsible AI and enterprise governance.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="relative h-12 w-12">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
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
              <button className="mt-6 text-sm font-semibold text-teal-600 transition hover:text-teal-700">
                View Topic →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}