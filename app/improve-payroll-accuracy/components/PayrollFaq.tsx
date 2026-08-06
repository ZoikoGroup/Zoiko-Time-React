"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does ZoikoTime guarantee accurate payroll?",
    answer:
      "No, and we don't claim it. ZoikoTime helps improve the completeness, consistency, and traceability of the records that reach payroll. It does not calculate wages, file taxes, or guarantee payroll accuracy or legal compliance. The outcomes are directional — measure them in your own pilot.",
  },
  {
    question: "How does it actually reduce errors?",
    answer:
      "By fixing the inputs upstream, where most payroll errors begin. Complete time, attendance, and break context is captured with policy detail; deterministic rules classify it; exceptions route to human review before the cutoff rather than after; and every export is validated against your mapping, with blocked records held back instead of bouncing.",
  },
  {
    question: "Is the time classification AI?",
    answer:
      "No. Deterministic Time Classification is policy-bound and reviewable — not AI — and it never determines pay, discipline, or misconduct. Rules are versioned and effective-dated, so you can see which rule produced which result and when it took effect.",
  },
  {
    question: "Does improving accuracy mean monitoring workers?",
    answer:
      "No. Under any tier and any configuration, ZoikoTime does not collect screenshots, keystroke content, URL history, application names, or clipboard data, and it does not create an individual productivity score. Accuracy comes from transparent, reviewable records with human authority over every consequential decision.",
  },
  {
    question: "Will it work with our payroll system?",
    answer:
      "Approved records are validated against your mapping and delivered to payroll with acknowledgment and reconciliation, so fewer records bounce back. Available connectors and export formats vary by plan and deployment — confirm the systems you need with the ZoikoTime enterprise team during evaluation.",
  },
  {
    question: "How is this measured?",
    answer:
      "With control metrics rather than activity scores: payroll-ready rate, exception age, post-approval change rate, and export validation success. The pilot scorecard asks whether more records are export-ready by cutoff, whether exceptions resolve earlier, whether reviewers can reconstruct every change, and whether approved and delivered totals agree.",
  },
];

export default function PayrollFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Questions
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Payroll accuracy — answered
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-10 flex w-full max-w-[820px] flex-col gap-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
              >

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 px-[23px] pt-7 text-left ${
                    isOpen ? "pb-1" : "pb-7"
                  }`}
                >

                  <span className="text-base font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl font-normal leading-none text-[#10A28D] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>

                </button>

                {isOpen ? (
                  <p className="px-[23px] pb-7 text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                    {faq.answer}
                  </p>
                ) : null}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
