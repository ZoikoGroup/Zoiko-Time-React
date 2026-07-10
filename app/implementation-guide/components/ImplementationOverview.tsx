import React from "react";

export default function ImplementationOverview() {
  const points = [
    {
      title: "Policy-led setup",
      description:
        "Configure ZoikoTime around work rules, schedules, approvals, exceptions, projects, teams, and review workflows.",
    },
    {
      title: "Phased rollout",
      description:
        "Start with a pilot group, department, location, or priority use case before expanding more widely.",
    },
    {
      title: "Stakeholder alignment",
      description:
        "Bring operations, HR, finance, legal, IT, and leadership into the rollout from the start.",
    },
    {
      title: "Operational control",
      description:
        "Maintain governance, transparency, and manager readiness at every stage.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
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
          py-16
          sm:py-20
          text-center
        "
      >

        {/* Label */}
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
          Overview
        </p>


        {/* Heading */}
        <h2
          className="
            mt-4
            text-slate-800
            dark:text-white
            text-3xl
            sm:text-4xl
            font-bold
            leading-tight
          "
        >
          A phased, policy-led implementation
        </h2>


        {/* Subtitle */}
        <p
          className="
            mt-4
            text-gray-500
            dark:text-gray-400
            text-base
            leading-7
          "
        >
          ZoikoTime rollout is phased, policy-led, and designed for
          operational control.
        </p>


        {/* Content */}
        <div
          className="
            mt-14
            max-w-[1130px]
            mx-auto
            text-left
            space-y-6
          "
        >
          {points.map((point) => (
            <div key={point.title}>
              <h3
                className="
                  text-gray-700
                  dark:text-gray-200
                  text-sm
                  font-bold
                  leading-5
                "
              >
                {point.title}
              </h3>

              <p
                className="
                  mt-1
                  text-gray-700
                  dark:text-gray-400
                  text-base
                  leading-6
                "
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}