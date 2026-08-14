import React from "react";

export default function IncompleteEvidenceStates() {
  const states = [
    {
      name: "Loading",
      desc: "Skeletons preserve layout and loading is announced. Never a temporary zero or “no policy.”",
      highlight: false,
    },
    {
      name: "No evidence",
      desc: "“Policy evidence is not available for this record,” with whether the record has no configured classification or the scope is unsupported.",
      highlight: false,
    },
    {
      name: "Missing historical snapshot",
      desc: "“The policy version used for this historical record is unavailable.” Current policy is not substituted. Limitation marked, remediation routed.",
      highlight: true,
    },
    {
      name: "Policy source stale",
      desc: "Last verified date, owner, affected fields, and whether new evaluations are blocked or review-required.",
      highlight: false,
    },
    {
      name: "Conflicting assignment",
      desc: "Competing references with safe labels, affected scope, owner, and the policy-review route. No fabricated result.",
      highlight: false,
    },
    {
      name: "Jurisdiction context missing",
      desc: "The required context and an authorized review path — and no legal conclusion.",
      highlight: false,
    },
    {
      name: "Source fact unavailable",
      desc: "The missing fact category, source health where permitted, and the impact on evaluation.",
      highlight: false,
    },
    {
      name: "Restricted detail",
      desc: "A role-safe summary and “Some policy details are restricted for your role.” No leak through content, count, or title.",
      highlight: false,
    },
    {
      name: "Permission denied",
      desc: "A clear message plus role, account, and support routes — with no confirmation that a hidden object exists.",
      highlight: false,
    },
    {
      name: "Migration-limited",
      desc: "Migration batch, coverage, and transform version where permitted, plus a missing-history notice.",
      highlight: false,
    },
    {
      name: "Retention-limited",
      desc: "Residual metadata, retention context, and a support route where allowed.",
      highlight: false,
    },
    {
      name: "Version changed while viewing",
      desc: "The historical snapshot stays pinned; the comparison shows a refresh notice. The evidence basis never updates silently.",
      highlight: false,
    },
    {
      name: "Service error",
      desc: "Selected context and filters preserved, retry, a reference ID, and a safe support path.",
      highlight: false,
    },
    {
      name: "No JavaScript",
      desc: "Server-rendered direct answer, snapshot summary, ordered rule trace, limitation text, FAQ, and core links.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7.5xl">
        {/* Title Block */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            When policy evidence is incomplete
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            The governing rule for all of these: never substitute current policy, never fabricate
            a result, never leak restricted content, and never announce that a hidden object exists.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-2xl  bg-white shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className=" bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-slate-900  dark:bg-slate-855 dark:text-slate-105">
                <th className="px-6 py-4 w-64">State</th>
                <th className="px-6 py-4">What is shown</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
              {states.map((item, idx) => {
                const isSnapshot = item.name === "Missing historical snapshot";
                return (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 ${
                      isSnapshot
                        ? "bg-amber-50/40 dark:bg-amber-950/10 text-slate-900 dark:text-white font-medium"
                        : "hover:bg-gray-50/40 dark:hover:bg-slate-850/30 text-gray-600 dark:text-gray-350"
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white text-sm">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm leading-relaxed">
                      {isSnapshot ? (
                        <>
                          “The policy version used for this historical record is unavailable.”{" "}
                          <span className="font-bold text-slate-850 dark:text-slate-200">
                            Current policy is not substituted.
                          </span>{" "}
                          Limitation marked, remediation routed.
                        </>
                      ) : item.name === "Permission denied" ? (
                        <>
                          A clear message plus role, account, and support routes — with{" "}
                          <span className="font-bold text-slate-855 dark:text-slate-200">
                            no confirmation that a hidden object exists
                          </span>
                          .
                        </>
                      ) : (
                        item.desc
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card Stack View */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {states.map((item, idx) => {
            const isSnapshot = item.name === "Missing historical snapshot";
            return (
              <div
                key={idx}
                className={`rounded-xl border p-5 shadow-sm ${
                  isSnapshot
                    ? "border-amber-250 bg-amber-50/30 dark:border-amber-900/40 dark:bg-amber-950/10"
                    : "border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  State Scenario
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {item.name}
                </h4>
                <div className="mt-3 text-xs text-gray-600 dark:text-gray-350 leading-relaxed">
                  {isSnapshot ? (
                    <>
                      “The policy version used for this historical record is unavailable.”{" "}
                      <span className="font-bold text-slate-850 dark:text-slate-200">
                        Current policy is not substituted.
                      </span>{" "}
                      Limitation marked, remediation routed.
                    </>
                  ) : item.name === "Permission denied" ? (
                    <>
                      A clear message plus role, account, and support routes — with{" "}
                      <span className="font-bold text-slate-855 dark:text-slate-200">
                        no confirmation that a hidden object exists
                      </span>
                      .
                    </>
                  ) : (
                    item.desc
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
