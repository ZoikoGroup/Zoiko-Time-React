"use client";

import Image from "next/image";

const roles = [
  {
    title: "Finance & Project Accounting",
    description:
      "Versioned rates, budgets, forecasts, variance, and reconciliation evidence.",
    image: "/control-project-time-and-Cost/image1.png",
  },
  {
    title: "Delivery & PS Operations",
    description:
      "Budget consumption, forecast, and exceptions by project, phase, and cost object.",
    image: "/control-project-time-and-Cost/image2.png",
  },
  {
    title: "Ops, Payroll & Procurement",
    description:
      "Approved time and outputs that connect to payroll, billing, and ledgers while remaining separate.",
    image: "/control-project-time-and-Cost/image3.png",
  },
];

export default function RoleCards() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Roles
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Proof for every buyer, on their terms
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Illustrative imagery of the teams this serves—finance,
            delivery, and operations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
          Imagery is illustrative — photos from{" "}
          <span className="font-semibold text-teal-700 dark:text-emerald-400">
            Unsplash
          </span>
          , not depictions of specific ZoikoTime customers.
        </p>
      </div>
    </section>
  );
}