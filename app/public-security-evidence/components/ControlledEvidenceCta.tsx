import React from 'react';
import Link from 'next/link';

export default function ControlledEvidenceCta() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">

          {/* Copy */}
          <div className="flex flex-col items-start gap-4">

            <span className="text-xs font-bold uppercase tracking-wider text-[#2e8b57] dark:text-green-400">
              After the evidence, not before it
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
              Need something that is not published here?
            </h2>

            <p className="max-w-lg text-sm leading-7 text-zinc-700 dark:text-slate-300 sm:text-base">
              Controlled and customer-specific artifacts require an approved access process
              — identity, purpose, and entitlement — because of what they contain, not
              because of the sales opportunity. Public evidence above stays open either way.
            </p>

            <Link
              href="/request-a-demo"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-600 hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Get Demo
            </Link>

          </div>

          {/* Illustration */}
          <div className="flex w-full justify-center lg:justify-end">
            <img
              className="h-auto w-full max-w-lg rounded-2xl object-cover"
              src="/public-security-evidence/controlled-request.png"
              alt="A reviewer at a desk considering a request routed through approved channels rather than a sales form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
