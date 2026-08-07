import Image from "next/image";

const pairs = [
  {
    problem: "A sync moves data but hides who authorized it.",
    answer:
      "Connection owner, authorizer, scope, service identity, and activation approval are visible.",
  },
  {
    problem: "A field mapping changes meaning silently.",
    answer:
      "Mapping version, source, target, transformation, default, test, and approver are explicit.",
  },
  {
    problem: "A schema change breaks records after release.",
    answer:
      "Compatibility check, version state, impact review, staged test, and rollback are required.",
  },
  {
    problem: "A marketing page implies compatibility that isn't current.",
    answer:
      "Controlled inventory, owner, evidence, review date, and withdrawal behavior govern every claim.",
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
            Integration governance, not just plumbing
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Four failures a governed connection is designed to prevent — each
            replaced with a visible, accountable control.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-5 lg:grid-cols-2">
          {pairs.map(({ problem, answer }) => (
            <div
              key={problem}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-2.5 border-b border-slate-200 pb-3 dark:border-slate-700">
                <Image
                  src="/enterprise-integrations/cross-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="mt-1 h-4 w-4 shrink-0"
                />
                <p className="text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                  {problem}
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-3">
                <Image
                  src="/enterprise-integrations/tick-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="mt-1 h-4 w-4 shrink-0"
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
