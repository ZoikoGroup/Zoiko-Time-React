import { Fragment } from "react";
import Image from "next/image";

const stages = [
  {
    icon: "/verify-time-attendance/Capture.svg",
    title: "Capture",
    description:
      "Approved time event received, source and timestamp preserved",
    owners: "System · Worker",
  },
  {
    icon: "/verify-time-attendance/Normalize.svg",
    title: "Normalize",
    description: "Timezone, duplicates, sync, ordering, calendar context",
    owners: "System · Admin",
  },
  {
    icon: "/verify-time-attendance/Classify.svg",
    title: "Classify",
    description: "Deterministic policy rules, effective-dated configuration",
    owners: "System · Policy owner",
  },
  {
    icon: "/verify-time-attendance/Flag.svg",
    title: "Flag",
    description: "Missing, conflicting, or unusual context surfaced neutrally",
    owners: "System",
  },
  {
    icon: "/verify-time-attendance/Review.svg",
    title: "Review",
    description: "Worker adds context; reviewer decides or escalates",
    owners: "Worker · Reviewer",
  },
  {
    icon: "/verify-time-attendance/Approve.svg",
    title: "Approve",
    description: "Required controls complete; permitted fields released",
    owners: "Authorized approver",
  },
];

export default function VerificationLifecycle() {
  return (
    <section id="verification-lifecycle" className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Verification Lifecycle
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            How a record becomes verified and approved
          </h2>

          <p className="max-w-[700px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Six stages, each with clear system and human responsibility,
            producing inspectable evidence at every step.
          </p>

        </div>

        {/* Stage Track */}
        <div className="mx-auto mt-11 grid w-full max-w-[1040px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:items-stretch xl:gap-0">

          {stages.map((stage, index) => (
            <Fragment key={stage.title}>

              <div className="flex flex-col items-center rounded-2xl border border-[#E4E9EE] bg-white p-4 text-center shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] xl:min-w-0 xl:flex-1 dark:border-slate-800 dark:bg-slate-900">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-slate-800">
                  <Image
                    src={stage.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                  />
                </span>

                <h3 className="mt-3.5 text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                  {stage.title}
                </h3>

                <p className="mt-1.5 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                  {stage.description}
                </p>

                <p className="mt-3.5 whitespace-nowrap text-[10px] font-semibold leading-5 text-[#0B8675] dark:text-emerald-400">
                  {stage.owners}
                </p>

              </div>

              {index < stages.length - 1 ? (
                <span
                  className="hidden shrink-0 items-center px-2 text-base leading-none text-[#6B7785] xl:flex dark:text-slate-500"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}

            </Fragment>
          ))}

        </div>

        {/* Classification Note */}
        <div className="mx-auto mt-8 flex max-w-[820px] items-start justify-center gap-2.5">

          <Image
            src="/verify-time-attendance/info.svg"
            alt=""
            width={14}
            height={14}
            className="mt-1 h-3.5 w-3.5 shrink-0"
          />

          <p className="text-center text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
            Deterministic Time Classification is policy-bound and reviewable —
            never branded as AI. AI, where used, is confined to verified anomaly
            flagging or signal quality; it decides nothing.
          </p>

        </div>

      </div>
    </section>
  );
}
