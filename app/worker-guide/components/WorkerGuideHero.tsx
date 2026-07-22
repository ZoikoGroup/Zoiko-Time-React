import Link from "next/link";
import React from "react";

export default function WorkerGuideHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        bg-gradient-to-b
        from-white
        to-gray-50
        dark:from-slate-950
        dark:to-slate-900
        py-16
        sm:py-20
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          top-[-160px]
          left-1/2
          -translate-x-1/2
          w-[760px]
          h-96
          rounded-full
          bg-[radial-gradient(circle,rgba(13,148,136,0.10),transparent_70%)]
        "
      />

      <div
        className="
          relative
          max-w-4xl
          mx-auto
          px-5
          sm:px-8
          text-center
        "
      >
        {/* Label */}
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            leading-5
            text-teal-600
            dark:text-teal-400
          "
        >
          Worker Guide
        </p>

        {/* Heading */}
        <h1
          className="
            mt-6
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-slate-800
            dark:text-white
          "
        >
          Understand your ZoikoTime{" "}
          <span className="text-teal-600 dark:text-teal-400">
            work records
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-3xl
            mx-auto
            text-sm
            sm:text-base
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          A clear guide for workers using ZoikoTime to view time records,
          timesheets, correction options, mobile access, work-session context,
          screenshots where enabled, and support pathways.
        </p>

        {/* Buttons */}
<div
  className="
    mt-10
    flex
    flex-col
    sm:flex-row
    justify-center
    items-center
    gap-4
  "
>
  <Link
    href="/help-center"
    className="
      w-full
      sm:w-auto
      h-11
      px-8
      rounded-[10px]
      bg-teal-600
      text-white
      text-base
      font-semibold
      shadow-[0_6px_16px_rgba(16,162,141,0.28)]
      hover:bg-teal-700
      transition
      flex
      items-center
      justify-center
      text-center
    "
  >
    Visit Help Center
  </Link>

  <Link
    href="/product-documentation"
    className="
      w-full
      sm:w-auto
      h-11
      px-8
      rounded-[10px]
      bg-white
      dark:bg-slate-900
      border
      border-gray-300
      dark:border-slate-700
      text-slate-800
      dark:text-white
      text-base
      font-semibold
      hover:bg-gray-50
      dark:hover:bg-slate-800
      transition
      flex
      items-center
      justify-center
      text-center
    "
  >
    View Product Documentation
  </Link>
</div>
      </div>
    </section>
  );
}