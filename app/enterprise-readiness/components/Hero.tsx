import Link from "next/link";
const data = [
  "Governance controls",
  "Security review support",
  "Role-based access",
  "Implementation planning",
  "Audit-ready reporting",
];

export default function Hero() {
  return (
    <section className="bg-[#DFF8F3] dark:bg-gray-900 px-6 py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-[#00C6A933] bg-[#00C6A91A] px-3 py-1 text-xs font-semibold tracking-wide text-[#00C6A9] dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400">
            Enterprise Readiness
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#0F0F0F] dark:text-white md:text-[46px]">
            Workforce Intelligence
            <br />
            Built for Enterprise
            <br />
            Deployment
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-7 text-[#0F0F0FA6] dark:text-gray-300">
            ZoikoTime is designed to support enterprise teams with governance
            controls, security review support, role-based access,
            implementation planning, reporting, and audit-ready workforce
            intelligence.
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#0F0F0F73] dark:text-gray-400">
            From workforce records and time verification to payroll confidence,
            client billing, audit-ready evidence, and AI-assisted insights —
            ZoikoTime is designed to support serious organizational deployment,
            not just individual sign-up.
          </p>

          {/* Buttons */}
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-enterprise-demo"
    className="inline-flex items-center justify-center rounded-lg bg-[#009D8C] px-6 py-3 font-medium text-white shadow-[0_4px_20px_rgba(0,157,140,0.35)] transition hover:bg-teal-700"
  >
    Request an Enterprise Demo
  </Link>

  <Link
    href="/start-free"
    className="inline-flex items-center justify-center rounded-lg border border-[#009D8C] px-6 py-3 font-medium text-slate-800 transition hover:bg-teal-100 dark:border-teal-400 dark:text-white dark:hover:bg-teal-500/10"
  >
    Start Free Trial
  </Link>
</div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/enterprise-readiness/hero.png"
            alt="ZoikoTime platform"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mx-auto mt-12 max-w-7xl rounded-xl border border-[#0F0F0F12] bg-[#0F0F0F0A] dark:border-gray-700 dark:bg-gray-800 transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b border-[#0F0F0F12] px-6 py-5 last:border-b-0 sm:border-r sm:last:border-r-0 sm:border-b-0 dark:border-gray-700"
            >
              <div className="h-2 w-2 rounded-full bg-[#00C6A9]" />

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