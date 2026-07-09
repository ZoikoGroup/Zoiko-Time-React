import React from "react";

const subProcessors = [
  {
    name: <>ZoikoTime Cloud<br />Infrastructure</>,
    purpose: <>Primary processing and storage infrastructure —<br />all core platform data</>,
    region: "EU / UK",
    safeguards: <>Full DPA flow-down · SOC 2 Type II · ISO<br />27001 · GDPR Art. 28 obligations</>,
  },
  {
    name: <>Audit Trail Storage<br />Provider</>,
    purpose: <>Immutable audit log storage and long-term<br />retention infrastructure</>,
    region: "EU",
    safeguards: <>DPA executed · Equivalent GDPR obligations<br />· Annual audit verification</>,
  },
  {
    name: <>Identity Verification<br />Infrastructure</>,
    purpose: <>Session identity verification components and<br />biometric-free liveness signals</>,
    region: "EU / UK",
    safeguards: <>DPA flow-down · Privacy-by-design<br />validation · No biometric storage</>,
  },
  {
    name: <>Email Delivery<br />(Notifications)</>,
    purpose: <>Transactional notification delivery — alerts,<br />reports, system communications</>,
    region: "Global",
    safeguards: <>SCCs executed · Data minimisation enforced<br />· No marketing use permitted</>,
  },
  {
    name: <>Analytics Infrastructure<br />(Internal)</>,
    purpose: <>Aggregated platform performance analytics — no<br />customer personal data included</>,
    region: "EU",
    safeguards: <>Anonymisation verified · DPA executed · No<br />personal data in scope</>,
  },
];

export default function SubProcessorTransparency() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Sub-Processor Transparency and Governance
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400 text-base leading-7">
            All sub-processors are contractually bound to equivalent data
            protection obligations — with advance notification of any changes
            and a defined right to object before new sub-processors are engaged.
          </p>
        </div>


        {/* Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">

                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wide text-slate-400">
                    Sub-Processor
                  </th>

                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wide text-slate-400">
                    Purpose
                  </th>

                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wide text-slate-400">
                    Data Region
                  </th>

                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wide text-slate-400">
                    Contractual Safeguards
                  </th>

                </tr>
              </thead>


              <tbody>
                {subProcessors.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 dark:border-slate-800"
                  >

                    <td className="p-5 text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </td>


                    <td className="p-5 text-sm text-slate-700 dark:text-slate-300">
                      {item.purpose}
                    </td>


                    <td className="p-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.region === "Global"
                            ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
                            : "bg-emerald-50 text-teal-700 dark:bg-emerald-950 dark:text-teal-300"
                        }`}
                      >
                        {item.region}
                      </span>
                    </td>


                    <td className="p-5 text-sm text-slate-700 dark:text-slate-300">
                      {item.safeguards}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>


          {/* Bottom Note */}
          <div className="bg-slate-100 dark:bg-slate-800 p-6 border-t border-slate-200 dark:border-slate-700">

            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              All sub-processors are contractually bound to equivalent data
              protection obligations. ZoikoTime remains fully liable for
              sub-processor compliance.
            </p>


            <div className="flex gap-3 mt-5">

              <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-teal-600 flex items-center justify-center text-xs font-bold">
                i
              </div>


              <p className="text-xs text-slate-700 dark:text-slate-300 leading-5">
                Advance notification of new sub-processors is provided with
                30 days&apos; notice. You have 14 days to object to a new
                sub-processor engagement. Objection mechanism available in
                your account settings.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}