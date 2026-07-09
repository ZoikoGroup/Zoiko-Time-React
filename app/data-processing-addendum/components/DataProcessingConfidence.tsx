import React from "react";

export default function DataProcessingConfidence() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-950 dark:to-emerald-950 py-28 px-6">

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />


      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-10">
          Deploy ZoikoTime With Full{" "}
          <span className="text-teal-600">
            Data
          </span>
          <br />
          <span className="text-teal-600">
            Processing Confidence
          </span>
        </h2>


        {/* Description */}
        <p className="mt-8 text-base leading-7 text-slate-500 dark:text-slate-400">
          The DPA documentation suite is designed to accelerate legal review —
          not extend it.
          <br className="hidden md:block" />
          Everything your legal and compliance teams need is available for
          immediate
          <br className="hidden md:block" />
          download and review.
        </p>


        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button
            className="h-11 px-6 bg-teal-600 hover:bg-teal-700 
            rounded-md shadow-lg text-white text-sm font-semibold"
          >
            ↓ Download DPA + SCC Pack
          </button>


          <button
            className="h-11 px-7 bg-white dark:bg-slate-900 
            rounded-md border border-slate-200 dark:border-slate-700
            text-slate-700 dark:text-white text-sm font-medium"
          >
            Execute DPA
          </button>


          <button
            className="h-11 px-7 bg-white dark:bg-slate-900 
            rounded-md border border-slate-200 dark:border-slate-700
            text-slate-700 dark:text-white text-sm font-medium"
          >
            Contact Privacy Team
          </button>

        </div>

      </div>

    </section>
  );
}