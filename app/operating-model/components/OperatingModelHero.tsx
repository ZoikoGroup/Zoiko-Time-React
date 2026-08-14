import React from "react";

export default function HeroOperatingModelSection() {
  return (
    <section className="w-full relative bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 py-16 lg:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 z-10">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Operating Model
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
            The right model for distributed work – provable at any moment
          </h1>

          <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed max-w-xl">
            From approved expectations to reviewable outcomes. See how schedules,
            context, time records, availability, exceptions and approvals move
            through one accountable lifecycle.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="/request-enterprise-demo">
            <button className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-base rounded-xl shadow-md transition-colors cursor-pointer">
              Request Enterprise Demo
            </button></a>
            <a href="/start-free">
            <button className="px-6 py-3 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-base rounded-xl transition-colors cursor-pointer">
              Start Free
            </button></a>
          </div>
        </div>

        {/* Right Column: Background Image with Card Overlay */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <img
              src="/operating-model/hero-]image.png"
              alt="Distributed Work Environment"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            {/* Subtle Gradient Overlay on top of image to make card pop */}
            <div className="absolute inset-0 bg-slate-900/20" />
          </div>

          {/* Floating Card Overlayed On Top */}
          <div className="relative z-10 w-full max-w-[500px] mx-4 p-6 sm:p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-6">
            
            {/* Window Header */}
            <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block" />
                <span className="w-3 h-3 bg-amber-400 rounded-full inline-block" />
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block" />
              </div>
              <span className="text-xs text-gray-500 dark:text-slate-400 font-mono">
                zoikotime.com/operating-model
              </span>
            </div>

            {/* Scope Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-gray-50 dark:bg-slate-800/80 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 dark:text-slate-400 uppercase font-semibold">
                  Workforce Scope
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  Global Dev Team
                </span>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-slate-800/80 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 dark:text-slate-400 uppercase font-semibold">
                  Active Schedule
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  9/80 Flexible
                </span>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-slate-800/80 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 dark:text-slate-400 uppercase font-semibold">
                  Approved Pattern
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  Core Core Core
                </span>
              </div>
            </div>

            {/* Governance Flow Status */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Governance Flow Status
              </span>
              <div className="w-full h-3 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full"
                  style={{ width: "76%" }}
                />
              </div>
              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-teal-600 dark:text-teal-400 font-semibold">
                  76% Verified &amp; Governed
                </span>
                <span className="text-gray-500 dark:text-slate-400">
                  24% Awaiting Context
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}