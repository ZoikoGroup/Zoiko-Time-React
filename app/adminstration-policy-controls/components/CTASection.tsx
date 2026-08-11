'use client';

import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 py-20 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-48 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.3)_0%,transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Category Subtitle */}
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[2.56px] text-teal-400">
          Govern With Confidence
        </p>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[56px]">
          Set the rules once — keep every change
          <br className="hidden sm:inline" /> accountable
        </h2>

        {/* Description */}
        <p className="mt-4 text-base font-normal leading-relaxed text-white/80 max-w-2xl mx-auto">
          See Administration &amp; Policy Controls configured for your organization&apos;s
          <br className="hidden sm:inline" /> policies, jurisdictions, roles, and approvals.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/request-enterprise-demo"
            className="flex h-11 w-full sm:w-auto items-center justify-center rounded-[10px] bg-teal-600 px-6 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition-all hover:bg-teal-500 active:scale-[0.98]"
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/start-free"
            className="flex h-11 w-full sm:w-auto items-center justify-center rounded-[10px] bg-white/10 px-6 text-base font-semibold text-white outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
          >
            Start Free
          </Link>

          <Link
            href="https://getzoikotime.com/"
            className="flex h-11 w-full sm:w-auto items-center justify-center rounded-[10px] bg-white/10 px-6 text-base font-semibold text-white outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
          >
            Explore ZoikoTime
          </Link>
        </div>

        {/* Supporting Details & Notices */}
        <p className="mt-7 text-xs font-normal leading-relaxed text-white/70 max-w-xl mx-auto">
          30-day trial for eligible plans · Human authority remains controlling · Shared responsibility applies.
        </p>

        <p className="mt-6 text-xs font-normal leading-relaxed text-white/60 max-w-2xl mx-auto">
          No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.
        </p>
      </div>
    </section>
  );
}
