"use client";

import { useState } from "react";

import SectionHeading from "./SectionHeading";

const roles = [
  "HR & People",
  "Finance & Payroll",
  "Operations",
  "IT & Security",
  "Privacy & Compliance",
  "Worker",
  "Reviewer / Manager",
  "Procurement / Legal",
  "Existing customer",
];

export default function ExploreByRole() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Explore by Role"
          title="Broad, optional, and always editable."
        />

        {/* Role chips */}
        <div className="mt-12 flex flex-wrap gap-3">
          {roles.map((role, index) => {
            const isActive = index === selected;

            return (
              <button
                key={role}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelected(index)}
                className={`rounded-full border px-5 py-3 text-sm font-medium leading-5 transition ${
                  isActive
                    ? "border-slate-800 bg-slate-800 text-white dark:border-teal-500 dark:bg-teal-600"
                    : "border-slate-200 bg-white text-gray-700 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
