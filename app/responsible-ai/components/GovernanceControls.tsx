import React from "react";

export default function GovernanceControls() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Governance
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white">
            Enterprise governance controls
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Give enterprise teams the controls to govern AI-assisted workforce review.
          </p>

        </div>


        {/* Content */}
        <div className="mt-14 max-w-[560px] space-y-6">

          <div>
            <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
              Role-based permissions
            </h3>

            <p className="mt-2 text-base leading-6 text-gray-700 dark:text-gray-400">
              Limit AI signals, analytics, and evidence to authorized roles.
            </p>
          </div>


          <div>

                        <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
              Configurable policies
            </h3>

            <p className="mt-2 text-base leading-6 text-gray-700 dark:text-gray-400">
              Configure review rules, thresholds, and escalation routing.
            </p>
          </div>


          <div>
            <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
              Audit trails
            </h3>

            <p className="mt-2 text-base leading-6 text-gray-700 dark:text-gray-400">
              Log signals, reviews, and decisions to support accountability.
            </p>
          </div>


          <div>
            <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
              Escalation controls
            </h3>

            <p className="mt-2 text-base leading-6 text-gray-700 dark:text-gray-400">
              Route sensitive items to the right reviewers under defined rules.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}