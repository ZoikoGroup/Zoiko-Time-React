import React from "react";

const stats = [
  {
    value: "180+",
    label: "Jurisdictions covered",
  },
  {
    value: "<200ms",
    label: "Policy resolution time",
  },
  {
    value: "99.97%",
    label: "Compliance accuracy rate",
  },
  {
    value: "Zero",
    label: "Silent failure policy",
  },
  {
    value: "ISO 42001",
    label: "AI governance compliant",
  },
];

export default function PolicyStats() {
  return (
    <section className="bg-teal-500 py-10 dark:bg-teal-600">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-white/25"
                  : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}