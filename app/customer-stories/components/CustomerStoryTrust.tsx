"use client";

import {
  FiCheckCircle,
  FiShield,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

const trustItems = [
  {
    icon: FiCheckCircle,
    title: "Consented",
    description: "Customer signs off before publishing",
  },
  {
    icon: FiShield,
    title: "Source-reviewed",
    description: "Metrics checked against original data",
  },
  {
    icon: FiCalendar,
    title: "Date-stamped",
    description: "Every story shows when it was verified",
  },
  {
    icon: FiFileText,
    title: "Evidence-labeled",
    description: "Claims are scoped to what's verified",
  },
];

export default function CustomerStoryTrust() {
  return (
    <section className="bg-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 py-8 md:px-8"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5 text-teal-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}