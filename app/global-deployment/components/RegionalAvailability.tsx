import Link from "next/link";

const dimensions = [
  "Technical — services, dependencies, observability, continuity, release readiness",
  "Contractual — contracting authority, terms, DPA, order form, entitlements",
  "Legal and privacy — approved review for the current service and data model",
  "Documentation — product, data-flow, configuration, support, limitation docs",
  "Monitoring and operations — health, alerts, incident ownership, change control",
  "Commercial — entitlement, sales ownership, capacity, launch terms",
];

const summary = [
  { label: "Defined", value: "12" },
  { label: "Evidence missing", value: "3" },
  { label: "Under review", value: "4" },
  { label: "Blocked", value: "1" },
  { label: "Approved", value: "6" },
  { label: "Active", value: "5" },
  { label: "Degraded", value: "0" },
  { label: "Suspended", value: "1" },
  { label: "Withdrawn", value: "2" },
];

const statusStyles: Record<string, string> = {
  Operational: "bg-emerald-50 text-emerald-700",
  Approved: "bg-emerald-50 text-emerald-700",
  Reviewed: "bg-emerald-50 text-emerald-700",
  Covered: "bg-emerald-50 text-emerald-700",
  "Under review": "bg-blue-50 text-blue-700",
  "Evidence missing": "bg-amber-50 text-amber-700",
  "Pilot restricted": "bg-indigo-50 text-indigo-700",
  "Not assessed": "bg-slate-100 text-slate-600",
  Suspended: "bg-red-50 text-red-600",
  Withdrawn: "bg-red-50 text-red-600",
};

const registry = [
  {
    scope: "Scope A",
    technical: "Operational",
    contractual: "Approved",
    legal: "Reviewed",
    support: "Covered",
    publishability: "Public eligible",
  },
  {
    scope: "Scope B",
    technical: "Operational",
    contractual: "Under review",
    legal: "Under review",
    support: "Evidence missing",
    publishability: "Controlled response",
  },
  {
    scope: "Scope C",
    technical: "Pilot restricted",
    contractual: "Not assessed",
    legal: "Not assessed",
    support: "Not assessed",
    publishability: "Internal only",
  },
  {
    scope: "Scope D",
    technical: "Suspended",
    contractual: "Approved",
    legal: "Under review",
    support: "Withdrawn",
    publishability: "Withdraw immediately",
  },
];

function StatusPill({ label }: { label: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold leading-5 ${statusStyles[label]}`}
    >
      {label}
    </span>
  );
}

export default function RegionalAvailability() {
  return (
    <section id="verification-method" className="scroll-mt-24 w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[420px_1fr] lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
              Regional Availability &amp; Commercial Eligibility
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              We Publish the Verification Method, Not a Country List
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-slate-400">
              Six dimensions are assessed separately for your intended
              deployment scope. A passing technical status does not make a
              region available, and interest, locale, or IP address never
              implies commercial eligibility.
            </p>

            {/* Dimension Checklist */}
            <ul className="mt-6 flex flex-col gap-3">

              {dimensions.map((dimension) => (
                <li key={dimension} className="flex gap-3">

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-1 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="5.75"
                      stroke="currentColor"
                      strokeWidth="1.57"
                    />
                    <path
                      d="M5.7 8.1L7.3 9.7L10.3 6.5"
                      stroke="currentColor"
                      strokeWidth="1.57"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-base font-semibold leading-6 text-white">
                    {dimension}
                  </span>

                </li>
              ))}

            </ul>

            <Link
              href="/contact-sales"
              className="mt-7 inline-flex self-start rounded-lg bg-emerald-400 px-6 py-3.5 text-base font-bold leading-6 text-white transition hover:bg-emerald-500"
            >
              Confirm availability for your intended deployment scope
            </Link>

            <p className="mt-5 text-xs font-normal leading-5 text-slate-500">
              No speculative availability is shown. If a location has not been
              assessed, the answer is &ldquo;not assessed&rdquo; with a named
              owner and a route to a verified response.
            </p>

          </div>

          {/* Right Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-300">
              Readiness summary — counts, not a score
            </p>

            {/* Summary Tiles */}
            <div className="mt-4 grid grid-cols-2 gap-3.5 sm:grid-cols-3">

              {summary.map((tile) => (
                <div
                  key={tile.label}
                  className="flex flex-col gap-1 rounded-[10px] border border-white/[0.12] bg-white/[0.043] px-3 py-2.5"
                >

                  <span className="text-xs font-semibold leading-5 tracking-wide text-slate-400">
                    {tile.label}
                  </span>

                  <span className="text-lg font-extrabold leading-8 text-white">
                    {tile.value}
                  </span>

                </div>
              ))}

            </div>

            {/* Availability Registry */}
            <div className="mt-8 overflow-x-auto">

              <table className="w-full min-w-[660px] border-collapse text-left">

                <thead>
                  <tr>
                    {[
                      { label: "Scope", width: "w-14" },
                      { label: "Technical", width: "w-32" },
                      { label: "Contractual", width: "w-28" },
                      { label: "Legal", width: "w-28" },
                      { label: "Support", width: "w-36" },
                      { label: "Publishability", width: "w-24" },
                    ].map((heading) => (
                      <th
                        key={heading.label}
                        className={`border-b border-white/[0.12] px-2 pb-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-400 ${heading.width}`}
                      >
                        {heading.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {registry.map((row) => (
                    <tr key={row.scope} className="border-b border-white/[0.07]">

                      <td className="px-2 py-4 align-middle text-xs font-semibold leading-5 text-white">
                        {row.scope}
                      </td>

                      <td className="px-2 py-4 align-middle">
                        <StatusPill label={row.technical} />
                      </td>

                      <td className="px-2 py-4 align-middle">
                        <StatusPill label={row.contractual} />
                      </td>

                      <td className="px-2 py-4 align-middle">
                        <StatusPill label={row.legal} />
                      </td>

                      <td className="px-2 py-4 align-middle">
                        <StatusPill label={row.support} />
                      </td>

                      <td className="px-2 py-4 align-middle text-xs font-normal leading-5 text-slate-300">
                        {row.publishability}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

            <p className="mt-5 text-xs font-normal leading-5 text-slate-500">
              Availability registry, synthetic. Each dimension carries its own
              evidence reference, owner, last-verified and next-review date.
            </p>

            <p className="mt-4 text-xs font-normal leading-5 text-slate-500">
              A passing internal status never publishes a regional claim
              automatically. Content, legal, product, support, commercial,
              accessibility, analytics, route, and QA approvals all remain
              required.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
