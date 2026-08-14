"use client";

import React from "react";

const stages = [
  { label: "Discover", state: "complete", number: "✓" },
  { label: "Configure", state: "complete", number: "✓" },
  { label: "Test", state: "current", number: "3" },
  { label: "Verify", state: "pending", number: "4" },
  { label: "Launch", state: "pending", number: "5" },
];

const progressRows = [
  {
    role: "Owner / Admin",
    stage: "Launch",
    status: "Complete",
    type: "complete",
  },
  {
    role: "HR & People Ops",
    stage: "Verify",
    status: "In review",
    type: "review",
  },
  {
    role: "IT & Security",
    stage: "Test",
    status: "In progress",
    type: "progress",
  },
  {
    role: "Manager",
    stage: "Test",
    status: "In progress",
    type: "progress",
  },
  {
    role: "Worker (pilot group)",
    stage: "Configure",
    status: "Not started",
    type: "pending",
  },
];

function StatusBadge({
  status,
  type,
}: {
  status: string;
  type: string;
}) {
  const styles = {
    complete:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    review:
      "bg-orange-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
    progress:
      "bg-orange-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
    pending:
      "bg-gray-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
        styles[type as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function Progress() {
  return (
    <section 
    id="progress"
    className="w-full bg-white px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1232px]">
        {/* HEADER */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Progress Tracking
            </span>
          </div>

          <h2 className="mt-2 max-w-[650px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            See where every role actually stands.
          </h2>

          <p className="mt-4 max-w-[680px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            One shared view of onboarding progress — so nobody has to ask
            &quot;are we live yet?&quot; in a hallway.
          </p>
        </div>

        {/* PROGRESS PANEL */}
        <div className="mt-12 overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,34,71,0.06)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_8px_24px_rgba(0,0,0,0.18)] lg:mt-16">
          {/* STAGE TRACKER */}
          <div className="overflow-x-auto px-6 pt-7 sm:px-10">
            <div className="mx-auto flex min-w-[620px] max-w-[1000px] items-start">
              {stages.map((stage, index) => (
                <React.Fragment key={stage.label}>
                  <div className="flex min-w-[90px] flex-1 flex-col items-center">
                    <div
                      className={`
                        relative z-10 flex h-7 w-7 items-center justify-center
                        rounded-full text-xs font-bold
                        ${
                          stage.state === "complete"
                            ? "bg-teal-600 text-white"
                            : stage.state === "current"
                              ? "bg-sky-950 text-white ring-4 ring-[#e4f5f1] dark:bg-teal-600 dark:ring-teal-900/40"
                              : "border-2 border-gray-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400"
                        }
                      `}
                    >
                      {stage.number}
                    </div>

                    <span
                      className={`mt-3 text-xs font-semibold ${
                        stage.state === "pending"
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-sky-950 dark:text-white"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>

                  {index < stages.length - 1 && (
                    <div
                      className={`mt-[13px] h-0.5 flex-1 ${
                        index < 2
                          ? "bg-teal-600"
                          : "bg-gray-200 dark:bg-white/10"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* TABLE */}
          <div className="mt-8 overflow-x-auto px-5 pb-6 sm:px-8">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-white/10">
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Role
                  </th>

                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Current stage
                  </th>

                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {progressRows.map((row) => (
                  <tr
                    key={row.role}
                    className="border-b border-gray-100 last:border-b-0 dark:border-white/10"
                  >
                    <td className="px-3 py-3 text-sm font-normal text-slate-600 dark:text-slate-300">
                      {row.role}
                    </td>

                    <td className="px-3 py-3 text-sm font-normal text-slate-600 dark:text-slate-300">
                      {row.stage}
                    </td>

                    <td className="px-3 py-3">
                      <StatusBadge
                        status={row.status}
                        type={row.type}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}