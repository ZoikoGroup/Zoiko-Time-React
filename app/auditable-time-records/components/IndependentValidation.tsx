"use client";

import Link from "next/link";

export default function IndependentValidation() {
  return (
    <section className="w-full bg-white py-10 transition-colors sm:py-12 lg:py-14 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:gap-11 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              Independent Validation
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Proof, Without Overstating It
          </h2>
        </div>

        {/* ================= VALIDATION CARD ================= */}
        <div className="flex w-full flex-col items-center gap-3 rounded-[20px] border border-slate-200 bg-[#3FB97A]/10 px-5 py-8 text-center sm:px-8 sm:py-9 lg:px-11 lg:py-11 dark:border-slate-700 dark:bg-[#3FB97A]/5">
          {/* Main Statement */}
          <h3 className="text-base font-bold leading-7 text-slate-900 sm:text-lg sm:leading-8 dark:text-white">
            Customer stories publish once they&apos;re signed and approved.
          </h3>

          {/* Description */}
          <div className="w-full max-w-[560px] pb-2.5">
            <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
              We only feature a name, logo, or quote with written customer
              approval. Until then, evaluate ZoikoTime on product evidence —
              the actual ledger, lineage, and audit workflows shown above.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/request-a-demo"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-slate-900
              px-6
              py-3.5
              text-base
              font-semibold
              leading-6
              text-white
              transition-colors
              hover:bg-slate-800
              dark:bg-white
              dark:text-slate-900
              dark:hover:bg-slate-200
            "
          >
            Get a demo
          </Link>
        </div>
      </div>
    </section>
  );
}