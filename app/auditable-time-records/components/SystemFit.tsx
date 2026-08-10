"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiLink,
  FiGitBranch,
  FiSettings,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const systemFitItems = [
  {
    title: "Source connection",
    description:
      "Provider, connection ID, scope, last verified sync, and freshness expectation.",
    icon: "connection",
  },
  {
    title: "Identity & mapping",
    description:
      "Subject mapping, workspace, project, pay period, and policy scope with mapping version.",
    icon: "mapping",
  },
  {
    title: "Transformation",
    description:
      "Input fields, calculation version, rounding, timezone, and rejected-value handling.",
    icon: "transformation",
  },
  {
    title: "Transmission",
    description:
      "Target, object ID, payload version, idempotency key, and response state.",
    icon: "transmission",
  },
  {
    title: "Reconciliation",
    description:
      "Expected versus returned record, amount, version, and status.",
    icon: "reconciliation",
  },
];

function SystemFitIcon({ type }: { type: string }) {
  const iconClass =
    "h-[19px] w-[19px] text-sky-900 dark:text-sky-300";

  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#3FB97A]/10 dark:bg-[#3FB97A]/15">
      {type === "connection" && (
        <FiLink className={iconClass} />
      )}

      {type === "mapping" && (
        <FiGitBranch className={iconClass} />
      )}

      {type === "transformation" && (
        <FiSettings className={iconClass} />
      )}

      {type === "transmission" && (
        <FiSend className={iconClass} />
      )}

      {type === "reconciliation" && (
        <FiCheckCircle className={iconClass} />
      )}
    </div>
  );
}

export default function SystemFit() {
  return (
    <section className="w-full bg-white py-10 transition-colors sm:py-14 lg:py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-5 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              System Fit
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
            Integration, Transformation &amp; Reconciliation
          </h2>
        </div>

        {/* ================= SYSTEM FIT CARDS ================= */}
        <div className="grid w-full grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-5">
          {systemFitItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                min-h-[235px]
                w-full
                flex-col
                items-start
                gap-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.2)]
                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-slate-600
                dark:hover:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]
              "
            >
              {/* Icon */}
              <SystemFitIcon type={item.icon} />

              {/* Title */}
              <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= REGISTRY NOTE ================= */}
        <div className="flex w-full flex-col items-center pb-1 text-center">
          <p className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
            Provider names, real-time claims, and reconciliation capability
            are shown only when verified in the integration registry —{" "}
            <Link
              href="/get-started"
              className="font-semibold text-[#3FB97A] transition-colors hover:text-[#35A86E]"
            >
              Get a demo
            </Link>
            .
          </p>
        </div>

        {/* ================= IMAGE + EXPLANATION ================= */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-[20px] pt-3 shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] lg:grid-cols-2 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]">
          {/* Image */}
          <div className="relative min-h-[280px] w-full bg-slate-100 sm:min-h-[360px] lg:min-h-[405px] dark:bg-slate-900">
            <Image
              src="/auditable-time-records/system-fit.png"
              alt="System integration and reconciliation"
              width={572}
              height={405}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dark Explanation Panel */}
          <div className="flex min-h-[280px] w-full flex-col justify-center bg-slate-900 px-6 py-10 sm:min-h-[360px] sm:px-9 sm:py-14 lg:min-h-[405px] lg:px-9 lg:py-20 dark:bg-slate-800">
            <div className="flex w-full flex-col items-start">
              {/* Heading */}
              <h3 className="text-lg font-bold leading-8 text-white">
                Every connection stays inspectable.
              </h3>

              {/* Description */}
              <p className="pt-2.5 text-sm font-normal leading-6 text-white/70">
                Mapping versions, transform versions, and reconciliation rules
                are first-class evidence — linked to the records they affect,
                not buried in a technical log only IT can read.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}