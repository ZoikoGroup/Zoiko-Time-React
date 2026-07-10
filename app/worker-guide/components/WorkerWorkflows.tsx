import React from "react";

const workflowItems = [
  {
    number: "1",
    title: "Review your time",
    description:
      "Check your recorded work sessions, breaks, manual entries, and exceptions before submission.",
  },
  {
    number: "2",
    title: "Submit your timesheet",
    description:
      "Submit the relevant period according to your organization's workflow.",
  },
  {
    number: "3",
    title: "Wait for review",
    description:
      "Your timesheet may be reviewed by a manager, administrator, HR, finance, payroll, or another authorized reviewer.",
  },
  {
    number: "4",
    title: "Request corrections where needed",
    description:
      "If something appears incomplete or inaccurate, use the correction request process where available.",
  },
  {
    number: "5",
    title: "Track the outcome",
    description:
      "Corrections, approvals, returned timesheets, and review history should be visible where your organization has enabled those workflows.",
  },
];

export default function WorkerWorkflow() {
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
            Workflows
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
            Time records, timesheets, and corrections
          </h2>

          <p
            className="
              mt-5
              text-sm
              sm:text-base
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Here's how the most important worker workflows usually work.
          </p>
        </div>


        {/* Workflow Items */}
        <div className="mt-12 space-y-7">
          {workflowItems.map((item) => (
            <div key={item.number}>

              <p
                className="
                  text-base
                  leading-6
                  text-gray-700
                  dark:text-gray-300
                "
              >
                {item.number}
              </p>

              <h3
                className="
                  mt-1
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