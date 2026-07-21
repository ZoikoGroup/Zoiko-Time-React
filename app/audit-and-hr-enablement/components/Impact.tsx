"use client";

const impactCards = [
  {
    role: "CHRO",
    title: (
      <>
        Consistent Workforce
        <br />
        Management
      </>
    ),
    description: (
      <>
        Every people decision is structured,
        <br />
        evidenced, and consistently applied —
        <br />
        removing subjectivity, reducing
        <br />
        grievances, and strengthening your HR
        <br />
        governance posture.
      </>
    ),
  },
  {
    role: "CFO",
    title: "Reduced Financial Risk",
    description: (
      <>
        Structured decisions and verified
        <br />
        evidence reduce payroll leakage, limit
        <br />
        wage-and-hour exposure, and minimise
        <br />
        the financial impact of undefended
        <br />
        employment disputes.
      </>
    ),
  },
  {
    role: "CRO",
    title: (
      <>
        Controlled Operational
        <br />
        Risk
      </>
    ),
    description: (
      <>
        End-to-end traceability and governed
        <br />
        workflows ensure your organisation can
        <br />
        respond to any audit, legal challenge, or
        <br />
        regulatory enquiry with confidence.
      </>
    ),
  },
];

export default function Impact() {
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
        <div className="mx-auto max-w-4xl text-center">

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
            Enterprise Impact
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
            What This Means for Your Organisation
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-base
              leading-7

              text-slate-600

              dark:text-slate-400

              sm:text-lg
            "
          >
            Measurable outcomes for the executives who carry operational,
            financial, and compliance accountability.
          </p>

        </div>


        {/* Impact Cards */}
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

          {impactCards.map((card) => (
            <article
              key={card.role}
              className="
                relative
                overflow-hidden

                rounded-2xl

                border

                px-6
                pb-8
                pt-10

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

              {/* Top Accent */}
              <div
                className="
                  absolute
                  left-0
                  top-0

                  h-[3px]
                  w-full

                  bg-gradient-to-r
                  from-teal-500
                  to-teal-400
                "
              />


              {/* Role */}
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
                {card.role}
              </p>


              {/* Title */}
              <h3
                className="
                  mt-6

                  text-xl

                  font-bold

                  leading-6

                  text-slate-900

                  dark:text-white
                "
              >
                {card.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-7

                  text-sm

                  leading-6

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {card.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}