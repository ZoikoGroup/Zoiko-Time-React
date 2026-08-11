"use client";

import React from "react";

const customerProofItems = [
  {
    title: "Multi-entity rollout",
    description:
      "Reference story available under NDA once customer approval is documented.",
  },
  {
    title: "Cutoff reliability",
    description:
      "Outcome metrics shared only with evidence-approved, customer-verified figures.",
  },
  {
    title: "Works-council review",
    description:
      "Privacy & governance reference available where permitted.",
  },
];

export default function CustomerProof() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              Customer Proof
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            Evidence-approved — only where permitted
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            We publish outcomes and references only with documented customer
            approval.
          </p>
        </div>

        {/* ================= CUSTOMER PROOF CARDS ================= */}
        <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {customerProofItems.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[190px] flex-col items-center rounded-2xl border border-gray-300 bg-white px-5 py-6 text-center shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_25px_0px_rgba(14,31,61,0.08)] dark:border-slate-700 dark:bg-slate-950"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center rounded-full border border-emerald-100 bg-white px-2.5 py-1 shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-emerald-400/20 dark:bg-slate-900">
                <span className="text-[10px] font-bold leading-4 text-gray-700 dark:text-slate-300">
                  Pending approval
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-base font-bold leading-6 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-1 max-w-[280px] text-xs leading-5 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}