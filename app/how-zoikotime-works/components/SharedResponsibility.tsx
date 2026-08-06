import React from "react";

export default function SharedResponsibility() {
  const responsibilities = [
    {
      role: "Organization / customer",
      description:
        "Define lawful and appropriate policy, jurisdiction scope, roles, permissions, data sources, approval authority, integrations, retention, support, and downstream use.",
    },
    {
      role: "Worker",
      description:
        "Provide or review permitted information, submit corrections, follow applicable process, and use support/escalation routes.",
    },
    {
      role: "Manager / reviewer",
      description:
        "Review context within authority, request information, decide permitted items, provide reasons, and escalate conflicts.",
    },
    {
      role: "ZoikoTime",
      description:
        "Apply configured deterministic logic, preserve configured records/evidence, enforce approved access and workflow behavior, expose states, and provide documented product/support boundaries.",
    },
    {
      role: "Connected system / provider",
      description:
        "Authenticate, receive/send approved data, return acknowledgments/errors, preserve processing integrity, and support reconciliation per contract.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Shared Responsibility
        </p>


        {/* Heading */}
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Who configures, submits, reviews, approves,
            <br className="hidden lg:block" />
            delivers, and reconciles
          </h2>
        </div>


        {/* Description */}
        <div className="max-w-2xl text-center">
          <p className="text-base leading-7 text-gray-500 dark:text-slate-300">
            Responsibility is explicit across every role — and customer,
            professional, and downstream-system responsibilities are
            non-transferable.
          </p>
        </div>


        {/* Responsibility Table */}
        <div className="mt-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900">

          {/* Table Header */}
          <div className="grid grid-cols-1 bg-slate-800 text-white sm:grid-cols-[220px_1fr]">

            <div className="px-4 py-3 text-xs font-semibold">
              Role
            </div>

            <div className="px-4 py-3 text-xs font-semibold">
              Responsibility across the lifecycle
            </div>

          </div>


          {/* First Rows */}
          <div>
            {responsibilities.slice(0, 3).map((item, index) => (
              <div
                key={item.role}
                className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] ${
                  index % 2 === 1
                    ? "bg-gray-50 dark:bg-slate-800/50"
                    : "bg-white dark:bg-slate-900"
                }`}
              >

                <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-700">
                  <p className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
                    {item.role}
                  </p>
                </div>


                <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-700">
                  <p className="text-xs leading-5 text-gray-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

                        {/* Remaining Rows */}
            {responsibilities.slice(3).map((item, index) => (
              <div
                key={item.role}
                className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-slate-800/50"
                    : "bg-white dark:bg-slate-900"
                }`}
              >

                <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-700">
                  <p className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
                    {item.role}
                  </p>
                </div>


                <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-700">
                  <p className="text-xs leading-5 text-gray-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>


        {/* Boundary Notice */}
        <div className="mt-6 w-full max-w-5xl rounded-xl border border-slate-200 bg-gray-50 px-5 py-5 dark:border-slate-700 dark:bg-slate-900">

          <div className="flex items-start gap-4">

            {/* Info Icon */}
            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gray-700 text-[10px] text-gray-700 dark:border-slate-300 dark:text-slate-300">
              i
            </div>


            <p className="text-sm leading-6 text-gray-700 dark:text-slate-300">
              <span className="font-bold">
                Non-transferable boundary.
              </span>{" "}
              ZoikoTime does not replace customer employment decisions,
              payroll validation, legal advice, tax analysis, compliance
              review, or downstream system responsibility.
            </p>

          </div>

        </div>


      </div>
    </section>
  );
}