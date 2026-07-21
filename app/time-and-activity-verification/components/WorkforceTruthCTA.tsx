import React from "react";
import Link from "next/link";

export default function WorkforceTruthCTA() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-blue-950 dark:from-slate-950 dark:to-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Label */}
        <p className="text-sm md:text-base font-semibold uppercase tracking-[2.5px] text-teal-500">
          Workforce Truth
        </p>

        {/* Heading */}
        <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-white">
          Verify the work behind the time
        </h2>

        {/* Description */}
        <p className="mt-6 text-base leading-7 text-white/80 max-w-2xl mx-auto">
          Talk with the ZoikoTime team about governed time and activity
          verification, exception workflows, and audit-ready evidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Get a Demo */}
  <Link
    href="/request-a-demo"
    className="w-full sm:w-auto rounded-xl bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 inline-flex items-center justify-center"
  >
    Get a Demo
  </Link>

  {/* Start Free Trial */}
  <Link
    href="/start-free"
    className="w-full sm:w-auto rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 inline-flex items-center justify-center"
  >
    Start Free Trial
  </Link>

        </div>

      </div>
    </section>
  );
}