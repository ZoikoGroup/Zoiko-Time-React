import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function InsightsHeroSection() {
  const highlights = [
    'No screenshots',
    'No keystroke content',
    'No worker leaderboards',
    'No hidden productivity scores',
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
            Workforce Record Insights
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans leading-tight">
            Understand workforce records without turning people into{' '}
            <span className="text-emerald-500 dark:text-emerald-400">
              scores
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-xl font-sans">
            Use governed, source-linked insight to understand record patterns, data quality, policy context, and review needs — with visible limitations, worker rights, and human judgment.
          </p>

          {/* Action Buttons */}
          <div className="w-full sm:w-auto pt-2 flex flex-col sm:flex-row gap-3.5">
            <Link href="/request-enterprise-demo" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-base shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 text-center inline-flex items-center justify-center">
              Get a demo
            </Link>
            <Link href="/contact-sales" className="px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-lg text-base transition-all duration-200 text-center inline-flex items-center justify-center">
              Talk to sales
            </Link>
          </div>

          {/* Link Arrow */}
          <div className="pt-1">
            <Link 
              href="/how-zoikotime-works" 
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-sm transition-colors group"
            >
              <span>Explore how ZoikoTime works</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Feature Badges List */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="p-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-normal font-sans">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-lg lg:max-w-none h-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 object-cover"
            src="/work-force-record-insights/image (3).png"
            alt="Workforce Record Insights Preview"
          />
        </div>

      </div>
    </section>
  );
}
