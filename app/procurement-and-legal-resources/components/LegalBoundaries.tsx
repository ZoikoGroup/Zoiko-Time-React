"use client";

import { FiShield } from "react-icons/fi";

const boundaries = [
  {
    title: "Not automatic approval",
    description:
      "Controlled and customer-specific resources always pass through human review — no request is approved by default.",
  },
  {
    title: "Not legal advice",
    description:
      "Templates and summaries support your own legal review; they do not substitute for counsel in your jurisdiction.",
  },
  {
    title: "Not a certification claim",
    description:
      "ZoikoTime lists only certifications and attestations currently held, with evidence, and never implies coverage it doesn't have.",
  },
  {
    title: "Not employee monitoring",
    description:
      "Nothing in this Evidence Center, or in ZoikoTime itself, includes screenshots, keystroke capture, or productivity scoring.",
  },
];

export default function LegalBoundaries() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Legal &amp; Contract Boundaries
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            What this page is — and what it is not
          </h2>
        </div>

        {/* Hero Notice */}
        <div className="mt-10 flex w-full max-w-[880px] gap-4 rounded-2xl bg-slate-800 p-7 shadow-[0px_10px_30px_rgba(14,31,61,0.10)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <FiShield className="h-5 w-5 text-teal-400" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
              A Governed Evidence Center
            </p>

            <p className="mt-3 text-base leading-7 text-white/90">
              This page provides documentation access, not legal advice,
              guaranteed access to any document, unsupported certifications,
              compliance guarantees, or employee monitoring capability of any
              kind.
            </p>
          </div>
        </div>

        {/* Boundary Cards */}
        <div className="mt-10 flex w-full max-w-[980px] flex-col gap-5">
          {boundaries.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}