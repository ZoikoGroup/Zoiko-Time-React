"use client";

const outcomeFeatures = [
  {
    icon: "📈",
    title: "Decision Effectiveness",
    description:
      "Track whether decisions achieved their intended outcomes — measuring real impact on performance, behaviour, and risk reduction across the workforce.",
  },
  {
    icon: "🔄",
    title: "Recurring Issues",
    description:
      "Identify patterns in repeated cases, systemic policy gaps, and root causes that require structural interventions — not just individual responses.",
  },
  {
    icon: "🛠️",
    title: "Process Improvements",
    description:
      "Continuous analysis of case resolution times, workflow bottlenecks, and decision consistency drives measurable improvements in operational governance quality.",
  },
];

export default function Outcome() {
  return (
    <section
      className="
        w-full
        px-4
        py-16

        transition-colors

        bg-white
        text-slate-900

        dark:bg-slate-950
        dark:text-slate-100

        sm:px-6
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest

              text-teal-600

              dark:text-teal-400
            "
          >
            Outcome Intelligence
          </p>


          <h2
            className="
              mt-6
              text-3xl
              font-bold
              leading-tight

              text-slate-900

              dark:text-white

              sm:text-4xl
            "
          >
            Learn From Every Decision
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-3xl

              text-base
              leading-7

              text-slate-600

              dark:text-slate-400

              sm:text-lg
            "
          >
            ZoikoTime doesn&apos;t just execute decisions — it measures,
            analyses, and learns from them, continuously improving governance
            quality over time.
          </p>

        </div>


        {/* Feature Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {outcomeFeatures.map((feature) => (
            <article
              key={feature.title}
              className="
                rounded-2xl

                border

                p-8

                text-center

                transition-all
                duration-300


                bg-slate-50

                border-slate-200

                shadow-sm

                hover:border-teal-400


                dark:bg-slate-900

                dark:border-slate-800

                dark:shadow-xl

                dark:hover:border-teal-500/40
              "
            >

              {/* Icon */}
              <div
                className="
                  mx-auto

                  flex

                  h-14

                  w-14

                  items-center

                  justify-center

                  rounded-xl

                  border

                  border-teal-500/20

                  bg-teal-50

                  text-2xl


                  dark:bg-teal-950
                "
              >
                {feature.icon}
              </div>


              {/* Title */}
              <h3
                className="
                  mt-7

                  text-lg

                  font-bold

                  leading-7

                  text-slate-900

                  dark:text-white
                "
              >
                {feature.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-5

                  text-sm

                  leading-6

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {feature.description}
              </p>


            </article>
          ))}

        </div>


        {/* Feedback Loop */}
        <div
          className="
            mt-8

            rounded-2xl

            border

            px-6
            py-10

            text-center


            border-teal-200

            bg-gradient-to-br
            from-teal-50
            to-indigo-50


            dark:border-slate-800

            dark:from-teal-950/60

            dark:to-indigo-950/60


            sm:px-10
          "
        >

          <p
            className="
              text-base

              font-semibold

              leading-7


              text-slate-700

              dark:text-slate-200


              sm:text-lg
            "
          >
            Outcome intelligence creates a{" "}

            <span
              className="
                font-extrabold

                text-teal-600

                dark:text-teal-400
              "
            >
              closed feedback loop
            </span>{" "}

            — the system evolves with your organisation, becoming more
            precise, more consistent, and more defensible over time.
          </p>

        </div>


      </div>
    </section>
  );
}