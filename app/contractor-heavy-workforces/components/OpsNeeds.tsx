"use client";

const requirements = [
  {
    title: "Governed records",
    description: (
      <>
        One traceable record per
        <br className="hidden sm:block" />
        engagement, not scattered
        <br className="hidden sm:block" />
        spreadsheets.
      </>
    ),
  },
  {
    title: "Transparent workflows",
    description: (
      <>
        Contractors and reviewers see
        <br className="hidden sm:block" />
        the same record, the same way.
      </>
    ),
  },
  {
    title: "Human review",
    description: (
      <>
        Approvals require a named
        <br className="hidden sm:block" />
        reviewer — nothing clears itself.
      </>
    ),
  },
  {
    title: "Audit-ready export",
    description: (
      <>
        Clean, evidenced records finance
        <br className="hidden sm:block" />
        and procurement can trust.
      </>
    ),
  },
];

export default function OpsNeeds() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 sm:gap-10">
          {/* Heading */}
          <div className="flex w-full max-w-[620px] flex-col items-start gap-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                What Contractor Operations Require
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Four things every mixed workforce
              <br className="hidden sm:block" /> needs.
            </h2>
          </div>

          {/* Requirements */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((requirement) => (
              <div
                key={requirement.title}
                className="flex min-h-[168px] flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-2.5">
                  {/* Accent mark */}
                  <div className="relative mt-1 flex h-4 w-2.5 shrink-0 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full border-[1px] border-teal-600 dark:border-teal-400" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
                    <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                      {requirement.title}
                    </h3>

                    <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}