import React from "react";

export default function ExceptionEvidenceTable() {
  const items = [
    {
      name: "Inherited policy",
      fields: "Source scope, source policy and version, inherited fields, target scope, effective period.",
      highlighted: false,
    },
    {
      name: "Local configuration",
      fields: "Delegated fields only, local owner, reason, effective period, approval where required.",
      highlighted: false,
    },
    {
      name: "Approved exception",
      fields: "Exception reference, requested scope, reason category, evidence references, approver and authority, conditions, start, expiry, review date, fallback.",
      highlighted: false,
    },
    {
      name: "Emergency override",
      fields: "Named authority or function, reason, scope, duration, review-after, status, post-event review. Shown only where capability and permission support it.",
      highlighted: false,
    },
    {
      name: "Precedence decision",
      fields: "Competing policy or rule references, the precedence rule and version, outcome, owner, evaluation time.",
      highlighted: false,
    },
    {
      name: "Conflict",
      fields: "Each relevant candidate, why it is unresolved, the blocked effect, the owner, and the remediation route. No fabricated result.",
      highlighted: true,
    },
    {
      name: "Expired exception",
      fields: "Historical use remains visible if it affected the record. Current state shows as expired — not silently removed.",
      highlighted: false,
    },
    {
      name: "Withdrawn policy",
      fields: "Historical application remains attributable, with withdrawal status and reason summary where authorized, and downstream implications where known.",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24  font-sans">
      <div className="mx-auto max-w-7.5xl">
        {/* Title Block */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Exception, precedence, and override evidence
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Eight evidence objects. The two at the end matter most: an expired exception and a
            withdrawn policy remain attributable if they affected the record.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl  bg-white shadow-md ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-slate-900 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-105">
                <th className="px-6 py-4 w-48">Evidence object</th>
                <th className="px-6 py-4">Minimum fields and rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
              {items.map((item, idx) => {
                const isConflict = item.name === "Conflict";
                return (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 ${
                      isConflict
                        ? "bg-amber-50/40 dark:bg-amber-950/10 text-slate-900 dark:text-white font-medium"
                        : "hover:bg-gray-50/40 dark:hover:bg-slate-850/30 text-gray-600 dark:text-gray-350"
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white text-sm">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm leading-relaxed">
                      {isConflict ? (
                        <>
                          Each relevant candidate, why it is unresolved, the blocked effect, the
                          owner, and the remediation route.{" "}
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            No fabricated result.
                          </span>
                        </>
                      ) : item.name === "Expired exception" ? (
                        <>
                          Historical use remains visible if it affected the record. Current state
                          shows as expired —{" "}
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            not silently removed
                          </span>
                          .
                        </>
                      ) : (
                        item.fields
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card Stack View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {items.map((item, idx) => {
            const isConflict = item.name === "Conflict";
            return (
              <div
                key={idx}
                className={`rounded-xl border p-5 shadow-sm ${
                  isConflict
                    ? "border-amber-250 bg-amber-50/30 dark:border-amber-900/40 dark:bg-amber-950/10"
                    : "border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Evidence Object
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {item.name}
                </h4>
                <div className="mt-3 text-xs text-gray-600 dark:text-gray-350 leading-relaxed">
                  {isConflict ? (
                    <>
                      Each relevant candidate, why it is unresolved, the blocked effect, the owner,
                      and the remediation route.{" "}
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        No fabricated result.
                      </span>
                    </>
                  ) : item.name === "Expired exception" ? (
                    <>
                      Historical use remains visible if it affected the record. Current state shows
                      as expired —{" "}
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        not silently removed
                      </span>
                      .
                    </>
                  ) : (
                    item.fields
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Sub-Note */}
        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 leading-normal">
          An exception that has since expired still explains a record it once changed. Removing it
          from the evidence when it lapses would leave a record whose result no longer follows from
          its visible rules.
        </p>
      </div>
    </section>
  );
}
