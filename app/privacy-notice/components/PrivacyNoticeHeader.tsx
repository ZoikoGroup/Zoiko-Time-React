import React from "react";

export default function PrivacyNoticeHeader() {
  return (
    <section
      className="
        w-full
        px-4
        sm:px-6
        lg:px-0
        flex
        justify-center
        bg-white
        dark:bg-slate-950
        transition-colors
      "
    >
      <div
        className="
          w-full
          max-w-[696px]
          border-b-2
          border-slate-200
          dark:border-slate-800
          text-center
          py-10
          sm:py-12
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            font-extrabold
            leading-10
            text-slate-900
            dark:text-white
          "
        >
          Privacy Notice
        </h1>

        {/* Description */}
        <p
          className="
            mt-6
            text-sm
            sm:text-base
            font-normal
            leading-6
            sm:leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          This Privacy Notice explains how Zoiko Tech Inc. collects, uses,
          discloses, retains, protects, and otherwise processes personal
          information in connection with ZoikoTime.
        </p>

        {/* Effective Badge */}
        <div
          className="
            mt-6
            mx-auto
            w-fit
            px-4
            h-8
            flex
            items-center
            justify-center
            rounded-full
            bg-emerald-50
            dark:bg-emerald-950/40
            border
            border-teal-600/20
          "
        >
          <span
            className="
              text-xs
              font-bold
              text-teal-700
              dark:text-teal-400
            "
          >
            Effective May 1, 2026
          </span>
        </div>
      </div>
    </section>
  );
}