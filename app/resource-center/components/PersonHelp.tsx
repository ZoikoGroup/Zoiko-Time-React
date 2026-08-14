"use client";

import Image from "next/image";
import Link from "next/link";

export default function PersonHelp() {
  return (
    <section className="w-full bg-gray-50 px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(11,18,32,0.06)] sm:p-8 lg:grid-cols-2 lg:p-12 dark:border-white/10 dark:bg-white/[0.03]">
        
        {/* Content */}
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-500">
            Discovery first
          </span>

          <h2 className="mt-2.5 text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            Still need a person?
          </h2>

          <p className="mt-3 max-w-[643px] text-base font-normal leading-7 text-gray-600 dark:text-gray-300">
            Support, documentation, and trust evidence come first and are
            never gated. A commercial conversation is available when you want
            one — not as a replacement for content that should exist.
          </p>

          <Link
            href="/help-center"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-emerald-400 px-6 text-base font-bold text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-[#0b1220]"
          >
            Visit Help Center
          </Link>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-gray-100 shadow-[0px_18px_50px_0px_rgba(11,18,32,0.10)] dark:border-white/10 dark:bg-white/5">
            <Image
              src="/resource-center/person-help.png"
              alt="ZoikoTime support and help resources"
              width={461}
              height={444}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}