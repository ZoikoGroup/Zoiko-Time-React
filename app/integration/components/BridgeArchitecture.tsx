import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const layers = [
  {
    layer: "Zoiko Sema source",
    contents:
      "Approved workspace-scoped meetings and recaps, channels and spaces, structured decisions and actions, workspace administration context, governed AI-generated outputs.",
    evidence:
      "Exact categories require registry approval.",
  },
  {
    layer: "Governed bridge",
    contents:
      "Workspace mapping, organization mapping, purpose, context scope, role permissions, privacy mode, policy and jurisdiction, review-before-sync, service identity, test and acceptance, status, exception handling, audit history.",
    evidence:
      "Mapping version, policy version, authorization, test result, approver, effective date, last successful exchange, exceptions, last review.",
  },
  {
    layer: "ZoikoTime destination",
    contents:
      "Approved workforce context, policy alignment, review queues, evidence references, organization-level reporting availability.",
    evidence:
      "Downstream workflows only after separate ZoikoTime controls.",
  },
];

const notImplied = [
  "Every message or meeting is exported",
  "Hidden collection or unrestricted access",
  "Continuous employee monitoring",
  "Automatic time creation or behavior scoring",
  "Universal two-way sync or instantaneous delivery",
];

const actualStatements = [
  "Only mapped workspaces participate",
  "Only approved context categories move or are referenced",
  "Direction, timing, and method appear only from a validated contract",
  "Human review sits between context and consequence",
];

export default function BridgeArchitecture() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[800px] text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Governed Bridge Architecture
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Three Distinct Layers, With the Boundary
            <br className="hidden md:block" />
            Made Explicit
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-base leading-7 text-slate-600 dark:text-slate-300">
            The bridge is a control surface, not a pipe. Every exchange carries
            a mapping version, a policy version, an authorization, a test
            result, and an approver.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="w-48 px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                    Layer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                    Contents
                  </th>

                  <th className="w-80 px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                    Control Evidence
                  </th>
                </tr>
              </thead>

              <tbody>
                {layers.map((item) => (
                  <tr
                    key={item.layer}
                    className="border-t border-slate-200 dark:border-slate-800"
                  >
                    <td className="px-6 py-6 align-top text-sm font-semibold text-slate-900 dark:text-white">
                      {item.layer}
                    </td>

                    <td className="px-6 py-6 align-top text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.contents}
                    </td>

                    <td className="px-6 py-6 align-top text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Cards */}
          <div className="space-y-6 p-6 lg:hidden">
            {layers.map((item) => (
              <div
                key={item.layer}
                className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.layer}
                </h3>

                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Contents
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.contents}
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Control Evidence
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
                {/* Status Badge */}
        <div className="mt-6 flex justify-center">
          <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Direction subject to approved configuration
          </span>
        </div>

        {/* Bottom Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Not Implied */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-3">
              <FiXCircle className="h-5 w-5 text-red-500" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                This page must not imply
              </h3>
            </div>

            <ul className="space-y-4">
              {notImplied.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-base font-bold text-red-500">
                    ×
                  </span>

                  <span className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actual Statements */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 text-emerald-500" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                What is actually stated
              </h3>
            </div>

            <ul className="space-y-4">
              {actualStatements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-base font-bold text-emerald-500">
                    ✓
                  </span>

                  <span className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}