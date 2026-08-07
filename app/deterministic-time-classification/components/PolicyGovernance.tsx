const steps = [
  {
    title: "Draft change",
    body: "A policy owner proposes a rule change with rationale and scope.",
  },
  {
    title: "Impact preview",
    body: "ZoikoTime shows which records would classify differently under the proposed change, before it's published.",
  },
  {
    title: "Approve & version",
    body: "The change is approved, versioned, and given an effective date — never applied retroactively without record.",
  },
  {
    title: "Publish",
    body: "The new policy version takes effect; prior versions remain fully readable for historical records.",
  },
];

export default function PolicyGovernance() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Policy Governance
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Every rule change is versioned and previewed
          </h2>
        </div>

        <ol className="mx-auto mt-10 max-w-[820px]">
          {steps.map(({ title, body }, index) => (
            <li
              key={title}
              className={`flex gap-5 py-6 ${
                index > 0
                  ? "border-t border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xs font-bold leading-5 text-teal-700 dark:bg-slate-800 dark:text-teal-400">
                {index + 1}
              </span>

              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
