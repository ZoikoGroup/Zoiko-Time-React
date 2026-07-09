export default function OperationsSecurity() {
  const cards = [
    {
      title: "Secure development",
      text: "Secure development practices, code review, testing, dependency review, and controlled release processes.",
    },
    {
      title: "Vulnerability management",
      text: "Security issues are assessed, prioritized, remediated, and tracked through product and engineering workflows.",
    },
    {
      title: "Monitoring & alerting",
      text: "Operational monitoring supports platform reliability, security review, performance visibility, and issue escalation.",
    },
    {
      title: "Incident response",
      text: "Processes for identifying, investigating, escalating, and communicating security or availability incidents where applicable.",
    },
    {
      title: "Backup & recovery",
      text: "Backup and recovery practices support data availability, resilience, and operational continuity.",
    },
    {
      title: "Third-party providers",
      text: "Vendor use for infrastructure, payment, identity, analytics, or support is reviewed and governed by internal risk processes.",
    },
  ];

  return (
    <section
      className="
        w-full
        px-5
        py-16
        bg-white
        dark:bg-slate-950
      "
    >

      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="text-center">

          <div
            className="
              text-teal-600
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-widest
            "
          >
            Operations
          </div>


          <h2
            className="
              mt-[10px]
              text-3xl
              md:text-4xl
              font-bold
              leading-10
              text-slate-800
              dark:text-white
            "
          >
            Platform security and monitoring
          </h2>


          <p
            className="
              mt-4
              max-w-[652px]
              mx-auto
              text-sm
              md:text-base
              font-normal
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Secure product development, controlled operations, monitoring,
            vulnerability management, and incident response appropriate for an
            enterprise SaaS platform.
          </p>

        </div>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-x-[18px]
            gap-y-5
            lg:px-[100px]
          "
        >

          {cards.map((card, index) => (

            <div
              key={index}
              className="
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                p-6
                min-h-[128px]
                lg:min-h-[144px]
              "
            >

              {/* Title */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    w-1.5
                    h-1.5
                    bg-teal-600
                    rounded-sm
                  "
                />


                <h3
                  className="
                    text-slate-800
                    dark:text-white
                    text-base
                    font-semibold
                    leading-6
                  "
                >
                  {card.title}
                </h3>

              </div>


              {/* Description */}
              <p
                className="
                  mt-5
                  text-gray-500
                  dark:text-gray-400
                  text-sm
                  font-normal
                  leading-6
                "
              >
                {card.text}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}