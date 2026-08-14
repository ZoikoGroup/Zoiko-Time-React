"use client";

import React from "react";
import Link from "next/link";

const paths = [
  {
    role: "Owners & Admins",
    title: "Admin Setup",
    duration: "5 steps · ~40 min",
    steps: [
      "Confirm organization profile",
      "Assign owner & backup admin",
      "Draft first policy pack",
      "Invite HR & IT collaborators",
      "Enter the sandbox to test rules",
    ],
  },
  {
    role: "Managers",
    title: "Manager Rollout",
    duration: "5 steps · ~30 min",
    steps: [
      "Review your team roster",
      "Configure shift schedules",
      "Run a one-week pilot",
      "Collect team feedback",
      "Confirm readiness with admin",
    ],
  },
  {
    role: "Workers",
    title: "Worker Activation",
    duration: "4 steps · ~10 min",
    steps: [
      "Download the ZoikoTime app",
      "Verify your identity",
      "Review the worker transparency notice",
      "Complete your first shift",
    ],
  },
];

export default function Paths() {
  return (
    <section className="w-full bg-white px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1232px]">
        {/* HEADER */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Guided Paths
            </span>
          </div>

          <h2 className="mt-2 max-w-[600px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Three sequences, start to finish.
          </h2>

          <p className="mt-4 max-w-[650px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Each path is a fixed order for a reason — skipping a step means
            launching on an assumption instead of a verification.
          </p>
        </div>

        {/* PATH CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3">
          {paths.map((path) => (
            <article
              key={path.title}
              className="flex min-h-[384px] flex-col rounded-[20px] border border-gray-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,34,71,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,34,71,0.10)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            >
              {/* ROLE */}
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                {path.role}
              </div>

              {/* TITLE */}
              <h3 className="mt-2 text-lg font-bold text-sky-950 dark:text-white">
                {path.title}
              </h3>

              {/* META */}
              <p className="mt-2 text-xs font-normal text-slate-500 dark:text-slate-400">
                {path.duration}
              </p>

              {/* STEPS */}
              <div className="mt-6">
                {path.steps.map((step, index) => (
                  <div
                    key={step}
                    className="relative flex min-h-[37px] items-start gap-3"
                  >
                    {/* CONNECTOR */}
                    {index < path.steps.length - 1 && (
                      <span className="absolute left-[9.5px] top-[20px] h-[17px] w-px bg-gray-200 dark:bg-white/10" />
                    )}

                    {/* NUMBER */}
                    <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-slate-50 text-[11px] font-bold text-slate-500 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400">
                      {index + 1}
                    </span>

                    {/* STEP TEXT */}
                    <span className="pt-[2px] text-xs font-normal leading-4 text-slate-600 dark:text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={
                  path.role === "Owners & Admins"
                    ? "/zoikotime-path-steps?role=owner"
                    : path.role === "Managers"
                    ? "/zoikotime-path-steps?role=manager"
                    : "/zoikotime-path-steps?role=worker"
                }
                className="mt-auto flex h-9 w-full items-center justify-center rounded-full border border-sky-950/20 text-sm font-semibold text-sky-950 transition hover:bg-sky-950 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-slate-950 text-center cursor-pointer"
              >
                Start this path
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}