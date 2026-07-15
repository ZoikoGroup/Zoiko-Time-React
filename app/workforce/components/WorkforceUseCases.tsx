import React from "react";

export default function WorkforceUseCases() {

  const useCases = [
    {
      icon: "💰",
      title: "Improve Payroll Confidence",
      description:
        "Review time records, approvals, exceptions, and supporting signals before every payroll processing cycle.",
    },
    {
      icon: "🧾",
      title: "Strengthen Client Billing",
      description:
        "Support billable time, project allocation, and client-facing records with stronger workforce evidence and approval trails.",
    },
    {
      icon: "📉",
      title: "Reduce Time Leakage",
      description:
        "Identify unsupported time, unusual idle patterns, late entries, repeated edits, and underutilized capacity before period close.",
    },
    {
      icon: "🤝",
      title: "Govern Contractor Work",
      description:
        "Support contractor oversight with clearer time records, activity context, project allocation, and structured approval workflows.",
    },
    {
      icon: "📊",
      title: "Improve Workforce Planning",
      description:
        "Use utilization, capacity, attendance, and productivity trends to guide staffing and operational decisions at every level.",
    },
    {
      icon: "⚖",
      title: "Prepare for Audits and Disputes",
      description:
        "Maintain structured records, audit trails, evidence references, and exportable reports ready for any governance need.",
    },
  ];


  return (
    <section
      className="
      w-full
      min-h-[538px]
      bg-slate-900
      dark:bg-black
      py-14
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1052px]
        mx-auto
        px-6
        "
      >


        {/* Label */}

        <p
          className="
          text-center
          text-teal-500
          text-xs
          font-bold
          uppercase
          tracking-wider
          "
        >
          Use Cases
        </p>



        {/* Heading */}

        <h2
          className="
          mt-4
          text-center
          text-white
          text-3xl
          lg:text-4xl
          font-semibold
          leading-10
          "
        >
          Workforce Intelligence Use Cases
        </h2>



        {/* Cards */}

        <div
          className="
          mt-12
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-12
          "
        >

          {
            useCases.map((item)=>(
              <div
                key={item.title}
                className="
                h-40
                bg-white/5
                rounded-xl
                border
                border-white/10
                p-5
                "
              >


                {/* Icon */}

                <div className="text-xl">
                  {item.icon}
                </div>



                {/* Title */}

                <h3
                  className="
                  mt-5
                  text-white
                  text-sm
                  font-semibold
                  "
                >
                  {item.title}
                </h3>



                {/* Description */}

                <p
                  className="
                  mt-4
                  text-white/50
                  text-xs
                  leading-5
                  "
                >
                  {item.description}
                </p>


              </div>
            ))
          }

        </div>


      </div>


    </section>
  );
}