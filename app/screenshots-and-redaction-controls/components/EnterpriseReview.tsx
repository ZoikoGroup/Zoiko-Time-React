// components/EnterpriseReview.tsx

import React from "react";
import Link from "next/link";

export default function EnterpriseReview() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-blue-950 py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-400 sm:text-base">
          Enterprise Review
        </p>

        {/* Heading */}
        <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Use screenshot context responsibly
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Talk with the ZoikoTime team about responsible screenshot
          configuration, redaction safeguards, access controls, retention, and
          worker transparency.
        </p>

        {/* Buttons */}
<div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">

  {/* Get a Demo */}
  <Link
    href="/request-a-demo"
    className="w-full rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 sm:w-auto inline-flex items-center justify-center"
  >
    Get a Demo
  </Link>

  {/* Contact Sales */}
  <Link
    href="/contact-sales"
    className="w-full rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto inline-flex items-center justify-center"
  >
    Contact Sales
  </Link>

</div>
      </div>
    </section>
  );
}