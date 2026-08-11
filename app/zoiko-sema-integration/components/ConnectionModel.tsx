"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type Step = {
  tab: string;
  title: string;
  lead: string;
  columns: { label: string; value: ReactNode }[];
};

const steps: Step[] = [
  {
    tab: "1 · Map",
    title: "Map approved workspaces",
    lead: "An authorized administrator selects which Sema workspaces connect, and to which ZoikoTime organizational scope. Nothing is mapped by default.",
    columns: [
      {
        label: "Explicit selection",
        value:
          "Workspace, owner, destination unit, effective dates, ownership record.",
      },
      {
        label: "Unmapped means outside",
        value:
          "An unmapped workspace is not connected in any sense — not partially, not for metadata.",
      },
      {
        label: "Duplicates resolved",
        value:
          "Overlapping or ambiguous mappings must be resolved before activation.",
      },
      {
        label: "Related",
        value: (
          <Link
            href="#mapping-record"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
          >
            Workspace mapping <span aria-hidden="true">→</span>
          </Link>
        ),
      },
    ],
  },
  {
    tab: "2 · Govern",
    title: "Govern what may cross",
    lead: "Only authorized administrators select context categories, roles, privacy modes, policy scope, jurisdiction treatment, and retention. No prompt, request, or integration behavior expands that.",
    columns: [
      {
        label: "Context scope",
        value:
          "Approved categories only. A category absent from the registry is excluded by definition.",
      },
      {
        label: "Privacy mode",
        value:
          "Minimized, restricted, aggregated, review-gated, or excluded — set per mapping.",
      },
      {
        label: "Policy & jurisdiction",
        value:
          "Policy version, jurisdiction treatment, and retention are recorded on the mapping.",
      },
      {
        label: "Related",
        value: (
          <Link
            href="#bridge-governance"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
          >
            Governance controls <span aria-hidden="true">→</span>
          </Link>
        ),
      },
    ],
  },
  {
    tab: "3 · Review",
    title: "Review before anything lands",
    lead: "Context is an input, not a conclusion. An authorized person sees the source, the purpose, the limitations, and what accepting it will and will not affect.",
    columns: [
      {
        label: "Human authority",
        value:
          "The integration never determines time worked, payroll, performance, discipline, or compliance.",
      },
      {
        label: "Stated limitations",
        value:
          "Limitations travel with the context and remain visible at the point of review.",
      },
      {
        label: "Correction route",
        value:
          "Correction and escalation stay available, with the original preserved.",
      },
      {
        label: "Related",
        value: (
          <Link
            href="#review-and-health"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
          >
            Review before sync <span aria-hidden="true">→</span>
          </Link>
        ),
      },
    ],
  },
];

export default function ConnectionModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[740px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            The Locked Connection Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Map → Govern → Review
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Three steps, in this order, always. There is no configuration in which
            context reaches a workforce record without passing through all three.
          </p>

        </div>

        {/* Step Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={step.tab}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "rounded-full border border-emerald-800 bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white transition"
                    : "rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-bold text-sky-900 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                }
              >
                {step.tab}
              </button>
            );
          })}
        </div>

        {/* Active Step */}
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white px-7 pb-11 pt-7 shadow-[0px_8px_24px_0px_rgba(11,18,32,0.06)] dark:border-slate-800 dark:bg-slate-900">

          <h3 className="text-xl font-bold leading-7 text-sky-950 dark:text-white">
            {active.title}
          </h3>

          <p className="mt-2.5 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            {active.lead}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {active.columns.map((column) => (
              <div key={column.label} className="flex flex-col gap-1.5">

                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                  {column.label}
                </p>

                <p className="text-sm font-normal leading-6 text-sky-900 dark:text-slate-300">
                  {column.value}
                </p>

              </div>
            ))}
          </div>

        </div>

        {/* Transport Disclaimer */}
        <div className="mt-6 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-5 pb-4 pt-5 dark:border-emerald-900/40 dark:bg-emerald-950/10">

          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-700 text-xs font-bold leading-none text-emerald-700 dark:border-emerald-400 dark:text-emerald-400"
            aria-hidden="true"
          >
            i
          </span>

          <p className="text-base font-semibold leading-6 text-sky-950 dark:text-white">

            <span className="font-extrabold">
              Direction and method are not claimed here.
            </span>{" "}
            One-way or two-way sync, real-time delivery, APIs, webhooks, batch
            transfer, specific fields, latency, and providers are stated only
            where validated for your configuration. This page describes
            governance, not a transport guarantee.

          </p>

        </div>

      </div>
    </section>
  );
}
