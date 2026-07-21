import React from "react";
import Link from "next/link";

export default function WorkforceDataCTA() {
  return (
    <section
      className="
        w-full 
        min-h-[384px]
        relative
        bg-gradient-to-r 
        from-teal-50 
        to-emerald-50
        dark:from-slate-950
        dark:to-slate-900
        transition-colors
      "
    >

      {/* Top Gradient Line */}
      <div
        className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-[3px]
          bg-gradient-to-r 
          from-teal-600 
          via-teal-500 
          to-teal-600
        "
      />

      <div
        className="
          max-w-[1440px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          text-center
        "
      >

        {/* Heading */}
        <h2
          className="
            pt-[55px]
            text-3xl
            sm:text-4xl
            font-semibold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          See What Your Workforce Data Is Really Telling You
        </h2>


        {/* Description */}
        <p
          className="
            mt-6
            max-w-[850px]
            mx-auto
            text-sm
            sm:text-base
            leading-7
            text-slate-500
            dark:text-slate-300
          "
        >
          ZoikoTime helps organizations move from fragmented workforce records
          to verified intelligence for productivity, payroll confidence, client
          billing, compliance, and operational control.
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

          {/* Primary Button */}
          <Link
  href="/request-a-demo"
  className="
    w-full
    sm:w-60
    h-12
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-teal-600
    hover:bg-teal-700
    text-white
    text-base
    font-semibold
    shadow-[0px_4px_16px_0px_rgba(0,157,140,0.30)]
    transition
  "
>
  Request a Demo
</Link>


          {/* Secondary Button */}
          <Link href="/start-free">
  <button
    className="
      w-full
      sm:w-60
      h-12
      rounded-lg
      bg-white
      dark:bg-slate-800
      border
      border-slate-200
      dark:border-slate-700
      text-slate-700
      dark:text-white
      text-sm
      font-medium
      hover:bg-slate-50
      dark:hover:bg-slate-700
      transition
    "
  >
    Start Free Trial
  </button>
</Link>
        </div>


        {/* Bottom Text */}
        <p
          className="
            mt-16
            pb-8
            text-xs
            sm:text-sm
            text-slate-400
            dark:text-slate-400
          "
        >
          For enterprise deployments, speak with ZoikoTime sales about
          implementation, security, governance, integrations, and multi-team
          rollout.
        </p>


      </div>

    </section>
  );
}