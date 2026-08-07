"use client";

import Image from "next/image";

export default function EvidenceOverview() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8">
        {/* Intro Card */}
        <div className="w-full max-w-[840px] rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 dark:border-emerald-900 dark:bg-emerald-500/10">
          <p className="text-base font-medium leading-7 text-slate-800 dark:text-slate-200">
            The Evidence Center gives procurement, legal, security, and
            privacy teams a governed way to find, request, and track the
            documentation ZoikoTime maintains — with clear access classes,
            versioning, and human review at every step.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-[20px] shadow-[0px_10px_30px_rgba(14,31,61,0.10)]">
          <Image
            src="/procurement-and-legal-resources/image.png"
            alt="Evidence Center"
            width={1132}
            height={431}
            className="h-auto w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-transparent px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
              Diligence, done together
            </p>

            <p className="mt-2 max-w-[560px] text-base font-medium leading-7 text-white">
              Every document in the registry is built for the conversation
              that follows — reviewed with your team, not handed over cold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}