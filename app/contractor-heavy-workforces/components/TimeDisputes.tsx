"use client";

import {
  FiAlertTriangle,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const disputeSteps = [
  {
    title: "Flagged",
    description: (
      <>
        A record is disputed by the contractor or project lead.
      </>
    ),
    type: "warning",
    icon: FiAlertTriangle,
  },
  {
    title: "Notified",
    description: (
      <>
        Both parties are notified and can add context to the record.
      </>
    ),
    type: "warning",
    icon: FiClock,
  },
  {
    title: "Escalated (if needed)",
    description: (
      <>
        Unresolved disputes route to finance or HR for review.
      </>
    ),
    type: "warning",
    icon: FiArrowRight,
  },
  {
    title: "Resolved",
    description: (
      <>
        The outcome is recorded with a note, closing the evidence trail.
      </>
    ),
    type: "success",
    icon: FiCheckCircle,
  },
];

type StatusType = "warning" | "success";

function StatusIcon({
  type,
  Icon,
}: {
  type: StatusType;
  Icon: React.ElementType;
}) {
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
        type === "warning"
          ? "bg-orange-100 dark:bg-orange-950/40"
          : "bg-emerald-50 dark:bg-emerald-950/40"
      }`}
    >
      <Icon
        size={15}
        strokeWidth={1.8}
        className={
          type === "warning"
            ? "text-amber-700 dark:text-amber-400"
            : "text-teal-600 dark:text-teal-400"
        }
      />
    </div>
  );
}

export default function TimeDisputes() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          py-16
          sm:px-8
          lg:py-20
        "
      >
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Time Disputes &amp; Corrections
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            When a record doesn&apos;t match
            <br className="hidden sm:block" />
            expectations.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {disputeSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  flex
                  min-h-[126px]
                  flex-col
                  items-start
                  rounded-[10px]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Icon */}
                <StatusIcon
                  type={step.type as StatusType}
                  Icon={Icon}
                />

                {/* Title */}
                <div className="mt-3 w-full">
                  <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-0.5 w-full text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}