export default function HighRiskDeployment() {
  return (
    <section
      className="
        w-full
        max-w-[696px]
        mx-auto
        mt-14
      "
    >

      {/* Heading */}
      <h2
        className="
          text-2xl
          leading-8
          font-extrabold
          text-slate-900
          dark:text-white
        "
      >
        17. High-Risk and Regulated Deployment Conditions
      </h2>


      {/* Divider */}
      <div
        className="
          w-12
          h-[3px]
          mt-3
          rounded-full
          bg-teal-600
          dark:bg-teal-400
        "
      />


      {/* Paragraph 1 */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        Certain AI use cases in employment, worker management, workforce
        monitoring, automated decision support, or significant employment
        decisions may be regulated as high-risk in particular jurisdictions.
        Customers must assess whether their deployment triggers these
        requirements before enabling or relying on relevant features.
      </p>


      {/* Paragraph 2 */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        For EU deployments: assess the EU AI Act, GDPR, local labor law, and
        works council rules. For UK deployments: assess UK GDPR, Data
        Protection Act 2018, ICO employment practices guidance, and
        consultation rules. For US deployments: assess federal, state, city,
        employment, privacy, wage-hour, anti-discrimination, biometric, and
        automated decision tool requirements.
      </p>

    </section>
  );
}