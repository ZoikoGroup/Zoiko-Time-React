import { FiArrowRight, FiCheck } from "react-icons/fi";

const semaFeatures = [
  "Meetings and messaging",
  "Channels and spaces",
  "Decisions and actions",
  "Workspace administration",
  "Approved AI-generated outputs",
];

const bridgeFeatures = [
  "Explicit workspace mapping",
  "Role permissions and privacy modes",
  "Approved context scope",
  "Policy and jurisdiction",
  "Review-before-sync, health, audit",
];

const zoikoTimeFeatures = [
  "Reviewable workforce records",
  "Deterministic policy application",
  "Human review",
  "Evidence Ledger history",
  "Approved reporting and workflows",
];

export default function SemaZoikoFlow() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-figtree text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            How do Zoiko Sema and ZoikoTime work
            <br className="hidden md:block" />
            together?
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Zoiko Sema and ZoikoTime are independent products that organizations
            may connect through an optional, customer-configured integration.
            Authorized administrators map approved Sema workspaces to
            ZoikoTime organizational scopes, define permitted context
            categories, roles, privacy modes, policy and jurisdiction
            treatment, test the connection, and approve activation.
            Communication context remains governed and reviewable; it does not
            automatically become time worked, payroll truth, performance
            evidence, discipline, legal status, or compliance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-col items-center justify-center gap-8 xl:flex-row">
          {/* Card 1 */}
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Independent Product
            </span>

            <h3 className="mt-5 font-figtree text-xl font-bold text-slate-900 dark:text-white">
              Zoiko Sema
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Governed communication.
            </p>

            <ul className="mt-6 space-y-3">
              {semaFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center text-emerald-500 xl:py-32">
            <FiArrowRight className="hidden h-9 w-9 xl:block" />
            <div className="rotate-90 xl:hidden">
              <FiArrowRight className="h-9 w-9" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400">
              Optional Bridge
            </span>

            <h3 className="mt-5 font-figtree text-xl font-bold text-slate-900 dark:text-white">
              Governed Bridge
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Customer-configured, workspace-scoped.
            </p>

            <ul className="mt-6 space-y-3">
              {bridgeFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center text-emerald-500 xl:py-32">
            <FiArrowRight className="hidden h-9 w-9 xl:block" />
            <div className="rotate-90 xl:hidden">
              <FiArrowRight className="h-9 w-9" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Independent Product
            </span>

            <h3 className="mt-5 font-figtree text-xl font-bold text-slate-900 dark:text-white">
              ZoikoTime
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Workforce Truth Infrastructure.
            </p>

            <ul className="mt-6 space-y-3">
              {zoikoTimeFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <FiCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>

            <p className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
              Zoiko Sema remains useful without ZoikoTime. ZoikoTime remains
              useful without Zoiko Sema. The connection is optional and
              separately qualified—neither product is a feature hidden inside
              the other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}