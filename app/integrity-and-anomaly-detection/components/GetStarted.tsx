import React from "react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-teal-50
        to-emerald-50
        dark:from-slate-900
        dark:to-emerald-950
        py-16
      "
    >

      {/* Top Line */}
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
          max-w-[1230px]
          mx-auto
          px-5
          text-center
        "
      >


        {/* Label */}
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          "
        >
          Get Started
        </p>



        {/* Heading */}
        <h2
          className="
            mt-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          If You Cannot Control Integrity,
          <br className="hidden sm:block" />

          <span className="text-teal-600">
            {" "}You Cannot Control Risk
          </span>

        </h2>



        {/* Description */}
        <p
          className="
            mt-6
            max-w-5xl
            mx-auto
            text-base
            md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-300
          "
        >
          ZoikoTime gives your organisation the adversarial detection
          intelligence, automated control infrastructure, and forensic
          evidence capability needed to protect the integrity of every
          workforce decision — before manipulation reaches your financial
          records.
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
            gap-5
          "
        >

          {/* Request Demo */}
<Link
  href="/request-a-demo"
  className="
    w-full
    sm:w-52
    h-12
    flex
    items-center
    justify-center
    gap-3
    rounded-lg
    bg-teal-600
    text-white
    text-base
    font-semibold
    shadow-[0_4px_14px_rgba(0,157,140,0.28)]
    hover:bg-teal-700
    transition
  "
>
  <span className="flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="text-white"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10 8.8L15.5 12L10 15.2V8.8Z"
      fill="currentColor"
    />
  </svg>
</span>

  Request Demo
</Link>



{/* Run Fraud Scenario */}
<Link
  href="/integrity-and-anomaly-detection#detection-flow"
  className="
    w-full
    sm:w-52
    h-12
    rounded-lg
    border
    border-teal-600
    text-teal-600
    text-base
    font-semibold
    hover:bg-teal-50
    dark:hover:bg-teal-950
    transition
    flex
    items-center
    justify-center
  "
>
  Run Fraud Scenario
</Link>


        </div>


      </div>

    </section>
  );
}