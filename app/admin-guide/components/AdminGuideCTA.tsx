import React from "react";

export default function AdminGuideCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        bg-gradient-to-br
        from-teal-50
        to-emerald-50
        dark:from-slate-900
        dark:to-slate-950
        py-16
        sm:py-20
      "
    >
      {/* Top gradient line */}
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
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          lg:px-0
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-10
        "
      >
        {/* Content */}
        <div className="max-w-2xl">
          <h2
            className="
              text-3xl
              sm:text-4xl
              font-semibold
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            Need Help Configuring ZoikoTime for Your Organization?
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            Review the Admin Guide, explore implementation resources, or speak
            with ZoikoTime about your workforce governance requirements and
            implementation goals.
          </p>
        </div>

        {/* Actions */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            lg:flex-col
            gap-3
            lg:min-w-[160px]
          "
        >
          <button
            className="
              h-12
              px-7
              rounded-lg
              bg-teal-600
              text-white
              text-base
              font-semibold
              shadow-[0_4px_16px_rgba(0,157,140,0.30)]
              hover:bg-teal-700
              transition
            "
          >
            Contact Sales
          </button>

          <button
            className="
              h-12
              px-7
              rounded-lg
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              text-slate-700
              dark:text-slate-200
              text-sm
              font-medium
              hover:bg-slate-50
              dark:hover:bg-slate-800
              transition
            "
          >
            Get a Demo
          </button>

          <div
            className="
              text-xs
              text-slate-400
              dark:text-slate-500
              mt-2
              text-center
            "
          >
            Also view:
            <span className="text-teal-600 dark:text-teal-400 font-semibold">
              {" "}
              Product Documentation
            </span>
            {" · "}
            <span className="text-teal-600 dark:text-teal-400 font-semibold">
              Worker Guide
            </span>
            {" · "}
            <span className="text-teal-600 dark:text-teal-400 font-semibold">
              Help Center
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}