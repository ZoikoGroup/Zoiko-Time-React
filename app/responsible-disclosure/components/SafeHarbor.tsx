import { FiLock, FiCheckCircle } from "react-icons/fi";

const dataRules = [
  "Never send us passwords, private keys, tokens, or credential dumps",
  "Avoid unnecessary customer or worker data in your report",
  "Reporters are never profiled, scored, or routed to sales for using this page",
  "Attachments are scanned and access-controlled before review",
];

export default function SafeHarbor() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Safe Harbor &amp; Data Handling
            </span>
          </div>

          <h2 className="mt-3 max-w-[600px] text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            Good-faith research, and what we never ask for.
          </h2>
        </div>

        {/* Legal Approval Notice */}
        <div
          className="
            mt-10
            rounded-2xl
            border
            border-slate-200
            bg-gray-50
            p-6
            sm:p-7
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
            Safe-harbor language: pending Legal approval
          </h3>

          <p className="mt-3 max-w-[1000px] text-xs leading-5 text-gray-500 sm:text-sm dark:text-slate-400">
            Exact good-faith safe-harbor text must come from an approved Legal
            registry — it will display here once approved. This page does not
            paraphrase legal protection in a way that could expand
            authorization, confidentiality, or liability limits.
          </p>
        </div>

        {/* Data Minimization */}
        <div
          className="
            mt-5
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            sm:p-7
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {/* Card Heading */}
          <div className="flex items-center gap-3">
            <FiLock
              className="
                h-4
                w-4
                shrink-0
                text-blue-950
                dark:text-blue-300
              "
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-slate-100">
              Data minimization
            </h3>
          </div>

          {/* Rules */}
          <ul className="mt-6 space-y-4">
            {dataRules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <FiCheckCircle
                  className="
                    mt-0.5
                    h-3.5
                    w-3.5
                    shrink-0
                    text-teal-600
                    dark:text-teal-400
                  "
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span className="text-sm leading-5 text-gray-700 dark:text-slate-300">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}