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
      : ROLES.filter((r) => r.department === activeDept);

  return (
    <section className="bg-[#F4F7FA] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">

        <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
          OPEN ROLES
        </span>
        <h2 className="text-4xl md:text-[34px]  font-semibold text-[#0D1526] mb-5">
          Current Openings
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {DEPARTMENTS.map((dept) => {
            const active = dept === activeDept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        <div className="mt-10 space-y-4 text-left">
          {visibleRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {role.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                    {role.department}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {role.location}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    {role.type}
                  </span>
                  {role.isNew && (
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                      New
                    </span>
                  )}
                </div>
              </div>

              <button className="shrink-0 rounded-lg bg-teal-600 px-15 py-2 text-sm font-semibold text-white transition cursor-pointer hover:bg-teal-700 shadow-[0_4px_20px_0_rgba(0,157,140,0.4)]">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
