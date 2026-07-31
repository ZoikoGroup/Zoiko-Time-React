"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  "How do I get started with an enterprise evaluation?",
  "What data does ZoikoTime collect or monitor?",
  "How does policy and human review work?",
  "How do pricing and contracts work?",
];

export default function EnterpriseFAQ() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex justify-center">
          <h2 className="text-center text-3xl font-black leading-9 text-sky-950 dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        {/* Questions */}
        <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-x-10 md:grid-cols-2">
          {faqs.map((question) => (
            <div
              key={question}
              className="flex min-h-[56px] items-center justify-between gap-4 border-b border-sky-950/10 dark:border-white/10"
            >
              <span className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {question}
              </span>

              <ChevronDown
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-sky-950/30 dark:text-white/40"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}