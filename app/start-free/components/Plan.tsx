import React from "react";

const plans = [
  {
    feature: "Core time records",
    verified: "✓",
    governed: "✓",
    sovereign: "✓",
    enterprise: "✓",
  },
  {
    feature: "AI confidence scoring",
    verified: "Basic",
    governed: "Full + anomaly detection",
    sovereign: "Advanced + policy",
    enterprise: "Custom",
  },
  {
    feature: "Policy engine",
    verified: "—",
    governed: "✓",
    sovereign: "Jurisdiction-aware",
    enterprise: "Custom",
  },
  {
    feature: "Screenshots",
    verified: "Optional basic",
    governed: "Configurable + redaction",
    sovereign: "Advanced controls",
    enterprise: "Custom",
  },
  {
    feature: "Evidence packages",
    verified: "—",
    governed: "✓",
    sovereign: "Chain of custody",
    enterprise: "Custom",
  },
  {
    feature: "Legal hold",
    verified: "—",
    governed: "—",
    sovereign: "✓",
    enterprise: "✓",
  },
  {
    feature: "SSO / SAML / SCIM",
    verified: "—",
    governed: "Optional",
    sovereign: "Included",
    enterprise: "Custom IdP",
  },
  {
    feature: "Data retention",
    verified: "90 days",
    governed: "2 years",
    sovereign: "Advanced / custom",
    enterprise: "Custom residency",
  },
  {
    feature: "API & webhooks",
    verified: "—",
    governed: "Limited",
    sovereign: "Full",
    enterprise: "Custom",
  },
  {
    feature: "Support",
    verified: "Standard",
    governed: "Priority",
    sovereign: "Security / compliance path",
    enterprise: "Dedicated team",
  },
  {
    feature: "Trial",
    verified: "30 days free",
    governed: "30 days free",
    sovereign: "30 days / assisted",
    enterprise: "Sales-led pilot",
  },
];

export default function Plan() {
  return (
    <section className="w-full bg-emerald-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Plan Comparison
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            What triggers the upgrade.
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">

          <table className="min-w-[950px] w-full border-collapse">

            <thead>

              <tr className="bg-gray-50 dark:bg-slate-800">

                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                  Feature
                </th>

                <th className="px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                  Verified · $8
                </th>

                <th className="px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                  Governed · $16
                </th>

                <th className="px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                  Sovereign · $28
                </th>

                <th className="px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                  Enterprise
                </th>

              </tr>

            </thead>

            <tbody>

                              {plans.map((plan, index) => (
                <tr
                  key={index}
                  className="hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-slate-700">
                    {plan.feature}
                  </td>

                  <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                    {plan.verified}
                  </td>

                  <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                    {plan.governed}
                  </td>

                  <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                    {plan.sovereign}
                  </td>

                  <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
                    {plan.enterprise}
                  </td>
                </tr>
              ))}

                          </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}