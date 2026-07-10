import React from "react";

export default function TimeReporting() {
  const cards = [
    {
      icon: "/TimeReporting/time.png",
      title: "Time Capture",
      description:
        "Configure clock-in and clock-out expectations, manual time entry rules, break handling, overtime settings, and time-correction permissions.",
    },
    {
      icon: "/TimeReporting/activity.png",
      title: "Activity Context",
      description:
        "Configure activity visibility settings, app usage context where available, idle handling, and session verification requirements.",
    },
    {
      icon: "/TimeReporting/timesheet.png",
      title: "Timesheets and Approvals",
      description:
        "Configure timesheet periods, submission requirements, approval workflows, correction rules, and payroll export settings.",
    },
    {
      icon: "/TimeReporting/reporting.png",
      title: "Reporting and Analytics",
      description:
        "Manage team dashboards, department views, workforce analytics, executive reports, payroll exports, and evidence packages.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-24 transition-colors">

      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <p className="
          text-center
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-teal-500
        ">
          Time, Activity, Timesheets, and Reporting
        </p>


        <h2 className="
          mt-5
          text-center
          text-3xl
          sm:text-4xl
          font-semibold
          text-white
        ">
          Managing Workforce Records and Reporting
        </h2>


        <p className="
          mx-auto
          mt-6
          max-w-4xl
          text-center
          text-base
          leading-7
          text-white/60
        ">
          ZoikoTime helps administrators manage workforce records through
          structured settings for time capture, activity context, timesheets,
          approvals, reports, analytics, and exports.
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
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <img
                src={card.icon}
                alt={card.title}
                className="
                  h-8
                  w-8
                  object-contain
                "
              />


              <h3
                className="
                  mt-6
                  text-base
                  font-semibold
                  text-white
                "
              >
                {card.title}
              </h3>


              <p
                className="
                  mt-3
                  text-xs
                  leading-5
                  text-white/60
                "
              >
                {card.description}
              </p>


            </div>

          ))}

        </div>



        {/* Responsible Use Note */}

        <div
          className="
            mt-12
            rounded-xl
            border
            border-teal-500/20
            bg-teal-500/10
            p-5
          "
        >

          <h3
            className="
              text-sm
              font-semibold
              text-teal-500
            "
          >
            Responsible Use Note
          </h3>


          <p
            className="
              mt-2
              text-xs
              leading-5
              text-white/60
            "
          >
            ZoikoTime reports and activity records should be interpreted with
            context. They should not be used as the sole basis for employment,
            disciplinary, compensation, or legal decisions without appropriate
            human review, HR involvement, and organizational process.
          </p>


        </div>


      </div>

    </section>
  );
}