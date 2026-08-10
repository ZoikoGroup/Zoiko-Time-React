import Link from "next/link";
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalConversionBanner() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0px_8px_24px_0px_rgba(11,18,32,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
              Build a more controlled operating rhythm
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              See How ZoikoTime Fits Your Teams, Systems, and Policies
            </h2>

            <p className="max-w-[560px] text-slate-600 text-base leading-relaxed">
              Review your operating model, exception workflows, project structures, worker experience, integrations, and rollout requirements with the ZoikoTime enterprise team.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
              >
                Request Enterprise Demo
              </Link>
              
              <Link
                href="/start-free"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 border border-slate-200 font-bold text-base rounded-lg transition-colors shadow-xs"
              >
                Start Free
              </Link>
            </div>

            {/* Link Anchor */}
            <div className="pt-1">
              <a
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm transition-colors group"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Key Assurance Highlights */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 mt-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>No screenshots.</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>No keystroke capture.</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>Human review remains in control.</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              className="w-full max-w-[461px] h-auto object-cover rounded-[20px]"
              src="/operational-leaders/div.mock (2).png"
              alt="ZoikoTime Enterprise Integration Platform Preview"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
