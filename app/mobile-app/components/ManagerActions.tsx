"use client";

import React from "react";

const managerActions = [
  {
    title: "See team status",
    description:
      "Managers see only Workers within their authorized team scope.",
  },
  {
    title: "Review break overruns",
    description:
      "Receive and review break overrun events based on tenant policy.",
  },
  {
    title: "Approve Early Finish Requests",
    description:
      "Approve, reject, convert to leave, convert to absence, or escalate depending on configuration.",
  },
  {
    title: "Apply Authorized Stand-Down",
    description:
      "Pause work for Workers, teams, departments, or locations during legitimate operational interruptions.",
  },
  {
    title: "Review Unverified Exit",
    description:
      "Review Worker explanations before classification — the system never labels an event a violation before review.",
  },
  {
    title: "Preserve audit trail",
    description:
      "Decisions are audit-logged with actor, timestamp, policy version, decision, and reason where required.",
  },
];

export default function ManagerActions() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-20 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="mx-auto max-w-[650px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Managers
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl dark:text-white">
            What managers can do
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-slate-400">
            Scoped, policy-aware review tools — with audit-logged decisions.
          </p>
        </div>

        {/* Manager Actions */}
        <div className="mx-auto mt-16 max-w-[900px]">
          {managerActions.map((action, index) => (
            <div
              key={action.title}
              className={`text-center ${
                index !== managerActions.length - 1 ? "mb-5" : ""
              }`}
            >
              <h3 className="text-sm font-bold leading-5 text-slate-700 dark:text-slate-200">
                {action.title}
              </h3>

              <p className="mt-1 text-base leading-6 text-gray-500 dark:text-slate-400">
                {action.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}