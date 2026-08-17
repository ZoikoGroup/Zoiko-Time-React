import React from "react";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left Info */}
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-650 dark:text-teal-405 block">
            Human-in-Command Controls
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-850 dark:text-white leading-[1.15] tracking-tight">
            Classification &amp; <span className="text-teal-605">AI Boundaries</span>
          </h1>
          <p className="text-slate-550 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            See what ZoikoTime calculates, what approved AI may assist with, what Kairos can explain, and where an authorized person must decide.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/request-enterprise-demo">
<button
              className="px-7 py-3 text-sm font-bold text-white bg-[#10A28D] rounded-xl shadow-[0px_6px_16px_0px_rgba(16,162,141,0.25)] hover:bg-teal-700 transition-all cursor-pointer"
            >
              Request Enterprise Demo
              </button>
            </Link>
            <Link
              href="/start-free">
                <button
              className="px-7 py-3 text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-white transition-all cursor-pointer"
            >
              Start Free
              </button>
            </Link>
          </div>

          {/* Subtitle bottom note */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-405 pt-2">
            <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-405 shrink-0">
              <ShieldAlert className="h-2.5 w-2.5" />
            </div>
            <span>Human authority remains controlling · Access decisions are attributable</span>
          </div>
        </div>

        {/* Right side placeholder with floating card */}
        <div className="relative w-full h-[360px] bg-slate-100 rounded-3xl overflow-hidden border border-gray-200 dark:bg-slate-850 dark:border-slate-800 flex items-center justify-center select-none text-slate-400 text-xs font-semibold">
          <img src="/classificationa-i/image (11).png"/>

          {/* Top floating pill */}
          <div className="absolute top-5 right-5 px-3 py-1.5 bg-slate-800/90 dark:bg-slate-950/90 rounded-full text-white text-[10px] font-bold tracking-wide shadow-sm">
            Deterministic · Policy-bound
          </div>

          {/* Mid-bottom floating card */}
          <div className="absolute bottom-5 left-5 w-60 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-gray-150 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500">
                Classification Trace
              </span>
              <span className="bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400 rounded-md px-1.5 py-0.5 text-[9px] font-bold">
                Verified
              </span>
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-850 dark:text-white">
                Standard - 8h Active
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Rule matched: USA_CA_Overtime_V2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
