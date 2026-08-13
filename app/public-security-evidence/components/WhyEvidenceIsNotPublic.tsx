import React from 'react';

type Row = {
  evidenceClass: string;
  treatment: string;
  neverHappens: React.ReactNode;
  /** The row most often violated in practice, so it is called out visually. */
  emphasis?: boolean;
};

const rows: Row[] = [
  {
    evidenceClass: 'Security overview',
    treatment: 'Open public summary with scope and review date.',
    neverHappens: 'Turning a summary into a certification or penetration-test claim.',
  },
  {
    evidenceClass: 'High-level control domains',
    treatment: 'Approved descriptions and status only.',
    neverHappens: 'Exposing sensitive configurations, rules, thresholds, or secrets.',
  },
  {
    evidenceClass: 'Independent assurance',
    treatment: 'Exact verified name, scope, period, and status — only when current.',
    neverHappens: (
      <>
        <span className="font-bold text-sky-950 dark:text-white">
          A logo without evidence
        </span>
        , or a scope broader than the report supports.
      </>
    ),
  },
  {
    evidenceClass: 'Penetration / security testing',
    treatment: 'Approved approach or public summary only.',
    neverHappens:
      'Exploitable detail, or implying a current test when the summary is stale.',
  },
  {
    evidenceClass: 'Architecture / data flow',
    treatment: 'Public-safe summary.',
    neverHappens: 'Restricted topology, addresses, credentials, tenant or customer data.',
  },
  {
    evidenceClass: 'Internal policies',
    treatment: 'Public only where specifically approved.',
    neverHappens: 'Accidental document indexing.',
  },
  {
    evidenceClass: 'Questionnaire responses',
    treatment: 'Not public — engagement-specific.',
    emphasis: true,
    neverHappens: (
      <span className="font-bold text-sky-950 dark:text-white">
        A searchable public answer dump.
      </span>
    ),
  },
  {
    evidenceClass: 'Incident-specific evidence',
    treatment: 'Governed through status and support.',
    neverHappens: 'Routing live incident detail through a marketing Trust Center.',
  },
  {
    evidenceClass: 'DPA / subprocessors',
    treatment: 'Routed to their existing legal and privacy authorities.',
    neverHappens: 'Duplicating a stale legal list on Security or the Trust Center.',
  },
];

export default function WhyEvidenceIsNotPublic() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Section heading */}
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
            Why some evidence is not public
          </h2>

          <p className="text-sm leading-7 text-zinc-700 dark:text-slate-300 sm:text-base">
            Not withheld to create friction — withheld because publishing it would itself
            create risk, or because it belongs to a specific engagement.
          </p>

        </div>

        {/* Table (horizontally scrollable on small screens) */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/60">
                  {['Evidence class', 'Public treatment', 'What must never happen'].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-4 py-3.5 text-[10px] font-extrabold uppercase leading-5 tracking-wider text-zinc-500 dark:text-slate-400"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.evidenceClass}
                    className={`border-t border-stone-200 dark:border-slate-800 ${
                      row.emphasis
                        ? 'bg-rose-50/50 dark:bg-rose-950/20'
                        : 'bg-white dark:bg-slate-900'
                    }`}
                  >

                    <th
                      scope="row"
                      className="w-[22%] px-4 py-4 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white"
                    >
                      {row.evidenceClass}
                    </th>

                    <td className="w-[38%] px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.treatment}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.neverHappens}
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
