import React from "react";

const WorkforceProblem = () => {

  const problems = [
    {
      icon: "⏱",
      title: "Unverified Time",
      description:
        "Submitted hours may not always show whether work was complete, consistent, approved, or supported by reliable activity signals.",
    },
    {
      icon: "🔀",
      title: "Fragmented Visibility",
      description:
        "Time, attendance, activity, projects, payroll, HR, and operations data often sit in separate systems with no unified intelligence layer.",
    },
    {
      icon: "📋",
      title: "Weak Decision Evidence",
      description:
        "Managers may approve, question, or escalate workforce records without a complete evidence trail to support their decisions.",
    },
    {
      icon: "💸",
      title: "Hidden Financial Risk",
      description:
        "Inaccurate time records affect payroll, client billing, utilization, project margins, and labor cost control before problems are visible.",
    },
  ];


  return (
    <section
      className="
      w-full
      min-h-[613px]
      bg-slate-900
      dark:bg-slate-950
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1052px]
        mx-auto
        pt-[88px]
        px-6
        lg:px-0
        "
      >


        {/* Label */}
        <div
          className="
          text-center
          text-teal-500
          text-xs
          font-bold
          uppercase
          tracking-wider
          "
        >
          The Problem
        </div>



        {/* Heading */}
        <h2
          className="
          mt-3
          text-center
          text-white
          text-3xl
          lg:text-4xl
          font-semibold
          leading-10
          "
        >
          Workforce Decisions Are Only as Strong as the Data Behind Them
        </h2>



        {/* Description */}
        <p
          className="
          mt-3
          max-w-[1042px]
          mx-auto
          text-center
          text-white/60
          text-base
          leading-7
          "
        >
          Many organizations still rely on disconnected timesheets, manual
          approvals, basic activity reports, and fragmented workforce systems.
          That creates uncertainty around productivity, payroll, client
          billing, compliance, and operational performance.
        </p>




        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-5
          mt-[78px]
          "
        >

          {problems.map((problem)=>(
            <div
              key={problem.title}
              className="
              h-32
              rounded-2xl
              bg-white/5
              border
              border-white/10
              p-6
              flex
              gap-4
              "
            >

              {/* Icon */}
              <div
                className="
                text-xl
                text-slate-400
                "
              >
                {problem.icon}
              </div>



              <div>

                {/* Title */}
                <h3
                  className="
                  text-white
                  text-lg
                  font-semibold
                  "
                >
                  {problem.title}
                </h3>


                {/* Description */}
                <p
                  className="
                  mt-3
                  text-white/60
                  text-sm
                  leading-6
                  max-w-[420px]
                  "
                >
                  {problem.description}
                </p>


              </div>


            </div>
          ))}


        </div>


      </div>


    </section>
  );
};


export default WorkforceProblem;