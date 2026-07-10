import React from "react";

const overviewCards = [
  {
    title: "Your time",
    description:
      "View work sessions, clock-in/out records, breaks, manual entries, and time history where available.",
    icon: "/WorkerOverview/time.svg",
  },
  {
    title: "Your timesheets",
    description:
      "Review timesheet periods, submitted time, approval status, returned items, and correction requests.",
    icon: "/WorkerOverview/timesheets.svg",
  },
  {
    title: "Your work-session context",
    description:
      "Understand context such as active time, idle time, app/URL context, or project activity where enabled.",
    icon: "/WorkerOverview/context.svg",
  },
  {
    title: "Your visibility",
    description:
      "Understand what information may be visible to you and to authorized reviewers based on role-based permissions.",
    icon: "/WorkerOverview/visibility.svg",
  },
  {
    title: "Your corrections",
    description:
      "Request corrections when a time entry, timesheet, or work record appears incomplete or inaccurate.",
    icon: "/WorkerOverview/corrections.svg",
  },
  {
    title: "Your support",
    description:
      "Find guidance through the Help Center, your organization's internal support routes, or ZoikoTime support where available.",
    icon: "/WorkerOverview/support.svg",
  },
];

export default function WorkerOverview() {
  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
        py-16
        sm:py-20
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
        "
      >
        {/* Header */}
        <div className="text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              leading-5
              text-teal-600
              dark:text-teal-400
            "
          >
            Overview
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              font-bold
              leading-tight
              text-slate-800
              dark:text-white
            "
          >
            What ZoikoTime helps you understand
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            ZoikoTime helps create clearer records of work time, work sessions,
            timesheets, corrections, approvals, and workforce operations.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {overviewCards.map((card) => (
            <div
              key={card.title}
              className="
                min-h-[224px]
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                p-7
              "
            >
              {/* Icon */}
              <div
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-50
                  dark:bg-teal-500/10
                "
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-5 h-5"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-8
                  text-base
                  font-semibold
                  leading-7
                  text-slate-800
                  dark:text-white
                "
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}