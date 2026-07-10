import React from "react";

export default function HelpCta() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-blue-950 py-16 dark:from-slate-900 dark:to-black">
      <div className="mx-auto max-w-4xl px-5 text-center">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-500">
          Still Stuck?
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Still need help?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
          Search the Help Center first, review the relevant guide, check
          system status if you're experiencing availability issues, and
          contact support if your question is still unresolved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
            Search Help Articles
          </button>

          <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}