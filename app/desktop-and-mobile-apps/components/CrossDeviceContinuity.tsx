"use client";

import { ReactNode } from "react";
import {
  FiSmartphone,
  FiMenu,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

const steps = [
  {
    title: "Local / session action",
    text: (
      <>
        Worker acts on a supported
        <br />
        surface
      </>
    ),
    icon: FiSmartphone,
  },
  {
    title: "Versioned record",
    text: (
      <>
        Stable ID · version · owner ·
        <br />
        scope
      </>
    ),
    icon: FiMenu,
  },
  {
    title: "Review & approval",
    text: "Human-controlled decision",
    icon: FiCheckCircle,
  },
  {
    title: "Evidence & outputs",
    text: "Ledger history · governed export",
    icon: FiShield,
  },
];

export default function CrossDeviceContinuity() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Header */}

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">
          Cross-Device Continuity
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
          Coherent records across surfaces —
          <br className="hidden md:block" />
          without impossible promises
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 dark:text-slate-400">
          Records move through versioned, permissioned synchronization.
          The latest visible item is not automatically authoritative;
          current status depends on version, approval, effective time,
          and reconciliation. No silent last-write-wins.
        </p>

        {/* Flow Cards */}

        <div className="mt-16 flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-center"
              >
                                <div
                  className="
                    flex
                    h-40
                    w-full
                    max-w-[260px]
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-6
                    text-center
                    shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    dark:border-slate-800
                    dark:bg-slate-900
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-50
                      dark:bg-emerald-900/30
                    "
                  >
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {step.text}
                  </p>
                </div>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <div className="mx-5 hidden lg:flex items-center">
                    <span className="text-2xl font-light text-teal-500">
                      →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Information Cards */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-5xl
            gap-6
            md:grid-cols-2
          "
        >
          <InfoCard title="Sync states you can see">
            Current, pending, queued, syncing, conflict, failed,
            stale, superseded, reconciled — with timestamps and
            time zones.
          </InfoCard>

          <InfoCard title="Conflicts resolve with a human">
            Competing changes show timestamps, sources, and owners;
            resolution requires an authorized user and a reason —
            refresh and retry never duplicate an action.
          </InfoCard>
        </div>
                {/* Bottom Notice */}

        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50
            px-6
            py-5
            text-center
            dark:border-emerald-900
            dark:bg-emerald-950/40
          "
        >
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            No exact synchronization latency or zero-data-loss promise is made
            without measured evidence and an approved SLA.
          </p>
        </div>

      </div>
    </section>
  );
}

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

function InfoCard({
  title,
  children,
}: InfoCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        text-left
        shadow-[0_6px_18px_rgba(14,31,61,0.05)]
        transition-all
        duration-300
        hover:shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-teal-600" />

        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
        {children}
      </p>
    </div>
  );
}
