export default function ImplementationAdoption() {
  const steps = [
    {
      number: "1",
      title: "Readiness",
      description:
        "Scope, roles, policies, jurisdictions, systems, and success measures.",
    },
    {
      number: "2",
      title: "Configure",
      description:
        "Policy versions, permissions, review routes, integrations, and evidence.",
    },
    {
      number: "3",
      title: "Validate",
      description:
        "Pilot a real lifecycle end to end and reconcile before launch.",
    },
    {
      number: "4",
      title: "Launch & support",
      description:
        "Sequence rollout, train roles, and monitor exports and evidence.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Get Ready
        </p>


        {/* Heading */}
        <h2
          className="
            max-w-[820px]
            text-center
            text-3xl
            font-bold
            leading-10
            text-slate-800
            dark:text-white
            lg:text-4xl
          "
        >
          Implementation and adoption
        </h2>


        {/* Description */}
        <p
          className="
            max-w-[680px]
            text-center
            text-base
            leading-7
            text-gray-500
            dark:text-slate-400
          "
        >
          A controlled first lifecycle — readiness, configuration, validation,
          launch, and support, with the right owners at each stage.
        </p>


        {/* Steps */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            gap-4
            lg:flex-row
            lg:justify-center
          "
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex w-full items-center lg:w-auto"
            >

              {/* Card */}
              <div
                className="
                  relative
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-4
                  shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                  shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)]
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >

                {/* Top gradient line */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-full
                    bg-gradient-to-r
                    from-teal-600
                    to-slate-800
                  "
                />


                {/* Number */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-teal-600
                    to-teal-700
                    text-base
                    font-bold
                    text-white
                    shadow-[0px_8px_16px_0px_rgba(16,162,141,0.30)]
                  "
                >
                  {step.number}
                </div>


                {/* Title */}
                <h3
                  className="
                    mt-3
                    text-center
                    text-sm
                    font-semibold
                    leading-6
                    text-slate-800
                    dark:text-white
                  "
                >
                  {step.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    mt-1
                    text-center
                    text-xs
                    leading-4
                    text-gray-500
                    dark:text-slate-400
                  "
                >
                  {step.description}
                </p>

              </div>


              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    hidden
                    px-3
                    text-xl
                    font-bold
                    text-teal-600
                    opacity-70
                    lg:block
                  "
                >
                  →
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}