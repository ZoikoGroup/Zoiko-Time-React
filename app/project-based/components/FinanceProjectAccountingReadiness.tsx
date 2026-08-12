"use client";

const readinessItems = [
  {
    title: "Attribution",
    description:
      "Project, client, phase, task and cost-center context, validated before export.",
  },
  {
    title: "Reconciliation",
    description:
      "Adjustment history preserved alongside every exported record.",
  },
  {
    title: "Boundaries",
    description:
      "ZoikoTime doesn't determine margin, rates or revenue recognition.",
  },
];

export default function FinanceProjectAccountingReadiness() {
  return (
    <section
      className="
        w-full
        bg-neutral-100
        py-20
        sm:py-24
        lg:py-[80px]
        dark:bg-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-6
          sm:px-8
          lg:px-0
        "
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-4 shrink-0 bg-emerald-600" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              leading-5
              tracking-widest
              text-emerald-700
              dark:text-emerald-400
            "
          >
            Finance &amp; Project Accounting Readiness
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            mt-2
            max-w-[823px]
            text-3xl
            font-bold
            leading-10
            text-slate-900
            sm:text-4xl
            dark:text-white
          "
        >
          Approved records, traceable to export.
        </h2>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <p
          className="
            mt-5
            max-w-[608px]
            text-base
            font-normal
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          Project, client, phase, task and cost-center context — only where
          configured.
          <br className="hidden sm:block" />
          Downstream calculations require approved source data and permissions.
        </p>

        {/* =====================================================
            CARDS
        ===================================================== */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3
            lg:gap-[20px]
          "
        >
          {readinessItems.map((item) => (
            <div
              key={item.title}
              className="
                min-h-[128px]
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-[25px]
                py-6

                dark:border-slate-700
                dark:bg-slate-950
              "
            >
              {/* Card title */}
              <h3
                className="
                  text-base
                  font-bold
                  leading-6
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              {/* Card description */}
              <p
                className="
                  mt-2
                  max-w-[330px]
                  text-xs
                  font-normal
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}