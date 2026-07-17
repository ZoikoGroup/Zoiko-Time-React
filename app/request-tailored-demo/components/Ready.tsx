"use client";

import Link from "next/link";

export default function Ready() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400 sm:text-base">
          Ready When You Are
        </p>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.4] lg:text-4xl">
          Ready to see ZoikoTime against your real
          <br className="hidden sm:block" /> workforce challenges?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          Request a tailored demo and speak with the ZoikoTime team about your
          workforce model, compliance needs, reporting requirements, and rollout
          path.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("demo-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-[10px] bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:text-base"
          >
            Request Tailored Demo
          </button>

          <Link
            href="/calculate-your-roi"
            className="rounded-[10px] border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20 sm:text-base"
          >
            Calculate Your ROI
          </Link>
        </div>
      </div>
    </section>
  );
}