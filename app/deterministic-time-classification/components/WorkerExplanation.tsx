import Image from "next/image";

const points = [
  '"Late Clock-In — exceeds 5-minute grace window by 2 minutes"',
  'Not "Suspicious" or "Policy Violation" — the exact rule outcome',
  "A direct path to add context or request correction",
];

export default function WorkerExplanation() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Worker Explanation
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            &ldquo;Why was I classified this way?&rdquo; — answered in plain
            language
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Image
            src="\deterministic-time-classification\Worker-Explanation.png"
            alt="A worker reading the explanation for a classification"
            width={441}
            height={331}
            className="h-auto w-full rounded-2xl object-cover shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]"
          />

          <div>
            <h3 className="text-2xl font-bold leading-9 text-slate-800 dark:text-white">
              No jargon, no black box
            </h3>

            <p className="mt-4 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
              Every worker-facing explanation uses the same plain language as
              the underlying rule — not a simplified summary that hides what
              actually happened.
            </p>

            <ul className="mt-6 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Image
                    src="/deterministic-time-classification/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    className="mt-1 h-4 w-4 shrink-0"
                  />
                  <span className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
