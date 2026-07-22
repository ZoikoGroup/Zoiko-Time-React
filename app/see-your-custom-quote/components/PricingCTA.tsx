"use client";

import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="bg-gradient-to-r from-[#0E1F3D] to-[#14264A] py-16 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-500 sm:text-base">
            Let's Talk Numbers
          </p>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Get pricing built for your organization
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80">
            Share the essentials and ZoikoTime returns a sales-ready
            recommendation—or talk it through with a pricing specialist.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/see-your-custom-quote#your-custom-quote"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:w-auto"
            >
              Request My Custom Quote
            </Link>

            <Link
              href="/request-tailored-demo"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              Book a Pricing Consultation
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}