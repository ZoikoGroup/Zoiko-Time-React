import React from "react";

export default function CaseStudyHero() {
  return (
    <section
      className="
        w-full
        min-h-[551px]
        bg-gradient-to-br
        from-emerald-50
        via-slate-50
        to-white
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        overflow-hidden
        flex
        justify-center
        px-4
        transition-colors
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          text-center
          pt-12
          sm:pt-16
          lg:pt-20
        "
      >

        <p
          className="
            text-teal-600
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Case Studies & ROI
        </p>


        <h1
          className="
            mt-8
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          Proven Financial, Operational,
          <br className="hidden sm:block" />
          and Compliance Impact{" "}
          <span className="text-teal-600">
            At Enterprise Scale
          </span>
        </h1>


        <p
          className="
            mt-8
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-slate-500
            dark:text-slate-400
          "
        >
          Explore how organisations use ZoikoTime to reduce cost,
          <br className="hidden md:block" />
          improve workforce accuracy, and strengthen compliance —
          with measurable, defensible results.
        </p>


        <div
          className="
            mt-10
            mx-auto
            max-w-3xl
            rounded-xl
            border
            border-teal-600/20
            bg-emerald-50
            dark:bg-slate-800
            px-4
            sm:px-6
            py-4
            text-sm
            font-bold
            text-teal-700
            dark:text-teal-400
          "
        >
          ZoikoTime delivers quantifiable ROI across payroll accuracy,
          operational efficiency, and compliance risk reduction.
        </div>


        <div
          className="
            mt-10
            flex
            justify-center
            gap-4
            flex-col
            sm:flex-row
          "
        >

          <button
            className="
              w-full
              sm:w-52
              h-12
              rounded-md
              bg-teal-600
              text-white
              text-base
              font-semibold
              shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)]
            "
          >
            Launch ROI Calculator
          </button>


          <button
            className="
              w-full
              sm:w-52
              h-12
              rounded-md
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              text-slate-700
              dark:text-slate-200
              text-base
              font-medium
            "
          >
            Explore Case Studies
          </button>

        </div>


        <div
          className="
            mt-8
            flex
            justify-center
            gap-3
            flex-wrap
          "
        >
          {[
            "CFO-Validated Outcomes",
            "Enterprise Deployments",
            "Audit-Ready Results",
            "Measurable ROI",
          ].map((item) => (
            <div
              key={item}
              className="
                h-8
                px-4
                rounded-full
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                shadow-sm
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-slate-700
                dark:text-slate-300
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}