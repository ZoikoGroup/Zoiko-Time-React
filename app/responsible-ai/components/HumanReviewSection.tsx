import React from "react";

export default function HumanReviewSection() {
  return (
    <section className="w-full overflow-hidden px-5 py-12 sm:px-8 lg:px-0">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center">

        {/* Label */}
        <div className="text-center text-xs font-semibold uppercase tracking-widest leading-5 text-teal-600">
          Human Review
        </div>

        {/* Heading */}
        <h2
          className="
          mt-2 max-w-[703px] text-center
          text-2xl font-bold leading-10
          text-slate-800
          sm:text-3xl
          lg:text-4xl
          dark:text-white
          "
        >
          Human review and decision boundaries
        </h2>

        {/* Description */}
        <p
          className="
          mt-4 max-w-[652px]
          text-center text-sm font-normal leading-7
          text-gray-500
          sm:text-base
          dark:text-gray-400
          "
        >
          Workforce records can affect payroll, billing, employee relations,
          legal review, and trust. ZoikoTime keeps a human in the loop.
        </p>


        {/* Cards */}
        <div
          className="
          mt-12 grid w-full gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {/* Authorized reviewers */}
          <div
            className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-7
            shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]
            dark:border-slate-700
            dark:bg-slate-900
            "
          >
            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Authorized reviewers
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Managers, HR, legal, operations, and administrators review
              signals before action.
            </p>
          </div>


          {/* Decision boundaries */}
          <div
            className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-7
            shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]
            dark:border-slate-700
            dark:bg-slate-900
            "
          >
            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Decision boundaries
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              AI organizes and highlights; people decide. Sensitive outcomes
              are never automated.
            </p>
          </div>


          {/* Override */}
          <div
            className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-7
            shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]
            dark:border-slate-700
            dark:bg-slate-900
            "
          >
            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Override &amp; dismissal
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Every signal can be reviewed, corrected, escalated, or dismissed
              by an authorized user.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}