import Image from "next/image";

const pairs = [
  {
    problem: "Users learn by trial and error, creating avoidable mistakes.",
    answer: "Role-based programs teach the right workflow the first time.",
  },
  {
    problem: "Adoption stalls after go-live and reverts to old habits.",
    answer: "Reinforcement, nudges, and refreshers sustain adoption.",
  },
  {
    problem: "No proof that teams are ready for audits or change.",
    answer: "Completion, certification, and adoption evidence on demand.",
  },
  {
    problem: "Support is overwhelmed by repeat how-to questions.",
    answer: "A searchable content library and in-context help deflect tickets.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Why It Matters
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Rollout without training is where value leaks
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            The gap between &lsquo;deployed&rsquo; and &lsquo;adopted&rsquo; is
            closed by structured learning.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1030px] grid-cols-1 gap-6 lg:grid-cols-2">
          {pairs.map(({ problem, answer }) => (
            <div
              key={problem}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Problem */}
              <div className="flex items-start gap-3 border-b border-slate-200 pb-4 dark:border-slate-700">
                <Image
                  src="/training-adoption/cross-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={17}
                  height={17}
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <p className="text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                  {problem}
                </p>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 pt-4">
                <Image
                  src="/training-adoption/tick-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <p className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
