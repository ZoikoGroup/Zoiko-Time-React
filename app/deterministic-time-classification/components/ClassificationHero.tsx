import Link from "next/link";
import Image from "next/image";

const assurances = [
  "Rule-based, not AI",
  "Every result is explainable",
  "Human review, always",
];

const trace = [
  {
    step: "1",
    label: "Source Facts",
    headline: "Clock-in 09:07 · Site: Meridian+",
    detail: "Worker type: Hourly · Source: Mobile app",
  },
  {
    step: "2",
    label: "Context",
    headline: "Scheduled start 09:00",
    detail: "Grace window: 5 min · Timezone: America/Chicago",
  },
  {
    step: "3",
    label: "Rules",
    headline: "Policy v4.2 · Grace-Window-Tolerance",
    detail: "Precedence: site override > org default",
  },
];

export default function ClassificationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F6F9F9] dark:from-slate-950 dark:to-slate-900">
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[760px] rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
              Deterministic Time Classification
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.15] text-slate-800 dark:text-white sm:text-5xl">
              Every classification,
              <br />
              <span className="text-teal-600 dark:text-teal-400">
                traceable back to a rule
              </span>
            </h1>

            <p className="mt-6 max-w-[500px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
              ZoikoTime classifies workforce records using policy-bound rules —
              not AI. Approved facts, context, and rule precedence produce a
              result you can explain, trace, and review, every time.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/start-free"
                className="inline-flex items-center justify-center rounded-[10px] bg-teal-600 px-7 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
              >
                Start Free
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold leading-4 text-slate-800 transition hover:border-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Request Enterprise Demo
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Image
                    src="/deterministic-time-classification/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0"
                  />
                  <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rule trace panel */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between gap-3 bg-slate-800 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-sm bg-green-500 shadow-[0px_0px_0px_3px_rgba(25,179,107,0.25)]"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold leading-5 text-white">
                  Rule Trace
                </p>
              </div>
              <p className="text-xs font-normal leading-5 text-white/60">
                Record #48213 · synthetic data
              </p>
            </div>

            <ol className="px-6 py-6">
              {trace.map(({ step, label, headline, detail }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold leading-6 text-teal-700 dark:bg-slate-700 dark:text-teal-400">
                      {step}
                    </span>
                    <span
                      className="w-0.5 flex-1 bg-gray-300 dark:bg-slate-700"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="pb-5">
                    <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                      {headline}
                    </p>
                    <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}

              {/* Classification result */}
              <li className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-slate-800">
                    <Image
                      src="/deterministic-time-classification/Classification-Result.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </span>
                  <span
                    className="w-0.5 flex-1 bg-gray-300 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-1 pb-5">
                  <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                    Classification Result
                  </p>
                  <p className="mt-2 rounded-[10px] border border-emerald-100 bg-emerald-50 px-4 py-3 text-base font-normal leading-6 text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    Late Clock-In · exceeds 5-min grace by 2 min
                  </p>
                </div>
              </li>

              {/* Review state */}
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-orange-100">
                  <Image
                    src="/deterministic-time-classification/Review-State.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                    Review State
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-yellow-700">
                    Pending Review
                  </p>
                  <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    Worker context requested
                  </p>
                </div>
              </li>
            </ol>

            <div className="border-t border-slate-200 bg-[#F6F9F9] px-6 py-3.5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                Rule version{" "}
                <span className="font-semibold text-slate-800 dark:text-white">
                  4.2
                </span>{" "}
                · effective Jul 1, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
