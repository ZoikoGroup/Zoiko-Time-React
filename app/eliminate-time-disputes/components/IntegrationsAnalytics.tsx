"use client";

import { FiLink, FiBarChart2, FiCheckCircle } from "react-icons/fi";

const cards = [
  {
    icon: FiLink,
    title: "Governed integrations",
    description:
      "Approved connections to payroll, HRIS, and scheduling — mapped, acknowledged, reconciled.",
  },
  {
    icon: FiBarChart2,
    title: "Dispute analytics",
    description:
      "Trends by cause, policy, team, and time — to fix root causes, not rank workers.",
  },
  {
    icon: FiCheckCircle,
    title: "Source health",
    description:
      "See capture-source reliability so you can trust the records under review.",
  },
];

export default function IntegrationsAnalytics() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-6 sm:py-16 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="flex w-full flex-col items-center">
          <span className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600">
            Connects &amp; Reports
          </span>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-1">
          <h2 className="text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl sm:leading-10 dark:text-white">
            Integrations and honest analytics
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-1 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/50">
                  <Icon
                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}