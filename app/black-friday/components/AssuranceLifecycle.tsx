import SaleBadge from "./SaleBadge";

const steps = [
  {
    title: "Capture",
    text: "Policy-aware time capture across devices and locations — no manual logs.",
  },
  {
    title: "Assure",
    text: "Role-aware assurance signals, risk-based re-verification, and exception-based policy checks.",
  },
  {
    title: "Understand",
    text: "Explainable insights linking time, tools, and outcomes with privacy controls.",
  },
  {
    title: "Document",
    text: "Audit-ready exports, evidence packs, and immutable logs of access and review.",
  },
];

export default function AssuranceLifecycle() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070f1d] px-4 py-16 sm:px-6 sm:py-20 lg:px-20">
      <SaleBadge className="absolute left-20 top-14 hidden lg:block" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Capture → Assure → Understand → Document
          </h2>
          <p className="mt-4 text-base text-slate-400">
            The balanced assurance lifecycle behind every ZoikoTime plan.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/10 bg-[#101828] p-6"
            >
              <span className="bf-display text-2xl font-medium text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
