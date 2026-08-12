"use client";

const controlGaps = [
  {
    number: "01",
    title: "Fragmented time records",
    description:
      "Hours live across tools with no single reviewable source.",
  },
  {
    number: "02",
    title: "Wrong project context",
    description:
      "Time logged to the wrong client, phase or task.",
  },
  {
    number: "03",
    title: "Late approvals",
    description:
      "Cutoff pressure pushes review to the last hour.",
  },
  {
    number: "04",
    title: "Disputes without evidence",
    description:
      "No version history to resolve a disagreement fairly.",
  },
  {
    number: "05",
    title: "Access outliving assignment",
    description:
      "Contributors keep access after a project role ends.",
  },
  {
    number: "06",
    title: "Privacy & trust concerns",
    description:
      "Teams resist tools that feel like surveillance.",
  },
];

export default function ControlGap() {
  return (
    <section
      className="
        w-full
        bg-neutral-100
        px-6
        py-16
        dark:bg-slate-900
        sm:px-8
        lg:px-10
        lg:py-[96px]
      "
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="mb-3 flex items-center gap-2">
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
            The Control Gap
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            max-w-[863px]
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            sm:text-4xl
            sm:leading-[50px]
            dark:text-white
          "
        >
          Fragmented project context, not risky workers
        </h2>

        {/* =====================================================
            CONTROL GAP GRID
        ===================================================== */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-gray-200
            sm:grid-cols-2
            lg:mt-[60px]
            lg:grid-cols-3
            dark:border-slate-700
            dark:bg-slate-700
          "
        >
          {controlGaps.map((item) => (
            <div
              key={item.number}
              className="
                min-h-[160px]
                border-b
                border-gray-200
                bg-white
                p-6

                sm:min-h-[160px]
                sm:[&:nth-child(odd)]:border-r

                lg:min-h-[160px]
                lg:border-r
                lg:border-b
                lg:p-[26px]

                lg:[&:nth-child(3n)]:border-r-0
                lg:[&:nth-child(n+4)]:border-b-0

                dark:border-slate-700
                dark:bg-slate-950
              "
            >
              {/* Number */}
              <div
                className="
                  text-xs
                  font-bold
                  leading-5
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                {item.number}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-2
                  text-base
                  font-bold
                  leading-6
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-[320px]
                  text-sm
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