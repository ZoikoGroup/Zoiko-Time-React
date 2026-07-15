import React from "react";

export default function CoreIntelligenceCapabilities() {

  const capabilities = [
    {
      icon: "⏰",
      title: "Time Intelligence",
      description:
        "Understand clock-ins, clock-outs, manual entries, breaks, attendance patterns, edited records, and approval status across every team and project.",
    },
    {
      icon: "📊",
      title: "Activity Intelligence",
      description:
        "Analyze app usage, active time, idle time, focus periods, and work-session behavior to understand how time is being used in practice.",
    },
    {
      icon: "📈",
      title: "Productivity Intelligence",
      description:
        "Identify utilization trends, workload imbalance, focus patterns, operational friction, and team performance signals that affect delivery.",
    },
    {
      icon: "⚠",
      title: "Exception Intelligence",
      description:
        "Surface missing time, unusual edits, unsupported entries, excessive idle patterns, overlapping claims, and records requiring human review.",
    },
    {
      icon: "💳",
      title: "Payroll and Billing Intelligence",
      description:
        "Support payroll preparation, client billing confidence, billable utilization, project allocation, and time record accuracy before period close.",
    },
    {
      icon: "🛡",
      title: "Governance Intelligence",
      description:
        "Connect workforce records to approvals, policies, audit trails, retention rules, role-based access, and legal hold controls for defensible operations.",
    },
  ];


  return (
    <section
      className="
      w-full
      min-h-[785px]
      bg-slate-100
      dark:bg-slate-950
      py-20
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1180px]
        mx-auto
        px-6
        lg:px-0
        "
      >


        {/* Label */}
        <p
          className="
          text-center
          text-teal-600
          dark:text-teal-400
          text-xs
          font-bold
          uppercase
          tracking-wider
          "
        >
          Core Intelligence Capabilities
        </p>



        {/* Heading */}
        <h2
          className="
          mt-5
          max-w-[783px]
          mx-auto
          text-center
          text-slate-900
          dark:text-white
          text-3xl
          lg:text-4xl
          font-semibold
          leading-10
          "
        >
          One Intelligence Layer Across Time, Activity, Productivity, and Risk
        </h2>



        {/* Description */}
        <p
          className="
          mt-5
          max-w-[520px]
          mx-auto
          text-center
          text-slate-500
          dark:text-slate-300
          text-base
          leading-7
          "
        >
          Six interconnected intelligence modules that give organizations a
          complete view of verified workforce operations.
        </p>




        {/* Cards */}
        <div
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >

          {capabilities.map((item)=>(
            <div
              key={item.title}
              className="
              h-56
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-teal-600
              p-6
              "
            >

              {/* Icon */}
              <div
                className="
                text-3xl
                text-slate-700
                dark:text-slate-300
                "
              >
                {item.icon}
              </div>



              {/* Title */}
              <h3
                className="
                mt-5
                text-slate-900
                dark:text-white
                text-base
                font-semibold
                "
              >
                {item.title}
              </h3>



              {/* Description */}
              <p
                className="
                mt-4
                text-slate-500
                dark:text-slate-300
                text-sm
                leading-6
                "
              >
                {item.description}
              </p>


            </div>
          ))}


        </div>




        {/* Button */}
        <div
          className="
          flex
          justify-center
          mt-16
          "
        >

          <button
            className="
            w-80
            h-12
            rounded-lg
            bg-teal-600
            text-white
            text-base
            font-semibold
            shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)]
            "
          >
            Request a Demo
          </button>

        </div>


      </div>


    </section>
  );
}