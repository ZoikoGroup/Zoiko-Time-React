import React from "react";
import { Sparkles, Calendar, BadgeCheck, FileText } from "lucide-react";

export default function ExplainClassificationCta() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7.5xl">
        <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/60 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-650 dark:text-emerald-400">
                Evidence before conversion
              </span>
              <h2 className="text-3xl font-extrabold leading-snug text-slate-900 dark:text-white sm:text-4xl">
                Explain a classification without asking anyone to trust it
              </h2>
              <p className="text-sm text-gray-550 dark:text-gray-300 leading-relaxed max-w-xl">
                See how a pinned historical policy, an applicability path, an ordered rule trace,
                and a stated human boundary make a time record explainable years after it was
                created.
              </p>
              <a href="/request-enterprise-demo">
              <button className="group inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-emerald-650 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                Request Enterprise Demo
              </button></a>
            </div>

            {/* Right Graphic CSS Placeholder (Mockup Checklist) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] rounded-2xl  ">
                <img src="/policy-evidence/div.mock (5).png"></img>
                </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
