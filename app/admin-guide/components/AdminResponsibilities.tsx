import React from "react";

export default function AdminResponsibilities() {

  const cards = [
    {
      icon: "/AdminResponsibilities/workspace.png",
      title: "Workspace Configuration",
      description:
        "Maintain organization profile, default settings, operating region, time zone, and primary administrative contacts.",
    },
    {
      icon: "/AdminResponsibilities/workers.png",
      title: "Departments and Workers",
      description:
        "Create departments, add workers, assign managers, maintain worker profiles, and handle offboarding workflows.",
    },
    {
      icon: "/AdminResponsibilities/permissions.png",
      title: "Roles and Permissions",
      description:
        "Control who can view, manage, approve, export, review, or configure workforce records and settings.",
    },
    {
      icon: "/AdminResponsibilities/time.png",
      title: "Time and Activity Settings",
      description:
        "Configure time capture, activity context, idle handling, break rules, timesheet periods, and correction workflows.",
    },
    {
      icon: "/AdminResponsibilities/reports.png",
      title: "Reporting and Analytics",
      description:
        "Manage reporting access, department dashboards, operational analytics, payroll exports, and workforce insights.",
    },
    {
      icon: "/AdminResponsibilities/evidence.png",
      title: "Evidence and Review Controls",
      description:
        "Control access to audit trails, correction history, screenshots where enabled, and evidence exports.",
    },
    {
      icon: "/AdminResponsibilities/communication.png",
      title: "Worker Communication",
      description:
        "Help workers understand visibility, timesheets, corrections, mobile use, support routes, and applicable policies.",
    },
    {
      icon: "/AdminResponsibilities/support.png",
      title: "Support Routing",
      description:
        "Direct issues to Help Center resources, internal owners, ZoikoTime support, or commercial channels as appropriate.",
    },
  ];


  return (
    <section className="bg-slate-100 dark:bg-black px-6 py-24 transition-colors">

      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <p className="
          text-center
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-teal-600
          dark:text-teal-400
        ">
          Administrator Responsibilities
        </p>


        <h2 className="
          mt-5
          text-center
          text-3xl
          font-semibold
          text-slate-900
          dark:text-white
          sm:text-4xl
        ">
          What Administrators Are Responsible For
        </h2>


        <p className="
          mx-auto
          mt-6
          max-w-4xl
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-white/60
        ">
          Administrators are responsible for configuring ZoikoTime in a way
          that supports accurate records, role-based access, worker
          transparency, operational reporting, and responsible governance.
        </p>


        {/* Cards */}

        <div className="
          mt-16
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        ">

          {cards.map((card, index) => (

            <div
              key={index}
              className="
                relative
                min-h-[210px]
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                dark:border-white/10
                dark:bg-white/5
              "
            >

              {/* Top Gradient Line */}

              <div className="
                absolute
                left-0
                top-0
                h-[3px]
                w-full
                bg-gradient-to-r
                from-teal-600
                to-teal-500
              "/>


              {/* Icon */}

              <img
                src={card.icon}
                alt={card.title}
                className="
                  h-8
                  w-8
                  object-contain
                "
              />


              {/* Title */}

              <h3 className="
                mt-8
                text-base
                font-semibold
                text-slate-900
                dark:text-white
              ">
                {card.title}
              </h3>


              {/* Description */}

              <p className="
                mt-3
                text-xs
                leading-5
                text-slate-500
                dark:text-white/60
              ">
                {card.description}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}