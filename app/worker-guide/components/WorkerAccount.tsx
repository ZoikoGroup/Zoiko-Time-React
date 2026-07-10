import React from "react";

const accountItems = [
  {
    title: "Dashboard",
    description:
      "Current status, recent work sessions, timesheet reminders, important notices, and support links.",
  },
  {
    title: "My Time",
    description:
      "Clock-in/out records, breaks, work sessions, idle periods where enabled, manual entries, and correction history.",
  },
  {
    title: "My Timesheets",
    description:
      "Timesheet periods, submission status, approval status, returned timesheets, and correction requests.",
  },
  {
    title: "My Activity / Work-Session Context",
    description:
      "Available activity context where enabled, such as focus periods, idle periods, app/URL context, or project/task context.",
  },
  {
    title: "My Screenshots (where enabled)",
    description:
      "Screenshot notices or related information where your organization has enabled screenshot features and worker visibility.",
  },
  {
    title: "Help & Support",
    description:
      "Help articles, support guidance, troubleshooting resources, and relevant internal support instructions.",
  },
];

export default function WorkerAccount() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        py-16
        sm:py-20
      "
    >
      <div
        className="
          max-w-5xl
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
              text-teal-600
              dark:text-teal-400
            "
          >
            Your Account
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
            What you may see and do in ZoikoTime
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
            Your account may include tools for reviewing records, submitting
            timesheets, requesting corrections, checking notices, and getting
            support. Available options depend on your organization's
            configuration.
          </p>
        </div>

        {/* Account Items */}
        <div
          className="
            mt-12
            space-y-7
          "
        >
          {accountItems.map((item) => (
            <div key={item.title}>
              <h3
                className="
                  text-sm
                  font-bold
                  leading-5
                  text-gray-700
                  dark:text-gray-200
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  sm:text-base
                  leading-6
                  text-gray-700
                  dark:text-gray-400
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