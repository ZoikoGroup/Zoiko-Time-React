import Link from "next/link";
const data = [
  "Leadership accountability",
  "Human-centered oversight",
  "Responsible AI principles",
  "Role-based governance",
];

export default function Hero() {
  return (
    <section className="bg-[#DFF8F3] dark:bg-gray-900 px-6 py-16 md:py-24 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-[#00C6A933] bg-[#00C6A91A] px-3 py-1 text-xs font-semibold tracking-wide text-[#00C6A9] dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300 mb-4">
            Leadership &amp; Governance
          </span>

          <h1 className="mb-5 text-3xl font-bold leading-tight text-[#0F0F0F] dark:text-white md:text-[46px]">
            Governed Workforce
            <br />
            Intelligence Starts With
            <br />
            Accountability
          </h1>

          <p className="mb-4 max-w-2xl text-[17px] leading-7 text-[#0F0F0FA6] dark:text-gray-300">
            ZoikoTime is designed with leadership accountability,
            responsible AI principles, role-based controls, audit-ready
            records, and human-centered oversight for organizations that
            need trusted workforce intelligence.
          </p>

          <p className="mb-8 max-w-xl text-[15px] leading-7 text-[#0F0F0F73] dark:text-gray-400">
            Because ZoikoTime supports time records, activity signals,
            approvals, payroll confidence, client billing, and workforce
            decisions, the platform must be built with governance at its
            foundation — not added later.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-a-demo"
    className="inline-flex items-center justify-center rounded-lg bg-[#009D8C] px-6 py-3 font-medium text-white shadow-[0_4px_20px_rgba(0,157,140,0.4)] transition hover:bg-teal-700"
  >
    Request a ZoikoTime Demo
  </Link>

  <Link
    href="/start-free"
    className="inline-flex items-center justify-center rounded-lg border border-[#009D8C] px-6 py-3 font-medium text-slate-800 transition hover:bg-teal-100 dark:border-teal-400 dark:text-white dark:hover:bg-teal-900/30"
  >
    Start Free Trial
  </Link>
</div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/leadership-governance/hero.png"
            alt="ZoikoTime platform"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="mx-auto mt-12 max-w-7xl rounded-xl border border-[#0F0F0F12] bg-[#0F0F0F0A] dark:border-gray-700 dark:bg-gray-800 transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-6 py-5 ${
                index !== data.length - 1
                  ? "border-b sm:border-b-0 lg:border-r border-[#0F0F0F14] dark:border-gray-700"
                  : ""
              }`}
            >
              <div className="h-2 w-2 rounded-sm bg-[#00C6A9]" />

              <span className="text-sm font-medium text-[#0F0F0F] dark:text-gray-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}