import type { ReactNode } from "react";

const actions: {
  action: string;
  mayAutomate: ReactNode;
  mustRemainVisible: string;
  prohibited?: boolean;
}[] = [
  {
    action: "Arithmetic & time calculation",
    mayAutomate: "Yes, using versioned deterministic rules.",
    mustRemainVisible:
      "Inputs, formula or rule, rounding, timezone, limitations.",
  },
  {
    action: "Time classification",
    mayAutomate: "Yes, as deterministic policy-bound output.",
    mustRemainVisible:
      "Rule version, jurisdiction and context, source, correction route.",
  },
  {
    action: "Anomaly or quality flag",
    mayAutomate: "Yes — deterministic, or approved ML within declared scope.",
    mustRemainVisible:
      "Reason category, confidence limitation, source quality, human review.",
  },
  {
    action: "Case routing",
    mayAutomate: "Yes, by role, entity, jurisdiction, workload, and conflict rules.",
    mustRemainVisible: "Assignment reason, fallback, reassignment history.",
  },
  {
    action: "Reminder or escalation timer",
    mayAutomate: "Yes, where policy allows.",
    mustRemainVisible:
      "Timer basis, due state, recipient — and no automatic consequential outcome on expiry.",
  },
  {
    action: "Evidence summary",
    mayAutomate: "Yes, including Kairos where approved.",
    mustRemainVisible:
      "Source references, omissions and limitations, human verification.",
  },
  {
    action: "Proposed decision text",
    mayAutomate: "Only where approved, and clearly labelled as a draft.",
    mustRemainVisible:
      "Human author or reviewer, source, edits — and no automatic issuance.",
  },
  {
    action: "Final consequential decision",
    mayAutomate: (
      <>
        <span className="font-bold">No.</span> Not under any configuration.
      </>
    ),
    mustRemainVisible:
      "Authorized human action, reason, evidence, and audit are all required.",
    prohibited: true,
  },
];

export default function AutomationBoundaries() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Assistive &amp; Deterministic Actions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            What May Be Automated, and What Must Stay Visible
          </h2>

        </div>

        {/* Action Table */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Action", width: "w-[27%]" },
                    { label: "May automate when approved", width: "w-[35%]" },
                    {
                      label: "Must remain visible & reviewable",
                      width: "w-[38%]",
                    },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-5 pb-4 pt-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400 ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {actions.map((row) => (
                  <tr
                    key={row.action}
                    className={`border-b border-stone-200 last:border-b-0 dark:border-slate-800 ${
                      row.prohibited
                        ? "bg-[#FDFAFA] dark:bg-red-950/10"
                        : ""
                    }`}
                  >

                    <td
                      className={`px-5 py-4 align-top text-sm font-bold leading-6 ${
                        row.prohibited
                          ? "text-red-700 dark:text-red-400"
                          : "text-sky-950 dark:text-white"
                      }`}
                    >
                      {row.action}
                    </td>

                    <td className="px-5 py-4 align-top text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.mayAutomate}
                    </td>

                    <td className="px-5 py-4 align-top text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.mustRemainVisible}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}
