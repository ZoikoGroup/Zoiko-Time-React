const informationList = [
  {
    title: "Identity and account data:",
    text: "Name, work email, employee ID, job role, work location, organizational unit, and related identifying information",
  },
  {
    title: "Time and attendance data:",
    text: "Session start/end times, total hours, break records, attendance patterns, and scheduling data",
  },
  {
    title: "Work activity signals:",
    text: "Active vs. idle states, application context (work-relevant), keyboard and mouse activity indicators (aggregate, not keystroke content), and work-object metadata",
  },
  {
    title: "Work-state classifications:",
    text: "Automated and manual classifications of work state, activity confidence scores, productivity context, and policy compliance flags",
  },
  {
    title: "Screenshots (where enabled):",
    text: "Periodic or activity-triggered screenshots of the work screen, subject to applicable notices, frequency settings, privacy protections, and jurisdiction-specific requirements",
  },
  {
    title: "Project and task metadata:",
    text: "Time allocation to projects, tasks, clients, and work objects where integrated with project management or billing systems",
  },
  {
    title: "Device and technical data:",
    text: "Device type, operating system, browser, IP address (for session integrity and security purposes), and application context",
  },
  {
    title: "Policy and audit records:",
    text: "Policy compliance status, anomaly flags, manual edit records, approval logs, and chain-of-custody evidence",
  },
];


export default function ProcessedInformation() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div className="max-w-[696px] mx-auto pt-12">

        {/* Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          5. What Information May Be Processed
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
          "
        />


        {/* Description */}
        <p
          className="
            mt-6
            text-base
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          The specific data processed depends on the customer's configuration,
          plan, jurisdiction, integrations, and internal policies. ZoikoTime
          may process the following categories of information where enabled by
          the customer organization:
        </p>


        {/* Information List */}
        <div className="mt-8 space-y-6">

          {informationList.map((item, index) => (
            <div
              key={index}
              className="
                flex
                gap-4
                items-start
              "
            >

              {/* Arrow */}
              <span
                className="
                  text-teal-600
                  text-base
                  font-bold
                  leading-7
                "
              >
                ›
              </span>


              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-1
                  sm:gap-5
                "
              >

                <h3
                  className="
                    min-w-[145px]
                    text-base
                    font-bold
                    leading-7
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    text-base
                    font-normal
                    leading-7
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}