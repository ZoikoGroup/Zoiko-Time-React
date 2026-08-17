import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ImplementationHero() {
  const highlights = [
    "Public proof first",
    "Human-governed",
    "No hidden scope",
    "Qualification, not contract",
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left column info */}
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10A28D] dark:text-[#10A28D] block">
            Enterprise Implementation Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-850 dark:text-white leading-[1.15] tracking-tight">
            A governed path from
            <br />
            decision to durable
            <br />
            operation.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            Move from evaluation to a governed implementation path with clear scope, ownership,
            validation, handover, and current qualification - a partnership model, not a promise.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/request-enterprise-demo"
              className="px-7 py-3 text-sm font-bold text-white bg-[#10A28D] rounded-xl shadow-[0px_6px_16px_0px_rgba(16,162,141,0.25)] hover:bg-teal-700 transition-all cursor-pointer inline-flex items-center justify-center"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* highlights pills list */}
          <div className="flex flex-wrap gap-3 pt-4">
            {highlights.map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#C9EAE2] rounded-full dark:bg-slate-900 dark:border-slate-800 select-none"
              >
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column placeholder image */}
        <div className="bg-slate-100 rounded-3xl w-full h-[360px] flex items-center justify-center text-slate-400 text-xs font-semibold select-none border border-gray-200 dark:bg-slate-850 dark:border-slate-800">
          <img className="rounded-xl" src="/blog-insight-pln-implementation/image (10).png" />
        </div>
      </div>
    </div>
  );
}
