"use client";

const integrations = [
  {
    type: "identity",
    title: "HRIS / HCM & Identity",
    description:
      "Sync workers and identity via approved connectors; SSO through SAML 2.0 / OIDC.",
  },
  {
    type: "payroll",
    title: "Payroll, project & finance",
    description:
      "Hand approved, export-eligible records to payroll, project, and finance systems.",
  },
  {
    type: "api",
    title: "APIs & exports",
    description:
      "REST API and governed exports; availability confirmed per account — never invented.",
  },
];

function IntegrationIcon({ type }: { type: string }) {
  if (type === "identity") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 text-teal-600 dark:text-teal-400"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M5 20c.8-3.3 3.2-5 7-5s6.2 1.7 7 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "payroll") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 text-teal-600 dark:text-teal-400"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 9v.01M16 15v.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-teal-600 dark:text-teal-400"
      aria-hidden="true"
    >
      <path
        d="M7 7h10M7 12h10M7 17h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Integrations() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Integrations & Deployment
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Fits your stack — through approved connectors
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            ZoikoTime supplies governed time and attendance records;
            replacement or integration scope depends on approved connectors
            and implementation design.
          </p>
        </div>

        {/* Integration cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                transition-colors
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
              "
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                <IntegrationIcon type={item.type} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/50 dark:bg-emerald-500/10 sm:px-8">
          <p className="text-center text-xs leading-5 text-slate-800 dark:text-slate-300">
            ZoikoTime does not replace your HRIS or payroll; it supplies
            governed time and attendance records. Country coverage, languages,
            residency, compliance, and integrations are confirmed per account
            with approved evidence.
          </p>
        </div>
      </div>
    </section>
  );
}