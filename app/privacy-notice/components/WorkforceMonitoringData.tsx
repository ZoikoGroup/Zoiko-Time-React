import React from "react";

export default function WorkforceMonitoringData() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6 bg-white dark:bg-slate-950">

      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          5. Workforce, Monitoring, and Platform Data
        </h2>


        {/* Teal Line */}
        <div
          className="
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
            mt-4
            mb-6
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          Because ZoikoTime supports workforce assurance and time verification,
          the platform may process work-related data that can be sensitive in
          an employment context. This is governed primarily by the customer
          organization's deployment configuration and the Data Processing
          Addendum.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          Depending on customer configuration, workforce and monitoring-related
          data may include: time activity records, idle time events, application
          and website context, screenshots (where enabled with appropriate
          notices), task and project metadata, work-state classifications,
          AI-assisted insights, anomaly flags, confidence scores, policy
          events, payroll support data, and audit records.
        </p>


        {/* Information Box */}
        <div
          className="
            w-full
            bg-emerald-50
            dark:bg-emerald-950/40
            rounded-tr-lg
            rounded-br-lg
            border-l-[3px]
            border-teal-600
            p-4
          "
        >

          <p
            className="
              text-sm
              font-semibold
              font-['Plus_Jakarta_Sans']
              leading-6
              text-teal-700
              dark:text-teal-400
            "
          >
            ZoikoTime is not designed to replace customer obligations under
            employment law, labor law, workplace monitoring rules, works
            council requirements, collective bargaining arrangements, or
            employee consultation duties. Those obligations remain with the
            deploying organization.
          </p>

        </div>


      </div>

    </section>
  );
}