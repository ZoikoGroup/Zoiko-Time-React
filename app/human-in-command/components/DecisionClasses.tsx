const decisionClasses = [
  {
    decisionClass: "Payroll-impacting approval",
    requirement:
      "Final approval or rejection of hours, breaks, adjustments, rates, or records that materially change pay.",
    control:
      "Source lineage, rule version, comparison, reason, authorized approval, correction history.",
  },
  {
    decisionClass: "Disciplinary or misconduct conclusion",
    requirement:
      "Any finding that a person violated policy, acted dishonestly, or should receive discipline.",
    control:
      "Neutral flag, evidence review, protected context, reason, notice, challenge — and no automatic conclusion.",
  },
  {
    decisionClass: "Employment eligibility or termination",
    requirement:
      "Decisions affecting hiring, continued employment, termination, or material work access.",
    control:
      "No autonomous decision. Evidence and workflow may support an authorized external process only.",
  },
  {
    decisionClass: "Legal or regulatory conclusion",
    requirement:
      "Any conclusion that a person or organization complied, breached, owes, is liable, or holds a legal status.",
    control:
      "Records and policy context shown; authorized professionals decide outside automatic classification.",
  },
  {
    decisionClass: "Accommodation or protected-context outcome",
    requirement:
      "Decisions materially affecting a request or protected circumstance.",
    control:
      "Restricted evidence, need-to-know access, conflict routing, human-only outcome.",
  },
  {
    decisionClass: "Appeal or grievance outcome",
    requirement:
      "Affirming, changing, remanding, or superseding a contested outcome.",
    control:
      "Independent authority, new evidence, reason, linked history.",
  },
  {
    decisionClass: "Customer-specific security or privacy disposition",
    requirement:
      "Deciding to disclose restricted evidence or to conclude an incident or request.",
    control:
      "Authorized security or privacy review, access level, reason, audit.",
  },
  {
    decisionClass: "Public operational conclusion",
    requirement:
      "Incident impact, recovery, resolution, or any data-integrity conclusion.",
    control: "Authorized operations review and source-governed evidence.",
  },
];

export default function DecisionClasses() {
  return (
    <section
      id="decision-classes"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Human-Only Decision Classes
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Outcomes That Automation Never Reaches
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Consequence depends on the <em>use and the outcome</em>, not on the
            feature name. A low-risk calculation becomes consequential the
            moment it determines someone&apos;s pay.
          </p>

        </div>

        {/* Decision Class Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Decision class", width: "w-[24%]" },
                    { label: "Human-only requirement", width: "w-[38%]" },
                    { label: "Product-supported control", width: "w-[38%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {decisionClasses.map((row) => (
                  <tr
                    key={row.decisionClass}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.decisionClass}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.requirement}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.control}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* Boundary Callout */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 py-3 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Two things this list is not
          </p>

          <p className="mt-1 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            It is not a universal legal definition of &quot;consequential&quot;
            — that varies by jurisdiction and context. And it does not imply
            that low-risk automation is consequence-free in every setting; the
            same calculation can be trivial in one workflow and decisive in
            another.
          </p>

        </div>

      </div>
    </section>
  );
}
