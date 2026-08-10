"use client";

import Link from "next/link";

export default function EnterpriseTrust() {
  return (
    <section className="w-full px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-sky-950">
        <div className="relative px-8 py-8 sm:px-10 lg:px-8">

          {/* Content */}
          <div className="max-w-[600px]">
            {/* Label */}
            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-emerald-500">
              Enterprise Trust
            </p>

            {/* Heading */}
            <h2 className="mt-2 text-2xl font-extrabold leading-8 text-white">
              Evidence stays authoritative.
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm font-normal leading-5 text-white/80">
              Security, Privacy, Anti-Surveillance Principles, Human-in-Command
              Controls, AI Governance, and System Status route to the canonical
              Trust &amp; Governance surfaces.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:absolute lg:right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
            <Link
              href="/trust-center"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-emerald-500 px-6 text-sm font-bold leading-5 text-white transition hover:bg-emerald-600"
            >
              Visit Trust Center →
            </Link>

            <Link
              href="/procurement-and-legal-resources"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-white/30 px-6 text-sm font-bold leading-5 text-white transition hover:bg-white/10"
            >
              Review Procurement
            </Link>
          </div>

          {/* Decorative Shape */}
          <div className="pointer-events-none absolute -right-2 bottom-0 hidden h-28 w-28 opacity-20 lg:block">
            <div className="absolute left-3 top-2 h-24 w-20 bg-white" />
          </div>

        </div>
      </div>
    </section>
  );
}