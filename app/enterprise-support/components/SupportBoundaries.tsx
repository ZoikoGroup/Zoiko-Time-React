"use client";

const boundaries = [
  "No passwords, credentials, or exploit payloads requested",
  "No raw worker activity or private messages collected",
  "No screenshots, keystroke content, or clipboard collection",
  "No URL history or application-name monitoring",
  "No legal, tax, payroll, or employment advice",
  "No AI-decided severity, entitlement, or closure",
];

export default function SupportBoundaries() {
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
          w-full
          max-w-[1440px]
          px-4
          py-12
          sm:px-6
          lg:px-8
          lg:py-[96px]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="max-w-[650px]">
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
              Security, Privacy &amp; Anti-Surveillance
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[620px]
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
            What we never ask for, and never
            <br className="hidden sm:block" />
            collect.
          </h2>
        </div>

        {/* =====================================================
            BINDING BOUNDARIES CARD
        ===================================================== */}

        <div
          className="
            mt-9
            rounded-3xl
            bg-slate-800
            px-6
            py-7
            dark:bg-slate-950
            sm:px-8
            sm:py-8
            lg:px-9
          "
        >
          {/* Card Heading */}
          <h3
            className="
              text-base
              font-semibold
              leading-6
              text-white
            "
          >
            Binding boundaries
          </h3>

          {/* Card Description */}
          <p
            className="
              mt-2
              max-w-[650px]
              text-sm
              font-normal
              leading-5
              text-indigo-300
              dark:text-indigo-300
            "
          >
            Support forms and case handling never cross these lines,
            regardless of urgency or request.
          </p>

          {/* ===================================================
              BOUNDARY ITEMS
          =================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-y-4
              sm:grid-cols-2
              sm:gap-x-8
              sm:gap-y-4
            "
          >
            {boundaries.map((boundary) => (
              <div
                key={boundary}
                className="flex items-start gap-3"
              >
                {/* Dot */}
                <span
                  className="
                    mt-1
                    flex
                    h-3.5
                    w-3.5
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      border
                      border-teal-200
                      bg-transparent
                    "
                  />
                </span>

                {/* Text */}
                <p
                  className="
                    text-xs
                    font-normal
                    leading-5
                    text-slate-300
                  "
                >
                  {boundary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}