import React from "react";
import { Check, X, AlertTriangle } from "lucide-react";

export default function AIBoundariesSection() {
  const supportItems = [
    "Missing or incomplete record detection",
    "Anomaly identification",
    "Time and activity pattern summaries",
    "Policy exception flagging",
    "Review prioritization",
    "Administrative workflow assistance",
  ];

  const restrictedItems = [
    "Whether a worker should be disciplined",
    "Whether a worker should be terminated",
    "Whether wages should be withheld or adjusted",
    "Whether an organization is legally compliant",
    "Whether a worker is exempt or non-exempt",
    "Whether a person is trustworthy or dishonest",
  ];

  return (
    <section className="w-full px-5 py-12 sm:px-8 lg:px-0">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          Boundaries
        </p>

        <h2 className="mt-2 max-w-[684px] text-center text-2xl font-bold leading-10 text-slate-800 sm:text-3xl lg:text-4xl dark:text-white">
          AI supports review — it does not decide
        </h2>

        <p className="mt-4 max-w-[642px] text-center text-sm leading-7 text-gray-500 sm:text-base dark:text-gray-400">
          ZoikoTime is designed so AI-assisted signals can be reviewed by
          authorized people before decisions are made.
        </p>


        {/* Comparison Box */}
        <div
          className="
          mt-12 grid w-full max-w-[920px]
          grid-cols-1 overflow-hidden rounded-2xl
          border border-slate-200
          shadow-[0px_6px_18px_rgba(14,31,61,0.05)]
          lg:grid-cols-2
          dark:border-slate-700
          "
        >

          {/* AI Support */}
          <div className="bg-white dark:bg-slate-900">

            <div className="bg-teal-600 px-5 py-4">
              <h3 className="text-base font-bold text-white">
                AI can support
              </h3>
            </div>

            <div>
              {supportItems.map((item, index) => (
                <div
                  key={item}
                  className={`
                  flex items-center gap-4 px-5 py-3
                  ${index !== 0 ? "border-t border-slate-200 dark:border-slate-700" : ""}
                  `}
                >
                  <Check
                    size={16}
                    className="text-teal-600"
                    strokeWidth={2}
                  />

                  <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>


          {/* AI Should Not Decide */}
          <div
            className="
            border-t border-slate-200
            bg-white
            lg:border-l lg:border-t-0
            dark:border-slate-700
            dark:bg-slate-900
            "
          >

            <div className="bg-slate-800 px-5 py-4">
              <h3 className="text-base font-bold text-white">
                AI should not decide
              </h3>
            </div>


            <div>
              {restrictedItems.map((item, index) => (
                <div
                  key={item}
                  className={`
                  flex items-center gap-4 px-5 py-3
                  ${index !== 0 ? "border-t border-slate-200 dark:border-slate-700" : ""}
                  `}
                >
                  <X
                    size={16}
                    className="text-orange-700"
                    strokeWidth={2}
                  />

                  <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* Warning */}
        <div
          className="
          mt-8 flex w-full max-w-[760px]
          items-center gap-3 rounded-xl
          border border-orange-200
          bg-yellow-50
          px-5 py-4
          dark:border-orange-900
          dark:bg-yellow-950/30
          "
        >

          <AlertTriangle
            size={18}
            className="text-yellow-800 dark:text-yellow-500"
          />

          <p className="text-sm leading-5">
            <span className="font-bold text-yellow-900 dark:text-yellow-400">
              Final workforce decisions remain with the customer
            </span>{" "}
            <span className="text-yellow-800 dark:text-yellow-300">
              and its authorized human reviewers.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}