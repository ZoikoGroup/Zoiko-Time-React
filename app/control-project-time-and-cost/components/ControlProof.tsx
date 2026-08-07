"use client";

import {
  FiCheckSquare,
  FiDollarSign,
  FiBarChart2,
  FiEdit3,
  FiRefreshCw,
} from "react-icons/fi";

const cards = [
  {
    title: "Approved time",
    icon: FiCheckSquare,
  },
  {
    title: "Versioned rates",
    icon: FiDollarSign,
  },
  {
    title: "Budget & forecast",
    icon: FiBarChart2,
  },
  {
    title: "Controlled adjustments",
    icon: FiEdit3,
  },
  {
    title: "Reconciled outputs",
    icon: FiRefreshCw,
  },
];

export default function ControlProof() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Control Proof
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Time and cost are related —
            <br className="hidden sm:block" />
            not interchangeable
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            ZoikoTime keeps payable time, project effort, internal cost,
            billable value, budget, forecast, and reconciliation as distinct,
            governed measures.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}