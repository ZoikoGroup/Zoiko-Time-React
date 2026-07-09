import React from "react";

export default function SubscriptionSnapshot() {
  const rows = [
    {
      topic: "Free trial",
      summary:
        "ZoikoTime's standard free trial is 30 days unless otherwise stated.",
    },
    {
      topic: "Billing start",
      summary:
        "Paid billing begins after trial conversion, paid activation, checkout completion, or order form execution.",
    },
    {
      topic: "Billing cycle",
      summary:
        "Customers may subscribe monthly or annually depending on plan availability.",
    },
    {
      topic: "Annual billing",
      summary:
        "Annual plans may offer savings compared with monthly billing where available.",
    },
    {
      topic: "User-based pricing",
      summary:
        "Subscription fees are generally based on the number of active paid users.",
    },
    {
      topic: "Plan changes",
      summary:
        "Upgrades, downgrades, and add-ons may affect pricing, access, limits, and support.",
    },
    {
      topic: "Renewals",
      summary:
        "Subscriptions may renew automatically unless canceled per the applicable terms.",
    },
    {
      topic: "Cancellations",
      summary:
        "Cancellation timing depends on the plan, checkout terms, billing settings, or agreement.",
    },
    {
      topic: "Taxes",
      summary:
        "Taxes may apply based on location, billing details, tax status, classification, and law.",
    },
    {
      topic: "Enterprise terms",
      summary:
        "May require an order form, MSA, DPA, procurement review, custom billing, or negotiated terms.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">
      
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          Snapshot
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
          Subscription terms at a glance
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-300">
          Formal contract documents, order forms, checkout terms, and
          applicable laws may supplement or override this summary where
          applicable.
        </p>

      </div>


      {/* Table Card */}
      <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">

        <div className="grid grid-cols-[180px_1fr] bg-slate-800 text-white">

          <div className="px-5 py-4 text-xs font-semibold">
            Topic
          </div>

          <div className="px-5 py-4 text-xs font-semibold">
            Summary
          </div>

        </div>


        {rows.map((row, index) => (
          <div
            key={row.topic}
            className={`grid grid-cols-[180px_1fr] border-t border-slate-200 dark:border-gray-700 ${
              index % 2 === 1
                ? "bg-gray-50 dark:bg-gray-700/40"
                : "bg-white dark:bg-gray-800"
            }`}
          >

            <div className="px-5 py-4 text-sm font-bold text-slate-800 dark:text-white">
              {row.topic}
            </div>

            <div className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {row.summary}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}