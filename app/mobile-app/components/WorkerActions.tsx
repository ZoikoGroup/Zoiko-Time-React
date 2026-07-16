"use client";

import React from "react";

const workerActions = [
  {
    title: "Start shift",
    description:
      "See assigned shift, time zone, current status, and policy note before recording shift start.",
  },
  {
    title: "View Worker Status",
    description:
      "Clear labels: Working, Short Break, Lunch Break, Idle Review, Early Finish Pending, Authorized Stand-Down, Unverified Exit, Shift Ended.",
  },
  {
    title: "Take eligible breaks",
    description:
      "Short Break and Lunch Break based on policy. Unavailable breaks show a disabled state with explanation — never hidden.",
  },
  {
    title: "Request Early Finish",
    description:
      "Before the clock-out window, submit an Early Finish Request with reason and return intent — not a silent exit.",
  },
  {
    title: "Explain Unverified Exit",
    description:
      "Asked for context on next login in neutral language. Never labeled a violation before manager review.",
  },
  {
    title: "Review timeline",
    description:
      "See their own shift start, breaks, requests, approvals, exceptions, and corrections.",
  },
];

export default function WorkerActions() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-20 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Workers
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl dark:text-white">
            What workers can do
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-slate-400">
            A clear, transparent mobile experience — with an explanation for
            every action that isn&apos;t available.
          </p>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-16 max-w-[1050px]">
          {workerActions.map((action, index) => (
            <div
              key={action.title}
              className={`text-center ${
                index !== workerActions.length - 1 ? "mb-5" : ""
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