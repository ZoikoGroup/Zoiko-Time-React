export default function AIGovernance() {
  const principles = [
    {
      title: "Human-in-command:",
      description:
        "ZoikoTime outputs are decision-support signals and must not replace legally required human judgment.",
    },
    {
      title: "Transparency:",
      description:
        "Workers should receive clear, timely, and accessible information about what is collected, why, how it is used, and how to challenge or correct records.",
    },
    {
      title: "Proportionality:",
      description:
        "Customers must configure features in a way proportionate to legitimate business, legal, operational, security, payroll, billing, or compliance purposes.",
    },
    {
      title: "Explainability:",
      description:
        "Automated insights should be capable of being explained through source signals, policy rules, confidence indicators, timestamps, and evidence records.",
    },
    {
      title: "Auditability:",
      description:
        "Material workforce records, AI-assisted classifications, overrides, disputes, and administrative access should be logged and retained appropriately.",
    },
    {
      title: "Privacy by design:",
      description:
        "ZoikoTime should be deployed using the least intrusive configuration suitable for the Customer's legitimate purpose.",
    },
    {
      title: "No secret adverse automation:",
      description:
        "Customers must not use ZoikoTime to make hidden, solely automated, adverse workforce decisions where worker notice, consent, human review, consultation, or legal safeguards are required.",
    },
  ];

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
        3. Core AI Governance Principles
      </h2>

      {/* Teal Divider */}
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

      {/* Description */}
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
        The following principles apply to all AI-enabled and automated insight
        features within ZoikoTime:
      </p>


      {/* Principles */}
      <div
        className="
          mt-4
          space-y-4
        "
      >
        {principles.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              text-base
              leading-7
            "
          >

            {/* Bullet */}
            <span
              className="
                mt-[2px]
                text-teal-600
                text-xl
                font-bold
                leading-7
                dark:text-teal-400
              "
            >
              ›
            </span>


            <p
              className="
                flex-1
                text-slate-700
                dark:text-slate-300
              "
            >
              <span
                className="
                  font-bold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {item.title}
              </span>{" "}
              {item.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}