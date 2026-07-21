const PROVIDES = [
  "Competitive compensation aligned to enterprise SaaS market rates — reviewed annually",
  "Performance-driven progression — advancement based on demonstrated impact, not tenure",
  "Structured role development — clear expectations, regular feedback, defined growth paths",
  "Enterprise exposure — working with global organisations across regulated sectors",
  "Ownership of real problems — no busy work, no abstract initiatives disconnected from outcomes",
  "Respectful, professional environment — high standards applied consistently and fairly",
];

const REQUIRES = [
  "High accountability — you are expected to own your outcomes, not just your tasks",
  "Disciplined execution — quality and accuracy matter; ZoikoTime's outputs have real-world consequences",
  "Real ownership — you will be trusted to make decisions and expected to explain them",
  "Comfort with complexity — enterprise systems, regulatory requirements, and operational constraints are the baseline",
  "Professional maturity — we work with regulators, CFOs, and legal teams; conduct reflects on everyone",
];

export default function CompensationExpectations() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-slate-900 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C] mb-5">
          COMPENSATION &amp; EXPECTATIONS
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-[34px] font-semibold text-[#0D1526] dark:text-white mb-5">
          What You Can Expect Honestly
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 text-left">
          {/* What ZoikoTime Provides */}
          <div className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-8 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition-colors">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              What ZoikoTime Provides
            </h3>

            <ul className="space-y-4">
              {PROVIDES.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What ZoikoTime Requires */}
          <div className="rounded-xl bg-white dark:bg-slate-800 p-6 sm:p-8 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition-colors">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              What ZoikoTime Requires
            </h3>

            <ul className="space-y-4">
              {REQUIRES.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-[#E0FCF9] dark:bg-emerald-900/20 p-4">
              <p className="text-sm leading-6 text-[#00796B] dark:text-emerald-300">
                This is not an environment that suits everyone—and that is by
                design. The people who thrive here are those who find
                accountability energising rather than limiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}