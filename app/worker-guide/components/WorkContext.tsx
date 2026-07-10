import React from "react";

const contextItems = [
  {
    title: "What work-session context may include",
    description:
      "Active and idle periods; app usage context; URL context; project or task context; device or session status; work-session patterns; exceptions requiring review.",
  },
  {
    title: "What it should help with",
    description:
      "More accurate time records; timesheet review; correction requests; project or billing validation; operational planning; workload conversations; evidence-based review.",
  },
];

export default function WorkContext() {
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
            Context
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
            Work-session context and visibility
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
            ZoikoTime may show work-session context to help explain how time
            records were created and reviewed. Visibility depends on your
            organization's role-based permissions.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            mt-12
            space-y-7
          "
        >
          {contextItems.map((item) => (
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

        {/* Footer Note */}
        <p
          className="
            mt-10
            max-w-2xl
            mx-auto
            text-center
            text-sm
            sm:text-base
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          Authorized reviewers may include managers, administrators, HR,
          finance, payroll, legal, compliance, IT, or support personnel where
          appropriate.
        </p>
      </div>
    </section>
  );
}