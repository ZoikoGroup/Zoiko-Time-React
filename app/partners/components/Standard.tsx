import { Info } from "lucide-react";

const cards = [
  {
    title: "Customer-first alignment",
    desc: "Partners should help customers achieve practical value, responsible adoption, and clear business outcomes.",
  },
  {
    title: "Accurate product positioning",
    desc: "Partners must represent ZoikoTime as a workforce intelligence platform — not as a surveillance tool or generic time tracker.",
  },
  {
    title: "Workforce data awareness",
    desc: "Partners should understand the sensitivity of workforce records, activity signals, payroll confidence, reporting, and worker transparency.",
  },
  {
    title: "Implementation quality",
    desc: "Partners involved in rollout should support configuration, training, documentation, change management, and adoption discipline.",
  },
  {
    title: "Commercial integrity",
    desc: "Partnerships must be based on credible opportunities, ethical selling, transparent expectations, and sustainable relationships.",
  },
  {
    title: "Confidentiality & security",
    desc: "Partners may be required to follow confidentiality, data handling, security, and customer information protection expectations.",
  },
];

export default function Standard() {
  return (
    <>
      {/* Standards Section */}
      <section className="bg-[#F6F9F9] px-6 py-12 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
              Partner Standards
            </span>

            <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[34px]">
              Standards that protect customer trust
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#5A6E87] dark:text-slate-400 md:text-base">
              ZoikoTime partner relationships must support customer trust,
              responsible positioning, practical implementation, and long-term
              value creation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cards.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10A28D]" />

                  <h3 className="text-lg font-semibold text-[#0D1526] dark:text-white">
                    {title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#5A6E87] dark:text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert */}
      <section className="bg-white px-6 pb-16 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4 rounded-2xl border border-[#F2DFA8] bg-[#FFF8E8] p-5 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-800/30">
              <Info className="h-5 w-5 text-[#7A5A00] dark:text-yellow-300" />
            </div>

            <p className="text-sm leading-7 text-[#7A5A00] dark:text-yellow-200">
              <span className="font-semibold text-[#5A4300] dark:text-yellow-100">
                Not an ideal fit.
              </span>{" "}
              ZoikoTime is not designed for low-context resale, misleading
              productivity claims, surveillance-led selling, or opportunistic
              partner arrangements that do not create meaningful customer value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}