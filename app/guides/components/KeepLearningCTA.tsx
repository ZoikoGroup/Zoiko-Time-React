import React from 'react';
import Link from "next/link";

export default function KeepLearningCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Eyebrow Header */}
        <span className="text-teal-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          Keep Learning
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight max-w-3xl">
          Find the guide that fits what you&apos;re trying to do
        </h2>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
          Search by keyword, browse by role, or follow a complete learning path — or{' '}
          <br className="hidden sm:inline" />
          talk to us directly.
        </p>

        {/* Action Buttons Grid / Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 w-full max-w-2xl">
          {/* Primary Button */}
          <a
            href="#search-guides"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-xl shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition-all active:scale-95 text-center min-w-[140px]"
          >
            Search Guides
          </a>

          {/* Secondary Button - Outline */}
          <a
            href="#browse-by-role"
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/30 hover:border-white/60 transition-all active:scale-95 text-center min-w-[150px]"
          >
            Browse by Role
          </a>

          {/* Secondary Button - Glassy */}
          <a
            href="#explore-learning-paths"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all active:scale-95 text-center min-w-[180px]"
          >
            Explore Learning Paths
          </a>

          {/* Secondary Button - Glassy */}
         <Link
  href="/request-a-demo"
  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all active:scale-95 text-center min-w-[130px]"
>
  Get a Demo
</Link>
        </div>

      </div>
    </section>
  );
}