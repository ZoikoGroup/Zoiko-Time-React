import React from 'react';
import Link from 'next/link';

export default function ReadyWhenYouAre() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto rounded-[20px] bg-slate-900 px-6 sm:px-10 py-12 sm:py-16 flex flex-col items-center gap-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-sm bg-green-400 shrink-0" />
          <span className="text-xs font-bold uppercase leading-5 tracking-widest text-green-400">
            Ready when you are
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[700px] text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight sm:leading-[3rem]">
          Build workforce records people can review and your organization can rely on.
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href="/start-free"
            className="px-6 pt-3 pb-3.5 bg-green-400 hover:bg-green-500 rounded-full text-white text-base font-semibold leading-6 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Start Free
          </Link>
          <Link
            href="/request-enterprise-demo"
            className="px-6 pt-3 pb-3.5 bg-transparent hover:bg-white/5 border border-white/40 rounded-full text-white text-base font-semibold leading-6 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Request Enterprise Demo
          </Link>
        </div>

        {/* Boundary Footnote */}
        <p className="max-w-[680px] text-center text-xs sm:text-sm text-white/50 leading-6">
          Deterministic classification. Human review. Evidence history. No screenshots, keystroke
          capture, URL monitoring, application-name monitoring, or clipboard collection — ever.
        </p>

      </div>
    </section>
  );
}
