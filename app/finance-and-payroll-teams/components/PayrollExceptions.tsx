import React from "react";

const statuses = [
  {
    label: "Needs Worker Input",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-orange-200 dark:border-yellow-700",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  {
    label: "Manager Review",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-orange-200 dark:border-yellow-700",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  {
    label: "Payroll Review",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-orange-200 dark:border-yellow-700",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  {
    label: "Approved",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-700",
    text: "text-teal-700 dark:text-teal-300",
  },
  {
    label: "Returned",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-orange-200 dark:border-yellow-700",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  {
    label: "Blocked From Export",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-red-200 dark:border-red-700",
    text: "text-red-700 dark:text-red-300",
  },
];

const cards = [
  {
    title: "Worker rights",
    description:
      "View the record and applicable context, add a comment, submit or request a correction, see status and outcome, and access the support or dispute route as configured.",
  },
  {
    title: "Reviewer controls",
    description:
      "Request information; amend with reason and visible delta; return; approve; reject where authorized; escalate; or recuse.",
  },
  {
    title: "Change history",
    description:
      "Original value, revised value, author, role, reason, timestamp, source, approval impact, and export impact.",
  },
  {
    title: "Canonical neutral status",
    description:
      "“Unverified Exit — Pending Review.” Accusatory alternatives like “unauthorized” or “violation” are deliberately rejected before human review.",
  },
];

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-sm bg-teal-600"></span>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-gray-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default function PayrollExceptions() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Exception Resolution
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Resolve exceptions before they become
            <br className="hidden sm:block" />
            payroll rework
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-slate-400">
            ZoikoTime routes incomplete or conflicting records to the right
            person with a neutral status, visible reason, controlled correction
            path, and complete review history.
          </p>
        </div>

        {/* Status Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {statuses.map((status) => (
            <span
              key={status.label}
              className={`rounded-full border px-5 py-2 text-xs font-semibold ${status.bg} ${status.border} ${status.text}`}
            >
              {status.label}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* AI Boundary */}
        <div className="mt-14 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-400 text-sm font-bold text-slate-600 dark:border-slate-500 dark:text-slate-300">
            !
          </div>

          <p className="text-sm leading-7 text-gray-700 dark:text-slate-300">
            <span className="font-semibold">AI boundary.</span> Anomaly flags
            may prioritize records for review. They cannot determine pay, label
            a worker dishonest, or approve a correction.
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              {" "}
              See Human-in-Command Controls.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}