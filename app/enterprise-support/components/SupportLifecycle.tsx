"use client";

const stages = [
  "Receive & Protect",
  "Qualify & Route",
  "Assign & Acknowledge",
  "Investigate & Reproduce",
  "Coordinate & Escalate",
  "Decide & Authorize",
  "Act & Communicate",
  "Verify & Close",
  "Learn & Prevent",
];

export default function SupportLifecycle() {
  return (
    <section className="w-full bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-[78px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Nine-Stage Support Lifecycle
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[560px]
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
            Every case moves through the
            <br className="hidden sm:block" />
            same accountable path.
          </h2>
        </div>

        {/* =====================================================
            LIFECYCLE STAGES
        ===================================================== */}

        <div className="mt-9 overflow-hidden">
          {/* Desktop / Large */}
          <div className="hidden items-center gap-0 lg:flex lg:flex-wrap">
            {stages.slice(0, 6).map((stage, index) => (
              <div key={stage} className="flex items-center">
                <StagePill number={index + 1} label={stage} />

                {index < 5 && <StageConnector />}
              </div>
            ))}

            {/* Second row */}
            <div className="mt-3 flex items-center">
              {stages.slice(6).map((stage, index) => (
                <div key={stage} className="flex items-center">
                  <StagePill number={index + 7} label={stage} />

                  {index < 2 && <StageConnector />}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden grid-cols-2 gap-3 sm:grid lg:hidden">
            {stages.map((stage, index) => (
              <StagePill
                key={stage}
                number={index + 1}
                label={stage}
                fullWidth
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="grid grid-cols-1 gap-3 sm:hidden">
            {stages.map((stage, index) => (
              <StagePill
                key={stage}
                number={index + 1}
                label={stage}
                fullWidth
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            INFORMATION BOX
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-gray-50
            px-5
            py-4
            dark:border-slate-700
            dark:bg-slate-950
            sm:items-center
            sm:px-6
          "
        >
          {/* Info Icon */}
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-teal-700 dark:text-teal-400 sm:mt-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="M8 7V10.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              <circle cx="8" cy="5" r="0.7" fill="currentColor" />
            </svg>
          </span>

          {/* Text */}
          <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
            Each stage shows its own proof — owner, evidence, approval, next
            action, communication, or verification. Lifecycle stage is never
            collapsed into one overall &quot;health&quot; badge.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   STAGE PILL
================================================================ */

function StagePill({
  number,
  label,
  fullWidth = false,
}: {
  number: number;
  label: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`
        flex
        h-9
        shrink-0
        items-center
        gap-2.5
        rounded-full
        border
        border-slate-200
        bg-white
        px-3.5
        dark:border-slate-700
        dark:bg-slate-950
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {/* Number */}
      <span
        className="
          flex
          h-4
          w-4
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-emerald-50
          text-[9px]
          font-bold
          leading-4
          text-teal-700
          dark:bg-teal-950
          dark:text-teal-400
        "
      >
        {number}
      </span>

      {/* Label */}
      <span
        className="
          whitespace-nowrap
          text-xs
          font-semibold
          leading-5
          text-gray-500
          dark:text-slate-400
        "
      >
        {label}
      </span>
    </div>
  );
}

/* ===============================================================
   CONNECTOR
================================================================ */

function StageConnector() {
  return (
    <span
      className="
        h-px
        w-3.5
        shrink-0
        bg-slate-200
        dark:bg-slate-700
      "
      aria-hidden="true"
    />
  );
}