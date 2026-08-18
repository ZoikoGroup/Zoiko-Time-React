"use client";

import { useState } from "react";
import Link from "next/link";

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
    title:
      "Enterprise Customer Success Manager — Regulated Industries",
    department: "Enterprise Success",
    location: "Remote · UK",
    type: "Full-time",
    isNew: true,
  },
];

export default function CurrentOpenings() {
  const [activeDept, setActiveDept] =
    useState("All Departments");

  const visibleRoles =
    activeDept === "All Departments"
      ? ROLES
      : ROLES.filter(
          (role) => role.department === activeDept
        );

  return (
    <section
      id="open-roles"
      className="
        w-full
        bg-[#F4F7FA]
        px-6
        py-16
        transition-colors
        duration-300
        dark:bg-slate-900
        sm:py-20
        md:px-12
        lg:px-20
        xl:px-32
      "
    >
      <div className="mx-auto max-w-6xl text-center">

        {/* ================================
            HEADING
        ================================= */}

        <span
          className="
            mb-5
            inline-block
            text-xs
            font-bold
            uppercase
            tracking-[1.3px]
            text-[#009D8C]
          "
        >
          OPEN ROLES
        </span>

        <h2
          className="
            text-3xl
            font-semibold
            text-[#0D1526]
            dark:text-white
            sm:text-4xl
            md:text-[34px]
          "
        >
          Current Openings
        </h2>

        {/* ================================
            DEPARTMENT FILTER
        ================================= */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {DEPARTMENTS.map((dept) => {
            const active = dept === activeDept;

            return (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDept(dept)}
                className={`
                  cursor-pointer
                  rounded-full
                  border
                  px-5
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    active
                      ? `
                        border-[#009D8C]
                        bg-[#009D8C]/10
                        text-[#009D8C]
                      `
                      : `
                        border-slate-200
                        bg-white
                        text-slate-600
                        hover:bg-slate-50
                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-300
                        dark:hover:bg-slate-700
                      `
                  }
                `}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* ================================
            ROLES
        ================================= */}

        <div className="mt-10 space-y-5 text-left">
          {visibleRoles.map((role) => (
            <div
              key={role.title}
              className="
                flex
                flex-col
                gap-6
                rounded-2xl
                bg-white
                p-6
                shadow-sm
                ring-1
                ring-slate-100
                transition-colors
                dark:bg-slate-800
                dark:ring-slate-700
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* ==========================
                  ROLE INFORMATION
              =========================== */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-lg
                    font-semibold
                    leading-7
                    text-slate-900
                    dark:text-white
                  "
                >
                  {role.title}
                </h3>

                {/* ROLE TAGS */}

                <div className="mt-4 flex flex-wrap gap-2">

                  {/* Department */}

                  <span
                    className="
                      rounded-full
                      bg-indigo-50
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-indigo-600
                      dark:bg-indigo-900/30
                      dark:text-indigo-300
                    "
                  >
                    {role.department}
                  </span>

                  {/* Location */}

                  <span
                    className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-slate-600
                      dark:bg-slate-700
                      dark:text-slate-300
                    "
                  >
                    {role.location}
                  </span>

                  {/* Employment Type */}

                  <span
                    className="
                      rounded-full
                      bg-emerald-50
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-emerald-600
                      dark:bg-emerald-900/30
                      dark:text-emerald-300
                    "
                  >
                    {role.type}
                  </span>

                  {/* New */}

                  {role.isNew && (
                    <span
                      className="
                        rounded-full
                        bg-amber-50
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-amber-600
                        dark:bg-amber-900/30
                        dark:text-amber-300
                      "
                    >
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* ==========================
                  APPLY BUTTON
              =========================== */}

              <Link
                href="/careers/apply"
                className="
                  inline-flex
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#009D8C]
                  px-10
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_4px_20px_rgba(0,157,140,0.35)]
                  transition-all
                  duration-200
                  hover:bg-teal-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#009D8C]
                  focus:ring-offset-2
                  dark:focus:ring-offset-slate-800
                  sm:w-auto
                "
              >
                Apply
              </Link>
            </div>
          ))}

          {/* ================================
              NO ROLES
          ================================= */}

          {visibleRoles.length === 0 && (
            <div
              className="
                rounded-2xl
                bg-white
                p-10
                text-center
                shadow-sm
                ring-1
                ring-slate-100
                dark:bg-slate-800
                dark:ring-slate-700
              "
            >
              <p className="text-slate-600 dark:text-slate-300">
                No openings are currently available in this
                department.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}