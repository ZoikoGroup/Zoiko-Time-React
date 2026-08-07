"use client";

import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaRobot,
  FaFileContract,
  FaServer,
  FaEyeSlash,
  FaGlobe,
} from "react-icons/fa";

const assuranceCards = [
  {
    title: "Trust Center",
    description: "Entry point for all assurance material.",
    icon: FaShieldAlt,
  },
  {
    title: "Security",
    description: "Access, authorization, operational security.",
    icon: FaLock,
  },
  {
    title: "Privacy",
    description: "Purpose limitation, minimization, rights.",
    icon: FaUserShield,
  },
  {
    title: "Anti-Surveillance",
    description: "The exact invariant across every configuration.",
    icon: FaEyeSlash,
  },
  {
    title: "Human-in-Command",
    description: "Where authority sits and stays.",
    icon: FaUserShield,
  },
  {
    title: "AI Governance",
    description: "Approved scope and prohibited uses.",
    icon: FaRobot,
  },
  {
    title: "DPA & Subprocessors",
    description: "Contractual data terms.",
    icon: FaFileContract,
  },
  {
    title: "Service Status",
    description: "Incidents, maintenance and deprecations.",
    icon: FaServer,
  },
];

export default function TrustAssurance() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Security, Privacy, AI Governance &amp; Trust
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Assurance Routes,
            <br />
            Not a Badge Wall
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            We do not publish certifications, audit reports,
            encryption claims, residency, uptime or compliance
            marks without current verified scope and approval.
            What we publish is where to get the evidence.
          </p>

        </div>

        {/* Assurance Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {assuranceCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                  <Icon className="text-xl text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Continue in Part 2 */}
                {/* Professional & Region Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                <FaShieldAlt className="text-lg text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Professional Boundary
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The integration provides software and context workflows.
              It does not provide legal, tax, payroll, employment,
              immigration, benefits, disciplinary, performance,
              compliance, or other professional advice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                <FaGlobe className="text-lg text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Region Boundary
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Office, product, user, workspace, hosting, data and
              support regions are distinct. None of them may be
              inferred from another.
            </p>
          </div>

        </div>

        {/* Table Heading */}
        <div className="mt-16">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Jurisdiction, Residency,
            Retention &amp; Lifecycle
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            The following controls define how jurisdiction,
            residency, retention and lifecycle events are governed
            throughout the platform.
          </p>

        </div>

        {/* Continue in Part 3 */}        {/* Responsive Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="min-w-full border-collapse">

              <thead className="bg-slate-100 dark:bg-slate-800">

                <tr>

                  <th className="w-64 border-b border-slate-200 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Control
                  </th>

                  <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:border-slate-700 dark:text-white">
                    Required Treatment
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-200 dark:border-slate-700">

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Jurisdiction Status
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Not evaluated • Professional review required •
                    Approved configuration • Restricted •
                    Unavailable • Exception approved • Review expired.
                  </td>

                </tr>

                <tr className="border-b border-slate-200 dark:border-slate-700">

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Transfer Register
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Category, source, destination, purpose,
                    direction, location, access, safeguards,
                    subprocessors, retention, owner and review
                    date. Only approved public detail is
                    published.
                  </td>

                </tr>

                <tr className="border-b border-slate-200 dark:border-slate-700">

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Retention Stages
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Source system, bridge queue or reference,
                    review and evidence, destination record,
                    export, support and incident, then
                    retirement, deletion or archive.
                  </td>

                </tr>

                <tr className="border-b border-slate-200 dark:border-slate-700">

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Source Deletion or Change
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Does not silently erase audit history or
                    downstream effects. Policy defines reference
                    availability, correction, archival,
                    reconciliation and notice.
                  </td>

                </tr>

                <tr className="border-b border-slate-200 dark:border-slate-700">

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Legal Hold Conflict
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Routes to authorized review. The integration
                    makes no automatic legal determination.
                  </td>

                </tr>

                <tr>

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    Data Minimization
                  </td>

                  <td className="px-6 py-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Never copy more communication content than
                    required. Prefer source references and
                    approved structured outcomes.
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Continue in Part 4 */}
              </div>
    </section>
  );
}