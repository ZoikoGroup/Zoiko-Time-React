import React from "react";

const impactCards = [
  {
    tag: "CFO",
    tagStyle: "bg-indigo-500/10 text-indigo-500",
    title: "Financial Precision",
    description:
      "Eliminate payroll errors and financial exposure from incorrect policy application across every jurisdiction.",
    points: [
      "Eliminates costly payroll miscalculations",
      "Reduces financial exposure from OT violations",
      "Verified payroll records ready for finance audit",
    ],
  },
  {
    tag: "GC",
    tagStyle: "bg-teal-500/10 text-teal-600",
    title: "Legal Risk Reduction",
    description:
      "Reduce legal exposure by ensuring every workforce decision is defensible, documented, and compliant with local law.",
    points: [
      "Legal-grade traceability per decision",
      "Policy conflict resolution logged for courts",
      "Regulatory submissions ready on demand",
    ],
  },
  {
    tag: "CRO",
    tagStyle: "bg-red-500/10 text-red-600",
    title: "Compliance Risk Control",
    description:
      "Control compliance risk proactively with real-time monitoring, automated alerts, and zero silent failure architecture.",
    points: [
      "Real-time compliance monitoring at scale",
      "Automated escalation before violations occur",
      "ISO 42001 · EU AI Act · SOC 2 aligned",
    ],
  },
];


export default function EnterpriseImpact() {
  return (
    <section
      className="
      w-full
      bg-slate-100
      dark:bg-slate-950
      py-20
      px-5
      transition-colors
      "
    >

      <div
        className="
        max-w-[1104px]
        mx-auto
        "
      >

        {/* Header */}

        <p
          className="
          text-center
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-teal-500
          "
        >
          Enterprise Impact
        </p>


        <h2
          className="
          mt-5
          text-center
          text-3xl
          md:text-4xl
          font-bold
          leading-tight
          text-slate-900
          dark:text-white
          "
        >
          What This Means for Your Organisation
        </h2>


        <p
          className="
          max-w-xl
          mx-auto
          mt-6
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-slate-400
          "
        >
          ZoikoTime&apos;s policy intelligence engine delivers measurable
          risk reduction across every executive function.
        </p>



        {/* Cards */}

        <div
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >

          {impactCards.map((card,index)=>(
            <div
              key={index}
              className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
              p-8
              "
            >


              <div
                className={`
                inline-flex
                px-4
                py-1.5
                rounded-full
                text-xs
                font-bold
                ${card.tagStyle}
                `}
              >
                {card.tag}
              </div>


              <h3
                className="
                mt-8
                text-xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {card.title}
              </h3>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
                "
              >
                {card.description}
              </p>

                            {/* Points */}

              <div
                className="
                mt-8
                space-y-5
                "
              >

                {card.points.map((point, i) => (
                  <div
                    key={i}
                    className="
                    flex
                    items-start
                    gap-3
                    "
                  >

                    <span
                      className="
                      mt-1
                      text-teal-500
                      text-sm
                      font-bold
                      "
                    >
                      ✓
                    </span>


                    <p
                      className="
                      text-sm
                      leading-6
                      text-blue-950
                      dark:text-slate-300
                      "
                    >
                      {point}
                    </p>

                  </div>
                ))}

              </div>


            </div>
          ))}

        </div>


      </div>

    </section>
  );
}