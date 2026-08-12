"use client";

const lifecycleSteps = [
  {
    number: "01",
    title: "Assignment setup",
    description: (
      <>
        Project and role context
        <br />
        defined.
      </>
    ),
  },
  {
    number: "02",
    title: "Time capture",
    description: (
      <>
        Worker logs against
        <br />
        project/task.
      </>
    ),
  },
  {
    number: "03",
    title: "Context switch",
    description: (
      <>
        Move between projects
        <br />
        cleanly.
      </>
    ),
  },
  {
    number: "04",
    title: "Review",
    description: (
      <>
        Manager checks
        <br />
        against assignment.
      </>
    ),
  },
  {
    number: "05",
    title: "Correction",
    description: (
      <>
        Context requested
        <br />
        where needed.
      </>
    ),
  },
  {
    number: "06",
    title: "Approval",
    description: (
      <>
        Record locked with
        <br />
        history.
      </>
    ),
  },
  {
    number: "07",
    title: "Export & closure",
    description: (
      <>
        Sent downstream,
        <br />
        project closes.
      </>
    ),
  },
];

export default function ProjectRecordLifecycle() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-12
          sm:px-8
          lg:px-10
          lg:py-0
        "
      >
        {/* =====================================================
            HEADER
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
            Project-to-Approved-Record Lifecycle
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-2
            max-w-[1015px]
            text-3xl
            font-bold
            leading-10
            text-slate-900
            sm:text-4xl
            dark:text-white
          "
        >
          Every record&apos;s path is visible, end to end
        </h2>

        {/* =====================================================
            LIFECYCLE
        ===================================================== */}
        <div
          className="
            mt-12
            -mx-6
            overflow-x-auto
            px-6
            pb-4
            sm:-mx-8
            sm:px-8
            lg:mx-0
            lg:mt-[63px]
            lg:overflow-visible
            lg:px-0
            lg:pb-0
          "
        >
          <div
            className="
              flex
              min-w-max
              items-start
              gap-0
              lg:w-full
              lg:min-w-0
            "
          >
            {lifecycleSteps.map((step, index) => (
              <div
                key={step.number}
                className="
                  flex
                  w-[150px]
                  shrink-0
                  items-start
                  lg:w-auto
                  lg:flex-1
                "
              >
                {/* =================================================
                    STEP CONTENT
                ================================================= */}
                <div className="w-[130px]">
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
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-1
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-xs
                      font-normal
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                ================================================= */}
                {index < lifecycleSteps.length - 1 && (
                  <div
                    className="
                      flex
                      w-5
                      shrink-0
                      justify-center
                      pt-[7px]
                      text-lg
                      font-normal
                      leading-7
                      text-slate-300
                      dark:text-slate-600
                    "
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}