import React from "react";
import Link from "next/link";

export default function GetStartedEvidence() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-teal-50 to-emerald-50
        dark:from-slate-900 dark:to-emerald-950
        py-20
      "
    >
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />


      <div className="max-w-5xl mx-auto px-5 text-center">


        {/* Label */}
        <div className="flex justify-center items-center gap-3 mb-6">

          <span className="w-6 h-[2px] bg-teal-600" />

          <span className="
            text-xs font-bold tracking-wider uppercase
            text-teal-600
          ">
            Get Started
          </span>

        </div>



        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          If You Cannot Prove It, You
          <br />

          <span className="text-teal-600">
            Cannot Defend It
          </span>

        </h2>



        {/* Description */}
        <p
          className="
            mt-8
            max-w-3xl
            mx-auto
            text-base md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          ZoikoTime gives your organisation the forensic evidence
          infrastructure needed to verify, audit, and legally defend
          every workforce decision — with records built to the
          standard that legal proceedings demand.
        </p>




        {/* Buttons */}
        <div
          className="
            mt-12
            flex flex-col sm:flex-row
            justify-center
            gap-4
          "
        >


          {/* Primary Button */}
<Link
  href="/request-a-demo"
  className="
    h-12
    px-8
    rounded-lg
    bg-teal-600
    text-white
    text-base
    font-semibold
    shadow-[0px_4px_14px_rgba(0,157,140,0.28)]
    hover:bg-teal-700
    transition
    inline-flex
    items-center
    justify-center
    gap-3
  "
>
  <span className="text-lg">◉</span>
  Request Audit Demo
</Link>

{/* Secondary Button */}
<Link
  href="/evidence-capture#evidence-layer"
  className="
    h-12
    px-8
    rounded-lg
    border
    border-teal-600
    text-teal-600
    text-base
    font-semibold
    hover:bg-teal-50
    dark:hover:bg-teal-900/20
    transition
    inline-flex
    items-center
    justify-center
  "
>
  View Evidence Model
</Link>



        </div>



        {/* Third Button */}
<div className="mt-4">
  <Link
    href="/contact-sales"
    className="
      inline-flex
      h-12
      px-8
      rounded-lg
      border
      border-slate-300
      dark:border-slate-700
      text-slate-700
      dark:text-slate-300
      text-base
      font-medium
      hover:bg-white/50
      dark:hover:bg-slate-800
      transition
      items-center
      justify-center
    "
  >
    Speak to Compliance Expert
  </Link>
        </div>


      </div>

    </section>
  );
}