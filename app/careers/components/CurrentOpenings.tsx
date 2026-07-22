"use client";

import { useState } from "react";

const DEPARTMENTS = [
  "All Departments",
  "Engineering",
  "Product",
  "Enterprise Success",
  "Compliance & Legal",
  "Sales",
];

const ROLES = [
  {
    title: "Senior Product Manager — Workforce Assurance Systems",
    department: "Product",
    location: "Remote · UK / EU",
    type: "Full-time",
    isNew: true,
  },
  {
    title: "Platform Engineer — Verification & Evidence Infrastructure",
    department: "Engineering",
    location: "Remote · UK / EU / APAC",
    type: "Full-time",
    isNew: false,
  },
  {
    title: "Enterprise Customer Success Manager — Regulated Industries",
    department: "Enterprise Success",
    location: "Remote · UK",
    type: "Full-time",
    isNew: true,
  },
];

export default function CurrentOpenings() {
  const [activeDept, setActiveDept] = useState("All Departments");

  const visibleRoles =
    activeDept === "All Departments"
      ? ROLES
      : ROLES.filter((role) => role.department === activeDept);

  return (
    <section
    id ="open-roles"
     className="bg-[#F4F7FA] dark:bg-slate-900 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C] mb-5">
          OPEN ROLES
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-[34px] font-semibold text-[#0D1526] dark:text-white">
          Current Openings
        </h2>

        {/* Department Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {DEPARTMENTS.map((dept) => {
            const active = dept === activeDept;

            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? "border-[#009D8C] bg-[#009D8C]/10 text-[#009D8C]"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Roles */}
        <div className="mt-10 space-y-5 text-left">
          {visibleRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Left */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-7">
                  {role.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
                    {role.department}
                  </span>

                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {role.location}
                  </span>

                  <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                    {role.type}
                  </span>

                  {role.isNew && (
                    <span className="rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-300">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Button */}
              <button className="w-full sm:w-auto shrink-0 rounded-lg bg-[#009D8C] px-10 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,157,140,0.35)] transition-all hover:bg-teal-700 cursor-pointer">
                Apply
              </button>
            </div>
          ))}

          {visibleRoles.length === 0 && (
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-10 text-center shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
              <p className="text-slate-600 dark:text-slate-300">
                No openings are currently available in this department.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}