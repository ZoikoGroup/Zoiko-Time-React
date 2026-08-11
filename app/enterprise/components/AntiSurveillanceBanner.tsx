"use client";

import Image from "next/image";
import Link from "next/link";

export default function AntiSurveillanceBanner() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-lg border border-emerald-500/20 bg-green-50 p-8 lg:flex-row lg:items-center lg:justify-between dark:border-emerald-500/30 dark:bg-emerald-950/20">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          
          {/* Icon */}
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500">
            <Image
              src="/enterprise/invasive1.png"
              alt="Binding Commitment"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
              Binding Commitment
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-3xl">
              Govern policy and records – never hidden
              <br className="hidden sm:block" />
              behavior.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              No screenshots, keystroke content, URL history,
              application-name monitoring, or clipboard collection under any
              tier or configuration.
            </p>
          </div>
        </div>

        {/* Right Link */}
        <Link
          href="/responsible-ai"
          className="group inline-flex items-center gap-2 text-base font-semibold text-emerald-500 transition hover:text-emerald-600"
        >
          Read our Anti-Surveillance Principles

          <svg
            className="transition-transform duration-200 group-hover:translate-x-1"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 6L19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}