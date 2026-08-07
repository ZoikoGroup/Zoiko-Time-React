"use client";

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40 px-6 py-8 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            One governed view — from approved time to reconciled
            output.
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
            Budgets, forecasts, and variance you can explain, defend,
            and reconcile.
          </p>
        </div>
      </div>
    </section>
  );
}