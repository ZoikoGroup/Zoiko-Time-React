import React from "react";

export default function DocCta() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-800 to-blue-950 py-20 transition-colors">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-500">
          Find Your Resource
        </p>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[56px]">
          Need help finding the right ZoikoTime
          <br className="hidden sm:block" />
          resource?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80">
          Talk with the ZoikoTime team, or jump into the Help Center to search
          guides and troubleshooting.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-teal-700">
            Contact Sales
          </button>

          <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">
            Get a Demo
          </button>
        </div>
      </div>
    </section>
  );
}