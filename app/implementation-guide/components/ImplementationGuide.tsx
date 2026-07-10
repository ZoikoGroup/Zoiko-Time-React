import React from "react";

export default function ImplementationGuide() {
  const roadmap = [
    {
      title: "Align",
      description:
        "Scope, stakeholders, pilot group, and success criteria.",
    },
    {
      title: "Map",
      description:
        "Policies, workflows, approvals, corrections, and evidence.",
    },
    {
      title: "Configure",
      description:
        "Workspace, teams, roles, permissions, reporting, integrations.",
    },
    {
      title: "Train",
      description:
        "Admins, managers, workers, HR, legal, finance, operations.",
    },
    {
      title: "Launch",
      description:
        "Pilot validation, then production launch and optimization.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-gradient-to-b
        from-white
        to-gray-50
        dark:from-slate-950
        dark:to-slate-900
        overflow-hidden
        transition-colors
        px-4
        sm:px-6
        lg:px-0
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          py-12
          lg:py-16
          flex
          flex-col
          lg:flex-row
          gap-10
          lg:gap-16
          items-center
        "
      >

        {/* Left Content */}
        <div
          className="
            w-full
            lg:w-1/2
            lg:pl-20
          "
        >

          <p
            className="
              text-teal-600
              dark:text-teal-400
              text-xs
              font-semibold
              uppercase
              tracking-widest
            "
          >
            Implementation Guide
          </p>


          <h1
            className="
              mt-5
              text-slate-800
              dark:text-white
              text-4xl
              sm:text-5xl
              font-bold
              leading-tight
            "
          >
            Launch ZoikoTime with
            <br />
            structure, governance, and
            <br />
            <span className="text-teal-600 dark:text-teal-400">
              confidence
            </span>
          </h1>


          <p
            className="
              mt-6
              max-w-xl
              text-gray-500
              dark:text-gray-400
              text-base
              leading-7
            "
          >
            ZoikoTime helps organizations plan a controlled workforce
            assurance rollout across policies, permissions, teams, training,
            reporting, and launch validation.
          </p>


          <div
            className="
              mt-8
              max-w-xl
              bg-gray-50
              dark:bg-slate-800
              border-l-[3px]
              border-emerald-100
              dark:border-teal-700
              rounded-r-lg
              p-5
            "
          >
            <p
              className="
                text-gray-500
                dark:text-gray-300
                text-sm
                leading-6
              "
            >
              Whether you start with one department or prepare for a
              multi-location rollout, ZoikoTime can be implemented through a
              phased process that supports stakeholder alignment, worker
              transparency, manager readiness, and operational control.
            </p>
          </div>


          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            <button
              className="
                h-11
                px-8
                bg-teal-600
                hover:bg-teal-700
                text-white
                rounded-lg
                font-semibold
                shadow-md
              "
            >
              Contact Sales
            </button>

            <button
              className="
                h-11
                px-8
                bg-white
                dark:bg-slate-900
                border
                border-gray-300
                dark:border-slate-700
                text-slate-800
                dark:text-white
                rounded-lg
                font-semibold
              "
            >
              Get a Demo
            </button>
          </div>


          <p
            className="
              mt-6
              text-gray-500
              dark:text-gray-400
              text-xs
            "
          >
            Phased by design. No forced enterprise-wide deployment.
          </p>

        </div>


        {/* Roadmap Card */}
        <div
          className="
            w-full
            max-w-[470px]
            bg-white
            dark:bg-slate-900
            rounded-2xl
            shadow-lg
            border
            border-slate-200
            dark:border-slate-700
            p-8
          "
        >

          <h2
            className="
              text-slate-800
              dark:text-white
              text-lg
              font-bold
              mb-8
            "
          >
            Five-stage rollout roadmap
          </h2>


          <div className="space-y-7">

            {roadmap.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 relative"
              >

                {index !== roadmap.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[18px]
                      top-10
                      h-12
                      w-[2px]
                      bg-emerald-100
                      dark:bg-teal-800
                    "
                  />
                )}


                <div
                  className="
                    shrink-0
                    w-9
                    h-9
                    rounded-full
                    bg-emerald-50
                    dark:bg-teal-900
                    border-2
                    border-teal-600
                    flex
                    items-center
                    justify-center
                    text-teal-700
                    dark:text-teal-300
                    font-bold
                    text-sm
                  "
                >
                  {index + 1}
                </div>


                <div>
                  <h3
                    className="
                      text-slate-800
                      dark:text-white
                      text-base
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-gray-500
                      dark:text-gray-400
                      text-xs
                      leading-5
                    "
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}