'use client';

import React from 'react';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function TrustNoticeBanner() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-[900px]">
        <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-6 sm:p-8 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:bg-gray-900 dark:border dark:border-gray-800">
          
          {/* Background Radial Gradient Overlay */}
          <div 
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]" 
            aria-hidden="true" 
          />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
            
            {/* Icon Container */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 dark:bg-white/5">
              <Lock className='text-teal-400'></Lock>
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-1.5">
              {/* Category Subtitle */}
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400 dark:text-teal-300">
                Administration never means surveillance
              </p>

              {/* Main Text & Link */}
              <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
                No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.{' '}
                <Link
                  href="/trust"
                  className="inline-flex items-center font-semibold text-teal-400 transition-colors hover:text-teal-300 dark:text-teal-400 dark:hover:text-teal-200"
                >
                  Visit Trust Center &rarr;
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}