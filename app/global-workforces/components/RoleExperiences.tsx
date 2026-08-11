"use client";

import Image from "next/image";
import React, { useState } from "react";

const roles = [
  {
    id: "worker",
    label: "Worker",
    title: "Clarity across countries & time zones",
    image: "/global-workforces/experience.png",
    points: [
      "See your own records, context, status & history",
      "Capture in your language, with your local time preserved",
      "Request corrections with a reason — a clear path, not a black box",
      "Works offline and syncs; privacy-first, no monitoring",
    ],
  },
  {
    id: "regional",
    label: "Regional Manager & Shared Services",
    title: "Governed visibility across your region",
    image: "/global-workforces/experience.png",
    points: [
      "See workforce records across entities, regions & time zones",
      "Review readiness, exceptions, ownership & approval status",
      "Preserve local policy and time context while maintaining global visibility",
      "Escalate issues through clear, accountable workflows",
    ],
  },
  {
    id: "hr",
    label: "HR, Payroll & Finance",
    title: "Reliable records ready for downstream use",
    image: "/global-workforces/experience.png",
    points: [
      "Review approved records before payroll and downstream processing",
      "Understand local time, policy, status and correction history",
      "Track cutoff risk, ownership and unresolved exceptions",
      "Maintain an evidence trail for review and reconciliation",
    ],
  },
];

export default function RoleExperiences() {
  const [activeRole, setActiveRole] = useState("worker");

  const activeContent =
    roles.find((role) => role.id === activeRole) ?? roles[0];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              Role Experiences
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            Built for everyone in the chain
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            The same governed model, seen from each role that touches it.
          </p>
        </div>

        {/* ================= ROLE TABS ================= */}
        <div className="mx-auto mt-8 flex w-full max-w-[1080px] flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5">
          {roles.map((role) => {
            const isActive = activeRole === role.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveRole(role.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:px-5 sm:text-sm ${
                  isActive
                    ? "border-slate-800 bg-slate-800 text-white shadow-sm dark:border-slate-700 dark:bg-slate-700"
                    : "border-slate-200 bg-white text-gray-500 hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
                }`}
              >
                {role.label}
              </button>
            );
          })}
        </div>

        {/* ================= ROLE CONTENT ================= */}
        <div className="mx-auto mt-8 grid w-full max-w-[1080px] grid-cols-1 items-center gap-8 sm:mt-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* ================= IMAGE ================= */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
            <div className="relative aspect-[521/250] w-full">
              <Image
                src={activeContent.image}
                alt={`${activeContent.label} experience`}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex w-full flex-col gap-3">
            <h3 className="text-xl font-bold leading-8 text-slate-800 sm:text-2xl dark:text-white">
              {activeContent.title}
            </h3>

            <div className="mt-1 flex flex-col gap-3">
              {activeContent.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5"
                >
                  {/* Check Icon */}
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12.5l4 4L19 7.5"
                      />
                    </svg>
                  </div>

                  <p className="text-sm leading-6 text-gray-700 dark:text-slate-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}