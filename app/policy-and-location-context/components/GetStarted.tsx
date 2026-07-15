import React from "react";

export default function GetStarted() {
  return (
    <section
      className="
      w-full
      border-t
      border-teal-600
      bg-emerald-50
      dark:bg-slate-950
      py-14
      md:py-20
      transition-colors
      duration-300
      "
    >
      <div className="max-w-[1440px] mx-auto px-5 text-center">


        {/* Badge */}

        <div
          className="
          inline-flex
          items-center
          justify-center
          px-4
          py-1.5
          rounded-full
          bg-teal-500/10
          border
          border-teal-500/25
          "
        >
          <span
            className="
            text-teal-500
            text-xs
            font-semibold
            uppercase
            tracking-wide
            "
          >
            Get Started
          </span>
        </div>



        {/* Heading */}

        <h2
          className="
          mt-8
          text-black
          dark:text-white
          text-3xl
          md:text-5xl
          font-extrabold
          leading-tight
          "
        >
          If the Wrong Policy Is Applied,
          <br className="hidden md:block" />
          Everything Else Fails
        </h2>




        {/* Description */}

        <p
          className="
          mt-6
          max-w-xl
          mx-auto
          text-gray-600
          dark:text-gray-300
          text-sm
          md:text-base
          leading-7
          "
        >
          Join 500+ enterprises using ZoikoTime to ensure every
          <br className="hidden md:block" />
          workforce action is governed by the right rule — every time.
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

          <button
            className="
            w-52
            h-12
            rounded-lg
            bg-teal-500
            text-emerald-50
            text-base
            font-bold
            hover:bg-teal-600
            transition
            "
          >
            Request Demo →
          </button>



          {/* Secondary Button */}

          <button
            className="
            w-56
            h-12
            rounded-lg
            border
            border-teal-500
            text-teal-500
            text-base
            font-semibold
            hover:bg-teal-500/10
            transition
            "
          >
            Run Policy Scenario
          </button>


        </div>


      </div>
    </section>
  );
}