import React from "react";

const FEATURES = [
  "AI-Guided Routing",
  "Enterprise-Grade Engagement",
  "Fast Response Times",
  "Dedicated Teams",
];

export default function Hero() {
  return (
    <section
      className="
      bg-[#F1FAFB]
      dark:bg-[#0B1220]
      px-6
      py-12
      md:px-12
      lg:px-54
      text-center
      "
    >

      <div className="mx-auto max-w-6xl">


        {/* Heading */}

        <h1
          className="
          text-3xl
          sm:text-4xl
          md:text-[50px]
          font-extrabold
          leading-tight
          text-[#0F2420]
          dark:text-white
          "
        >

          Connect With ZoikoTime —
          <br />

          <span className="text-[#00C6A9]">

            Routed, Prioritised, and Handled
            <br className="hidden sm:block" />
            With Precision

          </span>

        </h1>





        {/* Description */}

        <p
          className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          sm:text-lg
          text-slate-500
          dark:text-gray-400
          "
        >

          Every inquiry is intelligently routed to the right team —
          ensuring faster responses, higher-quality engagement,
          and better outcomes.

        </p>






        {/* AI Badge */}

        <div className="mt-6 flex justify-center">

          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#00C6A91F]
            border
            border-[#00C6A933]
            px-4
            py-1.5
            text-xs
            sm:text-sm
            font-semibold
            text-[#00C6A9]
            "
          >

            <span
              className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-500
              "
            />

            AI-Guided Routing · Intent Detection · Real-Time Assignment

          </span>

        </div>







       <div
  className="
    mx-auto
    mt-8
    flex
    max-w-xl
    items-center
    rounded-xl
    bg-white
    dark:bg-[#111827]
    p-1.5
    shadow-md
    shadow-emerald-900/5
    border
    border-transparent
    dark:border-gray-700
  "
>
  <input
    type="text"
    placeholder="Tell us what you need…"
    className="
      flex-1
      bg-transparent
      px-4
      py-2.5
      text-sm
      text-slate-700
      dark:text-white
      placeholder:text-[#191919A6]
      dark:placeholder:text-gray-500
      outline-none
    "
  />

  <button
    className="
      ml-2
      flex
      items-center
      gap-1
      whitespace-nowrap
      rounded-full
      bg-[#009D8C]
      px-5
      py-2.5
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-emerald-700
      flex-shrink-0
    "
  >
    Route Me
    <span>→</span>
  </button>
</div>






        {/* CTA Buttons */}

        <div
          className="
          mt-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          "
        >

          <button
            className="
            w-full
            sm:w-auto
            rounded-lg
            bg-[#009D8C]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-emerald-700
            "
          >

            Start Conversation

          </button>




          <button
            className="
            w-full
            sm:w-auto
            rounded-lg
            border
            border-[#009D8C]
            px-6
            py-3
            text-sm
            font-semibold
            text-[#009D8C]
            dark:text-[#00C6A9]
            transition
            hover:bg-emerald-50
            dark:hover:bg-gray-800
            "
          >

            Choose a Path Manually

          </button>


        </div>







        {/* Features */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-x-6
          gap-y-3
          text-xs
          sm:text-sm
          text-[#009D8C]
          "
        >

          {FEATURES.map((feature) => (

            <span
              key={feature}
              className="
              inline-flex
              items-center
              gap-1.5
              "
            >

              <span
                className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-500
                "
              />

              {feature}

            </span>

          ))}


        </div>


      </div>


    </section>
  );
}