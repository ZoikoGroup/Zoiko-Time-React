import React from "react";

const securityRows = [
  {
    category: "Account data",
    examples: "Names, emails, roles, user profiles",
    security: "Identity, account administration, access control",
  },
  {
    category: "Organization data",
    examples:
      "Company profile, departments, teams, policies, settings",
    security:
      "Tenant separation, configuration governance",
  },
  {
    category: "Time records",
    examples:
      "Clock-in/out, breaks, timesheets, approvals",
    security:
      "Integrity, auditability, export controls",
  },
  {
    category: "Activity signals",
    examples:
      "App/URL activity, idle time, work-session data where enabled",
    security:
      "Policy-based access, transparency, retention controls",
  },
  {
    category: "Screenshots",
    examples:
      "Screenshots where enabled by customer policy",
    security:
      "Redaction, access control, storage, retention",
  },
  {
    category: "Reports",
    examples:
      "Workforce analytics, productivity, attendance reports",
    security:
      "Permissioning, export governance, audit logs",
  },
  {
    category: "Evidence records",
    examples:
      "Evidence packages, review records, exception history",
    security:
      "Integrity, legal hold, chain-of-custody support",
  },
  {
    category: "Billing data",
    examples:
      "Plan, subscription, invoice, account details",
    security:
      "Restricted access, payment-provider boundaries",
  },
  {
    category: "Integration data",
    examples:
      "Data exchanged with payroll, HR, PM, identity, billing systems",
    security:
      "API security, permissions, integration controls",
  },
];

export default function SecurityDataProtected() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-teal-600
            "
          >
            What We Protect
          </p>


          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-slate-800
              md:text-4xl
              dark:text-white
            "
          >
            Data ZoikoTime protects
          </h2>


          <p
            className="
              mt-6
              text-base
              font-normal
              leading-7
              text-gray-500
              dark:text-gray-300
            "
          >
            Categories of customer and workforce-related data may vary by
            plan, configuration, integrations, jurisdiction, enabled
            features, and user activity.
          </p>

        </div>


        {/* Desktop Table */}
        <div
          className="
            mt-14
            hidden
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow
            lg:block
            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-slate-800 text-white">

                <th className="px-5 py-4 text-left text-xs font-semibold">
                  Data category
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold">
                  Examples
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold">
                  Security consideration
                </th>

              </tr>
            </thead>


            <tbody>
              {securityRows.map((row, index) => (
                <tr
                  key={row.category}
                  className={`
                    border-t
                    border-slate-200
                    dark:border-slate-700
                    ${
                      index % 2 === 1
                        ? "bg-gray-50 dark:bg-slate-800/60"
                        : "bg-white dark:bg-slate-900"
                    }
                  `}
                >

                  <td
                    className="
                      px-5
                      py-4
                      text-sm
                      font-normal
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {row.category}
                  </td>


                  <td
                    className="
                      px-5
                      py-4
                      text-sm
                      font-normal
                      text-gray-700
                      dark:text-slate-300
                    "
                  >
                    {row.examples}
                  </td>


                  <td
                    className="
                      px-5
                      py-4
                      text-sm
                      font-normal
                      text-gray-700
                      dark:text-slate-300
                    "
                  >
                    {row.security}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>


        {/* Mobile Cards */}
        <div className="mt-10 space-y-5 lg:hidden">

          {securityRows.map((row) => (

            <div
              key={row.category}
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                dark:border-slate-700
                dark:bg-slate-900
              "
            >

              <h3
                className="
                  text-base
                  font-normal
                  text-slate-800
                  dark:text-white
                "
              >
                {row.category}
              </h3>


              <div className="mt-4">

                <p className="text-xs font-semibold uppercase text-teal-600">
                  Examples
                </p>

                <p className="mt-1 text-sm font-normal text-gray-600 dark:text-slate-300">
                  {row.examples}
                </p>

              </div>


              <div className="mt-4">

                <p className="text-xs font-semibold uppercase text-teal-600">
                  Security consideration
                </p>

                <p className="mt-1 text-sm font-normal text-gray-600 dark:text-slate-300">
                  {row.security}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Text */}
        <p
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-center
            text-base
            font-normal
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          The exact data processed depends on customer configuration,
          enabled modules, user roles, plan, integrations, and applicable
          agreements.
        </p>


      </div>
    </section>
  );
}