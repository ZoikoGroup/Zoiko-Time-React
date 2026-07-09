import React from "react";

export default function ProcessingScope() {
  const processedData = [
    {
      title: "Identity Data",
      description:
        "Worker identity for session attribution — name, role, unique identifier, employment status. No biometric data collected or processed.",
    },
    {
      title: "Activity & Session Data",
      description:
        "Session start/end times, activity signals, continuity indicators, and confidence scoring data generated during verified workforce sessions.",
    },
    {
      title: "Device & System Data",
      description:
        "Device identifiers, operating system signals, network indicators, and system metadata used for session verification and fraud detection.",
    },
    {
      title: "Contextual Signals",
      optional: true,
      description:
        "Location and environment signals — collected only when explicitly enabled by customer policy and with appropriate worker transparency.",
    },
  ];

  const purposes = [
    {
      title: "Workforce Assurance",
      description:
        "Session verification, confidence scoring, anomaly detection, and payroll integrity assurance — the core governance function of the platform.",
    },
    {
      title: "Performance Intelligence",
      description:
        "Aggregated workforce performance signals used to generate management intelligence — processed at population level, not for individual surveillance.",
    },
    {
      title: "Audit Documentation",
      description:
        "Generation of tamper-evident evidence records supporting workforce audit, legal proceedings, regulatory inspection, and payroll dispute resolution.",
    },
    {
      title: "Compliance Reporting",
      description:
        "Production of compliance documentation for regulatory, governance, and contractual purposes — formatted for immediate regulatory and legal use.",
    },
  ];

  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          What Is Processed and Why
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-slate-500 dark:text-slate-300 leading-7">
          Processing scope is defined and configurable by customer policy.
          <br className="hidden md:block" />
          ZoikoTime applies data minimisation at the architecture level — only
          what is necessary for defined purposes is processed.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-white">
              Data Categories Processed
            </h3>

            <div className="space-y-4">
              {processedData.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>

                    {item.optional && (
                      <span className="rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                        Optional
                      </span>
                    )}
                  </div>

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-white">
              Purpose of Processing
            </h3>

            <div className="space-y-4">
              {purposes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-slate-200 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h4 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}