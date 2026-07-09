import React from "react";

export default function WorkforceMonitoringRights() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          8. Workforce Monitoring and Worker-Rights Requirements
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Introduction */}
        <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime is designed for workforce assurance and performance
          intelligence. Because workforce data can materially affect
          individuals, Customers must deploy and use ZoikoTime with heightened
          care.
        </p>

        {/* 8.1 */}
        <div className="mt-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
            8.1 Transparency and Notice
          </h3>

          <p className="mt-5 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Before enabling monitoring, telemetry, screenshots, activity
            tracking, or AI-assisted insights, Customer must provide affected
            workers with clear, accessible, and legally adequate notices that
            describe the nature, purpose, scope, lawful basis, retention
            period, access rights, human review process, and consequences of
            the processing.
          </p>
        </div>

        {/* 8.2 */}
        <div className="mt-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
            8.2 Lawful Basis and Proportionality
          </h3>

          <p className="mt-5 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Customer must determine and document the lawful basis for
            processing worker data as required by applicable law including
            GDPR, UK GDPR, US state privacy laws, employment laws, and
            workplace monitoring laws. Customer must configure the Service so
            that data collected is necessary and proportionate to the disclosed
            purpose.
          </p>
        </div>

        {/* 8.4 */}
        <div className="mt-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
            8.4 Human Review and Due Process
          </h3>

          <p className="mt-5 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Customer must not use ZoikoTime outputs as the sole basis for
            adverse action against a worker. Customer must provide appropriate
            human review, context evaluation, opportunity to challenge or
            correct inaccurate records, and any due process required by law,
            contract, policy, or works council arrangement.
          </p>
        </div>
      </div>
    </section>
  );
}