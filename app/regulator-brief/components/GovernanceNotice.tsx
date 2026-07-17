"use client";

import React from "react";

export default function GovernanceNotice() {
  return (
    <section className="px-6 py-10 bg-white dark:bg-slate-950">
      <div
        className="
        max-w-3xl
        mx-auto
        flex
        items-start
        gap-4
        bg-yellow-50
        dark:bg-yellow-900/20
        rounded-xl
        border
        border-orange-200
        dark:border-yellow-700
        p-5
        "
      >

        {/* Warning Icon */}
        <div
          className="
          w-4
          h-4
          mt-1
          shrink-0
          rounded-full
          border
          border-yellow-800
          dark:border-yellow-300
          flex
          items-center
          justify-center
          text-[11px]
          font-bold
          text-yellow-800
          dark:text-yellow-300
          "
        >
          !
        </div>


        {/* Text */}
        <p
          className="
          text-sm
          leading-5
          text-yellow-800
          dark:text-yellow-200
          "
        >
          <span className="font-bold text-yellow-900 dark:text-yellow-100">
            What ZoikoTime does not do.
          </span>{" "}
          No keystroke content, no screenshots, no URL history, and no invasive
          surveillance. ZoikoTime is designed for accountable workforce
          governance — and the brief is conservative about compliance language,
          stating what is verified and what is still under formal review.
        </p>

      </div>
    </section>
  );
}