import React from "react";

export default function StakeholderTeams() {

  const stakeholders = [
    {
      category: "Finance",
      title: "Finance Leaders",
      description:
        "View payroll readiness, labor cost exposure, billable utilization, project margin signals, and time leakage before every pay cycle.",
    },
    {
      category: "Operations",
      title: "Operations Leaders",
      description:
        "Track team utilization, attendance patterns, workload distribution, exceptions, and delivery performance across every team and location.",
    },
    {
      category: "HR",
      title: "HR Leaders",
      description:
        "Support fair workforce oversight with transparent policies, attendance visibility, worker access, and structured dispute workflows.",
    },
    {
      category: "Legal and Compliance",
      title: "Legal Teams",
      description:
        "Access audit trails, evidence history, retention controls, legal hold workflows, and policy-aligned records for every governed decision.",
    },
    {
      category: "Management",
      title: "Managers",
      description:
        "Review submitted time, approve exceptions, understand team patterns, and document decisions consistently in every period.",
    },
    {
      category: "Executive",
      title: "Executives",
      description:
        "See organization-wide workforce visibility across teams, departments, entities, projects, and locations in a single intelligence view.",
    },
  ];


  return (
    <section
      className="
      w-full
      min-h-[674px]
      bg-slate-100
      dark:bg-slate-950
      py-12
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1052px]
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
          Built for Every Stakeholder
        </p>



        {/* Heading */}
        <h2
          className="
          mt-10
          text-center
          text-slate-900
          dark:text-white
          text-3xl
          lg:text-4xl
          font-semibold
          leading-10
          "
        >
          Built for the Teams That Own Workforce Decisions
        </h2>



        {/* Description */}
        <p
          className="
          mt-4
          max-w-[950px]
          mx-auto
          text-center
          text-slate-500
          dark:text-slate-300
          text-base
          leading-7
          "
        >
          ZoikoTime gives each stakeholder a relevant view of workforce
          intelligence — without forcing finance, operations, HR, legal,
          and managers to interpret the same data in the same way.
        </p>




        {/* Cards */}
        <div
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-12
          "
        >

          {stakeholders.map((item)=>(
            <div
              key={item.title}
              className="
              min-h-[176px]
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              p-6
              "
            >

              {/* Category */}
              <p
                className="
                text-teal-600
                dark:text-teal-400
                text-xs
                font-bold
                uppercase
                tracking-wide
                "
              >
                {item.category}
              </p>



              {/* Title */}
              <h3
                className="
                mt-3
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
                text-xs
                leading-5
                "
              >
                {item.description}
              </p>


            </div>
          ))}

        </div>


      </div>

    </section>
  );
}