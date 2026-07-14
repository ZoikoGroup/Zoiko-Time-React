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
    <section className="bg-[#F4F7FA] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">

        <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
          COMPENSATION &amp; EXPECTATIONS
        </span>
        <h2 className="text-4xl md:text-[34px]  font-semibold text-[#0D1526] mb-5">
          What You Can Expect Honestly
        </h2>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h3 className="mb-4 text-[18px] font-bold text-slate-900">
              What ZoikoTime Provides
            </h3>
            <ul className="space-y-3">
              {PROVIDES.map((text) => (
                <li key={text} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h3 className="mb-4 text-[18px] font-bold text-slate-900">
              What ZoikoTime Requires
            </h3>
            <ul className="space-y-3">
              {REQUIRES.map((text) => (
                <li key={text} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg bg-[#E0FCF9] p-4 text-sm text-[#00C6A9]">
              This is not an environment that suits everyone and that is by
              design. The people who thrive here are those who find
              accountability energising rather than limiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
