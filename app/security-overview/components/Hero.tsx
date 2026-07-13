const features = [
  "Encryption at Rest & in Transit",
  "Audit Logging & Evidence Trails",
  "Policy-Driven Access Enforcement",
  "Continuous Monitoring & Alerting",
  "Role-Based Access Control",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Background Glow */}
      <div className="absolute -top-60 -right-44 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:px-10 lg:px-16 lg:py-24">
        {/* Top Label */}
        <span className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-teal-500">
          Security Overview
        </span>

        {/* Heading */}
        <h1 className="max-w-5xl font-sans text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-[52px] lg:leading-[60px]">
          <span className="block text-slate-900 dark:text-white">
            Security Engineered for
          </span>

          <span className="block text-teal-500">
            Enterprise Assurance, Control and Trust
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-500 dark:text-slate-300 md:text-lg">
          ZoikoTime is designed with a security-first architecture that protects
          workforce data, enforces policy-driven access, and maintains system
          integrity across distributed environments.
        </p>

        {/* Highlight Card */}
        <div className="mt-10 w-full max-w-3xl rounded-xl border border-teal-500/20 bg-teal-500/10 px-8 py-6">
          <p className="text-center text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
            Security is not a feature. It is a continuously validated system of
            controls, monitoring, and accountability.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(0,157,140,0.40)] transition hover:bg-teal-700">
            ↓ Download Security Overview
          </button>

          <button className="rounded-lg border border-teal-600 px-8 py-3 text-base font-medium text-teal-600 transition hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800">
            View Architecture
          </button>
        </div>

        {/* Feature Pills */}
        <div className="mt-14 flex w-full flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center rounded-full border border-teal-600/60 bg-white/40 px-4 py-2 backdrop-blur-sm dark:bg-slate-800/40"
            >
              <span className="mr-3 h-2 w-2 rounded-sm bg-teal-500" />

              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}