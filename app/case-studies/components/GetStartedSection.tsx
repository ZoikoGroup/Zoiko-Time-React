import React from "react";
import Link from "next/link";

export default function GetStartedSection() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-br
        from-teal-50
        to-emerald-50
        dark:from-slate-950
        dark:to-slate-900
        transition-colors
        px-4
        sm:px-6
        lg:px-0
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          min-h-[384px]
          flex
          flex-col
          items-center
          text-center
          justify-center
          py-12
          sm:py-16
        "
      >

        {/* Label */}
        <div
          className="
            text-teal-600
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
            mb-5
          "
        >
          Get Started
        </div>


        {/* Heading */}
        <h2
          className="
            max-w-[700px]
            text-slate-900
            dark:text-white
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-extrabold
            leading-tight
          "
        >
          Quantify the Value of ZoikoTime for{" "}
          <span
            className="
              text-teal-600
              dark:text-teal-400
            "
          >
            Your Organisation
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            max-w-[940px]
            mt-6
            text-slate-500
            dark:text-slate-400
            text-base
            sm:text-lg
            leading-7
          "
        >
          Launch the ROI calculator, request a tailored demo, or download the
          evaluation pack — everything you need to build the business case and
          move from evaluation to deployment.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
            w-full
            sm:w-auto
            justify-center
          "
        >

          {/* Primary Button */}
<Link
  href="/calculate-your-roi"
  className="
    inline-flex
    w-full
    sm:w-52
    h-12
    items-center
    justify-center
    rounded-md
    bg-teal-600
    text-white
    text-base
    font-semibold
    shadow-[0px_4px_14px_rgba(0,157,140,0.28)]
    transition
    hover:bg-teal-700
  "
>
  Launch ROI Calculator
</Link>

{/* Secondary Button */}
<Link
  href="/request-a-demo"
  className="
    inline-flex
    w-full
    sm:w-52
    h-12
    items-center
    justify-center
    rounded-md
    border
    border-slate-200
    bg-white
    text-slate-700
    text-base
    font-medium
    transition
    hover:bg-slate-50
    dark:border-slate-700
    dark:bg-slate-900
    dark:text-slate-200
    dark:hover:bg-slate-800
  "
>
  Request Demo
</Link>

        </div>

      </div>
    </section>
  );
}