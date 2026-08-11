import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const stages = [
  {
    title: "Source",
    fields: [
      { label: "Material event", value: "Clock-in captured" },
      { label: "Actor", value: "Time capture service" },
    ],
  },
  {
    title: "Validate & Contextualize",
    fields: [
      { label: "Material event", value: "Location & device confirmed" },
      { label: "State", value: "Contextualized" },
    ],
  },
  {
    title: "Classify",
    fields: [
      { label: "Material event", value: "Matched to policy v3.2" },
      { label: "Next action", value: "Await review if flagged" },
    ],
  },
  {
    title: "Review & Correct",
    fields: [
      { label: "Material event", value: "Worker correction submitted" },
      { label: "Owner", value: "Assigned reviewer" },
    ],
  },
  {
    title: "Approve & Resolve",
    fields: [
      { label: "Material event", value: "Reviewer decision recorded" },
      { label: "State", value: "Approved · v4" },
    ],
  },
  {
    title: "Release",
    fields: [
      { label: "Material event", value: "Sent to downstream system" },
      { label: "State", value: "Queued for delivery" },
    ],
  },
  {
    title: "Acknowledge & Reconcile",
    fields: [
      { label: "Material event", value: "Destination receipt matched" },
      { label: "Next action", value: "Resolve if mismatched" },
    ],
  },
  {
    title: "Retain / Restrict / Redact / Archive",
    fields: [
      { label: "Material event", value: "Retention policy applied" },
      { label: "Owner", value: "Privacy & lifecycle admin" },
    ],
  },
];

const exceptions = [
  {
    label: "Late-arriving event — shown, not hidden",
    icon: "alert-amber.svg",
    tone: "bg-orange-100 text-yellow-600",
  },
  {
    label: "Conflicting evidence — flagged for review",
    icon: "alert-red.svg",
    tone: "bg-pink-100 text-pink-700",
  },
  {
    label: "Withdrawn evidence — record kept, evidence marked",
    icon: "cross-gray.svg",
    tone: "bg-gray-100 text-slate-500",
  },
  {
    label: "Reopened case — new linked history, not a reset",
    icon: "reopen-purple.svg",
    tone: "bg-violet-100 text-purple-800",
  },
];

export default function ContinuityLifecycle() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Evidence-Continuity Lifecycle"
          title="One record, eight connected stages."
          description="Late events, conflicts, and withdrawn evidence are shown as part of the record — not smoothed into a falsely clean timeline."
          descriptionClassName="max-w-[640px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-0">
          {stages.map((stage, index) => (
            <div key={stage.title} className="relative xl:pr-3">
              {index > 0 && (
                <Image
                  src="/evidence-ledger/arrow-mark.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="absolute -left-2 top-8 hidden xl:block"
                />
              )}

              <div className="h-full rounded-2xl border border-gray-200 p-4 dark:border-slate-800">
                <span
                  className={`${poppins.className} flex h-6 w-6 items-center justify-center rounded-full bg-sky-950 text-[10px] font-bold text-white dark:bg-teal-600`}
                >
                  {index + 1}
                </span>

                <h3
                  className={`${poppins.className} mt-4 text-sm font-bold leading-5 text-sky-950 dark:text-white`}
                >
                  {stage.title}
                </h3>

                {stage.fields.map((field) => (
                  <div key={field.label} className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      {field.label}
                    </p>

                    <p className="mt-1 text-xs leading-4 text-slate-600 dark:text-slate-400">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exception handling */}
        <div className="mt-8 flex flex-wrap gap-3">
          {exceptions.map((exception) => (
            <span
              key={exception.label}
              className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-bold ${exception.tone}`}
            >
              <Image
                src={`/evidence-ledger/${exception.icon}`}
                alt=""
                width={11}
                height={11}
                aria-hidden="true"
              />
              {exception.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
