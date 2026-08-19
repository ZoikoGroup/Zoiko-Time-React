"use client";

import React from "react";
import Link from "next/link";

export default function PricingEnterpriseCTA() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-10 text-center transition-colors duration-300 dark:from-slate-900 dark:to-black sm:px-10">

          {/* Heading */}
          <h2 className="text-2xl font-bold leading-10 text-white">
            Need private architecture or a contract?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[560px] text-sm leading-6 text-white/80">
            Enterprise includes dedicated tenancy, custom data residency,
            white-glove implementation, and SLA guarantees — scoped and
            priced to your organization.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Request Enterprise Quote */}
            <Link
              href="/request-enterprise-demo"
              className="flex h-11 w-full max-w-[240px] items-center justify-center rounded-[10px] bg-teal-600 px-5 text-sm font-semibold leading-4 text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] outline outline-1 outline-transparent transition-all duration-200 hover:bg-teal-700 focus:outline-teal-400"
            >
              Request Enterprise Quote
            </Link>

            {/* Talk to Sales */}
            <Link
              href="/contact-sales"
              className="flex h-11 w-full max-w-[160px] items-center justify-center rounded-[10px] bg-white/10 px-5 text-sm font-semibold leading-4 text-white outline outline-1 outline-white/30 transition-all duration-200 hover:bg-white/20 focus:outline-white/50"
            >
              Talk to Sales →
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}