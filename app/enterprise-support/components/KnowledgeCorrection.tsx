"use client";

const statuses = [
  {
    label: "Proposed",
    light: "bg-indigo-50 border-blue-200 text-blue-600",
    dark: "dark:bg-indigo-950/50 dark:border-blue-900 dark:text-blue-400",
  },
  {
    label: "Verified",
    light: "bg-emerald-50 border-emerald-100 text-teal-700",
    dark: "dark:bg-emerald-950/40 dark:border-emerald-900 dark:text-teal-400",
  },
  {
    label: "Closed",
    light: "bg-emerald-50 border-emerald-100 text-teal-700",
    dark: "dark:bg-emerald-950/40 dark:border-emerald-900 dark:text-teal-400",
  },
  {
    label: "Reopened",
    light: "bg-orange-100 border-orange-200 text-yellow-700",
    dark: "dark:bg-orange-950/40 dark:border-orange-900 dark:text-yellow-400",
  },
  {
    label: "Disputed",
    light: "bg-orange-100 border-orange-200 text-yellow-700",
    dark: "dark:bg-orange-950/40 dark:border-orange-900 dark:text-yellow-400",
  },
  {
    label: "Correction",
    light: "bg-indigo-50 border-blue-200 text-blue-600",
    dark: "dark:bg-indigo-950/50 dark:border-blue-900 dark:text-blue-400",
  },
];

export default function KnowledgeCorrection() {
  return (
    <section className="w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          py-12
          sm:px-6
          lg:px-8
          lg:py-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div>
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
              Knowledge, Correction &amp; Reopen
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[680px]
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
            Resolutions stay honest, even after
            <br className="hidden sm:block" />
            closure.
          </h2>
        </div>

        {/* =====================================================
            STATUS PILLS
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-2.5
          "
        >
          {statuses.map((status) => (
            <span
              key={status.label}
              className={`
                inline-flex
                h-9
                items-center
                justify-center
                rounded-full
                border
                px-4
                text-xs
                font-semibold
                leading-5
                ${status.light}
                ${status.dark}
              `}
            >
              {status.label}
            </span>
          ))}
        </div>

        {/* =====================================================
            RESOLUTION CARD
        ===================================================== */}

        <div
          className="
            mt-7
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            py-5
            dark:border-slate-700
            dark:bg-slate-900
            sm:px-6
            sm:py-6
          "
        >
          {/* Title */}
          <h3
            className="
              text-base
              font-semibold
              leading-6
              text-slate-800
              dark:text-slate-100
            "
          >
            Resolving a stuck timesheet export
          </h3>

          {/* Description */}
          <p
            className="
              mt-2
              text-xs
              font-normal
              leading-5
              text-gray-500
              dark:text-slate-400
            "
          >
            Guidance for exports that stall after a policy change mid-period.
          </p>

          {/* Metadata */}
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-xs
              font-normal
              leading-5
              text-gray-500
              dark:text-slate-400
            "
          >
            <span>Version 4</span>

            <span>Owner: Payroll Integrations</span>

            <span>Reviewed Jul 2026</span>

            <span>Status: Current</span>
          </div>
        </div>
      </div>
    </section>
  );
}