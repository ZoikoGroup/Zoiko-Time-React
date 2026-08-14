'use client'
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PolicyEvidenceQuestions() {
  const faqs = [
    {
      q: "Which policy version applied to a time record?",
      a: "The version that was effective for the record's date and scope is pinned to that record. The snapshot shows the policy name, version, effective range, owner, approval, scope, jurisdiction context, and whether it has since been superseded — as with FN-WT v3 above, which remains authoritative for its record even though v4 is now current.",
    },
    {
      q: "How can I see why a time record was classified the way it was?",
      a: "By examining the step-by-step deterministic trace. The viewer displays all source facts, applicability validations, matching conditions, and specific rules evaluated—with plain-language explanations and accessibility icons—showing exactly how the final classification state was derived.",
    },
    {
      q: "Does ZoikoTime use AI to classify time?",
      a: "No, ZoikoTime avoids non-deterministic AI for direct classification. All classifications run on clear, governed, and deterministic policy rules so that they can be fully explained, verified, and traced without requesting trust in a statistical model.",
    },
    {
      q: "Can a current policy change historical records?",
      a: "No. A policy version that applied to a record remains pinned. Substituting a current policy version retroactively would alter historical data integrity, which is why historical evidence is always tied to its effective version snapshot.",
    },
    {
      q: "Does policy evidence prove legal compliance?",
      a: "No. The system traces rule execution and classification outputs based on configured parameters. It does not establish that the policy was legally sufficient, that every source fact was correct, or that any subsequent human decision was justified.",
    },
    {
      q: "How are policy exceptions shown?",
      a: "Exceptions are logged as distinct evidence objects detailing the exception reference, requested scope, authority level, start and expiry dates, review deadlines, and fallback rules. The trace explicitly highlights where an exception altered standard calculations, such as in step 5 of the trace viewer.",
    },
    {
      q: "What if some policy detail is restricted for my role?",
      a: "The viewer displays a role-safe summary stating that details are restricted. To maintain security boundaries, hidden metadata or rules are never exposed through counts, names, or hover tooltips.",
    },
    {
      q: "Can a classification affect pay or discipline on its own?",
      a: "No. A classification routes or describes a configured record state and states export eligibility. It does not determine payroll outcomes, disciplinary actions, misconduct, or legal rights on its own.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Policy evidence questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200 dark:divide-slate-800 dark:border-slate-800">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-150">
                    {faq.q}
                  </span>
                  <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-250/70 outline outline-1 outline-offset-[-1px] outline-gray-200 dark:bg-slate-800 dark:outline-slate-700">
                    {isOpen ? (
                      <Minus className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Plus className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </span>
                </button>

                {/* Smooth Expand/Collapse Container */}
                <div
                  className={`mt-3 overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-550 dark:text-gray-400 leading-relaxed pl-1 pr-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
