export default function EnterpriseEvaluation() {
  const questions = [
    [
      "Which metric families are currently released?",
      "A current controlled inventory, or transparent qualification. No speculative list.",
    ],
    [
      "Can we see exact definitions?",
      "Metric catalog fields, versioning, tests, owners, and limitations.",
    ],
    [
      "How is data quality shown?",
      "Freshness, completeness, exclusions, corrections, reconciliation, source health.",
    ],
    [
      "How is privacy protected?",
      "Aggregation, minimum group, suppression, drill-down, export, retention, access evidence.",
    ],
    [
      "How are roles separated?",
      "Role matrix, object scope, sharing and export permissions, access reviews.",
    ],
    [
      "Can reports be reproduced?",
      "Metric and report version, scope, filters, time zone, source snapshot, calculation, evidence.",
    ],
    [
      "How are anomalies treated?",
      "Neutral review workflow, human authority, correction, and no hidden scoring.",
    ],
    [
      "What happens when data changes?",
      "Recalculation, series breaks, report versioning, schedule impact, correction lineage.",
    ],
    [
      "What can be exported or integrated?",
      "Current approved formats and destinations only, governed by integration and export controls.",
    ],
    [
      "Does this guarantee payroll or legal compliance?",
      "No. Shared responsibility and the professional-advice boundary remain explicit.",
    ],
  ];


  const locations = [
    ["Metric definition and tests", "Product documentation"],
    ["Access and export permissions", "Identity & Access"],
    ["Policy versions and exceptions", "Administration & Policy"],
    ["Sources and reconciliation", "Enterprise Integrations"],
    ["What is collected and excluded", "Anti-Surveillance Principles"],
    ["How human authority is preserved", "Human-in-Command Controls"],
    ["Security controls and evidence", "Security & procurement resources"],
    ["What is operationally available now", "System Status"],
  ];


  return (
    <section className="w-full px-4 py-16 sm:px-8 lg:px-32">

      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8">


        {/* Header */}

        <div className="flex max-w-[780px] flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
            Enterprise Evaluation
          </p>


          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Ten Questions to Ask Any Workforce
            <br className="hidden sm:block" />
            Analytics Vendor
          </h2>


          <p className="max-w-[650px] text-base leading-7 text-slate-600 dark:text-slate-300">
            Including us. Each row states the evidence we are expected to
            produce — and where that evidence lives.
          </p>

        </div>



        {/* Evaluation Table */}

        <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">

          <table className="min-w-[900px] w-full border-collapse">

            <thead>

              <tr className="bg-slate-50 dark:bg-slate-800">

                <th className="w-96 px-4 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Evaluation question
                </th>


                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  Evidence this page must provide
                </th>

              </tr>

            </thead>


            <tbody>

              {questions.map(([question, answer]) => (

                <tr
                  key={question}
                  className="border-t border-slate-200 dark:border-slate-700"
                >

                  <td className="px-4 py-4 text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                    {question}
                  </td>


                  <td className="px-4 py-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {answer}
                  </td>

                </tr>

              ))}

            </tbody>


          </table>

        </div>



        {/* Where answers live */}

        <div className="w-full">

          <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
            Where each answer lives
          </h3>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">


            {locations.map(([title, link]) => (

              <div
                key={title}
                className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                dark:border-slate-700
                dark:bg-slate-900
                "
              >

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {title}
                </h4>


                <p className="mt-3 text-sm font-bold text-emerald-500">
                  {link} →
                </p>

              </div>

            ))}



            <div
              className="
              rounded-2xl
              border border-slate-200
              bg-slate-50
              p-6
              dark:border-slate-700
              dark:bg-slate-800
              "
            >

              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Legal or payroll compliance
              </h4>


              <p className="mt-3 text-base leading-6 text-slate-600 dark:text-slate-300">
                Not guaranteed. Shared responsibility and the
                professional-advice boundary apply.
              </p>

            </div>


          </div>

        </div>


      </div>

    </section>
  );
}