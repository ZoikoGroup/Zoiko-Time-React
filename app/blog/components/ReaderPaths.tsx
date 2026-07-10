import Image from "next/image";
import React from "react";

const paths = [
  {
    image: "/ReaderPaths/evaluat.png",
    title: "Evaluating ZoikoTime",
    description:
      "Learn how ZoikoTime differs from basic time tracking and supports workforce assurance, evidence, and governance.",
    action: "Start Evaluation →",
  },
  {
    image: "/ReaderPaths/security.png",
    title: "Security, Privacy, or AI",
    description:
      "Explore responsible AI, worker transparency, access control, and security review resources.",
    action: "Review Trust Resources →",
  },
  {
    image: "/ReaderPaths/planning.png",
    title: "Planning Implementation",
    description:
      "Practical guidance on rollout planning, admin readiness, and worker communication.",
    action: "Plan Implementation →",
  },
  {
    image: "/ReaderPaths/payroll.png",
    title: "Payroll and Operations",
    description:
      "Strengthen time records, review workflows, approvals, and audit trails for payroll and billing confidence.",
    action: "Explore Topics →",
  },
];

export default function ReaderPaths() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              Popular Reader Paths
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
            Start With What Matters Most to You
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
            Choose the path that matches your role or current goal.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="relative h-12 w-12">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {path.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {path.description}
              </p>

              {/* CTA */}
              <button className="mt-6 text-sm font-bold text-teal-600 transition hover:text-teal-700">
                {path.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}