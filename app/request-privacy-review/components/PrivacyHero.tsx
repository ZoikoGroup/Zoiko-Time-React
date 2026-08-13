import React from 'react';
import Link from 'next/link';

export default function PrivacyHero() {
  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 pt-12 pb-16 px-4 sm:px-8 lg:px-16 xl:px-40 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left Content Area */}
        <div className="flex flex-col items-start gap-3">
          <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Trust · Privacy
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
            Privacy you can read first — then question
          </h1>

          <p className="pt-px max-w-[500px] text-base text-gray-500 dark:text-slate-400 leading-7">
            Here&apos;s what ZoikoTime collects, why, who can see it, and what we never touch. When you
            want a closer look, you can request a privacy review — a calm, human path, not a sales
            form.
          </p>

          <div className="pt-2">
            <Link
              href="#request-a-privacy-review"
              className="min-h-11 px-6 py-3.5 bg-green-400 hover:bg-green-500 rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Request Privacy Review
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full rounded-[20px] shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] overflow-hidden">
          <img
            className="w-full h-72 sm:h-96 object-cover"
            src="/request-privacy-review/hero-privacy.png"
            alt="Two colleagues reviewing notes and a laptop together at a desk"
          />
        </div>

      </div>
    </section>
  );
}
