import Image from "next/image";
import React from "react";

const cards = [
  {
    icon: "/WhyRetentionMatters/truth.png",
    title: "Preserve Operational Truth",
    description:
      "Maintain governed records of work sessions, approvals, exceptions, corrections, policy decisions, and review actions.",
  },
  {
    icon: "/WhyRetentionMatters/readiness.png",
    title: "Support Legal and Audit Readiness",
    description:
      "Help legal, HR, compliance, payroll, finance, and operations teams locate, preserve, and review relevant workforce records.",
  },
  {
    icon: "/WhyRetentionMatters/risk.png",
    title: "Reduce Record Lifecycle Risk",
    description:
      "Reduce risk from unmanaged deletion, uncontrolled access, inconsistent retention, unsupported exports, and missing audit context.",
  },
];

const WhyRetentionMatters = () => {
  return (
    <section className="w-full bg-slate-100 dark:bg-gray-900 py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">
            Why Workforce Record Retention Matters
          </h2>

          <p className="mt-6 text-sm md:text-base leading-7 text-slate-500 dark:text-gray-300">
            Workforce records can become important in payroll review,
            client billing, HR investigations, audits, labor disputes,
            compliance reviews, and litigation readiness.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyRetentionMatters;