"use client";

import React from "react";

export default function BillingClearly() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1000px]">

        {/* Eyebrow */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-600 dark:text-teal-400">
          Billing, Clearly
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          No surprises at checkout
        </h2>

        {/* Billing Information Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Annual Total */}
          <div className="min-h-[140px] rounded-xl bg-white p-5 outline outline-1 outline-slate-200 transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(14,31,61,0.06)] dark:bg-slate-900 dark:outline-slate-700 dark:hover:shadow-[0px_6px_18px_rgba(0,0,0,0.25)]">
            <h3 className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
              Annual total shown up front
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
              The full annual amount due is displayed before you enter any
              payment details — never hidden in a tooltip.
            </p>
          </div>

          {/* Trial or Buy */}
          <div className="min-h-[140px] rounded-xl bg-white p-5 outline outline-1 outline-slate-200 transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(14,31,61,0.06)] dark:bg-slate-900 dark:outline-slate-700 dark:hover:shadow-[0px_6px_18px_rgba(0,0,0,0.25)]">
            <h3 className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
              Trial or buy — your choice
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
              Start a 14-day trial with no card, or subscribe now and skip the
              trial. Your plan and billing cadence carry through.
            </p>
          </div>

          {/* Seat Caps */}
          <div className="min-h-[140px] rounded-xl bg-white p-5 outline outline-1 outline-slate-200 transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(14,31,61,0.06)] dark:bg-slate-900 dark:outline-slate-700 dark:hover:shadow-[0px_6px_18px_rgba(0,0,0,0.25)]">
            <h3 className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
              Seat caps are honest
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
              If your seat count exceeds a plan’s cap, we’ll point you to the
              next eligible plan rather than silently over-charging.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}