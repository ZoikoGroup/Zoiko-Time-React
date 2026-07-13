export default function AIInsights() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          pt-12
        "
      >

        {/* Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          9. AI and Automated Insights
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime may use rules, analytics, machine learning, and AI-assisted
          models to classify work states, detect anomalies, generate insights,
          identify records requiring review, summarize activity, calculate
          confidence indicators, and support reporting and evidence packaging.
        </p>


        {/* AI Warning Box */}
        <div
          className="
            mt-6
            w-full
            bg-emerald-50
            dark:bg-emerald-900/20
            rounded-tr-lg
            rounded-br-lg
            border-l-[3px]
            border-teal-600
            px-5
            py-4
          "
        >
          <p
            className="
              text-sm
              font-semibold
              leading-6
              text-teal-700
              dark:text-teal-400
            "
          >
            ZoikoTime outputs should not be treated as a sole, final, or
            infallible basis for disciplinary action, termination, demotion,
            pay denial, adverse employment decisions, or legally significant
            decisions. Customers are required to provide meaningful human
            review before taking action based on ZoikoTime AI outputs.
          </p>
        </div>


        {/* Paragraph 2 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          Where applicable, customers are responsible for complying with laws
          governing automated employment decision tools, AI transparency,
          worker consultation, human review, bias assessment, impact
          assessments, and right-to-explanation obligations.
        </p>


      </div>
    </section>
  );
}