import React from "react";

export default function SLAScopeAndServiceBoundaries() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        3. SLA Scope and Service Boundaries
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Paragraph */}
      <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        The SLA covers the Core Platform in the Production Environment. It does
        not cover customer networks, customer devices, unsupported browsers,
        customer-managed configurations, external identity providers,
        third-party applications, third-party APIs, third-party payroll or HRIS
        systems, telecommunications carriers, app stores, customer misuse,
        beta services, sandbox environments, trial environments, or custom
        services unless expressly stated in an Order Form.
      </p>

      {/* Sub Heading */}
      <h3 className="mt-10 font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
        3.1 Covered Core Platform Components
      </h3>

      {/* Bullet List */}
      <ul className="mt-6 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Production web application: Access to the ZoikoTime web interface
            for authorized users.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Core APIs: Generally available production APIs used within
            published rate limits and supported configurations.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Authentication-dependent access: ZoikoTime-controlled
            authentication workflows, excluding third-party identity provider
            or customer SSO failures.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Workforce activity capture services: Endpoint, browser, web,
            mobile, and approved capture flows deployed according to
            ZoikoTime documentation.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Workforce state and policy services: Rules-based state
            classification, policy enforcement, governance configuration, and
            workforce intelligence workflows.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Reporting and exports: Core dashboards, reports, evidence bundles,
            timesheet exports, audit exports, and administrator reporting
            services.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Audit and evidence services: Tamper-evident logs, access-to-view
            logs, evidence records, and chain-of-custody preservation
            mechanisms included in the purchased plan.
          </p>
        </li>
      </ul>
    </section>
  );
}