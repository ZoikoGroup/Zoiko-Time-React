"use client";

export default function ProcurementEvaluation() {
  return (
    <section
      className="
        w-full
        bg-gray-50
        text-slate-800
        dark:bg-slate-900
        dark:text-slate-100
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[384px]
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          px-4
          py-16
          text-center
          sm:px-6
          lg:px-8
          lg:py-20
        "
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-teal-700
              dark:text-teal-400
            "
          >
            For Procurement &amp; Evaluation
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-4
            max-w-[700px]
            text-center
            text-3xl
            font-semibold
            leading-[1.15]
            tracking-tight
            text-slate-800
            dark:text-slate-100
            sm:text-4xl
            sm:leading-10
          "
        >
          Support scope, evidence, and
          <br className="hidden sm:block" />
          escalation are reviewable.
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-[650px]
            text-center
            text-sm
            font-normal
            leading-6
            text-gray-500
            dark:text-slate-400
            sm:text-base
          "
        >
          Security, privacy, data handling, and case governance are available
          for evaluation — without inventing SLAs or coverage that hasn't been
          verified.
        </p>
      </div>
    </section>
  );
}