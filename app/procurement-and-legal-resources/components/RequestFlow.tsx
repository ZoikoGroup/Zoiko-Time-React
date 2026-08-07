"use client";

const steps = [
  {
    number: "1",
    title: "Identify the resource",
    description:
      "Search or browse the registry by category, access class, or keyword.",
  },
  {
    number: "2",
    title: "Confirm organization & purpose",
    description:
      "Provide your organization, role, and the evaluation purpose the resource supports.",
  },
  {
    number: "3",
    title: "Route for review",
    description:
      "Controlled and customer-specific requests are routed to an authorized reviewer — never released automatically.",
  },
  {
    number: "4",
    title: "Receive scoped access",
    description:
      "Approved resources are delivered with version, effective date, and any applicable NDA scope noted.",
  },
  {
    number: "5",
    title: "Stay current",
    description:
      "You're notified when a resource you received is updated or re-reviewed.",
  },
];

export default function RequestFlow() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Guided Resource Request Flow
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            A structured request — not a black box
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-10 w-full max-w-[820px]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex gap-4 py-6 ${
                index !== 0
                  ? "border-t border-slate-200 dark:border-slate-800"
                  : ""
              }`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-500/10">
                <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="rounded-lg bg-green-400 px-6 py-3.5 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(14,31,61,0.28)] transition hover:bg-green-500">
            Request Procurement Resources
          </button>
        </div>
      </div>
    </section>
  );
}