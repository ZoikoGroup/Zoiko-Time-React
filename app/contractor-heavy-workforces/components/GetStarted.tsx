"use client";

import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#123B55] via-[#16345F] to-[#142B56] px-6 py-14 text-center sm:px-10 sm:py-16 lg:rounded-[30px] lg:px-16 lg:py-[70px]">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative mx-auto flex max-w-[850px] flex-col items-center">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />

                <span className="text-[10px] font-semibold uppercase leading-4 tracking-[0.18em] text-teal-300 sm:text-xs">
                  Get Started
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[760px] text-3xl font-semibold leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-[32px] lg:leading-[1.45]">
                Give every contractor engagement a record you can trust.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-sm font-normal leading-6 text-slate-300 sm:text-[13px]">
                See how ZoikoTime governs contractor, project, and time
                records — or start free and configure your first engagement.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-green-400 px-6 py-2.5 text-sm font-semibold leading-5 text-white transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-[#16345F]"
                >
                  Start Free
                </Link>

                <Link
                  href="/request-enterprise-demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-400/60 bg-transparent px-6 py-2.5 text-sm font-semibold leading-5 text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Request Enterprise Demo
                </Link>

                <Link
                    href="/platform"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-400/60 bg-transparent px-6 py-2.5 text-sm font-semibold leading-5 text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Explore the Platform
                </Link>
              </div>

              {/* Privacy note */}
              <p className="mt-5 text-[10px] font-normal leading-4 text-slate-400 sm:text-xs">
                Privacy-first — not classification, payroll, or surveillance
                software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
