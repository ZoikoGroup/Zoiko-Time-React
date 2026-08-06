"use client";

import { useState } from "react";

export default function AnalyticsQuestionsFAQ() {
  const faqs = [
    {
      question: "What is ZoikoTime Analytics & Reporting?",
      answer:
        "Defined, governed metrics, dashboards, reports, and exports based on approved workforce records — with provenance, quality, privacy, permissions, human interpretation, and preserved evidence.",
    },
    {
      question: "Is this employee-monitoring software?",
      answer:
        "No. ZoikoTime Analytics focuses on governed workforce records and reporting rather than surveillance or hidden monitoring.",
    },
    {
      question: "Does ZoikoTime score employee productivity?",
      answer:
        "No. ZoikoTime does not create productivity scores or hidden employee rankings.",
    },
    {
      question: "Can managers drill down to individuals?",
      answer:
        "Access depends on permissions, privacy controls, approved purpose, and organizational policy.",
    },
    {
      question: "How accurate are the reports?",
      answer:
        "Reports are based on governed definitions, quality checks, source records, and documented limitations. Accuracy depends on source data quality.",
    },
    {
      question: "Can reports be scheduled or exported?",
      answer:
        "Approved reports can be scheduled or exported according to configured permissions and governance controls.",
    },
    {
      question: "What happens after a correction?",
      answer:
        "Corrections preserve history through recalculation records, versioning, and evidence lineage.",
    },
    {
      question: "Does this guarantee payroll or legal compliance?",
      answer:
        "No. ZoikoTime provides governance capabilities, while compliance remains a shared responsibility.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="w-full px-4 py-16 sm:px-8 lg:px-32">

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10">


        {/* Header */}
        <div className="flex max-w-[700px] flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
            Analytics Questions Answered
          </p>


          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Eight Answers, No Accuracy Guarantee
          </h2>

        </div>



        {/* FAQ */}

        <div className="w-full max-w-[860px] border-t border-slate-200 dark:border-slate-700">


          {faqs.map((item, index) => (

            <div
              key={item.question}
              className="border-b border-slate-200 dark:border-slate-700"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                px-1
                py-5
                text-left
                "
              >

                <span
                  className="
                  text-base
                  font-bold
                  text-slate-900
                  dark:text-white
                  "
                >
                  {item.question}
                </span>


                <span
                  className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  text-base
                  font-bold
                  text-emerald-500
                  dark:border-slate-600
                  dark:bg-slate-800
                  "
                >
                  {open === index ? "−" : "+"}
                </span>


              </button>



              {open === index && (

                <div className="px-1 pb-5">

                  <p
                    className="
                    max-w-[680px]
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-slate-300
                    "
                  >
                    {item.answer}
                  </p>

                </div>

              )}


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}