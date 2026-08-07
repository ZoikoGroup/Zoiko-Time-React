import Image from "next/image";

const deterministic = [
  "Same facts + same policy = same result, always",
  "Every result traces to a named, versioned rule",
  "Policy owners can read and approve the exact logic",
  "Changes are versioned, dated, and auditable",
];

const blackBox = [
  "Same facts can produce different results over time",
  "Results are hard to trace back to a specific cause",
  "Model logic is difficult for a policy owner to inspect",
  "Drift can occur silently as models retrain",
];

export default function DeterministicMeans() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            What Deterministic Means
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Rule-based classification, explained side by side
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-2xl border border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Deterministic */}
            <div className="bg-white dark:bg-slate-800">
              <div className="bg-teal-600 px-5 py-4">
                <p className="text-base font-bold leading-6 text-white">
                  Deterministic (ZoikoTime)
                </p>
              </div>

              <ul>
                {deterministic.map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-5 py-3.5 ${
                      index > 0
                        ? "border-t border-slate-200 dark:border-slate-700"
                        : ""
                    }`}
                  >
                    <Image
                      src="/deterministic-time-classification/tick-mark.svg"
                      alt=""
                      aria-hidden="true"
                      width={14}
                      height={14}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                    <span className="text-sm font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Black box */}
            <div className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 md:border-l md:border-t-0">
              <div className="bg-slate-800 px-5 py-4">
                <p className="text-base font-bold leading-6 text-white">
                  Black-box ML classification
                </p>
              </div>

              <ul>
                {blackBox.map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-5 py-3.5 ${
                      index > 0
                        ? "border-t border-slate-200 dark:border-slate-700"
                        : ""
                    }`}
                  >
                    <Image
                      src="/deterministic-time-classification/circle-mark.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="mt-0.5 h-4 w-4 shrink-0"
                    />
                    <span className="text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 flex items-start justify-center gap-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
          <Image
            src="/deterministic-time-classification/Frame.svg"
            alt=""
            aria-hidden="true"
            width={14}
            height={14}
            className="mt-0.5 h-3.5 w-3.5 shrink-0"
          />
          <span>
            ZoikoTime uses AI only for verified anomaly flagging or signal
            quality — never for classification itself.
          </span>
        </p>
      </div>
    </section>
  );
}
