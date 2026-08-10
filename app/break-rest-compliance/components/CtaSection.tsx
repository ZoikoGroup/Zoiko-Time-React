import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1116px] mx-auto relative overflow-hidden bg-[#0B1528] rounded-[24px] p-8 sm:p-12 lg:p-16 border border-slate-800/80 shadow-2xl text-center flex flex-col items-center justify-center gap-8">
        
        {/* Subtle Background Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(14, 159, 110, 0.35), transparent 70%)'
          }}
        />

        {/* Text Container */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-[640px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Give your break policy a record it can stand behind.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[520px]">
            Deploy ZoikoTime to give your break policy structure, auditability, and trust across teams.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            href="/start-free"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-full shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0B1528]"
          >
            Start free trial
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/request-a-demo"
            className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-full border border-white/15 backdrop-blur-xs transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Request a demo
          </Link>

          {/* Tertiary CTA / Link */}
          <a
            href="/product-documentation"
            className="w-full sm:w-auto px-6 py-3 text-slate-300 hover:text-white font-medium text-sm transition-colors duration-150"
          >
            Explore documentation →
          </a>
        </div>

      </div>
    </section>
  );
}