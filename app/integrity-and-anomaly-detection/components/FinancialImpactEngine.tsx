import React from "react";

const impactCards = [
  {
    icon: "📉",
    title: "Estimated Loss Calculation",
    description:
      "Real-time calculation of the financial value of each anomalous event — projected across the detection period at current billing or payroll rates.",
  },

  {
    icon: "🔮",
    title: "Potential Exposure Modelling",
    description:
      "If the anomaly is systemic — recurring pattern, coordinated group — total exposure is projected forward, surfacing the true scale of the risk before it compounds further.",
  },

  {
    icon: "🔄",
    title: "Recovery Opportunity Identification",
    description:
      "ZoikoTime identifies the period and transactions affected, enabling precise recovery actions — clawbacks, billing corrections, or payroll adjustments with full evidence backing.",
  },
];


export default function FinancialImpactEngine() {
  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        py-20
        transition-colors
      "
    >

      <div
        className="
          max-w-[1040px]
          mx-auto
          px-5
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* Left Content */}

        <div>

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            "
          >
            Financial Impact Engine
          </p>


          <h2
            className="
              mt-6
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            Every Risk Translates to
            <br className="hidden md:block" />
            Financial Exposure
          </h2>


          <p
            className="
              mt-6
              text-base
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            ZoikoTime does not just flag anomalies — it quantifies the
            financial exposure of each detected event in real time, giving
            CFOs and risk teams the intelligence they need to prioritise
            response and recover losses.
          </p>



          {/* Cards */}

          <div
            className="
              mt-10
              space-y-5
            "
          >

                        {impactCards.map((card, index) => (
              <div
                key={index}
                className="
                  bg-white
                  dark:bg-slate-900
                  rounded-lg
                  border
                  border-slate-200
                  dark:border-slate-700
                  shadow-sm
                  p-5
                  flex
                  gap-5
                  transition-colors
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-9
                    h-9
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-emerald-50
                    dark:bg-emerald-950
                    text-base
                    flex-shrink-0
                  "
                >
                  {card.icon}
                </div>



                {/* Content */}

                <div>

                  <h3
                    className="
                      text-base
                      font-bold
                      leading-6
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {card.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-xs
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {card.description}
                  </p>

                </div>


              </div>
            ))}

          </div>

        </div>



        {/* Right Image */}

        <div
          className="
            w-full
            h-[520px]
            lg:h-[785px]
            rounded-2xl
            overflow-hidden
            border
            border-slate-200
            dark:border-slate-700
            shadow-md
            bg-neutral-300
          "
        >

          <img
            src="/FinancialImpactEngine/image.png"
            alt="Financial Impact Engine"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

              </div>

    </section>
  );
}