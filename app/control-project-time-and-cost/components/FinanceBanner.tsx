"use client";

export default function FinanceBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50">
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Financial control — never worker surveillance.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                Project, phase &amp; cost-object views. No productivity
                ranking. No automatic financial judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}