import React from "react";

const contactRoutes = [
  {
    question: "Your organization's configuration",
    route: "Your internal admin / support owner",
    note: "Many settings are employer-controlled",
  },
  {
    question: "Your personal work records",
    route: "Your manager or internal support route",
    note: "Records may be managed by your employer",
  },
  {
    question: "Billing or subscription",
    route: "Billing support or account owner",
    note: "Billing access may be limited by role",
  },
  {
    question: "Technical access or login",
    route: "Contact Support",
    note: "Include role, device, and browser details",
  },
  {
    question: "System outage",
    route: "Status page first",
    note: "Check active incidents before opening a ticket",
  },
  {
    question: "Sales or plan questions",
    route: "Contact Sales",
    note: "For demos, enterprise pricing, and procurement",
  },
];

export default function ContactHelp() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Who should I contact?
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
            If self-service guidance does not resolve your issue, use the
            appropriate support route.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:block">
          <table className="w-full">
            <thead className="bg-slate-800 text-left text-sm text-white">
              <tr>
                <th className="px-6 py-4">Your question is about…</th>
                <th className="px-6 py-4">Best route</th>
                <th className="px-6 py-4">Note</th>
              </tr>
            </thead>

            <tbody>
              {contactRoutes.map((item, index) => (
                <tr
                  key={item.question}
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    index % 2 === 1
                      ? "bg-gray-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-slate-300">
                    {item.route}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-slate-300">
                    {item.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-5 lg:hidden">
          {contactRoutes.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.question}
              </h3>

              <p className="mt-3 text-sm">
                <span className="font-semibold text-slate-800 dark:text-white">
                  Best Route:
                </span>{" "}
                <span className="text-gray-600 dark:text-slate-300">
                  {item.route}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-slate-300">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700">
            Contact Support
          </button>

          <p className="mt-6 text-base text-gray-600 dark:text-slate-300">
            For demos, enterprise pricing, procurement, or plan questions:{" "}
            <span className="font-semibold text-teal-600">
              Contact Sales
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}