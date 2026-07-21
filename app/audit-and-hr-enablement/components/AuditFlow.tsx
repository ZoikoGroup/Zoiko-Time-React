"use client";

const auditFeatures = [
  {
    icon: "📂",
    title: "Audit Case Creation",
    description:
      "Audit events are instantly converted into structured cases with classification, ownership, and evidence linking — no manual intake or unstructured communications.",
  },
  {
    icon: "🔗",
    title: "Evidence Linking",
    description:
      "All relevant session data, policy records, decision logs, and anomaly flags are automatically associated with each audit case — creating a complete and verified evidence chain.",
  },
  {
    icon: "🤖",
    title: "Automated Workflows",
    description:
      "Audit workflows are triggered and orchestrated automatically — routing tasks to the right stakeholders, enforcing deadlines, and escalating exceptions without manual intervention.",
  },
];

const auditOutputs = [
  {
    icon: "📄",
    title: "Audit-Ready Reports",
    description:
      "Export complete, formatted audit packages with all evidence and decisions pre-linked for regulatory submission or internal review.",
  },
  {
    icon: "🔍",
    title: "Complete Traceability",
    description:
      "Every action, access event, and decision carries a full trace from trigger to outcome — every step timestamped and immutable.",
  },
];

export default function AuditFlow() {
  return (
    <section
      className="
        w-full 
        px-4 py-16 
        sm:px-6 
        lg:px-8 lg:py-20
        bg-white 
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-[1040px]">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-xs font-bold uppercase tracking-widest
              text-teal-600
              dark:text-teal-400
            "
          >
            Audit Enablement
          </p>

          <h2
            className="
              mt-6 
              text-3xl font-bold leading-tight
              text-slate-900
              sm:text-4xl
              dark:text-white
            "
          >
            Audit Execution as a Structured System
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-3xl
              text-base leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Transform audit from a reactive, manual process into a structured,
            automated system with built-in evidence, traceability, and
            output-ready reporting.
          </p>
        </div>


        {/* Audit Features */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auditFeatures.map((feature) => (
            <article
              key={feature.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:border-teal-400
                sm:p-8

                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-xl
                dark:hover:border-teal-500/40
              "
            >
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  border
                  border-teal-500/20
                  bg-teal-50
                  text-xl

                  dark:bg-teal-950
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                  mt-7
                  text-lg font-bold leading-7
                  text-slate-900
                  dark:text-white
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-5
                  text-sm leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>


        {/* Audit Outputs */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {auditOutputs.map((output) => (
            <article
              key={output.title}
              className="
                flex flex-col gap-6
                rounded-2xl
                border
                border-teal-200
                bg-teal-50
                p-7
                sm:flex-row
                sm:items-center
                sm:p-8

                dark:border-teal-500/20
                dark:bg-teal-950/40
              "
            >
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-teal-100
                  text-xl

                  dark:bg-teal-500/10
                "
              >
                {output.icon}
              </div>

              <div>
                <h3
                  className="
                    text-base font-bold leading-7
                    text-slate-900
                    dark:text-white
                  "
                >
                  {output.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm leading-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {output.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}