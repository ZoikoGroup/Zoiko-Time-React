"use client";
import Link from "next/link";

import React from "react";

const roles = [
  {
    title: "Owners & Admins",
    description: "Org setup, policy packs",
    steps: "5 steps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 9h18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "HR & People Ops",
    description: "Rosters, worker notices",
    steps: "4 steps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <circle
          cx="9"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 20c.5-3.5 2.3-5.5 5.5-5.5s5 2 5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 5v6M13 8h6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Workers",
    description: "App setup, verification",
    steps: "3 steps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 12.5l2.2 2.2 4.8-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Privacy & IT",
    description: "Access, data review",
    steps: "5 steps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Start() {
  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_476px] lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-wide text-emerald-400">
            Getting Started
          </div>

          <h1 className="max-w-[580px] text-4xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-[1.06]">
            Every role has a path. Let&apos;s find yours.
          </h1>

          <p className="mt-6 max-w-[500px] text-sm font-normal leading-7 text-white/70 sm:text-base">
            ZoikoTime onboarding is role-aware and governed by design —
            guided setup, safe testing, and a verified first-value outcome
            before anything touches production. No shortcuts, no automatic
            sign-off.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#path-finder"
              className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-500 sm:text-base"
            >
              Choose Your Starting Point
            </Link>

            <Link
             href="#path-finder"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Show My Path
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full rounded-[20px] bg-white p-[22px] text-sky-950 shadow-[0_12px_40px_rgba(15,34,71,0.14)] dark:bg-slate-900 dark:text-white dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          
          {/* CARD HEADER */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-xs font-bold">
              Onboarding, by role
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-[5px] w-[5px] rounded-full bg-teal-600 dark:bg-emerald-400" />
              8 tracks live
            </span>
          </div>

          {/* ROLE LIST */}
          <div>
            {roles.map((role, index) => (
              <div
                key={role.title}
                className={`flex min-h-[55px] items-center gap-3 py-2.5 ${
                  index !== roles.length - 1
                    ? "border-b border-gray-100 dark:border-white/10"
                    : ""
                }`}
              >
                {/* ICON */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                  {role.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">
                    {role.title}
                  </div>

                  <div className="mt-0.5 text-xs font-normal text-slate-500 dark:text-slate-400">
                    {role.description}
                  </div>
                </div>

                {/* STEPS */}
                <div className="shrink-0 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {role.steps}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}