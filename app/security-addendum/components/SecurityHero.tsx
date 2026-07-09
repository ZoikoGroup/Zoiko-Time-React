// components/security/SecurityHero.tsx

import Image from "next/image";

const securityFeatures = [
  "Role-based access control",
  "Encryption & data protection",
  "Audit logs & evidence integrity",
  "Administrative controls",
  "Data retention governance",
  "Legal hold support",
  "Secure product practices",
  "Enterprise review support",
];

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 dark:from-slate-950 dark:to-slate-900">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Left Section */}
        <div className="w-full max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Security Addendum
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl dark:text-white">
            Security for workforce
            <br />
            <span className="text-teal-600">
              data, records, and trust
            </span>
          </h1>

          <p className="mt-8 text-base leading-8 text-gray-500 dark:text-slate-300">
            ZoikoTime is designed with layered security, governed access,
            audit-ready records, data-protection controls, and enterprise
            review support for organizations that rely on workforce
            intelligence.
          </p>

          {/* Info Box */}
          <div className="mt-10 rounded-r-xl border-l-4 border-emerald-200 bg-gray-50 p-6 dark:border-emerald-500/40 dark:bg-slate-800">
            <p className="text-sm leading-7 text-gray-500 dark:text-slate-300">
              ZoikoTime helps organizations manage sensitive workforce
              information—time records, activity signals, reports,
              screenshots where enabled, user roles, organizational
              settings, and evidence records. Security is built into how
              the platform manages access, data, auditability, and
              operational controls.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-teal-600 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-teal-700">
              Contact Sales
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
              View Enterprise Readiness
            </button>
          </div>

          <p className="mt-8 text-xs leading-6 text-gray-500 dark:text-slate-400">
            ZoikoTime is a platform of Zoiko Tech Inc., a technology
            subsidiary of Zoiko Group Inc.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Security at a glance
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
            At a glance
          </p>

          <div className="mt-8 space-y-5">
            {securityFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <Image
  src="/securityaddendum/tick.svg"
  alt="Tick"
  width={18}
  height={18}
  className="h-[18px] w-[18px] shrink-0"
/>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}