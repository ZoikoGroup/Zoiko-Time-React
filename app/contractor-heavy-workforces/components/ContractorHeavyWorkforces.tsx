"use client";

import React from "react";

const stats = [
  {
    value: "312",
    label: (
      <>
        Active
        <br />
        contractors
      </>
    ),
  },
  {
    value: "48",
    label: "Projects tracked",
  },
  {
    value: "21",
    label: "In review",
  },
  {
    value: "99.3%",
    label: (
      <>
        Records exported
        <br />
        clean
      </>
    ),
  },
];

const approvalRows = [
  {
    name: "J. Alvarado — Agency Partner",
    project: "Project: Distribution Center Rollout",
    progress: ["teal", "teal", "blue", "gray"],
  },
  {
    name: "S. Rowntree — Independent",
    project: "Project: Platform Migration",
    progress: ["teal", "teal", "blue", "gray"],
  },
  {
    name: "K. Devi — Consulting Firm",
    project: "Project: Q3 Audit Prep",
    progress: ["teal", "teal", "teal", "blue"],
  },
];

function ContractorWorkspace() {
  return (
    <div className="w-full max-w-[550px] rounded-3xl border border-slate-200 bg-gray-50 p-5 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold leading-6 text-slate-800 sm:text-base dark:text-white">
          Contractor Operations Workspace
        </h3>

        <div className="flex h-6 w-14 shrink-0 items-center justify-center gap-1 rounded-full bg-emerald-50">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

          <span className="text-xs font-semibold leading-4 text-teal-700">
            Live
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="min-h-[76px] rounded-[10px] border border-slate-200 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-950"
          >
            <div className="text-lg font-bold leading-8 text-slate-800 dark:text-white">
              {stat.value}
            </div>

            <div className="text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Approval Queue */}
      <div className="mt-2.5 rounded-[10px] border border-slate-200 bg-white px-3.5 py-3.5 dark:border-slate-700 dark:bg-slate-950">
        <div className="pb-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-slate-800 dark:text-white">
            Approval Queue
          </div>
        </div>

        {approvalRows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-3 border-t border-gray-100 py-2 dark:border-slate-800"
          >
            {/* User */}
            <div className="flex min-w-0 items-center gap-2">
              <div className="h-5 w-5 shrink-0 rounded-full bg-blue-950" />

              <div className="min-w-0">
                <div className="truncate text-xs font-normal leading-5 text-gray-700 dark:text-gray-300">
                  {row.name}
                </div>

                <div className="truncate text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
                  {row.project}
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="flex shrink-0 items-start gap-[3px]">
              {row.progress.map((item, index) => {
                const color =
                  item === "teal"
                    ? "bg-teal-600"
                    : item === "blue"
                      ? "bg-blue-950"
                      : "bg-gray-100";

                return (
                  <div
                    key={index}
                    className={`h-[5px] w-3.5 rounded-[3px] ${color}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Activity Timeline */}
      <div className="mt-2.5 rounded-[10px] border border-slate-200 bg-white p-3.5 dark:border-slate-700 dark:bg-slate-950">
        <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-slate-800 dark:text-white">
          Activity Timeline
        </div>

        <div className="pt-4">
          <div className="border-b border-gray-100 pb-2 text-xs font-normal leading-5 text-gray-700 dark:border-slate-800 dark:text-gray-300">
            09:41 · Record REC-4471 moved to Review
          </div>

          <div className="border-b border-gray-100 py-2 text-xs font-normal leading-5 text-gray-700 dark:border-slate-800 dark:text-gray-300">
            09:22 · Export batch confirmed clean — 88 records
          </div>

          <div className="pt-2 text-xs font-normal leading-5 text-gray-700 dark:text-gray-300">
            08:57 · New engagement created — Agency Partner Co.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContractorHeavyWorkforces() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col px-6 py-16 sm:px-8 lg:min-h-[593px] lg:flex-row lg:items-center lg:gap-10 lg:py-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[52%] lg:max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700">
              Contractor-Heavy Workforces
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-3.5 text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-slate-800 sm:text-5xl sm:leading-[54px] dark:text-white">
            One governed
            <br />
            record for every
            <br />
            contractor, project,
            <br />
            and hour.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[480px] text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime connects contractor, engagement, project, task, time,
            review, approval, and export into a single traceable record — with
            transparent workflows and human review at every step.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href="/request-enterprise-demo"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold leading-6 text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Request Enterprise Demo
            </a>

            <a
              href="/start-free"
              className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-sm font-semibold leading-6 text-white transition hover:bg-green-500"
            >
              Start Free
            </a>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-[48%] lg:justify-end">
          <ContractorWorkspace />
        </div>
      </div>
    </section>
  );
}